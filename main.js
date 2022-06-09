var rubiksCrossTrainer = require("rubiks-cross-trainer")

// Scramble cross side down
var numberOfMovesToSolve = prompt("Pick between 1-8 total moves required to complete the cross"); //asks how many moves required to finish the cross that you would like to play with

var algorithm = rubiksCrossTrainer.default(numberOfMovesToSolve); //this sets the algorithm as a variable so it can be wrote into the document

document.write("<h1>" + algorithm + "</h1>");

document.addEventListener('keyup', function(e){
    if(e.keyCode == 32)
      window.location.reload();
  })