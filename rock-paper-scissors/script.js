function playGame() {
    const choices = ["rock", "paper", "scissors"];
    const shortcuts = { r: "rock", p: "paper", s: "scissors" };

    let playerWins = 0;
    let computerWins = 0;

    for (let round = 1; round <= 5; round++) {
        let playerChoice = prompt(`Round ${round} - Choose: rock (r), paper (p) or scissors (s)`).toLowerCase();

        if (shortcuts[playerChoice]) {
            playerChoice = shortcuts[playerChoice];
        }

        if (!choices.includes(playerChoice)) {
            alert("Invalid choice! Please choose between: rock (r), paper (p) or scissors (s).");
            round--;
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * 3)];

        console.log("%cYou chose: " + playerChoice, "color: green; font-weight: bold;");
        console.log("%cComputer chose: " + computerChoice, "color: red; font-weight: bold;");

        if (playerChoice === computerChoice) {
            alert(`Round ${round}: You chose ${playerChoice}, and the computer ${computerChoice}. It's a draw!`);
            console.log("%cDraw", "color: blue; font-weight: bold;");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            alert(`Round ${round}: You chose ${playerChoice}, and the computer ${computerChoice}. You win!`);
            console.log("%cYou win", "color: blue; font-weight: bold;");
            playerWins++;
        } else {
            alert(`Round ${round}: You chose ${playerChoice}, and the computer ${computerChoice}. You lost!`);
            console.log("%cYou lose", "color: blue; font-weight: bold;");
            computerWins++;
        }

    
        console.log(`%cScore after round ${round} → Player: ${playerWins} | Computer: ${computerWins}`, "color: purple; font-weight: bold;");
    }


    if (playerWins > computerWins) {
        alert(`Game Over! You won more matches (${playerWins} vs ${computerWins})`);
    } else if (computerWins > playerWins) {
        alert(`Game Over! The computer won more matches (${computerWins} vs ${playerWins})`);
    } else {
        alert(`Game Over! It's a tie (${playerWins} vs ${computerWins})`);
    }
}

playGame();
