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