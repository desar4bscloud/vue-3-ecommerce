import { createApp } from 'vue'

//import Contador from './examples/ContadorOptions.vue'
// import Contador from './examples/ContadorOptions.vue'
import ProductList from './examples/ProductList.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

// const app = createApp(Contador)
const app = createApp(ProductList)
app.use(vuetify)
app.mount('#app')