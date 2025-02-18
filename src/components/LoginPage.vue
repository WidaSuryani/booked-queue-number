<template>
  <div style="background-image: url('../assets/background.webp')">
    <div class="flex justify-center items-center h-screen">
      <div class="w-96">
        <h1 class="text-3xl font-bold mb-6">Login</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
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
              class="w-full bg-indigo-500 text-white font-semibold p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
