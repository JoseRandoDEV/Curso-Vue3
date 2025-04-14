<template>
  <div>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from "vue";

let message: Ref<string> = ref("");
const reverse = computed(() => message.value.split("").reverse().join(""));
</script>

<style scoped></style>
