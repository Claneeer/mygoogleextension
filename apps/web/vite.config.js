import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mygoogieextension/', // ADICIONE ESTA LINHA!
  // O nome deve ser EXATAMENTE o nome do seu repositório GitHub
})