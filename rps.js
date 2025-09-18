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

function addMessage(result) {
  const newMessage = document.createElement("p");
  newMessage.textContent = result;
  messageCenter.appendChild(newMessage);
}

function playRound(humanChoice, computerChoice) {
  const loseMessage = "You lost, " + computerChoice + " beats " + humanChoice + "!";
  const winMessage = "You won, " + humanChoice + " beats " + computerChoice + "!";
  const tieMessage = "It's a tie!";

  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      addMessage(loseMessage);
      updateScore("b");
    } else if (computerChoice == "scissors") {
      addMessage(winMessage);
      updateScore("a");
    } else {
      addMessage(tieMessage);
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      addMessage(loseMessage);
      updateScore("b");
    } else if (computerChoice == "rock") {
      addMessage(winMessage);
      updateScore("a");

    } else {
      addMessage(tieMessage);
    }
  }
  else {
    if (computerChoice == "rock") {
      addMessage(loseMessage);
      updateScore("b");
    } else if (computerChoice == "paper") {
      addMessage(winMessage);
      updateScore("a");
    } else {
      addMessage(tieMessage);
    }
  }
}

function announceWinner(playerScore, computerScore) {
  if (playerScore >= 5) {
    gameWinner.textContent = "Player Wins!";
  }
  else if (computerScore >= 5) {
    gameWinner.textContent = "Computer Wins!";
  }
}


let playerScore= 0;
let computerScore = 0;

function updateScore(winner){
  if(winner == "a"){
    playerScore +=1}
  else if(winner == "b"){
    computerScore +=1
  }
  playCount.textContent = playerScore;
  compCount.textContent = computerScore;
  announceWinner(playerScore,computerScore);
}


const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorsBtn = document.querySelector("#scissors-button");
const messageCenter = document.querySelector("#messenger");
const scoreComp = document.querySelector("#comp-points");
const scorePlayer = document.querySelector("#player-points");
const title = document.querySelector("#title");

const compCount = document.createElement("h3");
const playCount = document.createElement("h3");
const gameWinner = document.createElement("h2");

playCount.textContent = playerScore;
compCount.textContent = computerScore;



scoreComp.appendChild(compCount);
scorePlayer.appendChild(playCount);
title.appendChild(gameWinner);

rockBtn.addEventListener("click",() =>  playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));





