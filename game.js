function getComputerChoice() {

    let choice = Math.random();

    if (choice <= 0.33) {
        return "rock";
    }
    else if (choice > 0.33 && choice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return (prompt("Enter rock, paper or scissors: "))
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toString().toLowerCase();

    const rockWin = "Rock beats Scissors";
    const scissorsWin = "Scissors beats Paper";
    const paperWin = "Paper beats Rock";

    const winMessage = "You win! ";
    const loseMessage = "You lose! ";
    const drawMessage = "It's a draw!";

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            return drawMessage;
        }
        else if (computerChoice == "paper") {
            return loseMessage + paperWin;
        }
        else if (computerChoice == "scissors") {
            return winMessage + rockWin;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            return winMessage + paperWin;
        }
        else if (computerChoice == "paper") {
            return drawMessage;
        }
        else if (computerChoice == "scissors") {
            return loseMessage + scissorsWin;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            return loseMessage + rockWin;
        }
        else if (computerChoice == "paper") {
            return winMessage + scissorsWin;
        }
        else if (computerChoice == "scissors") {
            return drawMessage;
        }
    }

}

function playGame(numRounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= numRounds; i++) {

        alert("Round " + i + "/" + numRounds);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        alert("Computer chose " + computerChoice);
        let firstRound = playRound(humanChoice, computerChoice);

        alert(firstRound);

        if (firstRound.includes("win")) {
            humanScore++;
        }
        else if (firstRound.includes("lose")) {
            computerScore++;
        }

        alert("Your score is: " + humanScore + "  The computers score is: " + computerScore);
    }

    alert("All rounds have been played. Time to reveal the score...")

    if (humanScore > computerScore) {
        alert("You won the whole game! Congrats!")
    }
    else if (humanScore < computerScore) {
        alert("You lost the whole game. Better luck next time buddy.")
    }
    else {
        alert("The whole game is a draw!")
    }

}

playGame(5);



