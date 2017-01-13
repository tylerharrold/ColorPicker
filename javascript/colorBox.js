class ColorBox{

  static setColor(domObject){
    domObject.style.background = ColorBox.getRandomColor();
  }

  static setDisplay(domObject , value){
    domObject.style.display = value;
  }

  static setAsWinner(domObject){
    domObject.isWinner = true;
  }

  static removeWinnerStatus(domObject){
    domObject.isWinner = false;
  }

  static getRandomColor(){
    var r = Math.ceil((Math.random() * 255));
    var g = Math.ceil((Math.random() * 255));
    var b = Math.ceil((Math.random() * 255));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  static fade(domObject){
    domObject.style.background = "#111a28";
  }

}
