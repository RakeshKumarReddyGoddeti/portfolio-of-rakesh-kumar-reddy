import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// add this extra import
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // add extra eslint() to the array
  plugins: [react(), eslint()],
})
