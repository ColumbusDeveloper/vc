import 'bootstrap/dist/css/bootstrap.css'
import CompositionApi from '@vue/composition-api';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/varmix.scss'

import store from './store'









createApp(App).use(router).use(store).use(CompositionApi).mount('#app')




import 'bootstrap/dist/js/bootstrap.js'

