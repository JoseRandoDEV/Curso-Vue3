<template>
  <h1>Notas</h1>
  <input type="text" v-model="note"/>
</template>

<script lang="ts" setup>
import { watch, ref} from 'vue';
    const note = ref('')
    watch(note, () => alert("Valor Modificado: " + note.value)
        )
</script>

<style>

</style>