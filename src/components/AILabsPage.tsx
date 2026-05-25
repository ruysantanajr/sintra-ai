"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Zap, Globe, ChevronDown } from "lucide-react";
import { AI_LABS, LAB_TYPES, type AILab, type LabModel } from "@/lib/aiLabsData";
import { useLanguage } from "@/context/LanguageContext";
import { localize, l } from "@/lib/localized";

// ─── Localized labels ───────────────────────────────────────────────────────
const TYPE_LABEL = {
  frontier:    l("Frontier AI", "IA de fronteira"),
  "open-source": l("Open Source", "Código aberto"),
  enterprise:  l("Enterprise",   "Corporativo"),
  specialized: l("Specialized",  "Especializado"),
};

const SPEED_LABEL = {
  fast:   l("⚡ Fast",      "⚡ Rápido"),
  medium: l("◐ Balanced",  "◐ Equilibrado"),
  slow:   l("🧠 Deep",     "🧠 Profundo"),
};

const COPY = {
  estLabel:        l("Est.",                "Fundado"),
  modelsPricing:   l("Models & Pricing",    "Modelos & Preço"),
  pricesFootnote:  l(
    "* Prices per 1M tokens, approximate as of 2025. Verify at provider.",
    "* Preços por 1M de tokens, aproximados em 2025. Confirme no provedor.",
  ),
  keyProducts:     l("Key Products",        "Principais produtos"),
  strengths:       l("Strengths",           "Pontos fortes"),
  bestFor:         l("Best For",            "Melhor para"),
  contextSuffix:   l("context",             "de contexto"),
  freeOss:         l("Free / OSS",          "Grátis / OSS"),
  free:            l("Free",                "Grátis"),
  inLabel:         l("In:",                 "Entrada:"),
  outLabel:        l("Out:",                "Saída:"),
  apiLabel:        l("API:",                "API:"),
  models:          l("models",              "modelos"),
  // Compare table
  thLab:           l("Lab",                 "Lab"),
  thType:          l("Type",                "Tipo"),
  thFounded:       l("Founded",             "Fundado"),
  thModels:        l("Models",              "Modelos"),
  thTopModel:      l("Top model",           "Modelo principal"),
  thFreeTier:      l("Free tier",           "Plano grátis"),
  thApi:           l("API",                 "API"),
  yes:             l("Yes",                 "Sim"),
  available:       l("Available",           "Disponível"),
  // Header
  labsUpdated:     l("labs · Updated 2025", "labs · Atualizado em 2025"),
  heroPre:         l("Major",               "Principais"),
  heroEm:          l("AI Labs",             "Labs de IA"),
  heroSubtitle:    l(
    "The organizations defining the frontier of artificial intelligence — their models, pricing, products, and what they do best.",
    "As organizações que definem a fronteira da inteligência artificial — seus modelos, preços, produtos e no que se destacam.",
  ),
  // Tabs / states
  gallery:         l("Gallery",             "Galeria"),
  compare:         l("Compare",             "Comparar"),
  noLabs:          l("No labs in this category yet.", "Ainda não há labs nesta categoria."),
};

const MODEL_TYPE_COLOR: Record<string, string> = {
  text:      "#9F8CFF",
  multimodal: "#5EEAD4",
  image:     "#F08CA8",
  code:      "#8FE3D2",
  embedding:  "#E8C089",
  reasoning: "#B6A6FF",
};

// ─── Model pricing row ───────────────────────────────────────────────────────
function ModelRow({ model, color }: { model: LabModel; color: string }) {
  const { locale } = useLanguage();
  return (
    <div className="flex items-start gap-3 py-3 border-b border-hairline last:border-0">
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-serif text-[14px] text-fg-1">{model.name}</span>
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm border uppercase tracking-[0.10em]"
            style={{ color: MODEL_TYPE_COLOR[model.type], borderColor: MODEL_TYPE_COLOR[model.type] + "44", background: MODEL_TYPE_COLOR[model.type] + "12" }}>
            {model.type}
          </span>
          {model.speed && (
            <span className="font-mono text-[9px] text-fg-4">{localize(SPEED_LABEL[model.speed], locale)}</span>
          )}
          {model.freeAccess && (
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm border border-green-500/40 text-green-400 bg-green-500/10 uppercase tracking-[0.10em]">{localize(COPY.freeOss, locale)}</span>
          )}
        </div>
        {model.contextWindow && (
          <span className="font-mono text-[10px] text-fg-4">{model.contextWindow} {localize(COPY.contextSuffix, locale)}</span>
        )}
        {model.highlight && (
          <span className="font-sans text-[12px] text-fg-3 leading-[1.4]">{localize(model.highlight, locale)}</span>
        )}
      </div>
      <div className="shrink-0 text-right">
        {model.inputPrice && !model.freeAccess ? (
          <div className="flex flex-col items-end gap-0.5">
            <span className="font-mono text-[11px] font-medium" style={{ color }}>{localize(COPY.inLabel, locale)} {model.inputPrice}</span>
            {model.outputPrice && (
              <span className="font-mono text-[11px] text-fg-3">{localize(COPY.outLabel, locale)} {model.outputPrice}</span>
            )}
          </div>
        ) : model.freeAccess ? (
          <span className="font-mono text-[11px] text-green-400">{localize(COPY.free, locale)}</span>
        ) : null}
      </div>
    </div>
  );
}

