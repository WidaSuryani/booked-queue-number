<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const isLoggedIn = ref(false);
const router = useRouter();

function handleLoginSuccess() {
  isLoggedIn.value = true;
  localStorage.setItem("isLoggedIn", "true");
  router.push({ name: "FormBooking" }); // Redirect to the booking page using named route
}

onMounted(() => {
  const savedLoginState = localStorage.getItem("isLoggedIn");
  if (savedLoginState === "true") {
    isLoggedIn.value = true;
  }
});
</script>

<template>
  <router-view />
</template>

<style scoped>
/* Your styles here */
</style>
