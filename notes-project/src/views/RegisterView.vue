<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputName">User name</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputName"
        aria-describedby="emailHelp"
        placeholder="Enter name"
        v-model="name"
      />
    </div>
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
        placeholder="Password"
        v-model="password"
      />
    </div>

    <button type="submit" class="btn btn-primary" @click.prevent="createUser">
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

const store = useAuth();
const name = ref("");
const email = ref("");
const password = ref("");
const feedback = ref("");

const createUser = async () => {
  feedback.value = "Sending.....";
  const response = await store.register(name.value, email.value, password.value);
  if (response == false) {
    feedback.value = "Registration error.";
  } else {
    router.push({ name: 'list' });
  }
};
</script>
