<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Di Hola</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  name: "PostDetail",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      requiered: false,
      default: "Este post no tiene contenido",
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("sayHi", message.value);
    };
    let message: Ref<string> = ref("");
    return { props, message, handleClick };
  },
  emits: ["sayHi"],
});
</script>

<style scoped>
.post {
  width: 300px;
  border-radius: 10px;
  height: 200px;
  background-color: antiquewhite;
  margin: 10px;
  padding: 10px;
}
</style>
