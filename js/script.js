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

// game progress info
var params = {
    playerScore: 0,
    computerScore: 0,
    rounds: '',
    palyerMove: '',
    computerMove: '',
    progress: []
}

 // button function
var moveButtons = document.querySelectorAll('.buttons'); 
for (var i = 0; moveButtons.length > i; i++) { 
  var moves = moveButtons[i]; 
  moves.setAttribute('data-move',i+1); //add data-move 
  moves.addEventListener('click', function () { 
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

  if (params.computerMove == params.playerM) { 
    // tie
    output.innerHTML = 'It`s a tie!';
    params.progress.push({content: 'It`s a tie!'});
            updateResoults();
  }
  else if ((params.computerMove == 2 && params.playerM == 1) || (params.computerMove == 3 && params.playerM == 2) || (params.computerMove == 1 && params.playerM == 3)) {
    // player lose
    output.innerHTML = 'Sorry, You lose! Computer played '+ moveNames[params.computerMove-1];
    updateResoults(0);
    params.progress.push({content: 'Sorry, You lose! You palyed ' + moveNames[params.playerM-1] + 'Computer played '+ moveNames[params.computerMove-1]});
            updateResoults();
  } 
  else {
    // player won
    output.innerHTML = 'Congrats, You won! Computer played '+ moveNames[params.computerMove-1];
    updateResoults(1);
    params.progress.push({content: 'Congrats, You won! You palyed ' + moveNames[params.playerM-1] + 'Computer played '+ moveNames[params.computerMove-1]});
            updateResoults();
  }   
}; 

// game result and alert
function updateResoults(playerwin) {
  var resultP=parseInt(resultPlayer.innerHTML);
  var resultC=parseInt(resultComputer.innerHTML);
  var scoreTable = document.createElement('p');       
    for (var c in params.progress) {
        scoreTable.innerHTML = params.progress.length + '. ' + params.progress[c].content;
        alert.appendChild(scoreTable);
    } 
  if (playerwin) {
    resultP++;
    resultPlayer.innerHTML=params.resultP;
  }
  else {
    resultC++;
    resultComputer.innerHTML=params.resultC;
  }
  if (resultP > 2) {
       resultTourn.innerHTML= 'You have WON the game!';
       alert.classList.remove('alertHide');
       buttons.classList.add('alertHide');
       resultPlayer.innerHTML = params.rounds;
  }
  else if (resultC > 2) {
      resultTourn.innerHTML= 'You have LOST the game!';
      alert.classList.remove('alertHide');
      buttons.classList.add('alertHide');
      resultComputer.innerHTML = params.rounds;
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
