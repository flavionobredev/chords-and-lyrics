<script setup lang="ts">
import type { PropType } from "vue";

type TitleProps = {
  type: "text";
  text: {
    content: string;
  };
  plain_text: string;
};

export type Title = NotionBaseObject & {
  id: string;
  type: "title";
  title: TitleProps[];
};

type NotionBaseObject = {
  id: string;
  type: any;
};

defineProps({
  property: {
    type: Object as PropType<Title>,
    required: true,
  },
});
</script>

<template>
  <div>
    <ul v-if="property.id === 'title'" class="list-none">
      <li v-for="prop in property.title">
        <span class="">{{ prop.plain_text }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bagde-yellow {
  @apply bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300;
}
</style>
