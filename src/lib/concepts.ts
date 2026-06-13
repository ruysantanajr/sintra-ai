/**
 * Concepts & Definitions — data schema.
 *
 * ─── HOW TO ADD A NEW CONCEPT ───────────────────────────────────────────────
 *
 *  1. Choose a unique `id`  (kebab-case, e.g. "vector-database")
 *  2. Pick a `category`     "fundamentals" | "models" | "tools" | "protocols"
 *  3. Write a `tagline`     ≤ 12 words, plain English, no jargon — as { en, "pt-BR" }
 *  4. Write `body`          Markdown, ~100-150 words; use **bold** for key terms
 *  5. Write an `analogy`    ≤ 50 words, zero jargon, real-world comparison
 *  6. Pick an `icon`        Single emoji that visually represents the idea
 *  7. Set `difficulty`      1 = anyone gets it · 2 = needs context · 3 = technical
 *  8. List `related`        IDs of the 2-4 most closely related concepts
 *  9. Set `addedAt`         ISO date string "YYYY-MM-DD" — when this was added
 * 10. Optionally add `shortTerm` (acronym badge) and `learnMore` (URL)
 *
 *  All `term`, `tagline`, `body`, `analogy` fields use LocalizedString:
 *  `{ en: "…", "pt-BR": "…" }`. If a translation is missing, the EN value is used.
 * ────────────────────────────────────────────────────────────────────────────
 */

import type { LocalizedString } from "./localized";

export type ConceptCategory = "fundamentals" | "models" | "tools" | "protocols";

export const CAT_META: Record<
  ConceptCategory,
  { label: LocalizedString; hex: string; summary: LocalizedString }
> = {
  fundamentals: {
    label:   { en: "Fundamentals", "pt-BR": "Fundamentos" },
    hex:     "#B6A6FF",
    summary: {
      en:      "Core ideas every AI user should know",
      "pt-BR": "Ideias-chave que todo usuário de IA deveria conhecer",
    },
  },
  models: {
    label:   { en: "Models & AI", "pt-BR": "Modelos & IA" },
    hex:     "#5EEAD4",
    summary: {
      en:      "How AI models work under the hood",
      "pt-BR": "Como os modelos de IA funcionam por dentro",
    },
  },
  tools: {
    label:   { en: "Tools & Agents", "pt-BR": "Ferramentas & Agentes" },
    hex:     "#F4C56A",
    summary: {
      en:      "Capabilities you can plug in and extend",
      "pt-BR": "Capacidades que você pode plugar e estender",
    },
  },
  protocols: {
    label:   { en: "Protocols", "pt-BR": "Protocolos" },
    hex:     "#6EE7A0",
    summary: {
      en:      "Standards that connect AI to the world",
      "pt-BR": "Padrões que conectam a IA ao mundo",
    },
  },
};

export const DIFF_LABEL: Record<1 | 2 | 3, LocalizedString> = {
  1: { en: "Beginner",     "pt-BR": "Iniciante" },
  2: { en: "Practitioner", "pt-BR": "Praticante" },
  3: { en: "Technical",    "pt-BR": "Técnico" },
};

export const DIFF_HEX: Record<1 | 2 | 3, string> = {
  1: "#6EE7A0",
  2: "#5EEAD4",
  3: "#B6A6FF",
};

export interface Concept {
  /** Unique identifier — kebab-case. Used for cross-linking. */
  id: string;
  /** Full display name, e.g. "Large Language Model" */
  term: LocalizedString;
  /** Abbreviation shown as a secondary badge, e.g. "LLM". Optional. */
  shortTerm?: string;
  /** One of the four concept categories */
  category: ConceptCategory;
  /** One-liner in plain English, ≤ 12 words */
  tagline: LocalizedString;
  /** ~100-150 word explanation in Markdown. Bold key terms with **term**. */
  body: LocalizedString;
  /** Real-world analogy ≤ 50 words, zero jargon */
  analogy: LocalizedString;
  /** Single emoji used as the concept's visual anchor */
  icon: string;
  /** Complexity level: 1 anyone · 2 needs context · 3 technical */
  difficulty: 1 | 2 | 3;
  /** IDs of closely related concepts (2-4 recommended) */
  related: string[];
  /** ISO date string "YYYY-MM-DD" — when this concept entry was added */
  addedAt: string;
  /** Optional external URL for deeper reading */
  learnMore?: string;
}

