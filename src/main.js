import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

import './assets/main.css'

const app = createApp(App)
app.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.mount('#app');
