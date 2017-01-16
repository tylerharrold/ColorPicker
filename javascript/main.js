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
  resetGame();
}

function initializeDifficultyButtons(){
  var diffBtns = document.querySelectorAll(".difficulty");
  for(var i = 0 ; i < diffBtns.length ; i++){
    diffBtns[i].addEventListener("click" , toggleDifficulty);
  }
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
  toggleDifficultyButtons(difficulty);
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
    console.log("winner");
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
  // deactivate relevant buttons
  deactivateButtons(true);

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
  if(diff === 'hard'){
    // toggle easy button's class
    var easyBtn = document.querySelectorAll("button")[1];
    easyBtn.classList.toggle("difficulty");
  }
  else{
    var easyBtn = document.querySelectorAll("button")[2];
    easyBtn.classList.toggle("difficulty");
  }
}

function toggleDifficulty(){
  console.log("but clicked");
  // change the difficulty
  if(difficulty === 'hard'){
    // set all to easy
    difficulty = 'easy';
    numberOfColors = 3;
  }
  else{
    // set back to hard
    difficulty = 'hard';
    numberOfColors = 6;
  }
  // change the diff buttons
  toggleDifficultyButtons(difficulty);
  // reset the game
  resetGame();
}

init();
