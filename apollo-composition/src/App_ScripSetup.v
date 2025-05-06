<template>
  <h1>Comments</h1>
  <div v-if="loading">
    <h3>Cargando......</h3>
  </div>
  <div v-else>
    <ul>
      <li v-for="(comment, index) in result.getCommentsFromUser" :key="index">
        <b>{{ comment.name }}</b>: {{ comment.text }}
      </li>
    </ul>
  </div>
  <div v-if="error">
    <h3 style="error">Error: {{ error.message }}</h3>
  </div>

  <button @click="refetch()">Refetch</button>
</template>

<script lang="ts" setup>
  
  import { useQuery } from '@vue/apollo-composable'; //use query carga normal, useLazyQuery carga perezosa
  import gql from 'graphql-tag';

      const {result, loading, error, refetch, onResult, onError} = useQuery(gql`
        query($name: String!) {
          getCommentsFromUser(name: $name) {
            name
            text
          }
        }
      `, ()=> ({
        name: "User 1"
      }), {
        fetchPolicy: 'cache-and-network',
        pollInterval: 5000, //5 seconds
      })
      onResult((queryResult) =>{
        console.log(queryResult.data)
        console.log(queryResult.loading)
        console.log(queryResult.networkStatus)
      })

      onError((queryError) =>{
        console.log(queryError.graphQLErrors)
      })

       
        

</script>

<style>
.error {
  color: red;
}
</style>
