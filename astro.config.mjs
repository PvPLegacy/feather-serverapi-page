import { defineConfig } from 'astro/config';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [ purgecss(), compress() ],
  site: 'https://pvplegacy.github.io',
  base: '/feather-serverapi-page',
});