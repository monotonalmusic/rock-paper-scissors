/* Function to select random string from 3 possibilities (Rock, Paper, Scissors)
Write a function to play single round of game
There will be two selections for rock, paper, or scissors, one by player, one by computer
Declare a winner depending on results*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
          case 0:
            return "rock"
          case 1:
            return "paper"
          case 2:
            return "scissors"
        }
}

let computerScore = 0;
let playerScore = 0;


//Parameters: Takes playerSelection and computerSelection as a string
//Return: String of winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    {
        return "Tie!";
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        computerScore = computerScore + 1
        return "Computer wins!";
    }

   else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        playerScore = playerScore + 1
        return "Player wins!";
    }
}

//Takes the result string and displays it on the HTML. Also updates scores based 
//the global variables
function updateDisplay(roundResult) {
    console.log(roundResult);
    document.getElementById("results").innerHTML = roundResult;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
    if (computerScore == 5) {
        alert("Computer wins!")
        window.location.reload();
    } 
    
    else if (playerScore == 5) {
        alert("Player wins!")
        window.location.reload();
    }
}

document.getElementById("rock").addEventListener("click", function () {
    updateDisplay(playRound("rock", getComputerChoice()));
});

document.getElementById("paper").addEventListener("click", function () { 
    updateDisplay(playRound("paper", getComputerChoice()));
    
});

document.getElementById("scissors").addEventListener("click", function () { 
    updateDisplay(playRound("scissors", getComputerChoice()));
});




