<script setup lang="ts">
const emit = defineEmits(["handlePageChange"]);
const currentPage = ref(1);

const handlePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("handlePageChange", currentPage.value);
  }
};

const handleNext = () => {
  currentPage.value++;
  emit("handlePageChange", currentPage.value);
};
</script>

<template>
  <article class="flex items-center justify-center mt-5">
    <button
      class="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
      :disabled="currentPage === 1"
      @click="handlePrevious"
    >
      Anterior
    </button>
    <span class="mx-4">Página {{ currentPage }}</span>
    <button
      class="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300"
      @click="handleNext"
    >
      Siguiente
    </button>
  </article>
</template>
