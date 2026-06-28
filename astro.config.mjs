// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
   site: 'https://sriramxdev.me',
   base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon({
    include: {
        "skill-icons": ["*"],
        "simple-icons": ["*"],
        "devicon": ["*"],
        "catppuccin": ["*"],
        "cibpn": ["*"],
      }
    })
  ]
});