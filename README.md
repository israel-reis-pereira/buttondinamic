# Projeto Botões Dinâmicos e Movimento

## Sobre
Este é um projeto simples desenvolvido com o objetivo de estudar a manipulação de eventos do DOM (Document Object Model) e cálculos de posicionamento dinâmico na tela através do navegador. 

A aplicação apresenta uma interface interativa baseada na mecânica clássica de um botão que desvia do cursor do usuário com base nas dimensões em tempo real da janela visualizada.

---

## Tecnologias Utilizadas
* Estruturação: HTML5
* Estilização: CSS3 (Flexbox e posicionamento absoluto)
* Comportamento: JavaScript Nativo (ES6)

---

## Funcionalidades
* **Mecânica de Fuga**: O botão "Não" calcula as coordenadas máximas horizontais (`window.innerWidth`) e verticais (`window.innerHeight`) para gerar um novo posicionamento randômico sempre que o usuário tenta interagir com ele.
* **Redirecionamento Externo**: O botão "Sim" engatilha a abertura automática de uma nova aba do navegador direcionada para um vídeo externo de referência via API do navegador.

---

## Estrutura de Arquivos
O projeto é composto por três arquivos estruturais básicos que devem permanecer no mesmo nível de diretório:
* `index.html`: Responsável pela marcação e elementos de tela.
* `style.css`: Controla o alinhamento centralizado e propriedades de transição.
* `script.js`: Gerencia as escutas de eventos (`mouseover` e `click`) e as funções matemáticas de aleatoriedade.

---

## Como Executar o Projeto Localmente
1. Realize o download ou o clone deste repositório na sua máquina de trabalho.
2. Certifique-se de manter os três arquivos na mesma pasta.
3. Execute o arquivo `index.html` com um duplo clique para abrir a interface diretamente em qualquer navegador moderno.

---

## Customização
Para alterar o comportamento de redirecionamento ou modificar o link de destino, abra o arquivo `script.js` e altere o parâmetro textual de URL configurado dentro do método nativo:
```javascript
window.open("SUA_URL_AQUI", "_blank");
```
