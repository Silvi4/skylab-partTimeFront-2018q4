Este es el archivo de flexbox y de grid:

Vamos a tener el cuenta el link que nos paso Cristiam en los ejercicios https://github.com/SkylabCoders/skylab-partTimeFront-2018q4/tree/develop/stuff/week1/homework

Vemos los @media, que será lo que pueda modificar las condiciones del flexbox en función de las condiciones del dispositivo que lo muestra. En el ejemplo de flexbox vemos como condiciona las características del posicionamiento en función del tamaño de la pantalla, dependiendo del tamaño se reasignará la posión de los elementos. 

Si por defecto estuviese para móviles, empezariamos por pantallas más pequeñas, David pasa sus breakpoints en el trabajo:
'''$breakpoints: (
  xxs: 0,
  xs: 480px,
  s: 600px,
  m: 840px,
  l: 960px,
  xl: 1280px,
  xxl: 1440px
) !default;'''

por ejemplo podemos usar un @media print, que lo hará es modificar el layout cuando vamos a imprimir esta web.
*Vamos a hacer el cv que hemos hecho reposicionado con flex.

REVISAMOS LA ESTRUCTURA ORTODOXA DE HTML:
    <main>
        <header> incluye picture y demás
        <section>
            <article>
            <article>
    Si en general lo ponemos como columnas, luego será más fácil ponerlo en dispositivos pequeños para colocarlo en filas (trasponer).
    id es para Javascript y class es para CSS, usarlo con cabeza!!


    Para una buena practica el html y el body debería tener el height y el width deberian de el 100% porque asi tienes todo el espacio para distribuir los elementos, de hecho eso es todo el documento.

* Volvemos a recordar que hay que pasarlo a git, git branch, git status, 

Comentamos como centrar cosas en grid cuando tenemos un display block dentro, podemos moverlo con padding, pero siempre podemos poner otro display. Margin y padding son en relación al padre, pero el transform: translate es relativo al propio objeto.
En el box-sizing: border-box, respetera el tamaño real de la caja, pero podremos ponerle padding y lo cogerá del objeto y no hacia fuera.

propiedades del before y after:
div:after{ 
    content:"alternative";
    position: absolute;
    heigth: *no llevará altura para hacer la flecha;
    border-left: 150px solid red;
    border-bottom:75px solid white;
    border-top:75px solid white;
    box-sizing: border-box;
    
}

Hablamos de sombras:
div {
    box-shadow: 0 0 (indicamos centro) 10px 10px (indicamos el tamaño de la sombra) color;
    border-radius: redondeamos las esquinas;
}

Hablamos de efectos: @keyframes
En el ejemplo le decimos que tiene dos estados 0% y 100%, y definimos los dos estados, y luego solo definimos la animación para darle el tiempo que tardará en pasar de uno a otro.

Transiciones de color: que se incluye en el hover, Cristiam recomienda que las transiciones se hagan en 0.3s

Transiciones de background: funciona con radiales.

Efecto espejo: roll-over

Efecto mascara: la imagen es una letra, que tiene una imagen dentro, y que mask-box-image hace que solo se vea la imagen superpuesta y en este ejemplo tenemos opacity y con el hover se termina de ver la letra con la imagen.

Hoy 17/11/2018 veremos el sass
