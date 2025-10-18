import { test, expect, chromium, Page, BrowserContext } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Recria o '__dirname' para funcionar em Módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aponta para a pasta de build 'dist'
const pathToExtension = path.join(__dirname, '..', 'dist');

let context: BrowserContext;
let extensionId: string;

test.beforeAll(async () => {
  // Lança o navegador com a extensão carregada UMA VEZ para todos os testes
  context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });

  const backgroundPage = context.serviceWorkers().length
    ? context.serviceWorkers()[0]
    : await context.waitForEvent('serviceworker');

  extensionId = backgroundPage.url().split('/')[2];
});

test.afterAll(async () => {
  await context.close();
});


test('Deve carregar o popup e aplicar o tema escuro', async () => {
  // Cria uma página de teste simples
  const page = await context.newPage();
  await page.goto('data:text/html,<h1>Página de Teste</h1>', { waitUntil: 'load' });

  // Abre o popup da extensão
  const popupPage = await context.newPage();
  await popupPage.goto(`chrome-extension://${extensionId}/src/popup/popup.html`);

  // **MUDANÇA CRÍTICA 1: Espera explícita pelo botão**
  // Espera até que o botão esteja visível e pronto para ser clicado.
  const themeButton = popupPage.locator('#toggleThemeBtn');
  await expect(themeButton).toBeVisible({ timeout: 10000 }); // Aumenta o tempo de espera para 10s
  await expect(themeButton).toHaveText('Ativar Modo Escuro');

  // Clica no botão para ativar o modo escuro
  await themeButton.click();

  // **MUDANÇA CRÍTICA 2: Espera explícita pela mudança no botão e no tema**
  // Garante que a ação de clique foi processada antes de continuar.
  await expect(themeButton).toHaveText('Ativar Modo Claro');

  // Verifica na página de teste se o filtro de inversão foi aplicado
  const htmlElement = page.locator('html');
  await expect(htmlElement).toHaveCSS('filter', 'invert(1) hue-rotate(180deg)');

  // Fecha as páginas usadas no teste
  await popupPage.close();
  await page.close();
});