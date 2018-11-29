// Check if it is array

var stringa = 'this is a string'
var arrayOne = ['this','is','an','array']

function isArray(item){
  Array.isArray(item) ? console.log('Variable is an Array') : console.log('Variable is not an Array')
}

isArray(stringa)
isArray(arrayOne)

// Join array

var beatles = ['John','George','Ringo','Paul']

function joinArray(item){
  joinedArray = item.join(',')
  return joinedArray
}

console.log(joinArray(beatles))

// Clone Array

arrayA = ['this','is','the','array','to','clone']

function cloning(toClone){
  return toClone.map(function (x){return x})
}

arrayB = cloning(arrayA)
console.log(arrayB)

// Find differences

var arr1 = [1, 2, 3]
var arr2 = [100, 2, 1, 10]

var arr3 = [1, 2, 3, 4, 5] 
var arr4 = [1, [2], [3, [[4]]],[5,6]]


function difference(a,b){


  var shortest = a.length > b.lenght ? b : a
  var longest = a.length > b.lenght ? a : b

  var diffs = longest.slice(shortest.lenght)

  for (var i=0 ; i < shortest.length; i++)

  if (Array.isArray(a[i]) && !Array.isArray(b[i]) ||
      !Array.isArray(a[i]) && Array.isArray(b[i])){

    diffs.push(a[i])
    diffs.push(b[i])

  } else if (!Array.isArray(a[i]) && !Array.isArray(b[i])) {
    if (a[i] !== b[i]){

      diffs.push(a[i])
      diffs.push(b[i])
    }
  } else {
    diffs.push(difference(a[i],b[i]))
  }

  return diffs

}


console.log(difference(arr1,arr2))
console.log(difference(arr3,arr4))

// Sum Product

var arr3 = [1, 2, 3, 4, 5] 

function sumArray(array){
  var sum = 0;
  for (i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum
}

console.log(sumArray(arr3))

// Add Items and Push

var emptyArray = []
var itemArray = ['first','second','third','fourth']

function addItems(full){
  empty = []
  for (i = 0; i < full.length; i++){
    empty.push(full[i])
  }

  return empty
}

var emptyArray = addItems(itemArray)

console.log(emptyArray)

// Create array.length

function createArray(min,max){

  newArr = [];
  for (i = min; i < max+1; i++){
    newArr.push(i)
  }
  return newArr
}

newArray1 = createArray(1,4)
newArray2 = createArray(-6,9)

console.log(newArray1)
console.log(newArray2)

// Extract from the end of an array

var extractArray = [1,3,5,6,-8]

function extractEnd(array,value){
  extraction = array.splice(value)
  return extraction
}

var extracted = extractEnd(extractArray, -2)
console.log(extracted)

// Sort items

var sortIt = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]
function sorter(toSort){sorted = toSort.sort(function(a, b){return a-b}); return toSort}
console.log(sorter(sortIt))

// Get random item from an array

var pickOne = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]

function randomPicker(array){return array[parseInt(Math.random() * array.length)]}
console.log(randomPicker(pickOne))

// Identify duplicates in array

var arr = [9, 10, 9, 4, 111, 2, 3, 4, 7, 4, 5, 7];

function checkDuplicates(array){
  sorted = array.sort(function(a, b){return a-b})
  doubles = []
  for(i = 0; i < array.length; i++){if (sorted[i+1] === sorted[i]){doubles.push(sorted[i])}}
  return doubles
}

console.log(checkDuplicates(arr))

// Merge array and remove duplicates

var one = [1,2,3,4,5,6]
var two = [4,5,6,7,8,9]

function mergeRemoveDoubles(arr1,arr2){
  newArray = arr1.concat(arr2).sort(function(a, b){return a-b})
  cleanArr = [];
  for(i = 0; i < newArray.length; i++){
    if (newArray[i+1] !== newArray[i]){
      cleanArr.push(newArray[i])
    }
  }
  console.log(cleanArr)
}

