//isString

function isAnString(arguments){

if( typeof(arguments) === 'string' ){

    console.log('is a string')

} else{
 
    console.log(' is not a string ')
}

}


isAnString( 'w3resource' )

isAnString( [1, 2, 4, 0] )

//isBlank

function isBlank(arguments){
   
    arguments.trim()

    arguments === '' ? console.log('is blank') : console.log('no blank')

}

isBlank('')

isBlank(' ')


//stringToArray

function stringToArray( randomString ){

    randomString.trim()
    
    var newArray = randomString.split(' ')

    console.log(newArray)

}


stringToArray("Robin Singh")

//truncate

function truncate( randomString , letterStop ){

    var slicedName = randomString.slice( randomString[0] , letterStop)
    console.log( slicedName )

}

truncate("Robin Singh",4)


//abbrev_name

function abbrevName(nameString) {

    var  firstStep = nameString.trim();

    var nameArr = firstStep.split(' ')

    var abbrev = nameArr[0] + ' ' + nameArr[1][0] + '.'
    
    console.log(abbrev)
   
}

abbrevName('Robin Singh')


//protect

function protectMail( emailString ){

    var emailParts = emailString.split('@')
    var wordProtection = emailParts[0].slice(0,5)
    var protectedEmail = wordProtection + '...@' + emailParts[1]
    console.log( protectedEmail)

}

protectMail('stv_millan@hotmail.com')



//parameterize


function parameterize(randomString){

    var lowerCaseStep = randomString.toLowerCase();
    var noSpaces = lowerCaseStep.split(' ');
    var addSlashes= noSpaces.join('-');
    var parametrized = addSlashes.replace('.','');

    console.log(parametrized);
}

parameterize("Robin Singh from USA.")

//capitalize_first


function firstCapital(randomString){

    var capitalLetter = randomString[0].toUpperCase() + randomString.slice(1);

    console.log(capitalLetter);

};

firstCapital('estoy on fire');

// swapcase

function swapcase( randomString ){

    var stringToArray = Array.from(randomString);
    var finalString = [];

    for (var i = 0; i < stringToArray.length; i++) {
        
        if( stringToArray[i] === stringToArray[i].toUpperCase()){
            
            finalString.push( stringToArray[i].toLowerCase() )

        }else if(stringToArray[i] === stringToArray[i].toLowerCase()){
  
            finalString.push( stringToArray[i].toUpperCase() )

        } 

    }

    var swapped = finalString.join('')

    console.log(randomString + ' ----> ' + swapped )
    
};

swapcase( 'AaBbc' );

// camelize

function camelize( randomString ){

    var splittedString = randomString.split(' ');
    var capitalArray = [];

    for (var i = 0; i < splittedString.length; i++) {     
        
        var capitalLetters = splittedString[i][0].toUpperCase();
        var replaceCapital = splittedString[i].replace(splittedString[i][0] , capitalLetters );

        capitalArray.push(replaceCapital);

    }

    var camelized = capitalArray.join('');
    console.log(camelized);

};

camelize('JavaScript Exercises' );
camelize('JavaScript exercises' );
camelize('JavaScriptExercises' );


//uncamelize

function uncamelize( randomString , separator ){

    var splittedString = randomString.split('')
    console.log(splittedString)

    for (var i = 0; i < splittedString.length; i++) {
        
        if( splittedString[i] === splittedString[i].toUpperCase() ){

            splittedString[i] = separator + splittedString[i] ;

        };
        
    }

    var uncamelized = splittedString.join('')

    console.log(uncamelized)
}


uncamelize('helloWorld', '_')


// repeat 

function repeat( stringToRepeat , repetitions){
    
    if (repetitions === ''){ repetitions = 1}
    
    var repeatedWord = stringToRepeat

    for (var i = 0; i < arguments[1] -1 ; i++) {
       
        
        repeatedWord = repeatedWord + stringToRepeat;
        
    }

    console.log(repeatedWord);
}


repeat( 'Ha!' , 5 );


//insert

function insert(baseString, wordToAdd, position){

    var newPosition = position - 1;
    var splitString = baseString.split(' ');
    
    splitString.splice( newPosition, 0 , wordToAdd );
    
    var finalString = splitString.join(' ');
    console.log(finalString);
    
}

insert('We are doing some exercises.','JavaScript ', 5 )


