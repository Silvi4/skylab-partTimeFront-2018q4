// A

function checkArray(input) {
    return Array.isArray(input);
}

checkArray(['test'])

// B 

function joinElements(input) {
return input.toString();
}

joinElements(['John','George','Ringo','Paul']);

// C

function clone(input){
    var cloneInput = input.slice(2,4)
    console.log([input[0], input[1], cloneInput])
	console.log(input);
}

clone([1, 2, 4, 0]);

// C.1

function clone(input){
    var cloneInput = [input[0], input[1], [input[2], input[3]]]
	console.log(cloneInput);
	console.log(input)
}

clone([1, 2, 4, 0]);

// D 

function diferences(test1,test2) {
    var dif = []
    for (var i = 0; i < test1.length; i++) {
        if(!test2.includes(test1[i])) {
            dif.push(test1[i])
        }
        
    }
    for (var j = 0; j < test2.length; j++) {
        if(!test1.includes(test2[j])) {
            dif.push(test2[j])
        }
        
    }
    return dif;
}

diferences([1, 2, 3], [100, 2, 1, 10]);


function diferences(test1,test2) {
    var dif = []
    var test3 = test2.flat(4);
    for (var i = 0; i < test1.length; i++) {
        if(!test3.includes(test1[i])) {
            dif.push(test1[i])
        }

    }
    for (var j = 0; j < test3.length; j++) {
        if(!test1.includes(test3[j])) {
            dif.push(test3[j])
        }
        
    }
    return dif;
}

diferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);


// E sum and product

function sumAndProduct(array) {
    var suma = 0
	var multi = 1
    for (var i = 0; i < array.length; i++) {
        suma += array[i]
		multi *= array[i]
        
    }
	return 'la suma de ' + array + ' es: ' + suma + ' , y el producto: ' + multi; 
}

sumAndProduct([1,2,3,4,5]);


// addItems

function generateArrayLength(name1,name2,name3){
    var array = []
    array.push(name1,name2,name3)
	return array;
}
generateArrayLength('silvia','Laura','Alan')

// generateArrayLength

function generateArrayLength(initial,final) {
    var array = []
    for(var i = initial-1; i<final+initial-1; i++){
        array.push(i+1)
    }
    return array
}

generateArrayLength(2,9);

// last

function array_range(param,n){
	var arr1 = [];
    for(var i = param.length-n; i < param.length; i++){
         arr1.push(param[i])
    }
	return arr1;
}

array_range([7,9,0,-2],3);

// sortItems

function sortItems(array){
    return array.sort(function(a, b){return a-b})
 }
 
 sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]);

// getRandom

 function getRandom(array){
    return array[Math.floor(Math.random()*array.length)]
  }
 
  getRandom([3,5,8,-4,0]);

// findDuplicates

function findDuplicates(input){
    
}

findDuplicates([2,5,-3,5,1]);