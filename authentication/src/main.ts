import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from "firebase/app"
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
import Emitter from 'tiny-emitter'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'


Amplify.configure(awsExports)

const firebaseConfig = {
    apiKey: "AIzaSyDI_QZB-6Y8HUqzXkwfcOC5_q5hJWUfu0M",
    authDomain: "curso-vue-56e53.firebaseapp.com",
    projectId: "curso-vue-56e53",
    storageBucket: "curso-vue-56e53.appspot.com",
    messagingSenderId: "978107735281",
    appId: "1:978107735281:web:6897bffc1f20778dc21d50",
    measurementId: "G-TF4E82DTKX"
  };

initializeApp(firebaseConfig);

const app = createApp(App)

app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter.TinyEmitter()

app.use(router).use(VueCookies, {expires: '1d'}).use(VueSession).mount('#app')

// npm i vue-cookies PARA INSTALAR EL PAQUETE DE COOKIES
// $cookies.set('auth',1000, expires, path, domain, secure, sameSite)
// $cookies.get('auth')
// $cookies.remove('auth')
// $cookies.isKey('auth')
// $cookies.keys()

// npm i vue-session PARA INSTALAR EL PAQUETE DE SESSION
// $session.start()
// $session.set('auth',1000)
// $session.get('auth')
// $session.id()
// $session.remove()
// $session.destroy()