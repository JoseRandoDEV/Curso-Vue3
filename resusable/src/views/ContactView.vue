<template>

<MainLayouts>
    <h1>Contact Seccion</h1>
</MainLayouts>

</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useMouse } from '@/composables/useMouse'

const { x,y } = useMouse()
</script>
