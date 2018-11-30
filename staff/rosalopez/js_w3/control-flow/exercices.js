//## larger_ integer 

function larger_integer(num1, num2){
    if(num1>num2){
        console.log(num1 + " is the greater");
    } else {
        console.log(num2 + " is the greater");
    }
};

larger_integer(3, 5);

//## sign_product
function sign_product(num1, num2, num3){
    var product= num1*num2*num3;
    if(product >= 0){
        var positive = console.log(product + " is a positive number.");
    } else {
        var negative = console.log(product + " is a negative number.");
    }
};

sign_product(3, -7, 2);

//con ternario
function sign_product(num1, num2, num3){
    var product = num1*num2*num3;
	var positive = product + " is a positive number."
	var negative = product + " is a negative number."
    product >= 0 ? console.log(positive) : console.log(negative); 
};

sign_product(3, -7, 2);

//## sort_numbers
function sort_numbers(num1, num2, num3){
    var sortedNum = []
    if (num1>num2){
        if(num1>num3){
            sortedNum.push(num1);
            if (num2>num3){
                sortedNum.push(num2);
                sortedNum.push(num3);
            } else {
                sortedNum.push(num3);
                sortedNum.push(num2);
            } 
        } else {
            sortedNum.push(num3);
            sortedNum.push(num1);
            sortedNum.push(num2);
        }
    } else {
        if(num2>num3){
            sortedNum.push(num2);
            if(num1>num3){
                sortedNum.push(num1);
                sortedNum.push(num3);
            } else {
                sortedNum.push(num3);
                sortedNum.push(num1);
            }
        }
    }
    console.log(sortedNum.join(", "))
}
sort_numbers(0, 1, -4);

//##largest_number
function sort_numbers(num1, num2, num3, num4, num5){
    if(num1> num2 && num1>num3 && num1>num4 && num1>num5){
        console.log( num1 + " is the largest number");
    } else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) {
        console.log( num2 + " is the largest number");
    } else if (num3>num1 && num3>num2 && num3>num4 && num3>num5) {
        console.log( num3 + " is the largest number");
    } else if (num4>num1 && num4>num2 && num4>num3 && num4>num5) {
        console.log( num4 + " is the largest number");
    } else {
        console.log( num5 + " is the largest number");
    }
};

sort_numbers(-5, -2, -6, 0, -1);

//##odd_or_even
function odd_or_even(){
    for(var i = 0; i < 16; i++){
        if ( i %2 == 0){
            console.log( i + " is even");
        } else {
            console.log( i + " is odd");
        }
    }
};

odd_or_even();

//## FizzBuzz
function FizzBuzz(){
    for(var i = 1; i < 101; i++){
        if ( i %3 ==0){
            console.log ("Fizz");
        } else if (i %5 == 0){
            console.log ("Buzz");
        } else if (i %3 ==0 && i %5 == 0){
            console.log ("FizzBuzz");
        } else {
            console.log (i);
        }
    }
};
FizzBuzz();

//##contruct_pattern
function contruct_pattern(){
    for(var i = 0; i < 5; i++){
        var asterisco;
        for(var j = 0; j <=i; j++){
            asterisco += " *";
        }
        console.log(asterisco);
    }
};

contruct_pattern();

//## under_1000
function under_1000(){
    var sum = 0;
    for(var i = 0; i < 1001; i++){
        if( i %3 == 0 || i %5 == 0){
            sum += i 
        }
    }
    console.log(sum);
};

under_1000();