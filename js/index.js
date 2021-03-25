// Temporary for the development of the game, to remove when the game is finished
//document.getElementsByClassName("startPage")[0].style.display = "none";
//document.getElementsByClassName("gamePage")[0].style.display = "flex";

//switchScreen();

// Items that are static for the page
const START_PAGE = document.getElementById("startPage");
const GAME_PAGE = document.getElementById("gamePage");
const START_BUTTON = document.getElementById("startButton");
const MAIN_BUTTON = document.getElementById("mainButton");
const RESTART_BUTTON = document.getElementById("restartButton");
const RESHUFFLE_BUTTON = document.getElementById("reshuffleButton");
const NEXT_BUTTON = document.getElementById("nextButton");
const CONFIRM_BUTTON = document.getElementById("confirmButton");
const CARDS_NUMBER = 8;

START_BUTTON.addEventListener("click", () => {
    
    switchScreen()
    
});
MAIN_BUTTON.addEventListener("click", switchScreen);
RESTART_BUTTON.addEventListener("click", resetGame);
RESHUFFLE_BUTTON.addEventListener("click", reshuffle);
CONFIRM_BUTTON.addEventListener("click", confirmAnswers);
NEXT_BUTTON.addEventListener("click", next);

for(let index = 0; index < CARDS_NUMBER; index++){
    document.getElementById("card" + index).addEventListener("click", switchSelection);
} 


// Elements that belong to a game session and must be NOT reset when restarting a game
let points = 0;


// Elements that reset each round of a game session
let selectedItems = [];
let gamePageArray = [];


function toggleConfirmAndNext(){
    if(CONFIRM_BUTTON.style.display == "none"){
        CONFIRM_BUTTON.style.display = "inline";
        NEXT_BUTTON.style.display = "none";
    } else {
        CONFIRM_BUTTON.style.display = "none";
        NEXT_BUTTON.style.display = "inline";
    }
}

function updatePoints(addedPoints){
    points = points + addedPoints;
    document.getElementById("points").innerText = points;
}

function resetCard(id){
    document.getElementById("card"+id).className = "card";
}

function resetCards(){
    for(index = 0; index < CARDS_NUMBER; index++) resetCard(index);
}

function resetReShuffle(){
    RESHUFFLE_BUTTON.style.display = 'inline';
}

function hideReShuffle(){
    RESHUFFLE_BUTTON.style.display = 'none';
}

function next(){
    toggleConfirmAndNext();
    resetRound();
}

function resetRound(){
    resetReShuffle();
    selectedItems = [];

    // Reset the style of all the cards on the page
    resetCards();

    // We draw a list of CARDS_NUMBER random paintings
    gamePageArray = getPaintings(artWorks, CARDS_NUMBER);

    // We extract an era randomly from one of those CARDS_NUMBER paintings
    let era = getQuestion(gamePageArray);

    // We display the era on screen
    showQuestion(era);

    // We display the CARDS_NUMBER paintings on screen
    showPaintings(gamePageArray);

   
}

function reshuffle(){
    resetRound();
    RESHUFFLE_BUTTON.style.display = 'none';
}

function resetGame() { 
    updatePoints(-points);
    resetRound();
}

function switchScreen(){
    if (START_PAGE.style.display == ""){
        START_PAGE.style.display = "none";
        GAME_PAGE.style.display = "flex";
        
   }
   else {
        GAME_PAGE.style.display = "none";
        START_PAGE.style.display = "";
   }
   resetGame();
}

//console.log(artWorks);

/* Takes an array of paintings in parameter and draws a random list 
of "number" out of this array */
  function getPaintings(artWorks, number){
    let localArtWorks = [...artWorks];
    let gamePageArray = [];

    for (i= 0; i < number; i++) {
        let index = Math.floor(Math.random() * localArtWorks.length);
        gamePageArray.push(localArtWorks[index]);
        localArtWorks.splice(index, 1);
    }

    return gamePageArray;
  }


function showPaintings(gamePageArray){ 
    // Go through the list of paintings and for each, call the show function on the correct div
    for(let index = 0; index < gamePageArray.length; index++){
        painting = gamePageArray[index];
        document.getElementById("painting" + index).setAttribute("src", painting.getImage())
        document.getElementById("paintingTitle" + index).innerText = painting.getTitle();
    }   
}



function getQuestion(gamePageArray){
    let index = Math.floor(Math.random() * gamePageArray.length);
    painting = gamePageArray[index];
    return painting.getEra();
}


function showQuestion(era){
    document.getElementById("era").innerText = era;
}


function switchSelection() {
    // Changing the display class
    this.classList.toggle("selectedImage");

    // Adding or remove this element to the list of selected items
    let index = selectedItems.indexOf(this.id);

    if(index === -1) {selectedItems.push(this.id);}
    else {selectedItems.splice(index, 1);}
}

/* 
You don't have any correct answer: show the missing or wrong ones and YOU LOSE
You have at least one correct answer, show that it is correct and highlight the missing or wrong ones, ALMOST
All your answers are correct, YOU WIN

Foreach element of the selectedAnswers array, check that the Painting.era matches the question era
If it does, do nothing
If it doesn't, increase error  */
function confirmAnswers(){
    hideReShuffle();
    toggleConfirmAndNext();
    let correctChoices = [];
    let wrongChoices = [];
    
    // For each selected item, check that it has the correct era
    let era = document.getElementById("era").innerText;
    
    for(index = 0; index < selectedItems.length; index++){
        divId = selectedItems[index].substring(4);
        painting = gamePageArray[divId];

        if(painting.isEra(era)){
            correctChoices.push(divId);
            document.getElementById("card" + divId).classList.toggle("correctAnswer");
            updatePoints(1);
        
        } else{
            wrongChoices.push(divId);
            document.getElementById("card" + divId).classList.toggle("wrongAnswer");
            updatePoints(-1);
        }
    }
    

    for(index = 0; index < CARDS_NUMBER; index++){
        painting = gamePageArray[index];

        if(painting.isEra(era)){
            if(correctChoices.indexOf(index.toString()) == -1){
                document.getElementById("card" + index).classList.toggle("missingAnswer");
                updatePoints(-1);
            }
        }
    }
}