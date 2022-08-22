/* Function to select random string from 3 possibilities (Rock, Paper, Scissors)
Write a function to play single round of game
There will be two selections for rock, paper, or scissors, one by player, one by computer
Declare a winner depending on results*/




var playerChoice = "rock";
let computerChoice = getComputerChoice();
let roundWinner = playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase());
let returnMessage = updateScore(roundWinner, playerChoice, computerChoice);
console.log("player " + playerChoice);
console.log("computer " + computerChoice);
console.log(returnMessage);

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
        return "Computer wins!";
    }

   else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        return "Player wins!";
    }
}

//Parameters: Takes roundWinner after running playRound
//Return: Returns message to player accordingly
function updateScore(winner, playerSelection, computerSelection) {
    if (winner === "Tie!") 
        return `It's a tie!`
    if (winner === "Computer wins!") 
        return `Computer wins! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection.toLowerCase()}`
    if (winner === "Player wins!") 
        return `Player wins! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`  
}

//Slice first letter of string, apply toUpperCase, add back rest of string
function capitalizeFirstLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() 
}

//Parameters: None
//Description: Call function game, to play playRound 5 times, keep score of player & computer, display score at the end of 5 rounds
//Return: Results of 5 rounds as a string

function game() {
    //Make a loop
    
    //Call playRound function
    //Store the winner of each playRound function
    //Return a score board
}

