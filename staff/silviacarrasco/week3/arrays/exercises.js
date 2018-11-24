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
    for (var i = 0; i < test1.length; i++) {
        if(!test2.includes(test1[i])) {
            dif.push(test1[i])
        }
        // test 
    }
    for (var j = 0; j < test2.length; j++) {
        if(!test1.includes(test2[j])) {
            dif.push(test2[j])
        }
        
    }
    return dif;
}

diferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);


// E 

