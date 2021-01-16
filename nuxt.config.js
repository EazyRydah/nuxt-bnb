export default {
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: ["my-style"],
    },
    meta: [
      {
        chartset: "utf-8",
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  // xxx.client tells nuxt this is mode: 'client'
  plugins: ["~/plugins/maps.client", "~/plugins/dataApi"],
};
