# 🦸‍♂️ Quiz: Qual Herói Você Seria?

Um quiz interativo com visual de **história em quadrinhos** que descobre qual super-herói combina mais com a sua personalidade.

---

## 📁 Estrutura do Projeto

```
quiz-super-heroi/
├── index.html      → Estrutura da página (HTML)
├── style.css       → Estilos e visual de quadrinhos
├── script.js       → Lógica do quiz e pontuação
└── README.md       → Este arquivo
```

---

## 🚀 Como usar

### Opção 1 – Abrir direto no navegador
1. Baixe todos os arquivos da pasta
2. Clique duas vezes no arquivo `index.html`
3. O quiz abre automaticamente no seu navegador

### Opção 2 – Usar um servidor local (recomendado)
Se você tiver o **Live Server** (extensão do VS Code) ou Python instalado:

```bash
# Com Python 3
python -m http.server 8000
```

Depois acesse: `http://localhost:8000`

---

## ✨ Funcionalidades

- ✅ Tela inicial com visual de HQ
- ✅ 8 perguntas interativas
- ✅ Barra de progresso animada
- ✅ 6 possíveis resultados:
  - Homem-Aranha
  - Batman
  - Mulher-Maravilha
  - Flash
  - Homem de Ferro
  - Superman
- ✅ Tela de resultado com descrição + poderes
- ✅ Botão de reiniciar
- ✅ Botão de compartilhar resultado
- ✅ Design responsivo (funciona no celular)

---

## 🛠️ Tecnologias usadas

- **HTML5** – Estrutura
- **CSS3** – Estilo de quadrinhos (cores vibrantes, sombras, animações)
- **JavaScript (Vanilla)** – Toda a lógica do quiz
- **Google Fonts** – Fontes `Bangers` (títulos) e `Comic Neue` (textos)

---

## 🎨 Personalização

### Mudar as perguntas
Abra o arquivo `script.js` e edite o array `questions`.

### Adicionar novos heróis
1. Adicione o herói no objeto `heroes`
2. Inclua pontuações para ele nas opções das perguntas

### Mudar cores
No arquivo `style.css`, altere as variáveis no início:

```css
:root {
  --accent: #ffcc00;        /* Amarelo principal */
  --accent-red: #e63946;    /* Vermelho */
  --accent-blue: #457b9d;   /* Azul */
}
```

---

## 📝 Créditos

Projeto criado para trabalho escolar – tema livre sobre **super-heróis e quadrinhos**.

Feito com ❤️ e muito CSS de HQ.

---

## 📌 Dica para a apresentação

Você pode explicar:
1. A estrutura HTML (3 telas: início, quiz e resultado)
2. Como o CSS cria o visual de quadrinhos (sombras, bordas pretas, balão de fala)
3. Como o JavaScript calcula o herói (sistema de pontuação)
