import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/tarot-dev/',
    resolve: {
        alias: {
            '@shared': resolve(__dirname, '../shared'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        port: 3000,
        open: true,
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
