<script setup lang="ts">
import type { PropType } from "vue";
import Title from "../atoms/music/properties/title.vue";

type MultiSelectProps = {
  id: string;
  name: string;
  color: string;
};

type MultiSelect = NotionBaseObject & {
  id: string;
  type: "multi_select";
  multi_select: MultiSelectProps[];
};

type NotionBaseObject = {
  id: string;
  type: any;
};

defineProps({
  property: {
    type: Object as PropType<MultiSelect>,
    required: true,
  },
});
</script>

<template>
  <div>
    <ul v-if="property.multi_select" class="list-none">
      <li v-for="prop in property.multi_select">
        <span class="bagde-default">{{ prop.name }}</span>
      </li>
    </ul>
    <ul v-if="property.id === 'title'" class="list-none">
      <Title :property="property" />
    </ul>
  </div>
</template>

<style scoped>
.bagde-default {
  @apply bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300;
  user-select: none;
}
</style>
