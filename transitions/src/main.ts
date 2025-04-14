import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFileCodeFill, AiConversation } from "oh-vue-icons/icons";

addIcons(BiFileCodeFill, AiConversation);


//createApp(App).use(router).mount('#app')
const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app')

