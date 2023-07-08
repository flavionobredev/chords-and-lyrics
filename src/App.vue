<script setup lang="ts">
import Logo from "./components/atoms/logo.vue";
</script>

<template>
  <div class="content scroll-effect">
    <header class="flex justify-center py-6">
      <Logo></Logo>
    </header>
    <RouterView />
    <footer class="pb-12"></footer>
    <!-- <footer>
      <hr class="w-1/2 mx-auto" />
      <p class="text-center text-gray-500 text-xs py-5">
        &copy;{{ new Date().getFullYear() }} musicash
      </p>
    </footer> -->
  </div>
</template>

<style scoped>
.content {
  @apply px-6;
  min-height: 100svh;
}
</style>
