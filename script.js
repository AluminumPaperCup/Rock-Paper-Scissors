 //// Your JavaScript goes here!

// These are the Global Scope variables
const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

let humanScore = 0;
console.log(humanScore);

let computerScore = 0;
console.log(computerScore);
// These are the Global Scope variables


// Function that allows the Human Choice to be selected and is case insensitive
function getHumanChoice() {
 console.log(prompt("Type in Rock, Paper, or Scissors!").toLowerCase());
}

// Function that allows the Computer to make a choice and categorize it as Rock, Paper, or Scissors
function getComputerChoice() {
  if (Math.random() <= 0.33 ) {
      alert("Rock!");
  }
  else if (Math.random() >= 0.66 ) {
    alert("Paper!");
}
  else if (Math.random()) {
    alert("Scissors!");
}

}

function playRound(humanChoice, computerChoice) {
    
}