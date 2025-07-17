import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './frontend',
  build: {
    outDir: '../public', // Exporta para a pasta servida pelo Express
    emptyOutDir: true
  }
});
