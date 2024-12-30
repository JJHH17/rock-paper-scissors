// // The player will play against the computer

// Creation of variables that will hold the scoring of the game
let humanScore = 0;
let computerScore = 0;


// Add divs which will print the score to the page
const scoresContainer = document.querySelector('#scoresContainer');
const gameResult = document.createElement('div');
gameResult.setAttribute('class', 'gameResult');
const gameScores = document.createElement('div');
gameScores.setAttribute('class', 'gameScores');
// Appends the above to scoresContainer 
scoresContainer.appendChild(gameResult);
scoresContainer.appendChild(gameScores);
// Could work on cleaning this up 


// Computer Choice logic, selects an option based on random number
function getComputerChoice() {
    computerChoice = '';
    computerNumber = Math.floor(Math.random() * 3 );
    
    if (computerNumber == 0) {
        computerChoice += 'rock';
    } else if (computerNumber == 1) {
        computerChoice += 'paper'; 
    } else if (computerNumber == 2) {
        computerChoice += 'scissors';
    }
    return computerChoice;
}


// Game logic function 
function gameLogic(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
            gameResult.textContent = `You won this round! ${humanChoice} beats ${computerChoice}`;
            // Increment human score, display overall current score
            humanScore++;
            gameScores.textContent = `The current score is: Human: ${humanScore}, Computer ${computerScore}`;

    } else if (humanChoice === computerChoice) {
        gameResult.textContent ='This round was a draw!';
        gameScores.textContent = `The current score is: Human: ${humanScore}, Computer ${computerScore}`;

    } else {
        gameResult.textContent = `You lost this round! ${computerChoice} beats ${humanChoice}`;
        // Increment computer score, display overall current score
        computerScore++;
        gameScores.textContent = `The current score is: Human: ${humanScore}, Computer ${computerScore}`;

    }
    if (humanScore === 5) {
        gameScores.textContent = `You win! Final Score... Human: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore =  0;

    } else if (computerScore === 5) {
        gameScores.textContent = `You lose! Final Score... Human: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}

// Add click event listeners to rock, paper and scissors ui buttons
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