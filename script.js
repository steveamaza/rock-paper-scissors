
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice;
}

