<template>
  <button @click="show = !show">Mostrar / Ocultar</button>
  <Transition>
    <h1 v-if="show">Hello world animated</h1>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const show = ref(false);
</script>

<style>
.v-enter-active {
  transition: opacity 0.8s ease;
}
.v-leave-active {
  transition: opacity 0.8s ease;
}
.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>
