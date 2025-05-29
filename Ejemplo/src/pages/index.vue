<template>
  <v-container>
    <v-row justify="start" align="end">
      <v-col class="red">Celda 1 - 1</v-col>
      <v-col class="red">Celda 1 - 2</v-col>
      <v-col class="red">Celda 1 - 3</v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="blue">Celda 2 - 1</v-col>
      <v-col class="blue">Celda 2 - 2</v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="brown">Celda 3 - 1</v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>

<style scoped>
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.brown {
  background-color: brown;
}
</style>
