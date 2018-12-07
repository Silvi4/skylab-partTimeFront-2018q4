var webWords = [
  {word: 'regex', hint: 'Regular Expression'},
  {word: 'recursion', hint: 'A function calling itself'},
  {word: 'random', hint: 'Shuflling stuff'},
  {word: 'javascript', hint: 'An object-oriented computer programming language'},
  {word: 'redux', hint: 'A predictable state container for JavaScript apps'},
  {word: 'array', hint: 'Collection of values into square brackets'},
  {word: 'objects', hint: 'Containers for named values called properties or methods'},
  {word: 'react', hint: 'A declarative, efficient, and flexible JS library for building UI'},
  {word: 'node', hint: 'OS development platform for executing JavaScript code server-side'},
  {word: 'flash', hint: 'Must have for web-graphics in the 00s'}
]

var historyWords = [
  {word: 'benz', hint: 'Invented the first gasoline automobile'},
  {word: 'venezia', hint: 'First Republic in the history'},
  {word: 'cleopatra', hint: 'Ruled egypt for almost three decades'},
  {word: 'tenochtitlan', hint: 'Capital of the Aztec Empire'},
  {word: 'napoleon', hint: 'Did a disastrous invasion in Russia'},
  {word: 'garibaldi', hint: 'King of the two worlds'},
  {word: 'antikythera', hint: 'Ancient Greek analogue computer'},
  {word: 'newton', hint: 'English scientist'},
  {word: 'copernico', hint: 'Put the sun at the center of the universe'},
  {word: 'karueein', hint: 'Most ancient university in the world'}

]

var cinemaWords = [
  {word: 'rossellini', hint: 'Roma città aperta'},
  {word: 'truffaut', hint: 'Nouvelle vague pioneer'},
  {word: 'eisenstein', hint: 'Russian director'},
  {word: 'fellini', hint: 'Won Four Academy Awards'},
  {word: 'buñuel', hint: 'Leader of avant-garde surrealism'},
  {word: 'morricone', hint: 'The good, the bad and the ugly OST'},
  {word: 'umiliani', hint: 'Composed the scores for many exploitation films in the 1960s '},
  {word: 'leone', hint: 'Spaghetti Western Master'},
  {word: 'welles', hint: 'Citizen Kane'},
  {word: 'kubrik', hint: 'American film director, screenwriter, and producer'}

]

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var category = webWords

function getId(elementId) {
  return document.getElementById(elementId)
}

function restoreHint(){
  humanRestart = [
    'Press Hint [?] if you don\'t have any clue', 
    'Just press Hint [?] to have some indication', 
    'Push Hint [?] to start', 
    'Welcome to the hangman, let\'s start with some Hint [?]',
    'Choose your category and start the game',
    'Histoy, Internet or Cinema? Choose yours'
  ]
  
  getId('hint-box').innerHTML = humanRestart[Math.floor(Math.random()*humanRestart.length)]
  
}

function setupGame(words){

  
  restoreHint()
  category = words
  alpha.forEach(function (el){document.getElementById(el).disabled = false})
  alpha.forEach(function (el){document.getElementById(el).className = 'button'})
  

  shuffleObj = words.sort( () => Math.random() - 0.5);
  questions = shuffleObj.map(a => a.word);
  hint = shuffleObj.map(a => a.hint);

  lives = 3
  random = []

  random.push(Math.floor(Math.random()*questions.length))
  

  wordPlay = questions[random[0]].split('')
  hintPlay = hint[random[0]]
  
  console.log(random,questions.length,wordPlay,hintPlay)

  function hiddenGuess(item,times){
    preFilled = item + ','
    array = preFilled.repeat(times).split(',')
    array.splice(-1,1)
    return array
  }
  
  startingGuess = hiddenGuess('_',wordPlay.length)
  getId('lives-left').innerHTML = 'Lives Left: ' + lives
  getId('word-to-guess').style.letterSpacing = "0px";
  getId('word-to-guess').style.color = 'black'
  getId('word-to-guess').style.textTransform = 'lowercase'
  getId('word-to-guess').innerHTML = startingGuess.join(' ')
  
}

function guessWord(input){

  inputLetter = input
  wordPos = wordPlay.indexOf(inputLetter)
  console.log(wordPos,wordPlay)
  getId(input).className = "button-off"
  getId(input).disabled = true

  if(wordPos < 0){
    getId('text-info').innerHTML = 'Try Again'
    lives--
    
  } else {
    for(var i = 0; i < wordPlay.length; i++){
      if(wordPlay[i] === inputLetter){
        startingGuess[i] = wordPlay[i]
      }
    }
    getId('text-info').innerHTML = 'You got it!'
  }
  
  getId('lives-left').innerHTML = 'Lives Left: ' + lives
  getId('word-to-guess').innerHTML = startingGuess.join(' ')
  checkEndGame()
}

function showHint(){
  getId('hint-box').innerHTML = hintPlay.toString()
}

function checkEndGame(){

  console.log('inside the game over selection')
  
  if(startingGuess.indexOf('_') === -1 || lives === 0) {gameOver()}
}

function gameOver(){
  
  alpha.forEach(function (el){document.getElementById(el).disabled = true})
  getId('hint-box').innerHTML = 'Press Restart to play again'

  if(lives > 0){
    getId('word-to-guess').innerHTML = startingGuess.join(' ')
    getId('text-info').innerHTML = 'Well Done'
    getId('lives-left').innerHTML = 'You win!'
    getId('word-to-guess').style.color = 'darkblue'
    getId('word-to-guess').style.letterSpacing = "-4px";
    getId('word-to-guess').style.textTransform = 'uppercase'
  } else {
    getId('text-info').innerHTML = 'You Lose'
    getId('lives-left').innerHTML = 'Game Over'
    getId('word-to-guess').style.textTransform = 'capitalize'
    getId('word-to-guess').innerHTML = 'You Lose!'
    getId('word-to-guess').style.color = 'darkred'
  }

}

function restart(){
  setupGame(category)
}

setupGame(category)