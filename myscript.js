/* Function to select random string from 3 possibilities (Rock, Paper, Scissors)
Write a function to play single round of game
There will be two selections for rock, paper, or scissors, one by player, one by computer
Declare a winner depending on results*/




const playerSelection = "rock";
const rps = Array("rock", "paper", "scissors");
let roundWinner = " ";
let computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
          case 0:
            return 'rock'
          case 1:
            return 'paper'
          case 2:
            return 'scissors'
        }
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection().toLowerCase();

    if (playerSelection === computerSelection)
    {
        roundWinner = "tie";
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        roundWinner = "computer";
    }

   else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        roundWinner = "player";
    }
}

