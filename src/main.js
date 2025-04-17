import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


import 'aos/dist/aos.css';
import './css/style.css'
import './css/additional-styles/scrollbar.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
