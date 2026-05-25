import { l, type LocalizedString } from "./localized";

export interface Milestone {
  id: string;
  era: string;
  year: string;
  yearNum: number;
  title: LocalizedString;
  emoji: string;
  by?: LocalizedString;
  desc: LocalizedString;
  significance: LocalizedString;
  tags: string[];
  links?: { label: LocalizedString; url: string }[];
}

export interface Era {
  id: string;
  label: LocalizedString;
  years: string;
  icon: string;
  color: string;
}

export const ERAS: Era[] = [
  { id: "ancient",  label: l("Ancient & Pre-Digital",       "Antiguidade & Pré-Digital"),    years: "~20,000 BC – 1843",  icon: "🏛️", color: "#f59e0b" },
  { id: "theory",   label: l("Information Theory",          "Teoria da Informação"),         years: "1936 – 1955",        icon: "📐", color: "#06b6d4" },
  { id: "ai1",      label: l("Birth of AI",                 "Nascimento da IA"),             years: "1951 – 1979",        icon: "🤖", color: "#a78bfa" },
  { id: "hardware", label: l("Hardware Revolution",         "Revolução do Hardware"),        years: "1971 – 1995",        icon: "🔧", color: "#10b981" },
  { id: "ml",       label: l("Machine Learning Era",        "Era do Machine Learning"),      years: "1986 – 2012",        icon: "🧠", color: "#ec4899" },
  { id: "deep",     label: l("Deep Learning Revolution",    "Revolução do Deep Learning"),   years: "2012 – 2020",        icon: "🔬", color: "#9F8CFF" },
  { id: "gen",      label: l("Generative AI Explosion",     "Explosão da IA Generativa"),    years: "2021 – 2023",        icon: "🚀", color: "#ef4444" },
  { id: "agents",   label: l("Agentic AI & Frontier",       "IA Agêntica & Fronteira"),      years: "2024 – Now",         icon: "⚡", color: "#fbbf24" },
];

