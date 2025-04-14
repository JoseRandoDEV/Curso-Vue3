<template>
  <h1>Listado de Usuarios Completos</h1>
  <input
    type="text"
    placeholder="Filtrar usuario"
    v-model="search"
    @keyup="handleSearch"
  />
  <div>
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
  </div>
  <component :is="layout" :content="filteredUser" />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";

const ListLayout = defineAsyncComponent(() => import("@/layouts/ListLayout.vue"));
const TableLayout = defineAsyncComponent(() => import("@/layouts/TableLayout.vue"));
const CardLayout = defineAsyncComponent(() => import("@/layouts/CardLayout.vue"));

const layout = ref(ListLayout);

const handleLayout = (comp: any) => (layout.value = comp);

const search = ref("");
const handleSearch = () => {
  filteredUser.value = users.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
};

const users = ref([
  {
    name: "Luis",
    age: 50,
    position: "Frontend",
  },
  {
    name: "Juanjo",
    age: 90,
    position: "Fullstack",
  },
  {
    name: "Lucia",
    age: 25,
    position: "Frontend",
  },
  {
    name: "Ana",
    age: 41,
    position: "Backend",
  },
  {
    name: "Roberto",
    age: 55,
    position: "Backend",
  },
]);

const filteredUser = ref([]);
filteredUser.value = users.value;
</script>
