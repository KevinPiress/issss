// Exemplo: Coloque este código no seu script.js

// 1. Defina a data do início do namoro
const startDate = new Date('2025-08-28'); // Mude para a data correta (Ano, Mês, Dia)

function updateLoveDuration() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    // Agora que o elemento existe no index.html, ele funcionará
    const durationElement = document.getElementById('love-days');
    
    if (durationElement) {
        durationElement.innerHTML = `Estamos juntos há <strong>${diffDays}</strong> dias! ❤️`;
    }
}

// Chame a função quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    updateLoveDuration();
});