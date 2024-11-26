let humancounterElement = document.getElementById('yo');
let botcounterElement = document.getElementById('botpuntos');
let humancounter = 0;
let botcounter = 0;

let generalcounter = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        generalcounter++;
        console.log("Es un empate!");
        return;
    }

    // Lógica para determinar el ganador
    if (humanSelection === 1 && computerSelection === 3) {
        humancounter++;
        generalcounter++;
        console.log("Ganaste esta ronda! (Piedra vs Tijeras)");
    } else if (humanSelection === 2 && computerSelection === 1) {
        humancounter++;
        generalcounter++;
        console.log("Ganaste esta ronda! (Papel vs Piedra)");
    } else if (humanSelection === 3 && computerSelection === 2) {
        humancounter++;
        generalcounter++;
        console.log("Ganaste esta ronda! (Tijeras vs Papel)");
    } else {
        botcounter++;
        generalcounter++;
        console.log("Perdiste esta ronda!");
    }

    if (generalcounter >= 5){
        alert("Round Finished")
        botcounter = 0;
        humancounter = 0;
        generalcounter = 0;
    }

    humancounterElement.textContent = humancounter;
    botcounterElement.textContent = botcounter;

    console.log(`Marcador - Humano: ${humancounter}, Bot: ${botcounter}`);

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
