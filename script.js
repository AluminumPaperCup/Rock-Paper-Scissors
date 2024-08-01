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
  updateResult(result);
  updateScore ();
  };

  //Event Listeners for each button selection of human selection
  document.getElementById("rock").addEventListener("click" , () => game("rock"));
  document.getElementById("paper").addEventListener("click" , () => game("paper"));
  document.getElementById("scissors").addEventListener("click" , () => game("scissors"));

// Function that plays 1 round of game (game logic)
function playRound(humanSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = '';
 
  if (humanSelection === computerSelection) {
   result = `Ya'll both suck! You both picked ${humanSelection}.`;
  } 
  else if (
          (humanSelection === "rock" && computerSelection === "scissors") || 
          (humanSelection === "paper" && computerSelection === "rock")    ||
          (humanSelection === "scissors" && computerSelection === "paper") 
    ) {
    humanScore += 1;
    result = `You win! You picked ${humanSelection}.`;
  } else {
    computerScore +=1;
    result = `You lose! Computer chose ${computerSelection} and that beats ${humanSelection}`;
  }
  return result;
}

// Results updater per match played
function updateResult(result) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = result;
  if (humanScore === 5 ) {
    resultDiv.textContent = 'YOU HAVE WON THE GAME MUAHAUHAUHAHUAHAUAHAH';
    location.reload();
  } else if (computerScore === 5) {
    resultDiv.textContent = 'y0u s00k. It is time to revaluate thy life choices and reflect.';
    location.reload();
  } 
}

// Score updater per match played
function updateScore() {
  const humanScoreDiv = document.getElementById("human-score");
  const computerScoreDiv = document.getElementById("computer-score");
  humanScoreDiv.textContent = `Human: ${humanScore}`;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;
}