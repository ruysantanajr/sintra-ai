import { USE_CASES, BASE_PATH } from "./data";
import { AI_TOOLS } from "./toolsData";
import { AI_NEWS } from "./newsData";
import { LEARNING_PATHS } from "./learningPathsData";
import { CONCEPTS } from "./concepts";
import { AI_LABS } from "./aiLabsData";
import { RESOURCES } from "./resourcesData";

export type EntityKind =
  | "use_case"
  | "tool"
  | "concept"
  | "lab"
  | "news"
  | "path"
  | "resource";

export interface SearchDocument {
  id: string;
  kind: EntityKind;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  body: string;
  useCaseId?: number;
}

export const KIND_META: Record<EntityKind, { label: string; pluralLabel: string; color: string }> = {
  use_case: { label: "Use Case",      pluralLabel: "Use Cases",      color: "#9F8CFF" },
  tool:     { label: "Tool",          pluralLabel: "Tools",          color: "#8FE3D2" },
  concept:  { label: "Concept",       pluralLabel: "Concepts",       color: "#F4D06F" },
  lab:      { label: "AI Lab",        pluralLabel: "AI Labs",        color: "#F08CA8" },
  news:     { label: "News",          pluralLabel: "News",           color: "#6EE7A0" },
  path:     { label: "Learning Path", pluralLabel: "Learning Paths", color: "#E8C089" },
  resource: { label: "Resource",      pluralLabel: "Resources",      color: "#B6A6FF" },
};

const KIND_ORDER: EntityKind[] = ["use_case", "tool", "concept", "news", "lab", "path", "resource"];

export const SEARCH_INDEX: SearchDocument[] = [
  ...USE_CASES.map(u => ({
    id: `use_case-${u.id}`,
    kind: "use_case" as EntityKind,
    title: u.title,
    summary: u.desc || u.outcome,
    tags: u.tags,
    href: `${BASE_PATH}/#explore`,
    body: [u.title, u.desc, u.outcome, u.prompt, u.best_llm, ...u.tags, ...u.tools, ...u.inputs.map(i => i.label)].join(" "),
    useCaseId: u.id,
  })),
  ...AI_TOOLS.map(t => ({
    id: `tool-${t.id}`,
    kind: "tool" as EntityKind,
    title: t.name,
    summary: t.tagline,
    tags: t.tags,
    href: `${BASE_PATH}/tools/`,
    body: [t.name, t.tagline, t.description, t.provider, t.category, t.highlight, ...t.tags].join(" "),
  })),
  ...CONCEPTS.map(c => {
    const termEn = c.term.en;
    const termPt = c.term["pt-BR"];
    return {
      id: `concept-${c.id}`,
      kind: "concept" as EntityKind,
      title: termEn + (c.shortTerm ? ` (${c.shortTerm})` : ""),
      summary: c.tagline.en,
      tags: [c.category, ...c.related].slice(0, 4),
      href: `${BASE_PATH}/concepts/`,
      body: [
        termEn, termPt, c.shortTerm ?? "",
        c.tagline.en, c.tagline["pt-BR"],
        c.body.en, c.body["pt-BR"],
        c.analogy.en, c.analogy["pt-BR"],
        c.category, ...c.related,
      ].join(" "),
    };
  }),
  ...AI_NEWS.map(n => ({
    id: `news-${n.id}`,
    kind: "news" as EntityKind,
    title: n.title,
    summary: n.summary,
    tags: n.tags,
    href: `${BASE_PATH}/news/`,
    body: [n.title, n.summary, n.provider, n.date, n.significance, ...n.tags].join(" "),
  })),
  ...AI_LABS.map(lab => ({
    id: `lab-${lab.id}`,
    kind: "lab" as EntityKind,
    title: lab.name,
    summary: lab.tagline.en,
    tags: lab.focus.slice(0, 3).map(f => f.en),
    href: `${BASE_PATH}/ai-labs/`,
    body: [
      lab.name,
      lab.tagline.en, lab.tagline["pt-BR"],
      lab.type,
      lab.description.en, lab.description["pt-BR"],
      ...lab.focus.flatMap(f => [f.en, f["pt-BR"]]),
      ...lab.strengths.flatMap(s => [s.en, s["pt-BR"]]),
      ...lab.useCases.flatMap(u => [u.en, u["pt-BR"]]),
      ...lab.products,
      ...lab.models.map(m => m.name),
    ].join(" "),
  })),
  ...LEARNING_PATHS.map(p => ({
    id: `path-${p.id}`,
    kind: "path" as EntityKind,
    title: p.title.en,
    summary: p.tagline.en,
    tags: [p.level, p.audience.en],
    href: `${BASE_PATH}/learn/`,
    body: [
      p.title.en, p.title["pt-BR"],
      p.tagline.en, p.tagline["pt-BR"],
      p.level,
      p.audience.en, p.audience["pt-BR"],
      ...p.steps.flatMap(s => [
        s.label.en, s.label["pt-BR"],
        s.desc.en, s.desc["pt-BR"],
      ]),
    ].join(" "),
  })),
  ...RESOURCES.map(r => ({
    id: `resource-${r.id}`,
    kind: "resource" as EntityKind,
    title: r.name,
    summary: r.tagline.en,
    tags: r.tags,
    href: `${BASE_PATH}/resources/`,
    body: [
      r.name,
      r.tagline.en, r.tagline["pt-BR"],
      r.category,
      r.highlight?.en ?? "", r.highlight?.["pt-BR"] ?? "",
      ...r.tags,
    ].join(" "),
  })),
];

export function searchAll(query: string): { kind: EntityKind; docs: SearchDocument[] }[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const matched = SEARCH_INDEX.filter(doc =>
    doc.body.toLowerCase().includes(q) || doc.title.toLowerCase().includes(q)
  );

  const grouped: Partial<Record<EntityKind, SearchDocument[]>> = {};
  for (const doc of matched) {
    if (!grouped[doc.kind]) grouped[doc.kind] = [];
    grouped[doc.kind]!.push(doc);
  }

  return KIND_ORDER
    .filter(k => grouped[k] && grouped[k]!.length > 0)
    .map(k => ({ kind: k, docs: grouped[k]! }));
}
