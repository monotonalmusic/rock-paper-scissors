/* Function to select random string from 3 possibilities (Rock, Paper, Scissors)
Write a function to play single round of game
There will be two selections for rock, paper, or scissors, one by player, one by computer
Declare a winner depending on results*/



function playRound(playerSelection, computerSelection) {

} 

const playerSelection = "rock";
const computerSelection = getComputerChoice();


function getComputerChoice(str) {
    var rps = Array('rock', 'paper', 'scissors');
    rps = (str[Math.floor(Math.random() * str.length)]);
}

console.log(getComputerChoice)