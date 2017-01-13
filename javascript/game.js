class Game{
  constructor(){
    this.colorBoxes = [];
    this.numberOfColors = 6;
  }
  init(){
    this.setupColorBoxes();
    this.populateNewColors();
    this.setupWinningBox();
  }

  // creates and stores all color box objects for game
  setupColorBoxes(){
    // grab hold of .square DOM objects
    this.colorBoxes = document.querySelectorAll(".square");

    // give each box a listener
    for(var i = 0 ; i < this.colorBoxes.length ; i++){
      this.colorBoxes[i].addEventListener("click" , this.colorBoxEvent);
    }
  }

  // populate new colors, disable uncolored boxes
  populateNewColors(){
    // give a new color to every relevant box
    for(var i = 0 ; i < this.colorBoxes.length ; i++){
      if(i < this.numberOfColors){
        ColorBox.setColor(this.colorBoxes[i]);
      }
      // set the display of the color box appropriately
      var displayVal;
      (i < this.numberOfColors) ? displayVal = "block" : displayVal = "none";
      ColorBox.setDisplay(this.colorBoxes[i] , displayVal);
    }
  }

  // randomly sets a winning box
  setupWinningBox(){
    // get random number randing from 0 to numberOfColors
    var winningBox = Math.floor(Math.random() * this.numberOfColors);
    ColorBox.setAsWinner(this.colorBoxes[winningBox]);
  }

  // event handler for the colored boxes
  colorBoxEvent(){
    if(this.isWinner == true){
      ColorBox.removeWinnerStatus(this);
      game.handleWin(); // poor design, bad hack, but hey its my first attempt here
    }
    else{
      ColorBox.fade(this);
    }
  }


  handleWin(){
    // fade
  }

}
