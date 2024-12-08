import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/app.jsx', // Jika menggunakan React
                'resources/css/app.css', // Jika menggunakan CSS atau Tailwind
            ],
            refresh: true, // Enable HMR di Laravel saat development
            build: {
                outDir: 'public/build',
                emptyOutDir: true,
            },
            base: process.env.APP_URL || '/', // Pastikan URL asset sesuai dengan HTTPS
        }),
    ],
});
