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
//
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

//### Sum and Product