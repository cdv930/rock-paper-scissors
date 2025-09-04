function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice(){
    let humanChoice = prompt("Choose your move! Rock, Paper, or Scissors?","");
   return humanChoice;
}


function playGame(){

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    const loseMessage = "You lost, " + computerChoice + " beats " + humanChoice + "!";
    const winMessage = "You won, " + humanChoice + " beats " + computerChoice + "!";
    const tieMessage = "It's a tie!";

    if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        console.log(loseMessage);
        computerScore += 1;
      } else if (computerChoice == "scissors") {
        console.log(winMessage);
        humanScore += 1;
      } else {
        console.log(tieMessage);
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "scissors") {
        console.log(loseMessage);
        computerScore += 1;
      } else if (computerChoice == "rock") {
        console.log(winMessage);
        humanScore += 1;

      } else {
        console.log(tieMessage);
      }
    }
    else {
      if (computerChoice == "rock") {
        console.log(loseMessage);
        computerScore += 1;
      } else if (computerChoice == "paper") {
        console.log(winMessage);
        humanScore += 1;
      } else {
        console.log(tieMessage);
      }
    }
  }

  for (let round = 0; round < 5; round++){
    
  playRound();
}
console.log("Human Score: "+ humanScore + " Computer Score: "+computerScore);
  if (humanScore > computerScore){
    console.log("You won!")
  }
  else if (humanScore == computerScore){
    console.log("It's a tie!")
  }
  else{ console.log("You lost!")}
}

playGame();