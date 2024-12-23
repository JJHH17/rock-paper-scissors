// The player will play against the computer

// Creation of computer function, generates the computer choice
function getComputerChoice() {
    computerChoice = '';
    computerNumber = Math.floor(Math.random() * 3 );
    
    // Applies logic to select the computer choice
    if (computerNumber == 0) {
        computerChoice += 'Rock';
    } else if (computerNumber == 1) {
        computerChoice += 'Paper'; 
    } else if (computerNumber == 2) {
        computerChoice += 'Scissors';
    }
    return computerChoice;
}

