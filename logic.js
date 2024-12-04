let humancounterElement = document.getElementById('yo');
let botcounterElement = document.getElementById('botpuntos');
let humancounter = 0;
let botcounter = 0;


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("Es un empate!");
        return;
    }

    // Lógica para determinar el ganador
    if (humanSelection === 1 && computerSelection === 3) {
        humancounter++;
        console.log("Ganaste esta ronda! (Piedra vs Tijeras)");
    } else if (humanSelection === 2 && computerSelection === 1) {
        humancounter++;
        console.log("Ganaste esta ronda! (Papel vs Piedra)");
    } else if (humanSelection === 3 && computerSelection === 2) {
        humancounter++;
        console.log("Ganaste esta ronda! (Tijeras vs Papel)");
    } else {
        botcounter++;
        console.log("Perdiste esta ronda!");
    }

    humancounterElement.textContent = humancounter;
    botcounterElement.textContent = botcounter;

    console.log(`Marcador - Humano: ${humancounter}, Bot: ${botcounter}`);

    if (humancounter >= 5){
        alert("You Win")
        botcounter = 0;
        humancounter = 0;
    }
    if (botcounter >= 5){
        alert("You Lose")
        botcounter = 0;
        humancounter = 0;
    }
    humancounterElement.textContent = humancounter;
    botcounterElement.textContent = botcounter;

}

function getComputerChoice() {
    var botChoice = Math.floor(Math.random() * 3) + 1; // 1: Piedra, 2: Papel, 3: Tijeras
    return botChoice;
}

function getHumanChoice() {
    var myChoice = 0; // Inicializar la elección del humano

    // Asignar eventos a los botones
    document.getElementById("rock").onclick = function() {
        myChoice = 1; // Piedra
        playGame(myChoice);
    };

    document.getElementById("paper").onclick = function() {
        myChoice = 2; // Papel
        playGame(myChoice);
    };

    document.getElementById("scissors").onclick = function() {
        myChoice = 3; // Tijeras
        playGame(myChoice);
    };
}

function playGame(humanSelection) {
    var computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

// Iniciar el juego
getHumanChoice();
