#APUNTES WEEK 2

### *HINT: www.caniuse.com*

## FELXBOX

**DOC: https://css-tricks.com/snippets/css/a-guide-to-flexbox/**


## MEDIA QUERIES

@media all and (max-width: XXXpx ) ----> a partir de XXXpx o más de ancho mostrará otro CSS

@media all and (min-width: XXXpx ) ----> a partir de XXXpx o menos de ancho mostrará otro CSS

@media print

*BREAKPOINTS*

```$breakpoints: (
  xxs: 0,
  xs: 480px,
  s: 600px,
  m: 840px,
  l: 960px,
  xl: 1280px,
  xxl: 1440px
) !default;```
(editado)


Los de bootsrap

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

**DOC: https://www.viewportsizes.com**