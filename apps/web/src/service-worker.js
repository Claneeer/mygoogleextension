// Em: apps/web/src/service-worker.js
const CACHE = 'bootcamp-cache-v1';
const ASSETS = ['/', '/index.html']; // Adicione aqui CSS ou outros ficheiros estáticos

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});