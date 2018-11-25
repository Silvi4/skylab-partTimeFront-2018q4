function isArray(array){
    return Array.isArray(array);
}
console.log(isArray('Skylab'));
console.log(isArray([3,5]));

function joinElements(array,symbol){
    symbol = symbol == undefined ? ',':symbol;
    return array.join(symbol);
}
console.log(joinElements(['John','George','Ringo','Paul']));
console.log(joinElements(['John','George','Ringo','Paul'],' '));

function array_Clone(array){
    var newarray = array.map(function(value){return value});
    return newarray;
}
array=[1, 2, 4, 0]
newarray = array_Clone(array);
console.log(array); 
console.log(newarray);
newarray[0]=5;
console.log(array)
console.log(newarray);

function flatArray(array){
    var result=[];
    for(var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(flatArray(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
}

function findDifferences(array1, array2){
    result = [];
    newarray1 = flatArray(array1);
    newarray2 = flatArray(array2);
    for(var i=0;i<newarray1.length;i++){
        if(!newarray2.includes(newarray1[i])){
            result.push(newarray1[i]);
        }
    }
    for(var i=0;i<newarray2.length;i++){
        if(!newarray1.includes(newarray2[i])){
            result.push(newarray2[i]);
        }
    }
    return result;
}
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));


function sumAndProduct(array){
    var resultsum=0;
    var resultproduct=1;
    for(var i=0;i<array.length;i++){
        resultsum += array[i];
        resultproduct *= array[i];
    }
    return [resultsum, resultproduct]
}
console.log(sumAndProduct([1, 2, 3, 4, 5]));

function addItems(){
    var result=[];
    for(var i=0;i<arguments.length;i++){
        Array.isArray(arguments[i])?result=result.concat(flatArray(arguments[i])):result.push(arguments[i]);
    }
    return result;
}
console.log(addItems([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

function generateArrayLength(number,length){
    var result = [];
    for (var i=0; i<length;i++){
        result.push(number+i);
    }
    return result;
}
console.log(generateArrayLength(1, 4)); 
console.log(generateArrayLength(-6, 4));

function last(array,position){
    position==undefined && (position=1);
    return array.slice(position*-1);
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

function sortItems(array){
     return array.sort(function(a,b){return a-b});
}
console.log(sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));

function getRandom(array){
    return array[parseInt(Math.random()*array.length)];
}

console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));

function findDuplicates(array){
    var object={};
    var result=[]
    for(var i=0;i<array.length-1;i++){
        array.includes(array[i],i+1)?object[array[i].toString()]=true:"";
    }
    for(prop in object){
        result.push(prop)
    }
    return result;
}
console.log(findDuplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

function mergeArrays(array1,array2){
    var object={};
    var result=array1.concat(array2);
    for(var i=0; i<result.length;i++){
        object[result[i]]=true;
    }
    result=[]
    for(prop in object){
        result.push(prop);
    }
    return result;
}
console.log(mergeArrays([1, 2, 3],[2, 30, 1]));