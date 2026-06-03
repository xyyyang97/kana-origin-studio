const CACHE = "kana-origin-studio-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260604b",
  "./app.js?v=20260604b",
  "./origin-hiragana.svg",
  "./manifest.webmanifest",
  "./icon.svg",
  "./audio/a.wav",
  "./audio/chi.wav",
  "./audio/e.wav",
  "./audio/fu.wav",
  "./audio/ha.wav",
  "./audio/he.wav",
  "./audio/hi.wav",
  "./audio/ho.wav",
  "./audio/i.wav",
  "./audio/ka.wav",
  "./audio/ke.wav",
  "./audio/ki.wav",
  "./audio/ko.wav",
  "./audio/ku.wav",
  "./audio/ma.wav",
  "./audio/me.wav",
  "./audio/mi.wav",
  "./audio/mo.wav",
  "./audio/mu.wav",
  "./audio/n.wav",
  "./audio/na.wav",
  "./audio/ne.wav",
  "./audio/ni.wav",
  "./audio/no.wav",
  "./audio/nu.wav",
  "./audio/o.wav",
  "./audio/ra.wav",
  "./audio/re.wav",
  "./audio/ri.wav",
  "./audio/ro.wav",
  "./audio/ru.wav",
  "./audio/sa.wav",
  "./audio/se.wav",
  "./audio/shi.wav",
  "./audio/so.wav",
  "./audio/su.wav",
  "./audio/ta.wav",
  "./audio/te.wav",
  "./audio/to.wav",
  "./audio/tsu.wav",
  "./audio/u.wav",
  "./audio/wa.wav",
  "./audio/wo.wav",
  "./audio/ya.wav",
  "./audio/yo.wav",
  "./audio/yu.wav"
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
