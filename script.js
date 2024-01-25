let player = document.querySelector("#playerScore");
let computer = document.querySelector("#computerScore");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let parent = document.querySelector(".parent");
let gameProgress = document.querySelector("#gameProgress");
let gameResult = document.querySelector("#gameResult");
    //keep score of player and computer
playerScore = 0;
computerScore = 0;
//variables for capitalizing choices of players
let playerName, computerName, playerInput;

let gameOn = true;

function restart(){
   

        

}
//Get human input
parent.addEventListener("click", (e) =>{
    switch(e.target.id){
        case "rock":
            playerInput = e.target.id;
            break;

        case "paper":
            playerInput = e.target.id;
            break;

        case "scissors":
            playerInput = e.target.id;
            break;

        default:
            break;

    }
    playerName = playerInput;
    if(gameOn){
    let gameOutcome = playRound(playerInput, computerSelection());
    gameOutcome;
    //game outcome
    
    //proper names to display in the client
    //makes proper name of the choice of a player with capitalized letter 
    let playerChoice = playerName[0].toUpperCase() + playerName.slice(1);
    let computerChoice = computerName[0].toUpperCase() + computerName.slice(1);

    // when computer wins, add points to computer
    if (gameOutcome == null){
        gameProgress.textContent = "A TIE!"
    }
    else if(gameOutcome == false){
        computerScore++;
        computer.textContent = computerScore;
        gameProgress.textContent = `PC's ${computerChoice} beats your ${playerChoice}`
        
    //when player wins - to player
    }else{
        playerScore++;
        player.textContent = playerScore;
        gameProgress.textContent =`Your ${playerChoice} beats PC's ${computerChoice}`
    }
            computerChoice = console.log(`${playerScore} : ${computerScore}`)

    if(computerScore === 5 || playerScore === 5){
        if (playerScore > computerScore){
            gameResult.textContent = `${playerScore} : ${computerScore}\nYou win!\nCongratulations!`
        }
        else{
            gameResult.textContent = `${playerScore} : ${computerScore}\nComputer bested you! \nBetter luck next time!`
        }
        //cannot play
        gameOn = false;
        //timeout to show score and let play after timeout
        setTimeout(function(){
            playerScore = 0;
            computerScore = 0;
            player.textContent = computerScore;
            computer.textContent = computerScore;
            gameOn = true;
        }, 3000)
    }
    }
})

//store input as lowercase 




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
    let playerWin = null;

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
    else{
        return null;
    }
    //when its a ties print
    if (isTie){
        console.log('tie')
        return null;
    }
    //if its not a tie, print who won
    else{
        if (playerWin){
            console.log('plaer')
            return true;
        }
        else{
            console.log('pc')
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




    //algorith for best of five
        

        //score logger
