const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(){
}
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = '';

  // Check for a tie first
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  }
  // Check for player win conditions
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  }
  // All other cases are computer wins
  else {
    result = "You Lose!";
  }

  playerDisplay.textContent=`Player: ${playerChoice} `
  computerDisplay.textContent=`Computer: ${computerChoice}`;
  resultDisplay.textContent=` ${result}`;
}