import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()], // React plugin for Vite
  server: {
    port: 5173, // Change port if needed
    allowedHosts: ['myewacare.com', 'localhost'], // Allow your domain
  },
  build: {
    outDir: 'dist', // Output directory
  },
});
