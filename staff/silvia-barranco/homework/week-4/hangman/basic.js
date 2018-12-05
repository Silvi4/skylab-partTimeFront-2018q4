var words = ["Mario", "Luigi", "Toad", "Yoshi", "Peach", "Bowser"];
var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
var answerArray = [];
var remainingLetters = word.length;

function slashWords(){
    for (var i = 0; i < word.length; i++){
        answerArray[i] = "_";
    }
}

function checkWord(){
    for (var i = 0; i < word.length; i++){
        while (remainingLetters > 0) {
            alert(answerArray.join(" "));
        }
    }
}

function askUser(){
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1){
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
    }alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}
