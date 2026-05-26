import { l, type LocalizedString } from "./localized";

export interface LabModel {
  name: string;
  type: "text" | "multimodal" | "image" | "code" | "embedding" | "reasoning";
  contextWindow?: string;
  inputPrice?: string;
  outputPrice?: string;
  freeAccess?: boolean;
  highlight?: LocalizedString;
  speed?: "fast" | "medium" | "slow";
}

export interface AILab {
  id: string;
  name: string;
  tagline: LocalizedString;
  emoji: string;
  color: string;
  type: "frontier" | "open-source" | "enterprise" | "specialized";
  founded: string;
  hq: string;
  website: string;
  focus: LocalizedString[];
  description: LocalizedString;
  models: LabModel[];
  products: string[];
  api: {
    available: boolean;
    endpoint?: string;
    sdks?: string[];
  };
  strengths: LocalizedString[];
  useCases: LocalizedString[];
}

export const AI_LABS: AILab[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    tagline: l(
      "AI safety company building reliable, interpretable, and steerable AI systems",
      "Empresa de segurança em IA construindo sistemas confiáveis, interpretáveis e direcionáveis",
    ),
    emoji: "🔬",
    color: "#9F8CFF",
    type: "frontier",
    founded: "2021",
    hq: "San Francisco, CA",
    website: "https://anthropic.com",
    focus: [
      l("Safety", "Segurança"),
      l("Long context", "Contexto longo"),
      l("Agentic AI", "IA agêntica"),
      l("Code", "Código"),
    ],
    description: l(
      "Anthropic is an AI safety company founded by former OpenAI researchers, focused on building AI systems that are safe, beneficial, and understandable. Their Constitutional AI approach and RLHF techniques underpin the Claude model family. Claude models excel at long-context reasoning, nuanced writing, and complex agentic tasks.",
      "A Anthropic é uma empresa de segurança em IA fundada por ex-pesquisadores da OpenAI, com foco em construir sistemas de IA seguros, benéficos e compreensíveis. A abordagem de Constitutional AI e as técnicas de RLHF sustentam a família Claude. Os modelos Claude se destacam em raciocínio com contexto longo, escrita refinada e tarefas agênticas complexas.",
    ),
    models: [
      {
        name: "Claude Haiku 4.5",
        type: "text",
        contextWindow: "200K tokens",
        inputPrice: "$0.80 / M tokens",
        outputPrice: "$4 / M tokens",
        freeAccess: false,
        highlight: l(
          "Best for high-volume, latency-sensitive tasks",
          "Ideal para tarefas de alto volume e sensíveis a latência",
        ),
        speed: "fast",
      },
      {
        name: "Claude Sonnet 4.6",
        type: "text",
        contextWindow: "200K tokens",
        inputPrice: "$3 / M tokens",
        outputPrice: "$15 / M tokens",
        freeAccess: false,
        highlight: l(
          "Optimal balance of intelligence and speed",
          "Equilíbrio ideal entre inteligência e velocidade",
        ),
        speed: "medium",
      },
      {
        name: "Claude Opus 4.7",
        type: "text",
        contextWindow: "200K tokens",
        inputPrice: "$5 / M tokens",
        outputPrice: "$25 / M tokens",
        freeAccess: false,
        highlight: l(
          "Deepest reasoning, long-horizon tasks",
          "Raciocínio mais profundo, tarefas de longo horizonte",
        ),
        speed: "slow",
      },
      {
        name: "Claude Mythos Preview",
        type: "text",
        contextWindow: "200K tokens",
        freeAccess: false,
        highlight: l(
          "Limited-access model — security research and critical infrastructure partners only",
          "Modelo de acesso limitado — apenas para pesquisa em segurança e parceiros de infraestrutura crítica",
        ),
        speed: "slow",
      },
    ],
    products: [
      "Claude.ai",
      "Claude API",
      "Claude Code",
      "Claude for Work",
      "Amazon Bedrock integration",
    ],
    api: {
      available: true,
      endpoint: "api.anthropic.com",
      sdks: ["Python", "TypeScript"],
    },
    strengths: [
      l("Constitutional AI safety and alignment", "Segurança e alinhamento via Constitutional AI"),
      l("Best-in-class long-context reasoning", "Raciocínio com contexto longo de ponta"),
      l("Coding excellence across all major languages", "Excelência em código nas principais linguagens"),
      l("Nuanced, high-quality writing and analysis", "Escrita e análise refinadas e de alta qualidade"),
      l("Reliable multi-step agentic task execution", "Execução confiável de tarefas agênticas em múltiplos passos"),
    ],
    useCases: [
      l("Complex document analysis and summarization", "Análise e sumarização de documentos complexos"),
      l("Software engineering and code review", "Engenharia de software e code review"),
      l("Long-form content creation and editing", "Criação e edição de conteúdo longo"),
      l("Multi-step research and reasoning tasks", "Pesquisa e raciocínio em múltiplos passos"),
      l("Enterprise AI assistants requiring safety guardrails", "Assistentes corporativos que exigem guardrails de segurança"),
    ],
  },
  {
    id: "openai",
    name: "OpenAI",
    tagline: l(
      "Building safe AGI that benefits all of humanity",
      "Construindo uma AGI segura que beneficie toda a humanidade",
    ),
    emoji: "🤖",
    color: "#10a37f",
    type: "frontier",
    founded: "2015",
    hq: "San Francisco, CA",
    website: "https://openai.com",
    focus: [
      l("AGI", "AGI"),
      l("Multimodal", "Multimodal"),
      l("Reasoning", "Raciocínio"),
      l("Agents", "Agentes"),
    ],
    description: l(
      "OpenAI pioneered large-scale language model research and brought AI to mass adoption with ChatGPT. The GPT-5 family (released Aug 2025) unified fast chat and deep reasoning into a single endpoint, free to all ChatGPT users. GPT-5.5 (Apr 2026) extended that with 1M-token context; GPT-5.5 Instant became the default ChatGPT model in May 2026. GPT-5.2-Codex targets autonomous multi-step software engineering.",
      "A OpenAI foi pioneira na pesquisa em LLMs de larga escala e levou a IA à adoção em massa com o ChatGPT. A família GPT-5 (lançada em Ago 2025) unificou chat rápido e raciocínio profundo num único endpoint, gratuito para todos os usuários do ChatGPT. O GPT-5.5 (Abr 2026) estendeu isso com contexto de 1M tokens; o GPT-5.5 Instant virou o modelo padrão do ChatGPT em Maio 2026. O GPT-5.2-Codex foca em engenharia de software autônoma com múltiplos passos.",
    ),
    models: [
      {
        name: "GPT-5.5 Instant",
        type: "multimodal",
        contextWindow: "1M tokens",
        freeAccess: true,
        highlight: l(
          "Default ChatGPT model as of May 2026 — replaces GPT-4o",
          "Modelo padrão do ChatGPT desde Maio 2026 — substitui o GPT-4o",
        ),
        speed: "fast",
      },
      {
        name: "GPT-5.5",
        type: "multimodal",
        contextWindow: "1M tokens",
        inputPrice: "$5 / M tokens",
        outputPrice: "$30 / M tokens",
        freeAccess: false,
        highlight: l(
          "Full GPT-5.5 — 1M context, agentic workflows",
          "GPT-5.5 completo — contexto de 1M, fluxos agênticos",
        ),
        speed: "medium",
      },
      {
        name: "GPT-5.5 Pro",
        type: "multimodal",
        contextWindow: "1M tokens",
        inputPrice: "$30 / M tokens",
        outputPrice: "$180 / M tokens",
        freeAccess: false,
        highlight: l(
          "Deep reasoning for highest-stakes workloads — Apr 2026",
          "Raciocínio profundo para workloads de altíssimo risco — Abr 2026",
        ),
        speed: "slow",
      },
      {
        name: "GPT-5",
        type: "multimodal",
        contextWindow: "128K tokens",
        freeAccess: true,
        highlight: l(
          "Unified chat + reasoning, free at launch (Aug 2025)",
          "Chat + raciocínio unificados, gratuito no lançamento (Ago 2025)",
        ),
        speed: "medium",
      },
      {
        name: "GPT-5.2-Codex",
        type: "code",
        contextWindow: "200K tokens",
        freeAccess: false,
        highlight: l(
          "Autonomous repo-level coding and testing",
          "Programação e testes autônomos no nível do repositório",
        ),
        speed: "slow",
      },
      {
        name: "o4-mini",
        type: "reasoning",
        contextWindow: "200K tokens",
        inputPrice: "$0.55 / M tokens",
        outputPrice: "$2.20 / M tokens",
        freeAccess: false,
        highlight: l(
          "Fast, cost-efficient reasoning model",
          "Modelo de raciocínio rápido e econômico",
        ),
        speed: "medium",
      },
    ],
    products: [
      "ChatGPT",
      "DALL-E 3",
      "Whisper",
      "Sora",
      "Operator",
      "GPT Store",
      "Azure OpenAI",
    ],
    api: {
      available: true,
      endpoint: "api.openai.com",
      sdks: ["Python", "TypeScript", "Java", ".NET", "Go"],
    },
    strengths: [
      l("Largest AI ecosystem and developer community", "Maior ecossistema de IA e comunidade de desenvolvedores"),
      l("Best-in-class multimodal understanding (vision, audio)", "Compreensão multimodal de ponta (visão, áudio)"),
      l("Frontier reasoning via o-series models", "Raciocínio de fronteira via modelos da série-o"),
      l("Seamless Azure cloud enterprise integration", "Integração corporativa fluida com Azure Cloud"),
      l("Widest range of modalities and specialized models", "Maior variedade de modalidades e modelos especializados"),
    ],
    useCases: [
      l("Multimodal applications with vision and audio", "Aplicações multimodais com visão e áudio"),
      l("Advanced reasoning for STEM problems", "Raciocínio avançado para problemas de STEM"),
      l("Consumer AI products with broad capability needs", "Produtos de IA para consumidor com necessidades amplas"),
      l("Enterprise deployments via Azure OpenAI", "Implantações corporativas via Azure OpenAI"),
      l("Image and video generation workflows", "Fluxos de geração de imagem e vídeo"),
    ],
  },
  {
    id: "google-deepmind",
    name: "Google DeepMind",
    tagline: l(
      "Advancing science and benefiting humanity through AI research",
      "Avançando a ciência e beneficiando a humanidade através da pesquisa em IA",
    ),
    emoji: "🧠",
    color: "#4285F4",
    type: "frontier",
    founded: "2010",
    hq: "London, UK / Mountain View, CA",
    website: "https://deepmind.google",
    focus: [
      l("Multimodal", "Multimodal"),
      l("Long context", "Contexto longo"),
      l("Scientific AI", "IA científica"),
      l("Search", "Busca"),
    ],
    description: l(
      "Google DeepMind's Gemini family leads on context, multimodal breadth, and speed. Gemini 3.5 Flash (launched May 19 2026 at Google I/O) beats Gemini 3.1 Pro on coding and agentic benchmarks while running 4× faster. Gemini 3.1 Pro (Feb 2026) topped GPQA Diamond at 94.3%. Nano Banana Pro and Nano Banana 2 are Google's AI image generation models, built on Gemini 3 Pro and Gemini Flash respectively.",
      "A família Gemini da Google DeepMind lidera em contexto, amplitude multimodal e velocidade. O Gemini 3.5 Flash (lançado em 19 de Maio de 2026 no Google I/O) supera o Gemini 3.1 Pro em benchmarks de código e agentes rodando 4× mais rápido. O Gemini 3.1 Pro (Fev 2026) liderou o GPQA Diamond com 94,3%. Nano Banana Pro e Nano Banana 2 são os modelos de geração de imagem da Google, construídos sobre o Gemini 3 Pro e o Gemini Flash respectivamente.",
    ),
    models: [
      {
        name: "Gemini 3.5 Flash",
        type: "multimodal",
        contextWindow: "1M tokens",
        inputPrice: "$1.50 / M tokens",
        outputPrice: "$9.00 / M tokens",
        freeAccess: true,
        highlight: l(
          "Launched Google I/O May 2026 — beats 3.1 Pro on coding+agents, 4× faster",
          "Lançado no Google I/O Mai 2026 — supera o 3.1 Pro em código+agentes, 4× mais rápido",
        ),
        speed: "fast",
      },
      {
        name: "Gemini 3.1 Pro",
        type: "multimodal",
        contextWindow: "1M tokens",
        freeAccess: false,
        highlight: l(
          "GPQA Diamond 94.3%, ARC-AGI-2 77.1% — top of all Feb 2026 benchmarks",
          "GPQA Diamond 94,3%, ARC-AGI-2 77,1% — topo de todos os benchmarks de Fev 2026",
        ),
        speed: "medium",
      },
      {
        name: "Nano Banana 2",
        type: "image",
        freeAccess: false,
        highlight: l(
          "Gemini 3.1 Flash Image — faster generation, precise instruction following, web-grounded",
          "Gemini 3.1 Flash Image — geração mais rápida, segue instruções com precisão, ancorado na web",
        ),
        speed: "fast",
      },
      {
        name: "Nano Banana Pro",
        type: "image",
        freeAccess: false,
        highlight: l(
          "Gemini 3 Pro Image — studio-quality, real-world knowledge via Search",
          "Gemini 3 Pro Image — qualidade de estúdio, conhecimento do mundo real via Search",
        ),
        speed: "medium",
      },
      {
        name: "Gemini 3.1 Flash-Lite",
        type: "multimodal",
        contextWindow: "1M tokens",
        freeAccess: false,
        highlight: l(
          "Most cost-efficient Google model for production workloads",
          "Modelo Google mais econômico para workloads de produção",
        ),
        speed: "fast",
      },
    ],
    products: [
      "Gemini (app)",
      "Google AI Studio",
      "Vertex AI",
      "NotebookLM",
      "Google Search AI",
    ],
    api: {
      available: true,
      endpoint: "generativelanguage.googleapis.com",
      sdks: ["Python", "JavaScript", "Go", "Swift", "Android"],
    },
    strengths: [
      l("Industry-leading 1M token context window", "Janela de contexto líder no setor (1M tokens)"),
      l("Native multimodal from the ground up", "Multimodal nativo desde o início"),
      l("Deep Google Search and Knowledge Graph integration", "Integração profunda com Google Search e Knowledge Graph"),
      l("Massive compute via Google TPU infrastructure", "Computação massiva via infraestrutura TPU da Google"),
      l("Strong scientific and mathematical reasoning", "Raciocínio científico e matemático forte"),
    ],
    useCases: [
      l("Whole-document or codebase analysis in a single prompt", "Análise de documento ou base de código inteira num único prompt"),
      l("Multimodal tasks combining text, image, and video", "Tarefas multimodais combinando texto, imagem e vídeo"),
      l("Search-grounded question answering", "Perguntas e respostas ancoradas em busca"),
      l("Scientific research and data analysis", "Pesquisa científica e análise de dados"),
      l("Enterprise AI on Google Cloud (Vertex AI)", "IA corporativa no Google Cloud (Vertex AI)"),
    ],
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    tagline: l(
      "Open and efficient AI models for everyone",
      "Modelos de IA abertos e eficientes para todos",
    ),
    emoji: "🦙",
    color: "#0082fb",
    type: "open-source",
    founded: "2013",
    hq: "Menlo Park, CA",
    website: "https://ai.meta.com",
    focus: [
      l("Open Source", "Código aberto"),
      l("Social AI", "IA social"),
      l("Multimodal", "Multimodal"),
      l("Efficiency", "Eficiência"),
    ],
    description: l(
      "Meta AI releases its Llama model family as open-weight models, enabling the broadest self-hosted AI ecosystem in the industry. Llama 4 Scout features a 10M-token context window — the longest of any open model. Note: the Llama 4 license restricts use by organizations with 700M+ monthly active users, who must obtain a separate Meta license. Meta integrates AI across its 3B+ user platforms—Facebook, Instagram, and WhatsApp.",
      "A Meta AI libera sua família Llama como modelos open-weight, viabilizando o maior ecossistema de IA auto-hospedada do setor. O Llama 4 Scout tem janela de contexto de 10M tokens — a maior entre modelos abertos. Atenção: a licença do Llama 4 restringe o uso por organizações com 700M+ usuários ativos mensais, que precisam de uma licença separada da Meta. A Meta integra IA em plataformas com 3B+ de usuários — Facebook, Instagram e WhatsApp.",
    ),
    models: [
      {
        name: "Llama 4 Scout",
        type: "multimodal",
        contextWindow: "10M tokens",
        freeAccess: true,
        highlight: l(
          "Longest context of any open model — 10M tokens",
          "Maior contexto entre os modelos abertos — 10M tokens",
        ),
        speed: "fast",
      },
      {
        name: "Llama 4 Maverick",
        type: "multimodal",
        contextWindow: "1M tokens",
        freeAccess: true,
        highlight: l(
          "Meta's most capable open model",
          "Modelo aberto mais capaz da Meta",
        ),
        speed: "medium",
      },
      {
        name: "Llama 3.3 70B",
        type: "text",
        contextWindow: "128K tokens",
        freeAccess: true,
        highlight: l(
          "Efficient and widely deployed open model",
          "Modelo aberto eficiente e amplamente implantado",
        ),
        speed: "medium",
      },
      {
        name: "Llama 3.1 405B",
        type: "text",
        contextWindow: "128K tokens",
        freeAccess: true,
        highlight: l(
          "Largest open model, frontier-class performance",
          "Maior modelo aberto, performance de fronteira",
        ),
        speed: "slow",
      },
    ],
    products: [
      "Meta AI assistant",
      "Llama model zoo",
      "CodeLlama",
      "WhatsApp AI",
      "Ray-Ban Meta (wearables)",
    ],
    api: {
      available: true,
      endpoint: "api.meta.ai",
      sdks: ["Python"],
    },
    strengths: [
      l("Fully open weights—self-host, fine-tune, deploy anywhere", "Pesos totalmente abertos — auto-hospede, faça fine-tune, implante onde quiser"),
      l("Apache 2.0 license enables commercial use at zero licensing cost", "Licença Apache 2.0 permite uso comercial sem custo de licenciamento"),
      l("Massive fine-tuning community and model hub", "Comunidade enorme de fine-tuning e hub de modelos"),
      l("Competitive performance with closed frontier models", "Performance competitiva com modelos fechados de fronteira"),
      l("Native integration across Meta's social platforms", "Integração nativa com as plataformas sociais da Meta"),
    ],
    useCases: [
      l("Self-hosted inference with full data privacy", "Inferência auto-hospedada com privacidade total dos dados"),
      l("Fine-tuning on proprietary datasets without data sharing", "Fine-tuning em datasets proprietários sem compartilhar dados"),
      l("High-volume inference where API costs are prohibitive", "Inferência de alto volume onde APIs ficariam proibitivas"),
      l("Research and academic projects needing model access", "Projetos de pesquisa e acadêmicos que precisam acessar o modelo"),
      l("On-device and edge deployment", "Deploy on-device e em edge"),
    ],
  },
  {
    id: "mistral-ai",
    name: "Mistral AI",
    tagline: l(
      "Frontier AI built in Europe, efficient and open by design",
      "IA de fronteira feita na Europa, eficiente e aberta por design",
    ),
    emoji: "💨",
    color: "#FF7000",
    type: "frontier",
    founded: "2023",
    hq: "Paris, France",
    website: "https://mistral.ai",
    focus: [
      l("European AI", "IA europeia"),
      l("Efficiency", "Eficiência"),
      l("Open weights", "Pesos abertos"),
      l("Code", "Código"),
    ],
    description: l(
      "Mistral AI is Europe's leading frontier AI lab, known for releasing highly efficient models that punch well above their weight class. The company balances open-weight releases (Mistral 7B, Mixtral 8x7B) with proprietary frontier models on la Plateforme. Codestral is a purpose-built coding model supporting over 80 programming languages.",
      "A Mistral AI é o principal lab europeu de IA de fronteira, conhecido por lançar modelos altamente eficientes que entregam acima do seu peso. A empresa balanceia lançamentos open-weight (Mistral 7B, Mixtral 8x7B) com modelos proprietários de fronteira na la Plateforme. O Codestral é um modelo de código dedicado, com suporte a mais de 80 linguagens de programação.",
    ),
    models: [
      {
        name: "Mistral Small 3.1",
        type: "text",
        contextWindow: "128K tokens",
        inputPrice: "$0.10 / M tokens",
        outputPrice: "$0.30 / M tokens",
        freeAccess: false,
        highlight: l(
          "Best price-performance for straightforward tasks",
          "Melhor relação preço-performance para tarefas diretas",
        ),
        speed: "fast",
      },
      {
        name: "Mistral Large 2",
        type: "text",
        contextWindow: "128K tokens",
        inputPrice: "$2 / M tokens",
        outputPrice: "$6 / M tokens",
        freeAccess: false,
        highlight: l(
          "Top European frontier model",
          "Principal modelo europeu de fronteira",
        ),
        speed: "medium",
      },
      {
        name: "Codestral",
        type: "code",
        contextWindow: "256K tokens",
        inputPrice: "$0.20 / M tokens",
        outputPrice: "$0.60 / M tokens",
        freeAccess: false,
        highlight: l(
          "Purpose-built for code, 80+ languages",
          "Feito sob medida para código, 80+ linguagens",
        ),
        speed: "fast",
      },
      {
        name: "Pixtral Large",
        type: "multimodal",
        contextWindow: "128K tokens",
        inputPrice: "$2 / M tokens",
        outputPrice: "$6 / M tokens",
        freeAccess: false,
        highlight: l(
          "Frontier multimodal with document understanding",
          "Multimodal de fronteira com compreensão de documentos",
        ),
        speed: "medium",
      },
    ],
    products: [
      "Le Chat",
      "la Plateforme (API)",
      "Mistral Agents",
      "Mistral 7B (open-weight)",
      "Mixtral 8x7B (open-weight)",
    ],
    api: {
      available: true,
      endpoint: "api.mistral.ai",
      sdks: ["Python", "TypeScript"],
    },
    strengths: [
      l("Exceptional efficiency—strong results at small model sizes", "Eficiência excepcional — bons resultados em tamanhos pequenos"),
      l("Open-weight releases for community and research use", "Lançamentos open-weight para comunidade e pesquisa"),
      l("GDPR-compliant European data residency options", "Opções europeias de residência de dados compatíveis com GDPR"),
      l("Codestral sets the bar for specialized code models", "Codestral define o padrão para modelos de código especializados"),
      l("Competitive frontier performance at lower cost than US labs", "Performance competitiva de fronteira a custo menor que labs dos EUA"),
    ],
    useCases: [
      l("Cost-sensitive production APIs needing frontier quality", "APIs de produção sensíveis a custo que precisam de qualidade de fronteira"),
      l("European enterprises requiring data sovereignty", "Empresas europeias que exigem soberania de dados"),
      l("Code completion and developer tooling", "Autocompletar de código e tooling para devs"),
      l("Fine-tuning on open-weight base models", "Fine-tuning sobre modelos base open-weight"),
      l("Multilingual European-language tasks", "Tarefas multilíngues em idiomas europeus"),
    ],
  },
  {
    id: "xai",
    name: "xAI",
    tagline: l(
      "Understanding the universe through real-time, unfiltered AI",
      "Entendendo o universo através de IA em tempo real e sem filtros",
    ),
    emoji: "⚡",
    color: "#1DA1F2",
    type: "frontier",
    founded: "2023",
    hq: "Palo Alto, CA",
    website: "https://x.ai",
    focus: [
      l("Real-time info", "Informação em tempo real"),
      l("Unfiltered AI", "IA sem filtros"),
      l("X/Twitter integration", "Integração com X/Twitter"),
      l("Research", "Pesquisa"),
    ],
    description: l(
      "xAI was founded by Elon Musk with a mission to build AI that genuinely understands the physical universe. Grok models have a unique advantage: real-time access to X (Twitter) data, giving them up-to-the-minute awareness of world events. The lab emphasizes fewer content restrictions compared to other frontier providers.",
      "A xAI foi fundada por Elon Musk com a missão de construir uma IA que realmente entenda o universo físico. Os modelos Grok têm uma vantagem única: acesso em tempo real aos dados do X (Twitter), dando consciência minuto-a-minuto dos eventos do mundo. O lab enfatiza menos restrições de conteúdo em comparação a outros provedores de fronteira.",
    ),
    models: [
      {
        name: "Grok 3",
        type: "text",
        contextWindow: "131K tokens",
        inputPrice: "$5 / M tokens",
        outputPrice: "$15 / M tokens",
        freeAccess: false,
        highlight: l(
          "Real-time X/Twitter data access",
          "Acesso em tempo real aos dados do X/Twitter",
        ),
        speed: "medium",
      },
      {
        name: "Grok 3 Mini",
        type: "reasoning",
        contextWindow: "131K tokens",
        inputPrice: "$0.30 / M tokens",
        outputPrice: "$0.50 / M tokens",
        freeAccess: false,
        highlight: l(
          "Fast reasoning for complex problems at low cost",
          "Raciocínio rápido para problemas complexos a baixo custo",
        ),
        speed: "fast",
      },
      {
        name: "Aurora",
        type: "image",
        freeAccess: false,
        highlight: l(
          "xAI's photorealistic image generation model",
          "Modelo de geração de imagem fotorrealista da xAI",
        ),
      },
    ],
    products: [
      "Grok (X integration)",
      "xAI API",
      "Aurora image generation",
    ],
    api: {
      available: true,
      endpoint: "api.x.ai",
      sdks: ["Python", "TypeScript"],
    },
    strengths: [
      l("Unique real-time access to X/Twitter firehose data", "Acesso único em tempo real ao firehose do X/Twitter"),
      l("Up-to-the-minute awareness of current events", "Consciência minuto-a-minuto dos eventos atuais"),
      l("Less restrictive content policies than competitor labs", "Políticas de conteúdo menos restritivas que labs concorrentes"),
      l("Competitive frontier reasoning performance", "Performance competitiva em raciocínio de fronteira"),
      l("Tight integration with the X social platform ecosystem", "Integração apertada com o ecossistema social do X"),
    ],
    useCases: [
      l("Real-time news analysis and social media monitoring", "Análise de notícias em tempo real e monitoramento de redes sociais"),
      l("Current events Q&A requiring up-to-date information", "Perguntas e respostas sobre atualidades exigindo informação fresca"),
      l("Applications embedded within the X platform", "Aplicações embarcadas dentro da plataforma X"),
      l("Research requiring less filtered model outputs", "Pesquisa que requer saídas de modelo menos filtradas"),
      l("Trend detection and social intelligence workflows", "Detecção de tendências e fluxos de inteligência social"),
    ],
  },
  {
    id: "cohere",
    name: "Cohere",
    tagline: l(
      "Enterprise AI that understands your business data",
      "IA corporativa que entende os dados do seu negócio",
    ),
    emoji: "🏢",
    color: "#39594D",
    type: "enterprise",
    founded: "2019",
    hq: "Toronto, Canada",
    website: "https://cohere.com",
    focus: [
      l("Enterprise RAG", "RAG corporativo"),
      l("Embeddings", "Embeddings"),
      l("Grounded generation", "Geração ancorada"),
      l("Private deployment", "Deploy privado"),
    ],
    description: l(
      "Cohere focuses exclusively on enterprise AI, with best-in-class retrieval-augmented generation (RAG) and embedding models. Their Command series is optimized for business workflows requiring grounded, accurate responses from company knowledge bases. Cohere offers flexible deployment options including private cloud and on-premises installs for regulated industries.",
      "A Cohere foca exclusivamente em IA corporativa, com modelos de geração aumentada por recuperação (RAG) e de embedding de ponta. A série Command é otimizada para fluxos corporativos que exigem respostas ancoradas e precisas a partir das bases de conhecimento da empresa. A Cohere oferece opções flexíveis de deploy, incluindo cloud privada e on-premises para setores regulados.",
    ),
    models: [
      {
        name: "Command R+",
        type: "text",
        contextWindow: "128K tokens",
        inputPrice: "$2.50 / M tokens",
        outputPrice: "$10 / M tokens",
        freeAccess: false,
        highlight: l(
          "Optimized for enterprise RAG workflows",
          "Otimizado para fluxos de RAG corporativos",
        ),
        speed: "medium",
      },
      {
        name: "Command A",
        type: "text",
        contextWindow: "256K tokens",
        inputPrice: "$2.50 / M tokens",
        outputPrice: "$10 / M tokens",
        freeAccess: false,
        highlight: l(
          "Latest enterprise command model with extended context",
          "Modelo corporativo Command mais recente, com contexto estendido",
        ),
        speed: "medium",
      },
      {
        name: "Embed 3",
        type: "embedding",
        inputPrice: "$0.10 / M tokens",
        freeAccess: false,
        highlight: l(
          "Best-in-class enterprise search embeddings",
          "Embeddings de busca corporativa de ponta",
        ),
      },
    ],
    products: [
      "Coral (enterprise chat)",
      "Cohere API",
      "NightSea",
      "Toolkit for RAG",
    ],
    api: {
      available: true,
      endpoint: "api.cohere.com",
      sdks: ["Python", "TypeScript", "Java", "Go"],
    },
    strengths: [
      l("Best-in-class retrieval-augmented generation out of the box", "RAG de ponta funcionando de cara"),
      l("Industry-leading embedding models for semantic search", "Modelos de embedding líderes para busca semântica"),
      l("Private cloud and on-premises deployment for compliance", "Deploy em cloud privada e on-premises para compliance"),
      l("Native grounding to reduce hallucinations in enterprise contexts", "Ancoragem nativa para reduzir alucinações em contextos corporativos"),
      l("Purpose-built for enterprise knowledge management", "Feito sob medida para gestão corporativa de conhecimento"),
    ],
    useCases: [
      l("Enterprise search over internal knowledge bases", "Busca corporativa sobre bases internas de conhecimento"),
      l("RAG pipelines for customer support and documentation", "Pipelines de RAG para suporte ao cliente e documentação"),
      l("Regulated industries needing private model deployment", "Setores regulados que precisam de deploy privado do modelo"),
      l("Semantic search and recommendation systems", "Busca semântica e sistemas de recomendação"),
      l("Multi-document synthesis for research and legal workflows", "Síntese multi-documento para pesquisa e jurídico"),
    ],
  },
  {
    id: "amazon-aws",
    name: "Amazon AWS",
    tagline: l(
      "AI built for the cloud, integrated across the AWS ecosystem",
      "IA construída para a nuvem, integrada em todo o ecossistema AWS",
    ),
    emoji: "☁️",
    color: "#FF9900",
    type: "enterprise",
    founded: "2006",
    hq: "Seattle, WA",
    website: "https://aws.amazon.com/ai",
    focus: [
      l("Cloud infrastructure", "Infraestrutura de nuvem"),
      l("Enterprise", "Corporativo"),
      l("Model marketplace", "Marketplace de modelos"),
      l("AWS integration", "Integração com AWS"),
    ],
    description: l(
      "Amazon's AI efforts span both proprietary Nova models and the Bedrock model marketplace, which gives customers access to models from Anthropic, Meta, Mistral, and others through a unified AWS API. Nova models are optimized for price-performance on AWS workloads. Amazon Q brings generative AI into the core AWS developer and business tooling stack.",
      "Os esforços de IA da Amazon abrangem tanto os modelos proprietários Nova quanto o marketplace de modelos Bedrock, que dá acesso a modelos da Anthropic, Meta, Mistral e outros via uma API unificada da AWS. Os modelos Nova são otimizados para relação preço-performance em workloads AWS. O Amazon Q leva IA generativa ao núcleo do stack de tooling para devs e negócios da AWS.",
    ),
    models: [
      {
        name: "Amazon Nova Micro",
        type: "text",
        contextWindow: "128K tokens",
        inputPrice: "$0.035 / M tokens",
        outputPrice: "$0.14 / M tokens",
        freeAccess: false,
        highlight: l(
          "Fastest and cheapest Nova model for simple tasks",
          "Modelo Nova mais rápido e barato para tarefas simples",
        ),
        speed: "fast",
      },
      {
        name: "Amazon Nova Lite",
        type: "multimodal",
        contextWindow: "300K tokens",
        inputPrice: "$0.06 / M tokens",
        outputPrice: "$0.24 / M tokens",
        freeAccess: false,
        highlight: l(
          "Low-cost multimodal with extended context",
          "Multimodal de baixo custo com contexto estendido",
        ),
        speed: "fast",
      },
      {
        name: "Amazon Nova Pro",
        type: "multimodal",
        contextWindow: "300K tokens",
        inputPrice: "$0.80 / M tokens",
        outputPrice: "$3.20 / M tokens",
        freeAccess: false,
        highlight: l(
          "Best price-performance for complex multimodal tasks",
          "Melhor relação preço-performance para tarefas multimodais complexas",
        ),
        speed: "medium",
      },
      {
        name: "Amazon Titan Embed",
        type: "embedding",
        freeAccess: false,
        highlight: l(
          "Optimized embeddings for AWS search and RAG pipelines",
          "Embeddings otimizados para busca AWS e pipelines de RAG",
        ),
      },
    ],
    products: [
      "Amazon Bedrock",
      "Amazon SageMaker",
      "Amazon Q",
      "Amazon Rekognition",
      "Amazon Textract",
    ],
    api: {
      available: true,
      endpoint: "bedrock.amazonaws.com",
      sdks: ["Python (boto3)", "TypeScript", "Java", ".NET", "Go", "Rust"],
    },
    strengths: [
      l("Amazon Bedrock offers a single API to 30+ models from multiple labs", "Amazon Bedrock oferece uma API única para 30+ modelos de vários labs"),
      l("Deepest integration with AWS services (S3, Lambda, Glue, etc.)", "Integração mais profunda com serviços AWS (S3, Lambda, Glue, etc.)"),
      l("Highly competitive Nova pricing for high-throughput workloads", "Preço Nova altamente competitivo para workloads de alto throughput"),
      l("Enterprise compliance—SOC2, HIPAA, FedRAMP, GDPR", "Compliance corporativo — SOC2, HIPAA, FedRAMP, GDPR"),
      l("Strong managed fine-tuning and model customization via SageMaker", "Forte fine-tuning gerenciado e customização de modelos via SageMaker"),
    ],
    useCases: [
      l("Enterprises already invested in the AWS ecosystem", "Empresas já investidas no ecossistema AWS"),
      l("High-volume inference requiring predictable cloud pricing", "Inferência de alto volume exigindo preço previsível de cloud"),
      l("Multi-model applications via Bedrock's unified API", "Aplicações multi-modelo via API unificada do Bedrock"),
      l("Regulated industries needing AWS compliance certifications", "Setores regulados que precisam das certificações de compliance AWS"),
      l("Document processing pipelines with Textract and Bedrock", "Pipelines de processamento de documentos com Textract e Bedrock"),
    ],
  },

  // ─── BR-specific labs ─────────────────────────────────────────────────────
  {
    id: "maritaca-ai",
    name: "Maritaca AI",
    tagline: l(
      "Brazilian AI lab building Portuguese-native frontier models",
      "Lab brasileiro de IA construindo modelos de fronteira nativos em português",
    ),
    emoji: "🇧🇷",
    color: "#10b981",
    type: "frontier",
    founded: "2023",
    hq: "São Paulo, Brasil",
    website: "https://www.maritaca.ai",
    focus: [
      l("Portuguese-native LLMs", "LLMs nativos em português"),
      l("Sovereign AI", "IA soberana"),
      l("Brazilian context", "Contexto brasileiro"),
      l("Long context", "Contexto longo"),
    ],
    description: l(
      "Maritaca AI is the leading Brazilian AI lab, building large language models trained from the ground up with Portuguese as a first-class language rather than a translation afterthought. Spun out of Unicamp research, the Sabiá family of models outperforms global frontier models on Brazilian Portuguese benchmarks (ENEM, OAB exam, BLUEX), legal text, and Brazil-specific cultural knowledge. The company offers MariTalk as a consumer chat interface and an enterprise API used by major Brazilian banks, telcos, and government agencies.",
      "A Maritaca AI é o principal lab brasileiro de IA, construindo LLMs treinados desde o zero com o português como idioma de primeira classe, em vez de uma tradução posterior. Originada de pesquisa da Unicamp, a família Sabiá supera modelos globais de fronteira em benchmarks de português brasileiro (ENEM, OAB, BLUEX), texto jurídico e conhecimento cultural BR. A empresa oferece o MariTalk como chat para consumidores e uma API corporativa usada por grandes bancos, telcos e órgãos do governo brasileiro.",
    ),
    models: [
      {
        name: "Sabiá-3",
        type: "text",
        contextWindow: "128K tokens",
        inputPrice: "R$ 5 / M tokens",
        outputPrice: "R$ 15 / M tokens",
        freeAccess: false,
        highlight: l(
          "Tops PT-BR benchmarks (ENEM, OAB) — outperforms GPT-4 on Brazilian text",
          "Top em benchmarks PT-BR (ENEM, OAB) — supera o GPT-4 em texto brasileiro",
        ),
        speed: "medium",
      },
      {
        name: "Sabiá-2 Medium",
        type: "text",
        contextWindow: "32K tokens",
        freeAccess: true,
        highlight: l(
          "Free tier on MariTalk for everyday Portuguese tasks",
          "Plano gratuito no MariTalk para tarefas do dia a dia em português",
        ),
        speed: "fast",
      },
    ],
    products: [
      "MariTalk",
      "Maritaca API",
      "Sabiá (Llama-derived family)",
    ],
    api: {
      available: true,
      endpoint: "chat.maritaca.ai/api",
      sdks: ["Python", "TypeScript"],
    },
    strengths: [
      l("Native Brazilian Portuguese training (not translation)", "Treinamento nativo em português brasileiro (não tradução)"),
      l("Top scores on ENEM, OAB exam, and BLUEX benchmarks", "Top scores em ENEM, OAB e BLUEX"),
      l("Brazil-aware: Pix, CLT, SUS, IRPF, ANVISA, regulamentação BR", "Consciente do Brasil: Pix, CLT, SUS, IRPF, ANVISA e regulação BR"),
      l("Data residency in Brazil (LGPD-friendly)", "Residência de dados no Brasil (LGPD-friendly)"),
      l("Pricing in BRL, no FX exposure for Brazilian customers", "Cobrança em BRL, sem exposição cambial para clientes brasileiros"),
    ],
    useCases: [
      l("Customer support in Brazilian Portuguese for banks, telcos, varejo", "Atendimento ao cliente em português brasileiro para bancos, telcos, varejo"),
      l("Legal document analysis (contratos, pareceres, peças judiciais)", "Análise de documentos jurídicos (contratos, pareceres, peças)"),
      l("Public-sector applications requiring data residency in Brazil", "Aplicações do setor público que exigem residência de dados no Brasil"),
      l("Educational tooling for ENEM, vestibular, concursos públicos", "Tooling educacional para ENEM, vestibular, concursos públicos"),
      l("Government compliance (LGPD, transparência ativa)", "Compliance com o governo (LGPD, transparência ativa)"),
    ],
  },
  {
    id: "cesar",
    name: "CESAR",
    tagline: l(
      "Brazilian innovation center applying AI to industry and public sector",
      "Centro de inovação brasileiro aplicando IA à indústria e ao setor público",
    ),
    emoji: "🔬",
    color: "#7c3aed",
    type: "specialized",
    founded: "1996",
    hq: "Recife, PE / São Paulo, SP",
    website: "https://www.cesar.org.br",
    focus: [
      l("Applied AI research", "Pesquisa aplicada em IA"),
      l("Public sector", "Setor público"),
      l("Industry 4.0", "Indústria 4.0"),
      l("Education", "Educação"),
    ],
    description: l(
      "CESAR (Centro de Estudos e Sistemas Avançados do Recife) is one of Latin America's largest applied innovation centers, with strong AI research, engineering services, and the CESAR School graduate program. Originally part of the Porto Digital ecosystem, CESAR partners with the Brazilian federal government, banks (Itaú, Caixa), oil & gas (Petrobras), and global tech (Samsung Brasil R&D) on AI-driven product development, computer vision in industry, and predictive analytics. CESAR.AI is the dedicated AI services unit.",
      "O CESAR (Centro de Estudos e Sistemas Avançados do Recife) é um dos maiores centros de inovação aplicada da América Latina, com forte pesquisa em IA, serviços de engenharia e o programa de pós-graduação CESAR School. Originalmente parte do ecossistema do Porto Digital, o CESAR atua com o governo federal brasileiro, bancos (Itaú, Caixa), petróleo e gás (Petrobras) e tech global (P&D da Samsung Brasil) em desenvolvimento de produto com IA, visão computacional na indústria e analytics preditivo. O CESAR.AI é a unidade dedicada de serviços de IA.",
    ),
    models: [],
    products: [
      "CESAR.AI (serviços)",
      "CESAR School (pós-graduação)",
      "Porto Digital (ecossistema)",
    ],
    api: { available: false },
    strengths: [
      l("Deep ties with Brazilian federal government and public banks", "Laços profundos com governo federal brasileiro e bancos públicos"),
      l("Applied AI for industry, oil & gas, and manufacturing", "IA aplicada para indústria, óleo & gás e manufatura"),
      l("CESAR School trains hundreds of AI engineers per year in PE", "CESAR School forma centenas de engenheiros de IA por ano em PE"),
      l("End-to-end product engineering, not just model research", "Engenharia de produto ponta-a-ponta, não só pesquisa de modelo"),
      l("Trusted by Samsung, Petrobras, Itaú, Caixa, governo federal", "Confiado por Samsung, Petrobras, Itaú, Caixa e governo federal"),
    ],
    useCases: [
      l("Industrial computer vision (defect detection, safety monitoring)", "Visão computacional industrial (detecção de defeitos, monitoramento de segurança)"),
      l("Predictive maintenance for oil & gas and manufacturing plants", "Manutenção preditiva para petróleo & gás e indústrias"),
      l("Government digital services (gov.br, e-CAC, etc.)", "Serviços digitais do governo (gov.br, e-CAC, etc.)"),
      l("Banking AI for fraud detection and credit scoring (BR market)", "IA bancária para detecção de fraude e crédito (mercado BR)"),
      l("Custom enterprise AI projects with BR data residency", "Projetos corporativos sob medida com residência de dados no BR"),
    ],
  },
];

export const LAB_TYPES = [
  { id: "all",         label: l("All Labs",    "Todos os labs") },
  { id: "frontier",    label: l("Frontier AI", "IA de fronteira") },
  { id: "open-source", label: l("Open Source", "Código aberto") },
  { id: "enterprise",  label: l("Enterprise",  "Corporativo") },
] as const;
