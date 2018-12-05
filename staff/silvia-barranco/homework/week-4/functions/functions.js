//String Calculator
function add(input){    
    var array1 = input.split(',');
    var sum = array1.reduce(function(accumulator, currentValue) {
        return parseInt(accumulator) + parseInt(currentValue);
      });
      return sum;    
}
console.log(add("1,2,3,4"));

//Is palindrome?
function check_Palindrome(str){
    return str == str.split('').reverse().join('');    
}
console.log(check_Palindrome('madam'));

//Matrix
function matrix(n) {
    return Array(n).fill(0).map(function(elem, i) {
      return Array(n).fill(0).map(function(elem2, j) {
        return 1 - Math.min(Math.abs(i-j),1);
      });
    });
  }
console.log(matrix(4));

//Second lowest and second greatest
function secondLow_secondGreat(arr){
    //ordenamos array
    arr.sort(function(a, b){
        return a-b;
    })
    var arr2 = [arr[0]];
    var result = [];
    for (var i = 1; i < arr.length; i++){
        if (arr[i-1] !== arr[i]){
            arr2.push(arr[i])
        }
    }
    result.push(arr2[1], arr2[arr2.length-2]);
    console.log(result);
    return result.join(",");
}
console.log(secondLow_secondGreat([1,2,3,4,5]));

//Perfect Numbers
function perfectNums(num){
    var half= 0;
    var i = 0;
    while (num / 2 >= i){ i++;
       if (num % i === 0){ half = half + i;} 
    } return num == half
}
console.log(perfectNums(6));

//Coinify
function amountTocoins(amount, arr){
    if (amount === 0){
       return [];
    }else{
        if (amount >= arr[0]){
          var resto = (amount - arr[0]);
          return [arr[0]].concat(amountTocoins(resto, arr));
        }else{
           arr.shift();
           return amountTocoins(amount, arr);
        }
    }
} 

amountTocoins(46, [25, 10, 5, 2, 1])

//Occurences
function occurances(str){
    var sorted = str.split("").sort().join("");
    var contar = 1;
    for (var i = 0; i < str.length; i++){
        if (sorted[i] == sorted[i+1]){
            contar++;
        }else{
            console.log(sorted[i]+ ": " + contar);
            contar = 1;
        }
    }
}
console.log(occurances("welcome"));

//Bubble Sort algorithm
array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];


//Function name
function doSomething() {
    return;
}
console.log(doSomething.name);