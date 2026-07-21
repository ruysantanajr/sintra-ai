# Sintra Tesseract — Claude Code Context

## Project overview

Static Next.js site deployed to GitHub Pages via `gh-pages` branch.
All content lives in TypeScript data files under `src/lib/`.
Build: `npm run build` → output in `dist/`.

## Daily news update task

When asked to update the news, follow this procedure exactly:

### 1. Check what's already in the database

Read `src/lib/newsData.ts` and collect all existing `id` values.
The most recent dateNum tells you how far the database extends.

### 2. Search for new AI events

Search the web for significant AI news published since the most recent item.
Focus on:
- New model releases or major updates (Claude, GPT, Gemini, LLaMA, Mistral, DeepSeek, Grok…)
- Record benchmark scores (SWE-bench, GPQA, ARC-AGI, MMLU, AIME…)
- Major product launches: agents, APIs, tools
- Key industry events: acquisitions, funding rounds, partnerships, policy

Only include events that are **real and verifiable** — check an official source.
Skip anything speculative or already in the database.

### 3. Add new items

For each new significant event, append a `NewsItem` object to `AI_NEWS` in
`src/lib/newsData.ts`, before the closing `];`. Format:

```ts
  {
    id: "kebab-case-unique-id",
    date: "Mon YYYY",          // e.g. "May 2026"
    dateNum: YYYYMM,           // e.g. 202605
    title: "Concise factual title",
    summary:
      "2–3 sentences. Factual. Include specific numbers/benchmarks. No hype.",
    tags: ["Company", "ModelName", "Feature"],
    significance: "landmark" | "major" | "notable",
    provider: "Company Name",
    providerColor: "#hexcolor",
    url: "https://official-announcement-url",
  },
```

**Provider colors:**
OpenAI `#10a37f` · Anthropic `#d97706` · Google `#4285f4` · Meta `#0866ff`
Microsoft `#0078d4` · Apple `#555555` · Mistral AI `#ff7000` · DeepSeek `#1a73e8`
xAI `#000000` · Nvidia `#76b900`

**Significance guide:**
- `landmark` — changes the trajectory of the field (≤3 per year)
- `major` — significant event practitioners should know about
- `notable` — worth tracking but not world-changing

### 4. Verify the build

Run `npm run build`. If it fails, fix the TypeScript before committing.

### 5. Commit only the data file

```bash
git add src/lib/newsData.ts
git commit -m "chore: news update $(date -u +%Y-%m-%d)"
git push
```

Do **not** commit `dist/` — deployment is handled separately.

## Other data files (for future expansion)

| File | Content | Update cadence |
|------|---------|----------------|
| `src/lib/toolsData.ts` | 55 AI tools directory | Weekly — add new tools, update pricing/status |
| `src/lib/newsData.ts` | AI news timeline | Daily |
| `src/lib/learningPathsData.ts` | 4 learning paths | Monthly |
| `src/lib/resourcesData.ts` | 43 developer resources | Weekly |
| `src/lib/claudeData.ts` | Claude models/products | On new Anthropic release |

## Key constraints

- This is a **static export** (`output: 'export'`). No server-side code.
- `BASE_PATH = "/sintra-ai"` — all internal links must use this prefix.
- Tailwind classes must be written as literal strings (no dynamic construction).
- The `.btn` CSS class overrides Tailwind's `hidden` — never combine them on the same element.

## Auditoria — Camada 1

Auditoria automática por análise estática roda no workflow
`.github/workflows/auditoria.yml` (gitleaks, semgrep, lint/typecheck) — sem LLM e sem
serviço externo — a cada PR e no push para a branch default. Está em **modo aviso**
(reporta, não reprova). Detalhes e como tornar bloqueante: ver `~/.claude/CLAUDE.md`,
seção "Camada 1".

## Específico deste projeto

- O que é / stack: **Sintra Tesseract** — site **estático** Next.js (`output: 'export'`),
  diretório de notícias/ferramentas/recursos de IA. Conteúdo em data files TypeScript
  sob `src/lib/`. Build `npm run build` → `dist/`. `BASE_PATH = "/sintra-ai"`.
- Estado: **produção** — repositório **público**.
- Deploy: **GitHub Pages** via branch `gh-pages` (deploy tratado à parte; não commitar
  `dist/`). Healthcheck pós-deploy: carregar a página pública do Pages
  (URL provável `https://ruysantanajr.github.io/sintra-ai/` — **confirmar com Ruy**).
- Invariantes: nunca commitar segredo/token/chave/.env real. **Repo público** — nada de
  segredo, dado privado ou rascunho interno no histórico. Validar antes de commitar
  (`git diff --check`). Restrições técnicas do produto (static export, BASE_PATH, classes
  Tailwind literais, `.btn` vs `hidden`) acima.
