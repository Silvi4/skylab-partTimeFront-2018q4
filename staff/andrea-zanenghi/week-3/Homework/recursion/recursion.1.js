// Remove repetitive characters - Array

var repeated = 'ttyaabcbcb'

function removeRepeatChars(str, result = []){
  
  var recut;
  ordered = str.split('').join('')
  tempChar = ordered[0]
  result.push(tempChar)
  unique = result.join('')

  if (str[0] === undefined){return unique} 
    else {recut = ordered.split(tempChar).join('')}

  removeRepeatChars(recut,result)
  return unique
}

console.log(removeRepeatChars(repeated))

// Remove repetitive characters - String

var repeated = 'ttyaabcbcb'

function removeRepeatChars(str, result = []){

  result = result.includes(str[0]) ? result : result+str[0]; 
  if (str.length === 1){return result} 
    else {return removeRepeatChars(str.substr(1),result)}

}

console.log(removeRepeatChars(repeated))












////////////////////////////////////////////////////////////
                NEED TO STOP IT
////////////////////////////////////////////////////////////  

function removeRepeatChars(str){

  var recut=''
  arr = str.split('')
  first = arr.shift(0)
  rest = arr
  keepOn = true

  //console.log('arr:'+arr+' first:'+first+' rest:'+rest)
  for (i = 0; i < rest.length; i++){
    for (j = 0; i < rest.length; j++){
      if(first === rest[i]){
        rest.splice(i,1)
      } else if (rest[i] === rest[j]){
        keepOn = true
      } else {
        keepOn = false
      }
    }
  }
  rest.push(first)
  if (keepOn){
    removeRepeatChars(rest.join('')+first)
  }

  return rest.join('')
}


console.log(removeRepeatChars('aabcbcb'))


////////////////////////////////////////////////////////////
              NEED TO STOP IT
////////////////////////////////////////////////////////////

function removeRepeatChars(str){

  var recut = '';

  first = str.charAt(0)
  cutStr = str.substr(1)

    
    clean = isUnique(recut)

    function isUnique(str) {
      for (let i = 0; i < str.length; i++) {
        for (let j = 1 + i; j < str.length; j++) {
          if (str[i] === str[j]) {
            return false;
          }
        }
      }
      return true;
    }
    console.log(clean)
    console.log(recut)
    if (clean === false){
      recut = cutStr.replace(first, '')
      removeRepeatChars(recut+first)
    }
    
 

  return recut
}

console.log(removeRepeatChars('aabcbcb'))
