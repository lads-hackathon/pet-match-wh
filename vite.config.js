import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  appType: 'mpa',

  base: process.env.GITHUB_WORKFLOW !== undefined ? '/pet-match-wh/' : '/'
});
