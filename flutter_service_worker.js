'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5c944b7cbd9c9b7c5dfb79404bd200ff",
"assets/assets/build/dev_config.json": "c4e4ba609a253b63a69aac5fec8d206a",
"assets/assets/build/pre_prod_config.json": "a81127f26707351710dadcb8094541dc",
"assets/assets/build/prod_config.json": "cd140f831fadf92ca1b18ecf6b7ace7b",
"assets/assets/build/strings.json": "6c284ab65030459053e7d078bf70032e",
"assets/assets/build/uat_config.json": "3ae5f350237af0fc7c9df0a1fd13f6da",
"assets/assets/fonts/lato_bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/lato_bolditalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/fonts/lato_italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/lato_regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/lato_semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/lato_thinitalic.ttf": "4ac7208bbe0e3593ce9464f013607751",
"assets/assets/images/accident.svg": "50f17620f8e39ff7c8da2d57dd0a4e68",
"assets/assets/images/approved.svg": "623b36ad20dc4ae28579efdfe4ac35a5",
"assets/assets/images/checkbox_checked.svg": "3372c134a52fa3cfebba33663f03f6a5",
"assets/assets/images/complete.svg": "9a8b95954bd2e6fb32994083e34d2987",
"assets/assets/images/death.svg": "2eb21c9de721b358364fc684fba0c414",
"assets/assets/images/declined.svg": "5037e7362785cdfa661c2189f308dab7",
"assets/assets/images/disability.svg": "676ed860630cd6bbf491480aaa3a9c18",
"assets/assets/images/dismemberment.svg": "e83f5ed124a87bae920feb49520edebc",
"assets/assets/images/ge_logo.png": "6bdad6543e978378be7c6093f273272b",
"assets/assets/images/hospitalisation.svg": "3e82b0ab739cacd5fa9b0863c374fa40",
"assets/assets/images/icons/cb_checked.png": "810d94f9470dbe661454db9552e46009",
"assets/assets/images/icons/cb_unchecked.png": "42d00e465439779f5083e658f63ba504",
"assets/assets/images/icons/eb64d9b9-9ba6-4673-b78c-eca77d1fd321.png": "ac3a29b5b9b3682bd10f15531462e4da",
"assets/assets/images/icons/ic_close.png": "31a6dfe34f486e1688b147ab7cd1f91e",
"assets/assets/images/icons/ic_Dashboard.png": "8deb3b5abe998d87ab1dda860e996c5c",
"assets/assets/images/icons/ic_Settings.png": "7c9cd60b9e590a345290b57afaff89df",
"assets/assets/images/icons/ic_Support.png": "2c0526a0c191ea14d3b6e97844e77e7f",
"assets/assets/images/ic_arrow_down.svg": "0e477d6418217ebc83ac4e63a49bbd38",
"assets/assets/images/ic_arrow_right.svg": "4b15fe33409ed4b38816393d64481c52",
"assets/assets/images/ic_arrow_up.svg": "f6f6900973b86b0d2f8367a082878e20",
"assets/assets/images/ic_birthday.svg": "e474c3ab03ee9d6d708f6880233fedd0",
"assets/assets/images/ic_calendar.svg": "0f9d61695efd37c6fb249f6b6514d1ae",
"assets/assets/images/ic_checkbox_uncheck.svg": "dbd91451c768249d27d9a33f8a1d3c01",
"assets/assets/images/ic_dashboard.svg": "e44f6290b1a9048c34f8d2f8d3bd9b86",
"assets/assets/images/ic_drafts.svg": "353efa7a7b721cedc83354fba05d6cfb",
"assets/assets/images/ic_dropdown.svg": "886bcde71c271735942e53a6668c6db7",
"assets/assets/images/ic_email.svg": "7e2c07447a7da9bec5a4dfe19f06bdd9",
"assets/assets/images/ic_logout.svg": "527433602b59e08524a222effbb33fe9",
"assets/assets/images/ic_more.svg": "9636afdf50d1a40a534c41ca4c1a5ab0",
"assets/assets/images/ic_notification.svg": "c0b994723243423bcfa5bc9b16e37e46",
"assets/assets/images/ic_phone.svg": "41e919924140b41bcb16efbed2bbd48f",
"assets/assets/images/ic_plus.svg": "01a1247a5ac7e079074ef92167ac717d",
"assets/assets/images/ic_policy.svg": "c082d4e6172ccfd43942a56f165ea844",
"assets/assets/images/ic_policy_unselected.svg": "3367af70b987bf2474cb54ead008ee39",
"assets/assets/images/ic_settings.svg": "05afb55d7de7815ed56053246b410a80",
"assets/assets/images/ic_support.svg": "283f0ef4b984b2e49e2c36e3319ee9e3",
"assets/assets/images/ic_upload.svg": "b630fd9f337e213d62b41adda074bc53",
"assets/assets/images/illness.svg": "982f8c8dde938cbc937d44f862daa92b",
"assets/assets/images/in_progress.svg": "78e605b566b64f7014d1f0338dff761f",
"assets/assets/images/logo_manulife.svg": "1fea4da22dc8acf0ed8b8303e52623af",
"assets/assets/images/received.svg": "31c0b4a1bad98f87a37ed1c4f3c40f02",
"assets/assets/images/screenshot/claim_listing_critical_illness.png": "1698fa881b976db284a49aac2259f8b1",
"assets/assets/images/screenshot/claim_listing_hospitalisation.png": "386c43baaa5569f608caa86bd0c032c6",
"assets/assets/images/screenshot/claim_listing_search_bar.png": "3fcd8ff778db83223a0eb03a31597927",
"assets/assets/images/screenshot/claim_listing_total_and_permanent.png": "5b55991cef3bfd6cbc21e8f8ffba42a4",
"assets/assets/images/screenshot/claim_successful_content.png": "956b4485766770fbcac96727e0013d33",
"assets/assets/images/screenshot/claim_summary_statement.png": "8aefd3faa6510efed20c480bdef3f74a",
"assets/assets/images/screenshot/claim_type_client_policy.png": "0f43c084e55c33ff27d8fe8a2ea4629d",
"assets/assets/images/screenshot/sidebar_nav2.png": "718b023d49383812a8e2a2d4d6d3b0ab",
"assets/assets/images/screenshot/ss_claim_in_progress_body.png": "fee228109460cb73f10e0fd66d53bab3",
"assets/assets/images/screenshot/ss_claim_status_completed.png": "401660c2cb68d2f447b2d6437e0f79a3",
"assets/assets/images/screenshot/ss_claim_status_in_progress.png": "a9e2924b7062dfe9f7bfc75e614cce6d",
"assets/assets/images/screenshot/ss_dashboard_outstanding_req.png": "e41acd940895d945a3d2b28ec3c6df7f",
"assets/assets/images/step_1_illustration.svg": "cfeb1decdb546539c918c9ac12a3dad3",
"assets/assets/images/step_2_illustration.svg": "4aa4f0349212d7c3e8c33944185d39cf",
"assets/assets/images/step_3_illustration.svg": "4b3f10f19bfeb8c376012e9ce9d6526b",
"assets/assets/images/step_4_illustration.svg": "7ffefa1e34203d2e6b3d16ea52e60a93",
"assets/assets/images/thumbnail_cloud.svg": "e0fe8962eeac267e629fd41a29d95a51",
"assets/assets/images/thumbnail_jpg.svg": "959c7ad3c0da9d3e8029d525828a4f0a",
"assets/assets/images/total.svg": "5b3d4153d16b788b7ccbef4165a79327",
"assets/assets/images/user_female.svg": "7cf0136663b1f898f2d0d7055ec8ad41",
"assets/assets/style/theme.json": "0d77cfb66cc7aa8c0f161bdc7be7b7a9",
"assets/FontManifest.json": "0bf1515e465d94be2c81c49b6381460e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cf5976c974280f35b8935ab7e16450cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/nui_error_handler/assets/error_mapping.xlsx": "b65243e674602efa01f90ddfa8a5c3c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1f378912b7265aac5edd6073318e3a70",
"/": "1f378912b7265aac5edd6073318e3a70",
"main.dart.js": "c41caabf0a649b3f8d788327118afe5a",
"manifest.json": "9432f3169231df869a380175565e0ecc",
"nuiapp.js": "61a725f5e14940d6689216e6717bc699",
"version.json": "3b1b505fa40a4f5e71d28107221be43d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
