<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
  <router-link to="/" class="link">Volver Atras</router-link>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import PostService from "@/service/PostService";

const postService = new PostService();
const post = postService.getPost();

onMounted(async () => {
  const route = useRoute();
  const elm = route.params.id;
  await postService.fetchById(elm);
});
</script>
