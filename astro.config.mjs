// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://krisztinazavecz.com",
  integrations: [mdx(), sitemap()],
  adapter: netlify(),
  fonts: [
    {
      // Headings, site title and nav:
      provider: fontProviders.fontsource(),
      name: "Comfortaa",
      cssVariable: "--font-heading",
      weights: [400, 700],
      subsets: ["latin", "latin-ext"],
    },
    {
      // Body copy and prose:
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-body",
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
  ],
});
