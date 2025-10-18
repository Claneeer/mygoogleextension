import { test, expect, chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Recria o '__dirname' para funcionar em Módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aponta para a pasta de build 'dist', agora da forma correta
const pathToExtension = path.join(__dirname, '..', 'dist');

test.describe('Testes da Extensão Forçador de Tema', () => {
    test('deve carregar a extensão', async () => {
        // Adicione a lógica do teste aqui, por exemplo:
        const browser = await chromium.launch();
        // ...código de teste para verificar o funcionamento da extensão...
        await browser.close();
    });
});