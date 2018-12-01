// Is a string?

var a = 5;
var b = 'Hello World!';

function stringOrNot(item){
  if (!isNaN(item)){console.log(item + ' is a number')}
  else {console.log(item + ' is a string')}
}

stringOrNot(a)
stringOrNot(b)

// Is string blank

var c = '';
var d = 56;

function blankString(item){
  item === '' ? console.log('The String is empty') : console.log(item + ' is the value of the variable')
}

blankString(c)
blankString(d)

// Truncate with specified value

var truncate = 'Joe Madaletto';

function cutIt(item){
  return item.substring(0,7)
}

console.log(cutIt(truncate))

// Name Abbreviation

var nameLong = 'Johnny Bravo'

function abbrevia(text){
  abbrevia = text.split(' ')
  abbrevia[1] = abbrevia[1][0]+'.'
  return abbrevia.join(' ')
}

console.log(abbrevia(nameLong))

// Protect

var email = 'protectthis@gmail.com';

function protect(text){
  protection = text.split('@')
  protection[0] = protection[0].slice(0,3)+'...'
  return protection.join('@')
}

console.log(protect(email))


// Parametrize

var phrase = 'this is .a long PHRASE...'
var symbols = ['.',';','!','?',':']

function parametrize(item){

  for (i = item.length-1; i >= 0; i--){
    if (symbols.includes(item[i])){
      item = item.substring(0,i) + item.substring(i+1)
    }
  }
  console.log(item)
  para = item.toLowerCase().split(' ')
  return para.join('-')
}

console.log(parametrize(phrase))

// Capitalize first letter

var hello = 'hello world'

function capitalize(item){
  return item[0].toUpperCase() + item.slice(1)
}

console.log(capitalize(hello))

// Capitalize every first letter

var capital = 'tHis iS A dUMmy STRing'

function capitalFirst(text){
  var minCase = text.toLowerCase().split(' ')
  for (i = 0; i < minCase.length; i++){
    minCase[i] = minCase[i][0].toUpperCase() + minCase[i].slice(1)
  }
  return minCase.join(' ')
}

console.log(capitalFirst(capital))

// Capitalize every first letter - David Marin Version

var capital = 'tHis iS A dUMmy STRing'

function capitalFirst(){
 var result = capital.toLowerCase().split(' ').map(function(minCase){
    minCase = minCase[0].toUpperCase() + minCase.slice(1)
    return minCase
 })
 return result.join(' ')
}

console.log(capitalFirst(capital))

// Swap Case

// Camelize

var camel = 'caMel me Please'

function camelMe(text){
  var minCase = text.toLowerCase().split(' ')
  for (i = 0; i < minCase.length; i++){
    minCase[i] = minCase[i][0].toUpperCase() + minCase[i].slice(1)
  }
  return minCase.join('')
}

console.log(camelme(camel))

// Uncamelize

var decamel = 'DecamelMePlease'
var regex = /[A-Z][a-z]+/g;

function deCamel(text){
  deca = text.match(regex).join('_')
  return deca.toLowerCase()
}

console.log(deCamel(decamel))