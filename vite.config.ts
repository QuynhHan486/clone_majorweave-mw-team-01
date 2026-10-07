import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: { rollupOptions: { input: { app: 'index.html', prototype: 'prototype.html' } } },
});
