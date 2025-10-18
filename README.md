# Extensão Forçador de Tema (Claro/Escuro)

Uma extensão para o Google Chrome que permite ao usuário forçar um tema escuro em qualquer site, melhorando a experiência de navegação em ambientes com pouca luz.

## ✨ Funcionalidades

- **Alternância Simples:** Ative ou desative o modo escuro com um único clique no popup.
- **Persistência Global:** Sua escolha de tema é salva e aplicada automaticamente a todas as abas e sites que você visitar.
- **Inteligência de Mídia:** O modo escuro inverte as cores do site, mas mantém as cores de imagens e vídeos intactas.

## 🚀 Instalação (Modo Desenvolvedor)

1.  Baixe este repositório (via `git clone` ou [baixando o .zip](https://www.mediafire.com/file/r2th2pb5q9dmb9o/Exten%25C3%25A7%25C3%25A3o.rar/file)).
2.  Abra o Google Chrome e navegue até `chrome://extensions`.
3.  Ative o **Modo de Desenvolvedor**.
4.  Clique em **"Carregar sem compactação"** e selecione a pasta do projeto.
5.  O ícone de sol/lua aparecerá na sua barra de ferramentas!

---

## 🛠️ Para Desenvolvedores

Este projeto utiliza Docker para criar um ambiente de desenvolvimento e teste consistente e reprodutível.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (v20 ou superior)
* [Docker](https://www.docker.com/products/docker-desktop/)
* [Git](https://git-scm.com/)

### Como Construir e Testar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Claneeer/mygoogleextension.git](https://github.com/Claneeer/mygoogleextension.git)
    cd mygoogleextension-main
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Execute o build da extensão:**
    Este comando irá criar a pasta `dist/` com os arquivos da extensão e o arquivo `dist/extension.zip`.
    ```bash
    npm run build
    ```

4.  **Execute os testes end-to-end com Docker Compose:**
    Este comando irá construir a imagem Docker e rodar a suíte de testes do Playwright em um contêiner isolado.
    ```bash
    docker-compose run --rm e2e-tests npx playwright test
    ```
    Ao final, um relatório de testes será gerado na pasta `playwright-report/`.

## ⚠️ Permissões

Esta extensão requer permissão para **acessar dados de todos os sites** (`host_permissions`) para poder aplicar os estilos de tema. Ela não lê ou armazena nenhum dado de navegação.

## ⚖️ Licença

Distribuído sob a licença MIT.
