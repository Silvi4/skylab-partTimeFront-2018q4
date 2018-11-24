#APUNTES WEEK 3

## JAVASCRIP

- Si encontramos una variable en mayusculas y con guión bajo sigbnofica que esa variable es una **constante**
*EX: var = MY_MULTIPLYER;*

###OBJETOS

- Array, expresión regular, función...

- Comparaciones:
  " == " -----> compara valores. 
  " === " -----> compara estrictamente si es lo mismo. 

- Operciones:
  string + numero = string * suma ---> devuelve un numero*
  String ( - , * ,  / ) numero = numero *operadores puramente matemáticos --> devuelve un numero*

- Methods:
  .split()
  .replace()
  .substr()
  .substring()
  .toLowerCase()
  .toUpperCase()
  .toString() -------> si el objeto no acepta el método se puede intentar de usar **String(x)**
  .toFixed()
  .toNumber()-------> si el objeto no acepta el método se puede intentar de usar **Number(x)**
  .parseInt()
  .parseFloat()


###TERNARIAS

- a es mayor que 0 ? si es asi, devuelve 'hola' , sino , devuelve 'adios'.
  Ex traducido ---> *a > 0 ? 'hola' : 'adios'*

###CONDICIONALES

- if else / else if /
- switch

###LOOPS

- for()
- while()
- do while

- for in ----> for ( var prop in obj )
- for of ----> for ( var prop in array )

- forEach -----> 


###ARRAYS

var nombreArray = []
var newArray = new Array ('a','b', 'c')

**METHODS**

.join()---> devuelve string
.concat()----> devuelve nuevo array
.indexOf()
.push()----> añade al final
.unshift()
.shift()
.pop()-----> quita el ultimo guael valor si igualas a variable 
.sort()-----> devuelve array
.reverse()-----> ordena al reverse
.slice()
.splice()-----> devuelve array nuevo(no modifica el array)
.splice()



###OBJECTS

var obj = {

    attributo: 'John';
    lastName: 'Lennon';
    birthday: new Date('XXXX-XX-XX')
    children: [{name: 'Sean'} , name: 'Julian'}]

}


for in ----> for ( var prop in obj ) 

**CONSTRUCTOR FUNCTION**

function Person(name, lastName, birthday){

    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.getAge() = function(){};

}

var seanBirthay = new Date(197,9,7) 
var Sean = new Person( Sean, Lennon, );

**this.** *llama al objeto en si o sus caracteristicas*