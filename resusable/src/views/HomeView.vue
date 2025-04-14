<template>
  <MainLayout>
    <template #main>
      <H5>My Content</h5>
    </template>
    
    <template v-slot:aux>
      <p>X position is: {{ x }}, Y position is: {{ y }}</p>
    </template>
    
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useMouse } from '@/composables/useMouse.ts';

const { x,y } = useMouse()
</script>
