//### isArray
var test = 'abc'
function checkArray(input) {
    return input.isArray(input);  
};

checkArray(test);

//### joinElements
beatles = ['John','George','Ringo','Paul'];
function joinArray(params) {
    return params.join(',');
};

joinArray(beatles);

//### array_Clone
var myArray = [1, 2, 4, 0];
function cloneArray(params){
    var clone = params.map(function (currentValue, index, arr) {
        return [arr[0], arr[1], [arr[2],arr[3]]] 
    });
    console.log(clone);
}

cloneArray(myArray);

//### findDifferences
//Esta es la versión en la que comparamos cada elemento con los elementos dell siguiente array.
// Primer console log del ejemplo: console.log(difference([1, 2, 3], [100, 2, 1, 10])); ["3", "10", "100"]
var myArray = [1, 2, 3];
var yourArray = [100, 2, 1, 10];
function differentArray(array1,array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])){
            result.push(array1[i]);
        }
    }
    for (var j = 0; j < array2.length; j++) {
        if (!array1.includes(array2[j])){
            result.push(array2[j]);
        }  
    }
    console.log(result);
}

differentArray(myArray, yourArray);

/*La intención esta, pero te compara los elementos por posiciones, por lo que no cumple el objetivo del ejercicio.
var myArray = [1, 2, 3];
var yourArray = [100, 2, 1, 10];
function differentArray(array1,array2) {
    var result = [];
    var longest = array2.length > array1.length ? array2 : array1;
    var difference = longest.slice(array1.length);
    console.log (difference);
    for (var i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]){
            result.push(array1[i]);
            result.push(array2[i]);
        }
    } 
    result.push(difference);
    console.log(result);
}

differentArray(myArray, yourArray);*/

//Segundo console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); ["6"]
var myArray = [1, 2, 3, 4, 5];
var yourArray = [1, [2], [3,[[4]]],[5,6]];
function differentArrayFlat(array1,array2) {
    var result = [];
    var array1_flat = array1.flat();
    var array2_flat = array2.flat(3);
    for (var i = 0; i < array1_flat.length; i++) {
        if (!array2_flat.includes(array1_flat[i])){
            result.push(array_flat1[i]);
        }
    }
    for (var j = 0; j < array2_flat.length; j++) {
        if (!array1_flat.includes(array2_flat[j])){
            result.push(array2_flat[j]);
        }  
    }
    console.log(result);
}

differentArrayFlat(myArray, yourArray); 

//### Sum and Product
var myArray = [1, 2, 3, 4, 5];
function sumAndProd(params) {
    var sum = 0;
    var prod = 1;
    for( var i = 0; i < params.length; i++){
        sum += params[i];
        prod *= params[i];
    }
    return 'Esta es la suma ' + sum + ' y este es el producto ' + prod;
};

sumAndProd(myArray);

//### addItems
function addItems(item1, item2, item3){
    var blankArray = [];
    blankArray.push(item1, item2, item3);
    return blankArray.join(' ');
};

addItems('manzana', '2', 'Rosa');

//### generateArrayLength
function generateArray(initial, length) {
    var myArray =  [];
    for (var i = initial-1; i < length+initial-1; i++){
        myArray.push(i+1);
    }
    return myArray;
};

generateArray(2, 5);

//### last
function getTheLastNElement(itemPosition) {
    var myArray = [7, 9, 0, -2];
    return myArray.slice(-itemPosition);
};

getTheLastNElement(1);

//### sortItems
function sortItems() {
    var myArray = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
    return myArray.sort(function(a, b){return a - b});
};

sortItems();

//### getRandom
function getRandomPosition (params) {
    var myArray = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
    return myArray[Math.floor(Math.random() * myArray.length)];
};

getRandomPosition();

//### findDuplicates
function duplicatesValues(array1) {
    var object = {};
    var result = [];
    array1.forEach(function (item) {
      if(!object[item])
            object[item] = 0;
            object[item] += 1;
    })
    for (var prop in object) {
        if(object[prop] >= 2) {
           result.push(prop);
       }
    }
    return result;
};

duplicatesValues([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);

//### mergeArrays
function merge_array(array1, array2) {
    var array1 = [1, 2, 3];
    var array2 = [2, 30, 1];
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];
        if(!assoc[item]) { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }
    return result_array;
};

merge_array();

//### separateEven
const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++){
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0)){
      result.push('-', str[x]);
    } else {
      result.push(str[x]);
    }
};
console.log(result.join(''));

//### mostFrequentItem
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++) {
        for (var j=i; j<arr1.length; j++){
            if (arr1[i] == arr1[j])
                m++;
                if (mf<m){
                    mf=m; 
                    item = arr1[i];
                }
        }
        m=0;
};
console.log(item+" ( " +mf +" times ) ");

//### moveElement
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
    return arr;
};

move([10, 20, 30, 40, 50], 0, 2);

//### swapCase
var str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
for(var x=0; x<str.length; x++) {
    if(UPPER.indexOf(str[x]) !== -1) {
      result.push(str[x].toLowerCase());
    } else if(LOWER.indexOf(str[x]) !== -1) {
      result.push(str[x].toUpperCase());
    } else {
      result.push(str[x]);
    }
};
console.log(result.join(''));

//### Print elements array
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i in a) {
    console.log("row " + i);
    for (var j in a[i]) {
      console.log(" " + a[i][j]);
    }
};

//### array_filled (string)
function arrayFilled(n, val) {
    return Array(...Array(n)).map(String.prototype.valueOf,val);
};

arrayFilled(3, 'default value');

//### Sum squares
function sum_sq(array) {
    var sum = 0,
    i = array.length;
    while (i--) {
        sum += Math.pow(array[i], 2);
    }
    return sum;
};

sum_sq([8, 11, 9, 4]);

//### removeDuplicate

//### showChoices

//### showLeapYears
function showLeapYears(starYear, endYear) {
    var years = [];
    for (var i = starYears; i <= endYear; i++){
        years.push(i);
    }
    var leapYears =[];
    for(var j =0; j < years.length ; j++){
        var y= years[j];
        if(y % 4 == 0){
            leapYears.push(y);
        }
    }
    return leapYears;
};
//version reducida
function showLeapYears(starYear, endYear) {
    var leapYears = [];
    for (var i = starYear; i <= endYear; i++){
        if(i % 4 == 0){
            leapYears.push(i);
        }
    }
    return leapYears;
};

showLeapYears(2000, 2012); 

//### shuffleArray

//### binarySearch
var array = [1, 2, 3, 4, 5, 7, 8, 9];
function binarySearch(array, item) {
    var firstIndex = 0;
    var lastIndex = array.length -1;
    var middleIndex = Math.floor((lastIndex + firstIndex)/2);
    while(array[middleIndex] !== item && firstIndex < lastIndex){
        if (item < array[middleIndex]){
            lastIndex = middleIndex -1;
        } else if (item > array[middleIndex]){
            firstIndex = middleIndex + 1
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
    if(array[middleIndex] == item){
        return middleIndex;
    } else {
        return -1;
    }
};

binarySearch(array, 3);

//### sumPositions

//### generateArraySteps

//### flattenArray

//### unionArray

