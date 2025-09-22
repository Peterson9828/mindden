<script setup lang="ts"></script>

<template>
  <section class="min-h-screen flex flex-col items-center">
    <div class="w-full max-w-[1280px] relative">
      <nuxt-link
        v-if="$route.path !== '/'"
        class="bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition duration-300 mt-5 absolute left-5"
        @click="$router.push('/')"
      >
        Volver
      </nuxt-link>
      <h1 class="text-3xl font-bold text-center my-5">Mindden Pokemón</h1>
    </div>
    <slot class="max-w-[1280px]" />
  </section>
</template>
