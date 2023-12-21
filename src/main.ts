import { createApp } from 'vue'

//import Contador from './examples/ContadorOptions.vue'
import Contador from './examples/ContadorComposition.vue'

const app = createApp(Contador)

app.mount('#app')