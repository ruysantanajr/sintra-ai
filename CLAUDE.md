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

## Fluxo Gepeto — padrão (detalhes no `~/.claude/CLAUDE.md` global)

Toda mudança vai por PR. O workflow `.github/workflows/gepeto-pending.yml` aplica
`gepeto:pending` automaticamente (abrir/atualizar PR). Gepeto (Codex local do Ruy) audita o diff e
troca a label para `gepeto:approved` ou `gepeto:rejected`.

**Portão de SHA — obrigatório antes de merge/deploy.** O veredito do Gepeto vem carimbado:
`GEPETO-VERDICT: approved sha=<head-sha-completo>`. Antes de mergear **ou** deployar, comparar esse
`sha=` com o HEAD atual (`gh pr view <n> --json headRefOid --jq '.headRefOid'`); só seguir se forem
**idênticos** (40 caracteres). Se diferirem, o veredito está stale → tratar como `gepeto:pending` e
aguardar a reauditoria. É o gate primário; o reset de label a cada push é guard secundário.

> **PADRÃO: Gepeto aprovou → Claudinho segue até o fim, sem parar.** Com `gepeto:approved` a PR está
> liberada: **dar merge, fazer o deploy/produção e partir para a próxima etapa fazem parte do fluxo
> e NÃO precisam de autorização do Ruy.** Sem gate de handoff, sem label extra. Ruy intervém só se
> quiser ajustar algo. Se Gepeto reprovar, corrigir na mesma branch e dar push.

---

# Protocolo do loop de auditoria — kit de governança (padrão de todos os repos)

> Acrescenta o protocolo canônico do loop ao que já existe acima. Não substitui nada:
> formaliza o **Portão de SHA** (§3.2) e o **contrato esperado do Gepeto** (§5).

## 1. Papéis

- Ruy (humano): define as tarefas e a ordem. Autoridade final.
- Claudinho (Claude Code): coda cada etapa, abre PR, corrige, faz merge e deploy.
- Gepeto (Codex): audita o diff de cada PR e emite veredito por label.

Canal único de handshake: a cor da label da PR.

| gepeto:pending (fbca04) | gepeto:approved (0e8a16) | gepeto:rejected (d93f0b) |

## 2. Loop de auditoria

1. Codar a etapa.
2. Abrir 1 PR. Entra com gepeto:pending (workflow de enfileiramento).
3. Monitorar o veredito a cada 90s (ferramenta Monitor, nunca sleep).
4. gepeto:approved -> portão de SHA -> merge (+deploy se a etapa exigir) -> próxima etapa.
5. gepeto:rejected -> ler findings -> corrigir -> push -> volta a pending -> passo 3.
6. Repetir até approved. Ruy não interfere no caminho feliz.

## 3. Contrato de autonomia

3.1 Ao receber gepeto:approved, merge E deploy sem pedir OK (deploy só se a etapa exigir).
3.2 Portão de SHA (obrigatório): o veredito carimba o SHA auditado
    (GEPETO-VERDICT: approved sha=<head>). Só mergear/deployar se
    sha aprovado == HEAD atual. Reset de label é guard secundário.
3.3 Nunca parar; corrigir e reenviar quantas vezes precisar. Escalar a Ruy
    (AskUserQuestion) só se o finding for ambíguo ou arquiteturalmente significativo.

## 4. Invariantes (valem sempre)

- Nunca commitar segredo/token/chave/.env real (arquivo, PR, issue, log, comentário).
- Após qualquer deploy, validar os healthchecks/endpoints públicos do projeto
  conforme a doc de operações do repo; se falhar, rollback + escalar a Ruy.
- Disciplina de produção: SSH por usuário não-root; não tocar DNS/TLS/infra
  sem etapa explícita de Ruy.
- Validar antes de commitar: git diff --check e bash scripts/check-no-secrets.sh.
- **Repo público:** nada de segredo, dado privado ou rascunho interno no histórico.

## 5. Contrato esperado do Gepeto

Ao ver uma PR com gepeto:pending: auditar o HEAD, anotar o SHA exato, postar UM
comentário cuja 1ª linha seja `GEPETO-VERDICT: approved sha=<head>` ou
`GEPETO-VERDICT: rejected sha=<head>` (findings: arquivo:linha, problema, impacto,
correção esperada), e trocar a label. Claudinho só age se o sha= for igual ao HEAD atual.

## 6. Específico deste projeto

- O que é / stack: **Sintra Tesseract** — site **estático** Next.js (`output: 'export'`),
  diretório de notícias/ferramentas/recursos de IA. Conteúdo em data files TypeScript
  sob `src/lib/`. Build `npm run build` → `dist/`. `BASE_PATH = "/sintra-ai"`.
- Estado: **produção** — repositório **público**.
- Tem deploy? Sim — **GitHub Pages** via branch `gh-pages` (deploy tratado à parte;
  não commitar `dist/`). Healthcheck pós-deploy: carregar a página pública do Pages
  (URL provável `https://ruysantanajr.github.io/sintra-ai/` — **confirmar com Ruy**).
- Limites e o que NÃO fazer nesta fase: esta tarefa é só governança. Não tocar
  `src/`, os data files, o build nem o deploy. Restrições técnicas do produto
  (static export, BASE_PATH, classes Tailwind literais, `.btn` vs `hidden`) acima.
