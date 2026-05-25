"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { RESOURCES, RESOURCE_CATEGORIES, type ResourceLink, type ResourceCategory } from "@/lib/resourcesData";
import { BASE_PATH } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { localize, l } from "@/lib/localized";

const COPY = {
  back:         l("Back to Sintra",                "Voltar para o Sintra"),
  eyebrow:      l("AI Ecosystem",                  "Ecossistema de IA"),
  titleA:       l("Resources &",                   "Recursos &"),
  titleB:       l("links.",                        "links."),
  subtitle: l(
    "The full AI developer ecosystem in one place — APIs, frameworks, agents, vector stores, MCP servers, eval tools, communities, and research.",
    "O ecossistema completo de IA num só lugar — APIs, frameworks, agentes, bancos vetoriais, servidores MCP, ferramentas de avaliação, comunidades e pesquisa.",
  ),
  curated:      l("resources curated",             "recursos curados"),
  categoriesLabel: l("categories",                 "categorias"),
  free:         l("free",                          "grátis"),
  freeBadge:    l("Free",                          "Grátis"),
  searchPlaceholder: l("Search resources…",        "Buscar recursos…"),
  freeOnly:     l("Free only",                     "Só grátis"),
  results:      l("results",                       "resultados"),
  all:          l("All",                           "Todos"),
  nothingFound: l("Nothing found",                 "Nada encontrado"),
  clearFilters: l("Clear filters",                 "Limpar filtros"),
};

