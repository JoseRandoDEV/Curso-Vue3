<template>
  <h1>Listado de Posts <button class="btn btn-primary">Estilado con Boostrap</button></h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService";
import { defineComponent, onMounted } from "vue";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
  await service.fetchAll();
});
</script>

<style scoped lang="scss">
.post-list {
  width: 95vw;
  height: 75px;
  padding: 20px;
  list-style-type: none;

  li {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;

    a {
      text-decoration: none;
      color: $textColor; //variable declarada en la carpeta scss/_variables.scss
      cursor: pointer; // ponemos la manito para seleccionar
    }
    a:hover {
      color: $primaryColor;
    }
  }
}
</style>
