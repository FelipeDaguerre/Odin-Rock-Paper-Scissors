const choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    if (playerWins >= 5 || computerWins >= 5) return;
    const computerSelection = computerPlay();
    let resultMessage = '';

    if (playerSelection === computerSelection) {
        resultMessage = `It's a draw! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        
        resultMessage = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        playerWins++;
    } else {
        resultMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        computerWins++;
    }

    resultsDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score → Player: ${playerWins} | Computer: ${computerWins}`;

    if (playerWins === 5 || computerWins === 5) {
        if (playerWins > computerWins) {
            winnerDiv.textContent = " You are the winner of the game!";
        } else {
            winnerDiv.textContent = " The computer wins the game!";
        }
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
