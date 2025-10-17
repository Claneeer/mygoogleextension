import { test, expect, chromium } from '@playwright/test';
import path from 'path';

// Aponta para a pasta de build 'dist', não para a pasta fonte!
const pathToExtension = path.join(__dirname, '..', 'dist');

test.describe('Testes da Extensão Forçador de Tema', () => {
    // ... (O restante do código de teste permanece o mesmo da resposta anterior)
    // A única mudança é a variável 'pathToExtension' acima.
});