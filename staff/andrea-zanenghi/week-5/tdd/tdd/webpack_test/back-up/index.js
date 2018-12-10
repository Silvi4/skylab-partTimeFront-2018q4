import  './style.scss'


var player1;
var player2;
var botActive = true;
var botVsBot = false;
var storeResult = [];
var tempResult;



var rockPaperScissors = function(hand1,hand2){

  $('#result-text').remove();
  $('#result-area h3').html('Result Area:')
  
  var result = hand1+" vs "+hand2+" => ";
  var moveWinner = '';

  if(hand1=="rock" && hand2=="scissors" || hand2=="rock" && hand1=="scissors"){
    result += "rock wins!"
    moveWinner = "rock";
    $('#result-area').append('<p id="result-text">Rocks wins!</p>'); 
  }else if(hand1=="paper" && hand2=="scissors" || hand2=="paper" && hand1=="scissors"){
    result += "scissors wins!"
    moveWinner = "scissors";
    $('#result-area').append('<p id="result-text">Scissors wins!</p>'); 
  }else if(hand1=="rock" && hand2=="paper" || hand2=="rock" && hand1=="paper"){
    result += "paper wins!"
    moveWinner = "paper";
    $('#result-area').append('<p id="result-text">Paper wins!</p>'); 
  }else if(hand1==hand2 && (hand1=="paper" || hand1=="rock" || hand1=="scissors")){
    result += "tie!";
    $('#result-area').append('<p id="result-text">Tie!'); 
  }else{
    throw new Error("Something is wrong with the inputs")
  }


  tempResult = {
    winner: moveWinner === hand1 ? 'hand1' : (moveWinner === hand2 ? 'hand2' : 'tie'),
    msg: result,
    botPlayer: botActive,
    botVsbot: botVsBot,
    date: new Date(),
    hvbscore: botActive && moveWinner === hand1 ? 'human' : (moveWinner === hand2 ? 'computer' : 'tie')
  }

  console.log(tempResult)

  if (botActive){
    storeResult.push(tempResult)
    appendToStorage('storedResult',storeResult)
  }
  setupScore()
  resetPlayers()
  return tempResult
}

function appendToStorage(name, data)
{
   var previousData = localStorage.getItem(name);
   if(previousData == null) {
     previousData = [];
   } else {
     previousData = JSON.parse(previousData);
   }
   localStorage.setItem(name, JSON.stringify(previousData.concat(data)));
   storeResult = []

}

function setupScore(){

  var scoreDetail = JSON.parse(localStorage.getItem('storedResult'))
  console.log(scoreDetail)

  var scoreArray = {human: 0, computer: 0, tie: 0}

  if (botActive && !botVsBot){  

    for (var j = 0; j < scoreDetail.length; j++){

        if (scoreDetail[j].hvbscore === 'human'){
          scoreArray.human++ 
          console.log('human' + j)
        } else if(scoreDetail[j].hvbscore === 'computer'){
          console.log('robot' + j)
          scoreArray.computer++
        } else if(scoreDetail[j].hvbscore === 'tie'){
          console.log('robot' + j, scoreArray.tie)
          scoreArray.tie++
        }
    }
  }
  console.log(scoreArray)
  console.log(scoreDetail.length)
  
  // var hvbscoreScore = [hvb,bvh]
  // var bvb1 = //bot1 score 
  // var bvb2 = //bot2 score 
  // var botVsBotScore = [bvb1, bvb2]


  var scoreText = `<p id="score-text">[Score] Human: ${scoreArray.human} - Computer: ${scoreArray.computer} - Tie: ${scoreArray.tie}</p>`
  $(`.get-score`).html(scoreText);
}


function creatButtonRPS(i = 1){
  var rockButton = (`<input type="button" class="rock-${i}" name="rock" value="rock">`);
  $(`.hand-${i}`).append(rockButton);
  var paperButton = (`<input type="button" class="paper-${i}" name="paper" value="paper">`);
  $(`.hand-${i}`).append(paperButton);
  var scissorsButton = (`<input type="button" class="scissors-${i}" name="scissors" value="scissors">`);
  $(`.hand-${i}`).append(scissorsButton);
}

function playHumans(){


   if($('#human').is(":checked")) {

      botActive = false;
      botVsBot = false;
      $(`.hand-2`).children("img").remove();
      $('.img-load-1').children("img").remove();
      $('.img-load-2').children("img").remove();
      var returnVal = creatButtonRPS(2);
      $(this).attr("checked", returnVal);
      $('#compHand-text').html('Two players sessions')
      $('#result-text').html('Let\'s test with Jest Later'); 
      resetClick()
      twoPlayerListeners()

    } else if(!$('#human').is(":checked")) {
      botActive = true;
      botVsBot = false;
      var botImage = (`<img name="botImage" class="botImage" src="http://www.pitchdownrecords.com/andeeplus/img/computer.svg">`);
      $('.img-load-1').children("img").remove();
      $('.img-load-2').children("img").remove();
      $('.hand-2 .rock-2').remove()
      $('.hand-2 .paper-2').remove()
      $('.hand-2 .scissors-2').remove()
      $(`.hand-2`).append(botImage);
      $('#compHand-text').html(`Play vs. the Computer`);
      $('#title').html('Play with yourself!')
      $('#result-text').html('Let\'s test with Jest Later'); 
      resetClick()
      addButtonsListeners()

    } 

}

