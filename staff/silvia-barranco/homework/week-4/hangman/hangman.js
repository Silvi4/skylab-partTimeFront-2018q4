//Definir variables
var words = ["Mario", "Luigi", "Toad", "Yoshi", "Peach", "Bowser"];
var randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

//Variables globales
var lives = 7;
var answerWords = []; //almacenar guesses
var remainingLetters = randomWord.length;
var space = document.getElementById("hold");
var showLive = document.getElementById("lives"); //mostrar vidas

//Generar palabra random
function generateRandom(){
    var randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    return randomWord;
}

//Rellenar la palabra con _
function underScore(){
    for (var i=0; i < randomWord.length; i++){
        answerWords[i] = "_";
    }
    space.innerHTML = answerWords.join(" ") ;
}

//Mostrar Vidas
function liveShow () {
    showLive.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLive.innerHTML = "Game Over! The word selected was " + randomWord;
    }
    for (var i = 0; i < randomWord.length; i++) {
        if (remainingLetters === 0) {
        showLive.innerHTML = "You Win!";
      }
    }
}

//Comprobar letras
function Letter () {
  var letter = document.getElementById("input-guess").value.toUpperCase();
  if (randomWord.indexOf(letter) != -1){
    for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter ){                
            answerWords[i] = letter;
            space.innerHTML = answerWords.join(" ");
            remainingLetters--;
            liveShow();                                                                 
        }        
    } 
  } else{
    lives--;
    liveShow();
    document.getElementById("image" + lives).className += "fade-in";        
  }  
}

//Iniciar
window.onload = playGame();

//Reestablecer 
function playGame(){
    answerWords= [];  
    remainingLetters= randomWord.length;  
    lives = 7;    
    showLive.innerHTML = "You have " + lives + " lives";
    generateRandom();    
    underScore();      
}
playGame();


