//humanized
function humanized(num){
    if(num % 100 >= 11 && num % 100 <= 13)
        return number + "th";

    switch(num % 10) {
        case 1: return num + "st";
        case 2: return num + "nd";
        case 3: return num + "rd";
    }
    return number + "th";
}
console.log(humanized(301));

//truncate
function truncate(str, length, end){
    var trunc = str.substring(0, length);
    return trunc + end;
}
console.log(truncate('We are doing JS string exercises.',15,'!!'));

//chop
function chop(str, size){
   return str.match(/.{1,2}(.$)?/g).join("-");   
}
console.log(chop("w3resource", 2));

//count
function count(str, substr){
    return str.split(substr).length-1;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

//HTML_scape
function escape_HTML(str){
    return escape(str);
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));

//repeat II
function repeat2(str, n){
    return str.repeat(n);
}
console.log(repeat2('a', 4));

//strip
function strip(str){
    return str.trim();
}
console.log(strip(' w3resource '));

//truncate II
function truncate2(str, n){
    return str.split(" ").splice(0,n).join(" ");
}
console.log(truncate2('The quick brown fox jumps over the lazy dog', 4));

//alphabetize
function alphabetize(str){
    return str.split("").sort().join("").trim();
}
console.log(alphabetize('United States'));

//remove_first
function removeFirst(str){
    return str.replace(/the/g);
}
console.log(removeFirst("The quick brown fox jumps over the lazy dog", 'the'));

//ASCIItoHEX
function ascii_to_hexa(str){
    var arr1 = [];
    for (var i = 0; i < str.length; i++){
        var hexa = Number(str.charCodeAt(i)).toString(16);
		arr1.push(hexa);
    }
    return arr1.join('');
}
console.log(ascii_to_hexa('12'));

//HEXtoASCII ---COPIADO
function hex_to_ascii(str1){
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
}
console.log(hex_to_ascii('3132'));

//search //COPIADO
function search(str, word){
    var x = 0, y=0;   
    for (i=0;i< str.length;i++){
        if(str[i] == word[0]){
            for(j=i;j< i+word.length;j++){
                if(str[j]==word[j-i]){
                    y++;
                  }if (y==word.length){
                    x++;
                 }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}
console.log(search('The quick brown fox', 'fox'));

//check_ifEnds
function check_ifEnds(str, word){
    return str.endsWith(word);
}
console.log(check_ifEnds('JS PHP PYTHON','PYTHON'));

//scape_HTML II
function escape2(str){
    var char = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
    return str.replace(/[&<>'"]/g, function (m){ return char[m]; })
}
console.log(escape2('PHP & MySQL'));

//remove II
function remove2(str){
    return str.replace(/[^\x00-\x7F]/g, "");
}
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

//remove III
function remove3(str){
    return str.replace(/[^A-Za-z0-9]/g, '#')
}
console.log(remove3('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))

//sentence
function sentenceCase(str){
    return str.split(' ').map(function(val){ 
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
      }).join(' ');
}
console.log(sentenceCase('PHP exercises. python exercises.'));

//remove_HTMLorXML
function remove_HTMLorXML(str){
    return str.replace(/<[^>]*>/ig, "");
}
console.log(remove_HTMLorXML('<p><strong><em>PHP Exercises</em></strong></p>'));

//zeroFill
function zeroFill(num, length, sym){
    var str = num.toString()
    var fill= str.padStart(length, "0");
    return sym === '-' ? sym + fill : fill
}
console.log(zeroFill(120, 5, '-'));
