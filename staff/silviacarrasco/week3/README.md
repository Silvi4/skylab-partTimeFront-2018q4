# 22/11/18

##JavaScript

Declaramos las variables de la siguiente manera:

- strings:

var myVarChachi = "sadf";

- numbers:

var muNumber = 100;

- boolean: 

var mySuperBool = true;

- null:

var myNullVar = null;

podemos también decidir que no variable no cambie nunca, podemos añadir la variable en mayúscula para establecerla de forma permanente:

var MY_MULTIPLIER = 10;

console.log(typeof myNullVar) --> esto nos definirá de que tipo es la variable, en este caso nos devolvería null.

Para comparar las variables usamos =, entonces si igualamos:

myNumber == myVarChachi se pueden comparar pero con dos "=" no es estrictamente comparado porque tienen el mismo valor pero no son tel mismo tipo, para ello tendriamos que igualar de esta manera: ===

Para contar en hexadecimal se pone 0x y la combinación que queramos.

Si queremos añadir un numero dentro de un string usamos ++:

var myNumber = 31;
var myString = "hola tengo +varMyNumber+ años";

- split es super util, nos separa el string por donde le digamos.

&& --> i
|| --> o

### for
var a = 1
for (var i = 0; i<10; i++) {
    console.log(i)
}
 me va a devolver 0,1,2,3,4,5,6,7,8,9

si hago conole.log(a)tendremos 10 numeros 1

### while

var i = 0;

while(i<10) {
    console.log(i)
    i++
}

### objects

var myObj = {
    a1: "a",
    a2: "b"
}

for (var prop in myObj)

var myArr = [1,2,3];

for(var elem of myArr) {
    console.log(elem)
}