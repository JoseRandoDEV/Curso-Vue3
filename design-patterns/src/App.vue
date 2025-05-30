<template>
  <p>I an the father</p>
  <button @click="UpdateMsg">Update Message</button>
  <FirstChild />
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import FirstChild from "./components/FirstChild.vue";
const msg = ref("Hello from the father component");

const UpdateMsg = () => {
  msg.value = "Message updated";
};

provide("msg", msg);
</script>

<style scoped></style>
