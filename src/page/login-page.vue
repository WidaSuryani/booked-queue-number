<script setup lang="ts">
import { useRouter } from "vue-router";

const emit = defineEmits(["login-success"]);
const router = useRouter();

const login = () => {
  // Your login logic here
  const userId = "123"; // Example user ID
  emit("login-success");
  router.push({ name: "FormBooking", params: { userId } }); // Pass userId as route param
};
</script>

<template>
  <div class="bg-linear-to-r to-[#9bc6f3] from-[#f7b9c6]">
    <div class="bg-[#3b3b3b62] flex justify-center items-center h-screen">
      <div class="w-96">
        <img src="../assets/logo.webp" alt="logo" class="w-32 mx-auto pb-4" />
        <h1 class="text-3xl font-bold mb-6 text-white text-center">Login</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-200"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm sm:text-sm rounded-md"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-200"
              >Password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
          <div class="mb-4">
            <button
              type="submit"
              @click="login"
              class="w-full bg-linear-to-r to-[#9bc6f3] from-[#f7b9c6] text-white font-semibold p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="bg-linear-to-r to-[#9bc6f3] from-[#f7b9c6]">
    <div class="bg-[#3b3b3b62] flex justify-center items-center h-screen">
      <div class="w-96">
        <img src="../assets/logo.webp" alt="logo" class="w-32 mx-auto pb-4" />
        <h1 class="text-3xl font-bold mb-6 text-white text-center">Login</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-200"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm sm:text-sm rounded-md"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-200"
              >Password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
          <div class="mb-4">
            <button
              type="submit"
              @click="login"
              class="w-full bg-linear-to-r to-[#9bc6f3] from-[#f7b9c6] text-white font-semibold p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template> -->
