var webWords = [
  {word: 'regex', hint: 'Regular Expression'},
  {word: 'recursion', hint: 'A function that call itself'},
  {word: 'random', hint: 'Shuflling stuff'},
  {word: 'javascript', hint: 'An object-oriented computer programming language'},
  {word: 'redux', hint: 'A predictable state container for JavaScript apps'},
  {word: 'array', hint: 'Collection of values into square brackets'},
  {word: 'objects', hint: 'Containers for named values called properties or methods'},
  {word: 'react', hint: 'A declarative, efficient, and flexible JS library for building UI'},
  {word: 'node', hint: 'OS development platform for executing JavaScript code server-side'}
]

var historyWords = [
  {word: 'benz', hint: 'Invented the first gasoline automobile'},
  {word: 'venezia', hint: 'First Republic in the history'},

]

var cinemaWords = [
  {word: 'rossellini', hint: 'Roma città aperta'},
  {word: 'truffaut', hint: 'Pioniere della nouvelle vague'},

]


function setupGame(words = webWords){

  shuffleObj = words.sort( () => Math.random() - 0.5);
  questions = shuffleObj.map(a => a.word);
  hint = shuffleObj.map(a => a.hint);

  lives = 3
  guess = function(arr){return arr[Math.floor(Math.random()*arr.length)]}
  wordPlay = guess(questions).split('')

  function hiddenGuess(item,times){
    preFilled = item + ','
    array = preFilled.repeat(times).split(',')
    array.splice(-1,1)
    return array
  }
  
  startingGuess = hiddenGuess('_',wordPlay.length)
  document.getElementById('word-to-guess').innerHTML = startingGuess.join(' ')
}


function guessWord(input){

  inputLetter = input
  wordPos = wordPlay.indexOf(inputLetter)
  console.log(wordPos,wordPlay)

  if(wordPos < 0){
    document.getElementById("text-info").innerHTML = 'Try Again'
    lives--
    
  } else {
    for(var i = 0; i < wordPlay.length; i++){
      if(wordPlay[i] === inputLetter){
        startingGuess[i] = wordPlay[i]
      }
    }
      document.getElementById("text-info").innerHTML = 'You got it!'
  }
  
  document.getElementById('lives-left').innerHTML = 'Lives Left: ' + lives
  document.getElementById('word-to-guess').innerHTML = startingGuess.join(' ')
  checkEndGame()
}

function showHint(){
  document.getElementById('hint-box').innerHTML = toString()
}

function checkEndGame(){if(startingGuess.indexOf('_') === -1 || lives === 0) {gameOver()}}

function gameOver(){
  if(lives > 0){
    document.getElementById('word-to-guess').innerHTML = startingGuess.join(' ')
    document.getElementById("text-info").innerHTML = 'Well Done'
  } else {
    document.getElementById("text-info").innerHTML = 'You Lose'
  }

}

function restart(){
  setupGame()
}


setupGame()