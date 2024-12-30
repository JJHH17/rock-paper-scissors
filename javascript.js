// The player will play against the computer

// Adding event listener for rock button click
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playGame('rock', getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playGame('paper', getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playGame('scissors', getComputerChoice());
});

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

// Create a new DIV which we will store the results of the game in once completed
const newDiv = document.createElement('div');
newDiv.id = 'resultDiv';

// Creating and initializing human and computer score variables
let humanScore = 0;
let computerScore = 0;

// Create a div that we will use to track score 
const scoreDiv = document.createElement('div');
scoreDiv.id = "scoreDiv";


// Creation of playGame function
function playGame(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        newDiv.textContent = 'You win! Rock beats Scissors!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        humanScore ++;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        newDiv.textContent = 'You win! Paper beats Rock!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        humanScore ++;

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        newDiv.textContent = 'You win! Scissors beats Paper!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        humanScore ++;

    // DRAW criteria
    // Does not change score
    } else if (humanChoice === computerChoice) {
        newDiv.textContent = 'This was a draw!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        //console.log('This was a draw!');

    // Criteria of computer winning
    // Increments computerScore variable
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        newDiv.textContent = 'Sorry! You lose this round! Paper beats Rock.';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        //console.log('Sorry! You lose this round! Paper beats Rock.');
        computerScore ++;

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        newDiv.textContent = 'Sorry! You lose this round! Scissors beats Paper.';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        //console.log('Sorry! You lose this round! Scissors beats Paper.');
        computerScore ++;

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        newDiv.textContent = 'Sorry! You lose this round! Rock beats Paper.';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        //console.log('Sorry! You lose this round! Rock beats Paper.');
        computerScore ++;
        
    }
    // appends the score via a div
    scoreDiv.textContent = `The current score is: Human ${humanScore}, Computer ${computerScore}.`;
}

// Prints the final score via div 
scoreTracker.appendChild(scoreDiv);
