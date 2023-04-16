import { defineConfig } from "astro/config"
import critters from "astro-critters"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [critters(), tailwind(), compress()],
})
