<script setup lang="ts">
import { MusicalNoteIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";
import LargeMenu from "../components/atoms/buttons/large-menu.vue";

</script>
<template>
  <main class="h-[500px]">
    <section class="h-full flex justify-center items-center">
      <div class="flex flex-wrap">
        <LargeMenu class="mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
          <PencilSquareIcon class="h-9 w-9 mb-2"></PencilSquareIcon>
          <p class="">Montar Repertório</p>
        </LargeMenu>
        <LargeMenu class="w-full md:w-auto" @click="$router.push({ name: 'musics' })">
          <MusicalNoteIcon class="h-9 w-9 mb-2"></MusicalNoteIcon>
          <p class="">Todas as Músicas</p>
        </LargeMenu>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
