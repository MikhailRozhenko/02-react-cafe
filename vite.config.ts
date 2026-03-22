import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/02-react-cafe/',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    sourcemap: true,
  },
});
