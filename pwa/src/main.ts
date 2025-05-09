import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import example from '../plugins/example'

const app = createApp(App)
app.use(example, { 
    message: "Hello from plugin!"
 })

app.mount('#app')
