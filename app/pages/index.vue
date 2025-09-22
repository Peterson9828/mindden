<script setup lang="ts">
import { DEFAULT_LIMIT } from "~/constants";
import type { PokemonBasic } from "~/types";

const store = usePokemonStore();
const { getPokemons } = store;
const pokemons = ref<PokemonBasic[]>();
pokemons.value = await getPokemons();

const handleClick = async (pokemonUrl: string) => {
  const id = getIdByUrl(pokemonUrl);
  await navigateTo(`/pokemon/${id}`);
};

const handlePageChange = async (newPage: number) => {
  console.log("New Page:", newPage);

  const newOffset = calculateOffsetByPage(newPage, DEFAULT_LIMIT);
  pokemons.value = await getPokemons(newOffset);
};
</script>

<template>
  <main>
    <section
      class="m-4 grid grid-cols-2 md:grid-cols-4 place-content-center gap-4"
    >
      <pokemon-card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        @click="handleClick(pokemon.url)"
      />
    </section>
    <pagination-component @handle-page-change="handlePageChange" />
  </main>
</template>
