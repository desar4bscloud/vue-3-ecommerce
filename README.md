# Vue 3 Ecommerce

Tienda online.

## Entities

### Product
- id
- name
- description
- price
- image

### Category
- name
- description

### Cart
- products: `[{productId:1,quantity:3},{productId:7,quantity:5}]`

## Components

### ProductCard

## Pages
- / -> Todos los productos
- /category/5 -> Productos sólo de la categoría 5
- /cart -> Ver el carrito de compras









## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```




## Error en líneas de código por misunderstanding del IDE con la versión de TypeScript

- Oprimimos 'F1' y escribimos TypeScript. Nos saldra una opción para seleccionar la versión del mismo por parte de la extensión volar.
- Seleccionamos la versión que dice 'Workspace' para que el IDE use es la versión del código con el que estamos trabajando y no la versión que infiere.
- Activar el Take Over Mode de la extensión Volar:
    - Debemos inicialmente desactivar un servicio que viene activo por defecto en el VSCode. 
    - Oprimimos 'Control + Shift + P', escribimos 'built' y seleccionamos la opción que dice 'Show Built-in Extensions'.
    - Se abre la ventana de las extensiones y completamos lo que ya está escrito con el texto 'TypeScript'.
    - Se podrán visualizar 2 extensiones que son provistas por el VSCode.
    - Desactivamos la llamada TypeScript and JavaScript Language Features (Click derecho y Disable (Workspace)).


## Desactivar opción de autocompletado de la extensión Volar:
- Copiamos el nombre de la opción de la extensión.
- Nos dirigimos a las opciones de la extensión Volar y click en 'Extension Settings'.
- Y pegamos en la barra de búsqueda la opción: 'eventArgumentsInInlineHandlers'
- Por último quitamos el check de la opción que nos sale en la búsqueda.

