import './css/styles.scss';
import { finished } from 'stream';

//Variables d'inici de partida
var guessing = [];
var paraules = ['Javascript','React','Expresion Regular'];
var name = "";
var vidas = 6;
var usedLetters=[];

//Variables de Document per facilitar la seva localització.
var docName = document.getElementById('name');
var docWord = document.getElementById('word-to-guess');
var docErrorName = document.getElementById('errorName');
var docErrorGuess = document.getElementById('errorGuess');
var docExpName = document.getElementById('expName');
var docMainGame = document.getElementById('maingame');
var docStartGame = document.getElementById('startdata');
var docStart = document.getElementById('start');
var docGuessForm = document.getElementById('guess-form');
var docInputGuess = document.getElementById('input-guess');
var docUsedLetters = document.getElementById('usedLetters');
var docExpLifes = document.getElementById('expLifes');
var docImg = document.getElementById('img');
var docModalBackground = document.getElementById('modalBackground');
var docFinishGame = document.getElementById('finishGame');
var docRestartButton = document.getElementById('restartButton');
var docMainFinish = document.getElementById('mainFinish');
var docMessageFinish = document.getElementById('messageFinish');
var docImgFinish = document.getElementById('imgFinish');
var docModalSolucionar = document.getElementById('modalSolucionar');

function restartGame(){
    docFinishGame.style.display = 'none';
    docModalBackground.style.display = 'none';
    usedLetters = [];
    docInputGuess.value="";
    docUsedLetters.innerHTML = usedLetters.join(' ');
    docImg.className = "lifes6"
    startGame();
}

function loseGame(){
    docImgFinish.className = "lifes0";
    docMainFinish.innerHTML= name+"!!! Has perdido!!!";
    docMessageFinish.innerHTML = "Buen intento. ¿Que quieres hacer?";
    docFinishGame.style.display = 'flex';
    docModalBackground.style.display = 'flex';
}

function winGame(){
    docImgFinish.className = docImg.className;
    docMainFinish.innerHTML= name+"!!! Has ganado!!!";
    docMessageFinish.innerHTML = "Muchas Felicidades!!. ¿Que quieres hacer?";
    docFinishGame.style.display = 'flex';
    docModalBackground.style.display = 'flex';
}


function guessLetter(letter,paraula){
    docErrorGuess.innerHTML = ""
    var paraula = paraula.toUpperCase();
    var letter = letter.toUpperCase()
    if(usedLetters.includes(letter)){
        docErrorGuess.innerHTML = "Ya ha seleccionado esta letra previamente."
        docInputGuess.value="";
        return finished;
    }
    usedLetters.push(letter);
    if(paraula.includes(letter)){
        for(var i=0;i<paraula.length;i++){
            if(paraula[i]==letter){
                guessing[i]= letter;
            }
        }
        docWord.innerHTML=guessing.join(' ');
    }else{
        vidas--;
        docExpLifes.innerHTML=vidas;
        docImg.className = "lifes"+vidas;
    }
    docInputGuess.value="";
    docUsedLetters.innerHTML = usedLetters.join(' ');
    !guessing.includes("_")?winGame():"";
    vidas==0?loseGame():"";
}

function selectWord(){
    return paraules[Math.round(Math.random()*paraules.length)];
}

function startGame(){
    vidas = 6;
    docExpName.innerHTML=name;
    docMainGame.style.display="flex";
    docStartGame.style.display="none";
    docErrorName.innerHTML="";
    var paraula = selectWord();
    for(var i=0;i<paraula.length;i++){
        /\s/.test(paraula[i])?guessing[i]="<br />":guessing[i]="_"
    }
    docWord.innerHTML=guessing.join(' ');
    docGuessForm.addEventListener('submit', function(e){
        e.preventDefault();
        var inputLetter = docInputGuess.value;
        guessLetter(inputLetter,paraula);
    })

}

docStart.addEventListener('click',function(e){
    name=docName.value;
    if(/[a-zA-Z0-9]{1,}/.test(name)){
        startGame();
    }else{
        docErrorName.innerHTML="El nombre de usuario ha de tener como mínimo un carácter. \n Se admiten mayúsculas, minúsculas y números."
    }
})

docRestartButton.addEventListener('click',function(e){
    e.preventDefault();
    restartGame();
})
