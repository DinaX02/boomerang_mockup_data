const cacheName = 'Boomerang-cache-v2';
const cacheFiles = [
  '/',
  './index.html',
  './manifest.json',
  './Offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request)
          .catch(() => caches.match('./Offline.html'));
      })
  );
});
