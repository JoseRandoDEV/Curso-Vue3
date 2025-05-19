<template>
  <h1>Login View</h1>
  <input type="text" placeholder="Email" v-model="email" id="email" />
  <input type="password" placeholder="Password" v-model="password" id="password" /> <br />
  <button @click="login()">Login</button>
  <div v-if="!success">
    <p>Invalid email or password</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuth } from "@/store/useAuth";
import router from "@/router";

const store = useAuth();
const email = ref("");
const password = ref("");
const success = ref(true);

const login = () => {
  success.value = store.login(email.value, password.value);
  if (store.is_auth) {
    router.push("/");
  }
};
</script>
