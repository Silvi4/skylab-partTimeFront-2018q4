// Large Integer

var a = 5;
var b = 10;

function displayLarger(itemA,itemB){
  a > b ? console.log(itemA) : console.log(itemB) 
}

displayLarger(a,b)

// Sign Products

var numbers = [3, -7, 2]
var sign;
numbers[0] * numbers[1] * numbers[2] < 0 ? sign = '-' : sign = '+'
console.log(sign)

// Sort Numbers

var c = [0, -1, 4 ]
var sortNumbers = c.sort(function(a, b) {return b - a;});
console.log(sortNumbers)

// Largest Number

var d = [-5, -2, -6, 0, -1]
var sortNumbersAgain = c.sort(function(a, b) {return a - b;});
console.log(sortNumbersAgain[0])

// Odd / Even

var e = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function oddEven(array){
  for (i = 0; i < array.length; i++){
    if (array[i]%2 === 0){console.log(array[i] + ' is Even')}
    else {console.log(array[i] + ' is Odd')}
  }
}

oddEven(e)

// Fizz Buzz

for (var number = 0; number <= 100; number++) {
  if (number % 5 == 0 && number % 3 == 0) {
      console.log('FizzBuzz')
  } else if (number % 5 == 0) {
     console.log('Buzz')
  } else if (number % 3 == 0) {
      console.log('Fizz')}
     console.log(number)
} 

// Triangle *

var triangle = '';

for (i = 0; i < 5; i++){
  triangle += '* '
  console.log(triangle)
}

// Sum multiples of 3 and 5 under 1000

var total = 0;
for (var number = 0; number <= 1000; number++) {
  if (number % 3 == 0) {total += number}
  else if (number % 5 == 0) {total += number}
}
console.log(total)

