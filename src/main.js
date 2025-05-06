import './assets/main.css'
// import Vue from 'vue'
// import Argon from '@/plugins/argon-kit'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// Vue.use(Argon)
app.use(router)

app.mount('#app')
