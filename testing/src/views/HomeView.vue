<template>
  <h1>Counter APP</h1>
  <h3 id="counter-info"> {{ counter }}</h3>
  <button @click="counter++">Increment</button>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const counter = ref(0)
</script>