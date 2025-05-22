<template>
  <h1>{{ counter }}</h1>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
const increment = () => {
  counter.value++;
};
</script>

<style></style>
