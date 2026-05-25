"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Terminal, Zap, GitBranch, Cpu, CheckCircle2 } from "lucide-react";
import {
  CLAUDE_MODELS,
  CLAUDE_PRODUCTS,
  CLAUDE_CAPABILITIES,
  CLAUDE_LINKS,
  type ClaudeModel,
  type ClaudeCapability,
} from "@/lib/claudeData";
import { BASE_PATH } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { localize, l } from "@/lib/localized";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const TIER_LABEL: Record<ClaudeModel["tier"], string> = {
  haiku:  "Haiku",
  sonnet: "Sonnet",
  opus:   "Opus",
};

const SPEED_ICON: Record<ClaudeModel["speed"], string> = {
  fastest:          "⚡",
  balanced:         "◐",
  "most capable":   "🧠",
};

const SPEED_LABEL: Record<ClaudeModel["speed"], { en: string; "pt-BR": string }> = {
  fastest:        l("fastest",      "mais rápido"),
  balanced:       l("balanced",     "equilibrado"),
  "most capable": l("most capable", "mais capaz"),
};

const COPY = {
  back:            l("Back to Sintra",          "Voltar para o Sintra"),
  eyebrowAnthropic: l("Anthropic",              "Anthropic"),
  heroSub:         l("The AI built to be safe, honest, and helpful.", "A IA feita para ser segura, honesta e útil."),
  // Quick stats
  stat1Label:      l("3 models",                "3 modelos"),
  stat1Note:       l("Haiku · Sonnet · Opus",   "Haiku · Sonnet · Opus"),
  stat2Label:      l("200K context",            "200K de contexto"),
  stat2Note:       l("Across all tiers",        "Em todos os tiers"),
  stat3Label:      l("Since 2021",              "Desde 2021"),
  stat3Note:       l("Built by Anthropic",      "Feito pela Anthropic"),
  // Model family section
  eyebrowFamily:   l("Model Family",            "Família de Modelos"),
  familyTitle:     l("Three tiers, one context window", "Três tiers, uma janela de contexto"),
  familyDesc:      l(
    "Every Claude model shares a 200K token context window. Choose your tier by the cost-performance trade-off your application demands.",
    "Todo modelo Claude compartilha uma janela de contexto de 200K tokens. Escolha o tier pelo trade-off custo-performance que sua aplicação exige.",
  ),
  ctxLabel:        l("Context",                 "Contexto"),
  speedLabel:      l("Speed",                   "Velocidade"),
  inputLabel:      l("Input",                   "Entrada"),
  outputLabel:     l("Output",                  "Saída"),
  bestForLabel:    l("Best for",                "Melhor para"),
  keyCapabilities: l("Key capabilities",        "Capacidades principais"),
  pricesNote:      l(
    "* Prices per 1M tokens, approximate as of 2025. Verify current rates at anthropic.com/pricing.",
    "* Preços por 1M de tokens, aproximados em 2025. Confirme as taxas atuais em anthropic.com/pricing.",
  ),
  // Claude Code section
  claudeCodeTagline: l("Anthropic",             "Anthropic"),
  claudeCodeIntro:   l(
    "An agentic coding CLI that lives in your terminal. Claude Code reads and edits files, runs shell commands, manages git, and executes multi-step software engineering tasks autonomously — without leaving your workflow.",
    "Uma CLI de programação agêntica que vive no seu terminal. O Claude Code lê e edita arquivos, executa comandos shell, gerencia git e completa tarefas de engenharia em múltiplos passos de forma autônoma — sem sair do seu fluxo.",
  ),
  feat1Title: l("Remote Control",                              "Remote Control"),
  feat1Desc:  l(
    "Monitor and guide Claude Code sessions from the web or iOS app via code.claude.com.",
    "Monitore e guie sessões do Claude Code pela web ou pelo app iOS via code.claude.com.",
  ),
  feat2Title: l("VS Code & JetBrains integration",             "Integração com VS Code e JetBrains"),
  feat2Desc:  l(
    "Embedded Claude Code panel inside your editor — run tasks, view diffs, and accept changes inline.",
    "Painel do Claude Code embarcado no seu editor — rode tarefas, veja diffs e aceite mudanças inline.",
  ),
  feat3Title: l("MCP server support",                          "Suporte a servidores MCP"),
  feat3Desc:  l(
    "Connect any Model Context Protocol server to give Claude Code access to external APIs, databases, and tools.",
    "Conecte qualquer servidor MCP para dar ao Claude Code acesso a APIs, bancos de dados e ferramentas externas.",
  ),
  feat4Title: l("Multi-agent workflows",                       "Fluxos multi-agente"),
  feat4Desc:  l(
    "Orchestrate parallel sub-agents for large-scale tasks: one agent per PR, feature, or test suite.",
    "Orquestre sub-agentes paralelos para tarefas em larga escala: um agente por PR, feature ou suite de testes.",
  ),
  learnMoreClaudeCode: l("Learn more about Claude Code",       "Saiba mais sobre o Claude Code"),
  installLabel:   l("Install",                                  "Instalar"),
  apiLabel:       l("API · TypeScript SDK",                     "API · SDK TypeScript"),
  chip1:          l("Open source CLI",                          "CLI open source"),
  chip2:          l("Python & TS SDKs",                         "SDKs Python & TS"),
  chip3:          l("Streaming support",                        "Suporte a streaming"),
  chip4:          l("MCP native",                               "MCP nativo"),
  // Products section
  eyebrowProducts:  l("Products",                  "Produtos"),
  productsTitle:    l("Every way to access Claude","Todas as formas de acessar o Claude"),
  productVisit:     l("Visit",                     "Visitar"),
  // Capabilities section
  eyebrowCapabilities: l("Capabilities",            "Capacidades"),
  capabilitiesTitle: l("What Claude can do",        "O que o Claude consegue fazer"),
  capabilitiesDesc:  l(
    "Core technical capabilities available across the API — from vision and tool use to extended thinking and the Model Context Protocol.",
    "Capacidades técnicas centrais disponíveis na API — de visão e tool use a Extended Thinking e Model Context Protocol.",
  ),
  capabilityDocs: l("Docs", "Docs"),
  // Links section
  eyebrowQuickLinks: l("Quick links",              "Links rápidos"),
  quickLinksTitle:   l("Resources & references",   "Recursos & referências"),
};

