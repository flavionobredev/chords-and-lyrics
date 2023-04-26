<script setup>
import { Builder } from "../stores/builder";
</script>

<template>
  <div class="flex flex-col w-full">
    <h2 class="font-bold text-xl text-white mb-2">Cifra</h2>
    <textarea
      class="rounded-md p-4 outline-none"
      rows="20"
      v-model="Builder.data.chordPlainText"
    />
  </div>
</template>
