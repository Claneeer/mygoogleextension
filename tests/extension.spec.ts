import { test, expect } from '@playwright/test';
import playwrightConfig from './playwright.config';

// O baseURL será pego do playwright.config.ts

test('PWA carrega e consome API', async ({ page }) => {
  await page.goto('http://localhost:8080'); // Vai para a baseURL
  await expect(page).toHaveTitle(/playwright.config/); // Mude "Bootcamp" para o title do seu PWA

  // Espera pelo seletor que prova que a API foi chamada com sucesso
  // (o data-testid que adicionamos no Passo 2)
  await page.waitForSelector('[data-testid="api-ok"]');

  // Opcional: testar o clique no botão de tema
  await page.click('#toggleThemeBtn');
  await expect(page.locator('body')).toHaveClass(/dark-mode/);
});