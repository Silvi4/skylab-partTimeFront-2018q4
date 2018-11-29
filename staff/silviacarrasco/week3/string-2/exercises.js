// compare

function stringCompare(str1,str2) {
    if(typeof(str1) === 'string' && typeof(str2) === 'string') {
        return true
    }else {
        return false
    }
}

stringCompare('abcd', 'AbcD');

// search II 

function search(input,str){
    input.search(str) > 0 ? console.log('Match!') : console.log('Does not exist!')
    
 }
 
 search('JavaScript Exercises', 'Exercises');

 // uncapitalize

 function uncapitalize(input){
    return input.toLowerCase()
 }

 uncapitalize('Js String Exercises');

 // unapitalize II

 function uncapitalize2(input){
	var str = ''
    var inputSplit = input.split(" ");
    for(var i = 0; i<inputSplit.length; i++) {
     str += inputSplit[i][0].toLowerCase()+inputSplit[i].slice(1) + ' '
	
    }
	console.log(str)
 }

 uncapitalize2('Js String Exercises');

 // capitalize

 function capitalizeAll(input){
    return input.toUpperCase()
 }

 capitalizeAll('js string exercises');

 // capitalize II

 function uncapitalizeAll(input){
    return input.toLowerCase();
 }

 uncapitalizeAll('JS STRING EXERCISES');

 // isUpper 

 function isLower(input, position){

    if (input.charAt(position).toUpperCase() === input.charAt(position)){
        return true;
    }else {
        return false;
    }
   }

isLower('Js STRING EXERCISES', 1);

   // isLower

function isLower(input, position){

    if (input.charAt(position).toLowerCase() === input.charAt(position)){
        return true;
    }else {
        return false;
    }
   }

isLower('Js STRING EXERCISES', 1);

// humanize II 


humanize();

// startsWhith

function startsWhith(input,str){
    if(input.indexOf(str) === 0){
          return true;
      }else{
          return false;
      }
  }
  
  startsWhith('js string exercises', 'js');

  // endsWith

  function endsWith(input,str){
    if(input.endsWith(str)){
        return true;
    }else{
        return false;
    }
  }

  endsWith('JS string exercises', 'exercises');

  // succesor 

  function succesor(input,str){
      
    for(var i = 0; i < input.length; i++){
        
    } 
  }

  succesor('abcdefghijklmnñopqrstuvwxyz','abcd');

  // guid

  function guid(input,charts){
    var randomString = ''
    for(var i = 0; i < charts; i++) {
        randomString += input.charAt(Math.floor(Math.random()* input.length))
    }
    return randomString;
  }

  guid('ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789', 8);