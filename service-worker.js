self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache").then(cache => {
            return cache.addAll([
                "clicky/",
                "clicky/index.html",
                "clicky/manifest.json",
                "clicky/icon.png",
                "clicky/icon-512.png"
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
