//Get human input
//store input as lowercase 
function playerSelection(){
    const playerInput = prompt("Rock, Paper or Scissors?");
    return playerInput.toLowerCase();
}
//generate computer choice
function computerSelection(){
    const arrayOfChoices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return arrayOfChoices[randomNumber];
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
        return "It's a tie!"
    }
//if its not a tie, print who won
    else{
        if (playerWin){
            return `You win! ${playerSelection} beats ${computerSelection}!`
        }
        else{
            return `You lose... ${playerSelection} loses to ${computerSelection}.`
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(), computerSelection()));
    }
}

game();