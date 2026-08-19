const CACHE='cp2028-v1';
const CORE=['./','./index.html','./career-path-2028.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  // Never cache API calls (e.g. Groq)
  if(req.url.includes('api.groq.com'))return;
  e.respondWith(
    caches.match(req).then(cached=>{
      const net=fetch(req).then(res=>{
        if(res&&(res.status===200||res.type==='opaque')){
          const clone=res.clone();caches.open(CACHE).then(c=>c.put(req,clone).catch(()=>{}));
        }
        return res;
      }).catch(()=>cached);
      return cached||net;
    })
  );
});
