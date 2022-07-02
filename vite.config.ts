import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import preact from '@preact/preset-vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
      },
    plugins: [
        //react(),
        preact(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve:{
        alias: {
            react: 'preact/compat',
        }
    },
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