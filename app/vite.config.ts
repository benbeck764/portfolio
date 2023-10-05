import { defineConfig, loadEnv, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      rollupOptions: {},
    },
    define: {
      'process.env': env,
    },
    plugins: [react(), visualizer() as PluginOption],
    server: {
      port: 3000,
    },
  };
});