export const CONCEPTS: Concept[] = [
  // ── Fundamentals ────────────────────────────────────────────────────────
  {
    id:         "machine-learning",
    term:       { en: "Machine Learning", "pt-BR": "Aprendizado de Máquina" },
    category:   "fundamentals",
    tagline:    {
      en:      "Teaching computers to learn from examples, not rules.",
      "pt-BR": "Ensinar computadores a aprender com exemplos, não com regras.",
    },
    icon:       "🧠",
    difficulty: 1,
    body: {
      en: `Machine Learning (ML) is a branch of AI where systems improve by studying patterns in data — without being explicitly programmed for each scenario.

Instead of writing rules like "if price drops 10% in 5 days, sell," you feed historical data with labels ("went up" / "went down") and the model discovers its own patterns.

Three core flavours: **Supervised learning** (learns from labeled examples), **Unsupervised learning** (finds hidden clusters), and **Reinforcement learning** (learns via rewards and penalties). Most tools you use today — spam filters, recommendation engines, image recognition — run on supervised ML.`,
      "pt-BR": `Aprendizado de Máquina (ML) é um ramo da IA em que os sistemas evoluem estudando padrões em dados — sem serem explicitamente programados para cada cenário.

Em vez de escrever regras tipo "se o preço cair 10% em 5 dias, venda", você alimenta o modelo com dados históricos rotulados ("subiu" / "desceu") e ele descobre os próprios padrões.

Três sabores principais: **Aprendizado supervisionado** (aprende com exemplos rotulados), **Aprendizado não supervisionado** (encontra agrupamentos ocultos) e **Aprendizado por reforço** (aprende por recompensas e punições). A maioria das ferramentas que você usa hoje — filtros de spam, motores de recomendação, reconhecimento de imagem — roda em ML supervisionado.`,
    },
    analogy: {
      en:      "Like training a dog: you reward correct behaviour repeatedly until the dog generalises the rule on its own — no instruction manual required.",
      "pt-BR": "Como adestrar um cachorro: você recompensa o comportamento certo repetidamente até que o cão generalize a regra sozinho — sem precisar de manual.",
    },
    related: ["llm", "fine-tuning", "embeddings"],
    addedAt: "2025-05-17",
  },

  {
    id:         "tokens",
    term:       { en: "Tokens", "pt-BR": "Tokens" },
    category:   "fundamentals",
    tagline:    {
      en:      "The tiny chunks of text an AI reads, one at a time.",
      "pt-BR": "Os pedacinhos de texto que a IA lê, um por vez.",
    },
    icon:       "🪙",
    difficulty: 1,
    body: {
      en: `Before an LLM processes text, it breaks it into **tokens** — small fragments typically representing one word, part of a word, or a punctuation mark. "Unbelievable" might become ["un", "believ", "able"] — three tokens.

Models don't see letters or words; they see token IDs. The entire prompt and response are sequences of these IDs.

Token count matters for two reasons: **cost** — most APIs bill per 1,000 tokens — and **limits** — text must fit within the model's context window. Rule of thumb: ~1 token ≈ 0.75 English words. A page of prose ≈ 500 tokens.`,
      "pt-BR": `Antes de processar texto, um LLM o quebra em **tokens** — pequenos fragmentos que geralmente representam uma palavra, parte de uma palavra ou um sinal de pontuação. "Inacreditável" pode virar ["ina", "creditá", "vel"] — três tokens.

Modelos não enxergam letras nem palavras; eles enxergam IDs de tokens. Todo o prompt e a resposta são sequências desses IDs.

A contagem de tokens importa por dois motivos: **custo** — a maioria das APIs cobra por 1.000 tokens — e **limites** — o texto precisa caber na janela de contexto do modelo. Regra prática: ~1 token ≈ 0,5 palavra em português. Uma página de texto ≈ 500 tokens.`,
    },
    analogy: {
      en:      "Like a musician reading sheet music note-by-note rather than hearing the whole symphony — the model processes token-by-token, building meaning step by step.",
      "pt-BR": "Como um músico lendo a partitura nota por nota em vez de ouvir a sinfonia inteira — o modelo processa token por token, construindo sentido passo a passo.",
    },
    related: ["context-window", "llm"],
    addedAt: "2025-05-17",
  },

  {
    id:         "prompt-engineering",
    term:       { en: "Prompt Engineering", "pt-BR": "Engenharia de Prompt" },
    category:   "fundamentals",
    tagline:    {
      en:      "The art of asking AI the right question in the right way.",
      "pt-BR": "A arte de fazer a pergunta certa para a IA, do jeito certo.",
    },
    icon:       "✨",
    difficulty: 1,
    body: {
      en: `**Prompt engineering** is the practice of crafting inputs to AI models to reliably get the output you need. A vague prompt gets a generic answer; a precise one gets an actionable result.

Core techniques:
- **Role-setting** — "You are a senior financial analyst…"
- **Few-shot examples** — showing 2-3 input/output pairs before your real request
- **Chain-of-thought** — "Think step by step before answering"
- **Output formatting** — "Respond only in JSON with keys: title, summary, tags"

Prompt engineering is less about magic words and more about communicating context, constraints, and expected format — the same clarity you'd use briefing a smart colleague.`,
      "pt-BR": `**Engenharia de prompt** é a prática de escrever entradas para modelos de IA de modo a obter a saída desejada de forma confiável. Um prompt vago gera uma resposta genérica; um prompt preciso gera um resultado acionável.

Técnicas principais:
- **Definição de papel** — "Você é um analista financeiro sênior…"
- **Exemplos few-shot** — mostrar 2-3 pares entrada/saída antes do pedido real
- **Cadeia de raciocínio (chain-of-thought)** — "Pense passo a passo antes de responder"
- **Formato de saída** — "Responda apenas em JSON com as chaves: titulo, resumo, tags"

Engenharia de prompt tem menos a ver com palavras mágicas e mais com comunicar contexto, restrições e formato esperado — a mesma clareza que você usaria ao instruir um colega capaz.`,
    },
    analogy: {
      en:      "The difference between asking a chef \"make me something\" vs. \"a light Mediterranean vegetarian dish for two, ready in 20 minutes.\"",
      "pt-BR": "A diferença entre pedir ao chef \"faça algo pra mim\" e \"um prato vegetariano mediterrâneo leve para duas pessoas, pronto em 20 minutos\".",
    },
    related: ["llm", "function-calling", "agents"],
    addedAt: "2025-05-17",
  },

  // ── Models & AI ──────────────────────────────────────────────────────────
  {
    id:         "llm",
    term:       { en: "Large Language Model", "pt-BR": "Modelo de Linguagem de Grande Escala" },
    shortTerm:  "LLM",
    category:   "models",
    tagline:    {
      en:      "AI trained on vast text to understand and generate language.",
      "pt-BR": "IA treinada em uma quantidade enorme de texto para entender e gerar linguagem.",
    },
    icon:       "⬡",
    difficulty: 2,
    body: {
      en: `A **Large Language Model** is a neural network with billions of parameters trained on an enormous corpus of text — books, websites, code, papers. Through training it learns grammar, facts, reasoning patterns, and style, all encoded as numeric weights.

At inference time you give it a prompt; it predicts the most likely continuation one **token** at a time. Despite that simple mechanism, emergent capabilities — summarising, coding, reasoning, translating — are profound.

"Large" refers to parameter count. More parameters generally means broader knowledge and more nuanced understanding, at the cost of compute and latency.`,
      "pt-BR": `Um **Modelo de Linguagem de Grande Escala (LLM)** é uma rede neural com bilhões de parâmetros treinada em um corpus gigantesco de texto — livros, sites, código, artigos. No treinamento, ele aprende gramática, fatos, padrões de raciocínio e estilo, tudo codificado em pesos numéricos.

Na inferência, você dá um prompt; ele prevê a continuação mais provável, um **token** por vez. Apesar desse mecanismo simples, surgem capacidades profundas — resumir, programar, raciocinar, traduzir.

"Grande" se refere ao número de parâmetros. Mais parâmetros geralmente significam conhecimento mais amplo e compreensão mais sutil, ao custo de mais computação e latência.`,
    },
    analogy: {
      en:      "An LLM is like someone who has read the entire internet and can discuss any topic fluently — but hasn't lived any of it.",
      "pt-BR": "Um LLM é como alguém que leu a internet inteira e consegue falar com fluência sobre qualquer assunto — mas não viveu nada disso.",
    },
    related: ["tokens", "context-window", "prompt-engineering", "fine-tuning"],
    addedAt: "2025-05-17",
  },

  {
    id:         "context-window",
    term:       { en: "Context Window", "pt-BR": "Janela de Contexto" },
    category:   "models",
    tagline:    {
      en:      "How much text an AI can see and remember at once.",
      "pt-BR": "Quanto texto a IA consegue ver e lembrar de uma vez.",
    },
    icon:       "🪟",
    difficulty: 1,
    body: {
      en: `Every LLM has a **context window** — the maximum number of tokens it can process in a single interaction. Everything the model can "see" — your system prompt, conversation history, documents you paste in — must fit within this limit.

If the window is 128,000 tokens (~96,000 words) and your conversation exceeds that, earlier messages are dropped. The model has no memory of them.

Modern frontier models: GPT-4o supports 128K tokens, Claude 3.5 supports 200K. This is critical for analysing long documents, maintaining long conversations, or processing entire codebases.`,
      "pt-BR": `Todo LLM tem uma **janela de contexto** — o número máximo de tokens que ele consegue processar em uma única interação. Tudo o que o modelo pode "enxergar" — system prompt, histórico da conversa, documentos que você colou — precisa caber nesse limite.

Se a janela for de 128.000 tokens (~96.000 palavras) e sua conversa ultrapassar isso, as mensagens mais antigas são descartadas. O modelo não tem memória delas.

Modelos de fronteira modernos: GPT-4o suporta 128 mil tokens, Claude 3.5 suporta 200 mil. Isso é crítico para analisar documentos longos, manter conversas extensas ou processar bases de código inteiras.`,
    },
    analogy: {
      en:      "The context window is like a whiteboard in the room. The AI can only reference what's written on it — once it fills up, you must erase something to write more.",
      "pt-BR": "A janela de contexto é como um quadro branco na sala. A IA só consegue consultar o que está escrito nele — quando enche, você precisa apagar algo para escrever mais.",
    },
    related: ["tokens", "llm", "rag"],
    addedAt: "2025-05-17",
  },

  {
    id:         "embeddings",
    term:       { en: "Embeddings", "pt-BR": "Embeddings" },
    category:   "models",
    tagline:    {
      en:      "Turning words and ideas into numbers that capture meaning.",
      "pt-BR": "Transformar palavras e ideias em números que capturam significado.",
    },
    icon:       "🗺️",
    difficulty: 3,
    body: {
      en: `**Embeddings** convert text — words, sentences, documents — into dense numeric vectors (lists of 768–3072 numbers) where semantic similarity maps to geometric closeness. "King" and "Queen" end up nearby in this space; "King" and "Invoice" are far apart.

This enables powerful operations: search by meaning (not keyword), cluster similar documents, detect anomalies, and power the retrieval step in RAG systems.

Embedding models (e.g. OpenAI \`text-embedding-ada-002\`, Cohere \`embed-v3\`) are separate from generative models — smaller, faster, and cheap to run at scale.`,
      "pt-BR": `**Embeddings** convertem texto — palavras, frases, documentos — em vetores numéricos densos (listas de 768 a 3072 números) em que similaridade semântica equivale a proximidade geométrica. "Rei" e "Rainha" ficam próximos nesse espaço; "Rei" e "Nota Fiscal" ficam distantes.

Isso habilita operações poderosas: busca por significado (e não por palavra-chave), agrupamento de documentos similares, detecção de anomalias e a etapa de recuperação em sistemas RAG.

Modelos de embedding (ex.: OpenAI \`text-embedding-ada-002\`, Cohere \`embed-v3\`) são separados dos modelos generativos — menores, mais rápidos e baratos para rodar em escala.`,
    },
    analogy: {
      en:      "Like placing concepts on a map — related ideas live close together, unrelated ones are distant. Ask 'what's nearest to Paris?' and find London, Berlin, Rome.",
      "pt-BR": "Como colocar conceitos em um mapa — ideias relacionadas ficam pertinho, as não relacionadas ficam longe. Pergunte 'o que está mais próximo de Paris?' e você encontra Londres, Berlim, Roma.",
    },
    related: ["rag", "machine-learning", "llm"],
    addedAt: "2025-05-17",
  },

  {
    id:         "rag",
    term:       { en: "Retrieval-Augmented Generation", "pt-BR": "Geração Aumentada por Recuperação" },
    shortTerm:  "RAG",
    category:   "models",
    tagline:    {
      en:      "Giving the AI access to your documents before it answers.",
      "pt-BR": "Dar à IA acesso aos seus documentos antes que ela responda.",
    },
    icon:       "📚",
    difficulty: 2,
    body: {
      en: `**RAG** combines a search step with a generation step. Instead of relying solely on training data, the model first retrieves relevant passages from an external knowledge base, then generates an answer grounded in those passages.

Pipeline: user question → embed query → vector search over your documents → top-K relevant chunks → insert into context → LLM generates answer.

This solves two core LLM limitations: **knowledge cutoffs** (training data ends at a date) and **hallucination** (the model can now cite real sources). It's the backbone of most enterprise AI search and customer-support systems.`,
      "pt-BR": `**RAG** combina uma etapa de busca com uma etapa de geração. Em vez de depender apenas dos dados de treinamento, o modelo primeiro recupera trechos relevantes de uma base de conhecimento externa e depois gera uma resposta apoiada nesses trechos.

Pipeline: pergunta do usuário → embedding da consulta → busca vetorial sobre seus documentos → top-K trechos relevantes → injeção no contexto → LLM gera a resposta.

Isso resolve duas limitações centrais dos LLMs: **corte de conhecimento** (os dados de treinamento têm uma data limite) e **alucinação** (o modelo passa a poder citar fontes reais). É a espinha dorsal da maioria dos sistemas corporativos de busca e atendimento com IA.`,
    },
    analogy: {
      en:      "Like an open-book exam instead of a closed one — the model looks things up in your documents rather than guessing from memory.",
      "pt-BR": "Como uma prova com consulta em vez de uma sem consulta — o modelo procura nos seus documentos em vez de chutar de memória.",
    },
    related: ["embeddings", "context-window", "llm", "connectors"],
    addedAt: "2025-05-17",
  },

  {
    id:         "fine-tuning",
    term:       { en: "Fine-tuning", "pt-BR": "Fine-tuning (Ajuste Fino)" },
    category:   "models",
    tagline:    {
      en:      "Specialising a general AI model on your specific data and style.",
      "pt-BR": "Especializar um modelo de IA genérico nos seus dados e no seu estilo.",
    },
    icon:       "🎯",
    difficulty: 3,
    body: {
      en: `**Fine-tuning** takes a pre-trained base model and continues training it on a smaller, task-specific dataset — nudging the model's weights toward your domain, tone, or format.

A customer-service fine-tune might train on thousands of resolved tickets. A legal model might train on firm-specific briefs and precedents. Result: the model responds in the right voice with the right terminology, without lengthy system prompts.

Modern efficient techniques (LoRA, QLoRA) make fine-tuning feasible on consumer GPUs by training only a small fraction of parameters. Fine-tuning isn't always necessary — often prompt engineering or RAG is cheaper and more flexible.`,
      "pt-BR": `**Fine-tuning** parte de um modelo base pré-treinado e continua o treinamento em um conjunto de dados menor, específico para a tarefa — puxando os pesos do modelo para o seu domínio, tom ou formato.

Um fine-tune de atendimento ao cliente pode ser treinado em milhares de chamados resolvidos. Um modelo jurídico pode treinar em peças e precedentes específicos do escritório. Resultado: o modelo responde com a voz certa e a terminologia certa, sem precisar de prompts de sistema enormes.

Técnicas eficientes modernas (LoRA, QLoRA) tornam o fine-tuning viável em GPUs de consumidor, treinando só uma pequena fração dos parâmetros. Fine-tuning nem sempre é necessário — muitas vezes engenharia de prompt ou RAG é mais barato e flexível.`,
    },
    analogy: {
      en:      "The base model is a brilliant new hire who knows a lot. Fine-tuning is their first 90 days immersed in your company's jargon, processes, and way of working.",
      "pt-BR": "O modelo base é um contratado brilhante que sabe muita coisa. O fine-tuning são os primeiros 90 dias dele imerso no jargão, nos processos e no jeito da sua empresa trabalhar.",
    },
    related: ["machine-learning", "llm", "prompt-engineering"],
    addedAt: "2025-05-17",
  },

  // ── Tools & Agents ───────────────────────────────────────────────────────
  {
    id:         "agents",
    term:       { en: "AI Agents", "pt-BR": "Agentes de IA" },
    category:   "tools",
    tagline:    {
      en:      "AI that plans and takes actions without you guiding every step.",
      "pt-BR": "IA que planeja e executa ações sem você guiar cada passo.",
    },
    icon:       "⚡",
    difficulty: 2,
    body: {
      en: `An **AI agent** is an LLM combined with a loop that lets it observe, plan, and act — autonomously — toward a goal. Instead of a single prompt → response, an agent can decompose a goal into subtasks, call tools (search, code execution, APIs), evaluate results, and iterate.

A coding agent might: read the failing test → examine relevant files → write a fix → run tests → check output → repeat until green.

Key components: a capable **LLM** (the brain), **tools** (capabilities it can invoke), a **memory** mechanism (context + vector store), and an **orchestration loop** that feeds observations back as new context.`,
      "pt-BR": `Um **agente de IA** é um LLM combinado com um loop que permite a ele observar, planejar e agir — de forma autônoma — em direção a uma meta. Em vez de um único prompt → resposta, um agente decompõe a meta em subtarefas, chama ferramentas (busca, execução de código, APIs), avalia resultados e itera.

Um agente de programação pode: ler o teste que falhou → examinar os arquivos relevantes → escrever uma correção → rodar os testes → checar a saída → repetir até passar.

Componentes principais: um **LLM** capaz (o cérebro), **ferramentas** (capacidades que ele pode invocar), um mecanismo de **memória** (contexto + banco vetorial) e um **loop de orquestração** que devolve observações como novo contexto.`,
    },
    analogy: {
      en:      "The difference between a consultant who gives a one-time answer vs. an employee who takes initiative, manages their own workflow, and reports back when done.",
      "pt-BR": "A diferença entre um consultor que dá uma resposta pontual e um funcionário que toma iniciativa, gerencia o próprio fluxo e te dá um retorno quando termina.",
    },
    related: ["llm", "function-calling", "skills", "mcp"],
    addedAt: "2025-05-17",
  },

  {
    id:         "skills",
    term:       { en: "Skills", "pt-BR": "Skills (Habilidades)" },
    category:   "tools",
    tagline:    {
      en:      "Pre-built capabilities you attach to an AI to extend what it can do.",
      "pt-BR": "Capacidades prontas que você pluga numa IA para ampliar o que ela faz.",
    },
    icon:       "🧩",
    difficulty: 2,
    body: {
      en: `**Skills** are pre-packaged, reusable AI capabilities — typically a combination of a system prompt template, tool definitions, and workflow logic — that extend a base model for a specific use case.

Examples: a "web research" skill grants the agent a search tool, browsing capability, and a structured output format. A "data analyst" skill adds code execution, chart generation, and summary templates.

In Claude Code, skills are invocable via \`/skill-name\` commands that run pre-defined agentic workflows. Platforms like Microsoft Copilot Studio expose them as modular add-ons you configure without writing code.`,
      "pt-BR": `**Skills** são capacidades de IA empacotadas e reutilizáveis — tipicamente uma combinação de template de system prompt, definições de ferramentas e lógica de fluxo — que estendem um modelo base para um caso de uso específico.

Exemplos: uma skill de "pesquisa na web" dá ao agente uma ferramenta de busca, capacidade de navegação e formato de saída estruturado. Uma skill de "analista de dados" adiciona execução de código, geração de gráficos e templates de resumo.

No Claude Code, skills são invocáveis via comandos \`/nome-da-skill\` que executam fluxos agênticos pré-definidos. Plataformas como o Microsoft Copilot Studio expõem skills como add-ons modulares configuráveis sem escrever código.`,
    },
    analogy: {
      en:      "Skills are like apps on a smartphone. The phone (base model) is capable on its own, but apps extend it with purpose-built tools for specific jobs.",
      "pt-BR": "Skills são como apps num smartphone. O celular (modelo base) já é capaz sozinho, mas os apps o estendem com ferramentas dedicadas para tarefas específicas.",
    },
    related: ["agents", "connectors", "function-calling"],
    addedAt: "2025-05-17",
  },

  {
    id:         "connectors",
    term:       { en: "Connectors", "pt-BR": "Conectores" },
    category:   "tools",
    tagline:    {
      en:      "Bridges that let AI read from and write to your apps and services.",
      "pt-BR": "Pontes que permitem à IA ler e escrever nos seus apps e serviços.",
    },
    icon:       "↔️",
    difficulty: 2,
    body: {
      en: `**Connectors** are integration modules that link an AI system to external data sources and services — CRMs, databases, file stores, communication platforms, ERPs. They handle authentication, data formatting, and the translation layer between the AI and the external system.

In enterprise AI platforms, connectors let the model ingest live data from Salesforce, write calendar events to Google Calendar, send Slack messages, or query a PostgreSQL database.

Without connectors, AI is isolated to its training data and your manual copy-paste. Connectors are closely related to MCP servers — an MCP server is one standardised implementation of a connector.`,
      "pt-BR": `**Conectores** são módulos de integração que ligam um sistema de IA a fontes de dados e serviços externos — CRMs, bancos de dados, sistemas de arquivos, plataformas de comunicação, ERPs. Eles cuidam da autenticação, da formatação dos dados e da camada de tradução entre a IA e o sistema externo.

Em plataformas corporativas de IA, conectores permitem que o modelo consuma dados ao vivo do Salesforce, escreva eventos no Google Agenda, envie mensagens no Slack ou consulte um PostgreSQL.

Sem conectores, a IA fica isolada nos seus dados de treinamento e no copia-e-cola manual. Conectores são primos próximos dos servidores MCP — um servidor MCP é uma implementação padronizada de conector.`,
    },
    analogy: {
      en:      "Connectors are the power outlets that let an AI's capabilities flow into the systems and apps your business already runs on.",
      "pt-BR": "Conectores são as tomadas que deixam as capacidades da IA fluírem para os sistemas e apps que sua empresa já usa no dia a dia.",
    },
    related: ["mcp", "api", "agents", "rag"],
    addedAt: "2025-05-17",
  },

  // ── Protocols ────────────────────────────────────────────────────────────
  {
    id:         "api",
    term:       { en: "API", "pt-BR": "API" },
    shortTerm:  "API",
    category:   "protocols",
    tagline:    {
      en:      "A standardised way for software to talk to other software.",
      "pt-BR": "Uma forma padronizada de um software conversar com outro.",
    },
    icon:       "🔌",
    difficulty: 1,
    body: {
      en: `An **API** (Application Programming Interface) is a contract that defines how two pieces of software communicate. It specifies the available endpoints, what inputs to send, and what outputs to expect — without exposing any internal code.

When you use a weather app, it calls a weather service API. When you query an AI, your code sends an HTTP request to the model's API with your prompt, and receives a JSON response.

For AI products, key APIs are the model inference APIs (Anthropic, OpenAI, Google) and tool APIs that agents can call — search, databases, CRMs. Every connector, skill, and MCP server ultimately communicates through APIs.`,
      "pt-BR": `Uma **API** (Application Programming Interface, ou Interface de Programação de Aplicações) é um contrato que define como dois softwares se comunicam. Ela especifica os endpoints disponíveis, quais entradas enviar e quais saídas esperar — sem expor o código interno.

Quando você usa um app de previsão do tempo, ele chama a API de um serviço meteorológico. Quando você consulta uma IA, seu código envia uma requisição HTTP para a API do modelo com o seu prompt e recebe uma resposta JSON.

Em produtos de IA, as APIs-chave são as APIs de inferência dos modelos (Anthropic, OpenAI, Google) e as APIs de ferramentas que os agentes podem chamar — busca, bancos de dados, CRMs. Todo conector, skill e servidor MCP, no fim, se comunica via APIs.`,
    },
    analogy: {
      en:      "An API is a restaurant menu. You choose items (endpoints), provide your order (request), and receive your meal (response) — without entering the kitchen (source code).",
      "pt-BR": "Uma API é o cardápio de um restaurante. Você escolhe itens (endpoints), faz seu pedido (requisição) e recebe seu prato (resposta) — sem precisar entrar na cozinha (código-fonte).",
    },
    related: ["mcp", "function-calling", "connectors"],
    addedAt: "2025-05-17",
  },

  {
    id:         "mcp",
    term:       { en: "Model Context Protocol", "pt-BR": "Model Context Protocol (Protocolo de Contexto de Modelo)" },
    shortTerm:  "MCP",
    category:   "protocols",
    tagline:    {
      en:      "A universal standard for AI to connect to any tool or data source.",
      "pt-BR": "Um padrão universal para a IA se conectar a qualquer ferramenta ou fonte de dados.",
    },
    icon:       "🔗",
    difficulty: 3,
    body: {
      en: `**MCP** (Model Context Protocol) is an open standard published by Anthropic that defines how AI models communicate with external tools, databases, and services — consistently and interoperably.

Before MCP, every AI integration was bespoke: custom code per tool, non-transferable across systems. MCP standardises the interface: any MCP-compatible AI can connect to any MCP server — file systems, databases, GitHub, Slack, browsers, custom APIs — without custom glue code.

An MCP server exposes **resources** (data the AI can read), **tools** (actions the AI can invoke), and **prompts** (templates). Think of it as USB-C for AI integrations.`,
      "pt-BR": `O **MCP** (Model Context Protocol) é um padrão aberto publicado pela Anthropic que define como modelos de IA se comunicam com ferramentas, bancos de dados e serviços externos — de forma consistente e interoperável.

Antes do MCP, toda integração de IA era artesanal: código sob medida por ferramenta, não transferível entre sistemas. O MCP padroniza a interface: qualquer IA compatível com MCP pode se conectar a qualquer servidor MCP — sistemas de arquivos, bancos, GitHub, Slack, navegadores, APIs próprias — sem código de cola customizado.

Um servidor MCP expõe **resources** (dados que a IA pode ler), **tools** (ações que a IA pode invocar) e **prompts** (templates). Pense nele como o USB-C das integrações de IA.`,
    },
    analogy: {
      en:      "Like USB-C — it lets any device plug into any charger. MCP lets any AI plug into any data source without custom adapters.",
      "pt-BR": "Como o USB-C — qualquer dispositivo pluga em qualquer carregador. O MCP deixa qualquer IA plugar em qualquer fonte de dados sem adaptadores específicos.",
    },
    related: ["api", "connectors", "function-calling", "agents"],
    addedAt: "2025-05-17",
    learnMore: "https://modelcontextprotocol.io",
  },

  {
    id:         "function-calling",
    term:       { en: "Function Calling", "pt-BR": "Function Calling (Uso de Ferramentas)" },
    shortTerm:  "Tool Use",
    category:   "protocols",
    tagline:    {
      en:      "Letting an AI invoke real code and APIs mid-reasoning.",
      "pt-BR": "Deixar a IA chamar código e APIs reais no meio do raciocínio.",
    },
    icon:       "🛠️",
    difficulty: 2,
    body: {
      en: `**Function calling** (also called tool use) is a model capability where the LLM emits a structured "call this function with these arguments" signal mid-response — rather than just generating prose. The application runs the function, returns the result, and the model incorporates it into its next prediction.

This is what makes agents possible: the model can call a search API, read results, run a calculation, check the output, and weave everything into a coherent response — all in one turn.

Most frontier models support this: Anthropic calls it "tool use," OpenAI calls it "function calling." Both expose it via API as a special message type.`,
      "pt-BR": `**Function calling** (também chamado de "tool use") é uma capacidade do modelo em que o LLM emite, no meio da resposta, um sinal estruturado "chame esta função com estes argumentos" — em vez de apenas gerar texto. A aplicação executa a função, devolve o resultado, e o modelo incorpora isso na próxima previsão.

É o que torna os agentes possíveis: o modelo pode chamar uma API de busca, ler os resultados, rodar um cálculo, checar a saída e juntar tudo numa resposta coerente — em um único turno.

A maior parte dos modelos de fronteira suporta isso: a Anthropic chama de "tool use", a OpenAI chama de "function calling". Ambos expõem o recurso via API como um tipo especial de mensagem.`,
    },
    analogy: {
      en:      "Like a consultant who mid-meeting says \"hold on, let me pull the live data\" — checks real numbers, then continues the conversation with actual facts.",
      "pt-BR": "Como um consultor que, no meio da reunião, diz \"espera, deixa eu puxar os dados ao vivo\" — confere números reais e depois segue a conversa com fatos concretos.",
    },
    related: ["agents", "api", "mcp", "skills"],
    addedAt: "2025-05-17",
  },
];
