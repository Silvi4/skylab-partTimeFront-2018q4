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

var inputLetter;
var wordPlay;
var startingGuess;
var lives;
var questions;
var hints;

function question(arr){
  questions = arr.map(a => console.log(a.word) a.word);

}

console.log(questions)