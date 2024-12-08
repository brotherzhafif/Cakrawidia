import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'], // Entry point React
      refresh: true,
    }),
    react(),
  ],
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
  },
  base: process.env.APP_URL || '/', // Pastikan URL asset sesuai dengan HTTPS
});
