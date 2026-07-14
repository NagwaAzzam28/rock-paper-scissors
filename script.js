function getComputerChoice (){
   let choice =  Math.floor(Math.random() * 3 + 1)

   if (choice === 1){
    return choice = "rock"
   } else if (choice === 2){
    return choice = "paper"
   } else {
    return choice = "scissors"
   }
}


function getHumanChoice (){
    return prompt("Enter your choice", "").toLowerCase()
} 



let humanScore = 0;
let computerScore = 0;


function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock" && humanChoice === "rock"){
    
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`;  
    } else if (computerChoice === "rock" && humanChoice === "paper"){
        humanScore++ ;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win!`
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++ ;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win`
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win`
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`
    } else {
        return "Make sure you enter a valid choice"
    }
}

function playGame() {

    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())

    if (computerScore > humanScore){
        return `Computer: ${computerScore} vs Human: ${humanScore} - The Computer is the winner`
    } else if (humanScore > computerScore) {
        return `Computer: ${computerScore} vs Human: ${humanScore} - Congrats! You are the winner`
    } else {
        return `Computer: ${computerScore} vs Human: ${humanScore} - It's a Tie`
    }

    
}


console.log(playGame())



