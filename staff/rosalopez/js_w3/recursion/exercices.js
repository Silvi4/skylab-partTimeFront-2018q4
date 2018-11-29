//### remove-repeat-chars

function removeChars(str) {
    if ( str.length <= 1 ) return str;
    if(str.substring(0,str.length -1).contains(str.substring(str.length -1,str.length))) 
        return removeChars(str.substring(0,str.length -1));
    else 
        return removeChars(str.substring(0,str.length -1)) + str.substring(str.length -1,str.length);
};

removeChars('AAAABBARRRCC');