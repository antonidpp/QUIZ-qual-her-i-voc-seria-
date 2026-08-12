/* ========================================
   QUIZ SUPER-HERÓIS - LÓGICA
   ======================================== */

// ===== DADOS DOS HERÓIS =====
const heroes = {
  spider: {
    name: "Homem-Aranha",
    emoji: "🕷️",
    tagline: "Com grandes poderes vêm grandes responsabilidades",
    desc: "Você é o herói do povo! Inteligente, responsável e cheio de piadas mesmo nos momentos difíceis. Prefere ajudar as pessoas comuns e nunca desiste, mesmo quando a vida aperta. Seu coração é seu maior superpoder.",
    powers: ["Agilidade", "Inteligência", "Empatia", "Senso de Humor", "Responsabilidade"]
  },
  batman: {
    name: "Batman",
    emoji: "🦇",
    tagline: "Eu sou a noite. Eu sou a vingança.",
    desc: "Estratégico, preparado e determinado. Você resolve problemas com planejamento e nunca depende só da sorte. Prefere trabalhar nas sombras e sempre tem um plano B (e C, e D). Sua disciplina é lendária.",
    powers: ["Estratégia", "Preparação", "Disciplina", "Inteligência", "Coragem"]
  },
  ww: {
    name: "Mulher-Maravilha",
    emoji: "⭐",
    tagline: "A verdade é a minha arma mais poderosa",
    desc: "Forte, justa e compassiva. Você luta pelo que é certo e inspira as pessoas ao seu redor. Tem um senso de justiça inabalável e nunca abandona quem precisa de ajuda. Sua presença já muda o jogo.",
    powers: ["Força", "Justiça", "Liderança", "Compaixão", "Coragem"]
  },
  flash: {
    name: "Flash",
    emoji: "⚡",
    tagline: "A velocidade é a minha vida",
    desc: "Otimista, rápido e cheio de energia! Você resolve as coisas na velocidade da luz e sempre encontra o lado bom das situações. Adora ciência, amigos e nunca para quieto. O mundo é melhor com a sua vibração positiva.",
    powers: ["Velocidade", "Otimismo", "Ciência", "Lealdade", "Energia"]
  },
  iron: {
    name: "Homem de Ferro",
    emoji: "🤖",
    tagline: "Eu sou o Homem de Ferro",
    desc: "Gênio, bilionário (de ideias) e visionário. Você resolve problemas com tecnologia e criatividade. Um pouco sarcástico, mas no fundo se importa muito. Sempre está inventando algo novo para melhorar o mundo.",
    powers: ["Inteligência", "Tecnologia", "Criatividade", "Carisma", "Inovação"]
  },
  superman: {
    name: "Superman",
    emoji: "🦸‍♂️",
    tagline: "A verdade, a justiça e um amanhã melhor",
    desc: "Idealista, poderoso e com um coração de ouro. Você acredita no bem e inspira as pessoas só com a sua presença. É a pessoa em quem todo mundo confia. Sua força vem da esperança que você carrega.",
    powers: ["Força", "Esperança", "Moral", "Proteção", "Inspiração"]
  }
};

// ===== PERGUNTAS DO QUIZ =====
const questions = [
  {
    q: "Como você prefere resolver um problema difícil?",
    options: [
      { text: "Pensando em várias estratégias antes de agir", scores: { batman: 3, iron: 2 } },
      { text: "Agindo rápido e confiando no improviso", scores: { flash: 3, spider: 2 } },
      { text: "Usando força e determinação para enfrentar de frente", scores: { ww: 3, superman: 2 } },
      { text: "Criando uma solução tecnológica ou inteligente", scores: { iron: 3, spider: 1 } }
    ]
  },
  {
    q: "Qual dessas frases combina mais com você?",
    options: [
      { text: "“Com grandes poderes vêm grandes responsabilidades”", scores: { spider: 3 } },
      { text: "“Eu sou a noite”", scores: { batman: 3 } },
      { text: "“A verdade é minha arma”", scores: { ww: 3 } },
      { text: "“Eu sou o Homem de Ferro”", scores: { iron: 3 } },
      { text: "“A esperança nunca morre”", scores: { superman: 3 } },
      { text: "“Vamos nessa! Rápido!”", scores: { flash: 3 } }
    ]
  },
  {
    q: "Em uma equipe, qual é o seu papel natural?",
    options: [
      { text: "O cérebro / estrategista", scores: { batman: 3, iron: 2 } },
      { text: "O coração / moral da equipe", scores: { superman: 3, ww: 2 } },
      { text: "O engraçado que anima todo mundo", scores: { spider: 3, flash: 2 } },
      { text: "O que chega primeiro e resolve", scores: { flash: 3, spider: 1 } }
    ]
  },
  {
    q: "Qual é a sua maior “fraqueza” (no bom sentido)?",
    options: [
      { text: "Me preocupo demais com os outros", scores: { spider: 3, superman: 2 } },
      { text: "Sou muito perfeccionista e controlado", scores: { batman: 3, iron: 1 } },
      { text: "Confio demais nas pessoas", scores: { superman: 3, ww: 2 } },
      { text: "Fico inquieto se não estiver fazendo algo", scores: { flash: 3, iron: 1 } }
    ]
  },
  {
    q: "Que tipo de poder você mais gostaria de ter?",
    options: [
      { text: "Agilidade e sentidos aguçados", scores: { spider: 3 } },
      { text: "Força sobre-humana e voo", scores: { superman: 3, ww: 2 } },
      { text: "Velocidade extrema", scores: { flash: 3 } },
      { text: "Uma armadura tecnológica avançada", scores: { iron: 3 } },
      { text: "Nenhum poder… só treinamento e gadgets", scores: { batman: 3 } }
    ]
  },
  {
    q: "Como seus amigos mais próximos te descrevem?",
    options: [
      { text: "Responsável e leal", scores: { spider: 2, superman: 2, batman: 1 } },
      { text: "Inteligente e sarcástico", scores: { iron: 3, spider: 1 } },
      { text: "Corajoso e inspirador", scores: { ww: 3, superman: 2 } },
      { text: "Energético e divertido", scores: { flash: 3, spider: 1 } }
    ]
  },
  {
    q: "Você prefere trabalhar...",
    options: [
      { text: "Sozinho, no meu próprio ritmo e plano", scores: { batman: 3, iron: 2 } },
      { text: "Em equipe, motivando todo mundo", scores: { ww: 2, superman: 2, flash: 1 } },
      { text: "Ajudando quem ninguém mais ajuda", scores: { spider: 3, superman: 1 } },
      { text: "Criando coisas novas e inovadoras", scores: { iron: 3, flash: 1 } }
    ]
  },
  {
    q: "Qual cenário de batalha te anima mais?",
    options: [
      { text: "Proteger a cidade dos vilões do dia a dia", scores: { spider: 3, batman: 1 } },
      { text: "Uma guerra épica pelo destino do mundo", scores: { superman: 3, ww: 2 } },
      { text: "Uma corrida contra o tempo para salvar todos", scores: { flash: 3 } },
      { text: "Usar tecnologia para vencer um inimigo superior", scores: { iron: 3, batman: 1 } }
    ]
  }
];

