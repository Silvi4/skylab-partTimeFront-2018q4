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

// H temrinar!

function capitalize(text) {
    var sp = text.split(" ")
    console.log(sp)
}

capitalize('js string ecercises')
