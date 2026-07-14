function getComputerChoice (){
   let choice =  Math.floor(Math.random() * 3 + 1)

   if (choice === 1){
    return choice = "Rock"
   } else if (choice === 2){
    return choice = "paper"
   } else {
    return choice = "scissors"
   }
}


function getHumanChoice (user){
    return user = prompt("Enter your choice", "").toLowerCase()
} 


function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (computerChoice === "rock" && humanChoice === "rock"){
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`
    } else if (computerChoice === "rock" && humanChoice === "paper"){
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win!`
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win`
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you win`
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so you lose`
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        return `computer choice is ${computerChoice} and you chose ${humanChoice} so it's a tie`
    } else {
        return "Make sure you enter a valid choice"
    }

}
console.log(playRound());
console.log(playRound())



// console.log("human choice is " + humanChoice)
// console.log("computer choice is " + computerChoice)