import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-3-socket.io'

const app = createApp(App);
app.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:1234/',
}))

app.mount('#app')
