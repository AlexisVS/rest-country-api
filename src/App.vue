<template>
  <div id="app" class="dark:text-white text-black dark:bg-gray-900 min-h-screen w-full">
    <TheMenu/>
    <div class="dark:bg-gray-800">
    <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import TheMenu from './components/layout/TheMenu.vue'
export default {
components: {
  TheMenu,
}
}
</script>

<style lang="scss">

</style>
