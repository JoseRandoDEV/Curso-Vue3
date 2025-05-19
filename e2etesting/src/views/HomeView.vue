<template>
  <h1>Post list</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="{ name: 'detail', params: { id: post.id } }">{{
        post.title
      }}</RouterLink>
    </li>
  </ul>
  |
</template>

<script lang="ts" setup>
import PostService from "@/service/PostService";
import { onMounted } from "vue";

const postService = new PostService();
const posts = postService.getPosts();

onMounted(async () => {
  await postService.fetchAll();
});
</script>
