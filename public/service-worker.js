// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var dataCacheName = 'GoFa-v1';
var cacheName = 'GoFaPWA-static';

var filesToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/images/bank-logo.svg',
  '/images/beats.png',
  '/images/iphonex.jpg',
  '/images/starbucks.jpg',
  '/images/tesco.jpeg',
  '/images/avatars/geeky.gif'
];
// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  /*
   * When the request URL contains dataUrl, the app is asking for fresh
   * weather data. In this case, the service worker always goes to the
   * network and then caches the response. This is called the "Cache then
   * network" strategy:
   * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
   */
  e.respondWith(
    caches.open(dataCacheName).then(function(cache) {
      return fetch(e.request).then(function(response){
        cache.put(e.request.url, response.clone());
        return response;
      });
    })
  );

});
