import "./css/style.scss";
var hands = {
  hand1: "",
  hand2: ""
}
var rockPaperScissors = function(hand1, hand2){
  var result = hand1+" vs "+hand2+" => ";
  var winnerElement = "";
  if(hand1=="rock" && hand2=="scissors" || hand2=="rock" && hand1=="scissors"){
    result += "rock wins!";
    winnerElement = "rock";
  }else if(hand1=="paper" && hand2=="scissors" || hand2=="paper" && hand1=="scissors"){
    result += "scissors wins!"
    winnerElement = "scissors";
  }else if(hand1=="rock" && hand2=="paper" || hand2=="rock" && hand1=="paper"){
    result += "paper wins!"
    winnerElement = "paper";
  }else if(hand1==hand2 && (hand1=="paper" || hand1=="rock" || hand1=="scissors")){
    result += "tie!";
  }else{
    throw new Error("Los valores introducidos han de ser rock, paper o scissors")
  }
  return {
    winner: winnerElement===hand1?"hand1":(winnerElement===hand2?'hand2':'tie'),
    msg:result
  };
}

function checkPlayerOptions(){
  if(hands.hand1 !== "" && hands.hand2 !== ""){
    var result = rockPaperScissors(hands.hand1,hands.hand2);
    $('#resultMessage').html(result.msg);
    var button = '<button id="replay">Play Again</button>'
    $('#resultMessage').append(button)
    $('#replay').click(function(){
      initBars();
    })
  }
}
function randomOption(){
  var Options=['rock','paper','scissors'];
  return Options[Math.floor(Math.random()*Options.length)];
}
function setValue(hand,value){
  hands[hand] = value;
}

function setButtonsListeners(human){
  $('#hand1 button').click(function(){
    $('#hand1 button').removeClass('selected');
    $(this).addClass('selected');
    setValue('hand1',$(this).data('value'))
    checkPlayerOptions()
  });
  if(human){
    $('#hand2').removeClass('disabled');
    $('#hand2 button').click(function(){
      $('#hand2 button').removeClass('selected');
      $(this).addClass('selected');
      setValue('hand2',$(this).data('value'));
      checkPlayerOptions()
    })
  }else{
    $('#hand2').addClass('disabled');
    setValue('hand2',randomOption());
    checkPlayerOptions()
  }
}

function humanValue(){
  $('#human').change(function(){
    var human = $('#human:checked').val()?true:false;
    $('button').unbind("click");
    hands.hand2 = "";
    setButtonsListeners(human);
  })
}

function initGame(){
  var human = $('#human:checked').val()?true:false;
  setButtonsListeners(human);
  humanValue();
}
function initBars(){
  hands.hand1 = "";
  hands.hand2 = "";
  $('button').removeClass('selected');
  $('#replay').unbind('click');
  $('#resultMessage').html("");
  $('#human:checked').val()?true:setValue('hand2',randomOption());
}

initGame();
exports.rockPaperScissors = rockPaperScissors;



