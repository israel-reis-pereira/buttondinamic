const moveButton = document.getElementById("moveButton");

moveButton.addEventListener("click", () => {
    const maxX = window.innerWidth - moveButton.clientWidth;
    const maxY = window.innerHeight - moveButton.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    moveButton.style.left = randomX + "px";
    moveButton.style.top = randomY + "px";
});

// Evento do botão "Sim"
normalButton.addEventListener("click", () => {
    // alert("Finalmente se assumiu!");
    window.open("https://youtu.be/dlE-DdOAI0E?si=UH7LQETJ38GLGKw_", "_blank");
});
