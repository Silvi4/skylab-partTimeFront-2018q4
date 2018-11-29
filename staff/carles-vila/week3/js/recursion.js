function removeRepeatChars(string,result={}){
    result[string[string.length-1]]=string[string.length-1];
    if(string.length>1){
        return removeRepeatChars(string.substring(0,string.length-1),result);
    } else {
        return Object.keys(result).sort().join();
    }    
}
console.log(removeRepeatChars('aabcbcb'));