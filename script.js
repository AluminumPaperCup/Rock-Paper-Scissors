 //// Your JavaScript goes here!

  // remember basic function syntax!!

  // function nameOfFunction(a, b)  {
  //  return (a , b);
  // }

// Create a new function named getComputerChoice
// break down problem into components
// see if we can get the computer to return just rock, it doesn't have to be random

let computerChoice = Math.random();
console.log (computerChoice);

let humanScore = 0;
console.log(humanScore);

let computerScore = 0;
console.log(computerScore);

function getHumanChoice() {
 console.log(prompt("Type in Rock, Paper, or Scissors!"));
}

function getComputerChoice() {
  if (computerChoice <= 0.33 ) {
      alert("Rock!");
  }
  else if (computerChoice <= 0.67 ) {
    alert("Paper!");
}
  else if (computerChoice > 0.67) {
    alert("Scissors!");
}

}