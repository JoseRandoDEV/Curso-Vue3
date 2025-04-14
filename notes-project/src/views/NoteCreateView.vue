<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1">My note</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter note"
        v-model="note"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="sendNote">
      Submit
    </button>
    <p style="color: red">{{ feedback }}</p>
  </form>
  <RouterLink :to="{ name: 'login' }">Login</RouterLink>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useAuth from "@/store/auth";
import router from "@/router";

const feedback = ref("");
const store = useAuth();
const note = ref("");

const sendNote = async () => {
  const response = await store.createNote(note.value);
  if (response == false) {
    feedback.value = "Error grabando la nota..";
  } else {
    router.push({ name: 'list' });
  }
};
</script>
