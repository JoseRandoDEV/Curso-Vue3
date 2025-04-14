<template>
  <form>
    <input type="text" v-model="inputText" />
    <input type="checkbox" v-model="agree" /> Acepto los terminos y condiciones
    <select v-model="country">
      <option value="Argentina">Argentina</option>
      <option value="Spain">Spain</option>
      <option value="Brasil">Brasil</option>
    </select>
  </form>
  <h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let inputText = ref("");
let agree = ref(true);
let country = ref("Argentina");
// option api ai con definecomponent
</script>

<style scoped></style>
