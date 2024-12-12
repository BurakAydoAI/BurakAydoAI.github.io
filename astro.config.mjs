import { defineConfig } from "astro/config";
// import content from "@astrojs/content";

// https://astro.build/config
export default defineConfig({
  // site: "https://BurakAydoAI.github.io",
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        external: ["Generaldata"],
      },
    },
    resolve: {
      alias: {
        layouts: "/src/layouts",
      },
    },
  },
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
  },

  image: {
    domains: ["localhost:4321"],
  },

  markdown: {
    html: true,
  },
});
