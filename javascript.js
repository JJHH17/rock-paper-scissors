// The player will play against the computer

// Adding event listener for rock button click
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    gameLogic('rock', getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    gameLogic('paper', getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    gameLogic('scissors', getComputerChoice());
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
function gameLogic(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        newDiv.textContent = 'You win!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        humanScore ++;

    // DRAW criteria
    } else if (humanChoice === computerChoice) {
        newDiv.textContent = 'This was a draw!';
        scoreTracker.insertBefore(newDiv, scoreDiv);

    // Criteria of computer winning
    } else {
        newDiv.textContent = 'Sorry! You lose this round!';
        scoreTracker.insertBefore(newDiv, scoreDiv);
        computerScore ++;
    }
    // appends the score via a div
    scoreDiv.textContent = `The current score is: Human ${humanScore}, Computer ${computerScore}.`;
}

// Prints the final score via div 
scoreTracker.appendChild(scoreDiv);

// Play game loop