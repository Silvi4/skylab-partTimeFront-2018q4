
// var sum = function(a, b){
//   if (isNaN(a) || isNaN(b)) {
//     return 'no sumes peras con manzanas.';
//   }

//   return parseInt(a) + parseInt(b);
// }

// var subs = function(a, b) {
//   return a - b;
// }

// exports.sum = sum;
// exports.subs = subs;

var rockPaperScissors = function(hand1, hand2){
  var result = hand1+" vs "+hand2+" => ";
  var moveWinner = '';
  if(hand1=="rock" && hand2=="scissors" || hand2=="rock" && hand1=="scissors"){
    result += "rock wins!"
    moveWinner = "rock";
  }else if(hand1=="paper" && hand2=="scissors" || hand2=="paper" && hand1=="scissors"){
    result += "scissors wins!"
    moveWinner = "scissors";
  }else if(hand1=="rock" && hand2=="paper" || hand2=="rock" && hand1=="paper"){
    result += "paper wins!"
    moveWinner = "paper";
  }else if(hand1==hand2 && (hand1=="paper" || hand1=="rock" || hand1=="scissors")){
    result += "tie!";
  }else{
    throw new Error("Los valores introducidos han de ser rock, paper o scissors")
  }
  return {
    winner: moveWinner === hand1 ? 'hand1' : (moveWinner === hand2 ? 'hand2' : 'tie'),
    msg: result
  };
 }

exports.rockPaperScissors = rockPaperScissors;
