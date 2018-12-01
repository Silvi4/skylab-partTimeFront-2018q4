//### compare
function compareInsensitive(str1, str2) {
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
};

compareInsensitive('abcd', 'AbcD');

//### search II
function caseInsensitiveSrch(str, search_str) {
    var result= str.search(new RegExp(search_str, "i"));
  
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
}; 

caseInsensitiveSrch('JavaScript Exercises', 'Exercisess');

//### uncapitalize
function uncapitalize(str1){
    return str1.charAt(0).toLowerCase() + str1.slice(1);
};

uncapitalize('Js string exercises');

//### uncapitalize II
function unCapitalizeWords(str) { 
  return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
};

unCapitalizeWords('Js String Exercises');

//### capitalize
function capitalizeWords(str){
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
};

capitalizeWords('js string exercises');

//### capitalize II???
function unCapitalizeWords(str) {
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});
};

unCapitalizeWords('JS STRING EXERCISES');

//### isUpper
function isUpperCheck(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
};

isUpperCheck('Js STRING EXERCISES', 1);

//### isLower
function isLowerCheck(str, index) {
    return str.charAt(index).toLowerCase() === str.charAt(index);
};

isLowerCheck('Js STRING EXERCISES', 1);

//### humanize II
function humanize(num) {
    if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
    switch(num % 10) {
        case 3: return num + "rd";
        case 1: return num + "st";
        case 2: return num + "nd";
    }
    return num + "th";
};

humanize(102);

//### startsWith
function startsWith(input, str) {
    return input.indexOf(str) === 0;
};

startsWith('js string exercises', 'js');

//### endsWith
function endsWith(input, str) {
    var index = input.length - str.length;
    return index >= 0 && input.indexOf(str, index) > -1;
};

endsWith('JS string exercises', 'exercises');

//### successor
function successor(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        length = alphabet.length,
        result = str,
        i = str.length;
    while(i >= 0) {
        var last = str.charAt(--i),
            next = '',
            carry = false;

        if (isNaN(last)) {
            index = alphabet.indexOf(last.toLowerCase());

            if (index === -1) {
                next = last;
                carry = true;
            } else {
                var isUpperCase = last === last.toUpperCase();
                next = alphabet.charAt((index + 1) % length);
                if (isUpperCase) {
                    next = next.toUpperCase();
                }

                carry = index + 1 >= length;
                if (carry && i === 0) {
                    var added = isUpperCase ? 'A' : 'a';
                    result = added + next + result.slice(1);
                    break;
                }
            }
        } else {
            next = +last + 1;
            if(next > 9) {
                next = 0;
                carry = true;
            }

            if (carry && i === 0) {
                result = '1' + next + result.slice(1);
                break;
            }
        }
        result = result.slice(0, i) + next + result.slice(i + 1);
        if (!carry) {
            break;
        }
    }
    return result;
};

successor("abcd");
successor("THX1138");
successor("ZZZ9999");
successor("< >");
successor("1999zzz");

//### guid
function guid(lgt) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlgt = chars.length,
        length = lgt || 32;
        
    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlgt));
    }
    return buf.join('');
};

guid(15);