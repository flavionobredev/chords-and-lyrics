<script setup lang="ts">
const props = defineProps<{
  hasMore: boolean;
  isLoading: boolean;
}>();

const emit = defineEmits(["page-change"]);

const changePage = () => {
  if (props.hasMore) {
    emit("page-change");
  }
};
</script>

<template>
  <nav class="flex items-center justify-center mt-4">
    <button
      @click="changePage"
      class="load-more--btn btn-primary"
      :class="{ 'btn-disabled': !hasMore }"
      :disabled="!hasMore"
    >
      <p>carregar mais músicas</p>
      <div v-if="isLoading" class="ml-2 spinner-sm"></div>
    </button>
  </nav>
</template>

<style scoped>
.load-more--btn {
  @apply flex items-center justify-center;
}
</style>
