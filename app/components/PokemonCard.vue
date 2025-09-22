<script setup lang="ts">
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    class="rounded-xl p-4 flex flex-col items-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-300"
  >
    <h2 class="capitalize font-semibold">{{ pokemon.name }}</h2>
    <p>Pokédex nº: {{ getIdByUrl(pokemon.url) }}</p>
  </article>
</template>
