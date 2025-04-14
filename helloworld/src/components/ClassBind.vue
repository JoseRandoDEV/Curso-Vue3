<template>
  <p v-bind:style="{ backgroundColor: '#ccc', color: c }">
    El mensaje se ha enviado satisfactoriamente
  </p>
  <button @click="handleClick()">Cambiar Color</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let c = ref("#fff");
const handleClick = () => {
  c.value = "#ff0000";
};
// v-bind:class="{ danger: hasError }"--> en template
//import { defineComponent, DefineComponent } from "vue";
//export default defineComponent({
//  name: "ClassBind",
//  setup() {
//let hasError = true;
//    return { hasError };
//  },
//});
</script>

<style></style>
