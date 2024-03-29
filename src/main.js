import 'bootstrap/dist/css/bootstrap.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/varmix.scss'


import store from './store'




const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')




import 'bootstrap/dist/js/bootstrap.js'

