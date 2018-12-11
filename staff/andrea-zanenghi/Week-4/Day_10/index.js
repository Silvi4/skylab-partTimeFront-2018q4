var recursion = 'Hello'

function reverse(str){

  if(str.length == 1){
    return str;
  }

  var last = str.substr(-1)
  var rest = str.substr(0,str.length -1)
  return last + reverse(rest)
}

console.log(reverse(recursion))


