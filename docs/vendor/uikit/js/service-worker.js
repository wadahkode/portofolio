!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){const t=["/portofolio/","/portofolio/article","/portofolio/product","/portofolio/index.html","/portofolio/login.html","/portofolio/register.html","/portofolio/about.html","/portofolio/tools","/portofolio/assets/avatar/me.jpg","/portofolio/assets/avatar/no-image.png","/portofolio/vendor/fontawesome/js/all.min.js","/portofolio/vendor/jquery/dist/jquery.min.js","/portofolio/vendor/uikit/css/uikit.css","/portofolio/vendor/uikit/js/uikit.min.js","/portofolio/vendor/uikit/js/app.min.js","/portofolio/favicon.jpg"];"workbox"in self&&(workbox.precaching.precacheAndRoute([{'revision':'b871aed0fdbc5a2efcf62c553d3864db','url':'app.min.js'},{'revision':'380a5a5d8f9006e84660f3747a7cdd09','url':'uikit.min.js'}]||[]),workbox.globPatterns(["**/*.{css,js,eot,ttf,woff,woff2,otf,jpg,webp}"]),workbox.modifyURLPrefix({"":"/portofolio/"}),workbox.clientsCliem(!0),workbox.skipWaiting(!0),workbox.ignoreURLParametersMatching([/./]),workbox.offlineGoogleAnalytics(!0),workbox.maximumFileSizeToCacheInBytes(5242880),workbox.runtimeCaching([{urlPattern:/(?:\/portofolio\/)$/,handler:"NetworkFirst",options:{cacheName:"html",expiration:{maxAgeSeconds:604800}}},{urlPattern:/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,handler:"CacheFirst",options:{cacheName:"images",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}},{urlPattern:/\.(?:mp3|wav|m4a)$/,handler:"CacheFirst",options:{cacheName:"audio",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}},{urlPattern:/\.(?:m4v|mpg|avi)$/,handler:"CacheFirst",options:{cacheName:"videos",expiration:{maxEntries:1e3,maxAgeSeconds:31536e3}}}])),self.addEventListener("install",(function(e){console.log(e),e.waitUntil(caches.open("wadahkode-cache-v1").then((function(e){return console.log("Opened cache"),e.addAll(t)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(o){if(o)return o;var t=e.request.clone();return fetch(t).then((function(o){if(!o||200!==o.status||"basic"!==o.type)return o;var t=o.clone();return caches.open("wadahkode-cache-v1").then((function(o){o.put(e.request,t)})),o}))})))})),self.addEventListener("activate",(function(e){const o=["wadahkode-cache-v1","blog-posts-cache-v1"];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===o.indexOf(e))return caches.delete(e)})))})))}))}]);
//# sourceMappingURL=service-worker.js.map