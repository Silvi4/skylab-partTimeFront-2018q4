// A

function myNumbers(num1,num2) {
    if(num1>num2) {
        return num1;
    }
    else if(num1<num2) {
        return num2;
    }
    else {
        return 'No hay un numero mayor'
    }
}

myNumbers(4,5);

// B

function myNumbers(num1,num2,num3) {
    var product = num1*num2*num3
    if (product > 0) {
        return 'The sign is +';
    }
    else {
        return 'The sign is -'
    }
}
myNumbers(3,-7,2);

//B.1 

function myNumbers(num1,num2,num3) {
    var product = num1*num2*num3
    return product > 0 ? 'The sign is +' : 'The sign is -'
}
// C

function sort_numbers(num1,num2,num3) {
    if(num1>num2) {
        if(num1>num3) {
            return num2 > num3 ? [num1,num2,num3]: [num1,num3,num2]
        }else {
            return [num3,num1,num2]
        }
    }else {
        if(num2>num3) {
            return num3>num1 ? [num2,num3,num1]: [num2,num1,num3]
        }else {
            return [num3,num2,num1]
        }
    }
}
sort_numbers(0,-1,4);

// D

function largest_number(num1,num2,num3,num4,num5){
    return Math.max(num1,num2,num3,num4,num5);
}
largest_number(-5,-2,-6,0,-1);

// D.1
function largest_number (num1,num2,num3,num4,num5){
    if (num1>num2 && num1>num2 && num1>num3 && num1>num4 && num1>num5){
        return 'the largest is ' + num1;
    }else if(num2 > num1 && num2> num3 && num2>num4 && num2>num5){
        return 'the largest is ' + num2;
    }else if(num3>num1 && num3>num2 && num3>num4 && num3>num5) {
        return 'the largest is ' + num3;
    }else if(num4>num1 && num4>num2 && num4>num3) {
        return 'the largest is ' + num4
    }else {
        return 'the largest is ' + num5;
    }
}
largest_number(-5,-2,-6,0,-1)

// E

function odd_or_even() {
    for(var i = 0; i<16; i++){
        if(i%2 = 0) {
            console.log(i + ' is even')
        }
        else{
            console.log(i + ' is odd')
        }
    }
}

odd_or_even();

// F

function fizzBuzz() {
    for(var i = 1; i<101; i++ ) {
        if(i%3 == 0) {
            console.log('Fizz');
        }
        else if(i%5 == 0) {
            console.log('Buzz')
        }else if(i%5 == 0 && i%3 == 0) {
            console.log('FizzBuzz');
        }else{
            console.log(i);
        }
    }
}

fizzBuzz();

// G

function construct_pattern() {
    for(var i = 0; i<5; i++) {
        var symbol = ''
        for( var j= 0; j<=i; j++){
            symbol += '* '
        }
        console.log(symbol)
    }
}

construct_pattern();

// H

function under_1000() {
    var suma = 0
    for(var i = 0; i<1001; i++) {
        if(i%3 == 0 || i%5 == 0){
            suma += i
        }
    }
    console.log(suma)
}

under_1000();