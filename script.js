const rockBtn = document.querySelector("#rock");
const paperkBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-result");
const playAgainBtn = document.querySelector("#reset");

playAgainBtn.addEventListener("click", () => {
  location.reload();
});
// the human choice

function getHumanChoice(btn) {
  btn.addEventListener("click", (e) => {
    const choice = e.currentTarget.innerText.toLowerCase();
    playRound(choice);
  });
}
function setHumanEvents() {
  getHumanChoice(rockBtn);
  getHumanChoice(paperkBtn);
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
  const roundResult = document.querySelector("#round-result");

  const playerRoundChoice = document.querySelector("#player-round-choice");
  playerRoundChoice.textContent = humanChoice;

  const computerChoice = getComputerChoice();
  const computerRoundChoice = document.querySelector("#computer-round-choice");
  computerRoundChoice.textContent = computerChoice;

  if (
    (computerChoice === "rock" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "scissors")
  ) {
    return (roundResult.textContent = `TIE`);
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    playerScore.textContent = humanScore;

    if (humanScore === 5) {
      rockBtn.disabled = true;
      paperkBtn.disabled = true;
      scissorsBtn.disabled = true;
      finalResult.textContent = "congratulation! You Won!";
      playAgainBtn.style.display = "block";
      playerRoundChoice.textContent = "";
      computerRoundChoice.textContent = "";
      roundResult.textContent = "";
    } else {
      return (roundResult.textContent = `YOU WIN`);
    }
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    compScore.textContent = computerScore;

    if (computerScore === 5) {
      rockBtn.disabled = true;
      paperkBtn.disabled = true;
      scissorsBtn.disabled = true;
      finalResult.textContent = "The computer wom, Good Luck next time";
      playAgainBtn.style.display = "block";
      playerRoundChoice.textContent = "";
      computerRoundChoice.textContent = "";
      roundResult.textContent = "";
    } else {
      return (roundResult.textContent = `COMPUTER WINS`);
    }
  }
}
