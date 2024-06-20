import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development'
  return {
    plugins: [react(), basicSsl()],
    server: {
      port: 4343,
      proxy: {
        '/api': {
          target: 'https://visto.team',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      },
      changeOrigin: true,
      https: isDev
        ? {
            key: fs.readFileSync('./server.key'),
            cert: fs.readFileSync('./server.crt')
          }
        : {}
    },
    preview: {
      port: 4343
    },
    resolve: {
      alias: {
        '@api': path.resolve('src/api'),
        '@features': path.resolve('src/features'),
        '@config': path.resolve('src/config'),
        '@assets': path.resolve('src/assets'),
        '@utils': path.resolve('src/utils'),
        '@components': path.resolve('src/components'),
        '@ui': path.resolve('src/components/ui'),
        '@svg': path.resolve('src/components/svg')
      }
    }
  }
})
