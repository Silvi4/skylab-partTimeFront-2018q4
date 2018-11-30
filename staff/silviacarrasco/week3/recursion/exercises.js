// removeRepeatchars('aabcbcb') // acb

function removeRepeatchars(string) {
    var singles = []

    for (var i = 0; i < string.length; i++) {
        var el = string.charAt(i);

        if(singles.indexOf(el) < 0){
            singles.push(el)
        }
        
    }
    return singles.join('');
}

console.log(removeRepeatchars('aabcbcb'))

//carles te la solució al seu repo
// 1 1 2 3 4 8 13 21 34 55 ...
function fibonacci(num) {
    if(num == 0){
        return 1;
    }
    if(num == 1){
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num-2);
}

console.log(fibonacci(3))

// funcion recursiva que me devuelva el string al revés

function reverseString(string){
    if(string.length === 1){
        return string;
    }
    var lastLetter = string.substr(-1)
    var restoDelString = string.substr(0,string.length-1);
    return lastLetter + reverseString(restoDelString);

}

reverseString('hola')