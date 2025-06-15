let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("The game ended as a draw!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore += 1
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    }
    else {
        console.log("You win")
        humanScore += 1;
    }
}

playRound();