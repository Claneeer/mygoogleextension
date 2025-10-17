import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Pasta onde os testes estão
  fullyParallel: true,
  reporter: 'html', // Gera um relatório HTML após a execução
  use: {
    headless: true, // Roda sem abrir a janela do navegador (ideal para CI)
    trace: 'on-first-retry',
  },
});