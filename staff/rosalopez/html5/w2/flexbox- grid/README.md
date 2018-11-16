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