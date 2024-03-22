let timer;
let running = false;
let totalSeconds = 0;

// iniciar o temporizador
const startTimer = () => {
    setInitialTimer();
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000)
    }
}

// pausar o temporizador
const pauseTimer = () => {
    running = false;
    clearInterval(timer);
}

// resetar o temporizador
const resetTimer = () => {
    running = false;
    clearInterval(timer);
    totalSeconds = 0;
    updateDisplay();
}

// atualizar display temporizador
const updateTimer = () => {
    totalSeconds -= 1;
    if (totalSeconds <= 0) {
        pauseTimer();
        /* playThemeMusic(); // para tocar a música referente ao tema escolhido */
        return;
    }
    updateDisplay();
}

// atualizar o display com o tempo restante
const updateDisplay = () => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2,'0'); // calcula o num. de h. restante, converte em string e coloca um zero a esquerda se o numero tiver apenas um digito
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2,'0');
    document.getElementById('displayCount').textContent = `${hours}:${minutes}:${seconds}`;
}

// configurar o tempo inicial do temporizador
const setInitialTimer= () => {
    const hours = parseInt(document.getElementById('inputHour').value) || 0;
    const minutes = parseInt(document.getElementById('inputMinute').value) || 0;

    totalSeconds = (hours * 3600) + (minutes * 60);
    updateDisplay();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

document.getElementById('inputHour').addEventListener('input', setInitialTimer);
document.getElementById('inputMinute').addEventListener('input', setInitialTimer);