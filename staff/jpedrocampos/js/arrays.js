//isArray
var isArray = function(val){
    return Array.isArray(val);
}
isArray('sad');
isArray(['123', '456']);

//joinElements
var joinElements = function(val){
    if(isArray(val)){
        return val.join();
    }
}
joinElements(['John','George','Ringo','Paul']);

//array_Clone
var array_Clone = function(val){
    if(isArray(val)){
        return val.slice(0);
    }
}
console.log(array_Clone([1, 2, 4, 0]));

//findDifferences
var findDifferences = function(val1, val2){
    
    var getflatList = function(list, flatArray){
        for(var i = 0; i < list.length; i++){
            if(isArray(list[i])){
                flatArray.push.apply(getflatList(list[i], flatArray));
            }
            else{
                flatArray.push(list[i]);
            }
        }
        return flatArray;
    }

    var getDifferences = function(val1, val2){
        var diff = [];
        if(isArray(val1) && isArray(val2)){
            var flatArray1 = [];
            flatArray1 = getflatList(val1, flatArray1);
    
            var flatArray2 = [];
            flatArray2 = getflatList(val2, flatArray2);
            
            for(var i = 0; i < flatArray1.length; i++){
                if(flatArray2.indexOf(flatArray1[i]) === -1){
                    // item del array 1 no existe
                    if(diff.indexOf(flatArray1[i]) === -1){
                        diff.push(flatArray1[i]);
                    }
                }
            }
            
            return diff;
        }
    }

    var diff = getDifferences(val1, val2);
    diff.push.apply(diff, getDifferences(val2, val1));
    return diff;
}
//console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
//  [3, 100, 10]
//console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//  [6]
//console.log(findDifferences([1, 2, [7, 9], 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//  [7, 9, 6]

//sumAndProduct
var sumAndProduct = function(val){
    var sum = 0;
    var product = 1;
    for(var i = 0; i < val.length; i++){
        sum += val[i];
        product *= val[i];
    }
    return [sum, product];
}
console.log(sumAndProduct([1, 2, 3, 78, 35, 8]));

//addItems
var addItems = function(val1, val2, val3){
    var arr = [];
    arr.push(val1);
    arr.push(val2);
    arr.push(val3);
    return arr;
}
console.log(addItems(56, 18, 2));


//generateArrayLength
var generateArrayLength = function(startPosition, numberOfItems){
    var result = [];
    var n = 0;
    while(n < numberOfItems){
        result.push(startPosition++);
        n++;
    }
    return result;
}
//console.log(generateArrayLength(1, 4));
//console.log(generateArrayLength(-6, 4));

//last
var last = function(arr, n = 1){
    var result = [];
    var invArray = arr.reverse();

    if(n > invArray.length){
        n = invArray.length;
    }

    for(var i = 0; i < n; i++){
        result.push(invArray[i]);
    }
    return result.reverse();
}
//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2], 3));
//console.log(last([7, 9, 0, -2], 6));

//sortItems
var sortItems = function(val){
    //Clonamos el array
    var original = val.slice(0);
    //Criamos nuevo array vacío
    var sorted = [];
    //Reordenamos el array movendo los valores más bajos del array provisionado para el nuevo array
    while(sorted.length < original.length){
        var min = Math.min.apply(null, val);
        var minId = val.indexOf(min);
        val.splice(minId, 1);
        sorted.push(min);
    }
    return sorted;
}
//console.log(sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
//[-4, -3, 1, 2, 3, 5, 6, 7, 8]

//getRandom
var getRandom = function(arr){
    if(isArray(arr)){
        var id = Math.floor((Math.random() * arr.length));
        return arr[id];
    }
}
//console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));

//findDuplicates
var findDuplicates = function(arr){
    var temp = [];

    var exists = function(item, arr, startFrom){
        for(var i = startFrom; i < arr.length; i++){
            if(arr[i] === item){
                return true;
            }
        }
        return false;
    }

    if(isArray(arr)){
        for(var i = 0; i < arr.length; i++){
            if(exists(arr[i], arr, i + 1)){
                temp.push(arr[i]);
            }
        }       
    }

    return temp;
}
//console.log(findDuplicates([13, 13, 7, 61, 5, -4, 8, 2, 61]));

//mergeArrays
var mergeArrays = function(arr1, arr2){

    var result = [];
    if(isArray(arr1) && isArray(arr2)){
        var merged = arr1.concat(arr2);

        for(var i = 0; i < merged.length; i++){
            if(result.indexOf(merged[i]) === -1){
                result.push(merged[i]);
            }
        }
    }

    return result;
}
//console.log(mergeArrays([13, 13, 7, -4], [5, -4, 8, 2, 13]));

//separateEven
var separateEven = function(numb){
    var result = '';
    var numbStr = numb.toString();
    for(var i = 0; i < numbStr.length; i++){
        result += numbStr[i].toString();
        console.log(result);
        if(numbStr[i]%2 == 0){
            if(i < numbStr.length - 1){
                if(numbStr[i+1]%2 == 0){
                    result += '-';
                    console.log(result);
                }
            }
        }
    }
    return result;
}
//console.log(separateEven('025468'));

var mostFrequentItem = function(arr){
    var itemsCount = [];
    var greaterId = 0;
    if(isArray(arr)){
        //Finds the duplicates:
        var rep = findDuplicates(arr);
        //For each element in the duplicate array...
        for(var i = 0; i < rep.length; i++){
            var item = rep[i];
            var times = 0;
            for(var j = 0; j < arr.length; j++){
                if(arr[j] === item){
                    times++;
                }
            }
            //Checks if the total number of times is the greatest so far. If yes, stores the item's index:
            if(times > Math.max.apply(Math, itemsCount)){
                greaterId = itemsCount.length;
            }
            //Finally, adds the total number of times into the times array:
            itemsCount.push(times);
        }
        return rep[greaterId] + ' (' + itemsCount[greaterId].toString() + ' times)';
    }
}
//console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//moveElement
var moveElement = function(arr, fromPos, toPos){
    if(isArray(arr) && toPos < arr.length){
        var itemToMove = arr.slice(fromPos)[0];
        console.log(itemToMove);
        arr.splice(fromPos, 1);
        arr.splice(toPos, 0, itemToMove);
    }
    return arr;
}
//console.log(moveElement([10, 20, 30, 40, 50], 0, 2));
//console.log(moveElement([10, 20, 30, 40, 50], -1, -2));

//swapCase
var swapCase = function(val){
    var result = '';
    for(var i = 0; i < val.length; i++){
        var uc = val[i].toUpperCase();
        var lc = val[i].toLowerCase();
        switch (val[i]){
            case uc:
            result += lc;
            break;
            case lc:
            result += uc;
            break;
        }
    }
    return result;
}
//console.log(swapCase('The Quick Brown Fox'));
//tHE qUICK bROWN fOX

//Print elements array
var printArrayElements = function(arr){
    if(isArray(arr)){
        for(var i = 0; i < arr.length; i++){
            console.log('Row ' + i.toString());
            if(isArray(arr[i])){
                for(var j = 0; j < arr[i].length; j++){
                    console.log('  ' + arr[i][j].toString());
                }
            }else{
                console.log('  ' + arr[i].toString());
            }
        }
    }
}
//console.log(printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

//array_filled
var array_filled = function(total, str){
    var result = [];
    for(var i = 0; i < total; i++){
        result.push(str);
    }
    return result;
}
//console.log(array_filled(4, 'password'));
//["password", "password", "password", "password"]

