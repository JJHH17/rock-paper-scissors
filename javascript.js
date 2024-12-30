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
            console.log('You win!');
    } else if (humanChoice === computerChoice) {
        console.log('It was a draw!');
    } else {
        console.log('The computer won!');
    }
}

// Add click event listeners to rock, paper and scissors ui buttons
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    // to be tied with game function
    gameLogic('rock', getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    // to be tied with game logic
    gameLogic('paper', getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    // to be tied with game logic 
    gameLogic('scissors', getComputerChoice());
});




















// // Adding event listener for rock button click
// const rock = document.querySelector("#rock");
// rock.addEventListener("click", () => {
//     gameLogic('rock', getComputerChoice());
// });

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", () => {
//     gameLogic('paper', getComputerChoice());
// });

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", () => {
//     gameLogic('scissors', getComputerChoice());
// });

// // Creation of computer function, generates the computer choice
// function getComputerChoice() {
//     computerChoice = '';
//     computerNumber = Math.floor(Math.random() * 3 );
    
//     // Applies logic to select the computer choice, based on random number generated
//     if (computerNumber == 0) {
//         computerChoice += 'rock';
//     } else if (computerNumber == 1) {
//         computerChoice += 'paper'; 
//     } else if (computerNumber == 2) {
//         computerChoice += 'scissors';
//     }
//     return computerChoice;
// }

// // Create a new DIV which we will store the results of the game in once completed
// const newDiv = document.createElement('div');
// newDiv.id = 'resultDiv';

// // Creating and initializing human and computer score variables
// let humanScore = 0;
// let computerScore = 0;

// // Create a div that we will use to track score 
// const scoreDiv = document.createElement('div');
// scoreDiv.id = "scoreDiv";


// // Creation of playGame function
// function gameLogic(humanChoice, computerChoice) {

//     if (humanChoice === 'rock' && computerChoice === 'scissors' ||
//         humanChoice === 'paper' && computerChoice === 'rock' ||
//         humanChoice === 'scissors' && computerChoice === 'paper') {
//         newDiv.textContent = 'You win!';
//         scoreTracker.insertBefore(newDiv, scoreDiv);
//         humanScore ++;

//     // DRAW criteria
//     } else if (humanChoice === computerChoice) {
//         newDiv.textContent = 'This was a draw!';
//         scoreTracker.insertBefore(newDiv, scoreDiv);

//     // Criteria of computer winning
//     } else {
//         newDiv.textContent = 'Sorry! You lose this round!';
//         scoreTracker.insertBefore(newDiv, scoreDiv);
//         computerScore ++;
//     }
    
//     // Displays final score once game completes
//     if (humanScore === 5) {
//         scoreDiv.textContent = `You win! Human ${humanScore}, Computer ${computerScore}.`;
//         humanChoice = 0;
//         computerChoice = 0;
//     } else if (computerScore === 5) {
//         scoreDiv.textContent = `Computer Wins! Computer ${computerScore}, Human ${humanScore}.`;
//         humanChoice = 0;
//         computerChoice = 0;
//     }
    
// }

// // Prints the final score via div 
// scoreTracker.appendChild(scoreDiv);