function ResourceCard({ res }: { res: ResourceLink }) {
  const { locale } = useLanguage();
  const cat = RESOURCE_CATEGORIES.find(c => c.id === res.category)!;
  return (
    <a
      href={res.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border p-4 transition-all duration-200 hover:scale-[1.015] bg-[#0d0a1c]"
      style={{ borderColor: cat.color + "28" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <h3 className="font-serif text-[15px] text-fg-1 leading-none group-hover:text-white transition-colors">
              {res.name}
            </h3>
            {res.free && (
              <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full border border-green-500/40 text-green-400 bg-green-500/10 uppercase tracking-[0.08em]">{localize(COPY.freeBadge, locale)}</span>
            )}
          </div>
          <p className="font-sans text-[11px] text-fg-4 mt-0.5">{localize(res.tagline, locale)}</p>
        </div>
        <ExternalLink size={12} className="text-fg-4 group-hover:text-fg-2 transition-colors shrink-0 mt-0.5" />
      </div>

      {res.highlight && (
        <p className="font-sans text-[12px] text-fg-3 leading-[1.5] line-clamp-2">{localize(res.highlight, locale)}</p>
      )}

      <div className="flex items-center gap-2 flex-wrap mt-auto pt-2 border-t border-hairline/40">
        <span className="font-mono text-[9px]" style={{ color: cat.color }}>{cat.icon} {localize(cat.label, locale)}</span>
        {res.tags.slice(0, 2).map(tag => (
          <span key={tag} className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm bg-violet/[0.06] text-fg-4 border border-violet/[0.10]">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = useMemo(() => {
    return RESOURCES.filter(r => {
      if (activeCategory !== "all" && r.category !== activeCategory) return false;
      if (freeOnly && !r.free) return false;
      if (search) {
        const q = search.toLowerCase();
        const tagline = localize(r.tagline, locale).toLowerCase();
        const highlight = r.highlight ? localize(r.highlight, locale).toLowerCase() : "";
        if (!r.name.toLowerCase().includes(q) &&
            !tagline.includes(q) &&
            !highlight.includes(q) &&
            !r.tags.some(t => t.toLowerCase().includes(q))) return false;
      }
      return true;
    });
  }, [activeCategory, search, freeOnly, locale]);

  // Group filtered results by category when showing all
  const grouped = useMemo(() => {
    if (activeCategory !== "all" || search) {
      return [{ cat: null, items: filtered }];
    }
    return RESOURCE_CATEGORIES
      .map(cat => ({ cat, items: filtered.filter(r => r.category === cat.id) }))
      .filter(g => g.items.length > 0);
  }, [activeCategory, filtered, search]);

  return (
    <div className="min-h-screen bg-abyss text-fg-1">
      {/* Ambient */}
      <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #5EEAD4, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #9F8CFF, transparent 70%)" }} />
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
              backgroundImage: "linear-gradient(180deg, #F4F2EA 0%, #5EEAD4 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{localize(COPY.titleB, locale)}</em>
          </h1>
          <p className="font-sans text-[17px] text-fg-2 max-w-xl leading-[1.55]">
            {localize(COPY.subtitle, locale)}
          </p>
          <div className="flex items-center gap-4 mt-8 font-mono text-[11px] text-fg-3 tracking-[0.06em]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {RESOURCES.length} {localize(COPY.curated, locale)}
            </span>
            <span className="text-fg-4">·</span>
            <span>{RESOURCE_CATEGORIES.length} {localize(COPY.categoriesLabel, locale)}</span>
            <span className="text-fg-4">·</span>
            <span>{RESOURCES.filter(r => r.free).length} {localize(COPY.free, locale)}</span>
          </div>
        </motion.header>

        {/* Filters bar */}
        <div className="sticky top-16 z-40 bg-abyss/95 backdrop-blur-md border-b border-violet/[0.08] py-3 -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[160px] max-w-xs">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-4 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={localize(COPY.searchPlaceholder, locale)}
                className="w-full bg-white/[0.04] border border-hairline rounded-lg pl-8 pr-3 py-1.5 font-mono text-[12px] text-fg-1 placeholder:text-fg-4 outline-none focus:border-violet/60 transition-colors"
              />
            </div>
            <button
              onClick={() => setFreeOnly(f => !f)}
              className="font-mono text-[10px] tracking-[0.06em] px-2.5 py-1 rounded-full border transition-all"
              style={{
                background:  freeOnly ? "#10b98122" : "transparent",
                borderColor: freeOnly ? "#10b98188" : "#ffffff18",
                color:       freeOnly ? "#10b981" : "#6b6a8a",
              }}
            >
              {localize(COPY.freeOnly, locale)}
            </button>
            {(search || freeOnly || activeCategory !== "all") && (
              <span className="font-mono text-[11px] text-fg-4 ml-auto">{filtered.length} {localize(COPY.results, locale)}</span>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none py-6 border-b border-violet/[0.06]" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => setActiveCategory("all")}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-mono text-[11px] tracking-[0.04em]"
            style={{
              background:  activeCategory === "all" ? "#9F8CFF22" : "transparent",
              borderColor: activeCategory === "all" ? "#9F8CFF88" : "#ffffff12",
              color:       activeCategory === "all" ? "#B6A6FF" : "#6b6a8a",
            }}
          >
            🌐 {localize(COPY.all, locale)}
          </button>
          {RESOURCE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              title={localize(cat.desc, locale)}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-mono text-[11px] tracking-[0.04em] whitespace-nowrap"
              style={{
                background:  activeCategory === cat.id ? cat.color + "22" : "transparent",
                borderColor: activeCategory === cat.id ? cat.color + "88" : "#ffffff12",
                color:       activeCategory === cat.id ? cat.color : "#6b6a8a",
              }}
            >
              {cat.icon} {localize(cat.label, locale)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="py-10 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${search}-${freeOnly}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-serif text-[22px] text-fg-3 mb-3">{localize(COPY.nothingFound, locale)}</p>
                  <button onClick={() => { setSearch(""); setActiveCategory("all"); setFreeOnly(false); }}
                    className="font-mono text-[12px] text-violet-bright hover:underline">{localize(COPY.clearFilters, locale)}</button>
                </div>
              ) : (
                grouped.map(({ cat, items }) => (
                  <div key={cat?.id ?? "all"} className="mb-12">
                    {cat && (
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: cat.color }}>
                          {cat.icon} {localize(cat.label, locale)}
                        </span>
                        <div className="flex-1 h-px" style={{ background: cat.color + "22" }} />
                        <span className="font-mono text-[10px] text-fg-4">{items.length}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {items.map(res => <ResourceCard key={res.id} res={res} />)}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
