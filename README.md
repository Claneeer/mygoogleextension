# Projeto PWA - Bootcamp (Derivado de: mygoogleextension)

[![Actions Status](${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/workflows/ci.yml/badge.svg)](${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/workflows/ci.yml)

Conversão da extensão [nome da extensão original] para um Progressive Web App (PWA) funcional, como parte da avaliação do Bootcamp.

**Link do PWA (GitHub Pages):** [COLE A URL DO SEU GITHUB PAGES AQUI]

---

## 🚀 Arquitetura do Projeto

Este projeto é um monorepo contendo dois serviços principais, orquestrados com Docker Compose:

-   `apps/web`: O PWA (Progressive Web App) desenvolvido com [Vite/React ou Vanilla, etc.].
-   `apps/api`: O backend (API) desenvolvido com [Node/Express, etc.].

## 🐳 Como Rodar Localmente (com Docker Compose)

Para executar o projeto completo (PWA e API) localmente, você precisa ter o Docker e o Docker Compose instalados.

1.  Clone este repositório:
    ```bash
    git clone [URL_DO_SEU_REPO]
    cd [NOME_DO_REPO]
    ```

2.  Suba os contêineres:
    ```bash
    docker-compose up --build
    ```

3.  Acesse os serviços:
    -   **PWA (Web):** `http://localhost:8080`
    -   **API (Backend):** `http://localhost:3000`

## ⚙️ Endpoints da API

O backend (`apps/api`) expõe os seguintes endpoints:

-   **GET `/api/hello`**
    -   Descrição: Endpoint de teste que retorna uma mensagem de boas-vindas.
    -   Exemplo de Resposta:
        ```json
        { "ok": true, "msg": "Hello Bootcamp!" }
        ```
-   **[ADICIONE OUTROS ENDPOINTS DA SUA API AQUI]**

## 🧪 Testes

O projeto inclui testes unitários e E2E (Playwright).

Para executar os testes (requer `npm install` dentro de `apps/web` e `apps/api` primeiro):

```bash
# Testes da API
cd apps/api
npm test --if-present
cd ../..

# Testes do PWA
cd apps/web
npm test --if-present
cd ../..