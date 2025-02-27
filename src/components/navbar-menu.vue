<!-- <script setup lang="ts">
import { useRouter } from "vue-router";
</script> -->

<template>
  <nav class="bg-[#dce6f0]">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <img src="../assets/logo.webp" alt="logo" class="w-20 p-4" />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-y-reverse md:mt-0 md:border-0 float-end"
        >
          <li class="py-2">
            <a
              href="#"
              class="block py-3 px-4 text-gray-400 rounded-sm hover:outline hover:bg-gradient-to-r from-[#f7b9c6] to-[#9bc6f3] md:border-0 md:p-0"
              aria-current="page"
              >Home</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="block py-3 px-4 text-gray-400 rounded-sm hoveroutline hover:bg-gradient-to-r from-[#f7b9c6] to-[#9bc6f3] md:border-0 md:p-0"
              >About</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full md:block md:w-auto">
        <button
          type="button"
          class="text-gray-200 bg-gradient-to-r from-[#f7b9c6] to-[#9bc6f3] font-medium rounded-lg text-sm px-5 py-3 mx-2 mb-2 focus:outline-2 border-2"
          @click="$router.push({ path: '/' })"
        >
          Login
        </button>
        <button
          type="button"
          class="text-gray-200 bg-gradient-to-r from-[#f7b9c6] to-[#9bc6f3] font-medium rounded-lg text-sm px-5 py-3 mx-2 mb-2 focus:outline-2 border-2"
        >
          Register
        </button>
      </div>
    </div>
  </nav>
</template>
