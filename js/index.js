// Temporary for the development of the game, to remove when the game is finished
document.getElementsByClassName("startPage")[0].style.display = "none";
document.getElementsByClassName("gamePage")[0].style.display = "flex";


const startPage = document.getElementById("startPage")[0];   
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");



startButton.addEventListener("click",switchScreen);
restartButton.addEventListener("click",switchScreen);



for(let index = 0; index < 6; index++){
    document.getElementById("painting" + index).addEventListener("click",switchSelection);
} 



//console.log(document.getElementsByClassName("startButton"))

function switchScreen(){
   if (document.getElementById("startPage").style.display == "flex"){
    document.getElementById("startPage").style.display = "none";
    document.getElementById("gamePage").style.display = "flex";
   }
   else {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("startPage").style.display = "flex";
   }
}





//console.log(artWorks);

/* Takes an array of paintings in parameter and draws a random list 
of "number" out of this array */
  function getPaintings(artWorks, number){
    let gamePageArray = [];

    for (i= 0; i < number; i++) {
        let index = Math.floor(Math.random()* artWorks.length);
        gamePageArray.push(artWorks[index]);
        artWorks.splice(index, 1);
        
    }

    return gamePageArray;
  };


function showPaintings(gamePageArray){ 
    // Go through the list of paintings and for each, call the show function on the correct div
    for(let index = 0; index < gamePageArray.length; index++)
    {
       document.getElementById("painting" + index).setAttribute("src", "../images/"+ gamePageArray[index].image)
        // let newPainting = document.getElementById(id);
    }   
};


function getQuestion(gamePageArray){
    let index = Math.floor(Math.random() * gamePageArray.length);
    return gamePageArray[index].era;
};


function showQuestion(era){
    document.getElementById("era").innerText = era;
};


function switchSelection() {
    //get the element that is being called 
    //check div of element and see if it has the class selected
    //if it does, remove the class selected
    //if not, add the class selected
    console.log("image selected");
}

function showResult () {
    
}

// We draw a list of 6 random paintings
let gamePageArray = getPaintings(artWorks, 6);

// We extract an era randomly from one of those 6 paintings
let era = getQuestion(gamePageArray);

// We display the era on screen
showQuestion(era);

// We display the 6 paintings on screen
showPaintings(gamePageArray);
