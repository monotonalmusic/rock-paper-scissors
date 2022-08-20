/* Function to select random string from 3 possibilities (Rock, Paper, Scissors)
Write a function to play single round of game
There will be two selections for rock, paper, or scissors, one by player, one by computer
Declare a winner depending on results*/


var rps = Array('rock', 'paper', 'scissors');

function getComputerChoice(str) {
    console.log(str[Math.floor(Math.random() * str.length)]);
}

getComputerChoice(rps) 