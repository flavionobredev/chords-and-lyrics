<script setup lang="ts">
import { NotionAPI } from "@/api/notion";
import { MusicalNoteIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";
import { onBeforeMount } from "vue";
import LargeMenu from "../components/atoms/buttons/large-menu.vue";

const notion = new NotionAPI();

onBeforeMount(async () => {
  const result = await notion.getDatabase("b099777bbe5d48d3a356f1716ebb00d4");
});
</script>
<template>
  <main class="h-[500px]">
    <section class="h-full flex justify-center items-center">
      <div class="flex">
        <LargeMenu class="mr-4">
          <PencilSquareIcon class="h-9 w-9 mb-2"></PencilSquareIcon>
          <p class="">Montar Repertório</p>
        </LargeMenu>
        <LargeMenu @click="$router.push({ name: 'musics' })">
          <MusicalNoteIcon class="h-9 w-9 mb-2"></MusicalNoteIcon>
          <p class="">Todas as Músicas</p>
        </LargeMenu>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
