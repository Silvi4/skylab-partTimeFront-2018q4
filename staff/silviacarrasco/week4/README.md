### scope

var foo = 'asd';

function myFunction(){
    console.log(foo)
}

myFunction();

El scope se crea en el momento de ejecutarlo, en este caso el console log nos devolveria asd puesto que no tenemos establecido ningun foo dentro de la función, por lo tanto lo busca fuera.

cada vez que generamos una funcion creamos un scope nuevo.

### this

function Person(name){
    this.name = name;

    this.sayHi(){
        return 'Hi ' +this.name;
    }
}

var p = new Person('Carles');

console.log(p.sayHi());

imprimirá : Hi Carles




function Person(name){
    this.name = name;
}

this.sayHi(){
        return 'Hi ' +this.name;
}

var p = new Person('Carles');

console.log(sayHi())

nos imprimirá solo Hi porque no tenemos el this definido. 

## RegEx

### .match()
var bio = "A developer called Silvia is learning regex";

si yo hago:
bio.match(/Silvia/); me va a aparecer el nombre en string porque existe en bio.

["Silvia"]

### .test()
Este método funciona como el anterior pero nos devuelve un booleano. y la forma de aplicarloe s la siguiente:

/Silvia/.test(bio); como la palabra Silvia existe en bio nos debolberá true.

true;

### .replace()
Reemplaza un poco de una cadena con otra cadena.

bio.replace(/Silvia/, '[redacted]');
"A developer called [redacted] is learning regex"

### special characters
Hay carácteres que necesitan de otro elemento para que puedan entenderse en RegEx. por ejemplo: 

$()*+.?[^|]

para poder usarlos necesitaremos poner delante de cada uno de ellos \ (la barra diagonal invertida).

/3\.5/.test(num);
false --> el numero era 1,2,3,4,5 por eso me devuelve un boolean.

### The dot operator
El carácter de punto tiene un significado especial en las expresiones regulares: coincide con cualquier carácter individual excepto para los nuevos caracteres de línea.

/3.5/.test(num);
true --> es cierto puesto que el numero 4 se encuentra entre el 3 y el 5.

### quantifiers
Hay una serie de "cuantificadores" que puede usar para decir cuántas veces se debe hacer coincidir algo. El primero es el SIGNO DE INTERROGACIÓN, que hace que el token anterior en la expresión (el carácter anterior o el grupo de caracteres) sea opcional.

La expresión / regexp? / Coincidirá con "regex" y "regexp", ya que el signo de interrogación hace que la p (pero solo la p) sea opcional.

El siguiente cuantificador lo veremos con el SIGNO MÁS. Significa "uno o más de la ficha anterior"; / Princes + / coincidirá con "Princes", "Princess", "Princesssss", etc. Sin embargo, no coincidirá con "Prince".

var shortStory = "A regular expression (also regex or regexp) is a string.";

shortStory.match(/\(.+\)/) --> recordamos que el paréntesis es un carácter especial.
["(also regex or regexp)"]

Similar al signo más es el ASTERISCO; pero en lugar de significar "uno o más", el asterisco significa "cero o más" del token anterior. / Princes * /, además de hacer coincidir todos los ejemplos de / Princes + /, también coincidiría con "Prince".

shortStory.match(/\(.*\)/);
["(also regex or regexp)"]

Hay un cuantificador final que puede usar que le permite limitar la REPETICIÓN. La sintaxis es {min, max}, que min es el número mínimo de repeticiones y max el máximo. Por ejemplo, / a {3,5} / coincidiría con "aaa", "aaaa" y "aaaaa"

bracketNumbers
"(123) (123456) (123456789)"

bracketNumbers.match(/\(.{5,8}\)/)

### Negated character classes
Una clase de caracteres negados coincidirá con cualquier carácter que no esté en la clase de caracteres. ^

### Character types

\ d coincide con los dígitos decimales (0-9)
\ s coincide con los caracteres de espacio en blanco
\ w coincide con los caracteres de las palabras (letras, incluidos los caracteres internacionales, números y el subrayado).






