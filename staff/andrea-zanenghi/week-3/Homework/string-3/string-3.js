// Compare case unsensitive

function compareStrings(a,b){
  check = a.toUpperCase() === b.toUpperCase() ? true : false
  return check
}
console.log(compareStrings('abcd', 'AbcD'))

// Case insensitive search

function caseInsSearch(input,term){
  
find = input.toUpperCase().split(' ').indexOf(term.toUpperCase())
find === -1 ? console.log('No Match') : console.log('I find it')

}
caseInsSearch('JavaScript Exercises', 'Exercisess')
caseInsSearch('JavaScript Exercises', 'Exercises')

// Uncapitalize first letter

function uncapitalize(string){return string.charAt(0).toLowerCase() + string.slice(1);}

console.log(uncapitalize('Js string exercises'))

// Capitalize all

function capitalizeWords(string){return string.toUpperCase()}

console.log(capitalizeWords('js string exercises'))

// Uncapitalize all

function capitalizeWords(string){return string.toLowerCase()}

console.log(capitalizeWords('JS STRING DECAP'))

// Check if char at a specific position is upper or lower

function checkCap(string,char){

  console.log(string[char])
    if (string[char] === ' ' ){
      console.log(`No valid character on position ${char}`)
    } else if (string[char] === string[char].toUpperCase()){
      console.log(`${char} is upper case`)
    } else if(string[char] === string[char].toLowerCase()){
      console.log(`${char} is lower case`)
    }
  
}

checkCap('Js STRING EXERCISES', 0)
checkCap('Js STRING EXERCISES', 1)
checkCap('Js STRING EXERCISES', 2)

// Humanize II

function humanizeNumbers(num){

  first = 'st'
  second = 'nd'
  third = 'rd'
  others = 'th'
  var lastNum = parseInt(num.toString().split('').pop())

  if (lastNum === 1){
    return num + first
  } else if (lastNum === 2){
    return num + second
  } else if(lastNum === 3){
    return num + third
  } else {
    return num + others
  }

}

console.log(humanizeNumbers(humanize1))
console.log(humanizeNumbers(humanize2))
console.log(humanizeNumbers(humanize3))
console.log(humanizeNumbers(humanize4))

// Check if string starts with x

function startsWith(string,check){
  len = check.length
  string.substring(0,len) === check ? console.log(true) : console.log(false)
}

startsWith('js string exercises', 'js')
startsWith('js string exercises', 'sjs')

// Check if string ends with x

function startsWith(string,check){
  len = check.length
  string.substring(string.length-len) === check ? console.log(true) : console.log(false)
}

startsWith('js string exercises', 'ses')
startsWith('js string exercises', 'sjs')


// Find successor to a string

function stringSucc(string){

  succ = '';
  element = string.slice(-1)
  console.log(element)
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  !isNaN(element)? numStringSucc(string) : textStringSucc(string)

  function numStringSucc(string){
    succ = string.slice(0,-1).concat(parseInt(element)+1)
    return succ.toString()
  }

  function textStringSucc(string){

    id = alphabet.indexOf(string.toLowerCase().slice(-1))


    element.toLowerCase() === alphabet[alphabet.length-1] ?
      succ = string.concat('1')
      : succ = string.slice(0,-1).concat(alphabet[id+1])
    }
  return succ.toString()
}


console.log(stringSucc('3456'))
console.log(stringSucc('345tt6t'))
console.log(stringSucc('345tt6t3'))
console.log(stringSucc('345tt6t3z'))
console.log(stringSucc('345tt6t3Z'))
console.log(stringSucc('345tt6t3U'))

// Guid > Solution taken from W3Resource => https://www.w3resource.com/javascript-exercises/javascript-string-exercise-49.php

function guid(len) {
  var buf = [],
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      charlen = chars.length,
      length = len || 32;
      
  for (var i = 0; i < length; i++) {
      buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
  }
  
  if 
  return buf.join('');
}

console.log(guid());  
console.log(guid(15));

// My guid version

function guid(len = 32){
  var id = []
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for(i = 0; i < len; i++){id.push(chars.substr(Math.floor(Math.random() * chars.length),1))}
  return id.join('')
}

console.log(guid(32))