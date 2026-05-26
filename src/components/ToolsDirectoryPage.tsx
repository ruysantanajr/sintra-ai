"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { AI_TOOLS, TOOL_CATEGORIES, type AITool, type ToolCategory } from "@/lib/toolsData";
import { BASE_PATH } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { localize, l } from "@/lib/localized";

const PRICING_COLOR: Record<string, string> = {
  free:       "#10b981",
  freemium:   "#6ee7a0",
  paid:       "#9F8CFF",
  enterprise: "#e8c089",
};

const PRICING_LABEL = {
  free:       l("Free",       "Grátis"),
  freemium:   l("Freemium",   "Freemium"),
  paid:       l("Paid",       "Pago"),
  enterprise: l("Enterprise", "Corporativo"),
};

const COPY = {
  back:           l("Back to Sintra",          "Voltar para o Sintra"),
  eyebrow:        l("AI Tools Universe",       "Universo de ferramentas de IA"),
  titleA:         l("Every AI tool,",          "Toda ferramenta de IA,"),
  titleB:         l("mapped.",                 "mapeada."),
  subtitle:       l(
    "A curated directory of the best AI tools across every category — with honest pricing, real descriptions, and direct links.",
    "Um diretório curado das melhores ferramentas de IA em todas as categorias — com preço honesto, descrições reais e links diretos.",
  ),
  curated:        l("tools curated",           "ferramentas curadas"),
  categoriesLabel:l("categories",              "categorias"),
  searchPh:       l("Search tools…",           "Buscar ferramentas…"),
  allPricing:     l("All pricing",             "Todos os preços"),
  results:        l("results",                 "resultados"),
  all:            l("All",                     "Todas"),
  betaBadge:      l("Beta",                    "Beta"),
  noTools:        l("No tools found",          "Nenhuma ferramenta encontrada"),
  clearFilters:   l("Clear filters",           "Limpar filtros"),
};

function ToolCard({ tool }: { tool: AITool }) {
  const { locale } = useLanguage();
  const cat = TOOL_CATEGORIES.find(c => c.id === tool.category);
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border p-5 transition-all duration-200 hover:scale-[1.015] hover:shadow-lg bg-[#0d0a1c] border-violet/[0.12] hover:border-violet/40"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-serif text-[16px] text-fg-1 leading-none">{tool.name}</h3>
            {tool.status === "beta" && (
              <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full border border-amber-500/40 text-amber-400 bg-amber-500/10 uppercase tracking-[0.08em]">{localize(COPY.betaBadge, locale)}</span>
            )}
          </div>
          <p className="font-sans text-[12px] text-fg-4">{tool.provider}</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-mono text-[9px] px-2 py-0.5 rounded-full border uppercase tracking-[0.08em]"
            style={{ color: PRICING_COLOR[tool.pricing], borderColor: PRICING_COLOR[tool.pricing] + "44", background: PRICING_COLOR[tool.pricing] + "12" }}>
            {localize(PRICING_LABEL[tool.pricing], locale)}
          </span>
          <ExternalLink size={11} className="text-fg-4 group-hover:text-violet-bright transition-colors" />
        </div>
      </div>

      {/* Tagline */}
      <p className="font-sans text-[13px] text-fg-2 leading-[1.5]">{localize(tool.tagline, locale)}</p>

      {/* Highlight */}
      <p className="font-sans text-[12px] text-fg-3 leading-[1.4] line-clamp-2">{localize(tool.highlight, locale)}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-hairline/50 mt-auto">
        <span className="font-mono text-[10px] text-fg-4">
          {cat?.icon} {cat ? localize(cat.label, locale) : ""}
        </span>
        <span className="font-mono text-[10px] text-fg-4">{localize(tool.priceNote, locale)}</span>
      </div>
    </a>
  );
}

