# Bootcamp PWA (Derivado do Forçador de Tema)

Este projeto é a Entrega III, convertendo a lógica de um "Forçador de Tema" em um PWA completo com backend próprio, orquestrado com Docker Compose e integrado com CI/CD.

## 🚀 Arquitetura

-   `/apps/web`: O PWA (Vite + React) que consome a API.
-   `/apps/api`: O Backend (Node + Express) que fornece os dados.
-   `/docker-compose.yml`: Orquestra os serviços `web` e `api`.
-   `/tests`: Testes E2E (Playwright) que validam o PWA e a integração com a API.

## 🛠️ Como Rodar Localmente (com Docker)

1.  **Clone o repositório:**
    ```bash
    git clone [SEU_REPO_URL]
    cd [SEU_REPO]
    ```

2.  **Suba os serviços:**
    Este comando irá construir as imagens e iniciar os containers do PWA e da API.
    ```bash
    docker-compose up --build
    ```

3.  **Acesse:**
    * **PWA (Frontend):** `http://localhost:8080`
    * **API (Backend):** `http://localhost:3000/api/hello`

## 🧪 Como Rodar os Testes

1.  Certifique-se de que os serviços estão rodando (com `docker-compose up -d`).
2.  Execute os testes Playwright:
    ```bash
    npx playwright test
    ```

## 🌐 Deploy

O PWA está publicado automaticamente via GitHub Actions e disponível em:
[LINK_DO_SEU_GITHUB_PAGES_AQUI]