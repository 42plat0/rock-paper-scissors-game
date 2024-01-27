let player = document.querySelector("#playerScore");
let computer = document.querySelector("#computerScore");
let parent = document.querySelector(".parent");
let gameProgress = document.querySelector("#gameProgress");
let playerChoiceImage = document.querySelector("#playerChoiceImage");
let computerChoiceImage = document.querySelector("#computerChoiceImage");
let mainContainer = document.querySelector(".parentContainer");
let childContainer = document.querySelector(".container");

//choices as images
let rockImage = "✊";
let paperImage = "✋";
let scissorsImage = "✌️";

//keep score of player and computer
let playerScore = 0;
let computerScore = 0;

//variables for capitalizing choices of players, storing player input, storing gamesui
let playerName, computerName, playerInput, gameUi;

//game can be played
let gameOn = true;

//popup window
//remove container
function detachContainer(){
    gameUi = $(".parentContainer").detach();
}
//add container
function appendContainer(){
    $("body").prepend(gameUi);
}

//TODO - PER DIDELIS PLOTAS PASISPAUDZIA IR UZSKAITO PASPAUDIMA 39
//APRIBOTI PASPAUDIMO PLOTA TIK APIE MYGTUKA SU PASIRINKIMAIS 39

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
    
    //needed for displaying game progress
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
        //play rounds with player and computer input
        let gameOutcome = playRound(playerInput, computerSelection());
        gameOutcome;

        //proper names to display in the client
        //makes proper name of the choice of a player with capitalized letter 
        let playerChoice = playerName[0].toUpperCase() + playerName.slice(1);
        let computerChoice = computerName[0].toUpperCase() + computerName.slice(1);

        // when computer wins, add points to computer, when player - to player
        //when tie, dont add points
        if (gameOutcome == null) {
            gameProgress.textContent = "A TIE!"
        } else if (gameOutcome == false) {
            computerScore++;
            computer.textContent = computerScore;
            gameProgress.textContent = `PC's ${computerChoice} beats your ${playerChoice}`
        } else {
            playerScore++;
            player.textContent = playerScore;
            gameProgress.textContent = `Your ${playerChoice} beats PC's ${computerChoice}`
        }
        //popup window
        //div that contains message
        const newDiw = document.createElement("div");
        newDiw.classList.add("popupWindow");
        //message
        const para = document.createElement("h2");
        para.classList.add("popupPara");

        //if either of players has 5 points then we anounce the winner
        //by showing popup window with the score and friendly messages
        if (computerScore === 5 || playerScore === 5) {
            if (playerScore > computerScore) {
                para.textContent = `${playerScore} : ${computerScore} \r\n` 
                para.textContent+= "You win!\r\n" + "Nice going!"
            } else {
                para.textContent = `${playerScore} : ${computerScore}\r\n` + "Computer wins.\r\n" + "Tough luck.";
            }
            //cannot play
            gameOn = false;
            //removes main container
            //when dom is ready
            $(document).ready(detachContainer());
                //append div containing popup message
                document.body.appendChild(newDiw);
                //append popup message
                newDiw.appendChild(para);

            //timeout to show score and let play after timeout
            setTimeout(function () {
                //reset scores
                playerScore = 0;
                computerScore = 0;
                //and show them on screen
                player.textContent = playerScore;
                computer.textContent = computerScore;
                //game is available to play
                gameOn = true;
                //remove game progress text and choices of players
                gameProgress.textContent = ""
                computerChoiceImage.textContent = "";
                playerChoiceImage.textContent = "";
                //restores main container  
                //dom ready and remove added container
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
    //tie
    if (isTie) {
        return null;
    }
    else {
        if (playerWin) {
            return true;
        } else {
            return false;
        }
    }
}
