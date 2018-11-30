# Silvia Carrasco


## 15/11/18 flex y medias

Cuando trabajamos con media query podemos usar las dos opciones de trabajo, mobile first o al revés. solo tenemos que tener en cuenta que al poner los tamaños de las pantallas tenemos que usar el max-with o el min-with. Podemos consultar el tamaño de los viewport en viewport sizes.

## 16/11/18

Cuando creas una web, es una buena practica poner al html y al body un width y heigth al 100%.

## 17/11/18

Siempre que tengamos un display blok podemos usar un margin: 0 auto para poder dentrar un elemento en la pagina. Si tenemos otro elemento dentro del elemento padre si son display bloc el elemento no lo podemos centrar con un margin 0 auto puesto que al ser hijo los dos elementos se ban a desplazar de arriba juntos.
Tenemos que poner el elemento hijo en posicion absoluta y moverlo con transform/translate (-50%,-50%).

border-sizing: border box, para que nuestro elemento no crezca y nos distorsione el width y el heigth.

div:after {
    conttent:"alternative" se usa para poner a traves de css el texto sin tocar el html, existe el after y el befor.

ejemplo de triangulo:
    div:after{
    content:"";
    position:absolute;
    left:100%
    border-left: 110px;
    border-botton: 50px solid white;
    border-top: 50px solid white;
    border-color; acqua;
    border-style:solid;
    box-sizing: border-box
    }

box-shadow: 0 0 10px 10px red;
los dos primeros sirven para poverlo en los ejes, ahora estaria centrado con el 0 0.

### efectos para texto

@kayframes para animaciones de texto
navegadores flotantes des del margin-left ***** muy top.
podemos hacer gradiantes los fondos
efecto espejo
mascaras en letras: mask-box-image: url y transition: opacity 1s linear;
