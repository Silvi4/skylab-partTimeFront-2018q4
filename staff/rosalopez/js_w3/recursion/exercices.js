//### remove-repeat-chars

function removeChars(str) {
    if (str.length <= 1 ){ 
        return str;
    }
    var result 
    if(str){
        return removeChars();
    } else {
        return removeChars();
    }
};

removeChars('AAAABBARRRCC');

// pasaremos la misma función pero con un 'for'
function removeRepeatChars(string) {
    var singles = { };

    for(var i = 0; i < string.length;i++){
        var el = string.charAt(i);

        if(singles.indexOf(el) < 0){
            singles.push(el);
        }
    }
    return singles.join('');
};

removeRepeatChars('AAAABBARRRCC');


function reverseString(str){
    if(str.length == 1) {
        return str;
    }

    var lastLetter = str.substr(-1);
    var restStr = str.substr(0, str.length -1);
        return lastLetter + reverseString(restStr);
};

console.log(reverseString('hello'));