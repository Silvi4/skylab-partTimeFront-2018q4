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

