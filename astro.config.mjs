// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
  adapter: cloudflare({
    imageService: {
      build: 'compile'
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
    include: {
        "skill-icons": ["*"],
        "simple-icons": ["*"],
        "devicon": ["*"],
        "catppuccin": ["*"]
      }
    })
  ]
});