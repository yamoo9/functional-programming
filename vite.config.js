import { defineConfig } from 'vite';
import path from 'node:path';

const viteConfig = defineConfig({
  server: {
    host: 'localhost',
    port: 8000,
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

export default viteConfig;