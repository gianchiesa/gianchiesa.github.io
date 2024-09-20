'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cae2099712c25fa1e6d6217e1070f62b",
"index.html": "29905f0f27f28890d28cfe6e47c17160",
"/": "29905f0f27f28890d28cfe6e47c17160",
"main.dart.js": "45446e502e75ebc1f14aea690b1b3f8d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icon.svg": "231ca0512d076afe0559f751b82553e0",
"favicon.png": "79503548b7d418fd1654d7b5b30471f7",
"icons/Icon-192.png": "02a6579ac0da44717fa5e9d7bd0a40b1",
"icons/Icon-maskable-192.png": "02a6579ac0da44717fa5e9d7bd0a40b1",
"icons/Icon-maskable-512.png": "6b1dd7a1bb9adc649a8678ccb345d703",
"icons/Icon-512.png": "6b1dd7a1bb9adc649a8678ccb345d703",
"manifest.json": "e705f19facb3c991846736757fd6b951",
"assets/AssetManifest.json": "db9084aba90ce5208c8675ffc3fa3da8",
"assets/NOTICES": "736e5c792e9a9b85f273c7fe272f5631",
"assets/FontManifest.json": "1dcae8368a267f33971494450108fd9f",
"assets/shaders/ink_sparkle.frag": "ccb77e22bfe534493a6b8831ff83e6b0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/static_api/portfolio_id.json": "a25b9756d9677793026951ad15c42131",
"assets/assets/static_api/portfolio_en.json": "dc45678a97768a91844067d7f54a1219",
"assets/assets/images/ic_facebook.svg": "3c3490700c33bb4e54b5964cf2a78d9d",
"assets/assets/images/ic_upwork.svg": "57b8521494d9a2f34512e0abb5a7bd85",
"assets/assets/images/ic_tiktok.svg": "b7b8e497afdaea80e412ba3b57834128",
"assets/assets/images/ic_avatar.svg": "28d59cf1dd1cb4c0a93181a6171e406a",
"assets/assets/images/ic_close.svg": "24b3b74283c089eaefdbfb147e9f7f22",
"assets/assets/images/ic_linkedin.svg": "fb534c4ab06fb2deffcdd5b7f6ff06a0",
"assets/assets/images/ic_youtube.svg": "4216a9e9759b55e3837722aeae931581",
"assets/assets/images/ic_avatar2.png": "bbe6c5b632db862a20940ddbdf1d2cb1",
"assets/assets/images/ic_playstore.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/ic_menu.svg": "17b0fbdb410668d06be8b26620f289af",
"assets/assets/images/portfolio/aquabreeding/4.jpg": "31ff3611043f9daccf03e07c2e86db5a",
"assets/assets/images/portfolio/aquabreeding/2.png": "264458a8fb66969b66a7735a6dfe8b45",
"assets/assets/images/portfolio/aquabreeding/3.png": "45eefc3274328129f3ace64d33bbb17c",
"assets/assets/images/portfolio/aquabreeding/1.png": "e804d663872611264de8e0db9277f1e5",
"assets/assets/images/portfolio/tasky/4.png": "3e54ed23de947d1b53ca12ce9495560e",
"assets/assets/images/portfolio/tasky/2.png": "afd783424c907b5a47a1b159e1c32d79",
"assets/assets/images/portfolio/tasky/3.png": "f7f9136f2e72e72115d4207034393699",
"assets/assets/images/portfolio/tasky/1.png": "46126f6bd6e0733b5f871f4d4f67693a",
"assets/assets/images/portfolio/temupilih/2.png": "7e1378ad974e03ef437f933bbd34756f",
"assets/assets/images/portfolio/temupilih/3.png": "b2a32a3e511e1067f5e1b5b6ccf1468e",
"assets/assets/images/portfolio/temupilih/1.png": "c4a76fb4c6a27c0ecfe7cf908907c321",
"assets/assets/images/portfolio/portaless/2.jpg": "859ad6e985896983ce9f06ca37053976",
"assets/assets/images/portfolio/portaless/3.jpg": "ee4ae952030cc09172f79c12f3476742",
"assets/assets/images/portfolio/portaless/1.jpg": "300649cb4435753936fb73aef674f5b5",
"assets/assets/images/portfolio/ekta/4.png": "b1ea02a684c7399c681c9192122aa1bf",
"assets/assets/images/portfolio/ekta/2.png": "ee5e22d06745e3567a515445e9691697",
"assets/assets/images/portfolio/ekta/3.png": "6de80dfd402298fd35764361400b3bf1",
"assets/assets/images/portfolio/ekta/1.png": "d5c60db1d7ea2a61d63bff9f987f7ac0",
"assets/assets/images/ic_logo.png": "caebe0aeab2e7ca3b749117bfab242ae",
"assets/assets/images/ic_settings.svg": "1c66e137e1000a65ccac946e78bd2002",
"assets/assets/images/ic_github.svg": "3b5432e19db352bf12e16cf1d2ce7b37",
"assets/assets/images/ic_instagram.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
