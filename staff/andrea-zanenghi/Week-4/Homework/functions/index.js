// String calculator

var numSum = '1,2,3,4'

function add(input){return input.split(',').reduce(function(a,i){return a+parseInt(i)},0)}
console.log(add(numSum))

// Is palindrome?

function palindrome1(input){

  mid = input.length / 2
  array = input.split('')
  first = array.slice(0,mid)
  second = array.slice(mid)

  function even(){
    one = first.toString() 
    two = second.reverse().toString()
    return one === two ? true : false
  }

  function odd(){
    oddArray = second.shift()
    one = first.toString() 
    two = second.reverse().toString()
    return one === two ? true : false
  }
  
  return input.length % 2 === 0 ? even() : odd() 
}

console.log(palindrome1('otto'))
console.log(palindrome1('lotto'))
console.log(palindrome1('saippuakivikauppias'))
console.log(palindrome1('saippuakivikauppiask'))

// Matrix
// identity matrix
// a square matrix in which all the elements of the principal diagonal are ones and all other elements are zeros. The effect of multiplying a given matrix by an identity matrix is to leave the given matrix unchanged.

// Create empty matrix:
var create = function (amount){return new Array(amount).fill(0)};
var matrix = function (rows, cols){return create(cols).map(function(o, i){return create(rows)})}

console.log(matrix(4,4))

// Create ID matrix:

function matrix(n) {

  var i;
  var j;
  var array = [];
  var exported = [];

  for (i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      i === j ? array.push('1') : array.push('0')
      console.log(i,j)
    }
  }
  while (array.length > 0){
    exported.push(array.splice(0, n));
  }

  return exported

}

console.log(matrix(4));

function im(n) { 
  var a = Array.apply(null, new Array(n)); 
  return a.map(function(x, i) { 
    return a.map(function(y, k) {return i === k ? 1 : 0; }) }) 
  }

console.log(im(4))

// Coinify

var coins = [25, 10, 5, 2, 1]

function amountToCoins(num, arr) {
  var coins = [];

  for (var i = 0; i < arr.length; i++) {
    while (num >= arr[i]) {
      console.log(num, arr[i],coins)
      coins.push(arr[i]);
      num = num - arr[i];
    }
  }

  return coins;
}

console.log(amountToCoins(46,coins))
console.log(amountToCoins(51,coins))

// Find occurencies and store in object

function Char_Count(str1) {
  var chars = {};
  str1.toLowerCase().replace(/\S/g, function(l){chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1);});
  return chars;
}

console.log(Char_Count('myString'));
console.log(Char_Count('Hello World'));

// Bubble Sort

var toSort = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

function bubbleSort(items) {
  var length = items.length;

  for (var i = 0; i < length; i++) { 

      for (var j = 0; j < (length - i - 1); j++) { 

          if(items[j] < items[j+1]) {
               console.log(' A: '+items[j]+ ' B: '+items[j+1])
              var tmp = items[j];  
              items[j] = items[j+1]; 
              items[j+1] = tmp; 
          }
      }        
  }
}

bubbleSort(toSort)
console.log(toSort)

// Function name

function abc() {
  console.log( arguments.callee.name );
}

abc();

// Perfect number

function findIfPerfect(n){
  
  numbers = []
  dividers = []

  for (i = 1; i < n+1; i++){numbers.push([i])}

  for (i = 1; i < n+1; i++){
   if(n % i === 0) {dividers.push(i)}
  }

  dividers.pop()
  divSum = dividers.reduce(function(a,b){return a + b},0)

  return divSum === n 
  
  ? console.log(`${n} is perfect, dividers are ${dividers}`)
  : console.log(`${n} is not a perfect number`)
}

findIfPerfect(28)
findIfPerfect(29)