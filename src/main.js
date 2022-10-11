import 'bootstrap/dist/css/bootstrap.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/varmix.scss'

import store from './store'

import anime from '../node_modules/animejs/lib/anime.es'







createApp(App).use(router).use(store).use(anime).mount('#app')




import 'bootstrap/dist/js/bootstrap.js'

