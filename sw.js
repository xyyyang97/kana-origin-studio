const CACHE = "kana-origin-studio-v2";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./origin-hiragana.svg", "./manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
