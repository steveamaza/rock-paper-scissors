let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const output = document.getElementById("round-result");

const displayedHumanScore = document.getElementById("human-score")
const displayedComputerScore = document.getElementById("computer-score")

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

rockButton.addEventListener('click', function (){
    playGame('rock');
});

paperButton.addEventListener('click', function (){
    playGame('paper');
});

scissorsButton.addEventListener('click', function (){
    playGame('scissors');
});

function playRound(humanChoice, computerChoice) {
    if(humanScore == 5 || computerScore == 5) {
        output.textContent = `We have a winner! \nFinal Score → You: ${humanScore}  Computer: ${computerScore}`;
    } else {
        if (humanChoice == computerChoice) {
            output.textContent = `The game ended as a draw! You both chose ${humanChoice}`;
        }
        else if (humanChoice == "rock" && computerChoice == "paper" || 
                humanChoice == "paper" && computerChoice == "scissors" ||
                humanChoice == "scissors" && computerChoice == "rock") {
            output.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            computerScore += 1
            displayedHumanScore.textContent = humanScore;
            displayedComputerScore.textContent = computerScore;
        }
        else {
            output.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            humanScore += 1;
            displayedHumanScore.textContent = humanScore;
            displayedComputerScore.textContent = computerScore;
        }
    }
}

function playGame(choice){
    let humanChoice = choice;
    let computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
}