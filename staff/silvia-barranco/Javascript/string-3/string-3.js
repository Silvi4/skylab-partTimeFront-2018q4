//compare
function compare_strings(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase() ? true : false
}
console.log(compare_strings('abcd', 'AbcD'));

//search2
function case_insensitive_search(str, word){
    var search = str.search(new RegExp(word))
    return search > 0 ? "Match" : "No Match";
}
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'))

//uncapitalize
function uncapitalize(str){
    return str.charAt(0).toLowerCase() + str.substr(1);
}
console.log(uncapitalize('Js string exercises'));

//uncapitalize II
function uncapitalize2(str){
    return str.toLowerCase(str.charAt(0) + str.substr(1));
}
console.log(uncapitalize2('Js String Exercises'));

//capitalize
function capitalizeWords(str){
    return str.toUpperCase();
}
console.log(capitalizeWords('js string exercises'));

//capitalize II
function unCapitalizeWords(str){
    return str.toLowerCase();
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));

//isUpper
function isUpperCaseAt(str, index){
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//isLower
function isLowerCaseAt(str, index){
    return str.charAt(index).toLowerCase() === str.charAt(index)
}
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));

//humanize II
function humanize(num){
    var j = num % 10, k = num % 100;
    if (j == 1 && k != 11) {
        return num + "st";
    }if (j == 2 && k != 12) {
        return num + "nd";
    }if (j == 3 && k != 13) {
        return num + "rd";
    } return num + "th";
}
console.log(humanize(1));
console.log(humanize(20));

//startsWith
function startsWith(str, word){
    return str.startsWith(word);
}
console.log(startsWith('js string exercises', 'js'));

//endsWith
function endsWith(str, word){
    return str.endsWith(word);
}
console.log(endsWith('JS string exercises', 'exercises'));

//successor ---COPIADO
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
            } if (carry && i === 0) {
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
}
console.log(successor('abcd'));

//guid
function guid(len) {
    var buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length,
    length = len || 32;        
    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }    
    return buf.join('');
}
console.log(guid(15));