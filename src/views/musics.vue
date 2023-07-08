<script setup lang="ts">
import { NotionAPI } from "@/api/notion";
import SimplePagination from "@/components/atoms/pagination/simple-pagination.vue";
import Properties from "@/components/molecules/properties.vue";
import { NotionStore } from "@/stores/notion";
import { nextTick, onBeforeMount, reactive, ref } from "vue";

const notion = new NotionAPI();
const result = reactive<any>({});
const isFirstLoading = ref<boolean>(true);
const isLoadMoreLoading = ref<boolean>(false);
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
  isFirstLoading.value = false;
});

const loadMore = async () => {
  isLoadMoreLoading.value = true;
  result.value = await notion.getMusics(result.value.next_cursor);
  musics.value = [...musics.value, ...result.value.results];
  isLoadMoreLoading.value = false;
};
</script>

<template>
  <div v-if="isFirstLoading">
    <p>Carregando...</p>
  </div>
  <div v-else class="flex flex-col justify-center mt-12">
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
    <!-- {{ result.has_more }} -->
    <SimplePagination
      @page-change="loadMore"
      :hasMore="result.value.has_more"
      :isLoading="isLoadMoreLoading"
    />
    <!-- <div v-for="music in musics">
      {{ music }}
    </div> -->
  </div>
</template>

<style scoped></style>
