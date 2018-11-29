// Humanize numbers

var humanize1 = 1;
var humanize2 = 22;
var humanize3 = 333;
var humanize4 = 4444;

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

// Truncate at 15 characters & Truncate 2

var phraseLong = 'Hey, please, truncate the string at the 15th character'

function truncString(text){
  if(text.length >= 15){
    return text.slice(0,15) + '...'
  }else{
    return text
  }
}

console.log(truncString(phraseLong))

// Chop a string in blocks of 2

var chopping = 'supercalifragilistichespiralidoso'

function chopString(text){

  chopped = []

  if (text.length > 2){
    for(i = 0; i <= text.length; i=i+2){
      chopped.push(text.slice(i,i+2))
    }
  }

  return chopped
}

console.log(chopString(chopping))

// Count occurences

var phraseOcc = 'The quick brown fox jumps over the lazy dog'

function calcOccu(text,find){
  var occurences = text.toLowerCase().split(find).length-1
  return occurences
}

console.log(calcOccu(phraseOcc,'the'))

// Escape an HTML string & Escape II
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

var htmlString = '<a href="javascript-string-exercise-17.php" target="_blank">'

function escapeHtml(safeThis) {
  return safeThis
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}

console.log(escapeHtml(htmlString))

// Repeat * x

var toRep = 'a'

function repeatIt(text,repeat){

  return text.repeat(repeat)

}

console.log(repeatIt(toRep,4))

// Strip string

var toStrip = '  Hello World    '

function stripIt(text){

  return text.trim()

}

console.log(stripIt(toStrip))

// Alphabetize String

var toAlpha = 'Alphabetize this string please'

function alphaBet(text){

  arraySplit = text.split('')
  cleanArray = arraySplit.filter(function(x){return x !=' '});
  return cleanArray.sort()
}

console.log(alphaBet(toAlpha))

// Remove first occurence on a string

var phraseOcc2 = 'The quick brown fox jumps over the lazy dog'

function remove2ndOcc(text,remove){
  lastOcc = text.lastIndexOf(remove)
  sliceInfo = remove.length
  occurences = text.toLowerCase().split(remove).length-1

  if(occurences > 1){
    return text.slice(0,lastOcc-1) + text.slice(lastOcc + sliceInfo, text.length)
  }

}

console.log(remove2ndOcc(phraseOcc2,'the'))

// Convert ASCII to HEX
// Source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-27.php
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));

// Found a word into a string and how many times


var whereToSearch = 'The quick brown fox jumps over the lazy dog'

function search(text,find){
  var occurences = text.toLowerCase().split(find).length-1
  return `The word "${find}" appears ${occurences} times`
}

console.log(search(whereToSearch,'the'))

// Find if a string ends with a sepcific word/series of characters

var textO = 'JS PHP PYTHON'

function checkLast(text,word){
  lastLength = word.length
  lastWord = text.substr(text.length - lastLength)
  console.log(lastWord,word)
  if (lastWord === word) {return true} else {return false}
}

console.log(checkLast(textO,'PYTHON'))

// Replace non printable characters

var removeChar = 'äÄçÇéÉêPHP-MySQLöÖÐþúÚ'
var regExNoPrint = /[^ -~]+/g

function removeNoPrint(string){
  var noChar = string.replace(regExNoPrint, "");
  return noChar
}

console.log(removeNoPrint(removeChar))

// Remove non-words character
// https://stackoverflow.com/questions/20864893/replace-all-non-alpha-numeric-characters-new-lines-and-multiple-white-space-wi

var removeChar = 'PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'
var regExNoWords = /[\W_]+/g

function removeNoPrint(string){
  var noChar = string.replace(regExNoWords, " ### ");
  return noChar
}

console.log(removeNoPrint(removeChar))

// Capitalize Title-Case

var titleCaseIt  = 'PHP exercises. python exercises.'

function titleCase(item){
  array = item.split(' ')
  var titleCased = [];
  for(i = 0; i < array.length; i++){
    temp =  array[i][0].toUpperCase() + array[i].slice(1)
    titleCased.push(temp)
  }

  return titleCased.join(' ')

}

console.log(titleCase(titleCaseIt))

// Remove HTM or XML

// var toClean = '<p><strong><em>PHP Exercises</em></strong></p>'

// function cleanHtmlXML(string){
//   cleaned = string.replace(/<.*>/, '') // This is removing all between '<' and '>', not working here
//   return cleaned
// }

// console.log(cleanHtmlXML(toClean))

// @license textAngular
// Author : Austin Anderson
// License : 2013 MIT
// Version 1.5.16
// // turn html into pure text that shows visiblity
// function stripHtmlToText(html)
// {
//     var tmp = document.createElement("DIV");
//     tmp.innerHTML = html;
//     var res = tmp.textContent || tmp.innerText || '';
//     res.replace('\u200B', ''); // zero width space
//     res = res.trim();
//     return res;
// }

var toClean = '<p><strong><em>PHP Exercises</em></strong></p>'

function cleanHtmlXML(string){

  var temp = document.createElement("div");
  temp.innerHTML = string;
  cleaned = temp.textContent || temp.innerText;
  return cleaned

}

console.log(cleanHtmlXML(toClean))

// Zero fill

var numero = 120

function fillZero(num,char,sign=null){

  numLen = num.toString().length
  zeroNum = parseInt(char - numLen)
  newNum = [];
  console.log(numLen)
  console.log(zeroNum)

  if (sign !== null){newNum.push(sign)}

  for (i = 0; i < zeroNum; i++){
    newNum.push('0')
    console.log(newNum)
  }

  newNum.push(num)
  return newNum.join('')

}

console.log(fillZero(numero,5,'+'))
console.log(fillZero(1900,10,'-'))


// Shorter Version
// https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros

function pad(num, len, sign=null)
{ sign===null ? 
  result = ("0000000000" + num).substr(-len) 
  : result = sign + ("0000000000" + num).substr(-len)
  return result 
};

console.log(pad(2345, 6,'+'));
console.log(pad(2345, 6));