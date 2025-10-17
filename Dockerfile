FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npx playwright install --with-deps

COPY . .

CMD ["npx", "playwright", "test"]