<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note">
      <v-icon name="ai-conversation" scale="2" color="blue" animation="pulse" />
      {{ note }}
    </li>
  </TransitionGroup>
  <input type="text" v-model="note" />
  <button @click="handleNote">Save Note</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const notes = ref([]);
const note = ref("");
const handleNote = () => {
  notes.value.push(note.value);
  note.value = "";
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate(30px);
}
</style>
