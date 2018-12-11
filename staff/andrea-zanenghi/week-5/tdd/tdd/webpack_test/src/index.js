import  './style.scss'

var player1;
var player2;
var botActive = true;
var botVsBot = false;
var storeResult = [];
var tempResult;
var botImage = (`<img name="botImage" class="botImage" src="http://www.pitchdownrecords.com/andeeplus/img/computer.svg">`);
var timer = setInterval(startTimer, 4000)
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

  var scoreArray = {human: 0, computer: 0, tie: 0}
  var scoreBots = {computer1: 0, computer2: 0, tie: 0}


      scoreDetail.forEach(function(j){
          
          if(j.hvbscore === 'human' && !j.botVsbot && j.botPlayer){
            scoreArray.human++
          } else if (j.hvbscore === 'human' && j.botVsbot && j.botPlayer){
            scoreBots.computer1++ 
          }

          if(j.hvbscore === 'computer' && !j.botVsbot && j.botPlayer){
            scoreArray.computer++
          } else if (j.hvbscore === 'computer' && j.botVsbot && j.botPlayer){
            scoreBots.computer2++
          }

          if (j.hvbscore === 'tie' && !j.botVsbot && j.botPlayer) {
            scoreArray.tie++
          } else if (j.hvbscore === 'tie' && j.botVsbot){
            scoreBots.tie++  
          }   

          console.log(scoreArray,scoreBots,'this is j'+ j.botVsbot,j.hvbscore,)
 
      });

  var humanVsComputer = `<p id="score-text"><span class="score-t">[Score]</span> <span class="title-s">Human</span>: <span class="score-s">${scoreArray.human}</span> - <span class="title-s">Computer</span>: <span class="score-s">${scoreArray.computer}</span> - <span class="title-s">Tie</span>: <span class="score-s">${scoreArray.tie}</span></p>`
  var computerVsComputer = `<p id="score-text"><span class="score-t">[Score]</span> <span class="title-s">Computer 1</span>: <span class="score-s">${scoreBots.computer1}</span> - <span class="title-s">Computer 2</span>: <span class="score-s">${scoreBots.computer2}</span> - <span class="title-s">Tie</span>: <span class="score-s">${scoreBots.tie}</p>`
  var scoreText = botVsBot ? computerVsComputer : humanVsComputer
  $('.get-score').html(scoreText);

}

function creatButtonRPS(i = 1){
  var rockButton = (`<input type="button" class="rock-${i}" name="rock" value="rock">`);
  $(`.hand-${i}`).append(rockButton);
  var paperButton = (`<input type="button" class="paper-${i}" name="paper" value="paper">`);
  $(`.hand-${i}`).append(paperButton);
  var scissorsButton = (`<input type="button" class="scissors-${i}" name="scissors" value="scissors">`);
  $(`.hand-${i}`).append(scissorsButton);
}

function autoButton(){
  var autoButton = (`<input type="button" class="bot-bot" name="bot-bot" value="auto">`);
  $('.bot-butt').append(autoButton);
  $(".bot-bot").click(function() {
    firstClick()
  })
}

function firstClick() {
  botVsBot = true
  $("#human").attr('disabled','disabled');
  $(".bot-bot").off('click').on('click', secondClick)
  $(".bot-bot").attr('value', 'normal')
  $('.hand-1').empty()
  $('.img-load-1').children("img").remove();
  $('.img-load-2').children("img").remove();
  $('.hand-1').append(botImage);

  startTimer()

}

function startTimer(){
  
    if(botVsBot){
      playBot()
    }  
  
}

function stopTimer(){
  clearInterval(timer)
  timer = setInterval(startTimer, 4000)

}

function secondClick() {
  botVsBot = false
  stopTimer()
  $("#human").removeAttr('disabled');
  $(".bot-bot").off('click').on('click', firstClick)
  $(".bot-bot").attr('value', 'auto')
  $('.img-load-1').children("img").remove();
  $('.img-load-2').children("img").remove();
  $('.hand-1').empty()
  creatButtonRPS()
  addButtonsListeners()
}

function playHumans(){

   if($('#human').is(":checked")) {

      botActive = false;
      botVsBot = false;
      $('.hand-2').children("img").remove();
      $('.img-load-1').children("img").remove();
      $('.img-load-2').children("img").remove();
      var returnVal = creatButtonRPS(2);
      $(this).attr("checked", returnVal);
      $('#compHand-text').html('This is a strange game now')
      $('.get-score').html('<span class="title-s">A human playing alone with a two players game</span>');
      $('#result-text').html('Let\'s test with Jest Later'); 
      resetClick()
      twoPlayerListeners()

    } else if(!$('#human').is(":checked")) {
      botActive = true;
      botVsBot = false;
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

function setupGame(){
  creatButtonRPS()
  var checkBox = ('<input type="checkbox" id="human" name="human" value="human">');
  var checkText = ('<p>Human Testing</p>')
  $('.checkB').append(checkBox,checkText);
  $('#result-area').append(`<p id="compHand-text">Mark the checkbox for 2 players testing</p>`)
  $('#result-area').append('<h3 id="title">This is a Test with jQuery</h3>')
  $('#result-area').append('<p id="result-text">Press auto for the magic</p>')
  $(`.hand-2`).append(botImage);
  $('#human').change(function() {playHumans()}) 
  $('.get-score').html('<span class="title-s">Welcome to the rock, paper and scissors experiment</span>');
  autoButton()
  addButtonsListeners()
}

function playAlone(human){

  var random = Math.floor((Math.random() * cpuOpt.length))
  var computerHand = cpuOpt[random]

  if (botVsBot){
    $('#compHand-text').html(`Bot 1: <span>${human}</span> - Bot 2: <span>${computerHand.type}</span>`);
  } else {
    $('#compHand-text').html(`You: <span>${human}</span> - Bot: <span>${computerHand.type}</span>`);
  }

  imaging(`${computerHand.type}-1-j`,`${computerHand.src}`, '2')
  rockPaperScissors(human,computerHand.type)
}

function playBot(){

  var randTwo = Math.floor((Math.random() * cpuOpt.length))
  var secondBot = cpuOpt[randTwo]
  $('#compHand-text').html(`You: ${human} - PC: ${secondBot.type}`);
  imaging(`${secondBot.type}-1-j`,`${secondBot.src}`, '1')
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
  addButtonsListeners()

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

// exports.rockPaperScissors = rockPaperScissors