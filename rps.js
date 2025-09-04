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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
   humanChoice = getHumanChoice();
   humanChoice = humanChoice.toLowerCase();
   if (humanChoice == "rock"){
    humanChoice ==0 ;
   } else if (humanChoice == "paper"){
    humanChoice == 1;
   }else {
     humanChoice == 2;
   }

   computerChoice = getComputerChoice();
return computerChoice + humanChoice;
}

console.log(playRound());
