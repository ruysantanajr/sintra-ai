import { l, type LocalizedString } from "./localized";

const BASE_PATH = "/sintra-ai";

export interface PathStep {
  type: "concept" | "use-case" | "tool" | "page" | "read";
  label: LocalizedString;
  desc: LocalizedString;
  href: string;       // internal anchor or page path
  duration: string;   // "5 min", "10 min"
  icon: string;       // emoji
}

export interface LearningPath {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  emoji: string;
  color: string;       // hex
  level: "beginner" | "intermediate" | "advanced";
  audience: LocalizedString;
  totalDuration: string;
  steps: PathStep[];   // 5-8 steps per path
}

export const LEARNING_PATHS: LearningPath[] = [
  // ── 1. AI Foundations ────────────────────────────────────────────────────
  {
    id: "ai-foundations",
    title:    l("AI Foundations", "Fundamentos de IA"),
    tagline:  l(
      "Go from zero to confidently understanding AI in under an hour.",
      "Saia do zero e entenda IA com confiança em menos de uma hora.",
    ),
    emoji: "🧠",
    color: "#B6A6FF",
    level: "beginner",
    audience: l("For anyone new to AI", "Para quem nunca teve contato com IA"),
    totalDuration: "~45 min",
    steps: [
      {
        type: "page",
        label: l("The AI Story So Far", "A história da IA até aqui"),
        desc:  l(
          "Start with the big picture — 70 years of AI history from the Dartmouth Conference to ChatGPT, told as a visual timeline.",
          "Comece pelo panorama — 70 anos de história da IA, da Conferência de Dartmouth ao ChatGPT, contados como linha do tempo visual.",
        ),
        href: `${BASE_PATH}/ai-history`,
        duration: "10 min",
        icon: "🕰️",
      },
      {
        type: "concept",
        label: l("What Is Machine Learning?", "O que é Aprendizado de Máquina?"),
        desc:  l(
          "Understand the core idea behind almost every AI product: systems that learn from examples rather than explicit rules.",
          "Entenda a ideia por trás de quase todo produto de IA: sistemas que aprendem com exemplos em vez de regras explícitas.",
        ),
        href: `${BASE_PATH}/concepts#machine-learning`,
        duration: "5 min",
        icon: "🤖",
      },
      {
        type: "concept",
        label: l("Large Language Models (LLMs)", "Modelos de Linguagem de Grande Escala (LLMs)"),
        desc:  l(
          "Learn what powers ChatGPT, Claude, and Gemini — and why 'next-token prediction' turned out to be surprisingly powerful.",
          "Descubra o que move o ChatGPT, o Claude e o Gemini — e por que prever o próximo token se mostrou tão poderoso.",
        ),
        href: `${BASE_PATH}/concepts#llm`,
        duration: "5 min",
        icon: "⬡",
      },
      {
        type: "concept",
        label: l("Tokens and Context Windows", "Tokens e Janelas de Contexto"),
        desc:  l(
          "Understand the two key limits that shape every AI conversation: how text is chunked into tokens and how much the model can 'see' at once.",
          "Entenda os dois limites que moldam toda conversa com IA: como o texto é fatiado em tokens e quanto o modelo consegue 'enxergar' de uma vez.",
        ),
        href: `${BASE_PATH}/concepts#tokens`,
        duration: "5 min",
        icon: "🪙",
      },
      {
        type: "page",
        label: l("Meet the Major AI Labs", "Conheça os principais labs de IA"),
        desc:  l(
          "Get a quick overview of OpenAI, Anthropic, Google DeepMind, Meta AI, and others — who they are, what they build, and how they differ.",
          "Tenha um panorama rápido de OpenAI, Anthropic, Google DeepMind, Meta AI e outros — quem são, o que constroem e como se diferenciam.",
        ),
        href: `${BASE_PATH}/ai-labs`,
        duration: "10 min",
        icon: "🏛️",
      },
      {
        type: "use-case",
        label: l("Try Your First AI Task", "Experimente sua primeira tarefa com IA"),
        desc:  l(
          "Pick any Quick Win use case from the library and run it in ChatGPT or Claude. Seeing a real result is the fastest way to make it click.",
          "Escolha qualquer caso da categoria Quick Wins na biblioteca e rode no ChatGPT ou no Claude. Ver um resultado real é o caminho mais rápido para a ficha cair.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "10 min",
        icon: "✨",
      },
    ],
  },

  // ── 2. Prompt Practitioner ────────────────────────────────────────────────
  {
    id: "prompt-practitioner",
    title:    l("Prompt Practitioner", "Praticante de Prompts"),
    tagline:  l(
      "Master the craft of prompting and get consistently great AI outputs.",
      "Domine a arte do prompt e obtenha saídas excelentes de forma consistente.",
    ),
    emoji: "✍️",
    color: "#5EEAD4",
    level: "intermediate",
    audience: l("For knowledge workers and professionals", "Para profissionais do conhecimento"),
    totalDuration: "~50 min",
    steps: [
      {
        type: "concept",
        label: l("Prompt Engineering Fundamentals", "Fundamentos de Engenharia de Prompt"),
        desc:  l(
          "Learn the core techniques — role-setting, few-shot examples, chain-of-thought, and output formatting — that separate expert prompters from casual users.",
          "Aprenda as técnicas centrais — definição de papel, exemplos few-shot, cadeia de raciocínio e formatação de saída — que separam quem é expert em prompt de quem usa de forma casual.",
        ),
        href: `${BASE_PATH}/concepts#prompt-engineering`,
        duration: "8 min",
        icon: "✨",
      },
      {
        type: "use-case",
        label: l("Writing & Editing Use Cases", "Casos de uso de Escrita e Edição"),
        desc:  l(
          "Browse the Writing & Copy category for real prompts across emails, reports, social posts, and long-form content. Study the prompt structures, not just the topics.",
          "Explore a categoria de Escrita & Copy para prompts reais cobrindo e-mails, relatórios, posts e textos longos. Estude a estrutura dos prompts, não só os temas.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "10 min",
        icon: "📝",
      },
      {
        type: "use-case",
        label: l("Research and Synthesis Prompts", "Prompts de Pesquisa e Síntese"),
        desc:  l(
          "Explore how structured prompts unlock AI's ability to summarize sources, spot contradictions, extract key data, and generate competitive analysis.",
          "Explore como prompts estruturados destravam a capacidade da IA de resumir fontes, identificar contradições, extrair dados-chave e gerar análises competitivas.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "10 min",
        icon: "🔍",
      },
      {
        type: "concept",
        label: l("RAG — Grounding AI in Your Documents", "RAG — ancorando a IA nos seus documentos"),
        desc:  l(
          "Understand Retrieval-Augmented Generation: how giving AI access to your specific documents produces more accurate, citable answers.",
          "Entenda RAG (Geração Aumentada por Recuperação): como dar à IA acesso aos seus documentos gera respostas mais precisas e citáveis.",
        ),
        href: `${BASE_PATH}/concepts#rag`,
        duration: "6 min",
        icon: "📚",
      },
      {
        type: "use-case",
        label: l("Productivity and Planning Prompts", "Prompts de Produtividade e Planejamento"),
        desc:  l(
          "Explore the Productivity category for meeting prep, project scoping, and workflow automation prompts you can adapt immediately.",
          "Explore a categoria Produtividade para prompts de preparação de reunião, escopo de projeto e automação de fluxo que você adapta na hora.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "8 min",
        icon: "⚡",
      },
      {
        type: "concept",
        label: l("Fine-Tuning vs. Prompting", "Fine-Tuning vs. Prompting"),
        desc:  l(
          "Understand when a well-crafted prompt is enough — and when you genuinely need a custom-trained model for your use case.",
          "Saiba quando um prompt bem-feito basta — e quando você realmente precisa de um modelo treinado sob medida para o seu caso.",
        ),
        href: `${BASE_PATH}/concepts#fine-tuning`,
        duration: "5 min",
        icon: "🎯",
      },
      {
        type: "read",
        label: l("Quick Wins: 5-Minute Templates", "Quick Wins: templates de 5 minutos"),
        desc:  l(
          "Run at least three Quick Win prompts from the library in your preferred AI tool. Reflect on what made each one work and where you'd push further.",
          "Rode pelo menos três prompts Quick Win da biblioteca na sua IA preferida. Reflita sobre o que fez cada um funcionar e onde você levaria adiante.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "15 min",
        icon: "⏱️",
      },
    ],
  },

  // ── 3. Build with AI ─────────────────────────────────────────────────────
  {
    id: "build-with-ai",
    title:    l("Build with AI", "Construa com IA"),
    tagline:  l(
      "Integrate AI into real products, scripts, and automated workflows.",
      "Integre IA a produtos reais, scripts e fluxos automatizados.",
    ),
    emoji: "🛠️",
    color: "#F4C56A",
    level: "advanced",
    audience: l("For developers and technical builders", "Para devs e construtores técnicos"),
    totalDuration: "~55 min",
    steps: [
      {
        type: "concept",
        label: l("APIs — How Code Talks to AI", "APIs — como código conversa com IA"),
        desc:  l(
          "Understand the request-response model behind every AI integration, including the key parameters (temperature, max_tokens, system prompt) that shape model behavior.",
          "Entenda o modelo requisição-resposta por trás de toda integração com IA, incluindo os parâmetros (temperature, max_tokens, system prompt) que moldam o comportamento do modelo.",
        ),
        href: `${BASE_PATH}/concepts#api`,
        duration: "6 min",
        icon: "🔌",
      },
      {
        type: "concept",
        label: l("Function Calling and Tool Use", "Function Calling e Uso de Ferramentas"),
        desc:  l(
          "Learn how models emit structured tool-call signals that your application handles — the mechanism behind every reliable AI-powered action.",
          "Aprenda como os modelos emitem sinais estruturados de chamada de ferramenta que sua aplicação trata — o mecanismo por trás de toda ação confiável feita por IA.",
        ),
        href: `${BASE_PATH}/concepts#function-calling`,
        duration: "7 min",
        icon: "🛠️",
      },
      {
        type: "concept",
        label: l("AI Agents — From Prompts to Workflows", "Agentes de IA — de prompts a fluxos"),
        desc:  l(
          "Understand the observe-plan-act loop, memory mechanisms, and orchestration patterns that turn a single LLM call into an autonomous multi-step agent.",
          "Entenda o loop observar-planejar-agir, mecanismos de memória e padrões de orquestração que transformam uma chamada única de LLM em um agente autônomo de múltiplos passos.",
        ),
        href: `${BASE_PATH}/concepts#agents`,
        duration: "8 min",
        icon: "⚡",
      },
      {
        type: "concept",
        label: l("MCP — Universal AI Integrations", "MCP — integrações universais para IA"),
        desc:  l(
          "Learn the Model Context Protocol, Anthropic's open standard for connecting AI to any data source, tool, or service without bespoke glue code.",
          "Conheça o Model Context Protocol, o padrão aberto da Anthropic para conectar IA a qualquer fonte de dados, ferramenta ou serviço sem código de cola sob medida.",
        ),
        href: `${BASE_PATH}/concepts#mcp`,
        duration: "7 min",
        icon: "🔗",
      },
      {
        type: "use-case",
        label: l("Software Development Use Cases", "Casos de uso de Desenvolvimento de Software"),
        desc:  l(
          "Explore the Code & Automation category for battle-tested prompts covering code review, debugging, test generation, documentation, and system design.",
          "Explore a categoria Código & Automação para prompts testados no campo cobrindo code review, debugging, geração de testes, documentação e desenho de sistemas.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "10 min",
        icon: "💻",
      },
      {
        type: "page",
        label: l("Compare the AI Labs and Their APIs", "Compare os labs de IA e suas APIs"),
        desc:  l(
          "Understand the differences between Anthropic, OpenAI, Google, and Mistral APIs — pricing, context limits, strengths, and the right model for each use case.",
          "Entenda as diferenças entre as APIs de Anthropic, OpenAI, Google e Mistral — preço, limites de contexto, pontos fortes e o modelo certo para cada caso.",
        ),
        href: `${BASE_PATH}/ai-labs`,
        duration: "10 min",
        icon: "🏛️",
      },
      {
        type: "page",
        label: l("Google AI Tools Ecosystem", "Ecossistema de ferramentas Google AI"),
        desc:  l(
          "Explore Google's full developer AI stack — Vertex AI, Gemini API, AI Studio, and the tooling that wraps the Gemini model family for production use.",
          "Explore o stack completo de IA da Google para devs — Vertex AI, API Gemini, AI Studio e a tooling que embrulha a família Gemini para uso em produção.",
        ),
        href: `${BASE_PATH}/google-ai-tools`,
        duration: "7 min",
        icon: "🔬",
      },
    ],
  },

  // ── 4. AI Creator ─────────────────────────────────────────────────────────
  {
    id: "ai-creator",
    title:    l("AI Creator", "Criador com IA"),
    tagline:  l(
      "Use AI to unlock faster, richer creative work across every medium.",
      "Use IA para destravar trabalho criativo mais rápido e mais rico em qualquer mídia.",
    ),
    emoji: "🎨",
    color: "#F4A6C0",
    level: "intermediate",
    audience: l("For designers, artists, and content creators", "Para designers, artistas e criadores de conteúdo"),
    totalDuration: "~45 min",
    steps: [
      {
        type: "concept",
        label: l("How AI Generates Images and Video", "Como a IA gera imagens e vídeos"),
        desc:  l(
          "Understand diffusion models and the text-to-image pipeline — what happens between your prompt and the pixel output, and why prompt wording changes results so dramatically.",
          "Entenda os modelos de difusão e o pipeline text-to-image — o que acontece entre o seu prompt e os pixels finais, e por que a forma de escrever o prompt muda tanto o resultado.",
        ),
        href: `${BASE_PATH}/concepts#machine-learning`,
        duration: "7 min",
        icon: "🖼️",
      },
      {
        type: "use-case",
        label: l("Creative AI Use Cases", "Casos de uso de IA Criativa"),
        desc:  l(
          "Explore the Creative & Design category for prompts covering image generation briefs, style guides, brand naming, UI copy, and visual direction documents.",
          "Explore a categoria Criativo & Design para prompts cobrindo briefings de geração de imagem, guias de estilo, naming de marca, microcopy de UI e direção visual.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "10 min",
        icon: "✨",
      },
      {
        type: "concept",
        label: l("Prompt Engineering for Creatives", "Engenharia de Prompt para criativos"),
        desc:  l(
          "Apply prompting fundamentals to creative work: how to specify style, mood, medium, composition, and negative constraints in image and copy prompts.",
          "Aplique os fundamentos de prompt no trabalho criativo: como especificar estilo, mood, mídia, composição e restrições negativas em prompts de imagem e copy.",
        ),
        href: `${BASE_PATH}/concepts#prompt-engineering`,
        duration: "6 min",
        icon: "🎨",
      },
      {
        type: "page",
        label: l("The AI Labs Shaping Creative Tools", "Os labs que moldam as ferramentas criativas"),
        desc:  l(
          "Understand which labs produce the creative AI tools you use — Stability AI, Midjourney, OpenAI (DALL-E, Sora), Adobe Firefly, and where they sit in the ecosystem.",
          "Saiba quais labs produzem as ferramentas criativas que você usa — Stability AI, Midjourney, OpenAI (DALL-E, Sora), Adobe Firefly — e onde cada um se encaixa no ecossistema.",
        ),
        href: `${BASE_PATH}/ai-labs`,
        duration: "8 min",
        icon: "🏛️",
      },
      {
        type: "use-case",
        label: l("Writing for Creative Campaigns", "Escrita para campanhas criativas"),
        desc:  l(
          "Explore the Writing & Copy category for AI-assisted taglines, product descriptions, social campaigns, and brand voice documentation.",
          "Explore a categoria Escrita & Copy para taglines, descrições de produto, campanhas sociais e documentação de tom de marca com apoio de IA.",
        ),
        href: `${BASE_PATH}/#library`,
        duration: "8 min",
        icon: "📢",
      },
      {
        type: "read",
        label: l("AI History: The Creative Milestones", "História da IA: os marcos criativos"),
        desc:  l(
          "Read the Generative AI era section of the AI history timeline — DALL-E, Stable Diffusion, Midjourney, Sora — to understand how creative AI evolved so quickly.",
          "Leia a seção da era da IA Generativa na linha do tempo — DALL-E, Stable Diffusion, Midjourney, Sora — para entender como a IA criativa evoluiu tão rápido.",
        ),
        href: `${BASE_PATH}/ai-history`,
        duration: "6 min",
        icon: "🕰️",
      },
    ],
  },
];
