<script setup lang="ts">
import NavbarMenu from "@/components/navbar-menu.vue";
</script>

<template>
  <NavbarMenu />
  <div class="bg-[#f6f6f6]">
    <div class="max-w-screen-xl items-center justify-between mx-auto">
      <img src="../assets/Vector.svg" alt="vector" class="px-20 py-10" />
    </div>
    <div class="grid max-w-screen-xl px-4 py-2 mx-auto lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x text-[#f4a2b4]"
        >
          Let's book your Queue here, before trade your Ticket to a Wristband!
        </h1>
        <p class="max-w-2xl text-sm mb-6 font-light text-[#9bc6f3]">
          Please Register to be a part of our Event
        </p>
        <button
          href="#"
          type="button"
          class="inline-flex items-center justify-center px-5 py-3 text-base border font-medium text-center text-gray-100 rounded-lg border-[#fea5b8] bg-[#afcdec] hover:bg-[#8cb8e5]"
        >
          Register Now
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <div>
          <img
            src="../assets/Vector.svg"
            width="80"
            height="80"
            alt="vector"
            class="px-2"
          />
          <img
            src="../assets/hero.webp"
            alt="mockup"
            width="500"
            height="500"
          />
          <img
            src="../assets/Vector.svg"
            width="40"
            height="40"
            alt="vector"
            class="float-end py-4"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mt-4">
        <img
          src="../assets/logos/gmail.webp"
          alt="discord"
          class="w-15 rounded-full px-2"
        />
        <img
          src="../assets/logos/google.webp"
          alt="discord"
          class="w-15 rounded-full px-2"
        />
        <img
          src="../assets/logos/facebook.webp"
          alt="discord"
          class="w-15 rounded-full px-2"
        />
        <img
          src="../assets/logos/weverse.webp"
          alt="discord"
          class="w-15 rounded-full px-2"
        />
      </div>
    </div>
  </div>
</template>
