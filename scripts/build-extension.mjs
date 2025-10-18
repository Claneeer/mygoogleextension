// scripts/build-extension.mjs
import { cp, mkdir, rm } from 'fs/promises'; // Importa apenas as funções de promessa que usamos
import { createWriteStream } from 'fs';      // Importa a função de stream do módulo 'fs' principal
import path from 'path';
import archiver from 'archiver';

const SOURCE_DIR = './';
const DEST_DIR = './dist';
const ZIP_FILE = './dist/extension.zip'; // Mantém o caminho corrigido

// Lista de arquivos e pastas a serem copiados para a pasta de distribuição
const filesToCopy = [
    'src',
    'icons',
    'manifest.json'
];

async function build() {
    try {
        // 1. Limpa e cria o diretório de destino
        await rm(DEST_DIR, { recursive: true, force: true });
        await mkdir(DEST_DIR, { recursive: true });

        // 2. Copia os arquivos necessários para a pasta 'dist'
        for (const file of filesToCopy) {
            const sourcePath = path.join(SOURCE_DIR, file);
            const destPath = path.join(DEST_DIR, file);
            await cp(sourcePath, destPath, { recursive: true });
            console.log(`Copiado: ${sourcePath} -> ${destPath}`);
        }

        // 3. Cria o arquivo .zip a partir da pasta 'dist'
        const output = createWriteStream(ZIP_FILE); // Agora usa a função 'createWriteStream' correta
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(`\nBuild finalizado! ${archive.pointer()} total de bytes.`);
            console.log(`Extensão empacotada em: ${ZIP_FILE}`);
        });

        archive.on('error', (err) => { throw err; });
        archive.pipe(output);
        archive.directory(DEST_DIR, false);
        await archive.finalize();

    } catch (error) {
        console.error('Ocorreu um erro durante o build:', error);
    }
}

build();