// The player will play against the computer

// Creation of computer function, generates the computer choice
function getComputerChoice() {
    computerChoice = '';
    computerNumber = Math.floor(Math.random() * 3 );
    
    // Applies logic to select the computer choice
    if (computerNumber == 0) {
        computerChoice += 'rock';
    } else if (computerNumber == 1) {
        computerChoice += 'paper'; 
    } else if (computerNumber == 2) {
        computerChoice += 'scissors';
    }
    return computerChoice;
}

// Create getHumanChoice function 
function getHumanChoice() {
    userChoice = prompt('Rock, Paper, or Scissors? ').toLowerCase();

    // Ensure that the user enters a valid response
    if (userChoice === 'rock') {
        return userChoice;
    } else if (userChoice === 'paper') {
        return userChoice;
    } else if (userChoice === 'scissors') {
        return userChoice;
    } else {
        return 'You entered an invalid choice...';
    }
}

// Creating and initializing human and computer score variables
let humanScore = 0;
let computerScore = 0;