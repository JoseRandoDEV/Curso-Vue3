<template>
    <h1>Porcentaje Completado: {{ percentage }}%</h1>
</template>

<script lang="ts" setup>
import { onMounted,ref,defineExpose} from 'vue';
const percentage = ref(0);

onMounted(() => {
    //trae el valor predeterminado al servicio
    percentage.value = 24;
});
const recalculate = () => {
    percentage.value = 42;
};

defineExpose({recalculate});

</script>