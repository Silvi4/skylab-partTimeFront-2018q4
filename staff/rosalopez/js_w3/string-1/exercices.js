//## isString
function isString(elem){
    if(typeof(elem) == "string"){
        console.log(true);
    } else {
        console.log(false);
    }
};

isString("w3resource");

//## isBlank
function isBlank(elem){
    if(elem != null && !elem.isBlank){
        console.log(false);
    } else {
        console.log(true);
    }
};

function isBlank(elem){
    return elem === ''
};

isBlank("rosa");

//##stringToArray
var name = 'Rosa Lopez'
function stringToArray(str) {
    return str.split(" ");
};

stringToArray(name);

//## truncate
var example = 'fasdlfjkañsdlkfjañsdlkkfj'
function truncate(str){
    return str.slice(3, 8);
};

truncate(example);

//## abbrev_name
var name = 'Rosa Lopez'
function abbrev_name(str){
    var nameArr = str.split(" ")
    return nameArr[0] + " " + nameArr[1].substr(0,1) + "."
};

abbrev_name(name);

//##protect
// pero me lo esta haciendo solo con el apellido
var myMail = "robin_singh@example.com"
function protect(mail){
    var splitMail = mail.split("@")
    return splitMail[0].substr(splitMail[0].length-5 ,splitMail[0].length) + "...@" + splitMail[1]
};
 protect(myMail);

 //###parameterize
var toBeParameterize ='this is Rosa from Spain'
function parameterize(str){
    return str.toLowerCase().replace(/\s/g ,'-')
};

parameterize(toBeParameterize);

//### capitalize_first
var toBeCapitalizeFirst ='this is rosa from spain'
function capitalize_first(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
};

capitalize_first(toBeCapitalizeFirst);

//### capitalize_words
var toBeCapitalizeFirstWord ='this is rosa from spain'
function capitalize_words(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
    }
    return words.join(' ');
};

capitalize_words(toBeCapitalizeFirstWord);
    
//### swapcase
var myCase = 'AaBbc';
function swapcase(str){
    var swapCase = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            swapCase = swapCase + str[i].toLowerCase();
        } else {
            swapCase = swapCase + str[i].toUpperCase();
        }
    }
	return swapCase;
};

swapcase(myCase);

//### camelize
var toBeCamelize ='this is rosa from spain'
function camelize_words(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
    }
    return words.join('');
};

camelize_words(toBeCamelize);

//### uncamelize
var toBeUncamelize ='ThisIsRosaFromSpain"'
function uncamelize_words(str) {
    var str = str.replace(/[A-Z]/g, function (char){
        return '_' + char.toLowerCase();
    });
	return str.replace("_", '');
};

uncamelize_words(toBeUncamelize);

//### repeat
var toRepeat = 'ja';
function repeat(str, times) {
    var repeated = str.repeat(times);
    return repeated;
};

repeat(toRepeat, 5);

//primera versión, pero no puedes decir el número de repeticiones
var toRepeat = 'ja';
function repeat(str) {
    var repeated = str.concat(str, str);
    return repeated;
};

repeat(toRepeat);

//### insert
var myString = 'We are doing some exercises';
function insert(str, add, position) {
    var output = [str.slice(0, position), add, str.slice(position)].join(' ');
    return output;
};

insert(myString, 'JavaScript', 17);
