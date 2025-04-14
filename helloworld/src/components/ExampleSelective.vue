<template>
  <h1 v-if="age < 18">Eres Menor de EDAD</h1>
  <h1 v-else>Eres Mayor de EDAD</h1>
</template>

<script lang="ts" setup>
let age = 10;
</script>

<style scoped></style>