// ===== ESTADO DO QUIZ =====
let currentQuestion = 0;
let scores = { 
  spider: 0, 
  batman: 0, 
  ww: 0, 
  flash: 0, 
  iron: 0, 
  superman: 0 
};

// ===== FUNÇÕES PRINCIPAIS =====

/**
 * Inicia o quiz (esconde tela inicial e mostra perguntas)
 */
function startQuiz() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('result-screen').style.display = 'none';
  
  currentQuestion = 0;
  scores = { spider: 0, batman: 0, ww: 0, flash: 0, iron: 0, superman: 0 };
  
  showQuestion();
}

/**
 * Mostra a pergunta atual e suas opções
 */
function showQuestion() {
  const q = questions[currentQuestion];
  
  document.getElementById('q-number').textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  document.getElementById('question-text').textContent = q.q;
  
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.scores);
    optionsDiv.appendChild(btn);
  });

  // Atualiza barra de progresso
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById('progress').style.width = progress + '%';
}

/**
 * Processa a resposta escolhida e avança
 */
function selectOption(optionScores) {
  // Soma os pontos da opção escolhida
  for (let hero in optionScores) {
    scores[hero] += optionScores[hero];
  }

  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    // Pequeno delay para dar feedback visual
    setTimeout(showQuestion, 180);
  } else {
    showResult();
  }
}

/**
 * Calcula o herói vencedor e mostra o resultado
 */
function showResult() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';

  // Encontra o herói com maior pontuação
  let maxScore = -1;
  let winner = 'spider';
  
  for (let hero in scores) {
    if (scores[hero] > maxScore) {
      maxScore = scores[hero];
      winner = hero;
    }
  }

  const hero = heroes[winner];
  
  // Calcula porcentagem aproximada de combinação
  const percent = Math.min(98, Math.round((maxScore / (questions.length * 2.2)) * 100));

  // Preenche os dados na tela
  document.getElementById('hero-emoji').textContent = hero.emoji;
  document.getElementById('hero-name').textContent = hero.name;
  document.getElementById('hero-tagline').textContent = `"${hero.tagline}"`;
  document.getElementById('match-percent').textContent = `Você é ${percent}% este herói!`;
  document.getElementById('hero-desc').textContent = hero.desc;

  // Cria as tags de poderes
  const powersList = document.getElementById('powers-list');
  powersList.innerHTML = '';
  
  hero.powers.forEach(p => {
    const tag = document.createElement('span');
    tag.className = 'power-tag';
    tag.textContent = p;
    powersList.appendChild(tag);
  });

  // Completa a barra de progresso
  document.getElementById('progress').style.width = '100%';
}

/**
 * Reinicia o quiz (volta para a tela inicial)
 */
function restartQuiz() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

/**
 * Compartilha o resultado (Web Share API ou copia para clipboard)
 */
function shareResult() {
  const name = document.getElementById('hero-name').textContent;
  const text = `Acabei de descobrir que eu seria o ${name} no quiz de super-heróis! 🦸‍♂️ Faça o seu também!`;
  
  if (navigator.share) {
    navigator.share({ 
      title: 'Quiz de Super-Heróis', 
      text: text 
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Resultado copiado! Cole no WhatsApp ou redes sociais 🚀');
    });
  }
}
