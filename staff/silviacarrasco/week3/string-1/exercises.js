// A

function isString(param) {
    if(typeof(param) == 'string') {
        console.log(param + ' this is a string.')
    }else{
        console.log(param + ' is not a string.')
    }
}

isString(3);

// B

function isBlank(param) {
    if(param === '') {
        return true;
    }else {
        return false;
    }
}

isBlank('');

// B.1

function isBlank(param) {
    return param === ''
}

isBlank('');

// C

function stringToArray(myName) {
    return myName.split(" ")

}

myName('silvia carrasco colom');

// D 

function truncate(myName){

    return myName.slice(3,5)
}

truncate('Silvia Carrasco')

// E

function abbrev_name(myName) {
    var name = myName.split(' ')
    return name[0] + ' ' + name[1].substr(0,1) + '.'
}

abbrev_name('silvia carrasco')

// F

function protect(mail) {
    var splitmail = mail.split('@')
   return splitmail[0].slice(0,5) + '...@' + splitmail[1]
}

protect('robin_singh@example.com')

//F.1

function protect(mail) {
    var splitmail = mail.split('@')
   return splitmail[0].substr((splitmail[0].lenght-6,splitmail[0].length)) + '...@' + splitmail[1]
}

protect('robin_singh@example.com') // no funciona

// G

function parametrize(text){
    var str = text.replace(/ /g, '-')
    console.log(str)
}
parametrize('js string exercises')

// H capitalize_words

function capitalize(text) {
    var sp = text.split(" ")
	var upper = ''
    for(var i = 0 ; i< sp.length; i++) {
        upper += sp[i][0].toUpperCase()+ sp[i].substr(1) + ' '
    }
	return upper;
}

capitalize('js string ecercises')

// I capitalize first

function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1)
}

capitalize("js string exercises")

// J swapcase

function swapcase(text) {
	var swapText = '';
    for(var i = 0; i<text.length; i++){
        if(text[i] === text[i].toUpperCase()) {
            swapText += text[i].toLowerCase()
        }else {
            swapText += text[i].toUpperCase()
        }
    }
	return swapText;	
}

swapcase('AaBbc');

// K camelize

function camelize (text) {
	var camel = '';
    var sp = text.split(' ')
    for(var i = 0; i< sp.length; i++){
		camel += sp[i][0].toUpperCase() + sp[i].slice(1)
	}
	return camel 
}

camelize('my name is silvia')

// L uncamelcase

function uncamelText(text) {
    var text = text.replace(/[A-Z]/g, function(letter) {
       return '_' + letter.toLowerCase();
    });
   console.log(text)
}

uncamelText('myNameIsSilvia');

// M repeat

function repeatText(text,number) {
    return text.repeat(number)
	
}

repeatText('Ha!', 4);

// N insert

function insert(text1,text2,position){
    return text1.slice(0,position) + text2 + ' ' + text1.slice(position)
}

insert('We are doing some exercises.', 'javascript','18')

