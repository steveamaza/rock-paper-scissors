let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`The game ended as a draw! You both chose ${humanChoice}`)
    }
    else if (humanChoice == "rock" && computerChoice == "paper" || 
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }
    else {
        console.log(`You win!  ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    }
}

function playGame(){
    for (let index = 0; index < 5; index++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice);
    }
    console.log(`\nFinal Score → You: ${humanScore}  Computer: ${computerScore}`);
}

playGame();