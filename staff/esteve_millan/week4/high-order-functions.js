//Camel Case
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


function camelCase( arr ){

   var arrCapital =  arr.map( function (el) { 

        return el.charAt(0).toUpperCase() + el.slice(1)
       
    } )
    
    return arrCapital
}

camelCase( months )

// Some Months

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


function someMonths( arr , letter ){

    var filteredArr = arr.filter( function ( el ){

        return el[0] === letter;

    })

    return filteredArr;
}

someMonths( months , "j");


//  Count Vowels

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

function countVowels( text ){

    var arrText = text.split('');
    var arrVowels = ['a' , 'e' , 'i', 'o' , 'u']
    var vowelAcc = 0;
    
    arrText.reduce( function ( arr ){

        if( arr.includes( arrVowels ) ){

            vowelAcc + 1 
        
        } else {

            vowelAcc
        }   

    });
    
    return vowelAcc

};

countVowels( loremIpsum );

//Great Than Five Letters

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

function geraterFive( arr ){
   
    
    var result1 = arr.every( function ( el ) { 

        return el.length <= 5
        
    

    } )
    
    var result2 = arr.some( function ( el ) { 

       return  el.length === 5
    
    } )
        

    return result1 , result2

}

geraterFive(months);

// Callback

function allow(){

    return 'hahahahaha'

}

function disallow(){
    return 'nonoonooooo'

}


function main(  age ,  allowCallback , stopCllback ){

    if(age >= 30 ){
       return  allowCallback();
    }else{
        return stopCllback();
    }


}

main( 17 ,  allow , disallow );








