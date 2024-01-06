//variables for capitalizing choices of players
let playerName, computerName;

//Get human input
//store input as lowercase 
function playerSelection(){
    const playerInput = prompt("Rock, Paper or Scissors?");
    const playerInputInput = playerInput.toLowerCase();
    playerName = playerInput.toLowerCase();
    return playerInputInput;
}
//generate computer choice
function computerSelection(){
    const arrayOfChoices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computerName = arrayOfChoices[randomNumber];
    return computerName;
}
//play round
function playRound(playerSelection, computerSelection){
//is player winning? it changes when player won the round!
    let playerWin = false;

//if its a tie, it turns to true and prints its a tie
    let isTie = false;

//all possible combinations, decides if a player won/lost/drew
    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            playerWin = false;
        }
        else if (computerSelection == "scissors"){
            playerWin = true;
        }
        else if (computerSelection == "rock"){
            isTie = true;
        }
    }
    else if(playerSelection == "paper"){
        if (computerSelection == "paper"){
            isTie = true;
        }
        else if (computerSelection == "scissors"){
            playerWin = false;
        }
        else if (computerSelection == "rock"){
            playerWin = true;
        }
    }
    else if(playerSelection == "scissors"){
        if (computerSelection == "paper"){
            playerWin = true;
        }
        else if (computerSelection == "scissors"){
            isTie = true;
        }
        else if (computerSelection == "rock"){
            playerWin = false;
        }
    }
//when its a ties print 'its a tie!'
    if (isTie){
        return null;
    }
//if its not a tie, print who won
    else{
        if (playerWin){
            
            return true;
        }
        else{
            return false;
        }
    }
}
//play five rounds of game
//reiskias, kad reikes pasalinti paskutines eilutes, kurios paskelbia nugaletoja, o tiesog funkcijos pabaigoje grazinti rezultata
    //if (isTie) grazinti, kad buvo lygiosios
    //kitu atveju, grazinti nugaletoja
        //jei playerWin yra true, zmogus laimejo
        //else kompas
//reikia prideti best of five logika
    //playround logika grazina nugaletoja
    //jei kompiuteris laimejo - kompiuteriui taskas
    //jei zmogus laimejo - zmogui taskas
    //daugiausiai tasku surinkes laimi

function game(){
    //keep score of player and computer
    let playerScore = 0;
    let computerScore = 0;
    //proper names to display in the client
    let playerChoice;
    let computerChoice;
    //condition for a while loop
    let keepGoing = true;

    //algorith for best of five
    while (keepGoing){
        // when computer wins, add points to computer
        if(playRound(playerSelection(), computerSelection()) == false){
            computerScore++;
        //when player wins - to player
        }else{
            playerScore++;
        }
        //makes proper name of the choice of a player with capitalized letter 
        playerChoice = playerName[0].toUpperCase() + playerName.slice(1);
        computerChoice = computerName[0].toUpperCase() + computerName.slice(1);
        //score logger
        console.log(`${playerScore} : ${computerScore}, Your ${playerChoice} beats ${computerChoice}`)
        //when one of the players reaches 3 points, the game ends.
        if(computerScore === 3 || playerScore === 3){
            keepGoing = false;
        }
    }
        if (playerScore > computerScore){
            console.log("You win!\nCongratulations!")
        }
        else{
            console.log("Computer bested you! \nBetter luck next time!")
        }
}

//play the game
console.log(game());

