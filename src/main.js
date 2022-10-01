import 'bootstrap/dist/css/bootstrap.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/varmix.scss'

import store from './store'




createApp(App).use(router).use(store).mount('#app')




import 'bootstrap/dist/js/bootstrap.js'

