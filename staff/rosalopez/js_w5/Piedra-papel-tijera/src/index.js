import "./style.scss"
var piPaTi = function(hand1, hand2){
  var result = hand1 + " vs " + hand2;
  if(hand1 == "scissors" && hand2 == "paper"|| hand1 == "paper" && hand2 == "scissors"){
    return result + " => scissors wins!";
  } else if(hand1 == "rock" && hand2 == "paper"||hand1 == "paper" && hand2 =="rock"){
    return result + " => paper wins!";
  } else if(hand1 == "rock" && hand2 == "scissors"||hand1 == "scissors" && hand2 == "rock"){
    return result + " => rock wins!";
  } else {
    return result + " => tie!";
  }
};

//exports.piPaTi = piPaTi;
var player1hand;
var player2hand;
//
var iniGame = function(){
  iniVar();
  addButtonListener();
};

var iniVar = function(){
  player1hand = "";
  player2hand = "";
  $(".result").html("");
};

var playAgain = function(){
  iniVar();
};

var addButtonListener = function(){
    $("button.hand1").click(function(){
      player1hand = $(this).data("value");
      console.log("You have clicked a button " + player1hand + " from hand1")
      checkPlayersHands();
    });
    $("button.hand2").click(function(){
      player2hand = $(this).data("value");
      console.log("You have clicked a button " + player2hand + " from hand2")
      checkPlayersHands();
    });
    $("button.again").click(function(){
      var value = $(this).data("value")
      console.log("You have clicked a button " + value);
      playAgain();
    });
    
};

var checkPlayersHands = function(){
  if($("input").prop("checked")){
    computerChoise();
  }  
  if(player1hand != "" && player2hand != ""){
      var result = piPaTi(player1hand,player2hand);
      $(".result").html(result);
  }
};

var computerChoise = function(){
    var hands = ["rock", "paper", "scissors"]
    var chooseRandom = Math.floor(Math.random()*3);
    player2hand = hands[chooseRandom];
};

iniGame();




