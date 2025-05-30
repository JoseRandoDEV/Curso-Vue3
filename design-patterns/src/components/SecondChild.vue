<template>
  <h1>Child Component</h1>
  <p>{{ msg }}</p>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const msg = inject("msg");
</script>

<style scoped></style>
