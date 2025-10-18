import { test, expect, chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// Recria o '__dirname' para funcionar em Módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aponta para a pasta de build 'dist', agora da forma correta
const pathToExtension = path.join(__dirname, '..', 'dist');

test.describe('Testes da Extensão Forçador de Tema', () => {
    // ... (O restante do código de teste permanece o mesmo da resposta anterior)
    // A única mudança é a variável 'pathToExtension' acima.
});