//Challenge High Order Functions

//Camel Case
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
function camelCase(arr){
    var arr = arr.map(function(x){
        return x.charAt(0).toUpperCase() + x.slice(1);
    })
    return arr;
}
console.log(camelCase(months))

//Some Months
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
function someMonths(arr){
     return arr.filter(function(elemento){
        return elemento.indexOf("j") === 0
     })
}
console.log(someMonths(months));

//Count Vowels
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';
function countVowels(str){
    var arr = loremIpsum.split("");
    var vowels = ["a", "e", "i", "o", "u"];    
    var countVow = arr.reduce(function (acc, element){
        return vowels.includes(element) ? acc + 1 : acc
    }, 0); return countVow
} 
console.log(countVowels(loremIpsum))

//Great Than Five Letters
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
function greatFive(arr, pos){
    return arr.some(function(el){
        return el.length > pos ? true : false;
    })    
}
console.log(greatFive(months, 5));

//Callback

function adultPerson(age){
    return "YOU SHOULD PASS"
}

function underAge(age){
    return "YOU SHOULD NOT PASS"
}

function enterBar(age, adultcallback, underCallback){
    return age>=18 ? adultPerson() : underAge();

}
console.log(enterBar(17, adultPerson, underAge));




