import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Match CRA's output dir so `npm run deploy` (gh-pages -d build) keeps working.
    outDir: 'build',
  },
  // This project keeps JSX in .js files (see CLAUDE.md). Teach esbuild to parse
  // those as JSX instead of plain JS, both for source and dep pre-bundling.
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
