// necessary variables
var numberOfColors = 6;
var colorSquares = [];
var colors = [];
var winningColor = 0;
var resetButton;
var difficulty = 'hard';

function init(){
  initializeColorSquares();
  initializeResetButton();
  initializeDifficultyButtons();
  // set diff buttons appropriately
  var diffBtns = document.querySelectorAll(".difficulty");
  diffBtns[0].classList.toggle("difficulty");
  resetGame();
}

function initializeDifficultyButtons(){
  var diffBtns = document.querySelectorAll(".difficulty");
  diffBtns[0].addEventListener("click" , function(){
    difficulty = 'easy';
    numberOfColors = 3;
    var easy = document.querySelectorAll("button")[1];
    easy.classList.toggle("difficulty");
    var hard = document.querySelectorAll("button")[2];
    hard.classList.toggle("difficulty");
    resetGame();
  });
  diffBtns[1].addEventListener("click" , function(){
    difficulty = 'hard';
    numberOfColors = 6;
    var easy = document.querySelectorAll("button")[1];
    easy.classList.toggle("difficulty");
    var hard = document.querySelectorAll("button")[2];
    hard.classList.toggle("difficulty");
    resetGame();
  });
}

function initializeColorSquares(){
  // setup color squares
  colorSquares = document.querySelectorAll(".square");
  for(var i = 0 ; i < colorSquares.length ; i++){
    colorSquares[i].addEventListener("click" , checkForWinner);
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
  displayWinningColor();
  toggleResetButton(false);
  toggleWinnerAnnounce(false);
  changeTitleColor("#98BAF2");
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
  winningColor = colors[Math.floor(Math.random() * numberOfColors)];
}

function displayWinningColor(){
  targetSpan = document.querySelector("#colorPrompt");
  targetSpan.textContent = winningColor;
}

function getRandomColor(){
  var r = Math.ceil((Math.random() * 255));
  var g = Math.ceil((Math.random() * 255));
  var b = Math.ceil((Math.random() * 255));
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function to be called whenever a color button is clicked
function checkForWinner(){
  if(this.style.background === winningColor){
    handleWinningClick();
  }
  else{
    handleIncorrectClick(this);
  }
}

function handleWinningClick(){
  // change all the colors of the squares to the winning colors
  colorAllSquares(winningColor);
  // change the background of the title to the winning color
  changeTitleColor(winningColor);
  // dispay winner
  toggleWinnerAnnounce(true);
  // change the reset button to display replay
  toggleResetButton(true);

}

function deactivateButtons(){
  // render the difficulty buttons unclickable
  var diffBtns = document.querySelectorAll("button");
  for(var i = 1 ; i < diffBtns.length ; i++){
    diffBtns[i].classList.toggle("difficulty");
  }
}

function toggleWinnerAnnounce(bool){
  var msg = document.querySelector("#message");
  if(bool){
    msg.textContent = "WINNER!";
  }
  else{
    msg.textContent = "";
  }
}

function toggleResetButton(bool){
  var btn = document.querySelector("#reset");
  if(bool){
    btn.textContent = "Replay";
  }
  else{
    btn.textContent = "Reset";
  }
}

function colorAllSquares(color){
  for(var i = 0; i < colorSquares.length ; i++){
    colorSquares[i].style.background = color;
  }
}

function changeTitleColor(color){
  var titleObj = document.querySelector("#title");
  titleObj.style.background = color;
}

function handleIncorrectClick(clickedObj){
  // set the objects background color to the color of the body
  clickedObj.style.background = "#111a28";
}

function toggleDifficultyButtons(diff){
  var btns = document.querySelectorAll("button");
  if(diff === 'hard'){
    // toggle easy button's class
    btns[1].classList.toggle("difficulty");
    btns[2].classList.toggle("difficulty");
  }
  else{
    btns[1].classList.toggle("difficulty");
    btns[2].classList.toggle("difficulty");
  }
}

function setupDiffButtons(){
  var btns = document.querySelectorAll("button");
  if(difficulty === 'easy'){
    btns[1]
  }
  else{

  }
}

init();
