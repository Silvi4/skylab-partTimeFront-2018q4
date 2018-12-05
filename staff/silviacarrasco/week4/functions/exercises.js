// string calculator

function add(input){
   
}

add([1,2,3,4]);

// is palindrome

function isPalindrome(){

}

isPalindrome();

// matrix

function matrix(num){
    return Array(num).fill(0).map(function(elem, i){
         return Array(num).fill(0).map(function(elem2, j){
			return 1 - Math.min(Math.abs(i-j),1);
		});
    })
}

matrix(3);

// second lowest and second greatest

function findSecond(arr){
	var numbers = []
    var a = arr.sort(function(x,y){
        return x-y;
    })
    console.log(a)
	numbers.push(arr[1], arr[arr.length-2])
	return numbers;
}

findSecond([4,8,6,3,2,1,5,9,7]);

// perfect number

// coinify

function amountCoins(amount, coins){
    if(amount === 0){
        return [];
    }else{
        if(amount >= coins[0]){
		nextAmount = (amount - coins[0]);
		return [coins[0]].concat(amountCoins(nextAmount, coins));
        }else{
            coins.shift();
            return amountCoins(amount, coins);
        }
    }
	
}
console.log(amountCoins(46, [25,10,5,2,1]))

// occurences

function occurances(str){
    var textSplit = str.split("");
    var letters = {};
    for(var i = 0; i < textSplit.length; i++){
            if(letters[textSplit[i]]){
                letters[textSplit[i]] += 1
            }else{
                letters[textSplit[i]] = 1
            }
        
    }
    console.log(letters);
}

occurances('welcome');

// Bubble Sort algorithm

function bubbleSortAlgorithm(arr){
    arr.sort(function(a,b){
        return b - a;
    });
    return arr;
}

bubbleSortAlgorithm([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

// Function name

function anonimus() {
    console.log( arguments.callee.name );
}

anonimus();