export const MILESTONES: Milestone[] = [
  // ── ANCIENT ─────────────────────────────────────────────────────────────────
  {
    id: "ishango", era: "ancient", yearNum: -20000, year: "~20,000 BC",
    emoji: "🦴",
    title: l("Ishango Bone — First Mathematical Artifact", "Osso de Ishango — Primeiro Artefato Matemático"),
    by: l("Congo Basin, Democratic Republic of Congo", "Bacia do Congo, República Democrática do Congo"),
    desc: l(
      "A baboon fibula with notch groups consistent with an arithmetic series and prime numbers (11, 13, 17, 19). Considered the world's oldest mathematical artifact — proof that humans encoded numerical patterns long before writing.",
      "Uma fíbula de babuíno com grupos de entalhes consistentes com uma série aritmética e números primos (11, 13, 17, 19). Considerado o artefato matemático mais antigo do mundo — prova de que humanos codificavam padrões numéricos muito antes da escrita.",
    ),
    significance: l(
      "The first physical evidence of systematic numerical encoding — the conceptual origin of all information processing.",
      "A primeira evidência física de codificação numérica sistemática — a origem conceitual de todo processamento de informação.",
    ),
    tags: ["Mathematics", "Counting", "Prime Series"],
  },
  {
    id: "abacus", era: "ancient", yearNum: -2700, year: "~2700 BC",
    emoji: "🧮",
    title: l("Sumerian Abacus — First Calculation Device", "Ábaco Sumério — Primeiro Dispositivo de Cálculo"),
    by: l("Mesopotamia (modern Iraq & Syria)", "Mesopotâmia (atuais Iraque & Síria)"),
    desc: l(
      "Sumerians developed the abacus (~2700–2300 BC), using columns to represent orders of magnitude. Spread rapidly to Egypt, Persia, Greece, China. First 'outsourcing' of mental arithmetic to a physical device. Romans later standardized it for taxation and trade.",
      "Os sumérios desenvolveram o ábaco (~2700–2300 a.C.), usando colunas para representar ordens de grandeza. Espalhou-se rapidamente para Egito, Pérsia, Grécia, China. Primeira 'terceirização' da aritmética mental para um dispositivo físico. Os romanos depois o padronizaram para tributação e comércio.",
    ),
    significance: l(
      "First human + machine collaboration for computation. Remained in daily use for 4,000+ years.",
      "Primeira colaboração humano + máquina para computação. Permaneceu em uso diário por mais de 4.000 anos.",
    ),
    tags: ["Mechanical Calc", "Arithmetic", "Commerce"],
    links: [{ label: l("From Abacus to AI ↗", "Do Ábaco à IA ↗"), url: "https://www.toolify.ai/ai-news/from-abacus-to-ai-the-evolution-of-computing-1388924" }],
  },
  {
    id: "antikythera", era: "ancient", yearNum: -100, year: "~150–87 BC",
    emoji: "⚙️",
    title: l("Antikythera Mechanism — World's First Analog Computer", "Mecanismo de Anticítera — Primeiro Computador Analógico do Mundo"),
    by: l("Unknown Greek engineers, Corinthian colony", "Engenheiros gregos desconhecidos, colônia coríntia"),
    desc: l(
      "A bronze clockwork of at least 37 precision gears that predicted eclipse cycles, tracked 5 planets, and modeled the Metonic calendar. CT-scan analysis (2006) revealed epicyclic gearing with gear ratios matching modern astronomical constants. Nothing comparable appeared for 1,400 years.",
      "Um mecanismo de bronze com pelo menos 37 engrenagens de precisão que previa ciclos de eclipses, rastreava 5 planetas e modelava o calendário Metônico. Análise de CT-scan (2006) revelou engrenagens epicíclicas com razões que batem com constantes astronômicas modernas. Nada comparável apareceu por 1.400 anos.",
    ),
    significance: l(
      "Proved 'computers' predate electricity by 2,000 years. Demonstrated that mechanical information processing was possible in antiquity.",
      "Provou que 'computadores' antecedem a eletricidade em 2.000 anos. Demonstrou que processamento mecânico de informação era possível na Antiguidade.",
    ),
    tags: ["Analog Computer", "37 Bronze Gears", "Astronomy", "First Computer"],
    links: [{ label: l("Smithsonian Magazine ↗", "Smithsonian Magazine ↗"), url: "https://www.smithsonianmag.com/history/decoding-antikythera-mechanism-first-computer-180953979/" }],
  },
  {
    id: "leibniz", era: "ancient", yearNum: 1685, year: "1673–1703",
    emoji: "🔢",
    title: l("Leibniz's Stepped Reckoner & Binary Arithmetic", "Stepped Reckoner de Leibniz & Aritmética Binária"),
    by: l("Gottfried Wilhelm Leibniz, Leipzig, Germany", "Gottfried Wilhelm Leibniz, Leipzig, Alemanha"),
    desc: l(
      "First mechanical calculator handling multiplication and division. Leibniz also independently developed binary arithmetic (0s and 1s) in 1703 — influenced by the I Ching. Binary is the mathematical foundation of every modern computer, smartphone, and AI model.",
      "Primeira calculadora mecânica capaz de multiplicar e dividir. Leibniz também desenvolveu, de forma independente, a aritmética binária (0s e 1s) em 1703 — influenciado pelo I Ching. O binário é a base matemática de todo computador, smartphone e modelo de IA modernos.",
    ),
    significance: l(
      "Binary number system + mechanical calculation = the mathematical DNA of all digital computing.",
      "Sistema numérico binário + cálculo mecânico = o DNA matemático de toda a computação digital.",
    ),
    tags: ["Binary Math", "Multiplication", "Mechanical"],
  },
  {
    id: "babbage", era: "ancient", yearNum: 1843, year: "1837–1843",
    emoji: "🏭",
    title: l("Analytical Engine & Ada Lovelace — First Computer Program", "Analytical Engine & Ada Lovelace — Primeiro Programa de Computador"),
    by: l("Charles Babbage & Ada Lovelace, London, UK", "Charles Babbage & Ada Lovelace, Londres, Reino Unido"),
    desc: l(
      "Babbage designed a mechanical general-purpose computer with separate 'mill' (CPU) and 'store' (memory) — the full von Neumann architecture 100 years early. Ada Lovelace wrote Algorithm #1 (Bernoulli numbers) in 1843 — the world's first computer program — and predicted machines could compose music.",
      "Babbage projetou um computador mecânico de uso geral com 'mill' (CPU) e 'store' (memória) separados — a arquitetura de von Neumann completa 100 anos antes. Ada Lovelace escreveu o Algoritmo nº 1 (números de Bernoulli) em 1843 — o primeiro programa de computador do mundo — e previu que máquinas poderiam compor música.",
    ),
    significance: l(
      "The conceptual blueprint for every computer ever built. Lovelace's note that machines could handle 'any relation that can be expressed by numbers' prefigured AGI thinking.",
      "O blueprint conceitual de todo computador já construído. A nota de Lovelace de que máquinas poderiam lidar com 'qualquer relação que possa ser expressa por números' antecipou o pensamento sobre AGI.",
    ),
    tags: ["CPU + Memory", "I/O Architecture", "First Algorithm", "First Programmer"],
  },

  // ── THEORY ──────────────────────────────────────────────────────────────────
  {
    id: "turing-machine", era: "theory", yearNum: 1936, year: "1936",
    emoji: "🖥️",
    title: l("Turing Machine — Defines Computation Itself", "Máquina de Turing — Define a Própria Computação"),
    by: l("Alan Turing, Proceedings of the London Mathematical Society", "Alan Turing, Proceedings of the London Mathematical Society"),
    desc: l(
      "Turing described a theoretical 'universal machine' that can simulate any algorithm by reading and writing symbols on an infinite tape. He also proved the Halting Problem is unsolvable — establishing the fundamental limits of computation before computers existed.",
      "Turing descreveu uma 'máquina universal' teórica capaz de simular qualquer algoritmo lendo e escrevendo símbolos numa fita infinita. Também provou que o Problema da Parada é insolúvel — estabelecendo os limites fundamentais da computação antes dos computadores existirem.",
    ),
    significance: l(
      "Defined the mathematical foundation of all software, algorithms, and AI. Every computer program is a Turing machine at its core.",
      "Definiu a base matemática de todo software, algoritmo e IA. Todo programa de computador é, no fundo, uma máquina de Turing.",
    ),
    tags: ["Theory of Computation", "Algorithms", "Halting Problem"],
  },
  {
    id: "eniac", era: "theory", yearNum: 1946, year: "1945–1946",
    emoji: "💻",
    title: l("ENIAC — World's First General-Purpose Electronic Computer", "ENIAC — Primeiro Computador Eletrônico de Uso Geral do Mundo"),
    by: l("Eckert & Mauchly, University of Pennsylvania, Philadelphia", "Eckert & Mauchly, University of Pennsylvania, Filadélfia"),
    desc: l(
      "18,000 vacuum tubes, 30 tons, occupying 1,800 sq ft. Could perform 5,000 additions per second — replacing 100 trained humans working a year on ballistics tables. First run was classified. The Computer History Museum notes it 'may have run more calculations than all of humanity had done up to that point.'",
      "18.000 válvulas, 30 toneladas, ocupando 167 m². Realizava 5.000 adições por segundo — substituindo 100 humanos treinados trabalhando um ano em tabelas balísticas. A primeira execução foi sigilosa. O Computer History Museum nota que ele 'pode ter feito mais cálculos do que toda a humanidade havia feito até aquele momento'.",
    ),
    significance: l(
      "First moment in history when machines could outcompute humans at scale. The start of the Information Age.",
      "Primeiro momento da história em que máquinas superaram humanos em computação em escala. O início da Era da Informação.",
    ),
    tags: ["18,000 Vacuum Tubes", "30 Tons", "5,000 add/sec"],
    links: [{ label: l("Computer History Museum ↗", "Computer History Museum ↗"), url: "https://www.computerhistory.org/revolution/birth-of-the-computer/4/78" }],
  },
  {
    id: "transistor", era: "theory", yearNum: 1947, year: "Dec 1947",
    emoji: "🔬",
    title: l("Transistor Invented at Bell Labs", "Transistor Inventado no Bell Labs"),
    by: l("Shockley, Bardeen & Brattain — Bell Laboratories, Murray Hill, NJ", "Shockley, Bardeen & Brattain — Bell Laboratories, Murray Hill, NJ"),
    desc: l(
      "Replaced vacuum tubes with a tiny solid-state amplifier/switch. Won the 1956 Nobel Prize in Physics. Transistors shrank from millimeter-scale to sub-5nm — over 100,000× reduction. Apple's M3 Ultra (2024) contains 153 billion transistors. Without the transistor, there are no microchips, no internet, no AI.",
      "Substituiu as válvulas por um pequeno amplificador/chave de estado sólido. Ganhou o Nobel de Física em 1956. Transistores encolheram de escala milimétrica para abaixo de 5nm — redução de mais de 100.000×. O M3 Ultra da Apple (2024) contém 153 bilhões de transistores. Sem o transistor, não há microchips, internet nem IA.",
    ),
    significance: l(
      "The physical atom of the digital age. Moore's Law is entirely about transistors doubling every ~18 months for 50 years straight.",
      "O átomo físico da era digital. A Lei de Moore é toda sobre transistores dobrando a cada ~18 meses por 50 anos seguidos.",
    ),
    tags: ["Hardware", "Semiconductor", "Nobel Prize 1956", "Foundation of All Chips"],
  },
  {
    id: "shannon", era: "theory", yearNum: 1948, year: "1948",
    emoji: "📡",
    title: l("Shannon — 'A Mathematical Theory of Communication'", "Shannon — 'A Mathematical Theory of Communication'"),
    by: l("Claude Shannon, Bell Laboratories, NJ", "Claude Shannon, Bell Laboratories, NJ"),
    desc: l(
      "Shannon proved that information is measurable, introduced the 'bit' as the fundamental unit, showed how to transmit data reliably over noisy channels via redundancy, and defined channel capacity. Scientific American: 'The Magna Carta of the Information Age.'",
      "Shannon provou que informação é mensurável, introduziu o 'bit' como unidade fundamental, mostrou como transmitir dados de forma confiável em canais ruidosos via redundância e definiu capacidade de canal. Scientific American: 'A Magna Carta da Era da Informação'.",
    ),
    significance: l(
      "Created the theoretical bedrock of all digital technology — the internet, mobile phones, WiFi, streaming video, and AI data pipelines. Without Shannon, none of it exists.",
      "Criou a base teórica de toda a tecnologia digital — internet, celulares, Wi-Fi, streaming e pipelines de dados de IA. Sem Shannon, nada disso existe.",
    ),
    tags: ["The Bit", "Entropy", "Channel Capacity", "Digital Communication"],
    links: [{ label: l("Bell Labs 75th ↗", "Bell Labs 75 anos ↗"), url: "https://www.nokia.com/bell-labs/about/history/innovation-stories/information-theory-turns-75/" }],
  },
  {
    id: "turing-test", era: "theory", yearNum: 1950, year: "1950",
    emoji: "🤔",
    title: l("Turing Test — 'Can Machines Think?'", "Teste de Turing — 'Máquinas Podem Pensar?'"),
    by: l("Alan Turing, Mind Journal, Oxford", "Alan Turing, Mind Journal, Oxford"),
    desc: l(
      "Turing asked 'Can machines think?' and proposed the Imitation Game: if a human interrogator can't distinguish a machine's text responses from a human's, the machine passes. A 2023 Stanford study found GPT-4 passed in specific settings — exactly 73 years after the paper.",
      "Turing perguntou 'máquinas podem pensar?' e propôs o Jogo da Imitação: se um interrogador humano não consegue distinguir as respostas em texto de uma máquina das de um humano, a máquina passa. Um estudo de Stanford em 2023 concluiu que o GPT-4 passou em cenários específicos — exatos 73 anos após o paper.",
    ),
    significance: l(
      "Defined the fundamental question of AI for 70+ years — and the goalposts we're now moving past.",
      "Definiu a pergunta fundamental da IA por mais de 70 anos — e a régua que agora estamos superando.",
    ),
    tags: ["AI Philosophy", "Imitation Game", "Intelligence Test", "GPT-4 Passed 2023"],
  },

  // ── AI BORN ──────────────────────────────────────────────────────────────────
  {
    id: "snarc", era: "ai1", yearNum: 1951, year: "1951",
    emoji: "🧬",
    title: l("SNARC — First Artificial Neural Network Machine", "SNARC — Primeira Máquina de Rede Neural Artificial"),
    by: l("Marvin Minsky, Princeton / Harvard, USA", "Marvin Minsky, Princeton / Harvard, EUA"),
    desc: l(
      "Minsky built the first physical artificial neural network — 3,000 vacuum tubes simulating 40 neurons with adjustable synaptic weights. Implemented McCulloch & Pitts' 1943 theoretical neuron model in hardware. The direct ancestor of every deep learning system today.",
      "Minsky construiu a primeira rede neural artificial física — 3.000 válvulas simulando 40 neurônios com pesos sinápticos ajustáveis. Implementou em hardware o modelo de neurônio teórico de McCulloch & Pitts de 1943. Ancestral direto de todo sistema de deep learning atual.",
    ),
    significance: l(
      "First hardware neural network — 70+ years before GPT-4 would run on the same underlying mathematical principle.",
      "Primeira rede neural em hardware — mais de 70 anos antes do GPT-4 rodar sobre o mesmo princípio matemático.",
    ),
    tags: ["Neural Network", "40 Artificial Neurons", "3,000 Vacuum Tubes"],
  },
  {
    id: "dartmouth", era: "ai1", yearNum: 1956, year: "Summer 1956",
    emoji: "🎓",
    title: l("Dartmouth Conference — AI is Born as a Science", "Conferência de Dartmouth — A IA Nasce Como Ciência"),
    by: l("McCarthy, Minsky, Shannon, Rochester — Dartmouth College, Hanover NH", "McCarthy, Minsky, Shannon, Rochester — Dartmouth College, Hanover NH"),
    desc: l(
      "John McCarthy organized a 6-week summer research project at Dartmouth, coining the term 'Artificial Intelligence.' Proposal: 'every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.'",
      "John McCarthy organizou um projeto de pesquisa de 6 semanas em Dartmouth, cunhando o termo 'Inteligência Artificial'. Proposta: 'todo aspecto do aprendizado ou de qualquer outra característica da inteligência pode, em princípio, ser descrito de forma tão precisa que uma máquina pode ser feita para simulá-lo'.",
    ),
    significance: l(
      "'The founding moment of artificial intelligence as a field of research.' — Dartmouth College official record.",
      "'O momento fundador da inteligência artificial como campo de pesquisa.' — registro oficial do Dartmouth College.",
    ),
    tags: ["AI Founded", "Term Coined", "Symbolic AI"],
    links: [{ label: l("Dartmouth Official ↗", "Dartmouth Oficial ↗"), url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" }],
  },
  {
    id: "perceptron", era: "ai1", yearNum: 1958, year: "1958",
    emoji: "🔁",
    title: l("Perceptron — First Trainable Neural Network", "Perceptron — Primeira Rede Neural Treinável"),
    by: l("Frank Rosenblatt, Cornell Aeronautical Lab, Buffalo NY", "Frank Rosenblatt, Cornell Aeronautical Lab, Buffalo NY"),
    desc: l(
      "The perceptron could learn from examples by adjusting synaptic weights based on errors — the first learning algorithm. New York Times predicted it would 'walk, talk, see, write, reproduce itself.' Cornell's 2019 retrospective called it 'paved the way for AI, 60 years too soon.'",
      "O perceptron aprendia com exemplos ajustando pesos sinápticos com base nos erros — o primeiro algoritmo de aprendizado. O New York Times previu que ele iria 'andar, falar, ver, escrever, se reproduzir'. A retrospectiva de Cornell em 2019 disse que ele 'pavimentou o caminho da IA, 60 anos cedo demais'.",
    ),
    significance: l(
      "Origin of all machine learning — the concept that intelligence could emerge from iteratively adjusting weights on labeled data.",
      "Origem de todo machine learning — a ideia de que inteligência poderia emergir do ajuste iterativo de pesos sobre dados rotulados.",
    ),
    tags: ["Learning", "Weight Adjustment", "Pattern Recognition"],
    links: [{ label: l("Cornell Retrospective ↗", "Retrospectiva de Cornell ↗"), url: "https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon" }],
  },
  {
    id: "moores-law", era: "ai1", yearNum: 1965, year: "April 1965",
    emoji: "📏",
    title: l("Moore's Law — Engine of Exponential Progress", "Lei de Moore — Motor do Progresso Exponencial"),
    by: l("Gordon Moore, Fairchild Semiconductor — Electronics Magazine", "Gordon Moore, Fairchild Semiconductor — Electronics Magazine"),
    desc: l(
      "Moore observed transistors per chip doubled annually (revised to ~18 months in 1975). Held true 50+ years: from 2,300 transistors (Intel 4004, 1971) to 153 billion (Apple M3 Ultra, 2024). This exponential compute growth directly caused deep learning to become economically feasible.",
      "Moore observou que o número de transistores por chip dobrava a cada ano (revisado para ~18 meses em 1975). Valeu por mais de 50 anos: de 2.300 transistores (Intel 4004, 1971) a 153 bilhões (Apple M3 Ultra, 2024). Esse crescimento exponencial em computação foi o que tornou deep learning economicamente viável.",
    ),
    significance: l(
      "The self-fulfilling prophecy that made AI inevitable — it took 50 years of transistor doublings to create hardware powerful enough to train GPT-3.",
      "A profecia autorrealizável que tornou a IA inevitável — foram 50 anos de transistores dobrando para criar hardware potente o suficiente para treinar o GPT-3.",
    ),
    tags: ["Exponential Growth", "Transistors", "50-Year Trend"],
    links: [{ label: l("Our World in Data ↗", "Our World in Data ↗"), url: "https://ourworldindata.org/moores-law" }],
  },
  {
    id: "eliza", era: "ai1", yearNum: 1966, year: "1966",
    emoji: "💬",
    title: l("ELIZA — World's First Chatbot", "ELIZA — Primeiro Chatbot do Mundo"),
    by: l("Joseph Weizenbaum, MIT AI Lab, Cambridge MA", "Joseph Weizenbaum, MIT AI Lab, Cambridge MA"),
    desc: l(
      "ELIZA simulated a psychotherapist using pattern matching and scripted responses. Users reported genuine emotional connection — alarming creator Weizenbaum, who warned about anthropomorphizing AI. The 'ELIZA Effect' describes the human tendency to project understanding onto AI systems — still highly relevant in 2026.",
      "A ELIZA simulava uma psicoterapeuta usando casamento de padrões e respostas roteirizadas. Usuários relataram conexão emocional genuína — alarmando o criador Weizenbaum, que alertou sobre antropomorfizar a IA. O 'Efeito ELIZA' descreve a tendência humana de projetar compreensão em sistemas de IA — ainda muito relevante em 2026.",
    ),
    significance: l(
      "First natural language human-computer interaction. The direct ancestor of ChatGPT — separated by 57 years and a trillion parameters.",
      "Primeira interação humano-computador em linguagem natural. Ancestral direta do ChatGPT — separada por 57 anos e um trilhão de parâmetros.",
    ),
    tags: ["Chatbot", "NLP", "Rogerian Therapy", "ELIZA Effect"],
  },

  // ── HARDWARE ─────────────────────────────────────────────────────────────────
  {
    id: "intel4004", era: "hardware", yearNum: 1971, year: "Nov 1971",
    emoji: "🧩",
    title: l("Intel 4004 — First Commercial Microprocessor", "Intel 4004 — Primeiro Microprocessador Comercial"),
    by: l("Intel (Hoff, Mazor, Faggin)", "Intel (Hoff, Mazor, Faggin)"),
    desc: l(
      "General-purpose programmable processor on a single chip. 2,300 transistors, 740 kHz. By 2024, Apple's M3 Ultra: 153 billion transistors — a 66-million-fold increase in 53 years. Enabled PCs (1975+), internet, mobile, and AI hardware.",
      "Processador programável de uso geral em um único chip. 2.300 transistores, 740 kHz. Em 2024, o M3 Ultra da Apple: 153 bilhões de transistores — aumento de 66 milhões de vezes em 53 anos. Viabilizou PCs (a partir de 1975), internet, mobile e hardware de IA.",
    ),
    significance: l(
      "Put computing inside everything — the hardware engine for every computer, smartphone, server, and AI accelerator ever built.",
      "Colocou computação dentro de tudo — o motor de hardware de todo computador, smartphone, servidor e acelerador de IA já construído.",
    ),
    tags: ["2,300 Transistors", "740 kHz", "4-bit CPU"],
  },
  {
    id: "expert-systems", era: "hardware", yearNum: 1980, year: "1965–1987",
    emoji: "🧠",
    title: l("Expert Systems Era & AI Winters", "Era dos Sistemas Especialistas & Invernos da IA"),
    by: l("Edward Feigenbaum (Stanford) — DENDRAL, MYCIN, R1/XCON", "Edward Feigenbaum (Stanford) — DENDRAL, MYCIN, R1/XCON"),
    desc: l(
      "DENDRAL identified organic molecules; MYCIN diagnosed bacterial infections better than medical students. Generated a $500M commercial industry by 1985. But expert systems were brittle. Two major 'AI Winters' (1974, 1987) followed waves of overpromising. Each winter ended when a new technical breakthrough arrived.",
      "O DENDRAL identificava moléculas orgânicas; o MYCIN diagnosticava infecções bacterianas melhor que estudantes de medicina. Geraram uma indústria comercial de US$ 500M até 1985. Mas sistemas especialistas eram frágeis. Dois grandes 'Invernos da IA' (1974, 1987) vieram após ondas de promessas exageradas. Cada inverno terminou quando um novo avanço técnico chegou.",
    ),
    significance: l(
      "Proved AI could be commercially valuable — but also taught the field that hard-coded rules cannot scale. Neural networks would prove the lesson 30 years later.",
      "Provou que IA podia ter valor comercial — mas também ensinou ao campo que regras codificadas à mão não escalam. As redes neurais provariam a lição 30 anos depois.",
    ),
    tags: ["Rule-Based AI", "$500M Industry", "AI Winter 1974", "AI Winter 1987"],
  },
  {
    id: "internet", era: "hardware", yearNum: 1989, year: "1969 / 1989",
    emoji: "🌐",
    title: l("ARPANET → Internet → World Wide Web", "ARPANET → Internet → World Wide Web"),
    by: l("DARPA (1969) / Tim Berners-Lee at CERN (1989)", "DARPA (1969) / Tim Berners-Lee no CERN (1989)"),
    desc: l(
      "ARPANET (1969) first connected 4 nodes at UCLA, SRI, UCSB, and Utah. Berners-Lee's WWW (1989) turned the internet into a content repository. By the 2010s, the internet's trillion+ pages became the pretraining corpus for every LLM. The Common Crawl dataset (40 billion web pages) is the primary source for GPT, LLaMA, Gemini training.",
      "A ARPANET (1969) conectou pela primeira vez 4 nós em UCLA, SRI, UCSB e Utah. A WWW de Berners-Lee (1989) transformou a internet num repositório de conteúdo. Nos anos 2010, as mais de um trilhão de páginas da internet viraram o corpus de pré-treino de todo LLM. O Common Crawl (40 bilhões de páginas) é a fonte primária do treino de GPT, LLaMA e Gemini.",
    ),
    significance: l(
      "Without the internet as a training dataset, there is no ChatGPT. The information highway became AI's classroom.",
      "Sem a internet como dataset de treino, não existe ChatGPT. A estrada da informação virou a sala de aula da IA.",
    ),
    tags: ["Internet", "Global Data", "LLM Training Data"],
  },

  // ── ML ────────────────────────────────────────────────────────────────────────
  {
    id: "backprop", era: "ml", yearNum: 1986, year: "1986",
    emoji: "🔄",
    title: l("Backpropagation — Neural Networks Learn to Learn", "Backpropagation — Redes Neurais Aprendem a Aprender"),
    by: l("Rumelhart, Hinton & Williams — UC San Diego & Carnegie Mellon", "Rumelhart, Hinton & Williams — UC San Diego & Carnegie Mellon"),
    desc: l(
      "Published in Nature: backpropagation enables neural networks to learn distributed representations by propagating error gradients backward through layers. 'Parallel Distributed Processing' (1986) showed networks could learn language, image features, and logical rules. GPUs were needed to make it practical at scale — which didn't happen until 2012.",
      "Publicado na Nature: backpropagation permite que redes neurais aprendam representações distribuídas propagando gradientes de erro para trás pelas camadas. 'Parallel Distributed Processing' (1986) mostrou que redes podiam aprender linguagem, features de imagem e regras lógicas. GPUs foram necessárias para tornar isso prático em escala — o que só aconteceu em 2012.",
    ),
    significance: l(
      "'Backpropagation is foundational to deep learning today.' — Computer History Museum. Every trained AI model on Earth uses this algorithm.",
      "'Backpropagation é fundamento do deep learning atual.' — Computer History Museum. Todo modelo de IA treinado na Terra usa esse algoritmo.",
    ),
    tags: ["Gradient Descent", "Multi-Layer", "All AI Uses This"],
  },
  {
    id: "deep-blue", era: "ml", yearNum: 1997, year: "May 1997",
    emoji: "♟️",
    title: l("IBM Deep Blue Defeats Kasparov", "IBM Deep Blue Derrota Kasparov"),
    by: l("IBM Research (Murray Campbell et al.) — New York City", "IBM Research (Murray Campbell et al.) — Nova York"),
    desc: l(
      "Deep Blue evaluated 200 million chess positions per second. Beat reigning world champion Kasparov 3.5–2.5 in a 6-game match. First computer to defeat a world chess champion under tournament conditions. Newsweek called it 'The Brain's Last Stand.'",
      "O Deep Blue avaliava 200 milhões de posições de xadrez por segundo. Venceu o campeão mundial Kasparov por 3,5–2,5 em uma série de 6 partidas. Primeiro computador a derrotar um campeão mundial de xadrez em condições de torneio. A Newsweek chamou de 'A Última Cartada do Cérebro'.",
    ),
    significance: l(
      "First time AI surpassed human experts at complex strategic reasoning — but using brute force, not intelligence. Neural nets would eventually eclipse this approach.",
      "Primeira vez que a IA superou especialistas humanos em raciocínio estratégico complexo — mas usando força bruta, não inteligência. As redes neurais acabariam eclipsando essa abordagem.",
    ),
    tags: ["200M positions/sec", "32 Parallel CPUs", "World Champion Defeated"],
    links: [{ label: l("IBM History ↗", "História IBM ↗"), url: "https://www.ibm.com/history/deep-blue" }],
  },
  {
    id: "google", era: "ml", yearNum: 1998, year: "Sept 1998",
    emoji: "🔍",
    title: l("Google Founded — Search at Scale, AI at Scale", "Google é Fundada — Busca em Escala, IA em Escala"),
    by: l("Larry Page & Sergey Brin — Stanford garage → Menlo Park, CA", "Larry Page & Sergey Brin — garagem de Stanford → Menlo Park, CA"),
    desc: l(
      "PageRank was itself an early ML algorithm. Google's infrastructure later became the base for Google Brain (2011), TensorFlow (2015), TPUs (2016), BERT (2018), PaLM (2022), AlphaFold, and Gemini. Jeff Dean's MapReduce paper (2004) pioneered distributed computing at AI scale.",
      "O PageRank já era um algoritmo inicial de ML. A infraestrutura da Google viraria depois a base de Google Brain (2011), TensorFlow (2015), TPUs (2016), BERT (2018), PaLM (2022), AlphaFold e Gemini. O paper de MapReduce de Jeff Dean (2004) abriu caminho para computação distribuída em escala de IA.",
    ),
    significance: l(
      "Built the data infrastructure, compute culture, and engineering DNA that produced the Transformer, AlphaFold, and every Gemini model.",
      "Construiu a infraestrutura de dados, a cultura de computação e o DNA de engenharia que produziram o Transformer, o AlphaFold e todos os modelos Gemini.",
    ),
    tags: ["PageRank Algorithm", "Data Infrastructure", "Deep Learning Birthplace"],
  },
  {
    id: "watson", era: "ml", yearNum: 2011, year: "Feb 2011",
    emoji: "🏆",
    title: l("IBM Watson Wins Jeopardy!", "IBM Watson Vence o Jeopardy!"),
    by: l("IBM Research", "IBM Research"),
    desc: l(
      "Watson beat champions Brad Rutter and Ken Jennings using statistical NLP across 200M pages of content — including all of Wikipedia. First time NLP AI demonstrated broad knowledge retrieval competitive with top humans on live television. Introduced enterprise AI to the public imagination a decade before ChatGPT.",
      "O Watson venceu os campeões Brad Rutter e Ken Jennings usando NLP estatístico sobre 200M de páginas — incluindo toda a Wikipédia. Primeira vez que uma IA de NLP demonstrou recuperação ampla de conhecimento competindo com humanos top na TV ao vivo. Apresentou a IA corporativa para o público uma década antes do ChatGPT.",
    ),
    significance: l(
      "'AI' became a household word for the first time — and triggered the first wave of enterprise AI investment.",
      "'IA' virou palavra comum pela primeira vez — e disparou a primeira onda de investimento corporativo em IA.",
    ),
    tags: ["NLP", "Question Answering", "200M Pages", "TV Debut of AI"],
  },

  // ── DEEP LEARNING ────────────────────────────────────────────────────────────
  {
    id: "alexnet", era: "deep", yearNum: 2012, year: "Oct 2012",
    emoji: "👁️",
    title: l("AlexNet — The Deep Learning Spark", "AlexNet — A Faísca do Deep Learning"),
    by: l("Krizhevsky, Sutskever & Hinton — University of Toronto", "Krizhevsky, Sutskever & Hinton — Universidade de Toronto"),
    desc: l(
      "AlexNet won ImageNet with 15.3% error vs 26.2% runner-up — a 41% improvement. 8-layer CNN running on 2× NVIDIA GTX 580 GPUs. CHM: 'Kicked off today's prevailing approach to AI.' Papers citing AlexNet have been cited over 100,000 times combined — one paper changed an entire field.",
      "A AlexNet venceu o ImageNet com 15,3% de erro contra 26,2% da segunda colocada — melhoria de 41%. CNN de 8 camadas rodando em 2× GPUs NVIDIA GTX 580. CHM: 'Deu o pontapé na abordagem que domina a IA hoje'. Papers que citam a AlexNet acumulam mais de 100.000 citações — um único paper mudou um campo inteiro.",
    ),
    significance: l(
      "If the Transformer was the architecture, AlexNet was the proof that deep learning worked. It triggered billions in investment and every modern computer vision system.",
      "Se o Transformer foi a arquitetura, a AlexNet foi a prova de que deep learning funcionava. Disparou bilhões em investimento e todo sistema moderno de visão computacional.",
    ),
    tags: ["CNN", "15.3% error → first place", "GPU Acceleration", "Billion-dollar catalyst"],
    links: [{ label: l("CHM: AlexNet ↗", "CHM: AlexNet ↗"), url: "https://computerhistory.org/blog/chm-releases-alexnet-source-code/" }],
  },
  {
    id: "alphago", era: "deep", yearNum: 2016, year: "March 2016",
    emoji: "🎮",
    title: l("AlphaGo Defeats Lee Sedol 4–1", "AlphaGo Derrota Lee Sedol 4–1"),
    by: l("DeepMind (Hassabis, Silver) — Seoul, South Korea", "DeepMind (Hassabis, Silver) — Seul, Coreia do Sul"),
    desc: l(
      "Experts said AI wouldn't beat top Go players for decades — Go has more positions than atoms in the observable universe. AlphaGo used deep RL + self-play + MCTS. Move 37 (Game 2) was described as 'a move no human would play' — a creative, counterintuitive genius move.",
      "Especialistas diziam que a IA não venceria os melhores jogadores de Go por décadas — o Go tem mais posições do que átomos no universo observável. O AlphaGo usou deep RL + self-play + MCTS. A Jogada 37 (Partida 2) foi descrita como 'um lance que humano nenhum faria' — uma jogada genial, criativa e contraintuitiva.",
    ),
    significance: l(
      "Proved AI could master intuition and long-term planning — not just brute force. Opened the door to RL in robotics, drug discovery, and autonomous systems.",
      "Provou que IA podia dominar intuição e planejamento de longo prazo — não só força bruta. Abriu a porta para RL em robótica, descoberta de fármacos e sistemas autônomos.",
    ),
    tags: ["Reinforcement Learning", "Monte Carlo Tree Search", "Go Champion", "Move 37"],
  },
  {
    id: "transformer", era: "deep", yearNum: 2017, year: "June 2017",
    emoji: "⚡",
    title: l('"Attention Is All You Need" — The Transformer', '"Attention Is All You Need" — O Transformer'),
    by: l("Vaswani, Shazeer, Parmar + 5 others (all Google Brain) — NeurIPS 2017", "Vaswani, Shazeer, Parmar + 5 outros (todos do Google Brain) — NeurIPS 2017"),
    desc: l(
      "Eight Google Brain engineers replaced RNNs with pure attention mechanisms, enabling full parallelization during training. Every modern LLM (ChatGPT, Claude, Gemini, LLaMA, Grok) is a Transformer. Approaching 100,000 citations. Wired (2024): '8 Google Employees Invented Modern AI.'",
      "Oito engenheiros do Google Brain substituíram RNNs por mecanismos de atenção pura, viabilizando paralelização total no treino. Todo LLM moderno (ChatGPT, Claude, Gemini, LLaMA, Grok) é um Transformer. Perto de 100.000 citações. Wired (2024): '8 funcionários do Google inventaram a IA moderna'.",
    ),
    significance: l(
      "The single most consequential AI paper of the 21st century. The architecture is unchanged in all frontier models in 2026.",
      "O paper de IA mais consequente do século 21. A arquitetura segue inalterada em todos os modelos de fronteira em 2026.",
    ),
    tags: ["Self-Attention", "Parallelization", "Foundation of ALL LLMs", "100K+ Citations"],
    links: [
      { label: l("arXiv Paper ↗", "Paper no arXiv ↗"), url: "https://arxiv.org/abs/1706.03762" },
      { label: l("Wired 2024 ↗", "Wired 2024 ↗"), url: "https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/" },
    ],
  },
  {
    id: "bert-gpt", era: "deep", yearNum: 2018, year: "2018–2019",
    emoji: "📖",
    title: l("BERT & GPT-1/2 — Pretraining Changes Everything", "BERT & GPT-1/2 — Pré-treino Muda Tudo"),
    by: l("Google Brain (BERT) / OpenAI (GPT-1/2)", "Google Brain (BERT) / OpenAI (GPT-1/2)"),
    desc: l(
      "BERT (2018): bidirectional pretraining achieved SOTA on 11 NLP tasks simultaneously. GPT-2 (1.5B, Feb 2019): OpenAI deemed it 'too dangerous to release' — the staged rollout generated massive press and made AI a mainstream news topic for the first time. The pretrain→finetune paradigm became the template for all AI products.",
      "BERT (2018): pré-treino bidirecional atingiu SOTA em 11 tarefas de NLP ao mesmo tempo. GPT-2 (1,5B, Fev 2019): a OpenAI considerou 'perigoso demais para liberar' — o rollout em etapas gerou cobertura massiva e fez da IA pauta mainstream pela primeira vez. O paradigma pré-treino→fine-tune virou o modelo de todo produto de IA.",
    ),
    significance: l(
      "Established the 'pretrain on internet text, then fine-tune' paradigm that underlies every commercial AI product today.",
      "Estabeleceu o paradigma 'pré-treine em texto da internet e depois faça fine-tune' que sustenta todo produto comercial de IA atual.",
    ),
    tags: ["Pretraining", "Transfer Learning", "117M → 1.5B params"],
  },
  {
    id: "gpt3", era: "deep", yearNum: 2020, year: "May 2020",
    emoji: "🔤",
    title: l("GPT-3 — 175B Parameters & the Scaling Hypothesis", "GPT-3 — 175B Parâmetros & a Hipótese da Escala"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "GPT-3 generated coherent essays, wrote code, translated languages, and answered complex questions from a few in-prompt examples (few-shot), without fine-tuning. Demonstrated 'emergent capabilities' that weren't trained explicitly. Proved the scaling hypothesis: more compute + more data = qualitatively new abilities. Training cost ~$4.6M.",
      "O GPT-3 gerou ensaios coerentes, escreveu código, traduziu idiomas e respondeu perguntas complexas a partir de poucos exemplos no prompt (few-shot), sem fine-tuning. Demonstrou 'capacidades emergentes' que não foram treinadas explicitamente. Provou a hipótese da escala: mais computação + mais dados = habilidades qualitativamente novas. Custo de treino: ~US$ 4,6M.",
    ),
    significance: l(
      "First model where scale alone unlocked qualitatively new capabilities — launched the $100B+ investment race to build ever-larger models.",
      "Primeiro modelo em que só a escala destravou capacidades qualitativamente novas — disparou a corrida de US$ 100B+ de investimento para construir modelos cada vez maiores.",
    ),
    tags: ["175B Params", "Few-Shot", "Emergent Capabilities", "Scale = Intelligence"],
  },
  {
    id: "alphafold2", era: "deep", yearNum: 2021, year: "2020–2021",
    emoji: "🧬",
    title: l("AlphaFold2 — Solving Biology's Grand Challenge", "AlphaFold2 — Resolvendo o Grande Desafio da Biologia"),
    by: l("DeepMind (Hassabis, Jumper & team)", "DeepMind (Hassabis, Jumper & equipe)"),
    desc: l(
      "AlphaFold2 scored 92.4 GDT at CASP14 — solving a 50-year biological grand challenge. The AlphaFold Database grew to 214M structures from 1M+ organisms. Used by 2M+ researchers in 190 countries. Hassabis & Jumper received the 2024 Nobel Prize in Chemistry.",
      "O AlphaFold2 obteve 92,4 GDT no CASP14 — resolvendo um grande desafio biológico de 50 anos. O AlphaFold Database cresceu para 214M de estruturas de mais de 1M de organismos. Usado por mais de 2M de pesquisadores em 190 países. Hassabis & Jumper receberam o Nobel de Química em 2024.",
    ),
    significance: l(
      "'Proof that AI will transform science.' — Demis Hassabis. First Nobel Prize awarded for AI-driven scientific discovery.",
      "'Prova de que a IA vai transformar a ciência.' — Demis Hassabis. Primeiro Nobel concedido a uma descoberta científica feita por IA.",
    ),
    tags: ["Protein Folding Solved", "92.4 GDT Score", "214M Structures", "2024 Nobel Prize"],
    links: [{ label: l("DeepMind Nobel ↗", "Nobel DeepMind ↗"), url: "https://deepmind.google/blog/demis-hassabis-john-jumper-awarded-nobel-prize-in-chemistry/" }],
  },

  // ── GENERATIVE AI ────────────────────────────────────────────────────────────
  {
    id: "dalle-codex", era: "gen", yearNum: 2021.1, year: "Jan 2021",
    emoji: "🎨",
    title: l("DALL-E & Codex — AI Creates Images & Code", "DALL-E & Codex — IA Cria Imagens & Código"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "DALL-E used a discrete VAE to generate images from text prompts. Codex (GPT-3 fine-tuned on GitHub) powered GitHub Copilot — the first commercial AI coding assistant. Copilot reached 1M+ developers within months and was described as 'the most significant developer tool since Google' by some engineers.",
      "O DALL-E usou um VAE discreto para gerar imagens a partir de prompts de texto. O Codex (GPT-3 com fine-tune no GitHub) movia o GitHub Copilot — o primeiro assistente comercial de IA para código. O Copilot atingiu 1M+ de devs em meses e foi descrito como 'a ferramenta mais significativa para devs desde o Google' por alguns engenheiros.",
    ),
    significance: l(
      "AI stopped being a 'back-end' tool — it started producing visible human-quality outputs in creative fields.",
      "A IA deixou de ser ferramenta de 'back-end' — passou a produzir saídas visíveis com qualidade humana em áreas criativas.",
    ),
    tags: ["Text-to-Image", "Code Generation", "12B params", "GitHub Copilot"],
  },
  {
    id: "stable-diffusion", era: "gen", yearNum: 2022, year: "2022",
    emoji: "🖼️",
    title: l("Stable Diffusion + Midjourney — Image AI Goes Open", "Stable Diffusion + Midjourney — IA de Imagem Vira Aberta"),
    by: l("Stability AI / Midjourney (Holz)", "Stability AI / Midjourney (Holz)"),
    desc: l(
      "DALL-E 2 (April 2022) brought photorealistic generation. Midjourney (July) democratized AI art via Discord. Stable Diffusion (August) released open-source — anyone with a GPU could generate images. An AI image won the Colorado State Fair art competition (Sept 2022), sparking global debate. Artists filed lawsuits over training data.",
      "O DALL-E 2 (Abr 2022) trouxe geração fotorrealista. O Midjourney (Jul) democratizou a arte com IA via Discord. O Stable Diffusion (Ago) saiu open-source — qualquer um com GPU podia gerar imagens. Uma imagem de IA venceu a competição de arte da Colorado State Fair (Set 2022), gerando debate global. Artistas entraram com processos sobre os dados de treino.",
    ),
    significance: l(
      "Open-sourcing democratized generative AI overnight — any developer worldwide could build on it, triggering thousands of image tools.",
      "Abrir o código democratizou a IA generativa da noite para o dia — qualquer dev no mundo podia construir em cima, disparando milhares de ferramentas de imagem.",
    ),
    tags: ["Diffusion Models", "Open Source", "Local AI", "Art Controversy"],
  },
  {
    id: "chatgpt", era: "gen", yearNum: 2022.9, year: "Nov 30, 2022",
    emoji: "💬",
    title: l("ChatGPT — Fastest Growing Application in History", "ChatGPT — Aplicativo de Crescimento Mais Rápido da História"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "1M users in 5 days. 100M in 2 months — shattering TikTok's record (9 months). ChatGPT used GPT-3.5 fine-tuned with RLHF. Microsoft invested $10B shortly after. Google declared a 'code red.' Sam Altman: 'It came out of nowhere to everyone, including us.' Every major company scrambled to launch AI products.",
      "1M de usuários em 5 dias. 100M em 2 meses — pulverizando o recorde do TikTok (9 meses). O ChatGPT usou o GPT-3.5 com fine-tune por RLHF. A Microsoft investiu US$ 10B logo depois. A Google decretou 'código vermelho'. Sam Altman: 'Veio do nada pra todo mundo, inclusive pra nós.' Toda grande empresa correu para lançar produtos de IA.",
    ),
    significance: l(
      "The moment AI became a consumer reality. 'If AlexNet was the spark, ChatGPT was the explosion that no one saw coming.'",
      "O momento em que a IA virou realidade para o consumidor. 'Se a AlexNet foi a faísca, o ChatGPT foi a explosão que ninguém viu chegar.'",
    ),
    tags: ["1M users in 5 days", "100M in 2 months", "RLHF", "Consumer AI Era Begins"],
  },
  {
    id: "gpt4", era: "gen", yearNum: 2023.2, year: "March 2023",
    emoji: "🧩",
    title: l("GPT-4 — Professional-Grade Multimodal AI", "GPT-4 — IA Multimodal Nível Profissional"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "GPT-4 passed the bar exam (90th percentile), GRE verbal (99th), SAT (93rd), and multiple medical licensing exams. First truly multimodal frontier model — analyzing images and long documents. OpenAI's technical report: 'sparks of artificial general intelligence.' Multiple law firms, hospitals, and governments integrated it within weeks.",
      "O GPT-4 passou no exame da Ordem (percentil 90), no GRE verbal (99), no SAT (93) e em vários exames de medicina. Primeiro modelo de fronteira realmente multimodal — analisando imagens e documentos longos. Relatório técnico da OpenAI: 'faíscas de inteligência artificial geral'. Vários escritórios de advocacia, hospitais e governos o integraram em semanas.",
    ),
    significance: l(
      "Established that LLMs had crossed into professional-grade expertise — forcing every industry to reassess AI's role in knowledge work.",
      "Estabeleceu que LLMs entraram em nível profissional — forçando todo setor a reavaliar o papel da IA no trabalho intelectual.",
    ),
    tags: ["Bar Exam 90th %ile", "GRE 99th %ile", "Vision + Text", "128K context"],
  },
  {
    id: "llama", era: "gen", yearNum: 2023.5, year: "2023",
    emoji: "🦙",
    title: l("LLaMA — Meta Opens the Frontier", "LLaMA — A Meta Abre a Fronteira"),
    by: l("Meta AI Research", "Meta AI Research"),
    desc: l(
      "LLaMA-1 leaked (Feb), triggering instant fine-tunes. LLaMA-2 formally released (July) for free commercial use with Microsoft partnership. By 2024, LLaMA 3.1 (405B) 'traded blows with GPT-4.' LLaMA 4 (2025) supports 10M token context and competes with all closed models.",
      "O LLaMA-1 vazou (Fev), disparando fine-tunes na hora. O LLaMA-2 (Jul) foi lançado formalmente para uso comercial gratuito com parceria da Microsoft. Em 2024, o LLaMA 3.1 (405B) 'trocou socos com o GPT-4'. O LLaMA 4 (2025) suporta 10M tokens de contexto e compete com todos os modelos fechados.",
    ),
    significance: l(
      "Broke the compute monopoly — democratized access to frontier-class AI and created the open-weight community (Mistral, Qwen, DeepSeek).",
      "Quebrou o monopólio da computação — democratizou o acesso a IA de fronteira e criou a comunidade open-weight (Mistral, Qwen, DeepSeek).",
    ),
    tags: ["Open Weights", "7B–70B Params", "Democratization", "Compute Sovereignty"],
  },

  // ── AGENTIC ──────────────────────────────────────────────────────────────────
  {
    id: "sora", era: "agents", yearNum: 2024.1, year: "Feb 2024",
    emoji: "🎬",
    title: l("Sora — Cinematic Text-to-Video AI", "Sora — IA de Texto para Vídeo Cinematográfica"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "Sora generated up to 60-second videos with cinematic quality, consistent physics, and coherent object permanence. OpenAI called it 'a world simulator.' By 2025, Sora 2 supported 4K resolution and narrative consistency across multi-minute videos.",
      "O Sora gerou vídeos de até 60 segundos com qualidade cinematográfica, física consistente e permanência coerente de objetos. A OpenAI o chamou de 'simulador de mundo'. Em 2025, o Sora 2 já suportava 4K e consistência narrativa em vídeos de vários minutos.",
    ),
    significance: l(
      "AI crossed into professional video production — disrupting a $50B+ industry and raising urgent questions about synthetic media authenticity.",
      "A IA entrou na produção profissional de vídeo — disruptando uma indústria de US$ 50B+ e levantando questões urgentes sobre autenticidade de mídia sintética.",
    ),
    tags: ["Text-to-Video", "60-sec clips", "Physics Understanding"],
  },
  {
    id: "o1", era: "agents", yearNum: 2024.7, year: "Sept 2024",
    emoji: "🤔",
    title: l("OpenAI o1 — AI That Reasons Before It Answers", "OpenAI o1 — IA Que Raciocina Antes de Responder"),
    by: l("OpenAI", "OpenAI"),
    desc: l(
      "o1 spent compute on internal 'thinking' before answering — scoring at PhD level on physics, chemistry, and biology (GPQA). 83% on IOI (competitive programming) vs. 49th percentile typical. Introduced 'inference-time compute' as a new scaling dimension: more thinking time = better answers.",
      "O o1 gastou computação em 'pensamento' interno antes de responder — pontuando nível doutorado em física, química e biologia (GPQA). 83% no IOI (programação competitiva) vs. percentil 49 típico. Introduziu 'inference-time compute' como nova dimensão de escala: mais tempo pensando = melhores respostas.",
    ),
    significance: l(
      "Shifted AI from 'how large is the model' to 'how deeply can it think' — the new frontier of AI capability.",
      "Mudou a IA de 'quão grande é o modelo' para 'quão profundo ele pensa' — a nova fronteira de capacidade da IA.",
    ),
    tags: ["Chain-of-Thought", "Inference Compute", "PhD Benchmarks", "IOI 83%"],
  },
  {
    id: "nobel", era: "agents", yearNum: 2024.8, year: "Oct 2024",
    emoji: "🏆",
    title: l("Nobel Prize in Chemistry for AI — A Historic First", "Nobel de Química para a IA — Um Marco Histórico"),
    by: l("Demis Hassabis & John Jumper (DeepMind) + David Baker (UW)", "Demis Hassabis & John Jumper (DeepMind) + David Baker (UW)"),
    desc: l(
      "First Nobel Prize explicitly awarded for AI-driven scientific discovery. AlphaFold Database: 214M structures, 2M users, 190 countries. The Nobel Committee also awarded the 2024 Physics Nobel to Hopfield & Hinton for foundational AI work — two AI Nobels in one year.",
      "Primeiro Nobel concedido explicitamente a uma descoberta científica feita por IA. AlphaFold Database: 214M de estruturas, 2M de usuários, 190 países. O Comitê Nobel também concedeu o Nobel de Física de 2024 a Hopfield & Hinton por trabalho fundador em IA — dois Nobels de IA em um ano.",
    ),
    significance: l(
      "The highest possible validation of AI as a scientific instrument. 'The future is clearly bright for AI in molecular biology.' — Ewan Birney, EMBL.",
      "A maior validação possível da IA como instrumento científico. 'O futuro é claramente brilhante para a IA em biologia molecular.' — Ewan Birney, EMBL.",
    ),
    tags: ["Nobel Prize", "First AI Nobel", "2M researchers", "190 Countries"],
    links: [{ label: l("EMBL Nobel ↗", "EMBL Nobel ↗"), url: "https://www.embl.org/news/science-technology/alphafold-wins-nobel-prize-chemistry-2024/" }],
  },
  {
    id: "deepseek", era: "agents", yearNum: 2025.1, year: "Jan 2025",
    emoji: "🌏",
    title: l("DeepSeek R1 — Geopolitical AI Earthquake", "DeepSeek R1 — Terremoto Geopolítico na IA"),
    by: l("DeepSeek (Liang Wenfeng, China)", "DeepSeek (Liang Wenfeng, China)"),
    desc: l(
      "DeepSeek R1 matched OpenAI o1 at a fraction of the training cost — built under US chip export restrictions using older NVIDIA hardware. Released fully open-source. NVIDIA lost ~$600B in market cap in a single day — the largest single-day market cap loss in history (January 27, 2025).",
      "O DeepSeek R1 igualou o OpenAI o1 a uma fração do custo de treino — construído sob restrições americanas de exportação de chips, usando hardware NVIDIA mais antigo. Lançado totalmente open-source. A NVIDIA perdeu ~US$ 600B em valor de mercado em um único dia — a maior perda diária da história (27 de Janeiro de 2025).",
    ),
    significance: l(
      "Ended the US compute monopoly narrative. Every major AI lab immediately pivoted to efficiency research. Silicon Valley's 'bigger is better' mantra challenged.",
      "Encerrou a narrativa do monopólio americano de computação. Todo grande lab de IA imediatamente migrou para pesquisa de eficiência. O mantra 'quanto maior, melhor' do Vale do Silício foi posto em xeque.",
    ),
    tags: ["Open Source", "Matched o1", "NVIDIA −$600B", "Efficiency Revolution"],
  },
  {
    id: "agentic", era: "agents", yearNum: 2025.5, year: "2025",
    emoji: "🤖",
    title: l("Agentic AI Goes Mainstream — AI as Autonomous Worker", "IA Agêntica Vira Mainstream — IA Como Trabalhadora Autônoma"),
    by: l("Anthropic (Claude Code), OpenAI (Operator), Cursor / Anysphere", "Anthropic (Claude Code), OpenAI (Operator), Cursor / Anysphere"),
    desc: l(
      "Claude Code (terminal agent), OpenAI Operator (browser automation), and Cursor ($29.3B valuation) shifted LLMs from chat to autonomous workers. Cursor's Composer builds entire applications. Lovable hit $200M ARR in under 1 year. 2025 was called 'the year AI Agents got real.'",
      "Claude Code (agente no terminal), OpenAI Operator (automação no navegador) e Cursor (US$ 29,3B de valuation) tiraram os LLMs do chat e os transformaram em trabalhadores autônomos. O Composer do Cursor constrói aplicações inteiras. A Lovable atingiu US$ 200M de ARR em menos de 1 ano. 2025 foi chamado de 'o ano em que os Agentes de IA ficaram reais'.",
    ),
    significance: l(
      "AI stopped being a co-pilot and became a colleague — executing multi-step tasks, writing tests, filing bugs, and deploying code without human intervention at each step.",
      "A IA deixou de ser copiloto e virou colega — executando tarefas multi-passo, escrevendo testes, abrindo bugs e fazendo deploy sem intervenção humana em cada passo.",
    ),
    tags: ["AI Agents", "Computer Use", "Multi-Step Tasks", "$29B Cursor Valuation"],
    links: [{ label: l("AI Agents 2025 ↗", "Agentes de IA 2025 ↗"), url: "https://www.hugo.im/posts/ai-agents-year-review-2025" }],
  },
  {
    id: "frontier2026", era: "agents", yearNum: 2026, year: "2026 (Now)",
    emoji: "🌐",
    title: l("Frontier AI 2026 — Four Labs, Four Specializations", "IA de Fronteira 2026 — Quatro Labs, Quatro Especializações"),
    by: l("OpenAI, Google DeepMind, Anthropic, xAI, Meta", "OpenAI, Google DeepMind, Anthropic, xAI, Meta"),
    desc: l(
      "GPT-5.4 (74.9% SWE-bench, 92.8% GPQA), Claude Opus 4.6 (best prose, powers Cursor), Gemini 3.1 Pro (94.3% GPQA, 1M context, cheapest API), Grok 4 (75% SWE-bench, real-time X data). Open-weight Llama 4 supports 10M context. AI now impacts medicine, law, science, art, code, and education simultaneously.",
      "GPT-5.4 (74,9% SWE-bench, 92,8% GPQA), Claude Opus 4.6 (melhor prosa, move o Cursor), Gemini 3.1 Pro (94,3% GPQA, 1M de contexto, API mais barata), Grok 4 (75% SWE-bench, dados do X em tempo real). O Llama 4 open-weight suporta 10M de contexto. A IA agora impacta medicina, direito, ciência, arte, código e educação ao mesmo tempo.",
    ),
    significance: l(
      "AI has become the most cross-domain transformative technology in human history. The question is no longer 'will AI transform my field?' but 'how fast?'",
      "A IA virou a tecnologia transformadora mais transversal da história humana. A pergunta não é mais 'a IA vai transformar minha área?' e sim 'em quanto tempo?'",
    ),
    tags: ["74–75% SWE-Bench", "91–94% GPQA", "1M Context", "Multimodal+Agentic"],
    links: [{ label: l("2026 Model Comparison ↗", "Comparação de modelos 2026 ↗"), url: "https://gurusup.com/blog/ai-comparisons" }],
  },
];
