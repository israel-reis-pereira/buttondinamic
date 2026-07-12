const moveButton = document.getElementById("moveButton");
const normalButton = document.getElementById("normalButton");

function desviarBotao() {
    moveButton.style.position = "absolute";

    const margem = 20;
    const maxX = window.innerWidth - moveButton.clientWidth - margem;
    const maxY = window.innerHeight - moveButton.clientHeight - margem;
    
    const randomX = Math.max(margem, Math.floor(Math.random() * maxX));
    const randomY = Math.max(margem, Math.floor(Math.random() * maxY));
    
    moveButton.style.left = randomX + "px";
    moveButton.style.top = randomY + "px";
}

// Eventos para Mobile (Tocar na tela)
moveButton.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Impede o clique fantasma nativo do mobile
    desviarBotao();
});

// Evento do botão "Sim"
normalButton.addEventListener("click", () => {
    window.open("https://youtu.be/dlE-DdOAI0E?si=UH7LQETJ38GLGKw_", "_blank");
    // alert("Finalmente se assumiu!");
});
