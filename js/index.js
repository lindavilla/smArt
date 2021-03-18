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




//function showDom(html) {}

/*
function showSplashScreen() {
    splashScreen = buildDom(`
    <h1>smArt</h1>
    <button class="startButton">start</button>
    `);

    splashScreen
    .querySelector('.startButton')
    .addEventListener('click',clickStart);
}



function showGameScreen(){

}

function clickStart(){
    collapseSplashScreen();
    showGameScreen();
  };

