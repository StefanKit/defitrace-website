import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://stefankit.github.io//defitrace_website/",
  base: 'defitrace_website',
  integrations: [tailwind(), mdx(), sitemap()],
});
