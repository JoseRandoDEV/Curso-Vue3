<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"> {{ locale }}</option>
    </select>
  </div>
  <h1>{{ $t("message.hello",{name: username, surname: surname}) }}</h1>
  <p>{{ $t("message.content") }}</p>
  <p>{{ $t("message.products", {count: 0}) }}</p>
  <p>{{ $t("message.comments", 5) }}</p>

</template>

<script lang="ts" setup>
import {ref} from 'vue'

const username = ref('Jose')
const surname = ref('Rando')

</script>

<style>

</style>