export default function ToolsDirectoryPage() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");
  const [activePricing, setActivePricing]   = useState<string>("all");
  const [search, setSearch]                  = useState("");

  const filtered = useMemo(() => {
    return AI_TOOLS.filter(t => {
      if (activeCategory !== "all" && t.category !== activeCategory) return false;
      if (activePricing !== "all" && t.pricing !== activePricing) return false;
      if (search) {
        const q = search.toLowerCase();
        const tagline = localize(t.tagline, locale).toLowerCase();
        if (!t.name.toLowerCase().includes(q) && !tagline.includes(q) && !t.provider.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [activeCategory, activePricing, search, locale]);

  return (
    <div className="min-h-screen bg-abyss text-fg-1">
      {/* Ambient */}
      <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #9F8CFF, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #5EEAD4, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Back */}
        <div className="pt-10 pb-6">
          <a href={`${BASE_PATH}/`}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-fg-3 hover:text-violet-bright transition-colors group">
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            {localize(COPY.back, locale)}
          </a>
        </div>

        {/* Hero */}
        <motion.header className="pt-6 pb-16 border-b border-violet/[0.12]"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="inline-flex gap-3.5 items-center mb-6">
            <span className="w-9 h-px bg-gradient-to-r from-transparent to-violet-bright" />
            <span className="eyebrow violet">{localize(COPY.eyebrow, locale)}</span>
          </div>
          <h1 className="font-serif font-light text-[clamp(40px,6vw,88px)] leading-[1.04] tracking-[-0.025em] text-fg-1 mb-5">
            {localize(COPY.titleA, locale)}{" "}
            <em className="italic" style={{
              backgroundImage: "linear-gradient(180deg, #F4F2EA 0%, #9F8CFF 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{localize(COPY.titleB, locale)}</em>
          </h1>
          <p className="font-sans text-[17px] text-fg-2 max-w-xl leading-[1.55]">
            {localize(COPY.subtitle, locale)}
          </p>
          <div className="flex items-center gap-4 mt-8 font-mono text-[11px] text-fg-3 tracking-[0.06em]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {AI_TOOLS.length} {localize(COPY.curated, locale)}
            </span>
            <span className="text-fg-4">·</span>
            <span>{TOOL_CATEGORIES.length} {localize(COPY.categoriesLabel, locale)}</span>
          </div>
        </motion.header>

        {/* Filters */}
        <div className="sticky top-16 z-40 bg-abyss/95 backdrop-blur-md border-b border-violet/[0.08] py-3 -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px] max-w-xs">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-4 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={localize(COPY.searchPh, locale)}
                className="w-full bg-white/[0.04] border border-hairline rounded-lg pl-8 pr-3 py-1.5 font-mono text-[12px] text-fg-1 placeholder:text-fg-4 outline-none focus:border-violet/60 transition-colors"
              />
            </div>

            {/* Pricing filter */}
            <div className="flex gap-1.5 flex-wrap">
              {(["all", "free", "freemium", "paid", "enterprise"] as const).map(p => (
                <button key={p} onClick={() => setActivePricing(p)}
                  className="font-mono text-[10px] tracking-[0.06em] px-2.5 py-1 rounded-full border transition-all capitalize"
                  style={{
                    background:  activePricing === p ? "#9F8CFF22" : "transparent",
                    borderColor: activePricing === p ? "#9F8CFF88" : "#ffffff18",
                    color:       activePricing === p ? "#B6A6FF"   : "#6b6a8a",
                  }}>
                  {p === "all" ? localize(COPY.allPricing, locale) : localize(PRICING_LABEL[p], locale)}
                </button>
              ))}
            </div>

            {filtered.length !== AI_TOOLS.length && (
              <span className="font-mono text-[11px] text-fg-4 ml-auto">{filtered.length} {localize(COPY.results, locale)}</span>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-4 overflow-x-auto scrollbar-none py-8 border-b border-violet/[0.06]" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => setActiveCategory("all")}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border transition-all"
            style={{
              background:  activeCategory === "all" ? "#9F8CFF22" : "transparent",
              borderColor: activeCategory === "all" ? "#9F8CFF88" : "#ffffff12",
            }}
          >
            <span className="text-xl">🌐</span>
            <span className="font-mono text-[10px] tracking-[0.06em] whitespace-nowrap" style={{ color: activeCategory === "all" ? "#B6A6FF" : "#6b6a8a" }}>{localize(COPY.all, locale)}</span>
          </button>
          {TOOL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              title={localize(cat.desc, locale)}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl border transition-all"
              style={{
                background:  activeCategory === cat.id ? "#9F8CFF22" : "transparent",
                borderColor: activeCategory === cat.id ? "#9F8CFF88" : "#ffffff12",
              }}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="font-mono text-[10px] tracking-[0.06em] whitespace-nowrap" style={{ color: activeCategory === cat.id ? "#B6A6FF" : "#6b6a8a" }}>{localize(cat.label, locale)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="py-10 mb-20">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-[24px] text-fg-3 mb-3">{localize(COPY.noTools, locale)}</p>
              <button onClick={() => { setSearch(""); setActiveCategory("all"); setActivePricing("all"); }}
                className="font-mono text-[12px] text-violet-bright hover:underline">{localize(COPY.clearFilters, locale)}</button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activePricing}-${search}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filtered.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
