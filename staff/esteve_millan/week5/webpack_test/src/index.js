
import './style.scss'


var hands = ['scissors' , 'paper' , 'rock'];
var player1hand;
var player2hand;
var result;

var rockPaperScissors = function (hand1, hand2) {
  
  if( (hand1 === 'scissors' && hand2 === 'paper') ||  (hand1 === 'paper' && hand2 === 'scissors')  ){
    return 'scissors wins!';
  } else if( (hand1 === 'rock' && hand2 === 'scissors') ||  (hand1 === 'scissors' && hand2 === 'rock')  ){
    return 'rock wins!';
  } else if( (hand1 === 'paper' && hand2 === 'rock') ||  (hand1 === 'rock' && hand2 === 'paper')  ){
    return 'paper wins!';
  } else if( (hand1 === 'paper' && hand2 === 'paper') ||  (hand1 === 'rock' && hand2 === 'rock')  ||  (hand1 === 'scissor' && hand2 === 'scissor')){
    return 'tie!';
  };
};


function addButtonsListeners(){ 
  
  $( "#player1 button" ).click(function() { 
    player1hand = $( this ).data( "value" );
    checkPlayerHand();
  });

  $( "#player2 button" ).click(function() { 
    player2hand = $( this ).data( "value" );
    checkPlayerHand();
  });

  $( "#play-again" ).click(function() { 
    initVars();
  });
  
};

function getRandom(){
  var index = Math.floor( Math.random() * (hands.length + 1))  
  return hands[index];
};

function checkPlayerHand(){
  if ( $("input").is(':checked')){
    player2hand = getRandom();
  }; 
  result = player1hand && player2hand ? rockPaperScissors( player1hand , player2hand ) : 'falta un player';
  $( "#message" ).html(result);
}

function initVars(){
  player1hand = '' ;
  player2hand = '' ;
  $( "#message" ).html('');
};


function initGame(){

  addButtonsListeners();

};


initGame();




/*exports.rockPaperScissors = rockPaperScissors;


var sum = function(a, b){
  if (isNaN(a) || isNaN(b)) {
    return 'no sumes peras con manzanas.';
  }

  return parseInt(a) + parseInt(b);
}

var subs = function(a, b) {
  return a - b;
}

exports.sum = sum;
exports.subs = subs;
*/