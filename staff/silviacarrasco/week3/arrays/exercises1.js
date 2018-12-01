// findDuplicates 
// Write a JavaScript program to find duplicate values in a JavaScript array.

function findDuplicates(array) {
    var input = {}
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        input[item]  ? input[item] += 1 : input[item] = 1
    }
    for(number in input){
        input[number] > 1 && console.log('Los numeros que se repiten son: ' + number)
    }
}

findDuplicates([3,5,-6,5,1,3,-6]);

// mergeArrays
// Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeArrays(arr1, arr2) {
    var arrayMerged = arr1.concat(arr2)
    var object = {}
	var arr3 = [];
    for(var i = 0; i < arrayMerged.length; i++) {
        var item = arrayMerged[i];
        object[item] ? object[item] += 1 : object[item] = 1
    }
    for (prop in object){
        object[prop] = 1 && arr3.push(prop)
    }
	return arr3;
}

mergeArrays([1, 2, 3],[2, 30, 1]); // FALTA CONVERTIRLO A NUMBER, NO PUEDO APLICAR SPLIT O JOIN

// separateEven
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// guiones entre cada dos numeros pares

function separateEven(numbers){
    var num = parseInt(numbers)
    for(var i = 0; i < num.length; i++) {
        console.log(num[i])
    }                                   // NO SALE
}

separateEven('025468');

// mostFrequentItem
// Write a JavaScript program to find the most frequent item of an array.

function mostFrequentItem(arr){
    var itemIqual = 0
    var mostFrequenced = 1
    var item;
    for(var i = 0; i < arr.length; i++){

        for(var j = i; j < arr.length; j++){
                if(arr[i] == arr[j]){
                itemIqual++
                }
                if(mostFrequenced < itemIqual){
                    mostFrequenced = itemIqual;
                    item = arr[i]
                }
        }
        itemIqual = 0;
    }
    console.log(item)
}

mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

// moveElement
// Write a JavaScript function to move an array element from one position to another.

function moveElement(array,fromIndex,toIndex){
    var element = array[fromIndex];
	array.splice(fromIndex, 1)
	array.splice(toIndex, 0, element)
	return array;
}

moveElement([10, 20, 30, 40, 50], 0, 2);

// negative elements

// swapCase
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str){
    var arr = []
    var swapSplit = str.split(" ")
    for(var i = 0; i < swapSplit.length; i ++){
            for(var j = 0; j < swapSplit[i].length; j++){
                if(swapSplit[i][j] === swapSplit[i][j].toUpperCase()){
                    arr.push(swapSplit[i][j].toLowerCase())
                }else{
                    arr.push(swapSplit[i][j].toUpperCase())
                }
            }
        }
        console.log(arr)
    }
    
    swapCase('The Quick Brown Fox');

// Print elements array
// Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.

function printArray(array){
	var count = 0
    for(var i = 0; i < array.length; i++){
	console.log('row ' + count++ +'\n'+ array[i])
        
    }
                                // falta poner en linea
}

printArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);

// array_filled (string)
// Write a JavaScript function to create a specified number of elements with pre-filled string value array.

function array_filled(value1,value2){
	return Array(value1).fill(value2)
	
}

array_filled(4,'password');

// Sum squares
// Write a JavaScript program to find the sum of squares of a numeric vector.

function sumSquares(array) {
	var sum = 0
	for(var i = 0; i < array.length; i ++){
		sum += array[i] * array[i]
	}
	return  sum;
}

sumSquares([0,1,2,3,4]);

// showChoices
// We have the following arrays : color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; o = ["th","st","nd","rd"] Write a JavaScript program to display the colors in the following way : "1st choice is Blue ." "2nd choice is Green." "3rd choice is Red."

function showChoices(arr1,arr2){
    var array = []
    for(var i = 0; i < arr1; i++){
                                        // NO
    }
   
}

showChoices(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],["th","st","nd","rd"]);

// showLeapYears
// Find the leap years in a given range of years.

function showLeapYears(){

}

showLeapYears();

// shuffleArray
// Write a JavaScript program to shuffle an array.

// binarySearch
//Write a JavaScript program to perform a binary search.

function binariSearch(item, num) {
    for(var i = 0; i < item.length; i++){
        
    }
}

binariSearch([1, 2, 3, 4, 5, 7, 8, 9], 1);

// sumPositions
// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

function sumPositions(array1,array2){
    var array3 = []
    for (var i = 0; i < array1.length; i++){
       array3.push(array1[i] + array2[i])
    }
    return array3 + ',' +  array2.slice(5)
}

sumPositions([1,0,2,3,4],[3,5,6,7,8,13]);

// generateArraySteps
// Write a JavaScript function to generate an array between two integers of 1 step length.

function generateArraySteps(initial, final){
    var array = []
    for(var i = initial; i<final+1; i++) {
            array.push(i)
    }
    return array
}

generateArraySteps(-4,7);

// flattenArray
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

function flattenArray(array){
    return array.flat(3)
     
 }
 
 flattenArray([1, [2], [3, [[4]]],[5,6]]);

 // unionArray
// Write a JavaScript program to compute the union of two arrays. Sample Data :

function unionArray(input1,input2) {
    var object = {}
    var array = []
    var merged = input1.concat(input2)
    for(var i = 0; i < merged.length; i++){
        var item = merged[i]
        object[item] ? object[item] += 1 : object[item] = 1
    }
    for(prop in object){
        object[prop] = 1 && array.push(prop)
    }
    return array
}

unionArray([1, 2, 3], [100, 2, 1, 10]);

// removeFalsy
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

function removeFalsy(input) {
    return input.filter(Boolean)
}

removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]);

// first
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// sortObjectsTitle
// Write a JavaScript function to sort the following array of objects by title value.

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sortObjectsTitle(input){
    input.sort(function(a,b){
        return a.title > b.title
    })
   
}

sortObjectsTitle(library);

