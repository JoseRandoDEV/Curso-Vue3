<template>
<img v-lazy="{
   src: lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: lazyOptions.delay}" lazy="loading" />
</template>

><script lang="ts" setup>
import { ref, VNode } from 'vue'
const lazyOptions = ref({
   src: 'https://picsum.photos/1280/800',
   delay: 500,
   lifecycle: {
      loading: (el:VNode) => {
         console.log('Cargando Imagen', el)
      },

      error: (el:VNode) => {
         console.log('Error en la carga', el)
      },
      loaded: (el:VNode) => {
         console.log('Imagen Cargada..', el)
      },
   },
})
</script>

<style>
   img[lazy=loading] {
      background-color: blue;
      width: 500px;
   }
</style>