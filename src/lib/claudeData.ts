import { l, type LocalizedString } from "./localized";

export interface ClaudeModel {
  id: string;
  name: string;
  tagline: LocalizedString;
  tier: "haiku" | "sonnet" | "opus";
  color: string;
  contextWindow: string;
  inputPrice: string;
  outputPrice: string;
  speed: "fastest" | "balanced" | "most capable";
  bestFor: LocalizedString[];
  features: LocalizedString[];
  freeAccess: boolean;
}

export interface ClaudeProduct {
  id: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  icon: string;
  color: string;
  url: string;
  highlights: LocalizedString[];
}

export interface ClaudeCapability {
  id: string;
  name: LocalizedString;
  icon: string;
  desc: LocalizedString;
  link?: string;
}

// ─── Models ──────────────────────────────────────────────────────────────────

export const CLAUDE_MODELS: ClaudeModel[] = [
  {
    id: "claude-haiku-4-5-20251001",
    name: "Claude Haiku 4.5",
    tagline: l("Fastest Claude for high-volume tasks", "O Claude mais rápido para tarefas de alto volume"),
    tier: "haiku",
    color: "#10b981",
    contextWindow: "200K",
    inputPrice: "$0.80 / 1M tokens",
    outputPrice: "$4 / 1M tokens",
    speed: "fastest",
    bestFor: [
      l("High-frequency pipelines",  "Pipelines de alta frequência"),
      l("Real-time chat",            "Chat em tempo real"),
      l("Classification",            "Classificação"),
      l("Summarization",             "Sumarização"),
    ],
    features: [
      l("Lowest latency in the Claude family", "Menor latência da família Claude"),
      l("Cost-optimized for production scale", "Otimizado em custo para escala de produção"),
      l("200K token context window",           "Janela de contexto de 200K tokens"),
      l("Strong instruction following",        "Segue instruções com precisão"),
      l("Ideal for agentic sub-tasks that require speed", "Ideal para subtarefas agênticas que exigem velocidade"),
    ],
    freeAccess: false,
  },
  {
    id: "claude-sonnet-4-6",
    name: "Claude Sonnet 4.6",
    tagline: l("The sweet spot of intelligence and speed", "O ponto ideal entre inteligência e velocidade"),
    tier: "sonnet",
    color: "#9F8CFF",
    contextWindow: "200K",
    inputPrice: "$3 / 1M tokens",
    outputPrice: "$15 / 1M tokens",
    speed: "balanced",
    bestFor: [
      l("Software engineering", "Engenharia de software"),
      l("Research & analysis",  "Pesquisa & análise"),
      l("Long-form writing",    "Escrita de textos longos"),
      l("Agentic workflows",    "Fluxos agênticos"),
    ],
    features: [
      l("Top performance on SWE-bench coding evals", "Top de performance nas avaliações de código SWE-bench"),
      l("200K token context for multi-document tasks", "Contexto de 200K tokens para tarefas multi-documento"),
      l("Accurate multi-step agentic execution", "Execução agêntica precisa em múltiplos passos"),
      l("Nuanced instruction following and tone control", "Seguimento refinado de instruções e controle de tom"),
      l("Best cost-to-capability ratio for production apps", "Melhor relação custo-capacidade para apps em produção"),
    ],
    freeAccess: false,
  },
  {
    id: "claude-opus-4-7",
    name: "Claude Opus 4.7",
    tagline: l("Maximum intelligence with extended thinking", "Inteligência máxima com pensamento estendido"),
    tier: "opus",
    color: "#f59e0b",
    contextWindow: "200K",
    inputPrice: "$15 / 1M tokens",
    outputPrice: "$75 / 1M tokens",
    speed: "most capable",
    bestFor: [
      l("Complex reasoning",   "Raciocínio complexo"),
      l("Strategic analysis",  "Análise estratégica"),
      l("Long-horizon agents", "Agentes de longo horizonte"),
      l("Scientific research", "Pesquisa científica"),
    ],
    features: [
      l("Extended Thinking mode for deep chain-of-thought", "Modo Extended Thinking para raciocínio em cadeia profundo"),
      l("Highest accuracy on complex reasoning benchmarks", "Maior acurácia em benchmarks de raciocínio complexo"),
      l("Ideal for long-horizon autonomous agent tasks", "Ideal para tarefas de agentes autônomos de longo horizonte"),
      l("Superior performance on graduate-level STEM problems", "Performance superior em problemas de STEM nível pós-graduação"),
      l("Best-in-class for nuanced multi-step decision making", "Top de linha para decisões refinadas de múltiplos passos"),
    ],
    freeAccess: false,
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const CLAUDE_PRODUCTS: ClaudeProduct[] = [
  {
    id: "claude-ai",
    name: "Claude.ai",
    tagline: l("The flagship Claude chat interface", "A interface de chat principal do Claude"),
    description: l(
      "A polished web and mobile chat interface giving direct access to the Claude model family. Supports Projects for persistent context, artifact rendering, file uploads, vision, and voice.",
      "Uma interface de chat polida para web e mobile com acesso direto à família Claude. Suporta Projects para contexto persistente, renderização de artefatos, upload de arquivos, visão e voz.",
    ),
    icon: "💬",
    color: "#9F8CFF",
    url: "https://claude.ai",
    highlights: [
      l("Projects with persistent memory across conversations", "Projects com memória persistente entre conversas"),
      l("Artifact preview for code, documents, and SVGs",       "Preview de artefatos para código, documentos e SVGs"),
      l("File and image upload with vision understanding",      "Upload de arquivos e imagens com compreensão visual"),
      l("Free tier available with Claude access",               "Plano gratuito disponível com acesso ao Claude"),
    ],
  },
  {
    id: "claude-api",
    name: "Claude API",
    tagline: l("Full programmatic access via Anthropic's API", "Acesso programático completo via API da Anthropic"),
    description: l(
      "Enterprise-grade REST API giving developers access to all Claude models with tool use, streaming, batch processing, prompt caching, and the full suite of capabilities for production applications.",
      "API REST de nível corporativo com acesso a todos os modelos Claude, com tool use, streaming, processamento em batch, prompt caching e todo o conjunto de recursos para aplicações em produção.",
    ),
    icon: "⚡",
    color: "#5EEAD4",
    url: "https://console.anthropic.com",
    highlights: [
      l("Access all Claude models with a single API key", "Acesse todos os modelos Claude com uma única chave de API"),
      l("Prompt caching for up to 90% cost reduction on repeated context", "Prompt caching para até 90% de redução de custo em contexto repetido"),
      l("Streaming, tool use, and structured output support", "Suporte a streaming, tool use e saída estruturada"),
      l("Python and TypeScript SDKs with full type safety", "SDKs em Python e TypeScript com tipagem completa"),
    ],
  },
  {
    id: "claude-code",
    name: "Claude Code",
    tagline: l("Agentic AI coding assistant for the terminal", "Assistente de IA agêntico para o terminal"),
    description: l(
      "A CLI tool that brings Claude directly into your development workflow. Claude Code can read and edit files, run terminal commands, manage git, and complete multi-step software engineering tasks autonomously.",
      "Uma CLI que coloca o Claude diretamente no seu fluxo de desenvolvimento. O Claude Code consegue ler e editar arquivos, rodar comandos no terminal, gerenciar git e completar tarefas de engenharia de software em múltiplos passos de forma autônoma.",
    ),
    icon: "🖥️",
    color: "#8FE3D2",
    url: "https://claude.ai/code",
    highlights: [
      l("Reads, writes, and refactors entire codebases", "Lê, escreve e refatora bases de código inteiras"),
      l("Runs shell commands, tests, and git operations", "Executa comandos shell, testes e operações git"),
      l("MCP server support for custom tool integrations", "Suporte a servidores MCP para integrações customizadas"),
      l("Remote Control for browser-based agent sessions", "Remote Control para sessões de agente baseadas no navegador"),
    ],
  },
  {
    id: "claude-ios",
    name: "Claude iOS App",
    tagline: l("Claude on the go — with Remote Control support", "Claude no celular — com suporte a Remote Control"),
    description: l(
      "The native iOS app for Claude gives you access to conversations on iPhone and iPad, with voice input, image understanding, and Remote Control capability to manage Claude Code sessions from your phone.",
      "O app nativo iOS do Claude dá acesso a conversas no iPhone e iPad, com entrada por voz, compreensão de imagem e Remote Control para gerenciar sessões do Claude Code direto do celular.",
    ),
    icon: "📱",
    color: "#f59e0b",
    url: "https://apps.apple.com/us/app/claude-by-anthropic/id6473753684",
    highlights: [
      l("Full Claude model access on iPhone and iPad",          "Acesso completo aos modelos Claude no iPhone e iPad"),
      l("Voice input for hands-free conversation",              "Entrada por voz para conversa hands-free"),
      l("Remote Control: monitor and guide Claude Code sessions", "Remote Control: monitore e guie sessões do Claude Code"),
      l("Projects sync with claude.ai for continuity",          "Sincronização de Projects com claude.ai para continuidade"),
    ],
  },
];

// ─── Capabilities ─────────────────────────────────────────────────────────────

export const CLAUDE_CAPABILITIES: ClaudeCapability[] = [
  {
    id: "extended-thinking",
    name: l("Extended Thinking", "Extended Thinking"),
    icon: "🧠",
    desc: l(
      "Claude Opus 4.7 can reason through problems step-by-step before answering, spending more compute tokens on hard problems to produce more accurate, transparent conclusions.",
      "O Claude Opus 4.7 consegue raciocinar problemas passo a passo antes de responder, gastando mais tokens de computação em problemas difíceis para produzir conclusões mais precisas e transparentes.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking",
  },
  {
    id: "tool-use",
    name: l("Tool Use", "Tool Use"),
    icon: "🔧",
    desc: l(
      "Define custom tools (functions) that Claude can invoke mid-conversation. Enables reliable structured data extraction, API calls, and dynamic agentic behavior.",
      "Defina ferramentas (funções) customizadas que o Claude pode invocar no meio da conversa. Habilita extração estruturada de dados confiável, chamadas de API e comportamento agêntico dinâmico.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
  },
  {
    id: "vision",
    name: l("Vision", "Visão"),
    icon: "👁️",
    desc: l(
      "All Claude models can analyze images — screenshots, diagrams, documents, photographs. Upload images via base64 or URL for multi-modal reasoning.",
      "Todos os modelos Claude conseguem analisar imagens — screenshots, diagramas, documentos, fotos. Faça upload via base64 ou URL para raciocínio multimodal.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/vision",
  },
  {
    id: "computer-use",
    name: l("Computer Use", "Computer Use"),
    icon: "🖱️",
    desc: l(
      "Claude can interact with a computer: move the mouse, click, type, take screenshots, and navigate GUIs autonomously. Enables fully automated desktop and browser workflows.",
      "O Claude consegue interagir com um computador: mover o mouse, clicar, digitar, tirar screenshots e navegar em GUIs de forma autônoma. Habilita fluxos totalmente automatizados em desktop e navegador.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use",
  },
  {
    id: "multi-turn",
    name: l("Multi-turn Conversations", "Conversas Multi-turno"),
    icon: "🔄",
    desc: l(
      "The Messages API supports full conversation history, enabling coherent multi-turn dialogues, project-scoped memory, and complex back-and-forth reasoning sessions.",
      "A Messages API suporta histórico completo de conversa, habilitando diálogos coerentes de múltiplos turnos, memória escopada por projeto e sessões complexas de ida e volta.",
    ),
  },
  {
    id: "batch-api",
    name: l("Batch API", "Batch API"),
    icon: "📦",
    desc: l(
      "Process thousands of requests asynchronously at up to 50% lower cost. Ideal for offline evaluation, data labeling, content generation, and large-scale analysis pipelines.",
      "Processe milhares de requisições de forma assíncrona com até 50% menos custo. Ideal para avaliação offline, rotulagem de dados, geração de conteúdo e pipelines de análise em larga escala.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/batch",
  },
  {
    id: "mcp",
    name: l("Model Context Protocol", "Model Context Protocol"),
    icon: "🔌",
    desc: l(
      "An open standard for connecting AI models to external data sources and tools. MCP servers expose resources, prompts, and tools that Claude can discover and use at runtime.",
      "Um padrão aberto para conectar modelos de IA a fontes de dados e ferramentas externas. Servidores MCP expõem recursos, prompts e ferramentas que o Claude descobre e usa em runtime.",
    ),
    link: "https://modelcontextprotocol.io",
  },
  {
    id: "prompt-caching",
    name: l("Prompt Caching", "Prompt Caching"),
    icon: "⚡",
    desc: l(
      "Cache frequently reused context (system prompts, documents, tool definitions) between API calls. Reduces latency by up to 85% and costs by up to 90% for cache hits.",
      "Faz cache de contexto reutilizado com frequência (system prompts, documentos, definições de ferramentas) entre chamadas de API. Reduz latência em até 85% e custo em até 90% em cache hits.",
    ),
    link: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
  },
];

// ─── Links ────────────────────────────────────────────────────────────────────

export const CLAUDE_LINKS: { label: LocalizedString; url: string; category: string }[] = [
  { label: l("Anthropic Docs",      "Docs da Anthropic"),    url: "https://docs.anthropic.com",                       category: "docs"    },
  { label: l("API Reference",       "Referência da API"),    url: "https://docs.anthropic.com/en/api",                category: "docs"    },
  { label: l("Pricing",             "Preços"),               url: "https://www.anthropic.com/pricing",                category: "pricing" },
  { label: l("API Console",         "Console da API"),       url: "https://console.anthropic.com",                    category: "api"     },
  { label: l("Status Page",         "Página de Status"),     url: "https://status.anthropic.com",                     category: "ops"     },
  { label: l("Claude Code Docs",    "Docs do Claude Code"),  url: "https://docs.anthropic.com/en/docs/claude-code",   category: "docs"    },
  { label: l("MCP Docs",            "Docs do MCP"),          url: "https://modelcontextprotocol.io/introduction",     category: "docs"    },
  { label: l("Remote Control Docs", "Docs do Remote Control"), url: "https://code.claude.com/docs/en/remote-control",  category: "docs"    },
];
