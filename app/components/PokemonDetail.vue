<script setup lang="ts">
import type { Pokemon } from "~/types";
defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <article class="rounded-xl p-4">
    <h2 class="text-2xl font-semibold text-center">{{ pokemon.name }}</h2>
    <section class="grid grid-cols-1 sm:grid-cols-2">
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        loading="lazy"
        width="250"
        height="250"
      />
      <div class="flex flex-col justify-center">
        <p>Altura: {{ pokemon.height }}</p>
        <p>Peso: {{ pokemon.weight }}</p>
        <p>Tipo:</p>
        <ul class="flex gap-2">
          <li
            v-for="type in pokemon.types"
            :key="type.type.name"
            class="bg-gray-200 px-2 py-1 rounded-xl"
          >
            {{ type.type.name }}
          </li>
        </ul>
      </div>
    </section>

    <section class="mt-4 sm:mt-0">
      <h3 class="text-center font-semibold">Stats:</h3>
      <ul>
        <li
          v-for="stat in pokemon.stats"
          :key="stat.stat.name"
          class="flex justify-between"
        >
          {{ stat.stat.name }}: <span>{{ stat.base_stat }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>
