#!/usr/bin/env node
/**
 * Fetches recent AI news via Claude + web search and appends new items to newsData.ts.
 * Runs daily in CI. Safe to run manually — won't duplicate existing IDs.
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_FILE = join(__dirname, "../src/lib/newsData.ts");

const client = new Anthropic();

// Date window: search last 9 days to handle weekends/gaps
const today = new Date();
const since = new Date(today.getTime() - 9 * 24 * 60 * 60 * 1000);
const todayStr = today.toISOString().slice(0, 10);
const sinceStr = since.toISOString().slice(0, 10);

// Read existing file and extract all IDs to avoid duplicates
const source = readFileSync(DATA_FILE, "utf8");
const existingIds = new Set(
  [...source.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1])
);

const SYSTEM = `You maintain an AI news database for a developer-focused site called Sintra Tesseract.
Your job is to find real, factual, verifiable AI news events and output them as structured JSON.
Only include genuinely significant events: major model releases, landmark benchmarks, key product launches, or important industry events.
Accuracy is critical — never fabricate. If a detail is uncertain, omit it rather than guess.
Output ONLY a JSON array. No markdown fences, no explanation, no preamble.`;

const USER = `Search the web for significant AI news events from ${sinceStr} to ${todayStr}.

Focus on:
- New model releases or major updates (GPT, Claude, Gemini, LLaMA, Mistral, DeepSeek, Grok, etc.)
- Record-breaking benchmark results
- Major product launches (agents, tools, APIs)
- Key industry events (acquisitions, funding, partnerships, policy)

Companies to cover: OpenAI, Anthropic, Google/DeepMind, Meta, Microsoft, Apple, Mistral AI, DeepSeek, xAI, Nvidia, and others.

IDs already in the database (skip any event with these IDs):
${[...existingIds].slice(-30).join(", ")}

For each significant event, return a JSON object with these exact fields:
{
  "id": "kebab-case-unique-id",
  "date": "Mon YYYY",
  "dateNum": YYYYMM,
  "title": "Concise factual title — 10 words max",
  "summary": "2–3 sentences. Factual. Include specific numbers and benchmarks where available. No marketing language.",
  "tags": ["Company", "ModelName", "Feature", "Category"],
  "significance": "landmark OR major OR notable",
  "provider": "Company Name",
  "providerColor": "#hexcolor"
}

Provider hex colors:
OpenAI=#10a37f, Anthropic=#d97706, Google=#4285f4, Meta=#0866ff,
Microsoft=#0078d4, Apple=#555555, Mistral AI=#ff7000, DeepSeek=#1a73e8, xAI=#000000, Nvidia=#76b900

Significance guide:
- landmark: changes the trajectory of the field (rare, ~2-3 per year)
- major: significant release or event most practitioners should know
- notable: worth tracking but not world-changing

Return ONLY a valid JSON array. Example:
[
  { "id": "example-event", "date": "May 2026", "dateNum": 202605, "title": "...", "summary": "...", "tags": ["..."], "significance": "major", "provider": "OpenAI", "providerColor": "#10a37f" }
]

If no significant events were found in the date range, return an empty array: []`;

function itemToTs(item) {
  const tags = item.tags.map((t) => `"${t}"`).join(", ");
  return `  {
    id: "${item.id}",
    date: "${item.date}",
    dateNum: ${item.dateNum},
    title: "${item.title.replace(/"/g, '\\"')}",
    summary:
      "${item.summary.replace(/"/g, '\\"')}",
    tags: [${tags}],
    significance: "${item.significance}",
    provider: "${item.provider}",
    providerColor: "${item.providerColor}",
  },`;
}

async function main() {
  console.log(`Searching for AI news from ${sinceStr} to ${todayStr}...`);

  let response;
  try {
    response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      system: SYSTEM,
      messages: [{ role: "user", content: USER }],
    });
  } catch (err) {
    console.error("Anthropic API error:", err.message);
    process.exit(1);
  }

  // Collect text blocks from the response
  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  if (!text.trim()) {
    console.log("No text output from model.");
    return;
  }

  // Parse JSON — strip any accidental markdown fences
  const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  let items;
  try {
    items = JSON.parse(cleaned);
  } catch {
    // Try to extract JSON array from mixed text
    const match = cleaned.match(/\[[\s\S]*\]/);
    if (!match) {
      console.log("Could not parse JSON from response.");
      console.log("Raw output:", text.slice(0, 500));
      return;
    }
    items = JSON.parse(match[0]);
  }

  if (!Array.isArray(items) || items.length === 0) {
    console.log("No new items returned.");
    return;
  }

  // Filter out duplicates and validate required fields
  const newItems = items.filter((item) => {
    if (!item.id || !item.title || !item.date || !item.summary) return false;
    if (existingIds.has(item.id)) {
      console.log(`Skipping duplicate: ${item.id}`);
      return false;
    }
    return true;
  });

  if (newItems.length === 0) {
    console.log("All returned items already exist in the database.");
    return;
  }

  // Build TypeScript entries
  const tsEntries = newItems.map(itemToTs).join("\n");
  const dateComment = `\n  // ── Auto-updated ${todayStr} ────────────────────────────────────────────\n\n`;

  // Insert before the closing ]; of the AI_NEWS array
  const insertPoint = source.lastIndexOf("];");
  if (insertPoint === -1) {
    console.error("Could not find closing ]; in newsData.ts");
    process.exit(1);
  }

  const updated =
    source.slice(0, insertPoint) +
    dateComment +
    tsEntries +
    "\n" +
    source.slice(insertPoint);

  writeFileSync(DATA_FILE, updated, "utf8");
  console.log(`✓ Added ${newItems.length} new item(s): ${newItems.map((i) => i.id).join(", ")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