function computerPlay(){


  if($('#check-bot').is(":checked")) {

     botActive = false;
     botVsBot = false;
     creatButtonRPS()
     $('.botImage').remove()
     $('.hand-1').empty()
     $('.hand-2').empty()
     var botImage = (`<img name="botImage" class="botImage" src="http://www.pitchdownrecords.com/andeeplus/img/computer.svg">`);
     $(`.hand-1`).append(botImage);
     $(`.hand-2`).append(botImage);
     $('.img-load-1').children("img").remove();
     $('.img-load-2').children("img").remove();
     $('#compHand-text').html('Computer vs. Computer')
     $('#result-text').html('Let\'s test with Jest Later'); 
     resetClick()


   } else if(!$('#check-bot').is(":checked")) {
     botActive = true;
     botVsBot = false;
     $('.hand-1').empty()
     $('.hand-2').empty()
     $('#result-area').html(`<p id="compHand-text">Mark the checkbox for 2 players testing</p>`)
     $('#result-area').html('<h3 id="title">This is a Test with Jest</h3>')
     $('#result-area').html('<p id="result-text">Time to play</p>')
     $('.checkB').empty()
     setupGame()
   } 

}


function setupGame(){
  creatButtonRPS()
  var checkBox = ('<input type="checkbox" id="human" name="human" value="human">');
  var checkText = ('<p>Human Testing</p>')
  var checkBoxBot = ('<input type="checkbox" id="check-bot" name="check-bot" value="check-bot">');
  var checkTextBot = ('<p>Bot vs Bot</p>')
  $('.checkB').append(checkBox,checkText);
  $('.checkB').append(checkBoxBot,checkTextBot);
  $('#result-area').append(`<p id="compHand-text">Mark the checkbox for 2 players testing</p>`)
  $('#result-area').append('<h3 id="title">This is a Test with Jest</h3>')
  $('#result-area').append('<p id="result-text">Time to play</p>')
  $(`.hand-2`).append(botImage);
  $('#human').change(function() {playHumans()
    $("#check-bot").attr('disabled', !$("#check-bot").attr('disabled'));}) 
  // $('#check-bot').change(function() {computerPlay()
    // $("#human").attr('disabled', !$("#human").attr('disabled'));})  
  //creatButtonRPS(2)
  addButtonsListeners()
}

function playAlone(human){
  
  var cpuOpt = [
    {
    type: 'paper',
    src: 'hand',
    },    
    {
      type: 'scissors',
      src: 'peace',
    },
    {
      type: 'rock',
      src: 'grab',
    }
  ]

  var random = Math.floor((Math.random() * cpuOpt.length))
  var computerHand = cpuOpt[random]
  $('#compHand-text').html(`You: ${human} - PC: ${computerHand.type}`);
  imaging(`${computerHand.type}-1-j`,`${computerHand.src}`, '2')
  rockPaperScissors(human,computerHand.type)
}

function playBot(){
  var cpuOpt = [
    {
    type: 'paper',
    src: 'hand',
    },    
    {
      type: 'scissors',
      src: 'peace',
    },
    {
      type: 'rock',
      src: 'grab',
    }
  ]

  var randTwo = Math.floor((Math.random() * cpuOpt.length))
  var secondBot = cpuOpt[randTwo]
  $('#compHand-text').html(`You: ${human} - PC: ${secondBot.type}`);
  imaging(`${secondBot.type}-1-j`,`${secondBot.src}`, '2')
  playAlone(secondBot.type)
}

function twoPlayers(){

  var options = ['paper','scissors','rock']

  if (!options.includes(player1)) {

    $('#result-text').html('-')
    $('#compHand-text').html(`Choose Player 1 option - Pl.2 ${player2}`)
    $(`.img-load-1`).children("img").remove();

  } else if (!options.includes(player2)){

    $('#result-text').html('-')
    $('#compHand-text').html(`Pl.1 ${player2} - Choose Player 2 option`)
    $(`.img-load-2`).children("img").remove();

  } else {

    $('#compHand-text').html(`Pl.1: ${player1} - Pl.2: ${player2}`);
    rockPaperScissors(player1,player2)
  }
}




function addButtonsListeners(){
  $(".rock-1").click(function() {
    imaging('rock-1-j', 'grab', '1')
    playAlone('rock')
  })
  $(".paper-1").click(function() {
    imaging('paper-1-j', 'hand', '1')
    playAlone('paper')
  })
  $(".scissors-1").click(function() {
    imaging('rock-1-j', 'peace', '1')
    playAlone('scissors')
  })
}

function twoPlayerListeners(){

  resetClick()

  $(".rock-1").click(function() {
    player1 = 'rock'
    imaging('rock-1-j', 'grab', '1')
    twoPlayers()
  })
  $(".paper-1").click(function() {
    player1 = 'paper'
    imaging('paper-1-j', 'hand', '1')
    twoPlayers()
  })
  $(".scissors-1").click(function() {
    player1 = 'scissors'
    imaging('scissors-1-j', 'peace', '1')
    twoPlayers()
  })
  $(".rock-2").click(function() {
    player2 = 'rock'
    imaging('rock-2-j', 'grab', '2')
    twoPlayers()
  })
  $(".paper-2").click(function() {
    player2 = 'paper'
    imaging('paper-2-j', 'hand', '2')
    twoPlayers()
  })
  $(".scissors-2").click(function() {
    player2 = 'scissors'
    imaging('scissors-2-j', 'peace', '2')
    twoPlayers()
  })
}

function imaging(id, src, pos){
  $(`.img-load-${pos}`).children("img").remove();
  var imageAppend = (`<img name="${id}" src="http://www.pitchdownrecords.com/andeeplus/img/${src}.svg">`);
  $(`.img-load-${pos}`).append(imageAppend);

}


function resetClick(){
  var clickOptions = ['.rock-1', '.rock-2', '.paper-1', '.paper-2', '.scissors-1', '.scissors-2']
  clickOptions.forEach(function(el){return $(el).off('click')})
}

function resetPlayers(){
  player1 = '';
  player2 = '';
}



setupGame()