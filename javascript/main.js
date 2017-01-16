// necessary variables
var numberOfColors = 6;
var colorSquares = [];
var colors = [];
var winningColor = 0;
var resetButton;

function init(){
  initializeColorSquares();
  initializeResetButton();
  resetGame();
}

function initializeColorSquares(){
  // setup color squares
  colorSquares = document.querySelectorAll(".square");
  for(var i = 0 ; i < colorSquares.length ; i++){
    colorSquares[i].addEventListener("click" , function(){
      alert("clicked");
    });
  }
}

function initializeResetButton(){
  // setup reset button
  resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click" , resetGame);
}


function resetGame(){
  setupColors();
  setupColorSquares()
  selectWinningColor();
}

function setupColors(){
  colors = []
  for(var i = 0 ; i < numberOfColors ; i++){
    colors.push(getRandomColor());
  }
}

function setupColorSquares(){
  for(var i = 0 ; i < colorSquares.length ; i++){
    if(i < numberOfColors){
      colorSquares[i].style.background = colors[i];
      colorSquares[i].style.display = "block";
    }
    else{
      colorSquares[i].style.display = "none";
    }
  }
}

function selectWinningColor(){
  winningColor = Math.floor(Math.random() * numberOfColors);
}

function getRandomColor(){
  var r = Math.ceil((Math.random() * 255));
  var g = Math.ceil((Math.random() * 255));
  var b = Math.ceil((Math.random() * 255));
  return "rgb(" + r + "," + g + "," + b + ")";
}

init();
