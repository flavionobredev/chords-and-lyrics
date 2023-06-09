<script setup lang="ts">
import { NotionAPI } from "@/api/notion";
import { NotionStore } from "@/stores/notion";
import { onBeforeMount, ref } from "vue";

const notion = new NotionAPI();
const result = ref<any>(null);
const musics = ref<any[]>([]);
const properties = ref<any[]>([]);

onBeforeMount(async () => {
  const id = "b099777bbe5d48d3a356f1716ebb00d4";
  const database = await notion.getDatabase(id);
  console.log(database);

  properties.value = Object.fromEntries(
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

  console.log(properties.value);

  result.value = await notion.getMusics(id);
  musics.value = result.value?.results as any[];
});
</script>

<template>
  <div>
    <h1>Musics</h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th v-for="property in properties">{{ property.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="music in musics">
          <td v-for="property in properties">
            {{ music.properties[property.name] }}
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
