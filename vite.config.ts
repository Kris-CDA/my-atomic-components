import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'AtomicComponents',
            formats: ['es', 'umd', 'iife'],
            fileName: (format) => `index.${format}.js`,
        },
    },
});