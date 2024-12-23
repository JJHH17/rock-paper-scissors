// The player will play against the computer
// Creation of computer variable
let getComputerChoice = Math.floor(Math.random()*3);

let computerChoice = '';

// Updates the get a random choice between rock, paper or scissors 
//let computerNumber = Math.floor(Math.random()*3);

if (getComputerChoice == 0) {
    computerChoice === 'Rock';
} else if (getComputerChoice == 1) {
    computerChoice === 'Paper'; 
} else {
    computerChoice === 'Scissors';
}


console.log(computerChoice);