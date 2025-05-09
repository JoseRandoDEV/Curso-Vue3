<template>
  <h3>{{ obj.count }}</h3>
  <button @click="()=> obj.count++">Increment</button>
  
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const obj = reactive({
  count: 0,
  
});

</script>

<style>

</style>
