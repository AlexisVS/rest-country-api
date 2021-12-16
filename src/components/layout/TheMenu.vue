<template>
  <div class="w-full text-black py-4 flex justify-between items-center px-8">
    <a href="/" class="text-black dark:text-white text-3xl font-bold">Where in the world ?</a>
    <div @click="toggleDarkMode" class="flex items-center space-x-5 cursor-pointer">
      <div class="w-5 h-5 rounded-full bg-black dark:bg-white"></div>
      <span class="dark:text-white">Dark Mode</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode () {
      document.querySelector('html').classList.toggle('dark')
    }
  }
}
</script>

<style>
</style>