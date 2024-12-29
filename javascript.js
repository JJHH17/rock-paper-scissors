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

// Creation of playGame function
function playGame(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        newDiv.textContent = 'You win! Rock beats Scissors!';
        document.body.appendChild(newDiv);
        humanScore ++;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        newDiv.textContent = 'You win! Paper beats Rock!';
        document.body.appendChild(newDiv);
        humanScore ++;

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        newDiv.textContent = 'You win! Scissors beats Paper!';
        document.body.appendChild(newDiv);
        humanScore ++;

    // DRAW criteria
    // Does not change score
    } else if (humanChoice === computerChoice) {
        newDiv.textContent = 'This was a draw!';
        document.body.appendChild(newDiv);
        //console.log('This was a draw!');

    // Criteria of computer winning
    // Increments computerScore variable
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        newDiv.textContent = 'Sorry! You lose this round! Paper beats Rock.';
        document.body.appendChild(newDiv);
        //console.log('Sorry! You lose this round! Paper beats Rock.');
        computerScore ++;

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        newDiv.textContent = 'Sorry! You lose this round! Scissors beats Paper.';
        document.body.appendChild(newDiv);
        //console.log('Sorry! You lose this round! Scissors beats Paper.');
        computerScore ++;

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        newDiv.textContent = 'Sorry! You lose this round! Rock beats Paper.';
        document.body.appendChild(newDiv);
        //console.log('Sorry! You lose this round! Rock beats Paper.');
        computerScore ++;
        
    }

    // print the current scores
    console.log(`The current score is: Human ${humanScore}, Computer ${computerScore}.`);
}
