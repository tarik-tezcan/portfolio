import path from 'path';
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteRequireContext from '@originjs/vite-plugin-require-context';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  ViteRequireContext(),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
