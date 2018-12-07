//isArray

function isAnArray(input) {

    Array.isArray(input) === true ? console.log('true') : console.log('false')

}

isAnArray('Skylab')

isAnArray([3, 5])

//joinElements

beatles = ['John', 'George', 'Ringo', 'Paul'];

var beatlesString = beatles.join()

console.log(beatlesString);



//array_Clone

function arrayClone(arrayToClone) {

    var clonedArray = []
    for (var i = 0; i < arrayToClone.length; i++) {

        var arrayElement = arrayToClone[i]

        clonedArray.push(arrayElement)

    }

    console.log(clonedArray)
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));




//findDifferences

var arrayDifferences = []

function compareArray(array1, array2) {


    
}

compareArray([1, 2, 3], [100, 2, 1, 10])


//Sum and Product


function sumAndProduct(arrayToSum) {

    var sumResult = arrayToSum.reduce(function (a, b) { return a + b; })
    var productResult = arrayToSum.reduce(function (a, b) { return a * b; })

    console.log(sumResult)
    console.log(productResult)

}

sumAndProduct([0, 2, 3])

//addItems

function addItems(array, elementToAdd) {

    array.push(elementToAdd);

    console.log(array);

}

addItems([0, 2, 3], 'new element')


//generateArrayLength

function generateArrayLength(startNum, arrayLength) {

    var generatedArray = []

    for (let i = 0; i < arrayLength; i++) {

        generatedArray.push(startNum)
        startNum++

    }

    console.log(generatedArray)

}

generateArrayLength(-6, 4);


//last

function lastElement(randomArr, elemntNumber) {

    if (typeof (arguments[1]) !== 'number' || arguments[1] === 0) {

        var lastElements = randomArr.slice(- 1)
        console.log(lastElements)

    } else {

        var lastElements = randomArr.slice(- elemntNumber)
        console.log(lastElements)

    }

};

lastElement([7, 9, 0, -2], 3);

//sort

var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1]

function sortItems(arrToOrder) {

    var orderedArray = arrToOrder.sort(function (a, b) {
        return a - b;
    });
    console.log(orderedArray)

}

sortItems(arr1);

//getRandom

function getRandomElement(randomArr) {

    var indexElement = Math.floor(Math.random() * randomArr.length)
    var randomElement = randomArr.splice(indexElement, 1)

    console.log(randomElement)


}

getRandomElement(['angel', 'clown', 'mandarin', 'sturgeon']);


//findDuplicates

var arrayToTest = [3, 2, 30, 1, 5, 8, 2];

function findDuplicates(randomArr) {

    var sortedArr = randomArr.sort();
    var duplicates = [];

    for (var i = 0; i < sortedArr.length; i++) {

        if (sortedArr[i] === sortedArr[i + 1]) {

            duplicates.push(sortedArr[i])

        }
    }

    console.log(duplicates)

};

findDuplicates(arrayToTest)

//mergeArrays

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];


function mergeArrays(firstArr, secondArr) {

    var mergedArr = firstArr.concat(secondArr)
    var sortedArr = mergedArr.sort()

    for (let i = 0; i < sortedArr.length; i++) {

        if (sortedArr[i] === sortedArr[i + 1]) {

            sortedArr.splice(sortedArr[i], 1)

        }

    }

    console.log(sortedArr)

}

mergeArrays(array1, array2);

// separateEven

function separateEven(numbersToSeparate) {
 

};

separateEven('025468');