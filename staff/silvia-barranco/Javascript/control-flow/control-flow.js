//Tasks
function largerNum (num1, num2){
    num1 = window.prompt("Please enter the first integer");
    num2 = window.prompt("Please enter the second integer");
    return num1 > num2 ? num1 : num2
}
largerNum();

//sign_product
function product (x , y , z){
    var product= x * y * z;
    return product > 0 ? "The sign is -" : "The sign is +"
}
product (3, -7, 2)

//sort_numbers
function sortNumber (){
    var arrNumbers = [0, -1, 4];
    var sortNum= arrNumbers.sort()
    return sortNum
}
window.alert(sortNumber())

//largest_number
function largNum (){
    var numbers = [-5, -2, -6, 0, -1 ];
    return Math.max(...numbers)
}
largNum()

//odd_or_even
function odd_or_even(){
    for (var i = 0; i < 16; i++){
        if (i % 2 ===0){
            console.log(i + " is even")
        } else{
            console.log(i + " is odd")
        }
    }
}
odd_or_even()

//FizzBuzz
function fizzBuzz(){
for ( var i = 1; i <= 100; i++ ){
  if ( i%3 === 0 && i%5 === 0 ){
    console.log( i + " FizzBuzz" );
  }else if ( i%3 === 0 ) {
    console.log(i+ " Fizz" );
  }else if ( i%5 === 0 ){
    console.log(i+ " Buzz" );
  }else{
    console.log(i);
  }
}
}
fizzBuzz()

//contruct_pattern
var n = "";
for (var i = 0; i< 5; i++){
    n+="*"
    for (var j =0; j<=i; j++){
     console.log(n);   
    }
}

// under_1000
var sum = 0;
for (var i = 0; i < 1000; x++){
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);