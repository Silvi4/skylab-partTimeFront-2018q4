//isArray

function isAnArray( input ){

    Array.isArray(input) === true ? console.log('true') : console.log('false')
 
}

isAnArray('Skylab')

isAnArray([3, 5])

//joinElements

beatles = ['John','George','Ringo','Paul'];

var beatlesString = beatles.join()

console.log (beatlesString);

//array_Clone

function arrayClone(arrayToClone){

    var clonedArray =[] 
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

function compareArray( array1 , array2){



}

compareArray([1, 2, 3], [100, 2, 1, 10])

//Sum and Product


function sumAndProduct(arrayToSum){

    var sumResult = arrayToSum.reduce(function(a, b){ return a + b; })
    var productResult = arrayToSum.reduce(function(a, b){ return a * b; })
    
    console.log(sumResult)
    console.log(productResult)

}

sumAndProduct([0, 2, 3])

//addItems

function addItems( array , elementToAdd){

    array.push(elementToAdd);
    
    console.log(array);

}

addItems([0, 2, 3] , 'new element')

//generateArrayLength


function generateArrayLength( startNum , arrayLength ){

    var generatedArray = []

    for (let i = startNum ; i < arrayLength; i++) {
        
        generatedArray.push(startNum)
        startNum++
        
    }

    console.log(generatedArray)
    
}


generateArrayLength(-6, 4)