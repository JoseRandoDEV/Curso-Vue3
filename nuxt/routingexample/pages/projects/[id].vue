<template>
  <NuxtLayout name="projects">
    <h1>Project Number {{ projectId }}</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const projectId = ref();
projectId.value = route.params.id;
</script>
