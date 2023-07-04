<script setup lang="ts">
import { NotionAPI } from "@/api/notion";
import Properties from "@/components/molecules/properties.vue";
import { NotionStore } from "@/stores/notion";
import { onBeforeMount, ref } from "vue";

const notion = new NotionAPI();
const result = ref<any>(null);
const musics = ref<any[]>([]);
const properties = ref<{ [key: string]: any }>({});

onBeforeMount(async () => {
  const database = await notion.getDatabase();
  properties.value = Object.fromEntries<any>(
    Object.entries(database.properties).sort((a, b) => {
      // Verificar se a chave é "Name" (id=title)
      if (a[0] === "Name") {
        return -1; // Mantém "Name" no início
      } else if (b[0] === "Name") {
        return 1; // Move "Name" para o início
      }
      return 0; // Mantém a ordem original para outras propriedades
    })
  );

  result.value = await notion.getMusics();
  musics.value = result.value?.results as any[];
});
</script>

<template>
  <div class="flex justify-center mt-12">
    <table class="table-row min-w-[200px] overflow-x-auto">
      <thead>
        <tr>
          <th class="px-2 text-left" v-for="property in properties">
            {{ property.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="music in musics">
          <td
            class="min-w-[260px] md:min-w-full max-w-xs p-2 border-b-[1px] border-[#ffffff30]"
            v-for="property in properties"
          >
            <!-- {{ music.properties[property.name] }} -->
            <Properties :property="music.properties[property.name]" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div v-for="music in musics">
      {{ music }}
    </div> -->
  </div>
</template>

<style scoped></style>
