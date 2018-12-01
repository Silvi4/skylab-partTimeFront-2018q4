# APUNTES WEEK3

##Scope

* **this.** corresponde a quién llama la función, NO a quién lo crea*

.call()
.apply()
.bind()

##Higer order function

.forEach(function(el , i , arr){

    console.log( index , el , arr)

})

.map(function( el , i , a){ })------> devuelve un array nuevo.

.filter( function(el{
    return el === 3
}))-----> boolean array nuevo con elemento filtrado o excluidos.

.every( function(el){} ) ----> dice si todos los elementos cumplen la funcion

.some(function(el){}) ----> si almenos alguno cumple la funcion propuesta

.reduce( function ( acc , el ){ 
    
    return el + acc;
    
} )


