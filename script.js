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

function playGame(){
    for (let index = 0; index < 5; index++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase(); 
        playRound(humanChoice, computerChoice);
    }
    console.log(`\nFinal Score → You: ${humanScore}  Computer: ${computerScore}`);
}

playGame();