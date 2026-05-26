import { l, type LocalizedString } from "./localized";

export interface ResourceLink {
  id: string;
  name: string;
  tagline: LocalizedString;
  url: string;
  category: ResourceCategory;
  tags: string[];
  free: boolean;
  highlight?: LocalizedString;
}

export type ResourceCategory =
  | "apis"
  | "frameworks"
  | "agents"
  | "infrastructure"
  | "mcp"
  | "evals"
  | "communities"
  | "research";

export interface ResourceCategoryMeta {
  id: ResourceCategory;
  label: LocalizedString;
  icon: string;
  desc: LocalizedString;
  color: string;
}

export const RESOURCE_CATEGORIES: ResourceCategoryMeta[] = [
  { id: "apis",           label: l("APIs & Model Access",   "APIs & Acesso a Modelos"),   icon: "⚡",  color: "#9F8CFF", desc: l("LLM providers and inference APIs",          "Provedores de LLM e APIs de inferência") },
  { id: "frameworks",     label: l("Developer Frameworks",  "Frameworks para Devs"),      icon: "🧱", color: "#5EEAD4", desc: l("SDKs and libraries for building AI apps",   "SDKs e bibliotecas para construir apps de IA") },
  { id: "agents",         label: l("Agents & Orchestration","Agentes & Orquestração"),    icon: "🤖", color: "#F08CA8", desc: l("Multi-agent frameworks and workflows",      "Frameworks multi-agente e fluxos de trabalho") },
  { id: "infrastructure", label: l("Infrastructure",        "Infraestrutura"),            icon: "🗄️", color: "#E8C089", desc: l("Vector stores, local inference, and hosting","Bancos vetoriais, inferência local e hospedagem") },
  { id: "mcp",            label: l("MCP & Integrations",    "MCP & Integrações"),         icon: "🔌", color: "#6EE7A0", desc: l("Model Context Protocol servers and connectors","Servidores Model Context Protocol e conectores") },
  { id: "evals",          label: l("Evals & Benchmarks",    "Avaliações & Benchmarks"),   icon: "📊", color: "#B6A6FF", desc: l("Testing, evaluation, and quality tools",    "Ferramentas de teste, avaliação e qualidade") },
  { id: "communities",    label: l("Communities",           "Comunidades"),               icon: "🌐", color: "#F4D06F", desc: l("Forums, Discord servers, and news feeds",   "Fóruns, servidores Discord e feeds de notícias") },
  { id: "research",       label: l("Research & Papers",     "Pesquisa & Artigos"),        icon: "📖", color: "#8FE3D2", desc: l("Academic papers, blogs, and technical writing","Artigos acadêmicos, blogs e textos técnicos") },
];

