const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");
const playerRoundChoice = document.querySelector("#player-round-choice");
const computerRoundChoice = document.querySelector("#computer-round-choice");
const playAgainBtn = document.querySelector("#reset");
const gameMessage = document.querySelector(".message");
const orginalMessage = gameMessage.textContent;

playAgainBtn.addEventListener("click", () => {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  humanScore = 0;
  computerScore = 0;
  playerScore.textContent = 0;
  compScore.textContent = 0;
  playAgainBtn.style.display = "none";
  gameMessage.textContent = orginalMessage;
  gameMessage.style.cssText = "";
});

// the human choice

function getHumanChoice(btn) {
  btn.addEventListener("click", (e) => {
    const choice = e.currentTarget
      .querySelector("span")
      .textContent.toLowerCase();
    console.log(choice);
    playRound(choice);
  });
}
function setHumanEvents() {
  getHumanChoice(rockBtn);
  getHumanChoice(paperBtn);
  getHumanChoice(scissorsBtn);
}
setHumanEvents();

//the computer choice

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[choice];
}

//the round play

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  playerRoundChoice.innerHTML = getHtmlIcons(humanChoice);
  computerRoundChoice.innerHTML = getHtmlIcons(computerChoice);

  if (
    (computerChoice === "rock" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "scissors")
  ) {
    roundResult.textContent = "TIE";
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    playerScore.textContent = humanScore;

    if (humanScore === 5) {
      endGame("congratulation, You Won!");
      gameMessage.style.cssText =
        "color: #7EE36D; font-size:22px; text-transform: uppercase; font-weight:500;";
    } else {
      roundResult.textContent = "you";
    }
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    compScore.textContent = computerScore;

    if (computerScore === 5) {
      endGame("The computer won, try again");
      gameMessage.style.cssText =
        "color: #FF646B; font-size:22px; text-transform: uppercase; font-weight:500;";
    } else {
      roundResult.textContent = "computer";
    }
  }
}

function endGame(message) {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  gameMessage.textContent = message;
  playAgainBtn.style.display = "block";
  playerRoundChoice.textContent = "";
  computerRoundChoice.textContent = "";
  roundResult.textContent = "";
}

function getHtmlIcons(choice) {
  if (choice === "rock") {
    return '<i class="fa-solid fa-hand-back-fist"></i>';
  } else if (choice === "paper") {
    return '<i class="fa-solid fa-hand"></i>';
  } else if (choice === "scissors") {
    return '<i class="fa-solid fa-hand-scissors"></i>';
  }
}
