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