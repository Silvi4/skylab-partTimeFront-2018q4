import "./style.scss"
/*
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

var player1Hand;
var player2Hand;

var rockPaperScissor = function (hand1,hand2){
  var result = hand1 + ' vs ' + hand2 + ' => ';
  //var moveWinner = '';
  if(hand1 === 'scissors' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors'){
    return result + 'scissors wins!'
    //moveWinner
  }
  if(hand1 === 'paper' && hand2 === 'rock' || hand1 === 'rock' && hand2 === 'paper'){
    return result + 'paper wins!'
  }
  if(hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock'){
    return result + 'rock wins!'
  }
  if(hand1 === hand2){
    return result + 'tie!'
  }
  /*return {
    moveWinner:
    message:
  } */ 
}

//exports.rockPaperScissor = rockPaperScissor

var addButtonListeners = function(){
  $('.hand1 .button').click(function(){
    player1Hand = $(this).data("value")
    console.log('You have clicked ' + player1Hand + ',from Left Hand');
    checkplayerHands();
  })  

  $('.hand2 .button').click(function(){
    player2Hand = $(this).data("value")
    console.log('You have clicked ' + player2Hand + ',from Rigth Hand');
    checkplayerHands();
  }) 

  $('.again').click(function(){
    playAgain();
  })
  
}

var initVars = function(){
  player1Hand = "";
  player2Hand = "";
 
}

var initGame = function(){
  initVars();
  addButtonListeners();
  //localstorage()
}

initGame();

var checkplayerHands = function(){
  if($('input').prop('checked')){
    computerChoise();
  }
  if(player1Hand !== '' && player2Hand !== ''){
    var result = rockPaperScissor(player1Hand,player2Hand);
    $('.result').html(result);
  }
}

var playAgain = function(){
  initVars(); 
  $('.result').html('');
}

var computerChoise = function(){
  var arr = ['paper', 'scissors','rock']
  var random = Math.floor(Math.random()*arr.length);
  player2Hand = arr[random];
}

