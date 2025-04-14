<template>
  <h3>{{ counter }}</h3>
  <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  nombre: "CounterOption",
  components: {},
  data() {
    let counter = 0;
    return { counter };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
  },
});
</script>

<style></style>
