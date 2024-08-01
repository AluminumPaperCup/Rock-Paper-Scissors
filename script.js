 //// Your JavaScript goes here!
const poison = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Function that allows the Computer to make a choice and categorize it as Rock, Paper, or Scissors
function getComputerChoice() {
  return poison[Math.floor(Math.random() * poison.length)];
};

// Selection process function that executes both computer and human choices
function game(buttonId) {
  let computerSelection = getComputerChoice();
  let humanSelection = buttonId;
  let result = playRound(humanSelection, computerSelection);
  };

  //Event Listeners for each button selection of human selection
  document.getElementById("rock").addEventListener("click" , () => game("rock"));


//Function that plays 1 round of game (game logic)
function playRound(humanSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = '';
 
  if (humanSelection === computerSelection) {
   result = `Ya'll both suck! You both picked ${humanSelection}.`;
  } 
  else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    result = `You win! You picked ${humanSelection}.`  
  }
  else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    result = `You win! You picked ${humanSelection}.`;
  }
  else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    result = `You win! You picked ${humanSelection}.`;
  }
  else {
    computerScore +=1;
    result = `You lose! Computer chose ${computerSelection} and that beats ${humanSelection}`;
  }
  alert (result);
}