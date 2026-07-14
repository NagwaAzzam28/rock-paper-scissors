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



console.log(getComputerChoice())