// ─── Lab detail panel ────────────────────────────────────────────────────────
function LabPanel({ lab, onClose }: { lab: AILab; onClose: () => void }) {
  const { locale } = useLanguage();
  return (
    <AnimatePresence>
      <>
        <motion.div key="scrim" className="fixed inset-0 z-[90] bg-void/75 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }} onClick={onClose} />

        <motion.div key="panel"
          className="fixed inset-y-0 right-0 z-[100] w-full max-w-[640px] overflow-y-auto bg-[#0d0a1c] border-l border-violet/15 shadow-2xl"
          initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}>

          {/* Accent top bar */}
          <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${lab.color}, transparent)` }} />

          <div className="px-6 pt-6 pb-12">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: lab.color + "18", border: `1px solid ${lab.color}44` }}>
                  {lab.emoji}
                </div>
                <div>
                  <h2 className="font-serif text-[26px] font-normal text-fg-1 leading-none">{lab.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border"
                      style={{ color: lab.color, borderColor: lab.color + "44", background: lab.color + "14" }}>
                      {localize(TYPE_LABEL[lab.type], locale)}
                    </span>
                    <span className="font-mono text-[10px] text-fg-4">{localize(COPY.estLabel, locale)} {lab.founded}</span>
                    <span className="font-mono text-[10px] text-fg-4">· {lab.hq}</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-full bg-violet/[0.10] border border-violet/20 flex items-center justify-center text-fg-3 hover:text-fg-1 hover:bg-violet/20 transition-all mt-1">
                <X size={15} />
              </button>
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-[16px] leading-[1.5] text-fg-2 mb-5 pl-4 border-l-2"
              style={{ borderColor: lab.color }}>
              {localize(lab.tagline, locale)}
            </p>

            {/* Description */}
            <p className="font-sans text-[14px] leading-[1.65] text-fg-2 mb-6">{localize(lab.description, locale)}</p>

            {/* Focus tags */}
            <div className="flex flex-wrap gap-1.5 mb-7">
              {lab.focus.map((f, i) => {
                const label = localize(f, locale);
                return (
                  <span key={i} className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                    style={{ color: lab.color, borderColor: lab.color + "44", background: lab.color + "0e" }}>
                    {label}
                  </span>
                );
              })}
            </div>

            {/* Models */}
            <div className="mb-7">
              <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 mb-3">{localize(COPY.modelsPricing, locale)}</h3>
              <div className="rounded-xl border border-hairline overflow-hidden bg-[#0a0714]">
                <div className="px-4">
                  {lab.models.map(m => <ModelRow key={m.name} model={m} color={lab.color} />)}
                </div>
              </div>
              <p className="font-mono text-[9px] text-fg-4 mt-2">{localize(COPY.pricesFootnote, locale)}</p>
            </div>

            {/* Products */}
            <div className="mb-7">
              <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 mb-3">{localize(COPY.keyProducts, locale)}</h3>
              <div className="flex flex-wrap gap-2">
                {lab.products.map(p => (
                  <span key={p} className="font-sans text-[12px] px-3 py-1.5 rounded-lg bg-steel border border-hairline text-fg-2">{p}</span>
                ))}
              </div>
            </div>

            {/* Two-col: strengths + use cases */}
            <div className="grid md:grid-cols-2 gap-5 mb-7">
              <div>
                <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 mb-3">{localize(COPY.strengths, locale)}</h3>
                <ul className="flex flex-col gap-2">
                  {lab.strengths.map((s, i) => {
                    const label = localize(s, locale);
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: lab.color }} />
                        <span className="font-sans text-[13px] text-fg-2 leading-[1.5]">{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 mb-3">{localize(COPY.bestFor, locale)}</h3>
                <ul className="flex flex-col gap-2">
                  {lab.useCases.map((u, i) => {
                    const label = localize(u, locale);
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: lab.color + "88" }} />
                        <span className="font-sans text-[13px] text-fg-2 leading-[1.5]">{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* API + links */}
            <div className="flex flex-wrap gap-3">
              {lab.api.available && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet/[0.08] border border-violet/20">
                  <Zap size={12} className="text-violet-bright" />
                  <span className="font-mono text-[11px] text-fg-2">{localize(COPY.apiLabel, locale)} {lab.api.endpoint}</span>
                  {lab.api.sdks && (
                    <span className="font-mono text-[10px] text-fg-4">({lab.api.sdks.join(", ")})</span>
                  )}
                </div>
              )}
              <a href={lab.website} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-colors"
                style={{ color: lab.color, borderColor: lab.color + "44", background: lab.color + "0e" }}>
                <Globe size={12} />
                <span className="font-mono text-[11px]">{lab.website.replace("https://", "")}</span>
                <ExternalLink size={10} className="opacity-60" />
              </a>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}

// ─── Lab card (grid) ─────────────────────────────────────────────────────────
function LabCard({ lab, onClick }: { lab: AILab; onClick: () => void }) {
  const { locale } = useLanguage();
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl border p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.99] bg-[#0d0a1c]"
      style={{ borderColor: lab.color + "28" }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: lab.color + "18", border: `1px solid ${lab.color}44` }}>
            {lab.emoji}
          </div>
          <div>
            <p className="font-serif text-[18px] font-normal text-fg-1 leading-none">{lab.name}</p>
            <p className="font-mono text-[9px] tracking-[0.10em] uppercase mt-1" style={{ color: lab.color }}>
              {localize(TYPE_LABEL[lab.type], locale)}
            </p>
          </div>
        </div>
        <ChevronDown size={14} className="text-fg-4 group-hover:text-fg-2 rotate-[-90deg] transition-colors mt-1 shrink-0" />
      </div>

      {/* Tagline */}
      <p className="font-sans text-[12px] text-fg-3 leading-[1.5] mb-4 line-clamp-2">{localize(lab.tagline, locale)}</p>

      {/* Focus chips */}
      <div className="flex flex-wrap gap-1 mb-4">
        {lab.focus.slice(0, 3).map((f, i) => (
          <span key={i} className="font-mono text-[9px] px-2 py-0.5 rounded-full border"
            style={{ color: lab.color, borderColor: lab.color + "33", background: lab.color + "0c" }}>
            {localize(f, locale)}
          </span>
        ))}
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: lab.color + "20" }}>
        <span className="font-mono text-[10px] text-fg-4">{localize(COPY.estLabel, locale)} {lab.founded}</span>
        <span className="text-fg-4 text-[10px]">·</span>
        <span className="font-mono text-[10px] text-fg-4">{lab.models.length} {localize(COPY.models, locale)}</span>
        <span className="text-fg-4 text-[10px]">·</span>
        <span className="font-mono text-[10px] text-fg-4 truncate">{lab.hq}</span>
      </div>
    </button>
  );
}

// ─── Compare table ───────────────────────────────────────────────────────────
function CompareTable({ labs }: { labs: AILab[] }) {
  const { locale } = useLanguage();
  return (
    <div className="overflow-x-auto rounded-xl border border-violet/[0.12] mt-2">
      <table className="w-full min-w-[640px] text-left border-collapse">
        <thead>
          <tr className="border-b border-violet/[0.12] bg-violet/[0.04]">
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thLab, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thType, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thFounded, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thModels, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thTopModel, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thFreeTier, locale)}</th>
            <th className="font-mono text-[10px] tracking-[0.14em] uppercase text-fg-4 px-4 py-3 font-normal">{localize(COPY.thApi, locale)}</th>
          </tr>
        </thead>
        <tbody>
          {labs.map(lab => {
            const topModel = lab.models.find(m => !m.freeAccess) ?? lab.models[0];
            const hasFree  = lab.models.some(m => m.freeAccess);
            return (
              <tr
                key={lab.id}
                className="border-b border-violet/[0.06] hover:bg-white/[0.02] transition-colors"
                style={{ borderLeft: `2px solid ${lab.color}44` }}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg leading-none">{lab.emoji}</span>
                    <span className="font-serif text-[14px] text-fg-1">{lab.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-[9px] tracking-[0.10em] uppercase px-1.5 py-0.5 rounded-full border"
                    style={{ color: lab.color, borderColor: lab.color + "44", background: lab.color + "12" }}>
                    {localize(TYPE_LABEL[lab.type], locale)}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-[11px] text-fg-3">{lab.founded}</td>
                <td className="px-4 py-3 font-mono text-[11px] text-fg-2">{lab.models.length}</td>
                <td className="px-4 py-3">
                  <div className="font-sans text-[12px] text-fg-1">{topModel?.name ?? "—"}</div>
                  {topModel?.inputPrice && !topModel.freeAccess && (
                    <div className="font-mono text-[10px] text-fg-4">{localize(COPY.inLabel, locale)} {topModel.inputPrice}</div>
                  )}
                </td>
                <td className="px-4 py-3">
                  {hasFree ? (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-green-500/40 text-green-400 bg-green-500/10">{localize(COPY.yes, locale)}</span>
                  ) : (
                    <span className="font-mono text-[10px] text-fg-4">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {lab.api.available ? (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-violet/40 text-violet-bright bg-violet/10">{localize(COPY.available, locale)}</span>
                  ) : (
                    <span className="font-mono text-[10px] text-fg-4">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function AILabsPage() {
  const { locale } = useLanguage();
  const [activeType, setActiveType]   = useState<string>("all");
  const [activeLab,  setActiveLab]    = useState<AILab | null>(null);
  const [viewMode,   setViewMode]     = useState<"gallery" | "compare">("gallery");

  const filtered = activeType === "all"
    ? AI_LABS
    : AI_LABS.filter(l => l.type === activeType);

  return (
    <div className="min-h-screen bg-void pb-24">

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-12">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-fg-3 mb-3">
          {AI_LABS.length} {localize(COPY.labsUpdated, locale)}
        </p>
        <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-normal tracking-[-0.02em] text-fg-1 leading-[1.04] mb-4">
          {localize(COPY.heroPre, locale)} <em className="italic text-violet-bright">{localize(COPY.heroEm, locale)}</em>
        </h1>
        <p className="font-sans text-[16px] text-fg-3 max-w-2xl leading-[1.65]">
          {localize(COPY.heroSubtitle, locale)}
        </p>
      </div>

      {/* Filter tabs + view toggle */}
      <div className="sticky top-16 z-40 bg-void/90 backdrop-blur-md border-b border-violet/[0.08]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {LAB_TYPES.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveType(t.id)}
              className="flex-shrink-0 font-mono text-[11px] tracking-[0.08em] px-4 py-1.5 rounded-full border transition-all duration-150"
              style={{
                background:  activeType === t.id ? "#9F8CFF22" : "transparent",
                borderColor: activeType === t.id ? "#9F8CFF88" : "#ffffff18",
                color:       activeType === t.id ? "#B6A6FF"   : "#6b6a8a",
              }}
            >
              {localize(t.label, locale)}
            </button>
          ))}

          <div className="ml-auto flex-shrink-0 flex items-center gap-1 bg-void border border-violet/[0.12] rounded-full p-0.5">
            <button
              onClick={() => setViewMode("gallery")}
              className="font-mono text-[10px] tracking-[0.08em] px-3 py-1 rounded-full transition-all duration-150"
              style={{
                background: viewMode === "gallery" ? "#9F8CFF22" : "transparent",
                color:      viewMode === "gallery" ? "#B6A6FF" : "#6b6a8a",
              }}
            >
              {localize(COPY.gallery, locale)}
            </button>
            <button
              onClick={() => setViewMode("compare")}
              className="font-mono text-[10px] tracking-[0.08em] px-3 py-1 rounded-full transition-all duration-150"
              style={{
                background: viewMode === "compare" ? "#9F8CFF22" : "transparent",
                color:      viewMode === "compare" ? "#B6A6FF" : "#6b6a8a",
              }}
            >
              {localize(COPY.compare, locale)}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <AnimatePresence mode="wait">
          {viewMode === "gallery" ? (
            <motion.div
              key={`gallery-${activeType}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map(lab => (
                <LabCard key={lab.id} lab={lab} onClick={() => setActiveLab(lab)} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`compare-${activeType}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <CompareTable labs={filtered} />
            </motion.div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-mono text-[13px] text-fg-4 text-center py-16">{localize(COPY.noLabs, locale)}</p>
        )}
      </div>

      {/* Detail panel */}
      {activeLab && (
        <LabPanel key={activeLab.id} lab={activeLab} onClose={() => setActiveLab(null)} />
      )}
    </div>
  );
}
