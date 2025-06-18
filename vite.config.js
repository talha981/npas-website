import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This is correct for username.github.io
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});