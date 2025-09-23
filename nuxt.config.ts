// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Mindden Pokemón",
      htmlAttrs: {
        lang: "es",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],
  pinia: {
    storesDirs: ["./stores/**", "app/stores/**"],
  },
});