const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// ─── Model Card ───────────────────────────────────────────────────────────────

function ModelCard({ model, index }: { model: ClaudeModel; index: number }) {
  const { locale } = useLanguage();
  return (
    <motion.div
      custom={index}
      variants={itemVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="relative flex flex-col rounded-2xl border p-6 bg-[#0d0a1c] overflow-hidden"
      style={{ borderColor: model.color + "30" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${model.color}, transparent 70%)` }}
      />

      {/* Accent bar */}
      <div className="h-[2px] w-12 rounded-full mb-5" style={{ background: model.color }} />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-serif text-[22px] font-normal text-fg-1 leading-[1.1]">{model.name}</h3>
          <p className="font-sans text-[12px] text-fg-3 mt-1 leading-[1.4]">{localize(model.tagline, locale)}</p>
        </div>
        <span
          className="font-mono text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full border shrink-0 mt-1"
          style={{ color: model.color, borderColor: model.color + "44", background: model.color + "14" }}
        >
          {TIER_LABEL[model.tier]}
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <div className="rounded-lg border border-hairline/60 bg-white/[0.025] px-3 py-2">
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-0.5">{localize(COPY.ctxLabel, locale)}</p>
          <p className="font-mono text-[13px] font-medium text-fg-1">{model.contextWindow}</p>
        </div>
        <div className="rounded-lg border border-hairline/60 bg-white/[0.025] px-3 py-2">
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-0.5">{localize(COPY.speedLabel, locale)}</p>
          <p className="font-mono text-[12px] text-fg-2">
            {SPEED_ICON[model.speed]} {localize(SPEED_LABEL[model.speed], locale)}
          </p>
        </div>
        <div className="rounded-lg border border-hairline/60 bg-white/[0.025] px-3 py-2">
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-0.5">{localize(COPY.inputLabel, locale)}</p>
          <p className="font-mono text-[12px] font-medium" style={{ color: model.color }}>
            {model.inputPrice}
          </p>
        </div>
        <div className="rounded-lg border border-hairline/60 bg-white/[0.025] px-3 py-2">
          <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-0.5">{localize(COPY.outputLabel, locale)}</p>
          <p className="font-mono text-[12px] text-fg-3">{model.outputPrice}</p>
        </div>
      </div>

      {/* Best for */}
      <div className="mb-4">
        <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-2">{localize(COPY.bestForLabel, locale)}</p>
        <div className="flex flex-wrap gap-1.5">
          {model.bestFor.map((tag, i) => (
            <span
              key={i}
              className="font-mono text-[9px] px-2 py-0.5 rounded-full border"
              style={{ color: model.color, borderColor: model.color + "33", background: model.color + "0c" }}
            >
              {localize(tag, locale)}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-auto">
        <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-fg-4 mb-2">{localize(COPY.keyCapabilities, locale)}</p>
        <ul className="flex flex-col gap-1.5">
          {model.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={11} className="shrink-0 mt-[3px]" style={{ color: model.color }} />
              <span className="font-sans text-[12px] text-fg-2 leading-[1.45]">{localize(f, locale)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ─── Capability Card ──────────────────────────────────────────────────────────

function CapabilityCard({ cap, index }: { cap: ClaudeCapability; index: number }) {
  const { locale } = useLanguage();
  const inner = (
    <motion.div
      custom={index}
      variants={itemVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      className="group flex flex-col gap-3 rounded-xl border border-violet/[0.12] bg-[#0d0a1c] p-5 transition-all duration-200 hover:border-violet/40 hover:bg-white/[0.025]"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{cap.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-[16px] text-fg-1 leading-none">{localize(cap.name, locale)}</p>
          {cap.link && (
            <p className="font-mono text-[9px] tracking-[0.08em] text-violet-bright mt-0.5 flex items-center gap-1">
              {localize(COPY.capabilityDocs, locale)} <ExternalLink size={8} />
            </p>
          )}
        </div>
      </div>
      <p className="font-sans text-[12px] text-fg-3 leading-[1.55]">{localize(cap.desc, locale)}</p>
    </motion.div>
  );

  if (cap.link) {
    return (
      <a href={cap.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}

// ─── Link Pill ────────────────────────────────────────────────────────────────

const LINK_CATEGORY_COLOR: Record<string, string> = {
  docs:    "#9F8CFF",
  pricing: "#10b981",
  api:     "#5EEAD4",
  ops:     "#f59e0b",
};

function LinkPill({ label, url, category }: { label: string; url: string; category: string }) {
  const color = LINK_CATEGORY_COLOR[category] ?? "#9F8CFF";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] px-4 py-2 rounded-full border transition-all duration-150 hover:scale-[1.03] active:scale-[0.98]"
      style={{
        color,
        borderColor: color + "44",
        background: color + "0e",
      }}
    >
      {label}
      <ExternalLink size={9} className="opacity-60" />
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ClaudePage() {
  const { locale } = useLanguage();
  return (
    <div className="min-h-screen bg-abyss text-fg-1">

      {/* Ambient blobs */}
      <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #9F8CFF, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">

        {/* ── Back nav ─────────────────────────────────────────────────── */}
        <div className="pt-10 pb-6">
          <a
            href={`${BASE_PATH}/`}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-fg-3 hover:text-violet-bright transition-colors group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            {localize(COPY.back, locale)}
          </a>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <motion.header
          className="pt-6 pb-16 border-b border-violet/[0.12]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex gap-3.5 items-center mb-6">
            <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
            <span className="eyebrow violet">{localize(COPY.eyebrowAnthropic, locale)}</span>
          </div>

          <h1 className="font-serif font-light text-[clamp(48px,7vw,96px)] leading-[1.02] tracking-[-0.025em] text-fg-1 mb-5">
            Claude
          </h1>

          <p className="font-sans text-[18px] text-fg-2 max-w-xl leading-[1.55] mb-8">
            {localize(COPY.heroSub, locale)}
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-8">
            {[
              { label: localize(COPY.stat1Label, locale), note: localize(COPY.stat1Note, locale) },
              { label: localize(COPY.stat2Label, locale), note: localize(COPY.stat2Note, locale) },
              { label: localize(COPY.stat3Label, locale), note: localize(COPY.stat3Note, locale) },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-serif text-[22px] text-fg-1 leading-none">{stat.label}</span>
                <span className="font-mono text-[10px] tracking-[0.10em] uppercase text-fg-4">{stat.note}</span>
              </div>
            ))}
          </div>
        </motion.header>

        {/* ── Model family ─────────────────────────────────────────────── */}
        <section className="pt-16 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <div className="inline-flex gap-3.5 items-center mb-4">
              <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
              <span className="eyebrow violet">{localize(COPY.eyebrowFamily, locale)}</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.06] tracking-[-0.02em] text-fg-1 mb-3">
              {localize(COPY.familyTitle, locale)}
            </h2>
            <p className="font-sans text-[15px] text-fg-3 max-w-lg leading-[1.6]">
              {localize(COPY.familyDesc, locale)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CLAUDE_MODELS.map((model, i) => (
              <ModelCard key={model.id} model={model} index={i} />
            ))}
          </div>

          <p className="font-mono text-[9px] text-fg-4 mt-4">
            {localize(COPY.pricesNote, locale)}
          </p>
        </section>

        {/* ── Claude Code section ───────────────────────────────────────── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[#8FE3D2]/20 overflow-hidden"
            style={{ background: "linear-gradient(145deg, #0a0f18 0%, #0d1420 60%, #091410 100%)" }}
          >
            {/* Top accent bar */}
            <div className="h-[2px] w-full"
              style={{ background: "linear-gradient(90deg, #8FE3D2, #9F8CFF 50%, transparent)" }} />

            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* Left: text */}
                <div>
                  <div className="inline-flex gap-2 items-center mb-5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: "#8FE3D218", border: "1px solid #8FE3D230" }}>
                      🖥️
                    </div>
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.14em] uppercase opacity-70" style={{ color: "#8FE3D2" }}>{localize(COPY.claudeCodeTagline, locale)}</p>
                      <p className="font-serif text-[20px] leading-none text-fg-1">Claude Code</p>
                    </div>
                  </div>

                  <p className="font-sans text-[15px] text-fg-2 leading-[1.6] mb-6">
                    {localize(COPY.claudeCodeIntro, locale)}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {[
                      {
                        icon: <Cpu size={14} />,
                        title: localize(COPY.feat1Title, locale),
                        desc:  localize(COPY.feat1Desc,  locale),
                        link:  "https://code.claude.com/docs/en/remote-control",
                      },
                      {
                        icon: <GitBranch size={14} />,
                        title: localize(COPY.feat2Title, locale),
                        desc:  localize(COPY.feat2Desc,  locale),
                        link:  null as string | null,
                      },
                      {
                        icon: <Zap size={14} />,
                        title: localize(COPY.feat3Title, locale),
                        desc:  localize(COPY.feat3Desc,  locale),
                        link:  null as string | null,
                      },
                      {
                        icon: <Terminal size={14} />,
                        title: localize(COPY.feat4Title, locale),
                        desc:  localize(COPY.feat4Desc,  locale),
                        link:  null as string | null,
                      },
                    ].map(f => (
                      <li key={f.title} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: "#8FE3D214", border: "1px solid #8FE3D224", color: "#8FE3D2" }}>
                          {f.icon}
                        </span>
                        <div>
                          <p className="font-sans text-[13px] font-medium text-fg-1 leading-none mb-0.5">
                            {f.title}
                            {f.link && (
                              <a href={f.link} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-0.5 ml-1.5 opacity-70 hover:opacity-100 transition-opacity"
                                style={{ color: "#8FE3D2" }}>
                                <ExternalLink size={9} />
                              </a>
                            )}
                          </p>
                          <p className="font-sans text-[12px] text-fg-3 leading-[1.45]">{f.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] px-5 py-2.5 rounded-full border transition-all hover:scale-[1.02]"
                    style={{ color: "#8FE3D2", borderColor: "#8FE3D240", background: "#8FE3D20e" }}
                  >
                    {localize(COPY.learnMoreClaudeCode, locale)}
                    <ExternalLink size={11} />
                  </a>
                </div>

                {/* Right: code snippets */}
                <div className="flex flex-col gap-4">
                  {/* Install block */}
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-fg-4 mb-1.5">{localize(COPY.installLabel, locale)}</p>
                    <div className="rounded-xl border border-hairline/60 bg-void overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-hairline/40 bg-white/[0.02]">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <span className="font-mono text-[10px] text-fg-4 ml-1">Terminal</span>
                      </div>
                      <div className="px-5 py-4">
                        <p className="font-mono text-[13px] leading-[1.9]" style={{ color: "#8FE3D2" }}>
                          <span className="text-fg-4">$ </span>
                          npm install -g @anthropic-ai/claude-code
                        </p>
                        <p className="font-mono text-[13px] leading-[1.9]" style={{ color: "#8FE3D2" }}>
                          <span className="text-fg-4">$ </span>
                          claude
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* API usage block */}
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-fg-4 mb-1.5">{localize(COPY.apiLabel, locale)}</p>
                    <div className="rounded-xl border border-hairline/60 bg-void overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-hairline/40 bg-white/[0.02]">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <span className="font-mono text-[10px] text-fg-4 ml-1">index.ts</span>
                      </div>
                      <div className="px-5 py-4 overflow-x-auto">
                        <pre className="font-mono text-[12px] leading-[1.8] text-fg-2">
{`import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const msg = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  messages: [{
    role: 'user',
    content: 'Hello, Claude!',
  }],
});`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      localize(COPY.chip1, locale),
                      localize(COPY.chip2, locale),
                      localize(COPY.chip3, locale),
                      localize(COPY.chip4, locale),
                    ].map(chip => (
                      <span key={chip}
                        className="font-mono text-[10px] tracking-[0.06em] px-3 py-1 rounded-full border"
                        style={{ borderColor: "#8FE3D220", color: "#8FE3D2b0", background: "#8FE3D20a" }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Products ─────────────────────────────────────────────────── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="inline-flex gap-3.5 items-center mb-4">
              <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
              <span className="eyebrow violet">{localize(COPY.eyebrowProducts, locale)}</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(26px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-fg-1">
              {localize(COPY.productsTitle, locale)}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLAUDE_PRODUCTS.map((product, i) => (
              <motion.a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={itemVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                className="group flex flex-col rounded-xl border p-5 transition-all duration-200 bg-[#0d0a1c]"
                style={{ borderColor: product.color + "28" }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: product.color + "18", border: `1px solid ${product.color}30` }}>
                  {product.icon}
                </div>

                <p className="font-serif text-[17px] text-fg-1 leading-none mb-1.5">{product.name}</p>
                <p className="font-mono text-[9px] tracking-[0.10em] uppercase mb-3" style={{ color: product.color }}>
                  {localize(product.tagline, locale)}
                </p>
                <p className="font-sans text-[12px] text-fg-3 leading-[1.5] mb-4 flex-1">{localize(product.description, locale)}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1 pt-4 border-t border-hairline/40">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-[5px] w-1 h-1 rounded-full shrink-0" style={{ background: product.color }} />
                      <span className="font-sans text-[11px] text-fg-3 leading-[1.4]">{localize(h, locale)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 mt-4 font-mono text-[10px] transition-colors" style={{ color: product.color }}>
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">{localize(COPY.productVisit, locale)}</span>
                  <ExternalLink size={9} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Capabilities grid ─────────────────────────────────────────── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="inline-flex gap-3.5 items-center mb-4">
              <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
              <span className="eyebrow violet">{localize(COPY.eyebrowCapabilities, locale)}</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(26px,4vw,44px)] leading-[1.06] tracking-[-0.02em] text-fg-1 mb-3">
              {localize(COPY.capabilitiesTitle, locale)}
            </h2>
            <p className="font-sans text-[15px] text-fg-3 max-w-lg leading-[1.6]">
              {localize(COPY.capabilitiesDesc, locale)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CLAUDE_CAPABILITIES.map((cap, i) => (
              <CapabilityCard key={cap.id} cap={cap} index={i} />
            ))}
          </div>
        </section>

        {/* ── Links row ────────────────────────────────────────────────── */}
        <section className="pb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-violet/[0.10]">
              <div>
                <div className="inline-flex gap-3.5 items-center mb-2">
                  <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
                  <span className="eyebrow violet">{localize(COPY.eyebrowQuickLinks, locale)}</span>
                </div>
                <p className="font-serif text-[22px] font-normal text-fg-1 leading-none">{localize(COPY.quickLinksTitle, locale)}</p>
              </div>
              <a
                href="https://anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] px-4 py-2 rounded-full border border-violet/30 text-violet-bright bg-violet/[0.06] hover:bg-violet/[0.12] transition-colors shrink-0"
              >
                anthropic.com
                <ExternalLink size={10} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {CLAUDE_LINKS.map(link => (
                <LinkPill key={link.url} label={localize(link.label, locale)} url={link.url} category={link.category} />
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
