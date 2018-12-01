//Capital Case
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
var upperMonths = months.map(function(elem){
    return elem[0].toUpperCase() + elem.slice(1);
});

console.log(upperMonths);

//Some Months
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
var jMonths = months.filter(function(elem){
    return elem[0] === 'j';
});

console.log(jMonths);

//Count Vowels
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
var arrayLorem = loremIpsum.split("");

var result = arrayLorem.reduce(function(acc, letter){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return acc + 1;
    }
        return acc;
}, 0);

console.log(result);

//## Great Than Five Letters
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
months.every(function(elem){
    return elem.length >= 5;
});

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
months.some(function(elem){
    return elem.length >= 5;
});

//## Callback
function allow(){
    return 'YOU SHALL PASS';
}

function disallow(){
    return 'YOU SHALL NOT PASS';
}

function main(age, callback){
    return age < 18 ? stopCallback() : allowCallback();

    /*if(age >= 18){
        allowCallback();
    } else {
        return stopCallback();
    }*/
}

main(17, allowCallback, stopCallback); 


