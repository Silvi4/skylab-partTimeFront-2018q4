var myVar = "Hello world!" //string

console.log(myVar)

var MY_UNTOUCHABLE_VAR = 'this is something to keep';
var myNumber = 110; //numeric variable
var myBoolean = true; //or false
var myNullVar = null; //undefined, etc.

console.log(typeof myNumber) //check the var type

var larga = 'abcdefghilmnopqrstuvz'

var abc = 'abc'
var cde = 'cde'
console.log(abc.concat(cde))

console.log(abc.replace('c','f')) // replace
console.log(larga.substr(10,22)) // substract

var a = 1;
var b = 0;

var c = a < 1 ? 'Hola' : 'Adios'
console.log(c)

// Testing some inputs //

console.log(typeof(15)) // number
console.log(typeof(5.5)) // number
console.log(typeof(1 != 2)) // boolean, false
console.log(typeof('johnny' + 3)) // string
console.log(typeof('johnny' - 5)) // number
console.log(typeof('hamburger' + 's')) // string
console.log(typeof('hamburger' - 's')) // number
console.log(typeof(99 * 'hamburger')) // number
console.log(99 * 'hamburger') // NaN

// else if //

var d = 0;

if (d < 0){
  console.log('d < 0')
} else if (d > 0){
  console.log('d > 0')
} else {
  console.log('d = 0')
}

// switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

switch(a) {
  case NaN:
    console.log('a it is not a number')
    break
  default:
    console.log('a it is a number')
}

// for loop

// while

var i = 0;

while(true){
  console.log(i)
  i++
  if(i > 100){
    break;
  }
}

// do while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while


var tt = 0;

do {
  console.log(tt)
  tt++
}

while(tt <= 10)

// Objects

var myObj = {
  a:1;
  b:2;
  c:3;
}

