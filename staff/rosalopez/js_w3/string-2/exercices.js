//### humanized
function stringANumber(num){
    if(typeof(num) == "undefined") return;
    if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        switch(num % 10) {
            case 1: return num + "st";
            case 2: return num + "nd";
            case 3: return num + "rd";
        }
        return num + "th";
};

stringANumber(301);

//### truncate
function truncateLongStrings(str, lgt, end) {
    if (lgt == null) {
        lgt = str.length;
      }
      if (end == null) {
        end = '...';
      }
      if (str.length > lgt) {
        return str.substring(0, lgt - end.length) + end;
      } else {
        return str;
      }
};

truncateLongStrings('We are doing JS string exercises.', 12, '***');

//### chop
function chopAString(str, lgt) {
    if (str == null) return [];
      str = String(str);
      lgt = ~~lgt;
return lgt > 0 ? str.match(new RegExp('.{1,' + lgt + '}', 'g')) : [str];
};

chopAString('w3resource',2);

//### count
function countSubstr(main_str, sub_str) {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) {
        return main_str.length + 1;
    }
        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
};

countSubstr("The quick brown fox jumps over the lazy dog", 'the');

//### HTML_scape
function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
		var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"',
        };

		return chars_to_replace[tag] || tag;
	});
};

escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">');

//### repeat II
function repeatString(string, count) {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null)) {
        return('Not a valid string');
    }
        count = count | 0;
    return new Array(count + 1).join(string);
};

repeatString('a', 4);

//### strip
function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
};

strip(' w3resource ');

//### truncate II
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
};

truncate('The quick brown fox jumps over the lazy dog', 4);

//### alphabetize
function alphabetizeString(str) {	
    return str.split('').sort().join('').trim();
};
alphabetizeString('United States');

//### remove_first
function removeFirstOcc(str, searchstr) {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
};

removeFirstOcc("The quick brown fox jumps over the lazy dog", 'the');

//### ASCIItoHEX
function ascii_to_hexa(str) {
	var array1 = [];
	for (var n = 0, l = str.length; n < l; n ++){
		var hex = Number(str.charCodeAt(n)).toString(16);
		array1.push(hex);
	}
	return array1.join('');
};

ascii_to_hexa('12');

//### HEXtoASCII
function hex_to_ascii(str1) {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
};

hex_to_ascii('313030');

//### search
function searchForWord(text, word) {
    var x = 0, y=0;
    for (i=0;i< text.length;i++){
        if(text[i] == word[0]){
            for(j=i;j< i+word.length;j++){
                if(text[j]==word[j-i]){
                    y++;
                }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
};

searchForWord('The quick brown fox', 'fox');

//### check_ifEnds
function stringEndsWith(str, suffix) {
    if (((str===null) || (str==='')) || ((suffix===null) || (suffix===''))){
    return false;
    } else {     
    str = str.toString();
    suffix = suffix.toString();
   }
 return str.indexOf(suffix, str.length -     suffix.length) !== -1;
};

stringEndsWith('JS PHP PYTHON','PYTHON');

//### scape_HTML II
function escape_html(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
     
    var map = {
       '&': '&amp;',
       '<': '&lt;',
       '>': '&gt;',
       '"': '&quot;',
       "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) { return map[m]; });
};

escape_html('PHP & MySQL');

//### remove II
function removeNonPrint(str) {
    if ((str===null) || (str===''))
         return false;
    else
        str = str.toString();
    return str.replace(/[^\x20-\x7E]/g, '');
};

removeNonPrint('äÄçÇéÉêPHP-MySQLöÖÐþúÚ');

//### remove III

//### sentence

//### remove_HTMLorXML

//### zeroFill