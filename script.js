let playerScore = 0;
let computerScore = 0;

function getChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerChoice) {
    let computerChoice = getChoice();
    result = ""

    if (playerChoice === computerChoice) {
        result = "Tie!"
    } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        result = "You Win!"
        playerScore++
    } else {
        result = "You Lose..."
        computerScore++
    }

    roundWinner(result);
    totalScores();

    if (playerScore === 5) {
        announceWinner("Congrats!")
    } else if (computerScore === 5) {
        announceWinner("Aww.....")
    }
}

function roundWinner(result) {
    let roundDiv = document.getElementById("outcome")
    roundDiv.textContent = result
}

function totalScores() {
    let totalDiv = document.getElementById("score")
    totalDiv.textContent = `${playerScore} - ${computerScore}`
}

function announceWinner(winner) {
    let winnerDiv = document.getElementById("outcome")
    winnerDiv.textContent = winner
    disableButtons();
}

function disableButtons() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
})
