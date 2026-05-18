"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowLeft, Search } from "lucide-react";
import dynamic from "next/dynamic";
import { USE_CASES, UseCase, DISC_COUNTS, DIFF_COLOR } from "@/lib/data";
import { CAROUSEL_ITEMS } from "./CategoryCarousel3D";
import UseCaseCard from "./UseCaseCard";
import ExpandedCard from "./ExpandedCard";
import { useLanguage } from "@/context/LanguageContext";

const CategoryCarousel3D = dynamic(() => import("./CategoryCarousel3D"), { ssr: false });

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.35, delay: Math.min(i, 12) * 0.045, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

const DIFFS = ["all", "beginner", "intermediate", "advanced", "expert"] as const;

export default function CategoryBrowser() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx]   = useState(0);
  const [browsingIdx, setBrowsingIdx]   = useState<number | null>(null);
  const [expanded, setExpanded]         = useState<UseCase | null>(null);
  const [expandedItems, setExpandedItems] = useState<UseCase[]>([]);

  // Panel search/filter state
  const [panelSearch, setPanelSearch]   = useState("");
  const [panelDiff, setPanelDiff]       = useState<string>("all");

  const selected  = CAROUSEL_ITEMS[selectedIdx];
  const browsing  = browsingIdx !== null ? CAROUSEL_ITEMS[browsingIdx] : null;

  // ── URL hash deep-linking ────────────────────────────────────────────────────
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const idx = CAROUSEL_ITEMS.findIndex(c => c.id === hash);
    if (idx >= 0) {
      setSelectedIdx(idx);
      setBrowsingIdx(idx);
    }
  }, []);

  useEffect(() => {
    if (browsingIdx !== null) {
      window.history.replaceState(null, "", `#${CAROUSEL_ITEMS[browsingIdx].id}`);
    }
    // Don't reset to #explore on close — let the section anchor remain
  }, [browsingIdx]);

  // ── Cases for current browsing category ─────────────────────────────────────
  const cases = useMemo(
    () => browsing ? USE_CASES.filter(u => u.category === browsing.id) : [],
    [browsing]
  );

  // Filtered cases (search + difficulty)
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      if (panelDiff !== "all" && c.difficulty !== panelDiff) return false;
      if (panelSearch) {
        const q = panelSearch.toLowerCase();
        if (!c.title.toLowerCase().includes(q) && !c.outcome.toLowerCase().includes(q) && !c.desc.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [cases, panelSearch, panelDiff]);

  // Reset filters when panel opens
  useEffect(() => {
    if (browsingIdx !== null) {
      setPanelSearch("");
      setPanelDiff("all");
    }
  }, [browsingIdx]);

  const prev = () => setSelectedIdx(i => (i - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  const next = () => setSelectedIdx(i => (i + 1) % CAROUSEL_ITEMS.length);

  // Clicking the 3D shape selects it; clicking again (already selected) opens the panel
  const handleSelect = useCallback((idx: number) => {
    if (idx === selectedIdx) {
      setBrowsingIdx(idx);
    } else {
      setSelectedIdx(idx);
    }
  }, [selectedIdx]);

  const closeBrowsing = () => setBrowsingIdx(null);

  const handleOpenExpanded = useCallback((item: UseCase) => {
    setExpanded(item);
    setExpandedItems(filteredCases);
  }, [filteredCases]);

  return (
    <section id="explore" className="relative bg-void overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── 3D Carousel ─────────────────────────────────────────────── */}
        <div className="relative h-[56vh] min-h-[360px] max-h-[520px] w-full">
          <CategoryCarousel3D selectedIndex={selectedIdx} onSelect={handleSelect} />

          <button onClick={prev} className="carousel-arrow carousel-arrow--left" aria-label="Previous category">
            <ChevronLeft size={22} />
          </button>
          <button onClick={next} className="carousel-arrow carousel-arrow--right" aria-label="Next category">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* ── Active category label ────────────────────────────────────── */}
        <div className="relative z-10 text-center py-8 md:py-10 px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="eyebrow mb-3" style={{ color: selected.hex }}>
                {selected.cosmicName.toUpperCase()}
              </p>
              <h2
                className="font-serif font-light text-[clamp(32px,4.5vw,64px)] leading-[1.03] tracking-[-0.02em] text-fg-1"
                style={{ textShadow: `0 0 60px ${selected.hex}30` }}
              >
                {selected.label}
              </h2>
              <p className="font-sans text-[15px] text-fg-3 mt-2 max-w-sm mx-auto leading-[1.5]">
                {selected.essence}
              </p>
              <span className="font-mono text-[11px] text-fg-4 tracking-[0.08em] mt-3 block">
                {String(selectedIdx + 1).padStart(2, "0")} / {String(CAROUSEL_ITEMS.length).padStart(2, "0")}
                &nbsp;·&nbsp;
                {t.carousel_use_cases(DISC_COUNTS[selected.id] ?? 0)}
              </span>

              {/* Explore CTA */}
              <button
                onClick={() => setBrowsingIdx(selectedIdx)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-current font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 hover:bg-white/5"
                style={{ color: selected.hex, borderColor: `${selected.hex}60` }}
              >
                {t.carousel_explore_cta}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigator */}
          <div className="flex justify-center gap-2 mt-6">
            {CAROUSEL_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  background: i === selectedIdx ? item.hex : "rgba(255,255,255,0.15)",
                  transform:  i === selectedIdx ? "scale(1.4)" : "scale(1)",
                  boxShadow:  i === selectedIdx ? `0 0 8px ${item.hex}` : "none",
                }}
                aria-label={item.label}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Domain panel (full-screen overlay) ───────────────────────── */}
      <AnimatePresence>
        {browsing && (
          <motion.div
            key="domain-panel"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-void overflow-y-auto"
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            {/* Panel header */}
            <div
              className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-hairline bg-void/95 backdrop-blur-md"
              style={{ boxShadow: `0 1px 0 ${browsing.hex}18` }}
            >
              <button
                onClick={closeBrowsing}
                className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-fg-3 hover:text-fg-1 transition-colors"
              >
                <ArrowLeft size={14} /> {t.carousel_back}
              </button>

              <div className="text-center">
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: browsing.hex }}>
                  {browsing.cosmicName}
                </p>
                <p className="font-sans text-[13px] font-medium text-fg-1">{browsing.label}</p>
              </div>

              <button
                onClick={closeBrowsing}
                className="w-8 h-8 flex items-center justify-center rounded-full text-fg-3 hover:text-fg-1 hover:bg-white/8 transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Accent line */}
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${browsing.hex}60, transparent)` }} />

            {/* Search + difficulty filter bar */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-4 flex items-center gap-3 flex-wrap border-b border-hairline/50">
              <div className="relative flex-1 min-w-[180px] max-w-xs">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-4 pointer-events-none" />
                <input
                  type="search"
                  value={panelSearch}
                  onChange={e => setPanelSearch(e.target.value)}
                  placeholder="Search use cases…"
                  className="w-full bg-white/[0.04] border border-hairline rounded-lg pl-8 pr-3 py-1.5 font-mono text-[12px] text-fg-1 placeholder:text-fg-4 outline-none focus:border-violet/60 transition-colors"
                />
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {DIFFS.map(d => (
                  <button
                    key={d}
                    onClick={() => setPanelDiff(d)}
                    className="font-mono text-[10px] tracking-[0.06em] px-2.5 py-1 rounded-full border transition-all duration-150 capitalize"
                    style={{
                      background:  panelDiff === d ? (d === "all" ? "#9F8CFF22" : (DIFF_COLOR as Record<string, string>)[d] + "22") : "transparent",
                      borderColor: panelDiff === d ? (d === "all" ? "#9F8CFF88" : (DIFF_COLOR as Record<string, string>)[d] + "88") : "#ffffff18",
                      color:       panelDiff === d ? (d === "all" ? "#B6A6FF"   : (DIFF_COLOR as Record<string, string>)[d]) : "#6b6a8a",
                    }}
                  >
                    {d === "all" ? "All levels" : d}
                  </button>
                ))}
              </div>
              {(panelSearch || panelDiff !== "all") && (
                <span className="font-mono text-[11px] text-fg-4 ml-auto">
                  {filteredCases.length} result{filteredCases.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {/* Cards grid */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-10 md:py-14">
              {filteredCases.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-mono text-[13px] text-fg-4">No use cases match your filter.</p>
                  <button
                    onClick={() => { setPanelSearch(""); setPanelDiff("all"); }}
                    className="mt-4 font-mono text-[11px] text-violet-bright hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {filteredCases.map((item, i) => {
                      const featured = i === 0 && filteredCases.length >= 4;
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          custom={i}
                          variants={CARD_VARIANTS}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className={featured ? "sm:col-span-2 lg:col-span-2" : ""}
                        >
                          <UseCaseCard
                            item={item}
                            onOpen={handleOpenExpanded}
                            onTagFilter={() => {}}
                            isFeatured={featured}
                          />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ExpandedCard item={expanded} onClose={() => setExpanded(null)} items={expandedItems} />
    </section>
  );
}
