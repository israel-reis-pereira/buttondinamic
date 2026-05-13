# 🎯 Jogo de Botões Dinâmicos - Meme Fuga

Este é um projeto simples e divertido baseado na mecânica clássica de botões que fogem do cursor do usuário. Desenvolvido com HTML5, CSS3 estruturado e JavaScript nativo.

## 🚀 Funcionalidades

- **Botão Inteligente ("Não"):** Utiliza cálculos de posicionamento baseados no tamanho da janela do navegador (`window.innerWidth` e `window.innerHeight`) para se mover aleatoriamente sempre que houver uma interação.
- **Redirecionamento Surpresa ("Sim"):** O clique valida a resposta e redireciona automaticamente o usuário para uma nova aba com o clássico vídeo de meme do Bob Esponja.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização visual centralizada em Flexbox.
- **JavaScript (ES6):** Manipulação dinâmica do DOM e eventos.

## 📦 Como Executar o Projeto Localmente

1. Faça o clone ou o download deste repositório.
2. Certifique-se de que os três arquivos principais estão na mesma pasta:
   - `index.html`
   - `style.css`
   - `script.js`
3. Dê um duplo clique no arquivo `index.html` para abrir diretamente no seu navegador de preferência.

## ⚙️ Customização

Caso queira alterar o link do vídeo de redirecionamento ou o comportamento de ativação, basta abrir o arquivo `script.js` e modificar o parâmetro de URL contido na função nativa `window.open()`.
