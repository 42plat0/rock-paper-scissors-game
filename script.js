let player = document.querySelector("#playerScore");
let computer = document.querySelector("#computerScore");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let parent = document.querySelector(".parent");
let gameProgress = document.querySelector("#gameProgress");
// let gameResult = document.querySelector("#gameResult");
let playerChoiceImage = document.querySelector("#playerChoiceImage");
let computerChoiceImage = document.querySelector("#computerChoiceImage");
let mainContainer = document.querySelector(".parentContainer");
let childContainer = document.querySelector(".container");
let body = document.querySelector("body");

let rockImage = "✊";
let paperImage = "✋";
let scissorsImage = "✌️";

//keep score of player and computer
let playerScore = 0;
let computerScore = 0;
//variables for capitalizing choices of players
let playerName, computerName, playerInput;

let x;
//game can be played
let gameOn = true;

//popup window
//remove container
function detachContainer(){
    x = $(".parentContainer").detach();
}
//add container
function appendContainer(){
    $("body").prepend(x);
}

//Get human input
parent.addEventListener("click", (e) => {
    switch (e.target.id) {
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
    if (gameOn) {
        //show player choice image
        switch (playerInput) {
            case "rock":
                playerChoiceImage.textContent = rockImage;
                break;
            case "paper":
                playerChoiceImage.textContent = paperImage;
                break;
            case "scissors":
                playerChoiceImage.textContent = scissorsImage;
                break;
            default:
                break;
        }
        let gameOutcome = playRound(playerInput, computerSelection());
        gameOutcome;
        //game outcome

        //TO DO -- SUZINOTI AR REIKALINGI playerChoice.computerChoice EILUTES
        //proper names to display in the client
        //makes proper name of the choice of a player with capitalized letter 
        let playerChoice = playerName[0].toUpperCase() + playerName.slice(1);
        let computerChoice = computerName[0].toUpperCase() + computerName.slice(1);

        // when computer wins, add points to computer
        if (gameOutcome == null) {
            gameProgress.textContent = "A TIE!"
        } else if (gameOutcome == false) {
            computerScore++;
            computer.textContent = computerScore;
            gameProgress.textContent = `PC's ${computerChoice} beats your ${playerChoice}`


            //when player wins - to player
        } else {
            playerScore++;
            player.textContent = playerScore;
            gameProgress.textContent = `Your ${playerChoice} beats PC's ${computerChoice}`

        }
        //popup window
        const newDiw = document.createElement("div");
        newDiw.classList.add("popupWindow");
        const para = document.createElement("h2");
        para.classList.add("popupPara");

        if (computerScore === 2 || playerScore === 2) {
            if (playerScore > computerScore) {
                para.textContent = `${playerScore} : ${computerScore} \r\n` 
                para.textContent+= "You win!\r\n" + "Congratulations!"
            } else {
                para.textContent = `${playerScore} : ${computerScore}\r\n` + "Computer wins.\r\n" + "Tough luck.";
            }
            //cannot play
            gameOn = false;
            //removes main container
            $(document).ready(detachContainer());
                document.body.appendChild(newDiw);
                newDiw.appendChild(para);

            //timeout to show score and let play after timeout
            setTimeout(function () {
                playerScore = 0;
                computerScore = 0;
                player.textContent = computerScore;
                computer.textContent = computerScore;
                gameOn = true;
                // gameResult.textContent = ""
                gameProgress.textContent = ""
                computerChoiceImage.textContent = "";
                playerChoiceImage.textContent = "";
                //restores main container  
                $(document).ready(appendContainer())
                document.body.removeChild(newDiw);
            }, 3000)
        }
    }
})

//generate computer choice
function computerSelection() {
    const arrayOfChoices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computerName = arrayOfChoices[randomNumber];
    switch (computerName) {
        case 'rock':
            computerChoiceImage.textContent = rockImage;
            break;
        case "paper":
            computerChoiceImage.textContent = paperImage;
            break;
        case "scissors":
            computerChoiceImage.textContent = scissorsImage;
            break;
        default:
            break;
    }

    return computerName;
}
//play round
function playRound(playerSelection, computerSelection) {
    //is player winning? it changes when player won the round!
    let playerWin = null;

    //if its a tie, it turns to true and prints its a tie
    let isTie = false;

    //all possible combinations, decides if a player won/lost/drew
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            playerWin = false;
        } else if (computerSelection == "scissors") {
            playerWin = true;
        } else if (computerSelection == "rock") {
            isTie = true;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            isTie = true;
        } else if (computerSelection == "scissors") {
            playerWin = false;
        } else if (computerSelection == "rock") {
            playerWin = true;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerWin = true;
        } else if (computerSelection == "scissors") {
            isTie = true;
        } else if (computerSelection == "rock") {
            playerWin = false;
        }
    } else {
        return null;
    }
    //when its a ties print
    if (isTie) {
        return null;
    }
    //if its not a tie, print who won
    else {
        if (playerWin) {
            return true;
        } else {
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
