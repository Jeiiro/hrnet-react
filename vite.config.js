import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240, // taille minimale pour la compression (en octets)
      verbose: true, // affiche des informations sur la compression
      deleteOriginFile: false, // conserve les fichiers originaux
    })
  ],
});
