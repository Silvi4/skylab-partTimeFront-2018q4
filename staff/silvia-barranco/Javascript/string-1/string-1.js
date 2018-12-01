// isString
function isString(input){
    return typeof input == String ? true : false
}
isString([1, 2, 4, 0])

//isBlank
function isBlank(input){
    return input === "" ? true : false
}
isBlank("")

//stringToArray
function stringToArray(str){
    return str.split(" ");
}
stringToArray("Robin Singh")
 
//truncate
function removeChar(str){
    return str.slice(0,4)
}
removeChar("Robin Singh", 4)

//abbrev_name
function abbrev_name(str){
    return str.substring(0, 7)
}
abbrev_name("Robin Singh")

//protect
function protect (str){
    return str.replace("_singh", "...")
}
protect("robin_singh@example.com")

//parameterize
function parameterize (str){
    return str.toLowerCase().replace(/ /g, '-')
}
parameterize("Robin Singh from USA.")

//capitalize_first
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.substr(1)
}
capitalize("js string exercises")

//capitalize_words
function capitalize_words(str){
    return str.charAt(0).toUpperCase() + str.substr(1);
}
console.log(capitalize_words('js string exercises'));

//swapcase
function swapcase(str){
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}
console.log(swapcase('AaBbc'));
    
//camelize
function camelize(str){
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i< str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    } return str.join('').trim()
}
    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));


//uncamelize
function uncamelize (str, separator){
    separator = typeof separator === 'undefined' ? ' ' : separator;
    var str = str.replace(/[A-Z]/g, function(letter){
        return separator + letter.toLowerCase();
    })
    return str.replace("/^" + separator + "/", '');
}
console.log(uncamelize('helloWorld', '_'));

//repeat
function repeat (str, n){
    return str.repeat(n);
}
console.log(repeat('Ha!',3));   

//insert
function insert(str, newSubStr, index){
    return str.slice(0, index) + newSubStr + str.slice(index);
}
console.log(insert('We are doing some exercises.','JavaScript ',18));
