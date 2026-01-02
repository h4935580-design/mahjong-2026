self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("mahjong-2026").then(cache => {
      return cache.addAll([
        "./2026-mahjong.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
