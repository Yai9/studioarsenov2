import { defineConfig } from "astro/config"
import critters from "astro-critters"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [critters(), tailwind(), compress(), svelte()],
})
