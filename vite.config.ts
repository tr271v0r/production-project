import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {find: '@', replacement: '/src'},
            // '@': path.resolve(__dirname, './src'),
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    plugins: [
        svgr({exportAsDefault: true}),
        react(), 
    ],
})
