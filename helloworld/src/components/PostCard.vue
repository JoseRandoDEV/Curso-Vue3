<template>
<div class="post-card">
    <h3>Titulo</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, illum. Maxime eveniet id est labore beatae tempora dicta soluta, non obcaecati aliquid dolorum. Temporibus accusamus non quod tenetur error sunt.</p>
    <PostButton />
</div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>