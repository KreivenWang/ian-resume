import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    commonjsOptions: {
      /**
       * resolves issue 'require is not defined'
       * https://github.com/vitejs/vite/issues/3409
       */
      transformMixedEsModules: true
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
});
