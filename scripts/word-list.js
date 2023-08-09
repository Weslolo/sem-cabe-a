const wordList = [
  {
    word: "guitarra",
    hint: "Um instrumento musical com cordas.",
  },
  {
    word: "oxigênio",
    hint: "Um gás incolor e inodoro essencial para a vida.",
  },
  {
    word: "montanha",
    hint: "Uma grande elevação natural da superfície da Terra.",
  },
  {
    word: "pinturas",
    hint: "Uma forma de arte que usa cores em uma superfície para criar imagens ou expressões.",
  },
  {
    word: "astronomia",
    hint: "O estudo científico de objetos e fenômenos celestes.",
  },
  {
    word: "futebol",
    hint: "Um esporte popular jogado com uma bola esférica.",
  },
  {
    word: "chocolate",
    hint: "Um doce feito de grãos de cacau",
  },
  {
    word: "corboleta",
    hint: "Um inseto com asas coloridas e corpo esguio.",
  },
  {
    word: "história",
    hint: "O estudo de eventos passados ​​e da civilização humana.",
  },
  {
    word: "pizza",
    hint: "Um prato saboroso que consiste em uma base redonda e achatada com coberturas.",
  },
  {
    word: "jazz",
    hint: "Um gênero de música caracterizado pela improvisação e sincopação.",
  },
  {
    word: "camera",
    hint: "Um dispositivo usado para capturar e gravar imagens ou vídeos.",
  },
  {
    word: "diamante",
    hint: "Uma pedra preciosa conhecida por seu brilho e dureza.",
  },
  {
    word: "aventura",
    hint: "Uma experiência emocionante ou ousada.",
  },
  {
    word: "ciência",
    hint: "O estudo sistemático da estrutura e comportamento do mundo físico e natura",
  },
  {
    word: "bicicleta",
    hint: "Um veículo de tração humana com duas rodas.",
  },
  {
    word: "pôr do sol",
    hint: "O desaparecimento diário do sol abaixo do horizonte.",
  },
  {
    word: "café",
    hint: "Uma bebida com cafeína popular feita de grãos de café torrados.",
  },
  {
    word: "dança",
    hint: "Um movimento rítmico do corpo frequentemente executado com música.",
  },
  {
    word: "galaxia",
    hint: "Um vasto sistema de estrelas, gás e poeira mantidos juntos pela gravidade.",
  },
  {
    word: "orquestra",
    hint: " Um grande conjunto de músicos tocando vários instrumentos",
  },
  {
    word: "Vulcão",
    hint: "Uma montanha ou colina com uma abertura através da qual lava, fragmentos de rocha, vapor quente e gás são ejetados.",
  },
  {
    word: "romance",
    hint: "Uma longa obra de ficção, geralmente com enredo e personagens complexos.",
  },
  {
    word: "escultura",
    hint: "Uma forma de arte tridimensional criada pela modelagem ou combinação de materiais.",
  },
  {
    word: "sinfonia",
    hint: "Uma longa composição musical para uma orquestra completa, tipicamente em múltiplos movimentos.",
  },
  {
    word: "arquitetura",
    hint: "A arte e a ciência de projetar e construir edifícios.",
  },
  {
    word: "balé",
    hint: "Uma forma de dança clássica caracterizada por movimentos precisos e graciosos.",
  },
  {
    word: "astronauta",
    hint: "Uma pessoa treinada para viajar e trabalhar no espaço.",
  },
  {
    word: "cachoeira",
    hint: "Uma cascata de água caindo de uma altura.",
  },
  {
    word: "tecnologia",
    hint: "A aplicação do conhecimento científico para fins práticos.",
  },
  {
    word: "colorido",
    hint: "Fenômeno meteorológico causado pela reflexão, refração e dispersão da luz.",
  },
  {
    word: "universo",
    hint: "Toda matéria existente, espaço e tempo como um todo.",
  },
  {
    word: "piano",
    hint: "Um instrumento musical tocado pressionando teclas que fazem com que martelos golpeiem as cordas.",
  },
  {
    word: "férias",
    hint: " Um período de tempo dedicado ao prazer, descanso ou relaxamento.",
  },
  {
    word: "floresta tropical",
    hint: "Uma floresta densa caracterizada por alta pluviosidade e biodiversidade.",
  },
  {
    word: "teatro",
    hint: "Um edifício ou área ao ar livre em que peças de teatro, filmes ou outras apresentações são encenadas.",
  },
  {
    word: "telefone",
    hint: "Um dispositivo usado para transmitir som a longas distâncias.",
  },
  {
    word: "linguagem",
    hint: "Um sistema de comunicação que consiste em palavras, gestos e sintaxe.",
  },
  {
    word: "deserto",
    hint: "Uma terra estéril ou árida com pouca ou nenhuma precipitação.",
  },
  {
    word: "girassol",
    hint: "Uma planta alta com uma grande cabeça de flor amarela.",
  },
  {
    word: "fantasia",
    hint: "Um gênero de ficção imaginativa envolvendo elementos mágicos e sobrenaturais.",
  },
  {
    word: "telescópio",
    hint: "Um instrumento óptico usado para ver objetos distantes no espaço.",
  },
  {
    word: "brisa",
    hint: "Um vento suave.",
  },
  {
    word: "oásis",
    hint: "Um local fértil em um deserto onde a água é encontrada.",
  },
  {
    word: "fotografia",
    hint: "A arte, processo ou prática de criar imagens registrando luz ou outra radiação eletromagnética.",
  },
  {
    word: "safári",
    hint: "Uma expedição ou jornada, geralmente para observar a vida selvagem em seu habitat natural.",
  },
  {
    word: "planeta",
    hint: "Um corpo celeste que orbita uma estrela e não produz luz própria.",
  },
  {
    word: "rio",
    hint: "Um grande fluxo natural de água que flui em um canal para o mar, um lago ou outro riacho.",
  },
  {
    word: "tropical",
    hint: "Relativo ou situado na região entre o Trópico de Câncer e o Trópico de Capricórnio.",
  },
  {
    word: "misterioso",
    hint: "Difícil ou impossível de entender, explicar ou identificar.",
  },
  {
    word: "enigma",
    hint: "Algo que é misterioso, intrigante ou difícil de entender.",
  },
  {
    word: "paradoxo",
    hint: "Uma declaração ou situação que se contradiz ou desafia a intuição.",
  },
  {
    word: "quebra-cabeça",
    hint: "Um jogo, brinquedo ou problema projetado para testar engenhosidade ou conhecimento.",
  },
  {
    word: "sussurrar",
    hint: "Falar muito baixo ou baixinho, muitas vezes de maneira secreta.",
  },
  {
    word: "sombra",
    hint: "Uma área escura ou forma produzida por um objeto bloqueando a luz.",
  },
  {
    word: "segredo",
    hint: "Algo mantido escondido ou desconhecido para os outros.",
  },
  {
    word: "curiosidade",
    hint: "Um forte desejo de saber ou aprender alguma coisa.",
  },
  {
    word: "imprevisível",
    hint: "Não podendo ser previsto ou conhecido de antemão; incerto.",
  },
  {
    word: "ofuscar",
    hint: "Para confundir ou confundir alguém; tornar algo obscuro ou difícil de entender.",
  },
  {
    word: "revelar",
    hint: "Tornar conhecido ou revelar algo previamente secreto ou desconhecido.",
  },
  {
    word: "ilusão",
    hint: "Uma falsa percepção ou crença; uma aparência ou impressão enganosa.",
  },
  {
    word: "luar",
    hint: "A luz da lua.",
  },
  {
    word: "vibrante",
    hint: "Cheio de energia, brilho e vida.",
  },
  {
    word: "nostalgia",
    hint: "Um desejo sentimental ou afeição melancólica pelo passado.",
  },
  {
    word: "brilhante",
    hint: "Excepcionalmente inteligente, talentoso ou impressionante.",
  },
];
