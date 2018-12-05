// larger_integer

function largerInteger(a,b){

    a > b ?  console.log(a) : console.log(b);
    
};

largerInteger(5 , 10)

// sign_product

var numbers = [-3, 7, -2 ];

function signProduct( numArray ){

    var product = numArray[0]

    for (var i = 1; i < numArray.length ; i++) {

        product = product * numArray[i]
    
        console.log(product)
    }

    return product < 0 ? alert('product is -') : alert('product is +')

};

signProduct( numbers )

//sort_numbers

var nums = [0, -1, 4] 

nums.sort( function(a, b) {

    console.log(a,b)
    return b - a;
});

console.log(nums);

//largest_number

var numbers = [-5, -2, -6, 0, -1]

function largestNumber(arrNums) {

arrNums.sort( function(a, b) {
    return b - a;
});

console.log(arrNums[0])

}

largestNumber(numbers)


//odd_or_even

for (var i = 0; i < 15; i++) {
    
    i % 2 === 0 ? console.log( i + ' is even') : console.log( i +' is odd')
    
}

//FizzBuzz

for (var i = 1; i < 100; i++) {
    
    if( i % 3 === 0 && i % 5 === 0){
        console.log('Fizzbuzz');
    
    } else if ( i % 5 === 0 ){ 

        console.log('Buzz');

    } else if ( i % 3 === 0 ) { 

        console.log('Fizz');

    }
      
};



//contruct_pattern

var acc = "* "

for (var i = 0; i < 5; i++) {

    console.log(acc)
    acc = acc + "* " 
    
}

// under_1000

var multiplesArr = [] 

for (var i = 0; i < 1000; i++) {

    if( i % 3 === 0 && i % 5 === 0){
        multiplesArr.push(i)
    }    
    
}

console.log(multiplesArr)

console.log(multiplesArr.reduce(function(a, b){ return a + b; }));

