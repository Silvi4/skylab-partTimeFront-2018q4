//remove-repeat-chars
//Write a recursive function that remove the repeat characters.
/* if dentro de if comparando indexOf */

function removeRepeatChars( randomString ){
    var removedChars = [];

    if(randomString.length === 0 ){ 

        return console.log(removedChars)
        
    } else {

        if( removedChars.indexOf(randomString[0]) === -1 ){
            
            removedChars.push(randomString[0])
            
            var slicedString = randomString.slice(1,randomString.length)
            console.log(removedChars)
            return removeRepeatChars( slicedString)

        }else{

            var slicedString = randomString.slice(1,randomString.length)
            console.log(removedChars)
            return removeRepeatChars( slicedString)
        }
     
    } 


}

removeRepeatChars('aabcbcb');


