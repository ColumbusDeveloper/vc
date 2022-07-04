import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import variables from './assets/variables.scss'

createApp(App).use(router).apply(variables).mount('#app')
