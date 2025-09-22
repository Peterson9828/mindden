import { DEFAULT_LIMIT } from "~/constants";
import type { Pokemon, PokemonBasic } from "~/types";

const URL = "https://pokeapi.co/api/v2/pokemon";
export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = ref([]);

  async function getPokemons(offset = 0): Promise<PokemonBasic[]> {
    try {
      const { data } = await useFetch(
        `${URL}?offset=${offset}&limit=${DEFAULT_LIMIT}`
      );

      return data.value.results;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return [];
    }
  }

  async function getPokemon(id: string): Promise<Pokemon> {
    try {
      const { data } = await useFetch(`${URL}/${id}`);

      return data.value;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return {} as Pokemon;
    }
  }

  return { pokemons, getPokemons, getPokemon };
});
