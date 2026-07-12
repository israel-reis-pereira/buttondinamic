# Jogo de Botões Dinâmicos

## Sobre
Este é um projeto simples e divertido baseado na mecânica clássica de botões que mudam de posição após a interação do usuário. O projeto foi desenvolvido de forma direta com o objetivo de estudar a manipulação básica do DOM (Document Object Model), escuta de eventos de clique e a aplicação de coordenadas pseudo-aleatórias através do navegador.

---

## Tecnologias Utilizadas
* Estruturação: HTML5
* Estilização: CSS3 (Flexbox e posicionamento absoluto)
* Comportamento: JavaScript Nativo (ES6)

---

## Funcionalidades
* **Botão Dinâmico ("Não")**: Utiliza cálculos de posicionamento baseados nas propriedades de dimensão da janela do navegador (`window.innerWidth` e `window.innerHeight`) para se mover aleatoriamente pela tela a cada clique recebido.
* **Redirecionamento Externo ("Sim")**: Dispara a abertura automática de uma nova guia do navegador direcionada para um link de vídeo externo via método integrado da API do navegador.

---

## Estrutura de Arquivos
O projeto é composto por três arquivos principais integrados:
* `index.html`: Define os elementos de texto, espaçamentos estáticos e a marcação de tela.
* `style.css`: Controla o alinhamento em coluna e define a propriedade de transição e transformação visual dos elementos.
* `script.js`: Gerencia a lógica matemática de aleatoriedade das coordenadas e as escutas aos eventos de clique de ambos os botões.

---

## Como Executar o Projeto Localmente
1. Faça o download ou clone os arquivos deste repositório em seu computador.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam localizados exatamente dentro do mesmo diretório.
3. Dê um duplo clique no arquivo `index.html` para executar e visualizar a aplicação em qualquer navegador moderno.

---

## Customização
Caso queira alterar o endereço de destino ou customizar o redirecionamento, abra o arquivo `script.js` e substitua o link de exemplo contido no método nativo:

```javascript
window.open("INSIRA_O_LINK_DESEJADO_AQUI", "_blank");
```
