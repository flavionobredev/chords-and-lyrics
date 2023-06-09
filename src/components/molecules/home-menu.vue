<script setup lang="ts">
import LargeMenu from "../atoms/buttons/large-menu.vue";
import { PencilSquareIcon, MusicalNoteIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex">
    <LargeMenu class="mr-4">
      <PencilSquareIcon class="h-9 w-9 mb-2"></PencilSquareIcon>
      <p class="">Montar Repertório</p>
    </LargeMenu>
    <LargeMenu>
      <MusicalNoteIcon class="h-9 w-9 mb-2"></MusicalNoteIcon>
      <p class="">Todas as Músicas</p>
    </LargeMenu>
  </div>
</template>

<style scoped></style>
