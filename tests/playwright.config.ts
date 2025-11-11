import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8080', // Adicione esta linha!
    headless: true,
    trace: 'on-first-retry',
  },
});