<template>
    <div class="card">
        <h3>{{ props.content.name }}</h3>
        <p>Edad: {{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps(['content'])
</script>

<style scoped>
.card{
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 10px;
}
</style>