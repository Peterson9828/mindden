<script setup lang="ts">
import type { Pokemon } from "~/types";

useHead({
  title: "Pokemón Detail",
  meta: [
    {
      name: "description",
      content: "Detalle de un pokemón en la Pokédex",
    },
  ],
});

const { params } = useRoute();

const store = usePokemonStore();
const { getPokemon } = store;
const pokemon = ref<Pokemon>({} as Pokemon);
pokemon.value = await getPokemon(params.id as string);
</script>

<template>
  <section class="m-4">
    <pokemon-detail :pokemon="pokemon" />
  </section>
</template>
