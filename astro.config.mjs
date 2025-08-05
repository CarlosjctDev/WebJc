// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://CarlosjctDev.github.io',
  base: '/WebJc/',  
  vite: {
    plugins: [tailwindcss()]
  },

});