export const RESOURCES: ResourceLink[] = [
  // ── APIs & Model Access ───────────────────────────────────────────────────
  {
    id: "anthropic-api",
    name: "Anthropic API",
    tagline: l("Access Claude models via API", "Acesse os modelos Claude via API"),
    url: "https://console.anthropic.com",
    category: "apis",
    tags: ["Claude", "Anthropic", "API"],
    free: false,
    highlight: l(
      "Direct access to Claude Haiku, Sonnet, and Opus with prompt caching and batch processing",
      "Acesso direto a Claude Haiku, Sonnet e Opus com prompt caching e processamento em batch",
    ),
  },
  {
    id: "openai-api",
    name: "OpenAI Platform",
    tagline: l("GPT-4, o3, and embeddings", "GPT-4, o3 e embeddings"),
    url: "https://platform.openai.com",
    category: "apis",
    tags: ["GPT", "OpenAI", "API"],
    free: false,
    highlight: l(
      "Access GPT-4o, o3-mini, DALL-E 3, Whisper, and embedding models",
      "Acesse GPT-4o, o3-mini, DALL-E 3, Whisper e modelos de embedding",
    ),
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    tagline: l("Gemini models with generous free tier", "Modelos Gemini com plano grátis generoso"),
    url: "https://aistudio.google.com",
    category: "apis",
    tags: ["Gemini", "Google", "API"],
    free: true,
    highlight: l(
      "Free tier includes Gemini 2.0 Flash with 1M token context window",
      "Plano grátis inclui Gemini 2.0 Flash com janela de contexto de 1M tokens",
    ),
  },
  {
    id: "groq",
    name: "Groq",
    tagline: l("Ultra-fast LLM inference", "Inferência de LLM ultrarrápida"),
    url: "https://console.groq.com",
    category: "apis",
    tags: ["Groq", "inference", "fast"],
    free: true,
    highlight: l(
      "LPU-based hardware delivers industry-leading inference speeds on open models",
      "Hardware baseado em LPU entrega velocidades de inferência líderes do setor em modelos abertos",
    ),
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    tagline: l("Unified API for 200+ models", "API unificada para 200+ modelos"),
    url: "https://openrouter.ai",
    category: "apis",
    tags: ["unified", "API", "routing"],
    free: false,
    highlight: l(
      "Single OpenAI-compatible endpoint for Claude, GPT, Gemini, Llama, and more",
      "Endpoint único compatível com OpenAI para Claude, GPT, Gemini, Llama e mais",
    ),
  },
  {
    id: "together-ai",
    name: "Together AI",
    tagline: l("Open-source model inference and fine-tuning", "Inferência e fine-tuning de modelos open-source"),
    url: "https://www.together.ai",
    category: "apis",
    tags: ["open-source", "fine-tuning", "API"],
    free: false,
    highlight: l(
      "Run and fine-tune Llama, Mistral, and other open models with a simple API",
      "Rode e faça fine-tune de Llama, Mistral e outros modelos abertos com uma API simples",
    ),
  },
  {
    id: "replicate",
    name: "Replicate",
    tagline: l("Run open-source models in the cloud", "Rode modelos open-source na nuvem"),
    url: "https://replicate.com",
    category: "apis",
    tags: ["open-source", "images", "audio"],
    free: false,
    highlight: l(
      "One-line API for thousands of community models including Stable Diffusion and Flux",
      "API de uma linha para milhares de modelos da comunidade, incluindo Stable Diffusion e Flux",
    ),
  },
  {
    id: "huggingface-inference",
    name: "Hugging Face Inference",
    tagline: l("Hosted inference for HF models", "Inferência hospedada para modelos HF"),
    url: "https://huggingface.co/inference-api",
    category: "apis",
    tags: ["HuggingFace", "open-source", "API"],
    free: true,
    highlight: l(
      "Free serverless inference on 100,000+ models from the HF Hub",
      "Inferência serverless gratuita em 100.000+ modelos do HF Hub",
    ),
  },

  // ── Developer Frameworks ──────────────────────────────────────────────────
  {
    id: "langchain",
    name: "LangChain",
    tagline: l("Python/JS framework for LLM apps", "Framework Python/JS para apps de LLM"),
    url: "https://python.langchain.com",
    category: "frameworks",
    tags: ["Python", "JavaScript", "framework"],
    free: true,
    highlight: l(
      "Composable chains, retrieval, agents, and integrations for every major LLM",
      "Chains componíveis, retrieval, agentes e integrações para todos os principais LLMs",
    ),
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    tagline: l("Data framework for LLM applications", "Framework de dados para aplicações LLM"),
    url: "https://www.llamaindex.ai",
    category: "frameworks",
    tags: ["RAG", "Python", "data"],
    free: true,
    highlight: l(
      "Best-in-class RAG pipelines with support for 100+ data source connectors",
      "Pipelines de RAG de ponta com suporte a 100+ conectores de fontes de dados",
    ),
  },
  {
    id: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    tagline: l("TypeScript toolkit for AI-powered UIs", "Toolkit TypeScript para UIs com IA"),
    url: "https://sdk.vercel.ai",
    category: "frameworks",
    tags: ["TypeScript", "React", "streaming"],
    free: true,
    highlight: l(
      "Unified API with streaming, tool calling, and structured outputs for all major providers",
      "API unificada com streaming, tool calling e saídas estruturadas para todos os principais provedores",
    ),
  },
  {
    id: "anthropic-sdk",
    name: "Anthropic SDK",
    tagline: l("Official Python and TypeScript SDKs", "SDKs oficiais em Python e TypeScript"),
    url: "https://github.com/anthropics/anthropic-sdk-python",
    category: "frameworks",
    tags: ["Python", "TypeScript", "Anthropic"],
    free: true,
    highlight: l(
      "First-party SDK with full type safety, streaming, tool use, and prompt caching support",
      "SDK oficial com tipagem completa, streaming, tool use e suporte a prompt caching",
    ),
  },
  {
    id: "pydantic-ai",
    name: "Pydantic AI",
    tagline: l("Agent framework from the Pydantic team", "Framework de agentes do time do Pydantic"),
    url: "https://ai.pydantic.dev",
    category: "frameworks",
    tags: ["Python", "agents", "typed"],
    free: true,
    highlight: l(
      "Type-safe agent framework with dependency injection and model-agnostic design",
      "Framework de agentes type-safe com injeção de dependências e design model-agnostic",
    ),
  },
  {
    id: "instructor",
    name: "Instructor",
    tagline: l("Structured outputs from LLMs via Pydantic", "Saídas estruturadas de LLMs via Pydantic"),
    url: "https://python.useinstructor.com",
    category: "frameworks",
    tags: ["Python", "structured", "validation"],
    free: true,
    highlight: l(
      "Forces LLM responses into validated Pydantic models with automatic retry on failure",
      "Força respostas de LLM em modelos Pydantic validados, com retry automático em falha",
    ),
  },

  // ── Agents & Orchestration ────────────────────────────────────────────────
  {
    id: "crewai",
    name: "CrewAI",
    tagline: l("Multi-agent role-based framework", "Framework multi-agente baseado em papéis"),
    url: "https://www.crewai.com",
    category: "agents",
    tags: ["multi-agent", "Python", "roles"],
    free: true,
    highlight: l(
      "Assign roles to agents and let them collaborate on complex tasks autonomously",
      "Atribua papéis aos agentes e deixe-os colaborar em tarefas complexas de forma autônoma",
    ),
  },
  {
    id: "langgraph",
    name: "LangGraph",
    tagline: l("Stateful multi-actor workflows", "Fluxos multi-ator com estado"),
    url: "https://langchain-ai.github.io/langgraph",
    category: "agents",
    tags: ["graph", "stateful", "Python"],
    free: true,
    highlight: l(
      "Build cyclic, stateful agent workflows as graphs with fine-grained control",
      "Construa fluxos de agentes cíclicos e com estado como grafos, com controle granular",
    ),
  },
  {
    id: "autogen",
    name: "AutoGen",
    tagline: l("Multi-agent conversation framework by Microsoft", "Framework de conversa multi-agente da Microsoft"),
    url: "https://microsoft.github.io/autogen",
    category: "agents",
    tags: ["Microsoft", "multi-agent", "Python"],
    free: true,
    highlight: l(
      "Customizable conversational agents that work together to solve tasks",
      "Agentes conversacionais customizáveis que trabalham juntos para resolver tarefas",
    ),
  },
  {
    id: "composio",
    name: "Composio",
    tagline: l("100+ managed tools for AI agents", "100+ ferramentas gerenciadas para agentes de IA"),
    url: "https://composio.dev",
    category: "agents",
    tags: ["tools", "integrations", "agents"],
    free: true,
    highlight: l(
      "Pre-built integrations with GitHub, Slack, Gmail, Jira, and 100+ apps for agents",
      "Integrações prontas com GitHub, Slack, Gmail, Jira e 100+ apps para agentes",
    ),
  },
  {
    id: "smolagents",
    name: "smolagents",
    tagline: l("Minimal agent library by HuggingFace", "Biblioteca mínima de agentes da HuggingFace"),
    url: "https://huggingface.co/docs/smolagents",
    category: "agents",
    tags: ["HuggingFace", "lightweight", "Python"],
    free: true,
    highlight: l(
      "Minimal ~1,000 line codebase for code-first agents that write and execute Python",
      "Base de código mínima de ~1.000 linhas para agentes code-first que escrevem e executam Python",
    ),
  },

  // ── Infrastructure ────────────────────────────────────────────────────────
  {
    id: "ollama",
    name: "Ollama",
    tagline: l("Run LLMs locally on your machine", "Rode LLMs localmente na sua máquina"),
    url: "https://ollama.ai",
    category: "infrastructure",
    tags: ["local", "open-source", "macOS"],
    free: true,
    highlight: l(
      "One command to run Llama, Mistral, Gemma, and 100+ models locally with GPU support",
      "Um comando para rodar Llama, Mistral, Gemma e 100+ modelos localmente com suporte a GPU",
    ),
  },
  {
    id: "vllm",
    name: "vLLM",
    tagline: l("High-throughput LLM serving engine", "Engine de serving de LLM de alto throughput"),
    url: "https://vllm.ai",
    category: "infrastructure",
    tags: ["serving", "Python", "performance"],
    free: true,
    highlight: l(
      "PagedAttention memory management for up to 24× throughput improvement over HuggingFace",
      "Gerenciamento de memória PagedAttention para até 24× de melhoria de throughput sobre HuggingFace",
    ),
  },
  {
    id: "pinecone",
    name: "Pinecone",
    tagline: l("Managed vector database", "Banco vetorial gerenciado"),
    url: "https://www.pinecone.io",
    category: "infrastructure",
    tags: ["vector DB", "RAG", "managed"],
    free: true,
    highlight: l(
      "Serverless vector DB with built-in hybrid search (dense + sparse) for RAG applications",
      "Banco vetorial serverless com busca híbrida embutida (densa + esparsa) para aplicações RAG",
    ),
  },
  {
    id: "qdrant",
    name: "Qdrant",
    tagline: l("Open-source vector similarity engine", "Engine open-source de similaridade vetorial"),
    url: "https://qdrant.tech",
    category: "infrastructure",
    tags: ["vector DB", "open-source", "Rust"],
    free: true,
    highlight: l(
      "High-performance Rust-based vector database with filtering and payload support",
      "Banco vetorial em Rust de alta performance, com filtros e suporte a payload",
    ),
  },
  {
    id: "weaviate",
    name: "Weaviate",
    tagline: l("AI-native vector database", "Banco vetorial AI-native"),
    url: "https://weaviate.io",
    category: "infrastructure",
    tags: ["vector DB", "open-source", "GraphQL"],
    free: true,
    highlight: l(
      "Built-in vectorization modules for text, images, and multimodal data",
      "Módulos de vetorização embutidos para texto, imagens e dados multimodais",
    ),
  },
  {
    id: "chroma",
    name: "ChromaDB",
    tagline: l("Open-source embedding database", "Banco de embeddings open-source"),
    url: "https://www.trychroma.com",
    category: "infrastructure",
    tags: ["vector DB", "open-source", "Python"],
    free: true,
    highlight: l(
      "Simplest vector DB to get started with — runs locally in pure Python, no setup needed",
      "Banco vetorial mais simples para começar — roda localmente em puro Python, sem setup",
    ),
  },

  // ── MCP & Integrations ────────────────────────────────────────────────────
  {
    id: "mcp",
    name: "Model Context Protocol",
    tagline: l("Open standard for AI-to-tool connections", "Padrão aberto para conexões IA-ferramenta"),
    url: "https://modelcontextprotocol.io",
    category: "mcp",
    tags: ["MCP", "standard", "Anthropic"],
    free: true,
    highlight: l(
      "Open protocol by Anthropic enabling AI models to access local and remote data sources",
      "Protocolo aberto da Anthropic que permite a modelos de IA acessar fontes de dados locais e remotas",
    ),
  },
  {
    id: "mcp-servers",
    name: "MCP Servers Registry",
    tagline: l("Community-built MCP server collection", "Coleção de servidores MCP feitos pela comunidade"),
    url: "https://github.com/modelcontextprotocol/servers",
    category: "mcp",
    tags: ["MCP", "open-source", "community"],
    free: true,
    highlight: l(
      "Official collection of reference MCP servers for GitHub, Slack, Postgres, filesystem, and more",
      "Coleção oficial de servidores MCP de referência para GitHub, Slack, Postgres, filesystem e mais",
    ),
  },
  {
    id: "zapier-ai",
    name: "Zapier AI",
    tagline: l("No-code automation with AI actions", "Automação no-code com ações de IA"),
    url: "https://zapier.com/ai",
    category: "mcp",
    tags: ["no-code", "automation", "integrations"],
    free: false,
    highlight: l(
      "Connect Claude and other AI models to 6,000+ apps with no-code automation triggers",
      "Conecte Claude e outros modelos de IA a 6.000+ apps com gatilhos de automação no-code",
    ),
  },
  {
    id: "make",
    name: "Make",
    tagline: l("Visual automation platform with AI modules", "Plataforma visual de automação com módulos de IA"),
    url: "https://www.make.com",
    category: "mcp",
    tags: ["no-code", "automation", "visual"],
    free: true,
    highlight: l(
      "Drag-and-drop workflow builder with native Claude and OpenAI modules",
      "Construtor de fluxos drag-and-drop com módulos nativos para Claude e OpenAI",
    ),
  },

  // ── Evals & Benchmarks ────────────────────────────────────────────────────
  {
    id: "lmarena",
    name: "LM Arena",
    tagline: l("Crowdsourced model ranking via blind comparisons", "Ranking de modelos via comparações cegas crowdsourced"),
    url: "https://lmarena.ai",
    category: "evals",
    tags: ["benchmarks", "community", "ranking"],
    free: true,
    highlight: l(
      "Elo-based leaderboard from millions of human preference votes across all major models",
      "Leaderboard baseado em Elo a partir de milhões de votos humanos de preferência entre os principais modelos",
    ),
  },
  {
    id: "promptfoo",
    name: "Promptfoo",
    tagline: l("Open-source LLM testing and red-teaming", "Testes e red-teaming de LLM open-source"),
    url: "https://www.promptfoo.dev",
    category: "evals",
    tags: ["testing", "open-source", "red-teaming"],
    free: true,
    highlight: l(
      "YAML-based test suites for evaluating prompt quality, safety, and regression testing",
      "Suítes de teste baseadas em YAML para avaliar qualidade de prompt, segurança e regressão",
    ),
  },
  {
    id: "openai-evals",
    name: "OpenAI Evals",
    tagline: l("Framework for evaluating LLM outputs", "Framework para avaliar saídas de LLM"),
    url: "https://github.com/openai/evals",
    category: "evals",
    tags: ["OpenAI", "open-source", "benchmarks"],
    free: true,
    highlight: l(
      "Systematic framework for measuring model performance with hundreds of pre-built evals",
      "Framework sistemático para medir performance de modelos, com centenas de avaliações prontas",
    ),
  },
  {
    id: "helicone",
    name: "Helicone",
    tagline: l("LLM observability and monitoring", "Observabilidade e monitoramento de LLM"),
    url: "https://helicone.ai",
    category: "evals",
    tags: ["observability", "cost", "logging"],
    free: true,
    highlight: l(
      "One-line integration to log requests, track costs, and monitor latency across LLM providers",
      "Integração de uma linha para logar requisições, rastrear custos e monitorar latência entre provedores de LLM",
    ),
  },

  // ── Communities ───────────────────────────────────────────────────────────
  {
    id: "huggingface-community",
    name: "Hugging Face",
    tagline: l("The GitHub of machine learning", "O GitHub do machine learning"),
    url: "https://huggingface.co",
    category: "communities",
    tags: ["community", "models", "datasets"],
    free: true,
    highlight: l(
      "Host, discover, and share ML models, datasets, and demos with 1M+ model repos",
      "Hospede, descubra e compartilhe modelos, datasets e demos de ML com 1M+ de repositórios",
    ),
  },
  {
    id: "reddit-ml",
    name: "r/MachineLearning",
    tagline: l("Reddit's ML research community", "A comunidade de pesquisa em ML do Reddit"),
    url: "https://www.reddit.com/r/MachineLearning",
    category: "communities",
    tags: ["community", "research", "Reddit"],
    free: true,
    highlight: l(
      "Active discussion of papers, industry news, and research with 3M+ members",
      "Discussão ativa de papers, notícias do setor e pesquisa, com 3M+ de membros",
    ),
  },
  {
    id: "ai-twitter",
    name: "AI on Twitter/X",
    tagline: l("Real-time AI discourse", "Discurso de IA em tempo real"),
    url: "https://x.com/search?q=%23AI&f=live",
    category: "communities",
    tags: ["community", "news", "social"],
    free: true,
    highlight: l(
      "Researchers, founders, and engineers sharing papers, demos, and takes as they happen",
      "Pesquisadores, founders e engenheiros compartilhando papers, demos e opiniões em tempo real",
    ),
  },
  {
    id: "alignment-forum",
    name: "AI Alignment Forum",
    tagline: l("Technical AI safety research and discussion", "Pesquisa e discussão técnica de segurança em IA"),
    url: "https://www.alignmentforum.org",
    category: "communities",
    tags: ["safety", "alignment", "research"],
    free: true,
    highlight: l(
      "Focused forum for long-form AI safety research posts from leading researchers",
      "Fórum dedicado a posts longos de pesquisa em segurança de IA, dos principais pesquisadores",
    ),
  },

  // ── Research & Papers ─────────────────────────────────────────────────────
  {
    id: "arxiv-ai",
    name: "arXiv AI",
    tagline: l("AI and ML preprint server", "Servidor de preprints de IA e ML"),
    url: "https://arxiv.org/list/cs.AI/recent",
    category: "research",
    tags: ["papers", "research", "preprints"],
    free: true,
    highlight: l(
      "The primary venue for AI research papers before peer review — hundreds published daily",
      "O principal canal para papers de pesquisa em IA antes da revisão por pares — centenas publicados por dia",
    ),
  },
  {
    id: "papers-with-code",
    name: "Papers With Code",
    tagline: l("ML papers linked to their code", "Papers de ML linkados ao seu código"),
    url: "https://paperswithcode.com",
    category: "research",
    tags: ["papers", "code", "benchmarks"],
    free: true,
    highlight: l(
      "Every ML paper linked to its implementation, with live benchmark leaderboards",
      "Todo paper de ML linkado à sua implementação, com leaderboards de benchmark ao vivo",
    ),
  },
  {
    id: "the-gradient",
    name: "The Gradient",
    tagline: l("Long-form ML research writing", "Textos longos de pesquisa em ML"),
    url: "https://thegradient.pub",
    category: "research",
    tags: ["blog", "research", "writing"],
    free: true,
    highlight: l(
      "In-depth articles by researchers explaining complex ML concepts and recent advances",
      "Artigos aprofundados de pesquisadores explicando conceitos complexos de ML e avanços recentes",
    ),
  },
  // ─── BR-specific resources (added in PR 9) ──────────────────────────────
  {
    id: "data-hackers",
    name: "Data Hackers",
    tagline: l(
      "Largest Brazilian data and AI community",
      "Maior comunidade brasileira de dados e IA",
    ),
    url: "https://datahackers.com.br",
    category: "communities",
    tags: ["Brasil", "comunidade", "dados", "português"],
    free: true,
    highlight: l(
      "100K+ Brazilian data/AI professionals, weekly podcast, annual survey, Discord, and São Paulo meetups",
      "100 mil+ profissionais brasileiros de dados/IA, podcast semanal, pesquisa anual, Discord e meetups em São Paulo",
    ),
  },
  {
    id: "alura-ia",
    name: "Alura — Imersão IA",
    tagline: l(
      "Free intensive AI courses for Brazilian learners, with Google partnership",
      "Cursos intensivos gratuitos de IA para brasileiros, com parceria Google",
    ),
    url: "https://www.alura.com.br/imersao-ia",
    category: "research",
    tags: ["Brasil", "cursos", "educação", "Gemini", "português"],
    free: true,
    highlight: l(
      "Free week-long Portuguese-language AI bootcamps — over 600,000 Brazilians enrolled to date",
      "Bootcamps gratuitos de IA em português, com mais de 600.000 brasileiros inscritos até hoje",
    ),
  },
  {
    id: "maritaca-api-resource",
    name: "Maritaca AI API",
    tagline: l(
      "Portuguese-native LLM API with Brazilian data residency and BRL pricing",
      "API de LLM nativo em português com residência de dados no Brasil e cobrança em BRL",
    ),
    url: "https://www.maritaca.ai/desenvolvedores",
    category: "apis",
    tags: ["Brasil", "Sabiá", "LGPD", "português"],
    free: false,
    highlight: l(
      "Sabiá-3 outperforms GPT-4 on ENEM/OAB benchmarks · OpenAI-compatible REST · LGPD-friendly",
      "Sabiá-3 supera o GPT-4 em ENEM/OAB · REST compatível com OpenAI · LGPD-friendly",
    ),
  },
  {
    id: "anthropic-research",
    name: "Anthropic Research",
    tagline: l("Anthropic's published AI safety research", "Pesquisa publicada da Anthropic em segurança de IA"),
    url: "https://www.anthropic.com/research",
    category: "research",
    tags: ["Anthropic", "safety", "papers"],
    free: true,
    highlight: l(
      "Constitutional AI, interpretability, model cards, and frontier safety research from Anthropic",
      "Constitutional AI, interpretabilidade, model cards e pesquisa de segurança de fronteira da Anthropic",
    ),
  },
];
