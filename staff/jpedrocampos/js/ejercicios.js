//***********************************
//Control Flow
//***********************************

//larger_integer
var largerInt = function(numb1, numb2){
    if(numb1 > numb2){
        console.log('First is larger.');
    }
    else if(numb2 > numb1){
        console.log('Second is larger.');
    }
}
largerInt(1,6);

// sign product
var signProd = function(numb1, numb2, numb3){
    var m = numb1 * numb2 * numb3
    if(m > 0){
        alert("+");
    }
    else{
        alert("-");
    }
}
signProd(3, -7, 2);


//sort numbers
var sortNumbers = function(numb1, numb2, numb3){
    var numbers = [numb1, numb2, numb3];
    numbers.sort(function(a, b){return a-b});
    return numbers;
}
sortNumbers(6, -2, 90);

//largest number
var largestNumber = function(numb1, numb2, numb3, numb4, numb5){
    var numbers = [numb1, numb2, numb3, numb4, numb5];
    var larg = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > larg){
            larg = numbers[i];
        }
    }
    return larg;
}
console.log(largestNumber(2, 87, 9, -2, 0));
console.log(largestNumber(2, 8, 9, -2, 0));

//odd or even
var oddOrEven = function(){
    for(var i = 0; i < 16; i++){
        if(i%2 == 0){
            console.log(i.toString() + ' is even.');
        }
        if(i%2 == 1){
            console.log(i.toString() + ' is odd.');
        }
    }
}
oddOrEven();

//FizzBuzz
var fizzBuzz = function(){
    var fbStr = '';
    for(var i = 1; i <= 100; i++){
        if(isMultOf3(i)){
            fbStr += 'Fizz';
        }

        if(isMultOf5(i)){
            fbStr += 'Buzz';
        }

        console.log(fbStr);
        fbStr = '';
    }
}
var isMultOf3 = function(number){
    if(number%3 === 0){
        return true;
    }else {
        return false;
    }
}
var isMultOf5 = function(number){
    if(number%5 === 0){
        return true;
    }else {
        return false;
    }
}
fizzBuzz();

//contruct_pattern
var contruct_pattern = function(){
    var row = '';
    var col = '';

    for(var i = 0; i < 5; i++){
        row += '*';
        for(var j = i; j < i -1; j++){
            col += '*';
        }
        console.log(row + col);
    }
}
contruct_pattern();

//Under_1000
var under1000 = function(){
    var multOf3 = [];
    var multOf5 = [];
    for(var i = 0; i < 1000; i++){
        if(isMultOf3(i)){
            multOf3.push(i);
        }else if(isMultOf5(i)){
            multOf5.push(i);
        }
    }

    //Obtiene el somatorio de los multiplos de 3:
    var mult3sum = 0;
    for(var i = 0; i < multOf3.length; i++){
        mult3sum += multOf3[i];
    }
    console.log('Sum of multiples of 3 = ' + mult3sum.toString());
    
    //Obtiene el somatorio de los multiplos de 5:
    var mult5sum = 0;
    for(var i = 0; i < multOf5.length; i++){
        mult5sum += multOf5[i];
    }
    console.log('Sum of multiples of 5 = ' + mult5sum);

    //Devuelve el somatorio de los 2 resultados:
    return mult3sum + mult5sum;
}
under1000();
//Total: 166833 + 66335 = 233168;


//***********************************
//Strings
//***********************************

//isString
var isString = function(val){
    return typeof(val) === typeof('');
}
isString('test');
isString(90);


//isBlank
var isBlank = function(val){
    if(val === ''){
        return true;
    }else {
        return false;
    }
}


//stringToArray
var stringToArray = function(val, separator){
    return val.split(separator);
}
stringToArray('ABC DEF XPTO', ' ');
//["ABC", "DEF", "XPTO"]

//truncate
var truncate = function(val, nToRemove){
    if(isString(val)){
        return val.toString().substr(0, nToRemove);
    }
}
truncate("Robin Singh",4);
//"Robi"


//abbrev_name
var abbrev_name = function(val){
    if(isString(val)){
        var vals = val.split(' ');
        console.log(vals);
        var abbrevVal = '';
        
        if(vals.length > 1){
            abbrevVal = vals[0] + ' ' + vals[vals.length - 1].substr(0, 1) + '.';
        }
        else{
            abbrevVal = vals[0].substr(0, 1) + '.';
        }
        
        return abbrevVal;
    }
}
console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Robin"));

//protect_email
var protect_email = function(val){
    if(isString(val)){
        var vals = val.split('@');
        if(vals.length == 2){
            var first = vals[0];

            return first.substr(0, 5) + '...' + '@' + vals[1];
        }
    }
}
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"

//parameterize
var parameterize = function(val){
    if(isString(val)){
        var vals = val.split(' ');
        var newVals = [];
        for(var i = 0; i < vals.length; i++){
            newVals.push(vals[i].toLowerCase());
        }
        return newVals.join('-');
    }
}
console.log(parameterize("Robin Singh from USA."));

//capitalize_first
var capitalize_first = function(val){
    if(isString(val)){
        var vals = val.split(' ');
        var newVals = [];
        for(var i = 0; i < vals.length; i++){
            newVals.push(capitalizeFirstLetter(vals[i]));
        }
        return newVals.join(' ');
    }
}
function capitalizeFirstLetter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}
console.log(capitalize_first('js string exercises'));
//"Js String Exercises"

//swapcase
var swapcase = function(val){
    if(isString(val)){
        var newVal = '';
        for(var i = 0; i < val.length; i++){
            if(val[i] === val[i].toLowerCase()){
                newVal += val[i].toUpperCase();
            } else if(val[i] === val[i].toUpperCase()){
                newVal += val[i].toLowerCase();
            }
        }
        return newVal;
    }
}
console.log(swapcase('AaBbc'));
//"aAbBC"

//camelize
var camelize = function(val){
    if(isString(val)){
        var newVal = capitalize_first(val);
        return newVal.split(' ').join('');
    }
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
//"JavaScriptExercises"
//"JavaScriptExercises"
//"JavaScriptExercises"


//uncamelize
var uncamelize = function(val, separator){
    if(isString(val)){
        var newVals = [];
        var word = '';
        for(var i = 0; i < val.length; i++){
            if(val[i] === val[i].toLowerCase()){
                word += val[i];
            } else if(val[i] === val[i].toUpperCase()){
                newVals.push(word);
                word = val[i].toLowerCase();
            }
            if(i == val.length - 1){
                newVals.push(word);
            }
        }
        console.log(newVals);
        return newVals.join(separator);
    }
}
console.log(uncamelize('helloWorld', '_'));
//"hello_world"

//repeat
var repeat = function(val, times){
    if(isString(val)){
        var i = 0;
        var newVal = '';
        do{
            newVal += val;
	        i++;
        }while(i < times);
        return newVal;
    }
}
console.log(repeat('Ha!',3));

//insert
var insert = function(str, strToInsert, position = 1){
    if(position > 1){
        return str.substr(0, position) + strToInsert + str.substr(position, str.length - 1);
    }else {
        return str.substr(0, position - 1) + strToInsert + str.substr(position - 1, str.length);
    }
}
console.log(insert('We are doing some exercises.','JavaScript ', 18));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.',''));