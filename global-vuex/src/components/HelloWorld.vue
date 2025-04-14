<template>
  <h3>Contador</h3>
  <h3>{{ counter }} * 2 = {{ times2 }}</h3>
  <button @click="increment">Incrementar</button>
</template>

<script lang="ts" setup> //Composition API con Setup
  import {computed} from 'vue'
  import { useStore } from 'vuex';

  const store = useStore()
  const counter = computed(() => store.state.counter)
  const times2 = computed(() => store.getters.times2)
  const increment = ()=> store.commit('setCounter', counter.value + 1)

</script>