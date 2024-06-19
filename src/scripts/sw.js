
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
 
// Daftar asset yang akan di-caching
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
   
    // TODO: Caching App Shell Resource
  });
   
  self.addEventListener('activate', (event) => {
     event.waitUntil(CacheHelper.deleteOldCache());
   
    // TODO: Delete old caches
  });
   
  self.addEventListener('fetch', (event) => {
    
    // TODO: Add/get fetch request to/from caches
    event.respondWith(CacheHelper.revalidateCache(event.request));
  });