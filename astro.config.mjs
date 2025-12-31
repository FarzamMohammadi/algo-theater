import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/_variables.scss" as *; @use "src/styles/_mixins.scss" as *;`,
          api: 'modern-compiler'
        }
      }
    }
  }
});
