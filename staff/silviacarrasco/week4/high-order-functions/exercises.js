// capital case

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function capitalCase(arr){
    var modifiedArray = arr.map(function(el){
        return el[0].toUpperCase()+ el.slice(1)
    })
	console.log(modifiedArray)
}

capitalCase(months);

// some months

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function someMonths(arr){
    var modifiedArray = arr.filter(function(el){
        if(el[0] === 'j'){
            return el
        }
    })
    console.log(modifiedArray);
}

someMonths(months);

// count vowels

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

function countVowels(text){
var textSplit = text.split("")
    return textSplit.reduce(function(acc, letter){
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            return acc + 1
        }
		return acc;
    }, 0)
}

countVowels(loremIpsum);

// great than five letters

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function fiveLetters(arr){
    
   return arr.every(function(el){
        return el.length >= 5 // com que ja dona true o false, directament ja torna el resultat.
    })
}

fiveLetters(months);

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function fiveLetters(arr){
    
   return arr.some(function(el){
        return el.length >= 5 // com que ja dona true o false, directament ja torna el resultat.
    })
}

fiveLetters(months);

// callback

function allow(){
    return 'YOU SHALL PASS';
}
function disallow(age,callback){
    return 'YOU SHALL NOT PASS'
}
function main(age, allowCollback, stopCallback){
    // return age < 18 ? stopCallback : allowCallback;
    if(age >= 18){
        return allowCollback();
    }else{
        return stopCallback();
    }
}

main(18, allow, disallow);