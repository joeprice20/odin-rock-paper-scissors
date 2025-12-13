
const ResultText = document.querySelector("#ResultText")
const ComputerChoiceText = document.querySelector("#ComputerChoiceText")

const HumanScoreText = document.querySelector("#HumanScore")
const ComputerScoreText = document.querySelector("#ComputerScore")

let HumanScore = 0;
let ComputerScore = 0;
let bHasGameEnded = false;

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

function resetGame() {
    HumanScore = 0;
    HumanScoreText.textContent = "Your Score: 0";
    ComputerScore = 0;
    ComputerScoreText.textContent = "Computer Score: 0";
    ResultText.style.color = "Black";
    bHasGameEnded = false;
}

function calculateWinner(HumanChoice, ComputerChoice){
    if (HumanChoice == "rock") {
        if (ComputerChoice == "rock") {
            return drawMessage;
        }
        else if (ComputerChoice == "paper") {
            return loseMessage + paperWin;
        }
        else if (ComputerChoice == "scissors") {
            return winMessage + rockWin;
        }
    }
    else if (HumanChoice == "paper") {
        if (ComputerChoice == "rock") {
            return winMessage + paperWin;
        }
        else if (ComputerChoice == "paper") {
            return drawMessage;
        }
        else if (ComputerChoice == "scissors") {
            return loseMessage + scissorsWin;
        }
    }
    else if (HumanChoice == "scissors") {
        if (ComputerChoice == "rock") {
            return loseMessage + rockWin;
        }
        else if (ComputerChoice == "paper") {
            return winMessage + scissorsWin;
        }
        else if (ComputerChoice == "scissors") {
            return drawMessage;
        }
    }
}

function playRound(e) {

    if (bHasGameEnded) {
        resetGame();
    }

    HumanChoice = e.target.textContent;

    HumanChoice = HumanChoice.toString().toLowerCase();
    let ComputerChoice = getComputerChoice();

    ComputerChoiceText.textContent = "Computer Chose: " + ComputerChoice;

    let resultMessage = calculateWinner(HumanChoice, ComputerChoice)




    

    if (resultMessage.includes("win")) {
        HumanScore++;
        HumanScoreText.textContent = "Your Score: " + HumanScore;
    }
    else if (resultMessage.includes("lose")) {
        ComputerScore++;
        ComputerScoreText.textContent = "Computer Score: " + ComputerScore;
    }

    ResultText.textContent = resultMessage;

    if (HumanScore >= 5) {
        ResultText.textContent = "You win the whole game!"
        ResultText.style.color = "green";
        bHasGameEnded = true;
    }
    else if (ComputerScore >= 5) {
        ResultText.textContent = "Computer won the whole game! Better luck next time."
        ResultText.style.color = "red";
        bHasGameEnded = true;
    }



}


const rockWin = "Rock beats Scissors";
const scissorsWin = "Scissors beats Paper";
const paperWin = "Paper beats Rock";

const winMessage = "You win! ";
const loseMessage = "You lose! ";
const drawMessage = "It's a draw!";

const RockButton = document.querySelector("#RockButton");
const PaperButton = document.querySelector("#PaperButton");
const ScissorsButton = document.querySelector("#ScissorsButton");

RockButton.addEventListener("click", playRound)
PaperButton.addEventListener("click", playRound)
ScissorsButton.addEventListener("click", playRound)





