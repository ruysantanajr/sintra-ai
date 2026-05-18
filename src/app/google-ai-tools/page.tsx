"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain, Video, Briefcase, Zap, Code, Layers, Globe, Wand2, ArrowLeft,
} from "lucide-react";
import { BASE_PATH } from "@/lib/data";

const CATEGORIES = [
  {
    id: "core",
    name: "Core & Research",
    num: "01",
    icon: Brain,
    accent: "#9F8CFF",
    tools: [
      { name: "Gemini",      desc: "Google's primary AI chatbot for questions, image generation, and file creation.", feature: "Multi-modal interaction and Google Ecosystem integration.", url: "https://gemini.google.com" },
      { name: "Notebook LM", desc: "AI-powered research assistant that organises sources into notebooks.", feature: "Creates infographics, slide decks, and audio overviews from sources.", url: "https://notebooklm.google.com" },
      { name: "Illuminate",  desc: "Advanced audio dialogue generator based on provided sources.", feature: "Deep customisation of host/guest voices and conversation style.", url: "https://illuminate.google.com" },
    ],
  },
  {
    id: "creative",
    name: "Creativity & Media",
    num: "02",
    icon: Video,
    accent: "#F08CA8",
    tools: [
      { name: "Google Vids",           desc: "Online video editing tool with AI generation capabilities.", feature: "AI voiceovers and automated storyboard-to-video conversion.", url: null },
      { name: "Google Flow (Images/Video)", desc: "Professional-grade generative tool for precise visual control.", feature: "Aspect ratio control, model selection, and annotation editing.", url: null },
      { name: "Google Flow Music",     desc: "AI-driven music production tool with an interactive voice mode.", feature: "Real-time song collaboration through natural language.", url: null },
      { name: "Music Effects DJ",      desc: "Interactive music exploration and remixing tool.", feature: "Prompt-based instrument adding and BPM control.", url: null },
    ],
  },
  {
    id: "business",
    name: "Business & Productivity",
    num: "03",
    icon: Briefcase,
    accent: "#E8C089",
    tools: [
      { name: "Pamelli",         desc: "Business DNA extractor for marketing assets.", feature: "Analyses website to generate brand colours, fonts, and social media posts.", url: null },
      { name: "Workspace Studio", desc: "Automation engine for Google Workspace — trigger-based flows.", feature: "Gmail, Chat, and Form response automations like Zapier.", url: null },
      { name: "CC",              desc: "Personal productivity agent for morning reports.", feature: "Automatic synthesis of Gmail, Calendar, and Drive updates.", url: null },
      { name: "Learn Your Way",  desc: "Personalised learning platform for textbooks.", feature: "Transforms static text into dynamic quizzes, slides, and mind maps.", url: null },
    ],
  },
  {
    id: "experimental",
    name: "Experimental & Beta",
    num: "04",
    icon: Zap,
    accent: "#F2C46D",
    tools: [
      { name: "Project Genie", desc: "Generative immersive virtual world engine.", feature: "Text-to-world generation with real-time navigation.", url: null },
      { name: "Disco",         desc: "AI-native browser that turns tabs into interactive apps.", feature: "Consolidates open-tab information into a custom mini-app.", url: null },
      { name: "Mixboard",      desc: "Interactive canvas for creative mood-boarding.", feature: "Blends text and image prompts to refine visual concepts.", url: null },
    ],
  },
  {
    id: "developer",
    name: "Developer & Coding",
    num: "05",
    icon: Code,
    accent: "#8FE3D2",
    tools: [
      { name: "Google AI Studio", desc: "Prototyping playground for Gemini models.", feature: "Direct access to Gemini Nano, Flash, Pro and specialised models.", url: "https://aistudio.google.com" },
      { name: "Opal",            desc: "User-friendly vibe-coding app builder.", feature: "Creates functional apps directly within the Gemini ecosystem.", url: null },
      { name: "Anti-gravity",    desc: "Local AI agent for macOS file interaction.", feature: "Direct local file updates and third-party integration.", url: null },
      { name: "Firebase Studio", desc: "Fullstack AI development environment.", feature: "Unified backend and frontend build for mobile apps.", url: null },
      { name: "Jewels",          desc: "Autonomous agent coding system.", feature: "End-to-end autonomous code generation and implementation.", url: null },
    ],
  },
  {
    id: "integrated",
    name: "Integrated Features",
    num: "06",
    icon: Layers,
    accent: "#B6A6FF",
    tools: [
      { name: "AI Search & Chrome", desc: "AI mode in Google Search and 'Ask Gemini' browser sidebar.", feature: "Auto-browse navigation and repeatable prompt 'Skills'.", url: null },
      { name: "Gmail AI",           desc: "AI Inbox and 'Help me write' assistant.", feature: "Automatic categorisation and draft polishing.", url: null },
      { name: "Drive & Docs",       desc: "Project-based AI chat and Gemini integration in Docs/Sheets.", feature: "Canvas for interactive dashboards and automated formula building.", url: null },
      { name: "Google Meet",        desc: "AI-powered meeting notes and real-time translation.", feature: "Automated transcription and cross-language communication.", url: null },
    ],
  },
];

const catVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function GoogleAiToolsPage() {
  return (
    <div className="min-h-screen bg-abyss text-fg-1" style={{ fontFamily: "var(--font-sans)" }}>

      {/* Ambient blobs */}
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #9F8CFF, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #8FE3D2, transparent 70%)" }} />
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #F08CA8, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Nav back */}
        <div className="pt-10 pb-6">
          <a
            href={`${BASE_PATH}/`}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-fg-3 hover:text-violet-bright transition-colors duration-140 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-140" />
            Back to Sintra
          </a>
        </div>

        {/* Hero */}
        <motion.header
          className="pt-6 pb-16 md:pb-20 border-b border-violet/[0.12]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex gap-3.5 items-center mb-6">
            <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
            <span className="eyebrow violet">Google AI Ecosystem</span>
          </div>
          <h1 className="font-serif font-light text-[clamp(40px,6vw,88px)] leading-[1.04] tracking-[-0.025em] text-fg-1 mb-5">
            Every Google AI tool,{" "}
            <em className="italic" style={{
              backgroundImage: "linear-gradient(180deg, #F4F2EA 0%, #9F8CFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              explained.
            </em>
          </h1>
          <p className="font-sans text-[17px] text-fg-2 max-w-xl leading-[1.55]">
            A curated map of the most powerful AI tools from Google — from core research
            assistants to experimental world-generators.
          </p>
          <div className="flex items-center gap-4 mt-8 font-mono text-[11px] text-fg-3 tracking-[0.06em]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Updated May 2026
            </span>
            <span className="text-fg-4">·</span>
            <span>{CATEGORIES.reduce((s, c) => s + c.tools.length, 0)} tools across {CATEGORIES.length} categories</span>
          </div>
        </motion.header>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-violet/[0.08] border-x border-b border-violet/[0.08] mb-20">
          {CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.section
                key={cat.id}
                custom={catIdx}
                variants={catVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-abyss p-6 md:p-8 flex flex-col gap-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 pb-4 border-b border-hairline">
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-[4px] shrink-0"
                    style={{ background: `${cat.accent}18`, border: `1px solid ${cat.accent}30`, color: cat.accent }}
                  >
                    <Icon size={16} />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-fg-4">{cat.num}</span>
                    <h2 className="font-serif font-normal text-[20px] leading-tight tracking-[-0.01em] text-fg-1">
                      {cat.name}
                    </h2>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-col gap-3">
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className={`group p-4 rounded-[4px] border transition-all duration-200 ${tool.url ? "bg-white/[0.025] border-hairline hover:border-violet/40 hover:bg-white/[0.04]" : "bg-white/[0.012] border-hairline/50 opacity-70 hover:opacity-90"}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-sans font-medium text-[14px] text-fg-1 leading-tight">
                            {tool.name}
                          </h3>
                          {tool.url ? (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] px-1.5 py-0.5 rounded-full border border-green-500/40 text-green-400 bg-green-500/10 uppercase tracking-[0.08em]">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Live
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] px-1.5 py-0.5 rounded-full border border-amber-500/40 text-amber-400/80 bg-amber-500/08 uppercase tracking-[0.08em]">
                              Coming soon
                            </span>
                          )}
                        </div>
                        {tool.url && (
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 p-1 rounded text-fg-4 hover:text-violet-bright hover:bg-violet/[0.08] transition-colors"
                            aria-label={`Open ${tool.name}`}
                          >
                            <Globe size={12} />
                          </a>
                        )}
                      </div>
                      <p className="font-sans text-[12.5px] text-fg-3 leading-[1.5] mb-3">
                        {tool.desc}
                      </p>
                      <div
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-1 rounded-[2px]"
                        style={{ background: `${cat.accent}10`, color: cat.accent, border: `1px solid ${cat.accent}20` }}
                      >
                        <Wand2 size={9} />
                        <span>{tool.feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Footer note */}
        <footer className="pb-20 text-center">
          <p className="font-sans text-[13px] text-fg-4 leading-[1.6] max-w-md mx-auto">
            The Google AI landscape evolves rapidly. Most tools are available via
            Google Workspace or experimental lab accounts.
          </p>
          <a href={`${BASE_PATH}/`} className="btn btn-ghost mt-6 inline-flex">
            ← Back to Sintra use cases
          </a>
        </footer>
      </div>
    </div>
  );
}
