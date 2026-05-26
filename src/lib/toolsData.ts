import { l, type LocalizedString } from "./localized";

export type ToolCategory =
  | "chat"         // AI chatbots and assistants
  | "writing"      // Writing, copy, editing
  | "code"         // Coding, IDE, dev tools
  | "image"        // Image generation/editing
  | "video"        // Video generation/editing
  | "audio"        // Voice, music, speech
  | "research"     // Research, search, knowledge
  | "productivity" // Workflow, agents, automation

export interface AITool {
  id: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  category: ToolCategory;
  pricing: "free" | "freemium" | "paid" | "enterprise";
  priceNote: LocalizedString;
  url: string;
  provider: string;
  tags: string[];
  status: "available" | "beta" | "waitlist";
  highlight: LocalizedString;
}

export const TOOL_CATEGORIES: { id: ToolCategory; label: LocalizedString; icon: string; desc: LocalizedString }[] = [
  { id: "chat",         label: l("Chat & Assistants",      "Chat & Assistentes"),       icon: "💬", desc: l("AI chatbots and general-purpose assistants",          "Chatbots de IA e assistentes de uso geral") },
  { id: "writing",      label: l("Writing & Copy",         "Escrita & Copy"),           icon: "✍️", desc: l("AI writing assistants, copywriting, and editing tools","Assistentes de escrita por IA, copywriting e edição") },
  { id: "code",         label: l("Code & Dev",             "Código & Dev"),             icon: "💻", desc: l("AI coding assistants, IDEs, and developer tools",     "Assistentes de código por IA, IDEs e ferramentas para devs") },
  { id: "image",        label: l("Image Generation",       "Geração de Imagem"),        icon: "🎨", desc: l("AI image generation and photo editing tools",         "Geração de imagem por IA e edição de fotos") },
  { id: "video",        label: l("Video Generation",       "Geração de Vídeo"),         icon: "🎬", desc: l("AI video generation, editing, and animation tools",   "Geração, edição e animação de vídeo por IA") },
  { id: "audio",        label: l("Audio & Voice",          "Áudio & Voz"),              icon: "🎙️", desc: l("AI voice cloning, text-to-speech, and music generation","Clonagem de voz, text-to-speech e geração de música") },
  { id: "research",     label: l("Research & Search",      "Pesquisa & Busca"),         icon: "🔍", desc: l("AI-powered research, search, and knowledge tools",    "Pesquisa, busca e ferramentas de conhecimento com IA") },
  { id: "productivity", label: l("Productivity & Agents",  "Produtividade & Agentes"),  icon: "⚡", desc: l("AI workflow automation, agents, and productivity tools","Automação, agentes e ferramentas de produtividade com IA") },
];

