//String Calculator

function add() {

    var result = Array.from(arguments).reduce(function (acc, el) { return el + acc; });
    return result

};

add(1, 2, 3, 4);

//Is palindrome?

function isPalindrome(wordToTest) {

    var reverseWord = wordToTest.split('').reverse().join('');
    var test = wordToTest === reverseWord ? 'PALINDROME' : ' NOT PALINDROME';
    return test;
};

isPalindrome('reverse');

isPalindrome('abcdcba');


// Matrix








//Second greater

function secondGreater(numsArr) {

    var sortedArray = numsArr.sort(function (a, b) { return a - b })

    return sortedArray[1] + ',' + sortedArray[sortedArray.length - 2];

};

secondGreater([1, 2, 3, 4, 5]);
secondGreater([1, 20, 7, 4, 5, 2, 0]);



//perfect Number

function isPerfect(num) {

    var dividers = [];

    for (var i = 0; i < num; i++) {
        if (num % i === 0) { dividers.push(i) };
    };

    var toTest = dividers.reduce(function (acc, el) { return acc + el });
    var tested = toTest === num ? 'PERFECT' : 'NON PERFECT';

    return tested
};

isPerfect(28);



//Coinify

var coinsNeeded = []

function amountCoins(amount, coinsArr) {


    amount = amount - coinsArr[0];
    coinsNeeded.push(coinsArr[0]);
    console.log(coinsArr[0])
    console.log(amount)
    if (amount <= 0) {
        return coinsNeeded
    
    } else if (amount < coinsArr[0] ) {

            return amountCoins(amount, coinsArr.slice(1))
    
    } else {
        return amountCoins(amount, coinsArr)
    }

};

amountCoins(46, [25, 10, 5, 2, 1]);

//Occurences

function occurences(word) {



}

occurences('welcome')