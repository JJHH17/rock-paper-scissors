// The player will play against the computer

// Creation of computer function, generates the computer choice
function getComputerChoice() {
    computerChoice = '';
    computerNumber = Math.floor(Math.random() * 3 );
    
    // Applies logic to select the computer choice, based on random number generated
    if (computerNumber == 0) {
        computerChoice += 'rock';
    } else if (computerNumber == 1) {
        computerChoice += 'paper'; 
    } else if (computerNumber == 2) {
        computerChoice += 'scissors';
    }
    return computerChoice;
}

// Create getHumanChoice function, allows the user to input a choice and is then returned
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
        return 'You entered an invalid choice...'; // Done to handle the event of the user inputting unexpected value
    }
}

// Creating and initializing human and computer score variables
let humanScore = 0;
let computerScore = 0;

// Creation of play round function
function playRound(humanChoice, computerChoice) {
    // Criteria of human winning
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors!');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock!');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper!');
    // DRAW criteria    
    } else if (humanChoice === computerChoice) {
        console.log('This was a draw!');
    // Criteria of computer winning
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('Sorry! You lose this round! Paper beats Rock.');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Sorry! You lose this round! Scissors beats Paper.');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Sorry! You lose this round! Rock beats Paper.');
    // Criteria of unsupported entry being made
    } else {
        console.log('Sorry! Please try again.');
    }
}

playRound(getHumanChoice(), getComputerChoice());