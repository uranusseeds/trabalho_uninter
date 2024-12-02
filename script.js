// Altera a mensagem de boas-vindas com base no horário
document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const hours = new Date().getHours();
    if (hours < 12) {
        welcomeText.textContent = "Bom dia!";
    } else if (hours < 18) {
        welcomeText.textContent = "Boa tarde!";
    } else {
        welcomeText.textContent = "Boa noite!";
    }
});
