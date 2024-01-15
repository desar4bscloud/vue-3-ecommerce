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
- /category/5 -> Productos s贸lo de la categor铆a 5
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




## Error en l铆neas de c贸digo por misunderstanding del IDE con la versi贸n de TypeScript

- Oprimimos 'F1' y escribimos TypeScript. Nos saldra una opci贸n para seleccionar la versi贸n del mismo por parte de la extensi贸n volar.
- Seleccionamos la versi贸n que dice 'Workspace' para que el IDE use es la versi贸n del c贸digo con el que estamos trabajando y no la versi贸n que infiere.
- Activar el Take Over Mode de la extensi贸n Volar:
    - Debemos inicialmente desactivar un servicio que viene activo por defecto en el VSCode. 
    - Oprimimos 'Control + Shift + P', escribimos 'built' y seleccionamos la opci贸n que dice 'Show Built-in Extensions'.
    - Se abre la ventana de las extensiones y completamos lo que ya est谩 escrito con el texto 'TypeScript'.
    - Se podr谩n visualizar 2 extensiones que son provistas por el VSCode.
    - Desactivamos la llamada TypeScript and JavaScript Language Features (Click derecho y Disable (Workspace)).


## Desactivar opci贸n de autocompletado de la extensi贸n Volar:
- Copiamos el nombre de la opci贸n de la extensi贸n.
- Nos dirigimos a las opciones de la extensi贸n Volar y click en 'Extension Settings'.
- Y pegamos en la barra de b煤squeda la opci贸n: 'eventArgumentsInInlineHandlers'
- Por 煤ltimo quitamos el check de la opci贸n que nos sale en la b煤squeda.



## Instalar Vuetify en un proyecto ya existente:

- Inicialmente ejecutamos el comando npm install vuetify@^"VERSION"
- A馻dimos estas l韓eas al documento que monta la app de Vue (incluyendo vuetify de esta manera, lo estamos importando de manera global, por lo tanto no hay necesidad de hacerlo local en los documentos donde se va a utilizar):

```typescript
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)
app.mount('#app')
```
- Procedemos a utilizar los componentes que tenemos a disposici髇.



## Habilitar Pinia en un proyecto:

- Utilizamos las siguientes l韓eas de c骴igo para incluir Pinia en nuestro archivo que monta la app de vue:
```typescript
// Pinia
import { createPinia } from 'pinia'

app.use(createPinia())
```

## Ejemplo de Computed Properties con Nullish Coalescing Operator:

- Inicialmente, cuando hablamos de Computed Properties, hacemos referencia a c醠culos o l骻ica con diferentes valores del componente. Esto se hace con el fin de evitar que generemos l骻ica en el template. Ejemplo:

```typescript
  <script>
    export default {
      data() {
        return {
          author: {
            name: 'John Doe',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          }
        }
      },
      computed: {
        publishedBooksMessage() {
          return this.author.books.length > 0 ? 'Yes' : 'No'
        },
        firstBookPublished(){
          return this.author.books[0] ?? 'No ha publicado ning鷑 libro'
        }

      }
    }
  </script>

  <template>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <hr>
    <p>Primer libro publicado del autor</p>
    <p>{{ firstBookPublished }}</p>
  </template>
```