console.log(mergeRemoveDoubles(one,two))

// Separate Even


// Count occurencies

var doubArray = [3, 'a', 4, 'a', 'a', 2, 4, 4, 4, 4, 3, 'a', 3, 'a', 2, 4, 9, 3]

function calcDoubles(array){
  objDoubles = array.reduce(function (acc, curr) {acc[curr] ? acc[curr]++ : acc[curr] = 1; return acc;}, {});
  arrayDoubles=[]
  for (var num in objDoubles) {arrayDoubles.push([num,objDoubles[num]])};
  arrayDoubles.sort(function(a, b) {return b[1] - a[1];});
  return `${arrayDoubles[0][0]} (${arrayDoubles[0][1]} times)`
}

console.log(calcDoubles(doubArray))


// Move element into array

var arrayOne = [10, 20, 30, 40, 50]

function moveInto(array,where,what){
  temp = array.splice(what,1)
  array.splice(where,0,temp)
  array.join().split(',')
  var result = array.map(function (x) {return parseInt(x, 10);});
  return result
}

console.log(moveInto(arrayOne,2,0))

// Swap Case

var phraseFox = 'The Quick Brown Fox'

var swapCase = function(letters){
  var swapper = "";
  for(var i = 0; i<letters.length; i++){
      if(letters[i] === letters[i].toLowerCase()){
          swapper += letters[i].toUpperCase();
      }else {
          swapper += letters[i].toLowerCase();
      }
  }
  return swapper;
}

console.log(swapCase(phraseFox))

// Print elements array

var printThis = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

function printArrays(array){
  for(i=0; i < array.length; i++){
      console.log(`- Row ${i} -`)
    for(j=0; j < array[i].length; j++){
      console.log(array[i][j])
    }
  }
}

console.log(printArrays(printThis))

// Create a prefilled array

function fillArray(item,times){
  preFilled = item + ','
  array = preFilled.repeat(times).split(',')
  array.splice(-1,1)
  return array
}

console.log(fillArray('default value',4))

// Show choices

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function humanizeArray(array){

  first = 'st'
  second = 'nd'
  third = 'rd'
  others = 'th'


  for(i = 0; i < array.length; i++){

  indexO = array.indexOf(array[i])+1

    if (indexO === 1){
      console.log(`The ${indexO + first} choice is ${array[i]}`)
    } else if (indexO === 2){
      console.log(`The ${indexO + second} choice is ${array[i]}`)
    } else if(indexO === 3){
      console.log(`The ${indexO + third} choice is ${array[i]}`)
    } else {
      console.log(`The ${indexO + others} choice is ${array[i]}`)
    }
  }
}

console.log(humanizeArray(color))

// Leap year

var leapYear = 0;

function leapIt(rangeA,rangeB){
  for (i = rangeB; i > rangeA; i--){
    if (!(i % 4)){
      console.log(`${i} is a Leap year`)
    } else {
      console.log(`${i}`)
    }
  }
}

console.log(leapIt(1934,2020))

// Shuffle Array

var playList = ['track1','track2','track3','track4','track5','track6']

function shuffleArray(arr){

  cloned = arr.map(function (x){return x})
  temp = [];
  shuffled = [];
  indexNew = [];

  for (var i=0;i<arr.length;i++){

      next_num = Math.floor((Math.random()*arr.length));

      while (indexNew.indexOf(next_num) !== -1) {
          next_num = Math.floor((Math.random()*arr.length));
      }

      indexNew.push(next_num);
  }


  for (i = 0; i < arr.length; i++){

    temp = cloned[indexNew[i]]
    shuffled.push(temp)
    console.log('here we are')  
  }
  
  return shuffled

}

console.log(shuffleArray(playList))

// Binary Search

var items = [1, 2, 3, 4, 5, 7, 8, 9]

function binarySearch(arr,item){
  return arr.indexOf(item)
}

console.log(binarySearch(items,3))

