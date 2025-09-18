function playGame() {
    const choices = ["rock", "paper", "scissors"];
    
    const shortcuts = {
        r: "rock",
        p: "paper",
        s: "scissors"
    };

    let playerChoice = prompt("Choose: rock (r), paper (p) or scissors (s)").toLowerCase();

    if (shortcuts[playerChoice]) {
        playerChoice = shortcuts[playerChoice];
    }

    if (!choices.includes(playerChoice)) {
        alert("Invalid choice! Please choose between: rock (r), paper (p) or scissors (s).");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("%cYou chose: " + playerChoice, "color: green; font-weight: bold;");
    console.log("%cComputer chose: " + computerChoice, "color: red; font-weight: bold;");

    if (playerChoice === computerChoice) {
        alert("You chose " + playerChoice + ", and the computer " + computerChoice + ". It's a draw!");
        console.log("%cDraw", "color: blue; font-weight: bold;");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You chose " + playerChoice + ", and the computer " + computerChoice + ". You win!");
        console.log("%cYou win", "color: blue; font-weight: bold;");
    } else {
        alert("You chose " + playerChoice + ", and the computer " + computerChoice + ". You lost!");
        console.log("%cYou lose", "color: blue; font-weight: bold;");
    }
}

playGame();
