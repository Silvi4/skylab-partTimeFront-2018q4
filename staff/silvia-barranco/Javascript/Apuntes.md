#Vanilla JAVASCRIPT

##VARIABLES
var MY_MULTI = 10; - variable en mayusculaque será constante y no quiero cambiarla
Declarar variables un valor

##OBJECTS
== comparar variables
=== strictly equal

numeros hexadecimales también se pueden declarar como numbers 0x....

###string

###Métodos

indexOf() ---saber indice
charArt()
concat()
split()
replace()
substr()
toUpperCase()
ToLowerCase()
toString()
String()
toFixed() --nos lo pasan a string
toNumber()
Number()
Boolean()
parseInt()
parseFloat()
isNaN()
------------------------
+= / -= / ++ / != / !==
------------------------
&& AND // || OR // | (SE VALORAN LAS DOS OPCIONES)
------------------------
###Ternary Operators
var c= a > 0 ? "Hola" : "adios";

if
switch()
for()
while(), do while 
-----------------------------------------

###ARRAYS
var beatles = ["john", "Paul", "Ringo", "George"];
var newBeatles = new Array ("john", "Paul", "Ringo", "George");
console.log(beatles[])--indefined

join() --> separador (vacío coma)
concat() --> juntar arrays , devuelve array nuevo
beatles.concat(array2)
indexOf() --> saber indice de un valor en un array
push() --> añade a una array un valor en ultima posicion
unshift() --> 
shift() --> saca el primero d euna array y lo devuelve
pop() --> saca el ultimo de una array y lo devuelve
sort() --> modifica array
beatles.sort().reverse()
slice(posición inicial, posición final (añadir -1 para solo añadir final)) --> devuelve array de strings - no modifica la array original
splice(posicion inicial - final) - Modifica array original, nos dice una posicion inicial cuantas posiciones elimino

###OBJETOS
var obj = {
    attr: 'my value'
};

Object.keys()
function Person(name, lastName,...){
    this.name= name;
    this.lastName= lastName;
}
var sean = new Person('Sean', 'Lennon',...)
