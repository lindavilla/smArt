// Temporary for the development of the game, to remove when the game is finished
document.getElementsByClassName("startPage")[0].style.display = "none";
document.getElementsByClassName("gamePage")[0].style.display = "flex";


const startPage = document.getElementById("startPage")[0];   
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");


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


startButton.addEventListener("click",switchScreen);
restartButton.addEventListener("click",switchScreen);



//console.log(artWorks);

  function getPainting(artWorks){
    // let gamePageArray = [];
    console.log(artWorks);
    for (i= 0; i < artWorks.length; i++) {
        
        showPainting(`painting${i +1}`)
        // let index = Math.floor(Math.random()* artWorks.length);
        // gamePageArray.push(artWorks[index]);
    }
    // return gamePageArray;
  };

function showPainting(id){ 
    console.log(id);
    let newPainting = document.getElementById(id);
    console.log(newPainting);
    newPainting.setAttribute("src","/images/background.jpg")
}

/*
for each square, access position of the array randomized, and paint it, and then show painting
*/

function getQuestion(gamePageArray){
    let index = Math.floor(Math.random() * gamePageArray.length);
    return gamePageArray[index].era;
}


function showQuestion(era){
    document.getElementById("era").innerText = era;
}




getPainting(artWorks)

let era = getQuestion(gamePageArray)


showQuestion(artWorks)
showPainting()

//console.log(getPainting(5))
//console.log(getQuestion(gamePageArray))