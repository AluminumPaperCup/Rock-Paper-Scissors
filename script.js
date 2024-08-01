 //// Your JavaScript goes here!

let humanScore = 0;
let computerScore = 0;

// Function that allows the Computer to make a choice and categorize it as Rock, Paper, or Scissors
function getComputerChoice() {
  if (Math.random() <= 0.33 ) {
    return ("rock");
    }
  else if (Math.random() >= 0.66 ) {
    return ("paper");
    }
  else if (Math.random()) {
    return ("scissors");
    }
}

//Function that plays 1 round of game (game logic)
function playRound(humanSelection, computerSelection) {
  computerSelection = getComputerChoice();
  humanSelection = prompt("Choose 'Rock, Paper, or Scissors' ").toLowerCase();
 
  if (humanSelection === computerSelection) {
    return (`Ya'll both suck! You both picked ${humanSelection}.`);
  } 
  else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    return (`You win! You picked ${humanSelection}.`)  
  }
  else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    return (`You win! You picked ${humanSelection}.`);
  }
  else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    return (`You win! You picked ${humanSelection}.`);
  }
  else {
    computerScore +=1;
    return (`You lose! Computer chose ${computerSelection} and that beats ${humanSelection}`);
  }
}