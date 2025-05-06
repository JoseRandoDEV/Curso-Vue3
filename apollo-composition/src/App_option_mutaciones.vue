<template>
  <h1>Hola Mundo Cruel</h1>
  <button @click="addComment">Write Comments</button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import gql from 'graphql-tag';


export default defineComponent({
  methods: {
    addComment() {
      this.$apollo.mutate({
        mutation: gql`
          mutation($name: String!, $text: String!){
          createComment(name: $name, text: $text)
        }`
        ,
        variables: {
          
            name: "Vue2",
            text: "comments from vue"
          
        }
      })
    }
  } 
}) 
</script>

<style>

</style>