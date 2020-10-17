/**
 * Service Worker
 * 
 * Memberikan dukungan offline saat koneksi tidak ada atau terputus.
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 */
const CACHE_NAME = 'wadahkode-cache-v1';
const urlsToCache = [
  '/',
  '/article',
  '/product',
  '/index.html',
  '/login.html',
  '/register.html',
  '/about.html',
  '/tools',
  '/assets/avatar/me.jpg',
  '/assets/avatar/no-image.png',
  //'/assets/images/*/*',
  '/vendor/fontawesome/js/all.min.js',
  //'/vendor/fontawesome/*/*',
  '/vendor/jquery/dist/jquery.min.js',
  '/vendor/uikit/js/uikit.min.js',
  '/vendor/uikit/js/app.min.js',
  '/favicon.jpg'
];

if ('workbox' in self) {
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
    workbox.globPatterns([
        "**/*.{css,js,eot,ttf,woff,woff2,otf,jpg,webp}"
    ]);
    workbox.modifyURLPrefix({
        "": "/"
    });
    workbox.clientsCliem(true);
    workbox.skipWaiting(true);
    workbox.ignoreURLParametersMatching([/./]);
    workbox.offlineGoogleAnalytics(true);
    workbox.maximumFileSizeToCacheInBytes(5 * 1024 * 1024);
    workbox.runtimeCaching([
        {
            urlPattern: /(?:\/)$/,
            handler: "NetworkFirst",
            options: {
            cacheName: "html",
            expiration: {
                   maxAgeSeconds: 60 * 60 * 24 * 7,
                },
            },
        },
        {
            urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
        },
        {
            urlPattern: /\.(?:mp3|wav|m4a)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "audio",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
        },
        {
            urlPattern: /\.(?:m4v|mpg|avi)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "videos",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
        }
    ]);
}

self.addEventListener('install', function(event) {
    console.log(event);
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});
    
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  const cacheAllowlist = ['wadahkode-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});