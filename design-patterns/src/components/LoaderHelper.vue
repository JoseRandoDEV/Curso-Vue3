<template>
  <LoaderHelper :url="myApp" :component-to-show="ExampleComponent" />
</template>

<script lang="ts" setup>
import LoaderHelper from "./components/LoaderHelper.vue";
import ExampleComponent from "./components/ExampleComponent.vue";
const myApp = "https://google.com";
</script>

<style scoped></style>
