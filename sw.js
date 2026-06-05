const CACHE = "kana-origin-studio-v11";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260605a",
  "./app.js?v=20260605a",
  "./academy.js?v=20260605a",
  "./phrases.js?v=20260605a",
  "./assets/tofugu-hiragana-chart.jpg",
  "./assets/tofugu-hiragana-mnemonic-chart.jpg",
  "./origin-hiragana.svg",
  "./origin-katakana.svg",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
