<script setup lang="ts"></script>

<template>
  <button class="button non-select">
    <span class="text-left">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply transition-all;
  @apply bg-gradient-to-tr from-cyan-500 to-blue-500 hover:scale-[1.01];
  @apply text-white font-semibold;
  @apply min-w-[250px] min-h-[140px] py-2 px-4 rounded-xl;
}
</style>
