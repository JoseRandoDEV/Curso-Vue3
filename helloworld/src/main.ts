import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size',{
    beforeMount: (el,binding)=>{
        el.style.fontSize = "70px"
    }  
})

app.directive('custom-size',{
    beforeMount: (el,binding)=>{
        let size = 18
        switch(binding.arg){
            case 'sm': size = 10
            break
            case 'md': size = 18
            break
            case 'lg': size = 25
            break
            case 'xl': size = 40
            break
            case 'xxl': size = 72
            break
        }
        el.style.fontSize = size + "px"
    }
})

app.directive('custom-font',{
    beforeMount: (el,binding)=>{
        let size = 18
        if(binding.modifiers.sm){
            size = 10
        }else if(binding.modifiers.lg){
            size = 25
        }else if(binding.modifiers.xxl){
            size = 72
        }

        el.style.fontSize = size + 'px'

        if(binding.modifiers.red){
            el.style.color = '#ff0000'
        }else if(binding.modifiers.green){
            el.style.color = '#00ff00'
        }else if(binding.modifiers.blue){
            el.style.color = '#0000ff'
        }
    }
})
app.mount('#app')
