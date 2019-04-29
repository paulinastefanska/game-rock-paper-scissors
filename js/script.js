'use strict';

var buttonNewGame = document.getElementById('newGame');
var buttons = document.getElementById('buttons');
var buttonRock = document.getElementById('rockButton');
var buttonPaper = document.getElementById('paperButton');
var buttonScissors = document.getElementById('scissorsButton');
var resultPlayer = document.getElementById('playerResult');
var resultComputer = document.getElementById('compResult');
var alert = document.getElementById('alert');
var resultTourn = document.getElementById('resultTourn');
var output = document.getElementById('output');

output.innerHTML = 'Make your move!';
resultPlayer.innerHTML = 0;
resultComputer.innerHTML = 0;

 // button function
var moveButtons = document.querySelectorAll('.buttons'); 
for (var i = 0; moveButtons.length > i; i++) { 
  var moves = moveButtons[i]; 
  moves.setAttribute('data-move',i+1); //add data-move 
  moves.addEventListener('click', function (e) { 
    var moveValue = this.getAttribute('data-move'); 
    playerMove(moveValue); 
  })}
buttonNewGame.addEventListener('click', function(){ 
  newGame(); 
});

// computer move
function computerChoice() {
  return Math.floor(Math.random()*3)+1;
}

// player move
function playerMove(playerM) {
  var computerMove=computerChoice();
  var moveNames=['Rock','Paper','Scissors'];
  
  if (computerMove == playerM) { 
    // tie
    output.innerHTML = 'It`s a tie!';
  }
  else if ((computerMove == 2 && playerM == 1) || (computerMove == 3 && playerM == 2) || (computerMove == 1 && playerM == 3)) {
    // player lose
    output.innerHTML = 'Sorry, You lose! Computer played '+ moveNames[computerMove-1];
    updateResoults(0);
  } 
  else {
    // player won
    output.innerHTML = 'Congrats, You won! Computer played '+ moveNames[computerMove-1];
    updateResoults(1);
  }   
};

// game result and alert
function updateResoults(playerwin) {
  var resultP=parseInt(resultPlayer.innerHTML);
  var resultC=parseInt(resultComputer.innerHTML);
  if (playerwin) {
    resultP++;
    resultPlayer.innerHTML=resultP;
  }
  else {
    resultC++;
    resultComputer.innerHTML=resultC;
  }
  if (resultP > 2) {
       resultTourn.innerHTML= 'You have WON the game!';
       alert.classList.remove('alertHide');
       buttons.classList.add('alertHide');
  }
  else if (resultC > 2) {
      resultTourn.innerHTML= 'You have LOST the game!';
      alert.classList.remove('alertHide');
      buttons.classList.add('alertHide');
  }     
};

//new game close alert
function newGame() {
  resultPlayer.innerHTML=0;
  resultComputer.innerHTML=0;
  output.innerHTML = 'Make your move!';  
  alert.classList.add('alertHide');
  buttons.classList.remove('alertHide');
};
