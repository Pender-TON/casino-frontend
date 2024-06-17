import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 4343,
    proxy: {
      '/api': {
        target: 'http://18.168.48.43:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
    },
  },
  resolve: {
    alias: {
      '@api': path.resolve('src/api'),
      '@features': path.resolve('src/features'),
      '@config': path.resolve('src/config'),
      '@assets': path.resolve('src/assets'),
      '@utils': path.resolve('src/utils'),
      '@components': path.resolve('src/components'),
    },
  },
});
