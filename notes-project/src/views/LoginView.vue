<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Enter password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="loginUser">
      Submit
    </button>
    <p style="color: red">{{ feedback }}</p>
  </form>
  <RouterLink :to="{ name: 'register' }">Create account</RouterLink>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useAuth from "@/store/auth";
import router from "@/router";

const store = useAuth();
const email = ref("");
const password = ref("");
const feedback = ref("");

const loginUser = async () => {
  const response = await store.login(email.value, password.value);
  if (response == false) {
    feedback.value = "Login error..";
  } else {
    router.push({ name: 'list' });
  }
};
</script>
