import { l, type LocalizedString } from "./localized";

export interface NewsItem {
  id: string;
  date: LocalizedString; // "Jan 2024" / "Jan 2024"
  dateNum: number;       // YYYYMM for sorting, e.g. 202401
  dateDay?: number;      // day of month (1-31) for intra-month ordering
  title: LocalizedString;
  summary: LocalizedString;     // 2-3 sentences, factual
  tags: string[];               // ["OpenAI", "GPT", "multimodal"] etc.
  significance: "landmark" | "major" | "notable";
  provider: string;             // company name
  providerColor: string;        // hex color
  url?: string;                 // link to original announcement
}

export const AI_NEWS: NewsItem[] = [
  // ── 2023 ─────────────────────────────────────────────────────────────────

  {
    id: "bing-chat-launch",
    date: l("Feb 2023", "Fev 2023"),
    dateNum: 202302,
    title: l(
      "Microsoft Bing Chat Launches — GPT-4 Meets Search",
      "Microsoft lança o Bing Chat — GPT-4 encontra a busca",
    ),
    summary: l(
      "Microsoft launched Bing Chat powered by an early version of GPT-4 in limited preview, integrating a conversational AI directly into its search engine and Edge browser. The product generated significant press when users discovered the model, codenamed Sydney, would make unusual and emotionally charged claims in extended conversations. Microsoft rapidly limited conversation lengths and adjusted the model's behavior in response.",
      "A Microsoft lançou o Bing Chat movido por uma versão inicial do GPT-4 em preview limitado, integrando uma IA conversacional diretamente no seu buscador e no navegador Edge. O produto gerou cobertura significativa quando usuários descobriram que o modelo, codinome Sydney, fazia afirmações incomuns e emocionalmente carregadas em conversas longas. A Microsoft limitou rapidamente o tamanho das conversas e ajustou o comportamento do modelo em resposta.",
    ),
    tags: ["Microsoft", "Bing", "GPT-4", "Search", "Chatbot"],
    significance: "major",
    provider: "Microsoft",
    providerColor: "#0078d4",
    url: "https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing/",
  },
  {
    id: "llama-1-leak",
    date: l("Mar 2023", "Mar 2023"),
    dateNum: 202303,
    title: l(
      "LLaMA-1 Leaks Online — Open-Weight Era Begins",
      "LLaMA-1 vaza online — Começa a era dos pesos abertos",
    ),
    summary: l(
      "Meta's LLaMA-1 models (7B–65B parameters), initially shared only with select researchers, leaked publicly within days and triggered an immediate wave of community fine-tuning that produced models like Alpaca and Vicuna within weeks. The leak effectively democratized access to frontier-class open weights overnight. It ignited the open-source LLM ecosystem that would grow into thousands of derivative projects over the following two years.",
      "Os modelos LLaMA-1 da Meta (7B–65B de parâmetros), inicialmente compartilhados só com pesquisadores selecionados, vazaram publicamente em poucos dias e dispararam uma onda imediata de fine-tunes da comunidade, gerando modelos como Alpaca e Vicuna em semanas. O vazamento democratizou de fato o acesso a pesos de fronteira da noite para o dia. Acendeu o ecossistema open-source de LLMs que cresceria para milhares de projetos derivados nos dois anos seguintes.",
    ),
    tags: ["Meta", "LLaMA", "Open Source", "Open Weights", "Community"],
    significance: "landmark",
    provider: "Meta",
    providerColor: "#0866ff",
    url: "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
  },
  {
    id: "gpt-4-launch",
    date: l("Mar 2023", "Mar 2023"),
    dateNum: 202303,
    title: l(
      "GPT-4 Released — Professional-Grade Multimodal AI",
      "GPT-4 é lançado — IA multimodal nível profissional",
    ),
    summary: l(
      "OpenAI released GPT-4, the first frontier large language model capable of processing both text and images as inputs. It scored in the 90th percentile on the bar exam, 99th percentile on the GRE verbal, and outperformed GPT-3.5 substantially across professional and academic benchmarks. Enterprises across law, medicine, education, and finance began integrating it within weeks of launch.",
      "A OpenAI lançou o GPT-4, o primeiro LLM de fronteira capaz de processar texto e imagens como entrada. Pontuou no percentil 90 no exame da Ordem, percentil 99 no GRE verbal e superou substancialmente o GPT-3.5 em benchmarks profissionais e acadêmicos. Empresas de direito, medicina, educação e finanças começaram a integrá-lo em semanas após o lançamento.",
    ),
    tags: ["OpenAI", "GPT-4", "Multimodal", "Benchmark", "Professional"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/gpt-4/",
  },
  {
    id: "claude-1",
    date: l("Mar 2023", "Mar 2023"),
    dateNum: 202303,
    title: l(
      "Anthropic Launches Claude — Constitutional AI in Production",
      "Anthropic lança o Claude — Constitutional AI em produção",
    ),
    summary: l(
      "Anthropic released Claude, its first publicly available model, trained using Constitutional AI — a technique where a set of written principles guides model behavior rather than relying purely on human feedback labels. Claude was noted for a longer context window than GPT-3.5 and a cautious, thoughtful conversational style. It was made available via API to select partners and enterprise customers.",
      "A Anthropic lançou o Claude, seu primeiro modelo publicamente disponível, treinado com Constitutional AI — uma técnica em que um conjunto de princípios escritos guia o comportamento do modelo em vez de depender só de rótulos de feedback humano. O Claude se destacou por ter uma janela de contexto maior que o GPT-3.5 e um estilo conversacional cauteloso e ponderado. Foi disponibilizado via API para parceiros selecionados e clientes corporativos.",
    ),
    tags: ["Anthropic", "Claude", "Constitutional AI", "Safety", "RLHF"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/introducing-claude",
  },
  {
    id: "google-bard-launch",
    date: l("Mar 2023", "Mar 2023"),
    dateNum: 202303,
    title: l(
      "Google Launches Bard — Search Giant Responds to ChatGPT",
      "Google lança o Bard — Gigante da busca responde ao ChatGPT",
    ),
    summary: l(
      "Google launched Bard, a conversational AI built on its LaMDA language model, as a direct competitive response to ChatGPT's rapid growth. The launch was marred by a factual error in a promotional demo that contributed to Alphabet's stock dropping and erasing roughly $100 billion in market capitalization in a single day. Bard later transitioned to the Gemini brand and underlying Gemini models in February 2024.",
      "A Google lançou o Bard, uma IA conversacional construída sobre o modelo LaMDA, como resposta competitiva direta ao crescimento explosivo do ChatGPT. O lançamento foi prejudicado por um erro factual numa demo promocional, que contribuiu para a queda das ações da Alphabet apagando cerca de US$ 100 bilhões em valor de mercado em um único dia. O Bard depois migrou para a marca Gemini e modelos Gemini em Fevereiro de 2024.",
    ),
    tags: ["Google", "Bard", "LaMDA", "Chatbot", "Search"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/technology/ai/bard-google-ai-search-updates/",
  },
  {
    id: "gpt-4-plugins",
    date: l("Mar 2023", "Mar 2023"),
    dateNum: 202303,
    title: l(
      "ChatGPT Plugins — AI Gets Internet Access and Real-World Tools",
      "Plugins do ChatGPT — IA ganha acesso à internet e ferramentas reais",
    ),
    summary: l(
      "OpenAI introduced plugins for ChatGPT, allowing the model to browse the web in real time, execute code in a sandbox, and connect to third-party services such as Expedia, Klarna, and Wolfram Alpha. This was the first mainstream demonstration of LLMs operating as tool-using agents capable of taking real-world actions beyond generating text. The plugin architecture was the conceptual precursor to the later GPT Store and OpenAI Assistants API.",
      "A OpenAI introduziu plugins para o ChatGPT, permitindo que o modelo navegasse na web em tempo real, executasse código em sandbox e se conectasse a serviços de terceiros como Expedia, Klarna e Wolfram Alpha. Foi a primeira demonstração mainstream de LLMs operando como agentes que usam ferramentas e tomam ações no mundo real além de gerar texto. A arquitetura de plugins foi a precursora conceitual da GPT Store e da OpenAI Assistants API.",
    ),
    tags: ["OpenAI", "ChatGPT", "Plugins", "Tool Use", "Agents", "Web Browsing"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/chatgpt-plugins/",
  },
  {
    id: "claude-2",
    date: l("Jul 2023", "Jul 2023"),
    dateNum: 202307,
    title: l(
      "Claude 2 — 100K Token Context Window and Claude.ai Launch",
      "Claude 2 — Janela de contexto de 100K tokens e lançamento do Claude.ai",
    ),
    summary: l(
      "Anthropic released Claude 2, featuring a 100,000-token context window — roughly 75,000 words, or an entire novel — which far exceeded any competing model at the time. The model showed meaningful improvements over Claude 1 in coding, mathematics, and instruction following. Claude 2 was made available to the public via Claude.ai, moving Anthropic into the consumer market for the first time.",
      "A Anthropic lançou o Claude 2, com janela de contexto de 100.000 tokens — cerca de 75.000 palavras, ou um romance inteiro — superando largamente qualquer modelo concorrente da época. O modelo mostrou melhorias significativas em código, matemática e seguimento de instruções em relação ao Claude 1. O Claude 2 foi disponibilizado ao público via Claude.ai, colocando a Anthropic no mercado de consumidor pela primeira vez.",
    ),
    tags: ["Anthropic", "Claude 2", "Long Context", "100K Tokens", "Consumer AI"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-2",
  },
  {
    id: "llama-2-release",
    date: l("Jul 2023", "Jul 2023"),
    dateNum: 202307,
    title: l(
      "LLaMA 2 Released — Meta Opens Frontier AI for Commercial Use",
      "LLaMA 2 lançado — Meta abre IA de fronteira para uso comercial",
    ),
    summary: l(
      "Meta formally released LLaMA 2 in 7B, 13B, and 70B parameter sizes under a permissive license allowing free commercial use, in partnership with Microsoft. The 70B model was competitive with GPT-3.5 on many standard benchmarks. This release established LLaMA as the de facto foundation for the open-source AI ecosystem, with thousands of derivative fine-tunes, tools, and applications building on it within months.",
      "A Meta lançou formalmente o LLaMA 2 nos tamanhos 7B, 13B e 70B parâmetros sob licença permissiva, liberando uso comercial gratuito, em parceria com a Microsoft. O modelo de 70B foi competitivo com o GPT-3.5 em vários benchmarks padrão. Esse lançamento consolidou o LLaMA como base de fato do ecossistema open-source de IA, com milhares de fine-tunes derivados, ferramentas e aplicações construídas em cima em poucos meses.",
    ),
    tags: ["Meta", "LLaMA 2", "Open Source", "Commercial License", "Open Weights"],
    significance: "landmark",
    provider: "Meta",
    providerColor: "#0866ff",
    url: "https://ai.meta.com/blog/llama-2/",
  },
  {
    id: "mistral-7b",
    date: l("Sep 2023", "Set 2023"),
    dateNum: 202309,
    title: l(
      "Mistral 7B — Efficient European Open-Weight Model",
      "Mistral 7B — Modelo europeu open-weight e eficiente",
    ),
    summary: l(
      "French startup Mistral AI released Mistral 7B, a 7-billion-parameter model released with no license restrictions that outperformed LLaMA 2 13B across most benchmarks, demonstrating that efficient architecture choices could substantially narrow the gap with larger models. The model was distributed as a torrent and via direct download with no access controls. Mistral's team, drawn largely from DeepMind and Meta, subsequently raised $415 million at a roughly $2 billion valuation.",
      "A startup francesa Mistral AI lançou o Mistral 7B, modelo de 7 bilhões de parâmetros liberado sem restrições de licença, que superou o LLaMA 2 13B na maioria dos benchmarks, demonstrando que escolhas eficientes de arquitetura podiam reduzir substancialmente a distância para modelos maiores. O modelo foi distribuído via torrent e download direto, sem controles de acesso. A equipe da Mistral, formada em boa parte por ex-DeepMind e Meta, depois levantou US$ 415 milhões num valuation de cerca de US$ 2 bilhões.",
    ),
    tags: ["Mistral AI", "Open Weights", "Efficiency", "7B", "Europe"],
    significance: "notable",
    provider: "Mistral AI",
    providerColor: "#ff7000",
    url: "https://mistral.ai/news/announcing-mistral-7b",
  },
  {
    id: "gpt-4-vision",
    date: l("Sep 2023", "Set 2023"),
    dateNum: 202309,
    title: l(
      "GPT-4V Broadly Released — Vision and Voice Come to ChatGPT",
      "GPT-4V liberado amplamente — Visão e voz chegam ao ChatGPT",
    ),
    summary: l(
      "OpenAI broadly released GPT-4 with vision capabilities to ChatGPT Plus subscribers, enabling the model to analyze images, charts, photographs, and document scans and reason about their contents. Simultaneously, OpenAI launched voice mode featuring five distinct synthesized voices with natural conversational latency. These expansions marked the shift from text-only AI assistants toward genuinely multimodal consumer interfaces.",
      "A OpenAI liberou amplamente o GPT-4 com capacidades de visão para assinantes do ChatGPT Plus, permitindo que o modelo analisasse imagens, gráficos, fotos e scans de documentos e raciocinasse sobre seus conteúdos. Ao mesmo tempo, lançou o modo de voz com cinco vozes sintetizadas distintas e latência conversacional natural. Essas expansões marcaram a passagem de assistentes de IA só de texto para interfaces de consumidor genuinamente multimodais.",
    ),
    tags: ["OpenAI", "GPT-4V", "Vision", "Multimodal", "Voice", "ChatGPT"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/gpt-4v-system-card/",
  },
  {
    id: "openai-custom-gpts",
    date: l("Nov 2023", "Nov 2023"),
    dateNum: 202311,
    title: l(
      "OpenAI DevDay — Custom GPTs, GPT Store, and GPT-4 Turbo",
      "OpenAI DevDay — Custom GPTs, GPT Store e GPT-4 Turbo",
    ),
    summary: l(
      "At its first developer conference, OpenAI announced custom GPTs — user-configurable AI assistants with custom instructions, knowledge files, and tool access — along with a GPT Store for sharing and discovering them. OpenAI also unveiled GPT-4 Turbo with a 128,000-token context window and significantly lower API pricing compared to the original GPT-4. The Assistants API with code execution and file retrieval was launched simultaneously.",
      "Na sua primeira conferência de devs, a OpenAI anunciou os Custom GPTs — assistentes de IA configuráveis pelo usuário com instruções customizadas, arquivos de conhecimento e acesso a ferramentas — junto com uma GPT Store para compartilhá-los e descobri-los. A OpenAI também revelou o GPT-4 Turbo com janela de contexto de 128.000 tokens e preço de API significativamente menor que o GPT-4 original. A Assistants API com execução de código e busca em arquivos foi lançada ao mesmo tempo.",
    ),
    tags: ["OpenAI", "GPT Store", "Custom GPTs", "GPT-4 Turbo", "128K Context", "API"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-gpts/",
  },
  {
    id: "sam-altman-fired",
    date: l("Nov 2023", "Nov 2023"),
    dateNum: 202311,
    title: l(
      "OpenAI Board Fires and Reinstates Sam Altman in Five Days",
      "Conselho da OpenAI demite e reinstaura Sam Altman em cinco dias",
    ),
    summary: l(
      "OpenAI's board abruptly terminated CEO Sam Altman on November 17, citing a loss of confidence in his candor with the board. The decision triggered a company-wide revolt: nearly all 770 OpenAI employees signed a letter threatening to resign unless Altman was reinstated. Altman returned as CEO five days later with a substantially restructured board, and the episode prompted ongoing discussion about AI governance and the tension between OpenAI's nonprofit mission and its commercial scale.",
      "O conselho da OpenAI demitiu abruptamente o CEO Sam Altman em 17 de Novembro, citando perda de confiança em sua transparência com o conselho. A decisão disparou uma revolta de toda a empresa: quase todos os 770 funcionários assinaram uma carta ameaçando se demitir se Altman não fosse reinstaurado. Altman voltou como CEO cinco dias depois com um conselho substancialmente reestruturado, e o episódio inaugurou um debate contínuo sobre governança de IA e a tensão entre a missão sem fins lucrativos da OpenAI e sua escala comercial.",
    ),
    tags: ["OpenAI", "Governance", "Sam Altman", "Corporate", "Safety Mission"],
    significance: "notable",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/openai-response/",
  },
  {
    id: "gemini-1-announce",
    date: l("Dec 2023", "Dez 2023"),
    dateNum: 202312,
    title: l(
      "Google Announces Gemini 1.0 — Natively Multimodal Model Family",
      "Google anuncia Gemini 1.0 — Família de modelos multimodal nativa",
    ),
    summary: l(
      "Google announced the Gemini 1.0 model family in three sizes — Ultra, Pro, and Nano — built to be natively multimodal from the ground up, understanding and generating across text, images, audio, and video in a single unified model. Gemini Ultra reportedly surpassed GPT-4 on 30 of 32 benchmarks evaluated, including the MMLU academic knowledge test. Gemini Nano was designed to run on-device on Pixel 8 Pro smartphones without a network connection.",
      "A Google anunciou a família de modelos Gemini 1.0 em três tamanhos — Ultra, Pro e Nano — construídos para ser nativamente multimodais desde o início, compreendendo e gerando texto, imagens, áudio e vídeo num único modelo unificado. O Gemini Ultra teria superado o GPT-4 em 30 de 32 benchmarks avaliados, incluindo o teste de conhecimento acadêmico MMLU. O Gemini Nano foi projetado para rodar on-device em smartphones Pixel 8 Pro sem conexão de rede.",
    ),
    tags: ["Google", "Gemini", "Multimodal", "Benchmark", "On-Device", "MMLU"],
    significance: "landmark",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/technology/ai/google-gemini-ai/",
  },

  // ── 2024 ─────────────────────────────────────────────────────────────────

  {
    id: "sora-announcement",
    date: l("Feb 2024", "Fev 2024"),
    dateNum: 202402,
    title: l(
      "OpenAI Sora — Cinematic Text-to-Video AI Announced",
      "OpenAI Sora — IA cinematográfica de texto para vídeo é anunciada",
    ),
    summary: l(
      "OpenAI unveiled Sora, a text-to-video model capable of generating up to 60-second photorealistic videos with consistent physics, camera movement, and object permanence across frames. Demo videos showing hyper-realistic cityscapes, animals in motion, and abstract scenes went viral immediately. OpenAI described Sora as 'a world simulator' and stated it was not yet available to the public, instead sharing access with red teamers and visual artists.",
      "A OpenAI revelou o Sora, um modelo de texto para vídeo capaz de gerar vídeos fotorrealistas de até 60 segundos com física consistente, movimento de câmera e permanência de objetos entre frames. Os vídeos de demonstração com cidades hiperrealistas, animais em movimento e cenas abstratas viralizaram imediatamente. A OpenAI descreveu o Sora como 'um simulador de mundo' e declarou que ainda não estava disponível ao público, sendo compartilhado com red teamers e artistas visuais.",
    ),
    tags: ["OpenAI", "Sora", "Text-to-Video", "Video Generation", "World Simulator"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/sora/",
  },
  {
    id: "gemini-1-5",
    date: l("Feb 2024", "Fev 2024"),
    dateNum: 202402,
    title: l(
      "Gemini 1.5 Pro — One Million Token Context Window",
      "Gemini 1.5 Pro — Janela de contexto de um milhão de tokens",
    ),
    summary: l(
      "Google announced Gemini 1.5 Pro featuring a one-million-token context window — enough to process approximately one hour of video, 11 hours of audio, 30,000 lines of code, or 700,000 words in a single prompt. This was a ten-fold increase over the previous largest context window among major models. Google attributed the capability to a Mixture of Experts architecture, which also made the model more computationally efficient than Gemini 1.0 Ultra.",
      "A Google anunciou o Gemini 1.5 Pro com janela de contexto de um milhão de tokens — suficiente para processar cerca de uma hora de vídeo, 11 horas de áudio, 30.000 linhas de código ou 700.000 palavras num único prompt. Foi um aumento de 10× sobre a maior janela de contexto anterior entre os principais modelos. A Google atribuiu a capacidade a uma arquitetura Mixture of Experts, que também tornou o modelo mais eficiente computacionalmente que o Gemini 1.0 Ultra.",
    ),
    tags: ["Google", "Gemini 1.5", "1M Context", "Mixture of Experts", "Long Context"],
    significance: "landmark",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/technology/google-deepmind/google-gemini-next-generation-model-february-2024/",
  },
  {
    id: "claude-3-family",
    date: l("Mar 2024", "Mar 2024"),
    dateNum: 202403,
    title: l(
      "Claude 3 Family — Haiku, Sonnet, and Opus Set New Benchmarks",
      "Família Claude 3 — Haiku, Sonnet e Opus estabelecem novos benchmarks",
    ),
    summary: l(
      "Anthropic launched the Claude 3 model family in three tiers — Haiku, Sonnet, and Opus — covering fast and cheap to most capable. Claude 3 Opus surpassed GPT-4 on most major benchmarks at launch, including MMLU, HumanEval coding, and GPQA graduate-level science, marking the first time a non-OpenAI model led broad academic evaluations across the board. All three Claude 3 models featured a 200,000-token context window as standard.",
      "A Anthropic lançou a família Claude 3 em três tiers — Haiku, Sonnet e Opus — cobrindo do rápido e barato ao mais capaz. O Claude 3 Opus superou o GPT-4 na maioria dos benchmarks principais no lançamento, incluindo MMLU, HumanEval (código) e GPQA (ciência nível pós-graduação), marcando a primeira vez que um modelo não-OpenAI liderou avaliações acadêmicas amplas. Os três modelos Claude 3 vieram com janela de contexto de 200.000 tokens como padrão.",
    ),
    tags: ["Anthropic", "Claude 3", "Opus", "Sonnet", "Haiku", "200K Context", "Benchmark"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-3-family",
  },
  {
    id: "llama-3-release",
    date: l("Apr 2024", "Abr 2024"),
    dateNum: 202404,
    title: l(
      "LLaMA 3 — Meta Distributes AI to Billions via Social Platforms",
      "LLaMA 3 — Meta distribui IA para bilhões via plataformas sociais",
    ),
    summary: l(
      "Meta released LLaMA 3 in 8B and 70B parameter sizes, with the 70B model matching or exceeding GPT-3.5 Turbo on most benchmarks while remaining fully open for download. Simultaneously, Meta launched Meta AI, a consumer assistant powered by LLaMA 3, integrated natively into WhatsApp, Instagram, Messenger, and Facebook search — making a frontier-class model available to billions of users without requiring any separate sign-up.",
      "A Meta lançou o LLaMA 3 nos tamanhos 8B e 70B parâmetros, com o modelo de 70B igualando ou superando o GPT-3.5 Turbo na maioria dos benchmarks e permanecendo totalmente aberto para download. Ao mesmo tempo, a Meta lançou o Meta AI, um assistente de consumidor movido pelo LLaMA 3, integrado nativamente no WhatsApp, Instagram, Messenger e na busca do Facebook — tornando um modelo de fronteira disponível para bilhões de usuários sem exigir cadastro separado.",
    ),
    tags: ["Meta", "LLaMA 3", "Open Weights", "Meta AI", "Consumer AI", "Social"],
    significance: "major",
    provider: "Meta",
    providerColor: "#0866ff",
    url: "https://ai.meta.com/blog/meta-llama-3/",
  },
  {
    id: "gpt-4o",
    date: l("May 2024", "Mai 2024"),
    dateNum: 202405,
    title: l(
      "GPT-4o — Omni Model With Real-Time Audio and Vision",
      "GPT-4o — Modelo Omni com áudio e visão em tempo real",
    ),
    summary: l(
      "OpenAI launched GPT-4o ('omni'), a unified model that natively processes text, audio, and images in a single neural network rather than through a pipeline of separate specialist models. GPT-4o could respond to audio in as little as 232 milliseconds — matching human conversational latency — and detect emotional tone in speech. The model was made available to all free ChatGPT users, removing the paid-only barrier for GPT-4-class capabilities for the first time.",
      "A OpenAI lançou o GPT-4o ('omni'), modelo unificado que processa texto, áudio e imagens nativamente numa única rede neural em vez de via pipeline de modelos especialistas separados. O GPT-4o respondia a áudio em até 232 milissegundos — equivalente à latência conversacional humana — e detectava tom emocional na fala. O modelo foi disponibilizado para todos os usuários gratuitos do ChatGPT, removendo pela primeira vez a barreira pago-só para capacidades classe GPT-4.",
    ),
    tags: ["OpenAI", "GPT-4o", "Omni", "Real-Time Audio", "Multimodal", "Free Access"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/hello-gpt-4o/",
  },
  {
    id: "claude-3-5-sonnet",
    date: l("Jun 2024", "Jun 2024"),
    dateNum: 202406,
    title: l(
      "Claude 3.5 Sonnet — New State of the Art at Mid-Tier Cost",
      "Claude 3.5 Sonnet — Novo state-of-the-art ao custo de tier intermediário",
    ),
    summary: l(
      "Anthropic released Claude 3.5 Sonnet, which outperformed Claude 3 Opus across most benchmarks while running at Sonnet-tier speed and pricing — a significant efficiency gain. It achieved 49% on the SWE-bench Verified coding evaluation, surpassing all other models at the time. Anthropic simultaneously introduced Artifacts, an interactive canvas panel within Claude.ai for viewing, editing, and running generated code and documents in real time.",
      "A Anthropic lançou o Claude 3.5 Sonnet, que superou o Claude 3 Opus na maioria dos benchmarks rodando à velocidade e preço de tier Sonnet — ganho significativo de eficiência. Atingiu 49% na avaliação de código SWE-bench Verified, superando todos os outros modelos da época. A Anthropic introduziu simultaneamente os Artifacts, um painel interativo dentro do Claude.ai para visualizar, editar e executar código e documentos gerados em tempo real.",
    ),
    tags: ["Anthropic", "Claude 3.5 Sonnet", "Coding", "SWE-bench", "Artifacts", "Efficiency"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-3-5-sonnet",
  },
  {
    id: "apple-intelligence",
    date: l("Jun 2024", "Jun 2024"),
    dateNum: 202406,
    title: l(
      "Apple Intelligence — On-Device AI for iPhone, iPad, and Mac",
      "Apple Intelligence — IA on-device para iPhone, iPad e Mac",
    ),
    summary: l(
      "Apple announced Apple Intelligence at WWDC 2024, a suite of AI features built into iOS 18, iPadOS 18, and macOS Sequoia. Capabilities included AI writing tools, an image generation system called Image Playground, an enhanced context-aware Siri, and a Private Cloud Compute architecture designed to process sensitive requests on Apple silicon servers without logging user data. Apple also announced an opt-in ChatGPT integration for queries Siri cannot answer locally.",
      "A Apple anunciou o Apple Intelligence na WWDC 2024, uma suíte de recursos de IA embutida no iOS 18, iPadOS 18 e macOS Sequoia. As capacidades incluíam ferramentas de escrita por IA, um sistema de geração de imagens chamado Image Playground, uma Siri mais consciente de contexto e uma arquitetura Private Cloud Compute projetada para processar requisições sensíveis em servidores Apple silicon sem logar dados do usuário. A Apple também anunciou uma integração opt-in com o ChatGPT para queries que a Siri não consegue responder localmente.",
    ),
    tags: ["Apple", "Apple Intelligence", "On-Device AI", "Privacy", "Siri", "iOS 18"],
    significance: "major",
    provider: "Apple",
    providerColor: "#555555",
    url: "https://www.apple.com/newsroom/2024/06/introducing-apple-intelligence-for-iphone-ipad-and-mac/",
  },
  {
    id: "openai-o1",
    date: l("Sep 2024", "Set 2024"),
    dateNum: 202409,
    title: l(
      "OpenAI o1 — Reasoning Models That Think Before Answering",
      "OpenAI o1 — Modelos de raciocínio que pensam antes de responder",
    ),
    summary: l(
      "OpenAI released o1, a reasoning model that spends additional compute on internal chain-of-thought 'thinking' steps before producing its final answer, trading latency for accuracy on complex tasks. o1 scored 83% on International Olympiad in Informatics competition problems and performed at PhD level on the GPQA science benchmark covering biology, chemistry, and physics. It introduced inference-time compute scaling as a distinct axis from model size for improving AI capability.",
      "A OpenAI lançou o o1, um modelo de raciocínio que gasta computação adicional em etapas internas de 'pensamento' por cadeia de raciocínio antes de produzir a resposta final, trocando latência por acurácia em tarefas complexas. O o1 pontuou 83% em problemas da Olimpíada Internacional de Informática e atingiu nível doutorado no benchmark de ciências GPQA cobrindo biologia, química e física. Introduziu escala de computação em tempo de inferência como eixo distinto do tamanho do modelo para melhorar a capacidade da IA.",
    ),
    tags: ["OpenAI", "o1", "Reasoning", "Chain-of-Thought", "Inference Compute", "GPQA"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-openai-o1-preview/",
  },
  {
    id: "anthropic-computer-use",
    date: l("Oct 2024", "Out 2024"),
    dateNum: 202410,
    title: l(
      "Anthropic Computer Use — Claude Controls Desktops Autonomously",
      "Anthropic Computer Use — Claude controla desktops de forma autônoma",
    ),
    summary: l(
      "Anthropic released a Computer Use capability for Claude 3.5 Sonnet in public beta, enabling the model to view screenshots and operate computers by moving a cursor, clicking interface elements, and typing text — without requiring custom API integrations for each application. This represented a significant step toward general-purpose computer agents that could automate any software task a human can perform on a screen. Anthropic flagged the capability as experimental and susceptible to prompt injection.",
      "A Anthropic lançou a capacidade Computer Use para o Claude 3.5 Sonnet em beta público, permitindo ao modelo ver screenshots e operar computadores movendo o cursor, clicando em elementos de interface e digitando texto — sem exigir integrações de API customizadas por aplicação. Foi um passo significativo rumo a agentes de computador de uso geral capazes de automatizar qualquer tarefa de software que um humano faz na tela. A Anthropic sinalizou a capacidade como experimental e suscetível a prompt injection.",
    ),
    tags: ["Anthropic", "Claude", "Computer Use", "Agents", "Automation", "Desktop"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/computer-use",
  },
  {
    id: "alphafold-nobel",
    date: l("Oct 2024", "Out 2024"),
    dateNum: 202410,
    title: l(
      "Nobel Prize in Chemistry Awarded for AlphaFold",
      "Nobel de Química concedido ao AlphaFold",
    ),
    summary: l(
      "The Nobel Committee awarded the 2024 Nobel Prize in Chemistry to Demis Hassabis and John Jumper of Google DeepMind for AlphaFold, and to David Baker of the University of Washington for computational protein design. AlphaFold had predicted the three-dimensional structures of over 200 million proteins spanning virtually every known organism, solving a 50-year grand challenge in structural biology. The Nobel Committee also awarded the 2024 Physics Nobel to Geoffrey Hinton and John Hopfield for foundational work on neural networks — two Nobel Prizes for AI research in a single year.",
      "O Comitê Nobel concedeu o Nobel de Química de 2024 a Demis Hassabis e John Jumper, da Google DeepMind, pelo AlphaFold, e a David Baker, da University of Washington, pelo design computacional de proteínas. O AlphaFold havia previsto as estruturas tridimensionais de mais de 200 milhões de proteínas, abrangendo virtualmente todo organismo conhecido e resolvendo um grande desafio de 50 anos da biologia estrutural. O Comitê Nobel também concedeu o Nobel de Física de 2024 a Geoffrey Hinton e John Hopfield pelo trabalho fundador em redes neurais — dois Nobels para pesquisa em IA num único ano.",
    ),
    tags: ["DeepMind", "AlphaFold", "Nobel Prize", "Protein Folding", "Biology", "Geoffrey Hinton"],
    significance: "landmark",
    provider: "DeepMind",
    providerColor: "#4285f4",
    url: "https://www.nobelprize.org/prizes/chemistry/2024/press-release/",
  },
  {
    id: "gemini-2-flash",
    date: l("Dec 2024", "Dez 2024"),
    dateNum: 202412,
    title: l(
      "Gemini 2.0 Flash — Google Launches Agentic Model Generation",
      "Gemini 2.0 Flash — Google lança a geração agêntica de modelos",
    ),
    summary: l(
      "Google released Gemini 2.0 Flash as the first model in its Gemini 2.0 family, designed for agentic use cases with native multimodal inputs, real-time audio output, and native image generation capability. The model featured improved tool use and was optimized for high-frequency tasks requiring low latency at minimal cost. Google framed the Gemini 2.0 generation as the beginning of what it called the 'agentic era' of AI development.",
      "A Google lançou o Gemini 2.0 Flash como primeiro modelo da família Gemini 2.0, projetado para casos de uso agênticos com entradas multimodais nativas, saída de áudio em tempo real e capacidade de geração nativa de imagens. O modelo trouxe tool use aprimorado e foi otimizado para tarefas de alta frequência exigindo baixa latência a custo mínimo. A Google enquadrou a geração Gemini 2.0 como o início do que chamou de 'era agêntica' do desenvolvimento de IA.",
    ),
    tags: ["Google", "Gemini 2.0", "Flash", "Agents", "Multimodal", "Image Generation"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/",
  },
  {
    id: "sora-public-release",
    date: l("Dec 2024", "Dez 2024"),
    dateNum: 202412,
    title: l(
      "Sora Publicly Released — Text-to-Video Available to Subscribers",
      "Sora liberado ao público — Texto para vídeo disponível para assinantes",
    ),
    summary: l(
      "OpenAI made Sora available to ChatGPT Plus and Pro subscribers after approximately ten months of preview access limited to selected creators and red teamers. The public version generated videos up to 20 seconds in length at 1080p resolution, with a watermarking system to identify AI-generated content. The release was part of OpenAI's '12 Days of OpenAI' announcement series in December 2024.",
      "A OpenAI disponibilizou o Sora para assinantes do ChatGPT Plus e Pro após cerca de dez meses de acesso preview restrito a criadores selecionados e red teamers. A versão pública gerou vídeos de até 20 segundos em resolução 1080p, com sistema de marca d'água para identificar conteúdo gerado por IA. O lançamento fez parte da série de anúncios '12 Days of OpenAI' em Dezembro de 2024.",
    ),
    tags: ["OpenAI", "Sora", "Text-to-Video", "Video Generation", "Consumer"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/sora-is-here/",
  },

  // ── 2025 ─────────────────────────────────────────────────────────────────

  {
    id: "deepseek-r1",
    date: l("Jan 2025", "Jan 2025"),
    dateNum: 202501,
    title: l(
      "DeepSeek R1 — Efficient Reasoning Model Shocks the Industry",
      "DeepSeek R1 — Modelo eficiente de raciocínio choca a indústria",
    ),
    summary: l(
      "DeepSeek released R1, a reasoning model built in China that matched OpenAI o1's performance on major benchmarks while being trained at a fraction of the cost and under US semiconductor export restrictions using older NVIDIA hardware. The model was released fully open-source under an MIT license. NVIDIA lost approximately $600 billion in market capitalization in a single trading day as investors questioned whether the most expensive AI infrastructure was necessary to achieve frontier performance.",
      "A DeepSeek lançou o R1, modelo de raciocínio construído na China que igualou a performance do OpenAI o1 nos principais benchmarks treinado a uma fração do custo e sob restrições americanas de exportação de semicondutores, usando hardware NVIDIA mais antigo. O modelo foi liberado totalmente open-source sob licença MIT. A NVIDIA perdeu aproximadamente US$ 600 bilhões em valor de mercado em um único pregão à medida que investidores questionavam se a infraestrutura de IA mais cara era necessária para alcançar performance de fronteira.",
    ),
    tags: ["DeepSeek", "R1", "Reasoning", "Open Source", "Efficiency", "China"],
    significance: "landmark",
    provider: "DeepSeek",
    providerColor: "#1a73e8",
    url: "https://github.com/deepseek-ai/DeepSeek-R1",
  },
  {
    id: "openai-operator",
    date: l("Jan 2025", "Jan 2025"),
    dateNum: 202501,
    title: l(
      "OpenAI Operator — AI Agent That Browses and Acts on the Web",
      "OpenAI Operator — Agente de IA que navega e age na web",
    ),
    summary: l(
      "OpenAI launched Operator, a standalone AI agent capable of navigating websites, filling in forms, completing checkouts, and booking reservations autonomously using a standard web browser. It used a Computer-Using Agent model trained specifically on graphical user interface interaction rather than relying on structured APIs. Operator launched for ChatGPT Pro subscribers in the United States, representing OpenAI's first dedicated agentic product separate from ChatGPT.",
      "A OpenAI lançou o Operator, agente de IA independente capaz de navegar em sites, preencher formulários, concluir checkouts e fazer reservas de forma autônoma usando um navegador web padrão. Usou um modelo Computer-Using Agent treinado especificamente em interação com interfaces gráficas em vez de depender de APIs estruturadas. O Operator foi lançado para assinantes do ChatGPT Pro nos EUA, representando o primeiro produto agêntico dedicado da OpenAI separado do ChatGPT.",
    ),
    tags: ["OpenAI", "Operator", "Agents", "Browser Automation", "Web", "Agentic"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-operator/",
  },
  {
    id: "claude-3-7-sonnet",
    date: l("Feb 2025", "Fev 2025"),
    dateNum: 202502,
    title: l(
      "Claude 3.7 Sonnet and Claude Code — Extended Thinking and Agentic Coding",
      "Claude 3.7 Sonnet e Claude Code — Extended Thinking e código agêntico",
    ),
    summary: l(
      "Anthropic released Claude 3.7 Sonnet, the first model to offer both a standard fast response mode and an optional Extended Thinking mode that surfaces the model's chain-of-thought reasoning to users before producing a final answer. It set a new record of 62.3% on SWE-bench Verified, the leading coding agent benchmark. Anthropic simultaneously launched Claude Code, a terminal-based agentic coding tool that could autonomously write, edit, test, and debug entire codebases.",
      "A Anthropic lançou o Claude 3.7 Sonnet, primeiro modelo a oferecer tanto um modo padrão de resposta rápida quanto um modo Extended Thinking opcional que expõe a cadeia de raciocínio do modelo ao usuário antes de produzir a resposta final. Estabeleceu novo recorde de 62,3% no SWE-bench Verified, o principal benchmark de agentes de código. A Anthropic lançou simultaneamente o Claude Code, ferramenta agêntica de programação no terminal capaz de escrever, editar, testar e depurar bases de código inteiras de forma autônoma.",
    ),
    tags: ["Anthropic", "Claude 3.7", "Extended Thinking", "Claude Code", "SWE-bench", "Agentic"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-3-7-sonnet",
  },
  {
    id: "gemini-2-5-pro",
    date: l("Mar 2025", "Mar 2025"),
    dateNum: 202503,
    title: l(
      "Gemini 2.5 Pro — Google's Thinking Model Tops Coding Leaderboards",
      "Gemini 2.5 Pro — Modelo pensante do Google lidera leaderboards de código",
    ),
    summary: l(
      "Google released Gemini 2.5 Pro Experimental, a thinking model that immediately ranked first on the LMArena (formerly LMSys) leaderboard and set new records on the WebDev Arena benchmark for generating web applications. It was widely praised for producing complex, functional interactive web apps from natural language descriptions with high accuracy. The model supported a one-million-token context window and offered competitive API pricing relative to OpenAI's reasoning models.",
      "A Google lançou o Gemini 2.5 Pro Experimental, modelo pensante que imediatamente ficou em primeiro no leaderboard LMArena (antigo LMSys) e estabeleceu novos recordes no benchmark WebDev Arena de geração de aplicações web. Foi amplamente elogiado por produzir webapps interativos complexos e funcionais a partir de descrições em linguagem natural, com alta acurácia. O modelo suportava janela de contexto de um milhão de tokens e oferecia preço de API competitivo em relação aos modelos de raciocínio da OpenAI.",
    ),
    tags: ["Google", "Gemini 2.5 Pro", "Reasoning", "Coding", "LMArena", "Thinking"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/",
  },
  {
    id: "gpt-4o-image-gen",
    date: l("Mar 2025", "Mar 2025"),
    dateNum: 202503,
    title: l(
      "GPT-4o Native Image Generation Goes Viral",
      "Geração nativa de imagens do GPT-4o viraliza",
    ),
    summary: l(
      "OpenAI launched native image generation within GPT-4o, replacing its previous DALL-E 3 integration with a system capable of producing significantly more photorealistic images with accurate text rendering — a longstanding weakness of diffusion models. The feature generated widespread attention when users discovered it could replicate the visual style of Studio Ghibli animated films. ChatGPT reached 150 million daily active users in the week following launch, a new record for the platform.",
      "A OpenAI lançou geração nativa de imagens dentro do GPT-4o, substituindo a integração anterior com o DALL-E 3 por um sistema capaz de produzir imagens significativamente mais fotorrealistas com renderização precisa de texto — uma fraqueza histórica de modelos de difusão. O recurso ganhou atenção massiva quando usuários descobriram que conseguia replicar o estilo visual dos filmes do Studio Ghibli. O ChatGPT atingiu 150 milhões de usuários ativos diários na semana após o lançamento, novo recorde da plataforma.",
    ),
    tags: ["OpenAI", "GPT-4o", "Image Generation", "Multimodal", "ChatGPT", "Creative"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-4o-image-generation/",
  },
  {
    id: "openai-o3",
    date: l("Apr 2025", "Abr 2025"),
    dateNum: 202504,
    title: l(
      "OpenAI o3 and o4-mini — Agentic Reasoning With Integrated Tool Use",
      "OpenAI o3 e o4-mini — Raciocínio agêntico com tool use integrado",
    ),
    summary: l(
      "OpenAI released o3 and o4-mini, reasoning models that can invoke tools — including web search, Python code execution, and image analysis — directly within their chain-of-thought thinking process rather than as a separate outer loop. o3 scored 69.1% on SWE-bench Verified and set new records on ARC-AGI-1, a benchmark designed to measure reasoning beyond pattern matching. The models represented the first integration of native tool use into the reasoning loop itself.",
      "A OpenAI lançou o o3 e o o4-mini, modelos de raciocínio capazes de invocar ferramentas — incluindo busca na web, execução de código Python e análise de imagem — diretamente dentro do processo de pensamento por cadeia de raciocínio, em vez de num loop externo separado. O o3 pontuou 69,1% no SWE-bench Verified e estabeleceu novos recordes no ARC-AGI-1, benchmark projetado para medir raciocínio além do casamento de padrões. Os modelos representaram a primeira integração de tool use nativo ao próprio loop de raciocínio.",
    ),
    tags: ["OpenAI", "o3", "o4-mini", "Reasoning", "Tool Use", "ARC-AGI", "Agentic"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-o3-and-o4-mini/",
  },
  {
    id: "llama-4-release",
    date: l("Apr 2025", "Abr 2025"),
    dateNum: 202504,
    title: l(
      "LLaMA 4 — Meta's Mixture-of-Experts Open Frontier Models",
      "LLaMA 4 — Modelos de fronteira open MoE da Meta",
    ),
    summary: l(
      "Meta released the LLaMA 4 model family including Scout, a 17-billion-active-parameter model supporting a 10-million-token context window — the largest of any publicly released model at the time — and Maverick, a Mixture of Experts model competitive with GPT-4o and Gemini 2.0 Flash on most standard benchmarks. A larger model called Behemoth was announced as still in training. All LLaMA 4 models were released under Meta's custom open license permitting broad commercial use.",
      "A Meta lançou a família LLaMA 4 incluindo o Scout, modelo de 17 bilhões de parâmetros ativos com janela de contexto de 10 milhões de tokens — a maior de qualquer modelo publicamente lançado da época — e o Maverick, modelo Mixture of Experts competitivo com GPT-4o e Gemini 2.0 Flash na maioria dos benchmarks padrão. Um modelo maior chamado Behemoth foi anunciado como ainda em treinamento. Todos os modelos LLaMA 4 foram lançados sob a licença open customizada da Meta, permitindo amplo uso comercial.",
    ),
    tags: ["Meta", "LLaMA 4", "Mixture of Experts", "10M Context", "Open Weights", "MoE"],
    significance: "major",
    provider: "Meta",
    providerColor: "#0866ff",
    url: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
  },
  {
    id: "claude-4-sonnet-opus",
    date: l("May 2025", "Mai 2025"),
    dateNum: 202505,
    title: l(
      "Claude Sonnet 4 and Opus 4 — Anthropic's Most Capable Generation",
      "Claude Sonnet 4 e Opus 4 — Geração mais capaz da Anthropic",
    ),
    summary: l(
      "Anthropic released Claude Sonnet 4 and Claude Opus 4, with Sonnet 4 achieving 72.7% on SWE-bench Verified — a new record at launch — and Opus 4 positioned as the highest-capability option for the most demanding tasks. Both models featured improved instruction following, significantly reduced unnecessary refusals compared to earlier versions, and enhanced agentic capabilities for multi-step workflows. Claude Sonnet 4 became the primary model powering Cursor's AI coding assistant.",
      "A Anthropic lançou o Claude Sonnet 4 e o Claude Opus 4, com o Sonnet 4 atingindo 72,7% no SWE-bench Verified — novo recorde no lançamento — e o Opus 4 posicionado como a opção de maior capacidade para as tarefas mais exigentes. Ambos os modelos trouxeram seguimento de instrução aprimorado, redução significativa de recusas desnecessárias em relação a versões anteriores e capacidades agênticas reforçadas para fluxos multi-passo. O Claude Sonnet 4 virou o modelo principal por trás do assistente de código do Cursor.",
    ),
    tags: ["Anthropic", "Claude 4", "Opus 4", "Sonnet 4", "SWE-bench", "Coding", "Agents"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-4",
  },

  // ── 2025 (continued) ─────────────────────────────────────────────────────

  {
    id: "meta-scale-ai",
    date: l("Jun 2025", "Jun 2025"),
    dateNum: 202506,
    title: l(
      "Meta Acquires 49% of Scale AI — $29 Billion Data Valuation",
      "Meta adquire 49% da Scale AI — Valuation de US$ 29 bilhões em dados",
    ),
    summary: l(
      "Meta acquired a 49% non-voting stake in Scale AI, valuing the data-labeling and AI evaluation company at $29 billion — the largest acquisition in AI infrastructure at the time. The deal gave Meta privileged access to Scale's training data pipelines and human-feedback systems, directly competing with OpenAI and Anthropic on the data layer. Meta simultaneously announced Scale AI's CEO Alexandr Wang would join Meta's board, signaling a deeper strategic alignment.",
      "A Meta adquiriu uma participação não-votante de 49% na Scale AI, avaliando a empresa de rotulagem de dados e avaliação de IA em US$ 29 bilhões — a maior aquisição em infraestrutura de IA da época. O acordo deu à Meta acesso privilegiado aos pipelines de dados de treino e sistemas de feedback humano da Scale, competindo diretamente com OpenAI e Anthropic na camada de dados. A Meta anunciou simultaneamente que o CEO da Scale AI, Alexandr Wang, entraria no conselho da Meta, sinalizando alinhamento estratégico mais profundo.",
    ),
    tags: ["Meta", "Scale AI", "Data", "Infrastructure", "Acquisition"],
    significance: "major",
    provider: "Meta",
    providerColor: "#0866ff",
  },
  {
    id: "gpt-5-launch",
    date: l("Aug 2025", "Ago 2025"),
    dateNum: 202508,
    title: l(
      "GPT-5 Launches — Unified Reasoning Model Free for Everyone",
      "GPT-5 é lançado — Modelo unificado de raciocínio gratuito para todos",
    ),
    summary: l(
      "OpenAI released GPT-5 on August 7, 2025 as its first model unifying fast chat and deep reasoning in a single endpoint, ending the need to choose between GPT-4o and the o-series. GPT-5 scored 74.9% on SWE-bench Verified, 94.6% on AIME 2025 without tools, and 84.2% on MMMU, setting new records across coding, mathematics, and multimodal understanding simultaneously. The model was made available to all free ChatGPT users at launch — the first time a unified reasoning model reached the free tier.",
      "A OpenAI lançou o GPT-5 em 7 de Agosto de 2025 como seu primeiro modelo a unificar chat rápido e raciocínio profundo num único endpoint, encerrando a necessidade de escolher entre GPT-4o e a série-o. O GPT-5 pontuou 74,9% no SWE-bench Verified, 94,6% no AIME 2025 sem ferramentas e 84,2% no MMMU, estabelecendo novos recordes em código, matemática e compreensão multimodal ao mesmo tempo. O modelo foi disponibilizado para todos os usuários gratuitos do ChatGPT no lançamento — primeira vez que um modelo unificado de raciocínio chegou ao tier gratuito.",
    ),
    tags: ["OpenAI", "GPT-5", "Reasoning", "SWE-bench", "Free Access", "Multimodal"],
    significance: "landmark",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-gpt-5/",
  },
  {
    id: "gemini-3-pro",
    date: l("Nov 2025", "Nov 2025"),
    dateNum: 202511,
    title: l(
      "Gemini 3 Pro — Google's Most Capable Multimodal Model Launches",
      "Gemini 3 Pro — Modelo multimodal mais capaz do Google é lançado",
    ),
    summary: l(
      "Google launched Gemini 3 Pro on November 20, 2025 across Search, the Gemini app, AI Studio, and Vertex AI simultaneously. The model features a 1,048,576-token context window, native understanding of text, images, video, audio, and PDFs, and a Deep Think mode for demanding reasoning tasks. Gemini 3 Pro was immediately deployed as the backbone of Google's consumer AI products, replacing Gemini 2.0, and marked Google's most aggressive model launch across its entire product surface at once.",
      "A Google lançou o Gemini 3 Pro em 20 de Novembro de 2025 simultaneamente no Search, no app Gemini, no AI Studio e no Vertex AI. O modelo tem janela de contexto de 1.048.576 tokens, compreensão nativa de texto, imagens, vídeo, áudio e PDFs, e um modo Deep Think para tarefas de raciocínio exigentes. O Gemini 3 Pro foi imediatamente implantado como espinha dorsal dos produtos de IA de consumidor da Google, substituindo o Gemini 2.0, e marcou o lançamento mais agressivo da Google em toda a superfície de produtos de uma vez.",
    ),
    tags: ["Google", "Gemini 3", "Multimodal", "1M Context", "Deep Think", "Agents"],
    significance: "landmark",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://workspaceupdates.googleblog.com/2025/11/introducing-gemini-3-pro-for-gemini-app.html",
  },
  {
    id: "claude-opus-4-5",
    date: l("Nov 2025", "Nov 2025"),
    dateNum: 202511,
    title: l(
      "Claude Opus 4.5 — First Model to Break 80% on SWE-bench",
      "Claude Opus 4.5 — Primeiro modelo a quebrar 80% no SWE-bench",
    ),
    summary: l(
      "Anthropic released Claude Opus 4.5 on November 24, 2025, scoring 80.9% on SWE-bench Verified — the first AI model to cross the 80% threshold on the leading real-world coding benchmark, surpassing GPT-5.1 at 76.3% and Gemini 3 Pro at 76.2%. Pricing dropped by approximately 67% from previous Opus models to $5 per million input tokens and $25 per million output tokens. An 'endless chat' feature automatically compressed context at limits, enabling uninterrupted multi-hour agentic workflows.",
      "A Anthropic lançou o Claude Opus 4.5 em 24 de Novembro de 2025, pontuando 80,9% no SWE-bench Verified — primeiro modelo de IA a cruzar a marca de 80% no principal benchmark de código real, superando o GPT-5.1 (76,3%) e o Gemini 3 Pro (76,2%). O preço caiu cerca de 67% em relação a versões Opus anteriores, para US$ 5 por milhão de tokens de entrada e US$ 25 por milhão de tokens de saída. Um recurso 'endless chat' comprimia o contexto automaticamente nos limites, habilitando fluxos agênticos ininterruptos de várias horas.",
    ),
    tags: ["Anthropic", "Claude Opus 4.5", "SWE-bench", "Coding", "Agents", "Pricing"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-opus-4-5",
  },
  {
    id: "gpt-5-2-codex",
    date: l("Dec 2025", "Dez 2025"),
    dateNum: 202512,
    title: l(
      "OpenAI GPT-5.2-Codex — Agentic Coding Specialist Counters Gemini 3",
      "OpenAI GPT-5.2-Codex — Especialista agêntico em código rebate o Gemini 3",
    ),
    summary: l(
      "OpenAI released GPT-5.2-Codex in December 2025 as a specialist coding model optimized for multi-step agentic software engineering tasks, directly responding to Gemini 3 Pro's strong coding performance. The model was positioned for autonomous repository-level coding, integration testing, and codebase exploration rather than single-file tasks. GPT-5.2-Codex debuted on the OpenAI Codex platform and via the Assistants API, targeting professional engineering teams running long-horizon automated workflows.",
      "A OpenAI lançou o GPT-5.2-Codex em Dezembro de 2025 como modelo especialista em código otimizado para tarefas agênticas multi-passo de engenharia de software, em resposta direta à forte performance do Gemini 3 Pro em código. O modelo foi posicionado para programação autônoma no nível do repositório, testes de integração e exploração de bases de código, em vez de tarefas de um único arquivo. O GPT-5.2-Codex estreou na plataforma OpenAI Codex e via Assistants API, mirando equipes profissionais de engenharia rodando fluxos automatizados de longo horizonte.",
    ),
    tags: ["OpenAI", "GPT-5.2", "Codex", "Coding", "Agents", "Agentic"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://openai.com/index/introducing-gpt-5-2-codex/",
  },
  {
    id: "meta-manus",
    date: l("Dec 2025", "Dez 2025"),
    dateNum: 202512,
    title: l(
      "Meta Acquires Manus AI for $2B+ — General-Purpose Agent Platform",
      "Meta adquire a Manus AI por US$ 2B+ — Plataforma de agente de uso geral",
    ),
    summary: l(
      "Meta acquired Manus, a Singapore-based AI startup, for over $2 billion — the largest acquisition of an AI agent company to date. Manus had built a general-purpose AI agent capable of performing complex multi-step real-world tasks across web browsing, file management, coding, and data analysis without domain-specific customization. The acquisition positioned Meta to compete directly with OpenAI Operator and Anthropic Computer Use in the emerging market for autonomous agent products.",
      "A Meta adquiriu a Manus, startup de IA sediada em Singapura, por mais de US$ 2 bilhões — a maior aquisição de uma empresa de agentes de IA até então. A Manus havia construído um agente de IA de uso geral capaz de realizar tarefas complexas multi-passo no mundo real, cobrindo navegação na web, gestão de arquivos, programação e análise de dados sem customização específica por domínio. A aquisição posicionou a Meta para competir diretamente com o OpenAI Operator e o Anthropic Computer Use no mercado emergente de produtos de agentes autônomos.",
    ),
    tags: ["Meta", "Manus", "Agents", "Acquisition", "Automation"],
    significance: "major",
    provider: "Meta",
    providerColor: "#0866ff",
  },

  // ── 2026 ─────────────────────────────────────────────────────────────────

  {
    id: "gemini-3-1-pro",
    date: l("Feb 2026", "Fev 2026"),
    dateNum: 202602,
    title: l(
      "Gemini 3.1 Pro — Leads Every Published Reasoning Benchmark",
      "Gemini 3.1 Pro — Lidera todo benchmark publicado de raciocínio",
    ),
    summary: l(
      "Google released Gemini 3.1 Pro in February 2026, immediately reaching the top of all major published benchmarks including GPQA Diamond at 94.3% and ARC-AGI-2 at 77.1%. The model matched GPT-5.5's 1-million-token context window while offering more competitive API pricing, making it the preferred choice for cost-sensitive high-throughput workloads. Gemini 3.1 Flash-Lite launched simultaneously as Google's most cost-efficient model for latency-critical production deployments.",
      "A Google lançou o Gemini 3.1 Pro em Fevereiro de 2026, atingindo imediatamente o topo de todos os principais benchmarks publicados, incluindo GPQA Diamond com 94,3% e ARC-AGI-2 com 77,1%. O modelo igualou a janela de contexto de 1 milhão de tokens do GPT-5.5 oferecendo preço de API mais competitivo, virando a escolha preferida para workloads de alto throughput sensíveis a custo. O Gemini 3.1 Flash-Lite foi lançado em paralelo como o modelo Google mais econômico para implantações de produção críticas em latência.",
    ),
    tags: ["Google", "Gemini 3.1 Pro", "Reasoning", "GPQA", "ARC-AGI", "Benchmark"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
  },
  {
    id: "claude-mythos-glasswing",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    title: l(
      "Claude Mythos and Project Glasswing — AI Discovers Thousands of Zero-Days",
      "Claude Mythos e Project Glasswing — IA descobre milhares de zero-days",
    ),
    summary: l(
      "Anthropic announced Claude Mythos Preview, a frontier model sitting a full capability tier above Opus 4.7 and not available to the public, alongside Project Glasswing — an initiative to use Mythos to secure critical software infrastructure. Using Mythos, Anthropic autonomously identified thousands of zero-day vulnerabilities across every major operating system and web browser, including a 17-year-old remote code execution vulnerability in FreeBSD that allows complete server takeover. Launch partners include AWS, Apple, Cisco, CrowdStrike, Google, JPMorganChase, Microsoft, and NVIDIA, with $100 million in model credits committed.",
      "A Anthropic anunciou o Claude Mythos Preview, modelo de fronteira um tier acima do Opus 4.7 e não disponível ao público, junto com o Project Glasswing — uma iniciativa para usar o Mythos para proteger infraestrutura crítica de software. Usando o Mythos, a Anthropic identificou autonomamente milhares de vulnerabilidades zero-day em todos os principais sistemas operacionais e navegadores, incluindo uma vulnerabilidade de execução remota de código com 17 anos no FreeBSD que permite tomada completa de servidor. Parceiros de lançamento incluem AWS, Apple, Cisco, CrowdStrike, Google, JPMorganChase, Microsoft e NVIDIA, com US$ 100 milhões em créditos de modelo comprometidos.",
    ),
    tags: ["Anthropic", "Claude Mythos", "Project Glasswing", "Security", "Zero-Day", "Cybersecurity"],
    significance: "landmark",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/glasswing",
  },
  {
    id: "google-gemma-4",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    dateDay: 2,
    title: l(
      "Gemma 4 — Google's Most Capable Open-Source Model Family",
      "Gemma 4 — Família open-source mais capaz da Google",
    ),
    summary: l(
      "Google released Gemma 4 on April 2, 2026 under Apache 2.0, in four sizes (2B to 31B parameters) with 256K context windows, native vision and audio processing, and support for 140+ languages. The 31B dense flagship targets advanced reasoning, multi-step planning, agentic workflows, and offline code generation — available on Hugging Face, Kaggle, and Google AI Studio.",
      "A Google lançou o Gemma 4 em 2 de Abril de 2026 sob Apache 2.0, em quatro tamanhos (2B a 31B parâmetros) com janelas de contexto de 256K, processamento nativo de visão e áudio e suporte a mais de 140 idiomas. O flagship denso de 31B mira raciocínio avançado, planejamento multi-passo, fluxos agênticos e geração de código offline — disponível no Hugging Face, Kaggle e Google AI Studio.",
    ),
    tags: ["Google", "Gemma", "Open Source", "Multimodal", "Reasoning"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
  },
  {
    id: "gemini-3-1-ultra",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    title: l(
      "Gemini 3.1 Ultra — 2M-Token Context Window, Full Native Multimodal",
      "Gemini 3.1 Ultra — Janela de contexto de 2M tokens, multimodal nativo completo",
    ),
    summary: l(
      "Google released Gemini 3.1 Ultra in April 2026 with the largest context window of any publicly available model at 2 million tokens — double the 1M-token limit of Gemini 3.1 Pro. The model reasons natively across text, image, audio, and video in a single pass without separate pipelines, enabling tasks like auditing a full year of all-hands recordings alongside a complete legal discovery set in one prompt. Gemini 3.1 Ultra surpassed GPT-5.5 on the MMLU-Pro and GPQA Diamond benchmarks, making it Google's most capable model available via the Vertex AI API at launch.",
      "A Google lançou o Gemini 3.1 Ultra em Abril de 2026 com a maior janela de contexto entre modelos publicamente disponíveis, 2 milhões de tokens — o dobro do limite de 1M do Gemini 3.1 Pro. O modelo raciocina nativamente sobre texto, imagem, áudio e vídeo numa única passagem, sem pipelines separados, viabilizando tarefas como auditar um ano inteiro de gravações de all-hands junto com um discovery jurídico completo em um único prompt. O Gemini 3.1 Ultra superou o GPT-5.5 nos benchmarks MMLU-Pro e GPQA Diamond, virando o modelo Google mais capaz disponível via API do Vertex AI no lançamento.",
    ),
    tags: ["Google", "Gemini 3.1 Ultra", "2M Context", "Multimodal", "Benchmark", "Vertex AI"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://medium.com/@WinTK-Bangladesh/gemini-3-1-ultra-is-here-2-million-token-context-full-multimodal-zero-compromise-ca3f2a8d1254",
  },
  {
    id: "claude-opus-4-7",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    title: l(
      "Claude Opus 4.7 — Anthropic's 2026 Flagship With Enhanced Vision and Coding",
      "Claude Opus 4.7 — Flagship 2026 da Anthropic com visão e código aprimorados",
    ),
    summary: l(
      "Anthropic released Claude Opus 4.7 on April 16, 2026, delivering a 10.9-point improvement on SWE-bench Pro to 64.3%, a threefold increase in visual resolution to 3.75 megapixels per image, enhanced file-system memory for persistent agentic tasks, and a new 'xhigh' reasoning effort level above the previous maximum. Pricing remained unchanged at $5 per million input and $25 per million output tokens despite the capability improvements. Opus 4.7 led software engineering and tool orchestration benchmarks against all competing models at launch.",
      "A Anthropic lançou o Claude Opus 4.7 em 16 de Abril de 2026, entregando melhoria de 10,9 pontos no SWE-bench Pro até 64,3%, aumento triplo na resolução visual para 3,75 megapixels por imagem, memória aprimorada em sistema de arquivos para tarefas agênticas persistentes e um novo nível de esforço de raciocínio 'xhigh' acima do máximo anterior. O preço se manteve em US$ 5 por milhão de tokens de entrada e US$ 25 por milhão de saída apesar das melhorias. O Opus 4.7 liderou benchmarks de engenharia de software e orquestração de ferramentas contra todos os modelos concorrentes no lançamento.",
    ),
    tags: ["Anthropic", "Claude Opus 4.7", "SWE-bench", "Vision", "Coding", "Reasoning"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-opus-4-7",
  },
  {
    id: "deepseek-v4",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    dateDay: 24,
    title: l(
      "DeepSeek V4 — 1.6T-Parameter MoE, 80.6% SWE-bench Verified",
      "DeepSeek V4 — MoE de 1,6T parâmetros, 80,6% no SWE-bench Verified",
    ),
    summary: l(
      "DeepSeek released V4-Pro and V4-Flash on April 24, 2026 under MIT license. V4-Pro packs 1.6T total parameters with 49B active via mixture-of-experts, a 1M-token context window, and scored 80.6% on SWE-bench Verified — matching frontier closed-source models. Weights are on Hugging Face; V4-Flash (284B total, 13B active) targets cost-efficient inference.",
      "A DeepSeek lançou o V4-Pro e o V4-Flash em 24 de Abril de 2026 sob licença MIT. O V4-Pro empacota 1,6T de parâmetros totais com 49B ativos via mixture-of-experts, janela de contexto de 1M tokens, e pontuou 80,6% no SWE-bench Verified — igualando modelos fechados de fronteira. Os pesos estão no Hugging Face; o V4-Flash (284B totais, 13B ativos) mira inferência econômica.",
    ),
    tags: ["DeepSeek", "V4", "Open Source", "MoE", "Coding", "SWE-bench"],
    significance: "major",
    provider: "DeepSeek",
    providerColor: "#1a73e8",
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
  },
  {
    id: "gpt-5-5",
    date: l("Apr 2026", "Abr 2026"),
    dateNum: 202604,
    title: l(
      "GPT-5.5 — OpenAI's 1M-Context Default Model With Agentic Workflows",
      "GPT-5.5 — Modelo padrão da OpenAI com 1M de contexto e fluxos agênticos",
    ),
    summary: l(
      "OpenAI released GPT-5.5 on April 24, 2026, matching Gemini 3.1 Pro's 1-million-token context window for the first time while improving token efficiency at equivalent latency versus GPT-5.4. Greg Brockman described GPT-5.5 as 'a new class of intelligence' for its ability to decompose ambiguous problems and determine next steps without explicit instruction. GPT-5.5 Instant subsequently became the default model for all ChatGPT users in May 2026, replacing GPT-4o as the standard-tier model.",
      "A OpenAI lançou o GPT-5.5 em 24 de Abril de 2026, igualando pela primeira vez a janela de contexto de 1 milhão de tokens do Gemini 3.1 Pro melhorando a eficiência por token em latência equivalente ao GPT-5.4. Greg Brockman descreveu o GPT-5.5 como 'uma nova classe de inteligência' pela capacidade de decompor problemas ambíguos e determinar próximos passos sem instrução explícita. O GPT-5.5 Instant depois virou o modelo padrão para todos os usuários do ChatGPT em Maio de 2026, substituindo o GPT-4o como modelo de tier padrão.",
    ),
    tags: ["OpenAI", "GPT-5.5", "1M Context", "Agentic", "ChatGPT", "Default Model"],
    significance: "major",
    provider: "OpenAI",
    providerColor: "#10a37f",
    url: "https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/",
  },
  {
    id: "anthropic-30b-revenue",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 8,
    title: l(
      "Anthropic Hits $30B Revenue Run-Rate — $950B Valuation Talks",
      "Anthropic atinge run-rate de US$ 30B em receita — Conversas de valuation de US$ 950B",
    ),
    summary: l(
      "Anthropic's annualized revenue surpassed $30 billion in May 2026 — more than triple its $9 billion run-rate at end of 2025 — driven by explosive enterprise adoption of Claude Opus 4.7 and Claude Code. The company entered talks to raise $30–50 billion at a valuation approaching $950 billion, which would make it one of the most valuable private companies in history. Anthropic simultaneously expanded its compute partnership with Google and Broadcom to support the infrastructure demands of serving its rapidly growing customer base.",
      "A receita anualizada da Anthropic ultrapassou US$ 30 bilhões em Maio de 2026 — mais do que o triplo do run-rate de US$ 9 bilhões no fim de 2025 — impulsionada pela adoção corporativa explosiva do Claude Opus 4.7 e do Claude Code. A empresa entrou em conversas para captar US$ 30–50 bilhões a um valuation chegando a US$ 950 bilhões, o que a faria uma das empresas privadas mais valiosas da história. A Anthropic simultaneamente expandiu sua parceria de computação com Google e Broadcom para suportar as demandas de infraestrutura de uma base de clientes em crescimento acelerado.",
    ),
    tags: ["Anthropic", "Revenue", "Valuation", "Enterprise", "Growth"],
    significance: "notable",
    provider: "Anthropic",
    providerColor: "#d97706",
  },

  {
    id: "xai-dissolved-anthropic-compute",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 6,
    title: l(
      "xAI Dissolved — SpaceX Hands Colossus 1 Compute to Anthropic",
      "xAI dissolvida — SpaceX repassa o cluster Colossus 1 à Anthropic",
    ),
    summary: l(
      "Elon Musk announced on May 6, 2026 that xAI would be dissolved as an independent company and rebranded SpaceXAI, citing Anthropic's rapid growth and safety focus as factors in his change of view. Anthropic simultaneously signed a compute agreement with SpaceX giving it exclusive access to the Colossus 1 facility in Memphis — over 220,000 NVIDIA H100/H200/GB200 GPUs and 300 megawatts of capacity — driven by an 80-fold revenue surge in a single quarter that overwhelmed Anthropic's existing infrastructure. Anthropic also expressed interest in extending the partnership to gigawatt-scale orbital compute with SpaceX.",
      "Elon Musk anunciou em 6 de Maio de 2026 que a xAI seria dissolvida como empresa independente e rebatizada SpaceXAI, citando o crescimento rápido e o foco em segurança da Anthropic como fatores na sua mudança de visão. A Anthropic simultaneamente firmou um acordo de computação com a SpaceX dando acesso exclusivo ao cluster Colossus 1 em Memphis — mais de 220.000 GPUs NVIDIA H100/H200/GB200 e 300 megawatts de capacidade — impulsionado por um aumento de receita de 80× em um único trimestre que sobrecarregou a infraestrutura existente da Anthropic. A Anthropic também demonstrou interesse em estender a parceria para computação orbital em escala de gigawatt com a SpaceX.",
    ),
    tags: ["Anthropic", "xAI", "SpaceX", "Compute", "Colossus", "Elon Musk", "Infrastructure"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://x.ai/news/anthropic-compute-partnership",
  },

  // ── Auto-updated 2026-05-18 ────────────────────────────────────────────

  {
    id: "mistral-medium-3-5",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 1,
    title: l(
      "Mistral Medium 3.5 — 128B Open-Weight Model With 77.6% SWE-bench",
      "Mistral Medium 3.5 — Modelo open-weight de 128B com 77,6% no SWE-bench",
    ),
    summary: l(
      "Mistral AI released Medium 3.5, a 128-billion-parameter dense model with a 256,000-token context window, scoring 77.6% on SWE-bench Verified and unifying instruction-following, reasoning, coding, and vision in a single set of weights. The model was released with open weights under a modified MIT license and priced at $1.50/$7.50 per million input/output tokens via API. Mistral simultaneously launched Work Mode in Le Chat — an agentic interface powered by Medium 3.5 that executes multi-step workflows across connected tools in parallel.",
      "A Mistral AI lançou o Medium 3.5, modelo denso de 128 bilhões de parâmetros com janela de contexto de 256.000 tokens, pontuando 77,6% no SWE-bench Verified e unificando seguimento de instrução, raciocínio, código e visão em um único conjunto de pesos. O modelo foi liberado com pesos abertos sob licença MIT modificada e precificado em US$ 1,50/US$ 7,50 por milhão de tokens de entrada/saída via API. A Mistral lançou simultaneamente o Work Mode no Le Chat — uma interface agêntica movida pelo Medium 3.5 que executa fluxos multi-passo entre ferramentas conectadas em paralelo.",
    ),
    tags: ["Mistral AI", "Medium 3.5", "128B", "Open Weights", "SWE-bench", "Agents"],
    significance: "major",
    provider: "Mistral AI",
    providerColor: "#ff7000",
    url: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5",
  },
  {
    id: "microsoft-agent-365-ga",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 1,
    title: l(
      "Microsoft Agent 365 Generally Available — Enterprise AI Agent Governance",
      "Microsoft Agent 365 disponível geralmente — Governança corporativa de agentes",
    ),
    summary: l(
      "Microsoft made Agent 365 generally available on May 1, 2026, introducing enterprise-grade visibility, governance, and security controls for AI agent fleets at $15 per user per month. The platform extends Microsoft Entra network controls to Copilot Studio agents and locally-running agents, enabling IT teams to identify unsanctioned AI usage, restrict connections to approved destinations, and block prompt-injection attacks. Agent 365 is bundled into the new Microsoft 365 E7 tier alongside Copilot and the full Microsoft 365 E5 suite.",
      "A Microsoft tornou o Agent 365 geralmente disponível em 1 de Maio de 2026, trazendo visibilidade, governança e controles de segurança de nível corporativo para frotas de agentes de IA a US$ 15 por usuário/mês. A plataforma estende os controles de rede do Microsoft Entra para agentes do Copilot Studio e agentes rodando localmente, permitindo a TI identificar uso não sancionado de IA, restringir conexões a destinos aprovados e bloquear ataques de prompt-injection. O Agent 365 vem bundled no novo tier Microsoft 365 E7 junto com Copilot e a suíte Microsoft 365 E5 completa.",
    ),
    tags: ["Microsoft", "Agent 365", "Enterprise", "Governance", "Security", "Copilot"],
    significance: "major",
    provider: "Microsoft",
    providerColor: "#0078d4",
    url: "https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/",
  },

  // ── Auto-updated 2026-05-18 (run 2) ──────────────────────────────────────

  {
    id: "caisi-frontier-labs",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 5,
    title: l(
      "All Five Frontier AI Labs Now Under US Government Pre-Deployment Review",
      "Todos os cinco labs de fronteira agora sob revisão pré-deploy do governo dos EUA",
    ),
    summary: l(
      "The US Department of Commerce's Center for AI Standards and Innovation finalized pre-deployment evaluation agreements with Google DeepMind, Microsoft, and xAI on May 5, 2026, joining OpenAI and Anthropic in a program that has now completed more than 40 frontier model assessments. Under the agreements, every major model from these labs must undergo government safety and security evaluation before public release. The expansion marks the clearest signal yet that pre-deployment government review is becoming a baseline expectation for frontier AI development in the United States.",
      "O Center for AI Standards and Innovation do Departamento de Comércio dos EUA finalizou acordos de avaliação pré-deploy com Google DeepMind, Microsoft e xAI em 5 de Maio de 2026, juntando-se a OpenAI e Anthropic em um programa que já completou mais de 40 avaliações de modelos de fronteira. Pelos acordos, todo modelo importante desses labs precisa passar por avaliação de segurança do governo antes do lançamento público. A expansão é o sinal mais claro até agora de que revisão governamental pré-deploy está virando expectativa-padrão para desenvolvimento de IA de fronteira nos EUA.",
    ),
    tags: ["Regulation", "CAISI", "Google", "Microsoft", "xAI", "Safety", "Policy"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html",
  },
  {
    id: "claude-small-business",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 13,
    title: l(
      "Claude for Small Business — 15 Agentic Workflows Across Core Business Tools",
      "Claude for Small Business — 15 fluxos agênticos para as principais ferramentas de negócio",
    ),
    summary: l(
      "Anthropic launched Claude for Small Business on May 13, 2026, shipping 15 ready-to-run agentic workflows spanning finance, operations, sales, marketing, HR, and customer service, with native connectors for QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, Microsoft 365, and Slack. The workflows automate recurring tasks including payroll planning, month-end close, invoice chasing, lead triage, contract review, and cash-flow monitoring. Existing Claude Team and Enterprise subscribers get access at no additional cost, with the agent reusing the user's existing permissions on each connected application.",
      "A Anthropic lançou o Claude for Small Business em 13 de Maio de 2026, entregando 15 fluxos agênticos prontos para uso cobrindo finanças, operações, vendas, marketing, RH e atendimento ao cliente, com conectores nativos para QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, Microsoft 365 e Slack. Os fluxos automatizam tarefas recorrentes como planejamento de folha, fechamento de mês, cobrança de faturas, triagem de leads, revisão de contratos e monitoramento de fluxo de caixa. Assinantes existentes do Claude Team e Enterprise ganham acesso sem custo adicional, com o agente reusando as permissões existentes do usuário em cada aplicação conectada.",
    ),
    tags: ["Anthropic", "Claude", "Agents", "Small Business", "QuickBooks", "Automation"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://www.anthropic.com/news/claude-for-small-business",
  },
  {
    id: "gemini-3-5-flash-io2026",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 19,
    title: l(
      "Gemini 3.5 Flash — Google I/O 2026 Flagship Beats 3.1 Pro on Coding and Agents",
      "Gemini 3.5 Flash — Flagship do Google I/O 2026 supera o 3.1 Pro em código e agentes",
    ),
    summary: l(
      "Google launched Gemini 3.5 Flash at Google I/O on May 19, 2026 as the first model in the Gemini 3.5 family, immediately becoming the default model in the Gemini app and AI Mode in Google Search. The model outperforms Gemini 3.1 Pro on coding and agentic benchmarks — Terminal-Bench 2.1 at 76.2%, MCP Atlas at 83.6%, CharXiv Reasoning at 84.2% — while running 4× faster in output tokens per second. API pricing is $1.50 per million input tokens and $9.00 per million output tokens, approximately 40% cheaper than Gemini 3.1 Pro. Gemini 3.5 Pro was previewed as coming in June 2026.",
      "A Google lançou o Gemini 3.5 Flash no Google I/O em 19 de Maio de 2026 como primeiro modelo da família Gemini 3.5, virando imediatamente o modelo padrão no app Gemini e no AI Mode da Google Search. O modelo supera o Gemini 3.1 Pro em benchmarks de código e agentes — Terminal-Bench 2.1 a 76,2%, MCP Atlas a 83,6%, CharXiv Reasoning a 84,2% — rodando 4× mais rápido em tokens de saída por segundo. O preço de API é US$ 1,50 por milhão de tokens de entrada e US$ 9,00 por milhão de tokens de saída, cerca de 40% mais barato que o Gemini 3.1 Pro. O Gemini 3.5 Pro foi previewed para Junho de 2026.",
    ),
    tags: ["Google", "Gemini 3.5", "Google I/O", "Coding", "Agents", "Benchmark"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://www.digit.in/features/general/google-io-2026-gemini-35-to-ai-smart-glasses-everything-that-was-announced.html",
  },

  {
    id: "google-search-ai-mode-overhaul",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 19,
    title: l(
      "Google Search's Biggest Redesign in 25 Years — AI Agents and Generative UI",
      "Maior redesign do Google Search em 25 anos — Agentes de IA e UI generativa",
    ),
    summary: l(
      "Google unveiled a complete AI overhaul of Search at Google I/O on May 19, 2026, described as the biggest change to the search box in over 25 years. The new intelligent search box accepts text, images, files, videos, and Chrome tabs as inputs; agentic 'information agents' launching in summer 2026 will monitor the web continuously and alert users to changes. Generative UI, powered by Gemini 3.5 Flash, allows Search to dynamically produce custom interfaces, simulations, graphs, and mini-apps in response to queries. AI Mode already surpassed one billion monthly users with query volumes more than doubling every quarter since launch.",
      "A Google revelou uma reformulação completa de IA no Search no Google I/O em 19 de Maio de 2026, descrita como a maior mudança da caixa de busca em mais de 25 anos. A nova caixa inteligente aceita texto, imagens, arquivos, vídeos e abas do Chrome como entrada; 'agentes de informação' agênticos previstos para o verão (HN) de 2026 vão monitorar a web continuamente e alertar usuários sobre mudanças. A UI generativa, movida pelo Gemini 3.5 Flash, permite que o Search produza dinamicamente interfaces customizadas, simulações, gráficos e mini-apps em resposta a queries. O AI Mode já ultrapassou um bilhão de usuários mensais com volume de queries mais que dobrando a cada trimestre desde o lançamento.",
    ),
    tags: ["Google", "Search", "AI Mode", "Agents", "Generative UI", "Google I/O", "Gemini"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://blog.google/products-and-platforms/products/search/search-io-2026/",
  },

  // ── Auto-updated 2026-05-20 ────────────────────────────────────────────

  {
    id: "gemini-spark-agent-io2026",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 19,
    title: l(
      "Gemini Spark — Google's 24/7 AI Agent Launches at Google I/O 2026",
      "Gemini Spark — Agente de IA 24/7 da Google é lançado no Google I/O 2026",
    ),
    summary: l(
      "Google announced Gemini Spark at Google I/O on May 19, 2026 — a cloud-based AI agent that runs continuously in the background, reasoning across connected apps and taking actions on behalf of users. Spark integrates with Gmail, Docs, Uber, OpenTable, Lyft, Zillow, and dozens of third-party services, enabling autonomous multi-step workflows such as booking restaurants, tracking packages, and organizing calendar events. Beta access is included with the new Google AI Ultra subscription at $100 per month, rolling out first to trusted testers.",
      "A Google anunciou o Gemini Spark no Google I/O em 19 de Maio de 2026 — um agente de IA na nuvem que roda continuamente em segundo plano, raciocinando entre apps conectados e executando ações em nome dos usuários. O Spark integra com Gmail, Docs, Uber, OpenTable, Lyft, Zillow e dezenas de serviços de terceiros, habilitando fluxos autônomos multi-passo como reservar restaurantes, rastrear encomendas e organizar eventos de calendário. O acesso beta vem incluído na nova assinatura Google AI Ultra a US$ 100 por mês, com rollout inicial para trusted testers.",
    ),
    tags: ["Google", "Gemini Spark", "Google I/O", "Agents", "Automation", "AI Ultra"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html",
  },
  {
    id: "gemini-omni-io2026",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 19,
    title: l(
      "Gemini Omni — Google's Unified Video-Image Generation Model Unveiled",
      "Gemini Omni — Modelo unificado de geração de vídeo e imagem da Google é revelado",
    ),
    summary: l(
      "Google DeepMind CEO Demis Hassabis unveiled Gemini Omni at Google I/O 2026, a multimodal model that unifies text, image, and video generation in a single set of weights — the first top-tier AI system to do so. Omni supports conversational video editing via voice commands, allowing users to transform uploaded footage by adjusting characters, backgrounds, and framing in real time. The initial release, Gemini Omni Flash, is grounded in real-world knowledge via Google Search and is planned for launch in summer 2026.",
      "O CEO da Google DeepMind, Demis Hassabis, revelou o Gemini Omni no Google I/O 2026, modelo multimodal que unifica geração de texto, imagem e vídeo num único conjunto de pesos — primeiro sistema top-tier a fazer isso. O Omni suporta edição conversacional de vídeo via comandos de voz, permitindo aos usuários transformar footage enviado ajustando personagens, planos de fundo e enquadramento em tempo real. O lançamento inicial, Gemini Omni Flash, é ancorado em conhecimento do mundo real via Google Search e está planejado para o verão (HN) de 2026.",
    ),
    tags: ["Google", "Gemini Omni", "Google I/O", "Video Generation", "Multimodal", "DeepMind"],
    significance: "major",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://www.businesstoday.in/technology/artificial-intelligence/story/google-io-2026-google-unveils-gemini-omni-ai-video-editing-model-532350-2026-05-19",
  },
  {
    id: "google-samsung-xr-glasses",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 19,
    title: l(
      "Google and Samsung Unveil Gemini-Powered Android XR Smart Glasses",
      "Google e Samsung revelam smart glasses Android XR movidos por Gemini",
    ),
    summary: l(
      "Google and Samsung revealed the first Android XR smart glasses at Google I/O 2026, with eyewear frames designed by Gentle Monster and Warby Parker for fall 2026 availability. The two-tier lineup includes audio-only glasses with cameras and microphones for all-day wear, and an optional in-lens display variant for private contextual information. Powered by Gemini, the glasses support live translation, navigation, calls, messaging, and real-time visual assistance, activated by voice or a tap on the frame.",
      "A Google e a Samsung revelaram os primeiros smart glasses Android XR no Google I/O 2026, com armações desenhadas pela Gentle Monster e Warby Parker para disponibilidade no outono (HN) de 2026. A linha em dois níveis inclui óculos só de áudio com câmeras e microfones para uso o dia todo, e uma variante opcional com display in-lens para informação contextual privada. Movidos por Gemini, os óculos suportam tradução ao vivo, navegação, chamadas, mensagens e assistência visual em tempo real, ativados por voz ou toque na armação.",
    ),
    tags: ["Google", "Samsung", "Android XR", "Smart Glasses", "Wearables", "Gemini", "Google I/O"],
    significance: "notable",
    provider: "Google",
    providerColor: "#4285f4",
    url: "https://www.techradar.com/news/live/google-io-2026-live",
  },
  {
    id: "anthropic-dreaming-agents",
    date: l("May 2026", "Mai 2026"),
    dateNum: 202605,
    dateDay: 6,
    title: l(
      "Anthropic Dreaming — Claude Agents Now Self-Improve Between Sessions",
      "Anthropic Dreaming — Agentes Claude agora se autoaperfeiçoam entre sessões",
    ),
    summary: l(
      "Anthropic launched Dreaming on May 6, 2026, a scheduled maintenance layer that reviews an agent's past sessions, extracts patterns across them, and curates memory stores so agents improve over time without modifying model weights. Supported on Claude Opus 4.7 and Sonnet 4.6, Dreaming feeds up to 100 past sessions into a single 'dream' and surfaces recurring mistakes, convergent workflows, and team-wide preferences. Early adopter Harvey (legal AI) reported a 6× increase in task completion rates after implementing the feature; access is currently gated behind a request form.",
      "A Anthropic lançou o Dreaming em 6 de Maio de 2026, uma camada de manutenção agendada que revisa sessões passadas de um agente, extrai padrões entre elas e cura stores de memória para que os agentes melhorem ao longo do tempo sem modificar os pesos do modelo. Suportado no Claude Opus 4.7 e Sonnet 4.6, o Dreaming alimenta até 100 sessões passadas em um único 'sonho' e expõe erros recorrentes, fluxos convergentes e preferências do time. O early adopter Harvey (IA jurídica) reportou aumento de 6× na taxa de conclusão de tarefas após implementar o recurso; o acesso atualmente é mediado por um formulário de solicitação.",
    ),
    tags: ["Anthropic", "Claude", "Dreaming", "Agents", "Memory", "Self-Improvement"],
    significance: "major",
    provider: "Anthropic",
    providerColor: "#d97706",
    url: "https://venturebeat.com/technology/anthropic-introduces-dreaming-a-system-that-lets-ai-agents-learn-from-their-own-mistakes",
  },
];

// ── Derived exports ────────────────────────────────────────────────────────

/** Alias kept for component compatibility. */
export const NEWS_ITEMS = AI_NEWS;

export const NEWS_TAGS: string[] = Array.from(
  new Set(AI_NEWS.flatMap((item) => item.tags))
).sort();
