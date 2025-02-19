<script setup lang="ts">
import LoginPage from "./components/LoginPage.vue";
import FormBooking from "./components/FormBooking.vue";
import { ref } from "vue";

const isLoggedIn = ref(false);

function handleLoginSuccess() {
  isLoggedIn.value = true;
}
</script>

<template>
  <LoginPage v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
  <FormBooking v-else />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
