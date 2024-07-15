// import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import { defineConfig } from 'vitest/config';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  resolve: {
    alias: [{ find: '@ui', replacement: resolve(__dirname, './ui') }]
  },
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  server: {
    open: '/site.html',
    fs: {
      strict: false
    }
  }
});