// Sum Positions

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

function sumArrayPos(arr1,arr2){
  newArray=[];

    for (i=0;i<arr1.length;i++){
      temp = arr1[i]+arr2[i]
      console.log(temp)
      newArray.push(temp)
    }
    return newArray

}

console.log(sumArrayPos(array1,array2))

// Generate array steps

function generateStep(start,end){
  newArray = [];
  for (i=start;i<end+1;i++) {newArray.push(i)} return newArray
}

console.log(generateStep(-4,5))

/*
Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
[1, 2, 3, [[4]], 5, 6] */

// Union Array

var one = [1,2,3,4,5,6]
var two = [4,5,6,7,8,9]

function mergeRemoveDoubles(arr1,arr2){
  newArray = arr1.concat(arr2).sort(function(a, b){return a-b})
  cleanArr = [];
  for(i = 0; i < newArray.length; i++){
    if (newArray[i+1] !== newArray[i]){
      cleanArr.push(newArray[i])
    }
  }
  console.log(cleanArr)
}

console.log(mergeRemoveDoubles(one,two))

// Remove Falsy

var falsyArr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

function cleanFalsy(arr){
  falsyStuff = [NaN,false,undefined,null,'']
  res = arr.filter(function(f){return !falsyStuff.includes(f)})
  return res
}

console.log(cleanFalsy(falsyArr))


// Show first element of an array or n elements if requested

var arrTest = [7, 9, 0, -2]

function extractFirst(arr,items=1){
  if (Array.isArray(arr)){
    return arr.slice(0,items)
  } else {
    console.log('Please use an array as first parameter')
  }
}

console.log(extractFirst(arrTest))
console.log(extractFirst(arrTest,2))
console.log(extractFirst(arrTest,3))

// Sorting object by x value

var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

  function sortArrayOfObjects(arrayToSort, key) {
    function compareObjects(a, b) {
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    }

    return arrayToSort.sort(compareObjects);
}


console.log(sortArrayOfObjects(library,'title'))

// Find pair sum

var numbers= [10,20,10,40,50,60,70]

function findPairSum(arr,target){
  temp ='';
  pairsArray = []
  for (i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++){
      temp = arr[i] + arr[j]
      if(temp === target){
        pairsArray.push(`${arr[i]} (index#${i}) + ${arr[j]}(index#${j}) do ${target}`)
      }
    }
  }
  pairsArray.forEach(function(x){console.log(x)})

}

findPairSum(numbers,50)


// Valid Values => Check: Remove Falsy

// Longest Common

// Fill Array https://www.w3resource.com/javascript-exercises/javascript-array-exercise-29.php

// Remove a specific element from Array

var removeOne = [2, 5, 9, 6]

function removeAt(array,at){
  pos = array.indexOf(at)
  array.splice(pos,1)
  return array
}

console.log(removeAt(removeOne))

// Find Element in array

var findOne = [2, 5, 9, 6]

function findWhat(array,what){
  pos = array.indexOf(what)

  pos === -1 ? console.log(`Cannot find ${what} on the array`) : console.log(`${what} is on the array at position ${pos}`) 

}

findWhat(findOne,9)
findWhat(findOne,8)

// Empty an array keeping the size

var emptyThis = [1,2,3,4,5,6]

function emptyIt(arr){
  length = arr.length
  arr.length = 0
  arr.length = length
  return arr
}

console.log(emptyIt(emptyThis))

// Write a JavaScript function to get nth largest element from an unsorted array

var unSorted = [43, 56, 23, 89, 88, 90, 99, 652]

function pickNth(arr,value){
  function sorter(arr){arr = arr.sort(function(a, b){return a-b}); return arr}
  sorted = sorter(arr)
  nth = sorted.splice(- value,1)
  return nth
}

console.log(pickNth(unSorted,4))

// Array filled => Please check 'Create a prefilled array'

// Filter Falsy => Please check: Remove Falsy