!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=["/","/index.html","/login.html","/register.html","/about.html","/tools","/assets/avatar","/assets/images","/vendor/fontawesome","/vendor/jquery","/vendor/uikit","/favicon.jpg"];"workbox"in self&&(workbox.precaching.precacheAndRoute([{'revision':'8f31b0d7459025c77dd59de0f290bdea','url':'app.min.js'},{'revision':'8866d261c98a998b6cd1cfcaf47a69c4','url':'app.min.js.map'},{'revision':'a0a6e589b48bd790d23bb5d9f8b186ac','url':'service-worker.js.map'},{'revision':'fb6db6aaa45cb1d347188a72f3b48a83','url':'uikit.min.js'},{'revision':'bf35167dfdbee4265b19325b16dec979','url':'uikit.min.js.map'}]||[]),workbox.globPatterns(["**/*.{css,js,eot,ttf,woff,woff2,otf,jpg,webp}"]),workbox.modifyURLPrefix({"":"/"}),workbox.clientsCliem(!0),workbox.skipWaiting(!0),workbox.ignoreURLParametersMatching([/./]),workbox.offlineGoogleAnalytics(!0),workbox.maximumFileSizeToCacheInBytes(52428800),workbox.runtimeCaching([{urlPattern:/(?:\/)$/,handler:"NetworkFirst",options:{cacheName:"html",expiration:{maxAgeSeconds:604800}}},{urlPattern:/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,handler:"CacheFirst",options:{cacheName:"images",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}},{urlPattern:/\.(?:mp3|wav|m4a)$/,handler:"CacheFirst",options:{cacheName:"audio",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}},{urlPattern:/\.(?:m4v|mpg|avi)$/,handler:"CacheFirst",options:{cacheName:"videos",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}}])),self.addEventListener("install",(function(e){console.log(e),e.waitUntil(caches.open("wadahkode-cache-v1").then((function(e){return console.log("Opened cache"),e.addAll(n)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){if(t)return t;var n=e.request.clone();return fetch(n).then((function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open("wadahkode-cache-v1").then((function(t){t.put(e.request,n)})),t}))})))})),self.addEventListener("activate",(function(e){const t=["wadahkode-cache-v1","blog-posts-cache-v1"];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===t.indexOf(e))return caches.delete(e)})))})))}))}]);
//# sourceMappingURL=service-worker.js.map