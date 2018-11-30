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