export const AI_TOOLS: AITool[] = [
  // ─── CHAT ────────────────────────────────────────────────────────────────
  {
    id: "claude",
    name: "Claude",
    tagline: l(
      "Anthropic's AI assistant for analysis, writing, and coding",
      "Assistente de IA da Anthropic para análise, escrita e código",
    ),
    description: l(
      "Claude is Anthropic's flagship AI assistant, known for nuanced reasoning, long-context document analysis, and safe, honest responses. Claude.ai offers a free tier and a Pro subscription with access to the most capable Claude models, file uploads, and Projects for persistent memory across conversations.",
      "O Claude é o assistente carro-chefe da Anthropic, conhecido por raciocínio refinado, análise de documentos com contexto longo e respostas seguras e honestas. O Claude.ai tem um plano gratuito e uma assinatura Pro com acesso aos modelos mais capazes, upload de arquivos e Projects para memória persistente entre conversas.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $20/mo Pro · $25/mo Team",
      "Plano grátis · US$ 20/mês Pro · US$ 25/mês Team",
    ),
    url: "https://claude.ai",
    provider: "Anthropic",
    tags: ["reasoning", "long context", "writing", "coding", "safety"],
    status: "available",
    highlight: l(
      "Best-in-class long-context reasoning with a strong safety and honesty focus.",
      "Raciocínio com contexto longo de ponta, com forte foco em segurança e honestidade.",
    ),
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: l(
      "OpenAI's AI assistant used by over 200 million people worldwide",
      "Assistente de IA da OpenAI usado por mais de 200 milhões de pessoas",
    ),
    description: l(
      "ChatGPT is the world's most widely used AI assistant, powered by OpenAI's GPT-4o and o-series reasoning models. It supports text, image, voice, and file inputs, and offers custom GPTs, a code interpreter, web browsing, and DALL-E 3 image generation — all in one interface.",
      "O ChatGPT é o assistente de IA mais usado do mundo, movido pelos modelos GPT-4o e da série-o da OpenAI. Suporta texto, imagem, voz e arquivos como entrada, e oferece GPTs customizados, code interpreter, navegação na web e geração de imagens com DALL-E 3 — tudo em uma interface.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $20/mo Plus · $25/mo Team",
      "Plano grátis · US$ 20/mês Plus · US$ 25/mês Team",
    ),
    url: "https://chatgpt.com",
    provider: "OpenAI",
    tags: ["multimodal", "voice", "GPTs", "code interpreter", "browsing"],
    status: "available",
    highlight: l(
      "The most widely used AI assistant with the broadest feature set of any consumer product.",
      "Assistente de IA mais usado, com o conjunto de recursos mais amplo entre produtos de consumidor.",
    ),
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: l(
      "Google's AI assistant with real-time Search and 1M-token context",
      "Assistente de IA da Google com Search em tempo real e 1M de contexto",
    ),
    description: l(
      "Gemini is Google's consumer AI assistant powered by the Gemini 2.5 model family. It integrates tightly with Google Workspace (Docs, Sheets, Gmail), supports file and image inputs, and can ground answers in live Google Search results. Gemini Advanced unlocks Gemini 2.5 Pro with a 1M-token context window.",
      "O Gemini é o assistente de IA de consumidor da Google, movido pela família Gemini 2.5. Integra de forma profunda com o Google Workspace (Docs, Sheets, Gmail), suporta entradas de arquivos e imagens e pode ancorar respostas em resultados da Google Search ao vivo. O Gemini Advanced libera o Gemini 2.5 Pro com janela de contexto de 1M tokens.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $19.99/mo Advanced (Google One AI Premium)",
      "Plano grátis · US$ 19,99/mês Advanced (Google One AI Premium)",
    ),
    url: "https://gemini.google.com",
    provider: "Google DeepMind",
    tags: ["Google Search", "Workspace", "multimodal", "long context", "real-time"],
    status: "available",
    highlight: l(
      "Deep Google Search integration and 1M-token context window in Advanced tier.",
      "Integração profunda com Google Search e janela de contexto de 1M tokens no tier Advanced.",
    ),
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    tagline: l(
      "Microsoft's AI assistant built on GPT-4 with live Bing Search",
      "Assistente de IA da Microsoft sobre GPT-4 com Bing Search ao vivo",
    ),
    description: l(
      "Microsoft Copilot is powered by OpenAI's GPT-4 models and Bing's real-time web index, delivering up-to-date answers with citations. It's integrated across Windows 11, Edge, Microsoft 365, and Teams, making it the default AI layer across Microsoft's product ecosystem for hundreds of millions of users.",
      "O Microsoft Copilot é movido por modelos GPT-4 da OpenAI e pelo índice web em tempo real do Bing, entregando respostas atualizadas com citações. Está integrado no Windows 11, Edge, Microsoft 365 e Teams, sendo a camada padrão de IA no ecossistema Microsoft para centenas de milhões de usuários.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free · $30/mo Copilot for Microsoft 365",
      "Grátis · US$ 30/mês Copilot para Microsoft 365",
    ),
    url: "https://copilot.microsoft.com",
    provider: "Microsoft",
    tags: ["Bing Search", "Microsoft 365", "Windows", "real-time web", "citations"],
    status: "available",
    highlight: l(
      "Native across Windows and Microsoft 365 with live Bing-grounded answers.",
      "Nativo no Windows e Microsoft 365, com respostas ancoradas no Bing ao vivo.",
    ),
  },
  {
    id: "grok",
    name: "Grok",
    tagline: l(
      "xAI's assistant with real-time X/Twitter data and Aurora image generation",
      "Assistente da xAI com dados em tempo real do X/Twitter e geração de imagem Aurora",
    ),
    description: l(
      "Grok is xAI's AI assistant built into the X platform (formerly Twitter), with unique real-time access to the X data firehose. Grok 3 features strong reasoning and image understanding, while the standalone app offers image generation via the Aurora model. Grok tends to have fewer content restrictions than other major assistants.",
      "O Grok é o assistente de IA da xAI integrado à plataforma X (ex-Twitter), com acesso único em tempo real ao firehose de dados do X. O Grok 3 traz raciocínio forte e compreensão de imagem, e o app independente oferece geração de imagem via modelo Aurora. O Grok costuma ter menos restrições de conteúdo que outros assistentes.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free on X (limited) · $8/mo X Premium for full Grok access",
      "Grátis no X (limitado) · US$ 8/mês X Premium para acesso completo",
    ),
    url: "https://grok.com",
    provider: "xAI",
    tags: ["real-time", "X platform", "Twitter", "image generation", "Aurora"],
    status: "available",
    highlight: l(
      "Unique real-time awareness via live access to the X/Twitter data firehose.",
      "Consciência única em tempo real via acesso ao firehose do X/Twitter.",
    ),
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    tagline: l(
      "Meta's free AI assistant built into WhatsApp, Instagram, and Facebook",
      "Assistente gratuito da Meta integrado ao WhatsApp, Instagram e Facebook",
    ),
    description: l(
      "Meta AI is powered by Llama 4 and embedded directly into WhatsApp, Instagram, Facebook, and Messenger, reaching over 3 billion monthly active users. The standalone Meta AI web app supports image generation with Imagine and real-time web search. It's one of the few major AI assistants available entirely free with no subscription required.",
      "O Meta AI é movido pelo Llama 4 e embarcado diretamente no WhatsApp, Instagram, Facebook e Messenger, atingindo mais de 3 bilhões de usuários ativos mensais. O webapp Meta AI oferece geração de imagem com o Imagine e busca em tempo real. É um dos poucos grandes assistentes totalmente gratuitos, sem assinatura.",
    ),
    category: "chat",
    pricing: "free",
    priceNote: l("Free", "Grátis"),
    url: "https://www.meta.ai",
    provider: "Meta",
    tags: ["WhatsApp", "Instagram", "social", "image generation", "Llama 4"],
    status: "available",
    highlight: l(
      "Completely free assistant embedded across Meta's 3B+ user social platforms.",
      "Assistente totalmente gratuito embarcado nas redes sociais da Meta (3B+ usuários).",
    ),
  },
  {
    id: "le-chat",
    name: "Le Chat",
    tagline: l(
      "Mistral AI's fast, privacy-friendly European assistant",
      "Assistente europeu rápido e amigável com privacidade da Mistral AI",
    ),
    description: l(
      "Le Chat is Mistral AI's consumer and business chat interface, running on Mistral's frontier models including Mistral Large 2 and the Pixtral multimodal model. Built with European data privacy standards in mind, it supports web search grounding and offers a generous free tier, making it popular among privacy-conscious users and European businesses.",
      "O Le Chat é a interface de chat da Mistral AI para consumidores e empresas, rodando nos modelos de fronteira da Mistral incluindo Mistral Large 2 e o multimodal Pixtral. Construído com padrões europeus de privacidade em mente, suporta ancoragem por busca na web e oferece um plano gratuito generoso, sendo popular entre usuários preocupados com privacidade e empresas europeias.",
    ),
    category: "chat",
    pricing: "freemium",
    priceNote: l(
      "Free tier · €14.99/mo Pro",
      "Plano grátis · € 14,99/mês Pro",
    ),
    url: "https://chat.mistral.ai",
    provider: "Mistral AI",
    tags: ["European", "privacy", "GDPR", "fast", "multilingual"],
    status: "available",
    highlight: l(
      "Fast, GDPR-compliant European assistant with strong multilingual support.",
      "Assistente europeu rápido, compatível com GDPR e com forte suporte multilíngue.",
    ),
  },

  // ─── WRITING ─────────────────────────────────────────────────────────────
  {
    id: "jasper",
    name: "Jasper",
    tagline: l(
      "AI writing assistant built for marketing and brand teams",
      "Assistente de escrita por IA feito para times de marketing e branding",
    ),
    description: l(
      "Jasper is an AI writing platform purpose-built for marketing teams, offering brand voice training, campaign workflows, and a library of templates for ads, blog posts, emails, and social media. The Brand Voice feature learns your company's tone and applies it consistently across all generated content.",
      "O Jasper é uma plataforma de escrita por IA feita sob medida para times de marketing, oferecendo treinamento de voz de marca, fluxos de campanha e uma biblioteca de templates para anúncios, posts de blog, e-mails e redes sociais. O Brand Voice aprende o tom da sua empresa e aplica de forma consistente em todo conteúdo gerado.",
    ),
    category: "writing",
    pricing: "paid",
    priceNote: l(
      "From $49/mo Creator · $69/mo Pro · Enterprise pricing",
      "A partir de US$ 49/mês Creator · US$ 69/mês Pro · Preço corporativo sob consulta",
    ),
    url: "https://jasper.ai",
    provider: "Jasper AI",
    tags: ["marketing", "brand voice", "copywriting", "SEO", "templates"],
    status: "available",
    highlight: l(
      "Brand Voice training ensures every piece of content sounds consistently on-brand.",
      "O treinamento Brand Voice garante que todo conteúdo soe consistentemente com a marca.",
    ),
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    tagline: l(
      "AI-powered GTM platform for sales and marketing copy at scale",
      "Plataforma GTM com IA para copy de vendas e marketing em escala",
    ),
    description: l(
      "Copy.ai started as a copywriting tool and has evolved into a go-to-market (GTM) AI platform that automates sales outreach, content workflows, and marketing operations at scale. It offers 90+ copywriting templates, a workflow builder for multi-step automation, and integrations with CRMs and marketing platforms.",
      "O Copy.ai começou como ferramenta de copywriting e evoluiu para uma plataforma de IA go-to-market (GTM) que automatiza prospecção de vendas, fluxos de conteúdo e operações de marketing em escala. Oferece mais de 90 templates de copywriting, um construtor de fluxos multi-passo e integrações com CRMs e plataformas de marketing.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $49/mo Starter · $249/mo Advanced",
      "Plano grátis · US$ 49/mês Starter · US$ 249/mês Advanced",
    ),
    url: "https://copy.ai",
    provider: "Copy.ai",
    tags: ["copywriting", "GTM", "sales", "automation", "templates"],
    status: "available",
    highlight: l(
      "Evolved beyond copywriting into a full GTM workflow automation platform.",
      "Evoluiu para além do copywriting virando uma plataforma completa de automação GTM.",
    ),
  },
  {
    id: "grammarly",
    name: "Grammarly",
    tagline: l(
      "AI writing assistant for grammar, clarity, and tone",
      "Assistente de escrita por IA para gramática, clareza e tom",
    ),
    description: l(
      "Grammarly is the leading AI writing assistant for real-time grammar checking, style suggestions, and tone adjustments. The GrammarlyGO generative AI layer adds text generation, rewriting, and ideation directly into browsers, Google Docs, Microsoft Word, and email clients. Trusted by over 30 million daily users.",
      "O Grammarly é o principal assistente de escrita por IA para verificação gramatical em tempo real, sugestões de estilo e ajustes de tom. A camada generativa GrammarlyGO adiciona geração de texto, reescrita e ideação direto em navegadores, Google Docs, Microsoft Word e clientes de e-mail. Confiado por mais de 30 milhões de usuários diários.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free · $12/mo Premium · $15/mo Business",
      "Grátis · US$ 12/mês Premium · US$ 15/mês Business",
    ),
    url: "https://grammarly.com",
    provider: "Grammarly",
    tags: ["grammar", "editing", "tone", "browser extension", "Google Docs"],
    status: "available",
    highlight: l(
      "30M+ daily users rely on its real-time grammar and clarity suggestions.",
      "Mais de 30M de usuários diários confiam nas sugestões de gramática e clareza em tempo real.",
    ),
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    tagline: l(
      "AI writing and Q&A built directly into your Notion workspace",
      "Escrita e perguntas-e-respostas por IA dentro do seu workspace do Notion",
    ),
    description: l(
      "Notion AI adds generative AI capabilities directly into Notion's workspace, enabling users to draft, edit, summarize, and ask questions about their pages and databases. The AI Q&A feature searches across an entire connected workspace to surface answers from meeting notes, docs, and wikis instantly.",
      "O Notion AI traz capacidades generativas direto no workspace do Notion, permitindo redigir, editar, resumir e fazer perguntas sobre páginas e bancos de dados. O recurso AI Q&A varre todo o workspace conectado para trazer respostas de notas de reunião, docs e wikis na hora.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free Notion plan · $10/mo AI add-on per member",
      "Plano Notion grátis · US$ 10/mês de add-on de IA por membro",
    ),
    url: "https://notion.so/product/ai",
    provider: "Notion",
    tags: ["workspace", "notes", "summarization", "Q&A", "knowledge base"],
    status: "available",
    highlight: l(
      "Q&A across your entire workspace surfaces answers from any page instantly.",
      "Perguntas-e-respostas em todo o workspace trazem respostas de qualquer página na hora.",
    ),
  },
  {
    id: "writesonic",
    name: "Writesonic",
    tagline: l(
      "AI content platform for SEO articles, ads, and landing pages",
      "Plataforma de conteúdo por IA para artigos SEO, anúncios e landing pages",
    ),
    description: l(
      "Writesonic is an AI content platform combining a writing assistant with an article writer optimized for SEO. Chatsonic adds real-time web search to conversational AI. The platform covers blog posts, ads, product descriptions, and landing pages with built-in Surfer SEO integration for search ranking optimization.",
      "O Writesonic é uma plataforma de conteúdo por IA que combina assistente de escrita com um redator de artigos otimizado para SEO. O Chatsonic adiciona busca em tempo real à IA conversacional. A plataforma cobre posts de blog, anúncios, descrições de produto e landing pages com integração nativa do Surfer SEO para otimização de ranking.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free tier · From $20/mo Individual · $99/mo Teams",
      "Plano grátis · A partir de US$ 20/mês Individual · US$ 99/mês Teams",
    ),
    url: "https://writesonic.com",
    provider: "Writesonic",
    tags: ["SEO", "blog", "ads", "landing pages", "Surfer SEO"],
    status: "available",
    highlight: l(
      "Built-in Surfer SEO integration optimizes articles for search rankings.",
      "Integração nativa com Surfer SEO otimiza artigos para ranking em buscadores.",
    ),
  },
  {
    id: "quillbot",
    name: "QuillBot",
    tagline: l(
      "AI paraphrasing, summarizing, and grammar checking tool",
      "Ferramenta de paráfrase, resumo e verificação gramatical com IA",
    ),
    description: l(
      "QuillBot specializes in AI-powered paraphrasing with multiple writing modes (Standard, Fluency, Formal, Creative, Academic), a document summarizer, grammar checker, and citation generator. Widely used by students, researchers, and content creators for rewriting and condensing existing text.",
      "O QuillBot é especialista em paráfrase com IA, com vários modos (Standard, Fluência, Formal, Criativo, Acadêmico), resumidor de documentos, corretor gramatical e gerador de citações. Muito usado por estudantes, pesquisadores e criadores de conteúdo para reescrever e condensar texto.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $9.95/mo Premium",
      "Plano grátis · US$ 9,95/mês Premium",
    ),
    url: "https://quillbot.com",
    provider: "QuillBot",
    tags: ["paraphrasing", "summarizer", "grammar", "academic", "citations"],
    status: "available",
    highlight: l(
      "Multiple paraphrase modes give fine-grained control over tone and formality.",
      "Vários modos de paráfrase dão controle fino sobre tom e formalidade.",
    ),
  },
  {
    id: "wordtune",
    name: "Wordtune",
    tagline: l(
      "AI writing companion that rewrites, summarizes, and enriches text",
      "Companheiro de escrita por IA que reescreve, resume e enriquece texto",
    ),
    description: l(
      "Wordtune is an AI writing companion that offers real-time rewrite suggestions for improving clarity, tone, and conciseness. Unlike grammar checkers, it rewrites full sentences to be more compelling. The Spices feature generates factual enhancements, analogies, and examples to enrich any draft.",
      "O Wordtune é um companheiro de escrita por IA que oferece sugestões de reescrita em tempo real para melhorar clareza, tom e concisão. Diferente de corretores gramaticais, ele reescreve frases inteiras para ficarem mais convincentes. O recurso Spices gera enriquecimentos factuais, analogias e exemplos para deixar qualquer rascunho mais rico.",
    ),
    category: "writing",
    pricing: "freemium",
    priceNote: l(
      "Free 10 rewrites/day · $13.99/mo Advanced · $19.99/mo Unlimited",
      "10 reescritas/dia grátis · US$ 13,99/mês Advanced · US$ 19,99/mês Unlimited",
    ),
    url: "https://wordtune.com",
    provider: "AI21 Labs",
    tags: ["rewriting", "clarity", "tone", "summaries", "Spices"],
    status: "available",
    highlight: l(
      "Spices feature adds factual enhancements and analogies to enrich any draft.",
      "O recurso Spices adiciona enriquecimentos factuais e analogias a qualquer rascunho.",
    ),
  },

  // ─── CODE ────────────────────────────────────────────────────────────────
  {
    id: "cursor",
    name: "Cursor",
    tagline: l(
      "AI-first code editor built on VS Code with deep codebase context",
      "Editor de código AI-first construído sobre o VS Code, com contexto profundo da base",
    ),
    description: l(
      "Cursor is a fork of VS Code that puts AI at the center of the coding experience. Its Composer feature allows multi-file edits from a single prompt, while the Chat panel answers questions about the entire codebase using embeddings. Cursor integrates models from Anthropic, OpenAI, and Google and has become the fastest-growing AI coding IDE.",
      "O Cursor é um fork do VS Code que coloca IA no centro da experiência de programação. O Composer permite edições multi-arquivo a partir de um único prompt, enquanto o painel Chat responde perguntas sobre toda a base de código usando embeddings. Integra modelos da Anthropic, OpenAI e Google, e virou a IDE de IA que mais cresce.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $20/mo Pro · $40/mo Business",
      "Plano grátis · US$ 20/mês Pro · US$ 40/mês Business",
    ),
    url: "https://cursor.com",
    provider: "Anysphere",
    tags: ["VS Code", "IDE", "multi-file edit", "codebase Q&A", "Composer"],
    status: "available",
    highlight: l(
      "Composer enables AI-driven multi-file edits across an entire codebase at once.",
      "O Composer permite edições multi-arquivo guiadas por IA em toda a base de código de uma vez.",
    ),
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    tagline: l(
      "AI coding assistant integrated across GitHub and major IDEs",
      "Assistente de código por IA integrado ao GitHub e às principais IDEs",
    ),
    description: l(
      "GitHub Copilot is the most widely deployed AI coding assistant, integrated into VS Code, Visual Studio, JetBrains IDEs, and GitHub's web editor. It provides inline completions, a chat sidebar, pull request summaries, and Copilot Workspace for autonomous multi-step coding tasks. Backed by OpenAI GPT-4o and Claude models.",
      "O GitHub Copilot é o assistente de código por IA mais amplamente implantado, integrado ao VS Code, Visual Studio, IDEs JetBrains e ao editor web do GitHub. Oferece completions inline, sidebar de chat, resumos de PR e o Copilot Workspace para tarefas autônomas multi-passo. Movido por modelos GPT-4o da OpenAI e Claude.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free for verified students/OSS maintainers · $10/mo Individual · $19/mo Business",
      "Grátis para estudantes verificados/maintainers OSS · US$ 10/mês Individual · US$ 19/mês Business",
    ),
    url: "https://github.com/features/copilot",
    provider: "GitHub / Microsoft",
    tags: ["VS Code", "JetBrains", "completions", "pull requests", "Workspace"],
    status: "available",
    highlight: l(
      "The most widely deployed AI coding assistant with deep IDE-native integration.",
      "Assistente de código por IA mais implantado, com integração nativa profunda às IDEs.",
    ),
  },
  {
    id: "windsurf",
    name: "Windsurf",
    tagline: l(
      "Agentic AI coding IDE with Cascade for autonomous task completion",
      "IDE de código agêntica com Cascade para conclusão autônoma de tarefas",
    ),
    description: l(
      "Windsurf (by Codeium) is an AI-first IDE featuring Cascade, an agentic coding system that autonomously plans and executes multi-step programming tasks. Unlike traditional tab-completion tools, Cascade reads terminal output, runs commands, and iterates until tasks are complete — one of the most autonomous coding environments available.",
      "O Windsurf (da Codeium) é uma IDE AI-first com o Cascade, sistema agêntico de programação que planeja e executa tarefas multi-passo de forma autônoma. Diferente de ferramentas tradicionais de autocomplete, o Cascade lê a saída do terminal, roda comandos e itera até concluir — um dos ambientes de programação mais autônomos disponíveis.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $15/mo Pro · $60/mo Teams",
      "Plano grátis · US$ 15/mês Pro · US$ 60/mês Teams",
    ),
    url: "https://codeium.com/windsurf",
    provider: "Codeium",
    tags: ["agentic", "Cascade", "autonomous", "IDE", "terminal"],
    status: "available",
    highlight: l(
      "Cascade's agentic loop reads terminal output and iterates until the task is done.",
      "O loop agêntico do Cascade lê a saída do terminal e itera até concluir a tarefa.",
    ),
  },
  {
    id: "replit",
    name: "Replit",
    tagline: l(
      "Browser-based IDE with AI agents that build and deploy full-stack apps",
      "IDE no navegador com agentes de IA que constroem e fazem deploy de apps full-stack",
    ),
    description: l(
      "Replit is a cloud-based coding environment where you can write, run, and deploy code directly from the browser. Replit Agent takes a plain-English prompt and autonomously scaffolds a full-stack application, installs dependencies, configures databases, and deploys to a live URL — no local setup required.",
      "O Replit é um ambiente de programação na nuvem onde você escreve, roda e faz deploy de código direto pelo navegador. O Replit Agent recebe um prompt em linguagem natural e cria de forma autônoma uma aplicação full-stack, instalando dependências, configurando banco de dados e fazendo deploy numa URL viva — sem setup local.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $25/mo Core · $40/mo Teams",
      "Plano grátis · US$ 25/mês Core · US$ 40/mês Teams",
    ),
    url: "https://replit.com",
    provider: "Replit",
    tags: ["browser IDE", "deployment", "agentic", "full-stack", "no setup"],
    status: "available",
    highlight: l(
      "Build and deploy full-stack apps from a plain-English prompt, entirely in the browser.",
      "Construa e faça deploy de apps full-stack a partir de um prompt em linguagem natural, no navegador.",
    ),
  },
  {
    id: "tabnine",
    name: "Tabnine",
    tagline: l(
      "Privacy-first AI code completion that runs locally or in the cloud",
      "Autocomplete de código com IA focado em privacidade — local ou na nuvem",
    ),
    description: l(
      "Tabnine is an AI code completion tool that prioritizes developer privacy, offering fully on-device model options alongside cloud models. It integrates with all major IDEs and supports 80+ programming languages. The enterprise tier enables training a personalized model on your company's private codebase.",
      "O Tabnine é uma ferramenta de autocomplete de código com IA que prioriza a privacidade, oferecendo opções totalmente on-device ao lado de modelos na nuvem. Integra com todas as IDEs principais e suporta mais de 80 linguagens. O tier corporativo permite treinar um modelo personalizado na base de código privada da empresa.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $12/mo Pro · Enterprise pricing",
      "Plano grátis · US$ 12/mês Pro · Preço corporativo sob consulta",
    ),
    url: "https://tabnine.com",
    provider: "Tabnine",
    tags: ["privacy", "on-device", "completions", "enterprise", "80+ languages"],
    status: "available",
    highlight: l(
      "On-device model option keeps your code entirely private without cloud exposure.",
      "Opção de modelo on-device mantém seu código totalmente privado, sem exposição na nuvem.",
    ),
  },
  {
    id: "codeium",
    name: "Codeium",
    tagline: l(
      "Free AI code completion and chat for 70+ programming languages",
      "Autocomplete e chat de código grátis com IA para 70+ linguagens",
    ),
    description: l(
      "Codeium offers free AI code completion and an in-IDE chat assistant supporting over 70 programming languages across all major editors. It's one of the few AI coding tools with a fully featured free plan for individual developers, plus enterprise features including custom model fine-tuning on private codebases.",
      "O Codeium oferece autocomplete de código grátis com IA e um assistente de chat in-IDE para mais de 70 linguagens nos principais editores. É uma das poucas ferramentas de código com IA com plano gratuito completo para desenvolvedores individuais, além de recursos corporativos incluindo fine-tuning de modelo em bases privadas.",
    ),
    category: "code",
    pricing: "freemium",
    priceNote: l(
      "Free for individuals · Enterprise pricing",
      "Grátis para indivíduos · Preço corporativo sob consulta",
    ),
    url: "https://codeium.com",
    provider: "Codeium",
    tags: ["free", "completions", "chat", "70+ languages", "enterprise"],
    status: "available",
    highlight: l(
      "Fully featured free plan for individuals with 70+ language support.",
      "Plano gratuito completo para indivíduos com suporte a 70+ linguagens.",
    ),
  },

  // ─── IMAGE ───────────────────────────────────────────────────────────────
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: l(
      "The most popular AI image generator for artistic and photorealistic visuals",
      "O gerador de imagem por IA mais popular para visuais artísticos e fotorrealistas",
    ),
    description: l(
      "Midjourney is the leading AI image generation service, renowned for stunning artistic and photorealistic imagery. It operates through a Discord bot and a web interface at midjourney.com. Midjourney v6.1 and the v7 model deliver exceptional detail, photorealism, and style control via text prompts and reference images.",
      "O Midjourney é o principal serviço de geração de imagem por IA, conhecido por imagens artísticas e fotorrealistas impressionantes. Opera via bot do Discord e interface web em midjourney.com. O Midjourney v6.1 e o modelo v7 entregam detalhamento, fotorrealismo e controle de estilo excepcionais via prompts de texto e imagens de referência.",
    ),
    category: "image",
    pricing: "paid",
    priceNote: l(
      "$10/mo Basic · $30/mo Standard · $60/mo Pro · $120/mo Mega",
      "US$ 10/mês Basic · US$ 30/mês Standard · US$ 60/mês Pro · US$ 120/mês Mega",
    ),
    url: "https://midjourney.com",
    provider: "Midjourney",
    tags: ["artistic", "photorealistic", "Discord", "style", "v6"],
    status: "available",
    highlight: l(
      "Sets the benchmark for artistic quality in AI image generation.",
      "Define a régua de qualidade artística em geração de imagem por IA.",
    ),
  },
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    tagline: l(
      "OpenAI's image generator with best-in-class prompt adherence",
      "Gerador de imagens da OpenAI com a melhor aderência ao prompt da categoria",
    ),
    description: l(
      "DALL-E 3 is OpenAI's flagship image generation model, available via ChatGPT and the OpenAI API. It excels at precise prompt following, accurately rendering text within images, and generating coherent scenes with multiple subjects. Integration into ChatGPT makes it one of the most accessible AI image generators.",
      "O DALL-E 3 é o modelo carro-chefe de geração de imagens da OpenAI, disponível via ChatGPT e API. Se destaca em seguir prompts com precisão, renderizar texto com exatidão dentro de imagens e gerar cenas coerentes com múltiplos sujeitos. A integração com o ChatGPT o torna um dos geradores de imagem mais acessíveis.",
    ),
    category: "image",
    pricing: "freemium",
    priceNote: l(
      "Via ChatGPT Free (limited) · Plus $20/mo · API from $0.04/image",
      "Via ChatGPT Free (limitado) · Plus US$ 20/mês · API a partir de US$ 0,04/imagem",
    ),
    url: "https://openai.com/dall-e-3",
    provider: "OpenAI",
    tags: ["text in images", "prompt following", "ChatGPT", "API", "coherent scenes"],
    status: "available",
    highlight: l(
      "Best prompt adherence of any major image model, including accurate in-image text.",
      "Melhor aderência ao prompt entre modelos de imagem importantes, incluindo texto dentro da imagem.",
    ),
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: l(
      "Open-source image model powering thousands of self-hosted tools",
      "Modelo de imagem open-source que move milhares de ferramentas auto-hospedadas",
    ),
    description: l(
      "Stable Diffusion is the foundational open-source image generation model from Stability AI. Because its weights are publicly available, it powers an enormous ecosystem of fine-tuned models, LoRAs, and tools like ComfyUI, Automatic1111, and InvokeAI. SDXL and SD3 are the latest major versions with improved quality.",
      "O Stable Diffusion é o modelo open-source fundamental de geração de imagem da Stability AI. Como os pesos são públicos, ele move um ecossistema enorme de modelos com fine-tune, LoRAs e ferramentas como ComfyUI, Automatic1111 e InvokeAI. SDXL e SD3 são as versões mais recentes com qualidade aprimorada.",
    ),
    category: "image",
    pricing: "free",
    priceNote: l(
      "Free (self-hosted) · Stability AI API from $0.003/image",
      "Grátis (auto-hospedado) · API Stability AI a partir de US$ 0,003/imagem",
    ),
    url: "https://stability.ai/stable-image",
    provider: "Stability AI",
    tags: ["open-source", "self-hosted", "fine-tuning", "LoRA", "ComfyUI"],
    status: "available",
    highlight: l(
      "Open weights power a massive ecosystem of custom fine-tuned community models.",
      "Pesos abertos movem um ecossistema massivo de modelos com fine-tune da comunidade.",
    ),
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    tagline: l(
      "Adobe's commercially safe AI image generator trained on licensed content",
      "Gerador de imagem da Adobe seguro para uso comercial, treinado em conteúdo licenciado",
    ),
    description: l(
      "Adobe Firefly is Adobe's family of generative AI models trained exclusively on licensed and public domain content, making outputs commercially safe to use without rights concerns. Deeply integrated into Photoshop (Generative Fill), Illustrator, and Express, it also generates vector graphics, patterns, and 3D textures.",
      "O Adobe Firefly é a família de modelos generativos da Adobe treinada exclusivamente em conteúdo licenciado e de domínio público, tornando as saídas seguras para uso comercial sem problemas de direitos. Integrado de forma profunda ao Photoshop (Generative Fill), Illustrator e Express, também gera gráficos vetoriais, padrões e texturas 3D.",
    ),
    category: "image",
    pricing: "freemium",
    priceNote: l(
      "Free 25 credits/mo · Adobe Creative Cloud plans from $9.99/mo",
      "25 créditos/mês grátis · Planos do Adobe Creative Cloud a partir de US$ 9,99/mês",
    ),
    url: "https://firefly.adobe.com",
    provider: "Adobe",
    tags: ["commercially safe", "Photoshop", "Generative Fill", "vector", "licensed training"],
    status: "available",
    highlight: l(
      "Trained exclusively on licensed content — outputs are commercially safe to use.",
      "Treinado exclusivamente em conteúdo licenciado — as saídas são seguras para uso comercial.",
    ),
  },
  {
    id: "ideogram",
    name: "Ideogram",
    tagline: l(
      "AI image generator with best-in-class text rendering inside images",
      "Gerador de imagem com a melhor renderização de texto dentro das imagens",
    ),
    description: l(
      "Ideogram is an AI image generation platform that specializes in accurately rendering readable text within images — historically the hardest challenge for diffusion models. It supports photorealistic and stylized outputs, poster design, logo drafts, and typography-heavy compositions. Ideogram 2.0 added Canvas for iterative editing.",
      "O Ideogram é uma plataforma de geração de imagem por IA especializada em renderizar texto legível com precisão dentro de imagens — historicamente o maior desafio de modelos de difusão. Suporta saídas fotorrealistas e estilizadas, design de cartazes, rascunhos de logos e composições com muita tipografia. O Ideogram 2.0 adicionou o Canvas para edição iterativa.",
    ),
    category: "image",
    pricing: "freemium",
    priceNote: l(
      "Free 10 images/day · $8/mo Basic · $20/mo Plus",
      "10 imagens/dia grátis · US$ 8/mês Basic · US$ 20/mês Plus",
    ),
    url: "https://ideogram.ai",
    provider: "Ideogram",
    tags: ["text rendering", "typography", "poster design", "logo", "Canvas"],
    status: "available",
    highlight: l(
      "Industry-leading accuracy for rendering legible text inside generated images.",
      "Precisão líder do setor para renderizar texto legível dentro de imagens geradas.",
    ),
  },
  {
    id: "flux",
    name: "FLUX",
    tagline: l(
      "Black Forest Labs' state-of-the-art image model with open weights",
      "Modelo de imagem state-of-the-art da Black Forest Labs, com pesos abertos",
    ),
    description: l(
      "FLUX is a family of image generation models from Black Forest Labs, founded by the original creators of Stable Diffusion. FLUX.1 [dev] and [schnell] are open-weight models available for self-hosting, while FLUX.1 [pro] is offered via API. FLUX delivers exceptional photorealism, prompt adherence, and human anatomy accuracy.",
      "O FLUX é uma família de modelos de geração de imagem da Black Forest Labs, fundada pelos criadores originais do Stable Diffusion. FLUX.1 [dev] e [schnell] são modelos open-weight disponíveis para auto-hospedagem, enquanto FLUX.1 [pro] é oferecido via API. O FLUX entrega fotorrealismo, aderência ao prompt e precisão de anatomia humana excepcionais.",
    ),
    category: "image",
    pricing: "freemium",
    priceNote: l(
      "FLUX [schnell] free (open-weight) · API from $0.003/image",
      "FLUX [schnell] grátis (open-weight) · API a partir de US$ 0,003/imagem",
    ),
    url: "https://blackforestlabs.ai",
    provider: "Black Forest Labs",
    tags: ["open-source", "photorealistic", "anatomy", "self-hosted", "FLUX.1"],
    status: "available",
    highlight: l(
      "Outperforms earlier diffusion models on human anatomy realism and prompt adherence.",
      "Supera modelos de difusão anteriores em realismo de anatomia humana e aderência ao prompt.",
    ),
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    tagline: l(
      "AI design and image generation built into the world's most popular design tool",
      "Design e geração de imagem por IA dentro da ferramenta de design mais popular do mundo",
    ),
    description: l(
      "Canva has integrated AI throughout its platform, including Magic Media (image and video generation), Magic Edit (AI inpainting and editing), Magic Design (auto-layout from a prompt), and Dream Lab (powered by FLUX). With 170+ million users, it's the most accessible entry point to AI image creation for non-designers.",
      "O Canva integrou IA por toda a plataforma, incluindo Magic Media (geração de imagem e vídeo), Magic Edit (inpainting e edição com IA), Magic Design (layout automático a partir de um prompt) e Dream Lab (movido pelo FLUX). Com mais de 170 milhões de usuários, é o ponto de entrada mais acessível à criação de imagem por IA para não-designers.",
    ),
    category: "image",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $15/mo Pro · $30/mo Teams",
      "Plano grátis · US$ 15/mês Pro · US$ 30/mês Teams",
    ),
    url: "https://canva.com/ai-image-generator",
    provider: "Canva",
    tags: ["design", "templates", "Magic Media", "editing", "non-designers"],
    status: "available",
    highlight: l(
      "AI generation embedded in a familiar design tool used by 170M+ people.",
      "Geração por IA embutida numa ferramenta de design familiar usada por 170M+ pessoas.",
    ),
  },

  // ─── VIDEO ───────────────────────────────────────────────────────────────
  {
    id: "runway",
    name: "Runway",
    tagline: l(
      "Leading AI video generation platform trusted by professional filmmakers",
      "Principal plataforma de geração de vídeo por IA, confiada por cineastas profissionais",
    ),
    description: l(
      "Runway is the leading professional AI video generation company, with its Gen-3 Alpha model producing high-quality, consistent video clips from text and image prompts. Used by major film studios and creative agencies for visual effects and generative video workflows. It supports text-to-video, image-to-video, and motion brush controls.",
      "A Runway é a principal empresa profissional de geração de vídeo por IA, com seu modelo Gen-3 Alpha produzindo clipes de vídeo de alta qualidade e consistência a partir de prompts de texto e imagem. Usada por grandes estúdios de cinema e agências criativas para efeitos visuais e fluxos de vídeo generativo. Suporta texto-para-vídeo, imagem-para-vídeo e controle por motion brush.",
    ),
    category: "video",
    pricing: "freemium",
    priceNote: l(
      "Free 125 credits · $15/mo Standard · $35/mo Pro · $95/mo Unlimited",
      "125 créditos grátis · US$ 15/mês Standard · US$ 35/mês Pro · US$ 95/mês Unlimited",
    ),
    url: "https://runwayml.com",
    provider: "Runway",
    tags: ["Gen-3", "text-to-video", "image-to-video", "visual effects", "professional"],
    status: "available",
    highlight: l(
      "Gen-3 Alpha is trusted by film studios for professional-grade AI video generation.",
      "Gen-3 Alpha é confiado por estúdios de cinema para geração de vídeo por IA de nível profissional.",
    ),
  },
  {
    id: "sora",
    name: "Sora",
    tagline: l(
      "OpenAI's text-to-video model generating cinematic clips up to 60 seconds",
      "Modelo texto-para-vídeo da OpenAI gerando clipes cinematográficos de até 60 segundos",
    ),
    description: l(
      "Sora is OpenAI's video generation model capable of producing realistic, cinematic video clips up to 60 seconds from text or image prompts. It understands physics, complex multi-subject scenes, and camera movement instructions. Available to ChatGPT Plus and Pro subscribers via the Sora.com interface.",
      "O Sora é o modelo de geração de vídeo da OpenAI capaz de produzir clipes realistas e cinematográficos de até 60 segundos a partir de prompts de texto ou imagem. Entende física, cenas complexas com múltiplos sujeitos e instruções de movimento de câmera. Disponível para assinantes ChatGPT Plus e Pro via Sora.com.",
    ),
    category: "video",
    pricing: "paid",
    priceNote: l(
      "ChatGPT Plus $20/mo (limited) · Pro $200/mo (more generations)",
      "ChatGPT Plus US$ 20/mês (limitado) · Pro US$ 200/mês (mais gerações)",
    ),
    url: "https://sora.com",
    provider: "OpenAI",
    tags: ["text-to-video", "cinematic", "physics", "60 seconds", "camera motion"],
    status: "available",
    highlight: l(
      "Generates coherent 60-second clips with realistic physics and camera movement.",
      "Gera clipes coerentes de 60 segundos com física realista e movimento de câmera.",
    ),
  },
  {
    id: "kling",
    name: "Kling AI",
    tagline: l(
      "Kuaishou's high-quality video generation with up to 2-minute clips",
      "Geração de vídeo de alta qualidade da Kuaishou com clipes de até 2 minutos",
    ),
    description: l(
      "Kling AI is a video generation platform by Kuaishou that produces high-quality video clips up to 2 minutes from text or image prompts. It features a lip-sync mode, camera controls, and a motion brush for targeted animation. Kling has gained global popularity for consistent, high-realism video at competitive pricing.",
      "O Kling AI é uma plataforma de geração de vídeo da Kuaishou que produz clipes de alta qualidade de até 2 minutos a partir de prompts de texto ou imagem. Tem modo de lip-sync, controles de câmera e motion brush para animação direcionada. Ganhou popularidade global por vídeo consistente, de alto realismo, com preço competitivo.",
    ),
    category: "video",
    pricing: "freemium",
    priceNote: l(
      "Free 66 credits/day · From $8.99/mo Starter · $49.99/mo Professional",
      "66 créditos/dia grátis · A partir de US$ 8,99/mês Starter · US$ 49,99/mês Professional",
    ),
    url: "https://klingai.com",
    provider: "Kuaishou",
    tags: ["text-to-video", "2-minute clips", "lip-sync", "camera control", "realism"],
    status: "available",
    highlight: l(
      "Generates up to 2-minute video clips with camera controls and lip-sync support.",
      "Gera clipes de até 2 minutos com controles de câmera e suporte a lip-sync.",
    ),
  },
  {
    id: "pika",
    name: "Pika",
    tagline: l(
      "AI video creation and editing with scene modification features",
      "Criação e edição de vídeo por IA com recursos de modificação de cena",
    ),
    description: l(
      "Pika is an AI video generation and editing platform for generating short video clips from text or images, and modifying existing videos by changing scenes, adding effects, or altering characters. Pika 2.0 introduced Pikadditions (place objects into video) and Pikaffects (apply visual effects) for creative control.",
      "O Pika é uma plataforma de geração e edição de vídeo por IA para gerar clipes curtos a partir de texto ou imagens e modificar vídeos existentes mudando cenas, adicionando efeitos ou alterando personagens. O Pika 2.0 introduziu Pikadditions (inserir objetos no vídeo) e Pikaffects (aplicar efeitos visuais) para controle criativo.",
    ),
    category: "video",
    pricing: "freemium",
    priceNote: l(
      "Free 150 credits/mo · $8/mo Basic · $28/mo Standard · $98/mo Pro",
      "150 créditos/mês grátis · US$ 8/mês Basic · US$ 28/mês Standard · US$ 98/mês Pro",
    ),
    url: "https://pika.art",
    provider: "Pika Labs",
    tags: ["text-to-video", "video editing", "Pikadditions", "effects", "image-to-video"],
    status: "available",
    highlight: l(
      "Pikadditions lets you place any object into an existing video scene seamlessly.",
      "Pikadditions permite inserir qualquer objeto numa cena de vídeo existente sem emendas.",
    ),
  },
  {
    id: "heygen",
    name: "HeyGen",
    tagline: l(
      "AI avatar video creation for marketing, training, and localization",
      "Criação de vídeos com avatar por IA para marketing, treinamento e localização",
    ),
    description: l(
      "HeyGen is an AI video platform specializing in realistic digital avatars that speak from a text script. Widely used for product demos, marketing videos, and corporate training. Its video translation feature localizes videos into 40+ languages while automatically syncing lip movements to the translated audio track.",
      "O HeyGen é uma plataforma de vídeo por IA especializada em avatares digitais realistas que falam a partir de um script de texto. Amplamente usado para demos de produto, vídeos de marketing e treinamento corporativo. O recurso de tradução de vídeo localiza vídeos em mais de 40 idiomas, sincronizando automaticamente os movimentos labiais ao áudio traduzido.",
    ),
    category: "video",
    pricing: "freemium",
    priceNote: l(
      "Free 1 credit · $29/mo Essential · $89/mo Pro · $179/mo Business",
      "1 crédito grátis · US$ 29/mês Essential · US$ 89/mês Pro · US$ 179/mês Business",
    ),
    url: "https://heygen.com",
    provider: "HeyGen",
    tags: ["avatars", "text-to-video", "lip sync", "localization", "40+ languages"],
    status: "available",
    highlight: l(
      "Translate videos into 40+ languages with AI lip-sync matched to the new audio.",
      "Traduz vídeos em 40+ idiomas com lip-sync por IA casando com o novo áudio.",
    ),
  },
  {
    id: "luma-dream-machine",
    name: "Dream Machine",
    tagline: l(
      "Luma AI's fast, high-quality text-to-video and image-to-video generator",
      "Gerador rápido e de alta qualidade texto-para-vídeo e imagem-para-vídeo da Luma AI",
    ),
    description: l(
      "Luma Dream Machine is a text-to-video and image-to-video generator from Luma AI, known for speed and high-quality smooth motion. It generates 24fps video clips with realistic physics and consistent camera movement. Luma's 3D scene capture background (NeRF technology) gives it strong spatial understanding.",
      "O Luma Dream Machine é um gerador texto-para-vídeo e imagem-para-vídeo da Luma AI, conhecido por velocidade e movimento suave de alta qualidade. Gera clipes a 24fps com física realista e movimento de câmera consistente. O background da Luma em captura de cenas 3D (tecnologia NeRF) lhe dá forte compreensão espacial.",
    ),
    category: "video",
    pricing: "freemium",
    priceNote: l(
      "Free 30 generations/mo · $29.99/mo Standard · $99.99/mo Pro",
      "30 gerações/mês grátis · US$ 29,99/mês Standard · US$ 99,99/mês Pro",
    ),
    url: "https://lumalabs.ai/dream-machine",
    provider: "Luma AI",
    tags: ["text-to-video", "fast", "24fps", "image-to-video", "smooth motion"],
    status: "available",
    highlight: l(
      "Fast video generation with smooth, physically realistic camera movement.",
      "Geração rápida de vídeo com movimento de câmera suave e fisicamente realista.",
    ),
  },

  // ─── AUDIO ───────────────────────────────────────────────────────────────
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: l(
      "The leading AI voice platform for text-to-speech and voice cloning",
      "Principal plataforma de voz por IA para text-to-speech e clonagem de voz",
    ),
    description: l(
      "ElevenLabs is the leading AI voice synthesis company, offering hyper-realistic text-to-speech, instant voice cloning from a 1-minute audio sample, and a Voice Library with thousands of community voices. It supports 29 languages with natural intonation and powers voice for thousands of apps, games, and media projects.",
      "A ElevenLabs é a principal empresa de síntese de voz por IA, oferecendo text-to-speech hiper-realista, clonagem instantânea de voz a partir de 1 minuto de áudio e uma Voice Library com milhares de vozes da comunidade. Suporta 29 idiomas com entonação natural e move voz para milhares de apps, jogos e projetos de mídia.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Free 10K chars/mo · $5/mo Starter · $22/mo Creator · $99/mo Pro",
      "10K caracteres/mês grátis · US$ 5/mês Starter · US$ 22/mês Creator · US$ 99/mês Pro",
    ),
    url: "https://elevenlabs.io",
    provider: "ElevenLabs",
    tags: ["voice cloning", "text-to-speech", "29 languages", "realistic", "API"],
    status: "available",
    highlight: l(
      "Clone any voice from a 1-minute audio sample with natural 29-language support.",
      "Clone qualquer voz a partir de 1 minuto de áudio, com suporte natural a 29 idiomas.",
    ),
  },
  {
    id: "suno",
    name: "Suno",
    tagline: l(
      "AI music generator that creates complete songs from a text prompt",
      "Gerador de música por IA que cria músicas completas a partir de um prompt",
    ),
    description: l(
      "Suno is an AI music generation platform that produces complete songs — vocals, instruments, and lyrics — from a short text description. Users specify genre, mood, instruments, and lyrical themes. Suno v4 delivers professional-quality audio with natural vocal performances, making it one of the most capable AI music tools available.",
      "O Suno é uma plataforma de geração de música por IA que produz músicas completas — vocais, instrumentos e letra — a partir de uma curta descrição em texto. Usuários especificam gênero, mood, instrumentos e temas das letras. O Suno v4 entrega áudio de qualidade profissional com performances vocais naturais, sendo uma das ferramentas de música por IA mais capazes disponíveis.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Free 50 credits/day · $10/mo Pro (2,500 credits) · $30/mo Premier",
      "50 créditos/dia grátis · US$ 10/mês Pro (2.500 créditos) · US$ 30/mês Premier",
    ),
    url: "https://suno.com",
    provider: "Suno AI",
    tags: ["music generation", "vocals", "lyrics", "full songs", "genre control"],
    status: "available",
    highlight: l(
      "Generates complete songs with vocals, instruments, and lyrics from a single prompt.",
      "Gera músicas completas com vocais, instrumentos e letra a partir de um único prompt.",
    ),
  },
  {
    id: "udio",
    name: "Udio",
    tagline: l(
      "AI music creation with granular style and production control",
      "Criação de música por IA com controle granular de estilo e produção",
    ),
    description: l(
      "Udio is an AI music generation platform that competes with Suno, offering text-to-music generation with strong control over genre, style, BPM, key, and instrumentation. Praised for high production quality and musical coherence, it also supports remixing and extending generated tracks for longer compositions.",
      "O Udio é uma plataforma de geração de música por IA que compete com o Suno, oferecendo geração texto-para-música com forte controle sobre gênero, estilo, BPM, tonalidade e instrumentação. Elogiado por alta qualidade de produção e coerência musical, também suporta remix e extensão de faixas geradas para composições mais longas.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Free 1,200 credits/mo · $10/mo Standard · $30/mo Pro",
      "1.200 créditos/mês grátis · US$ 10/mês Standard · US$ 30/mês Pro",
    ),
    url: "https://udio.com",
    provider: "Udio",
    tags: ["music generation", "BPM control", "key control", "remix", "production quality"],
    status: "available",
    highlight: l(
      "Fine-grained BPM, key, and style controls for precise AI music composition.",
      "Controles finos de BPM, tonalidade e estilo para composição musical por IA precisa.",
    ),
  },
  {
    id: "whisper",
    name: "OpenAI Whisper",
    tagline: l(
      "Open-source speech recognition model with near-human accuracy across 99 languages",
      "Modelo open-source de reconhecimento de fala com acurácia quase humana em 99 idiomas",
    ),
    description: l(
      "Whisper is OpenAI's open-source automatic speech recognition model, trained on 680,000 hours of multilingual audio. It transcribes and translates speech across 99 languages with near-human accuracy, even in noisy environments. Available for free local inference or via the OpenAI API at $0.006 per minute.",
      "O Whisper é o modelo open-source de reconhecimento automático de fala da OpenAI, treinado em 680.000 horas de áudio multilíngue. Transcreve e traduz fala em 99 idiomas com acurácia quase humana, mesmo em ambientes ruidosos. Disponível para inferência local gratuita ou via API da OpenAI a US$ 0,006 por minuto.",
    ),
    category: "audio",
    pricing: "free",
    priceNote: l(
      "Free (open-source, self-hosted) · OpenAI API $0.006/minute",
      "Grátis (open-source, auto-hospedado) · API OpenAI US$ 0,006/minuto",
    ),
    url: "https://openai.com/research/whisper",
    provider: "OpenAI",
    tags: ["speech recognition", "transcription", "open-source", "99 languages", "translation"],
    status: "available",
    highlight: l(
      "Open-source ASR with near-human accuracy across 99 languages — free to self-host.",
      "ASR open-source com acurácia quase humana em 99 idiomas — grátis para auto-hospedar.",
    ),
  },
  {
    id: "murf",
    name: "Murf AI",
    tagline: l(
      "AI voiceover studio with 200+ voices for creators and businesses",
      "Estúdio de locução por IA com mais de 200 vozes para criadores e empresas",
    ),
    description: l(
      "Murf AI is an AI voiceover platform offering 200+ natural-sounding voices across 20+ languages, designed for professional voiceovers for videos, podcasts, e-learning, and ads. The studio interface provides pitch, speed, and emphasis controls, and lets users sync voice audio to video timelines without recording equipment.",
      "O Murf AI é uma plataforma de locução por IA com mais de 200 vozes de som natural em mais de 20 idiomas, feita para locuções profissionais em vídeos, podcasts, e-learning e anúncios. A interface do estúdio oferece controles de tom, velocidade e ênfase, e permite sincronizar o áudio da voz a timelines de vídeo sem equipamento de gravação.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Free 10 min/mo · $29/mo Creator · $39/mo Business",
      "10 min/mês grátis · US$ 29/mês Creator · US$ 39/mês Business",
    ),
    url: "https://murf.ai",
    provider: "Murf AI",
    tags: ["voiceover", "200+ voices", "e-learning", "video sync", "20+ languages"],
    status: "available",
    highlight: l(
      "200+ studio-quality voices with video timeline sync for professional voiceovers.",
      "Mais de 200 vozes com qualidade de estúdio, com sync de timeline de vídeo para locuções profissionais.",
    ),
  },
  {
    id: "descript",
    name: "Descript",
    tagline: l(
      "AI podcast and video editor that lets you edit media by editing text",
      "Editor de podcast e vídeo por IA que edita mídia editando o texto",
    ),
    description: l(
      "Descript is an AI-powered audio and video editor built around a novel concept: it transcribes your recording and lets you edit the media by editing the transcript text. Overdub lets you clone your voice to fix mistakes by typing new words. Features also include automatic filler-word removal and Studio Sound noise reduction.",
      "O Descript é um editor de áudio e vídeo movido por IA construído em torno de um conceito novo: transcreve sua gravação e permite editar a mídia editando o texto da transcrição. O Overdub clona sua voz para corrigir erros digitando novas palavras. Os recursos incluem remoção automática de muletas verbais e redução de ruído Studio Sound.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Free tier · $24/mo Hobbyist · $40/mo Creator · $80/mo Business",
      "Plano grátis · US$ 24/mês Hobbyist · US$ 40/mês Creator · US$ 80/mês Business",
    ),
    url: "https://descript.com",
    provider: "Descript",
    tags: ["podcast", "video editing", "transcript", "voice cloning", "Overdub"],
    status: "available",
    highlight: l(
      "Edit audio and video by editing the text transcript — a uniquely intuitive workflow.",
      "Edite áudio e vídeo editando a transcrição em texto — um fluxo singularmente intuitivo.",
    ),
  },
  {
    id: "adobe-podcast",
    name: "Adobe Podcast",
    tagline: l(
      "AI audio enhancement that makes any microphone sound studio-quality",
      "Aprimoramento de áudio por IA que faz qualquer microfone soar com qualidade de estúdio",
    ),
    description: l(
      "Adobe Podcast Enhance Speech uses AI to remove background noise and room echo from any audio recording, making a standard laptop microphone sound like a professional studio setup. The broader Adobe Podcast platform adds AI-powered recording, transcript-based editing, and remote podcast collaboration.",
      "O Adobe Podcast Enhance Speech usa IA para remover ruído de fundo e eco de sala de qualquer gravação, fazendo um microfone de laptop padrão soar como um setup de estúdio profissional. A plataforma Adobe Podcast adiciona gravação assistida por IA, edição baseada em transcrição e colaboração remota em podcast.",
    ),
    category: "audio",
    pricing: "freemium",
    priceNote: l(
      "Enhance Speech free · Adobe Podcast in Creative Cloud plans from $9.99/mo",
      "Enhance Speech grátis · Adobe Podcast nos planos Creative Cloud a partir de US$ 9,99/mês",
    ),
    url: "https://podcast.adobe.com",
    provider: "Adobe",
    tags: ["noise removal", "audio enhancement", "podcast", "microphone", "studio quality"],
    status: "available",
    highlight: l(
      "One-click AI removes noise and reverb, making any mic sound studio-quality.",
      "Com um clique, a IA remove ruído e reverb, fazendo qualquer microfone soar com qualidade de estúdio.",
    ),
  },

  // ─── RESEARCH ────────────────────────────────────────────────────────────
  {
    id: "perplexity",
    name: "Perplexity AI",
    tagline: l(
      "AI answer engine that searches the web and cites every source",
      "Motor de respostas por IA que busca na web e cita cada fonte",
    ),
    description: l(
      "Perplexity is an AI-powered answer engine that searches the web in real time and synthesizes answers with inline citations. Unlike traditional search engines, it provides direct answers rather than a list of links. Perplexity Pro adds frontier models (GPT-4o, Claude, Gemini) and Deep Research mode for comprehensive long-form reports.",
      "O Perplexity é um motor de respostas por IA que busca na web em tempo real e sintetiza respostas com citações inline. Diferente de buscadores tradicionais, ele dá respostas diretas em vez de uma lista de links. O Perplexity Pro adiciona modelos de fronteira (GPT-4o, Claude, Gemini) e o modo Deep Research para relatórios longos abrangentes.",
    ),
    category: "research",
    pricing: "freemium",
    priceNote: l(
      "Free · $20/mo Pro",
      "Grátis · US$ 20/mês Pro",
    ),
    url: "https://perplexity.ai",
    provider: "Perplexity AI",
    tags: ["web search", "citations", "answer engine", "real-time", "Deep Research"],
    status: "available",
    highlight: l(
      "Answers with real-time web citations, eliminating the need to click through 10 links.",
      "Respostas com citações da web em tempo real, eliminando a necessidade de clicar em 10 links.",
    ),
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    tagline: l(
      "Google's AI research assistant grounded exclusively in your own documents",
      "Assistente de pesquisa da Google ancorado exclusivamente nos seus próprios documentos",
    ),
    description: l(
      "NotebookLM is Google's AI-powered research notebook that grounds all answers in the specific documents you upload — PDFs, Google Docs, YouTube videos, and web URLs. Because it only answers from your sources, hallucination is minimized. The Audio Overview feature generates a podcast-style conversation summarizing your materials.",
      "O NotebookLM é o caderno de pesquisa por IA da Google que ancora todas as respostas nos documentos específicos que você sobe — PDFs, Google Docs, vídeos do YouTube e URLs. Como ele responde apenas a partir das suas fontes, a alucinação é minimizada. O recurso Audio Overview gera uma conversa em formato podcast resumindo seus materiais.",
    ),
    category: "research",
    pricing: "free",
    priceNote: l(
      "Free · NotebookLM Plus via Google One AI Premium ($19.99/mo)",
      "Grátis · NotebookLM Plus via Google One AI Premium (US$ 19,99/mês)",
    ),
    url: "https://notebooklm.google",
    provider: "Google DeepMind",
    tags: ["document grounding", "PDF", "research", "audio overview", "no hallucination"],
    status: "available",
    highlight: l(
      "Audio Overview transforms your research documents into a listenable podcast.",
      "O Audio Overview transforma seus documentos de pesquisa em um podcast para ouvir.",
    ),
  },
  {
    id: "consensus",
    name: "Consensus",
    tagline: l(
      "AI search engine for peer-reviewed scientific research with consensus metrics",
      "Buscador por IA para pesquisa científica revisada por pares com métricas de consenso",
    ),
    description: l(
      "Consensus is an AI-powered search engine built specifically for scientific literature, indexing over 200 million research papers. It extracts and synthesizes findings from peer-reviewed studies and presents a Consensus Meter showing the level of scientific agreement across the literature for any evidence-based question.",
      "O Consensus é um buscador movido por IA feito especificamente para literatura científica, indexando mais de 200 milhões de papers. Extrai e sintetiza achados de estudos revisados por pares e apresenta um Consensus Meter mostrando o nível de concordância científica na literatura para qualquer pergunta baseada em evidência.",
    ),
    category: "research",
    pricing: "freemium",
    priceNote: l(
      "Free 20 searches/mo · $9.99/mo Premium · $9.99/mo Team per user",
      "20 buscas/mês grátis · US$ 9,99/mês Premium · US$ 9,99/mês Team por usuário",
    ),
    url: "https://consensus.app",
    provider: "Consensus",
    tags: ["scientific papers", "peer-reviewed", "evidence-based", "literature search", "citations"],
    status: "available",
    highlight: l(
      "Consensus Meter shows scientific agreement levels across 200M+ indexed papers.",
      "O Consensus Meter mostra níveis de concordância científica em mais de 200M de papers indexados.",
    ),
  },
  {
    id: "elicit",
    name: "Elicit",
    tagline: l(
      "AI research assistant for systematic literature review and data extraction",
      "Assistente de pesquisa por IA para revisão sistemática de literatura e extração de dados",
    ),
    description: l(
      "Elicit is an AI research tool designed for systematic literature reviews, automating finding, screening, and extracting data from research papers. It processes thousands of papers, extracts specific data points into structured tables, and synthesizes findings across studies. Built for researchers, scientists, and academics.",
      "O Elicit é uma ferramenta de pesquisa por IA feita para revisões sistemáticas de literatura, automatizando a descoberta, triagem e extração de dados de papers. Processa milhares de papers, extrai pontos específicos para tabelas estruturadas e sintetiza achados entre estudos. Feito para pesquisadores, cientistas e acadêmicos.",
    ),
    category: "research",
    pricing: "freemium",
    priceNote: l(
      "Free 5,000 credits · $12/mo Plus · $50/mo Professional",
      "5.000 créditos grátis · US$ 12/mês Plus · US$ 50/mês Professional",
    ),
    url: "https://elicit.com",
    provider: "Ought",
    tags: ["literature review", "systematic review", "data extraction", "academic", "tables"],
    status: "available",
    highlight: l(
      "Automates systematic literature review by extracting structured data from thousands of papers.",
      "Automatiza a revisão sistemática extraindo dados estruturados de milhares de papers.",
    ),
  },
  {
    id: "semantic-scholar",
    name: "Semantic Scholar",
    tagline: l(
      "Free AI-powered academic search engine from the Allen Institute for AI",
      "Buscador acadêmico gratuito movido por IA do Allen Institute for AI",
    ),
    description: l(
      "Semantic Scholar is a free AI-powered academic search engine from the Allen Institute for AI, indexing over 200 million scientific papers. It uses NLP to extract key findings, author influence metrics, and citation context. The AI2 Recommendation system surfaces related papers based on reading history and research interests.",
      "O Semantic Scholar é um buscador acadêmico gratuito movido por IA do Allen Institute for AI, indexando mais de 200 milhões de papers científicos. Usa NLP para extrair achados-chave, métricas de influência de autores e contexto de citações. O sistema de recomendação AI2 traz à tona papers relacionados com base no histórico de leitura e nos interesses de pesquisa.",
    ),
    category: "research",
    pricing: "free",
    priceNote: l("Free", "Grátis"),
    url: "https://semanticscholar.org",
    provider: "Allen Institute for AI",
    tags: ["academic", "scientific papers", "citations", "NLP", "recommendations"],
    status: "available",
    highlight: l(
      "200M+ papers with AI-extracted key findings and intelligent citation context.",
      "Mais de 200M de papers com achados-chave extraídos por IA e contexto inteligente de citações.",
    ),
  },
  {
    id: "you-com",
    name: "You.com",
    tagline: l(
      "AI search engine with multiple research modes and source citations",
      "Buscador por IA com vários modos de pesquisa e citações de fontes",
    ),
    description: l(
      "You.com is an AI-powered search engine combining web search with AI chat, offering Smart mode (quick answers), Genius mode (deep multi-source synthesis), and Research mode (academic paper citations). It supports Wolfram Alpha for computational queries and allows customizable AI persona settings.",
      "O You.com é um buscador movido por IA que combina busca na web com chat de IA, oferecendo modo Smart (respostas rápidas), Genius (síntese profunda multi-fonte) e Research (citações de papers acadêmicos). Suporta Wolfram Alpha para queries computacionais e permite configurações customizáveis de persona da IA.",
    ),
    category: "research",
    pricing: "freemium",
    priceNote: l(
      "Free · $20/mo Pro",
      "Grátis · US$ 20/mês Pro",
    ),
    url: "https://you.com",
    provider: "You.com",
    tags: ["AI search", "web search", "research mode", "Wolfram Alpha", "citations"],
    status: "available",
    highlight: l(
      "Multiple search modes from quick answers to deep academic research with citations.",
      "Vários modos de busca, de respostas rápidas a pesquisa acadêmica profunda com citações.",
    ),
  },

  // ─── PRODUCTIVITY ────────────────────────────────────────────────────────
  {
    id: "zapier-ai",
    name: "Zapier AI",
    tagline: l(
      "AI-powered workflow automation connecting 7,000+ apps",
      "Automação de fluxos por IA conectando mais de 7.000 apps",
    ),
    description: l(
      "Zapier's AI features extend its automation platform with natural language Zap creation, AI actions (call any LLM mid-workflow), and AI-powered chatbots that can trigger automations. With 7,000+ app integrations, Zapier AI lets non-technical users build complex automated workflows involving AI steps without writing code.",
      "Os recursos de IA do Zapier estendem a plataforma de automação com criação de Zaps em linguagem natural, AI actions (chamar qualquer LLM no meio do fluxo) e chatbots por IA que disparam automações. Com mais de 7.000 integrações, o Zapier AI permite que pessoas não-técnicas construam fluxos automatizados complexos envolvendo passos de IA sem escrever código.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free 100 tasks/mo · $29.99/mo Professional · $103.50/mo Team",
      "100 tarefas/mês grátis · US$ 29,99/mês Professional · US$ 103,50/mês Team",
    ),
    url: "https://zapier.com/ai",
    provider: "Zapier",
    tags: ["automation", "no-code", "7000+ apps", "workflows", "integrations"],
    status: "available",
    highlight: l(
      "Natural language Zap creation connects AI steps to 7,000+ apps without coding.",
      "Criação de Zap em linguagem natural conecta passos de IA a mais de 7.000 apps sem código.",
    ),
  },
  {
    id: "make",
    name: "Make",
    tagline: l(
      "Visual workflow automation with advanced logic and native AI modules",
      "Automação visual de fluxos com lógica avançada e módulos de IA nativos",
    ),
    description: l(
      "Make (formerly Integromat) is a visual no-code automation platform using a canvas to build complex multi-step workflows. It includes native modules for OpenAI, Anthropic, and other AI providers, and supports advanced logic like iterators, routers, and error handlers for complex automation scenarios beyond Zapier's capabilities.",
      "O Make (antigo Integromat) é uma plataforma de automação no-code visual usando um canvas para construir fluxos complexos multi-passo. Inclui módulos nativos para OpenAI, Anthropic e outros provedores de IA, e suporta lógica avançada como iterators, routers e error handlers para cenários complexos além das capacidades do Zapier.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free 1,000 ops/mo · $9/mo Core · $16/mo Pro · $29/mo Teams",
      "1.000 ops/mês grátis · US$ 9/mês Core · US$ 16/mês Pro · US$ 29/mês Teams",
    ),
    url: "https://make.com",
    provider: "Make",
    tags: ["visual automation", "no-code", "AI modules", "complex logic", "canvas"],
    status: "available",
    highlight: l(
      "Visual canvas with advanced logic handles complex multi-step automation scenarios.",
      "Canvas visual com lógica avançada cobre cenários complexos de automação multi-passo.",
    ),
  },
  {
    id: "n8n",
    name: "n8n",
    tagline: l(
      "Open-source workflow automation with native AI agent support and self-hosting",
      "Automação de fluxos open-source com suporte nativo a agentes de IA e auto-hospedagem",
    ),
    description: l(
      "n8n is a source-available workflow automation tool that can be fully self-hosted for complete data control. It features a visual node-based editor and native AI agent nodes connecting to OpenAI, Anthropic, Hugging Face, and other providers. Popular in developer and privacy-conscious teams that need automation without third-party data exposure.",
      "O n8n é uma ferramenta de automação de fluxos source-available que pode ser totalmente auto-hospedada para controle completo dos dados. Tem um editor visual baseado em nós e nós nativos para agentes de IA conectando OpenAI, Anthropic, Hugging Face e outros provedores. Popular em times de devs e times preocupados com privacidade que precisam de automação sem exposição de dados a terceiros.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free (self-hosted) · $24/mo Starter (cloud) · $60/mo Pro (cloud)",
      "Grátis (auto-hospedado) · US$ 24/mês Starter (nuvem) · US$ 60/mês Pro (nuvem)",
    ),
    url: "https://n8n.io",
    provider: "n8n",
    tags: ["open-source", "self-hosted", "AI agents", "automation", "node-based"],
    status: "available",
    highlight: l(
      "Self-hostable automation with native AI agent nodes for complete data privacy.",
      "Automação auto-hospedável com nós nativos de agente de IA para privacidade completa dos dados.",
    ),
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    tagline: l(
      "AI meeting notes, transcription, and action item extraction",
      "Notas de reunião por IA, transcrição e extração de itens de ação",
    ),
    description: l(
      "Otter.ai automatically records, transcribes, and summarizes meetings across Zoom, Google Meet, and Microsoft Teams. Its AI Meeting Assistant joins calls automatically, captures speaker-identified transcripts in real time, and extracts action items and highlights. OtterPilot can answer questions about past meetings via a chat interface.",
      "O Otter.ai grava, transcreve e resume reuniões automaticamente em Zoom, Google Meet e Microsoft Teams. O AI Meeting Assistant entra nas chamadas automaticamente, captura transcrições com identificação de falante em tempo real e extrai itens de ação e destaques. O OtterPilot responde perguntas sobre reuniões passadas via interface de chat.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free 300 min/mo · $16.99/mo Pro · $30/mo Business",
      "300 min/mês grátis · US$ 16,99/mês Pro · US$ 30/mês Business",
    ),
    url: "https://otter.ai",
    provider: "Otter.ai",
    tags: ["meeting notes", "transcription", "Zoom", "Google Meet", "action items"],
    status: "available",
    highlight: l(
      "Auto-joins meetings and captures speaker-identified transcripts in real time.",
      "Entra automaticamente em reuniões e captura transcrições com identificação de falante em tempo real.",
    ),
  },
  {
    id: "gamma",
    name: "Gamma",
    tagline: l(
      "AI presentation builder that generates polished decks from a prompt",
      "Construtor de apresentações por IA que gera decks polidos a partir de um prompt",
    ),
    description: l(
      "Gamma is an AI-powered presentation and document creation tool that generates polished, well-designed presentations, docs, and websites from a text prompt or outline. It uses flexible card-based layouts with responsive design, includes AI image generation, and supports one-click theme restyling across an entire deck.",
      "O Gamma é uma ferramenta de criação de apresentações e documentos movida por IA que gera apresentações, docs e sites polidos e bem desenhados a partir de um prompt ou outline. Usa layouts em cards flexíveis com design responsivo, inclui geração de imagem por IA e suporta restilo de tema com um clique em todo o deck.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free 400 credits · $10/mo Plus · $20/mo Pro",
      "400 créditos grátis · US$ 10/mês Plus · US$ 20/mês Pro",
    ),
    url: "https://gamma.app",
    provider: "Gamma",
    tags: ["presentations", "slides", "documents", "AI design", "one-prompt"],
    status: "available",
    highlight: l(
      "Generate a polished presentation from a single prompt in under a minute.",
      "Gere uma apresentação polida a partir de um único prompt em menos de um minuto.",
    ),
  },
  {
    id: "lindy",
    name: "Lindy",
    tagline: l(
      "AI agents that autonomously handle email, scheduling, and business workflows",
      "Agentes de IA que cuidam autonomamente de e-mail, agenda e fluxos de negócio",
    ),
    description: l(
      "Lindy lets you create AI agents ('Lindies') that autonomously handle business workflows: triaging and replying to emails, scheduling meetings, qualifying leads, processing documents, and more. Each Lindy is a configurable agent with access to connected apps, triggered by events like incoming emails or form submissions.",
      "O Lindy permite criar agentes de IA ('Lindies') que cuidam autonomamente de fluxos de negócio: triar e responder e-mails, agendar reuniões, qualificar leads, processar documentos e mais. Cada Lindy é um agente configurável com acesso a apps conectados, acionado por eventos como e-mails ou submissões de formulário.",
    ),
    category: "productivity",
    pricing: "freemium",
    priceNote: l(
      "Free 400 credits/mo · $49.99/mo Pro · Custom Enterprise",
      "400 créditos/mês grátis · US$ 49,99/mês Pro · Enterprise sob consulta",
    ),
    url: "https://lindy.ai",
    provider: "Lindy AI",
    tags: ["AI agents", "email", "calendar", "lead qualification", "document processing"],
    status: "available",
    highlight: l(
      "Autonomous email-triaging and scheduling agents that act on your behalf 24/7.",
      "Agentes autônomos de triagem de e-mail e agenda que agem em seu nome 24/7.",
    ),
  },
  {
    id: "claude-code",
    name: "Claude Code",
    tagline: l(
      "Anthropic's agentic CLI for autonomous software engineering tasks",
      "CLI agêntica da Anthropic para tarefas autônomas de engenharia de software",
    ),
    description: l(
      "Claude Code is Anthropic's terminal-based agentic coding tool that gives Claude direct access to your filesystem, shell, and development environment. It reads and writes code across an entire repository, runs tests, debugs errors, manages git operations, and completes multi-step software engineering tasks autonomously from the command line.",
      "O Claude Code é a ferramenta agêntica de código da Anthropic baseada em terminal, que dá ao Claude acesso direto ao seu sistema de arquivos, shell e ambiente de desenvolvimento. Lê e escreve código em todo o repositório, roda testes, depura erros, gerencia operações git e completa tarefas multi-passo de engenharia de software de forma autônoma a partir da linha de comando.",
    ),
    category: "productivity",
    pricing: "paid",
    priceNote: l(
      "Usage-based via Anthropic API (Sonnet/Opus token pricing)",
      "Cobrança por uso via API da Anthropic (preço por token de Sonnet/Opus)",
    ),
    url: "https://claude.ai/code",
    provider: "Anthropic",
    tags: ["agentic", "CLI", "terminal", "software engineering", "git", "full-repo"],
    status: "available",
    highlight: l(
      "Full filesystem and shell access for autonomous multi-step software engineering.",
      "Acesso completo ao filesystem e shell para engenharia de software autônoma multi-passo.",
    ),
  },
  {
    id: "operator",
    name: "Operator",
    tagline: l(
      "OpenAI's computer-use agent that navigates the web autonomously",
      "Agente computer-use da OpenAI que navega na web de forma autônoma",
    ),
    description: l(
      "Operator is OpenAI's computer-use AI agent that operates a web browser autonomously to complete tasks on your behalf — booking restaurants, filling forms, shopping, and navigating websites. Built on the Computer-Using Agent (CUA) model, it handles multi-step web workflows that previously required manual human interaction.",
      "O Operator é o agente de IA computer-use da OpenAI que opera um navegador web de forma autônoma para concluir tarefas em seu nome — reservar restaurantes, preencher formulários, comprar e navegar em sites. Construído sobre o modelo Computer-Using Agent (CUA), cuida de fluxos web multi-passo que antes exigiam interação humana manual.",
    ),
    category: "productivity",
    pricing: "paid",
    priceNote: l(
      "ChatGPT Pro $200/mo (included)",
      "ChatGPT Pro US$ 200/mês (incluído)",
    ),
    url: "https://operator.chatgpt.com",
    provider: "OpenAI",
    tags: ["computer use", "web browser", "agentic", "automation", "forms"],
    status: "available",
    highlight: l(
      "Autonomously navigates websites and completes multi-step web tasks on your behalf.",
      "Navega em sites de forma autônoma e completa tarefas web multi-passo em seu nome.",
    ),
  },
  {
    id: "mem",
    name: "Mem",
    tagline: l(
      "AI-powered personal knowledge base that organizes itself automatically",
      "Base de conhecimento pessoal por IA que se organiza automaticamente",
    ),
    description: l(
      "Mem is an AI-native note-taking app that uses AI to automatically organize your notes, surface relevant information at the right moment, and answer questions from your personal knowledge base. Unlike traditional note apps, Mem requires no manual folder structure — its AI understands context and surfaces the right notes automatically.",
      "O Mem é um app de notas AI-native que usa IA para organizar suas notas automaticamente, trazer informação relevante na hora certa e responder perguntas a partir da sua base pessoal de conhecimento. Diferente de apps de notas tradicionais, o Mem não exige estrutura de pastas manual — sua IA entende o contexto e traz as notas certas automaticamente.",
    ),
    category: "productivity",
    pricing: "paid",
    priceNote: l(
      "$14.99/mo Mem Personal · $24.99/mo Mem Teams per user",
      "US$ 14,99/mês Mem Personal · US$ 24,99/mês Mem Teams por usuário",
    ),
    url: "https://mem.ai",
    provider: "Mem Labs",
    tags: ["notes", "knowledge base", "auto-organize", "personal AI", "search"],
    status: "available",
    highlight: l(
      "AI auto-organizes your notes and surfaces the right information at the right time.",
      "A IA organiza suas notas automaticamente e traz a informação certa na hora certa.",
    ),
  },
];
