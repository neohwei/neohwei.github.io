'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5b06f5fa54da89ce5d871058c87baf6d",
"assets/assets/build/dev_config.json": "c4e4ba609a253b63a69aac5fec8d206a",
"assets/assets/build/pre_prod_config.json": "a81127f26707351710dadcb8094541dc",
"assets/assets/build/prod_config.json": "cd140f831fadf92ca1b18ecf6b7ace7b",
"assets/assets/build/strings.json": "6c284ab65030459053e7d078bf70032e",
"assets/assets/build/uat_config.json": "3ae5f350237af0fc7c9df0a1fd13f6da",
"assets/assets/fonts/arial.ttf": "3508db90d521b94f2dbb400148153573",
"assets/assets/fonts/lato_bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/lato_bolditalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/fonts/lato_italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/lato_regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/lato_semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/lato_thinitalic.ttf": "4ac7208bbe0e3593ce9464f013607751",
"assets/assets/fonts/patinio.ttf": "aec9e9bf09c7353301274c5a05d53854",
"assets/assets/icon/AppleAndroid.ttf": "80021d53b0bbecc1b73af81642f8e93b",
"assets/assets/images/alert_silent.svg": "43f6b9a013a58b3770bb42a3ec39e883",
"assets/assets/images/alert_sound.svg": "0f0c9b7d229422433cfddfce17eb31b1",
"assets/assets/images/android.svg": "64d1843e667f957a2784a74523ef08f3",
"assets/assets/images/android_screenshot.png": "f3ab08409e0c6bea73f859d67788c4b4",
"assets/assets/images/apple.svg": "b0800965aedd9614fd28b68d89cf6845",
"assets/assets/images/app_screen.svg": "83c7d83a369472603f0988bd2dbb298f",
"assets/assets/images/arrow_back.svg": "83eb194d74407f61829875dfb09de627",
"assets/assets/images/arrow_down_red.svg": "dacb1fa56f6a24c8219722c0cd9361cf",
"assets/assets/images/arrow_up_green.svg": "04bdd497c422ffeac8c8e87d5b1ef570",
"assets/assets/images/arrow_up_orange.svg": "caa571c3f02ee93480993fe7ad1cf328",
"assets/assets/images/calendar.svg": "041dd6b5c5ab9dc43b1488181d533c2c",
"assets/assets/images/Checkbox%2520Selected.png": "ac5678d36631f692aa287ee6e52aed69",
"assets/assets/images/Checkbox%2520Selected@2x.png": "ce41bbc2ad9df2253c7f8485659e17d8",
"assets/assets/images/Checkbox%2520Selected@3x.png": "e77e45ab2a09a5a1528aabf9170f24c5",
"assets/assets/images/Checkbox%2520Unselected.png": "2888c138ef86fd847abdf2022c1dc964",
"assets/assets/images/Checkbox%2520Unselected@2x.png": "0db98a4d7ceefd18b4090cad2eb8e315",
"assets/assets/images/Checkbox%2520Unselected@3x.png": "70469e291f11c9c13d7d7f28b1e8baa6",
"assets/assets/images/checkmark.svg": "533139b1087f08ea76e112eae5b357da",
"assets/assets/images/checkmark_circle.svg": "9c7dc172e7c4f9f8c8bc9ec385ca71ac",
"assets/assets/images/checkmark_plain.svg": "9a37e81f6263b832e5d94293657a84c4",
"assets/assets/images/chevron_down.svg": "699b0ff179ff5383a793994eaa88b5cc",
"assets/assets/images/chevron_left.svg": "5630195540cd8749034ea412be188222",
"assets/assets/images/chevron_right.svg": "c5add7b6bafc040833130693ea626998",
"assets/assets/images/chevron_up.svg": "cea0169125ba02344346bb08d533bb47",
"assets/assets/images/close.svg": "68b462f7b9fd7ce1a712e17be721c958",
"assets/assets/images/copy.svg": "f88075f412090b604a02d968beb5fe3b",
"assets/assets/images/delete.svg": "092c54f7dd8a457f7c81e7abc403a42d",
"assets/assets/images/delete2.svg": "aff0cb005a80c1aa6b61dd0ff8f5422c",
"assets/assets/images/details.svg": "a542a17a6776f387c06fc3a51e2b8173",
"assets/assets/images/Download.png": "4c34de7f4561b9439e755b9f732d8d53",
"assets/assets/images/download.svg": "89dacdbbfbbf384eca8b1cee0f233398",
"assets/assets/images/Download@2x.png": "ae08d357ea858bf44c6a1faad6379b9a",
"assets/assets/images/Download@3x.png": "550afb9bbfdcdc16081d1403dd2cf53c",
"assets/assets/images/Download_Highlight@2x.png": "610b67f440479a276e9d76992610b7c6",
"assets/assets/images/dropdown.svg": "7e38b3ce40b7059c4cc3699421362df1",
"assets/assets/images/dropdown_up.svg": "33f186ca075a87d17753de7a0ba66e0c",
"assets/assets/images/duplicate.svg": "b661dffed222d8ee1d558b4b6353253f",
"assets/assets/images/edit.svg": "95e29a6acc2c80d1b3bb261e92d9124e",
"assets/assets/images/email.svg": "2d6789f32299c6862d0fb75f151306bc",
"assets/assets/images/iphone_screenshot.png": "5c5b8b3b1965c630f89816b4d0a630ce",
"assets/assets/images/istudio.svg": "57c43e23e69e4558ff42164017d60dff",
"assets/assets/images/lastmodified.svg": "51e35b8ab51855ff65b99bf840ea208f",
"assets/assets/images/Link%2520Blue@2x.png": "a79a07de7889dadd2f98b73624cd63fe",
"assets/assets/images/Link%2520Blue@3x.png": "81520fa0d99bde43102d51fd37bf0690",
"assets/assets/images/Link%2520Green.png": "05709609b81d72ef0ee73645105e81c7",
"assets/assets/images/Link%2520Green@2x.png": "e8d32e9fd566708810c06ff0c2a01f70",
"assets/assets/images/Link%2520Green@3x.png": "bc66e084aad06aad821e0e67912bd52c",
"assets/assets/images/LinkBlue.png": "cbb56ce4b335a4205911f1cb624e7f3d",
"assets/assets/images/login.png": "adc69739de7380169387fd8b68459101",
"assets/assets/images/logout.svg": "461cddc4625c8186d6729c9f02a9e0da",
"assets/assets/images/no_action.svg": "266a34bd88d16eb855a3cc760598092d",
"assets/assets/images/pdfThumbnail.png": "f219c0e19048631408839642a26cafd9",
"assets/assets/images/recipient.svg": "93a211bc52695b9070b72c1e20da75b5",
"assets/assets/images/responses.svg": "9cbd7dc14b59f59fdc17d9af7d20db57",
"assets/assets/images/search.svg": "2f53f6b9b44e0e477ebe94d0072a99ad",
"assets/assets/images/security.svg": "ef6356be012c6d540397251afe4e691a",
"assets/assets/images/sending_noti.png": "3798b99c3e5eacb841b238910d18e970",
"assets/assets/images/shares.svg": "bd084950dc1261608a626e6ad05c8bee",
"assets/assets/images/support.svg": "a2e97a267f31be1a15c83ac4802bff5e",
"assets/assets/images/union.svg": "a2a159a8572e681178b57482fb28a5a6",
"assets/assets/images/upload.svg": "d600e39147f14e1056a1909a13d9b163",
"assets/assets/images/user.svg": "d5cbd5d5b1c23b514fe9d7fa02cc8f74",
"assets/assets/images/version.svg": "de69c349d313846b97f88400dee57e2d",
"assets/assets/images/visibility.svg": "48240465f74c62c452a641534fa71abd",
"assets/assets/images/web_url.svg": "895b608b7c67996e4cfd76f37f15d068",
"assets/assets/lottie/form_complete_lottie.json": "11596c76e506cfdea36c035b22b913fa",
"assets/assets/lottie/form_loading_lottie.json": "1c29aeecd34c08a59c7a4f392428d2f6",
"assets/assets/style/theme.json": "0d77cfb66cc7aa8c0f161bdc7be7b7a9",
"assets/FontManifest.json": "0188e6bb59d48411e1bc343ef9f718d5",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b7b3a01cf284f54270587827fbf4ea22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/layout_form_builder/assets/fonts/lato_bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/packages/layout_form_builder/assets/fonts/lato_bolditalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/packages/layout_form_builder/assets/fonts/lato_italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/packages/layout_form_builder/assets/fonts/lato_regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/packages/layout_form_builder/assets/fonts/lato_thinitalic.ttf": "4ac7208bbe0e3593ce9464f013607751",
"assets/packages/layout_form_builder/assets/fonts/patinio.ttf": "aec9e9bf09c7353301274c5a05d53854",
"assets/packages/layout_form_builder/assets/images/alert_silent.svg": "faf1b9b6cdb6df988db7dcac6f4fee88",
"assets/packages/layout_form_builder/assets/images/alert_sound.svg": "4c3c25b873c2ea5c66b6e2c2e857eb22",
"assets/packages/layout_form_builder/assets/images/app_screen.svg": "f5d600a1cfb190d98318839f76e31947",
"assets/packages/layout_form_builder/assets/images/arrow_back.svg": "77a1cb77ca16632f920445ffe53db84e",
"assets/packages/layout_form_builder/assets/images/arrow_down_red.svg": "7b9ee8b9ed311b69484681d23dd113d2",
"assets/packages/layout_form_builder/assets/images/arrow_up_green.svg": "7eacbd2646020dc2d0dab1621464f475",
"assets/packages/layout_form_builder/assets/images/arrow_up_orange.svg": "c895dabaddbb85b380332941dccf4245",
"assets/packages/layout_form_builder/assets/images/calendar.svg": "4dbc0a861d3f6cc6f27f9b5110c1557e",
"assets/packages/layout_form_builder/assets/images/checkmark.svg": "c5a470c72b8f20dfa9360cdfe731278c",
"assets/packages/layout_form_builder/assets/images/chevron_down.svg": "5df482e69b5b6dcad19a3e88b2fd95bf",
"assets/packages/layout_form_builder/assets/images/chevron_left.svg": "b98d7bc4d1ebb56c1da2b8b994505b15",
"assets/packages/layout_form_builder/assets/images/chevron_right.svg": "a381aef76db47c5101597213ed3d1e1e",
"assets/packages/layout_form_builder/assets/images/chevron_up.svg": "05bdff7e60659c134415afda0a1db179",
"assets/packages/layout_form_builder/assets/images/close.svg": "06487d27ed14085b9afb13be2dc34dd7",
"assets/packages/layout_form_builder/assets/images/delete.svg": "ecd6d844e120c566a9f0ba906c5411a9",
"assets/packages/layout_form_builder/assets/images/details.svg": "f8de441288ed8af525a5466567301831",
"assets/packages/layout_form_builder/assets/images/dropdown.svg": "09664fce6bc44ae92e6d14969c480899",
"assets/packages/layout_form_builder/assets/images/dropdown_up.svg": "8a214a5a45245c34ac714a38493aefdd",
"assets/packages/layout_form_builder/assets/images/email.svg": "b974326997dc09fd2350581b843ed3c4",
"assets/packages/layout_form_builder/assets/images/gelogo.png": "ce6ee327ff139702c546435ec0a59f92",
"assets/packages/layout_form_builder/assets/images/login.png": "adc69739de7380169387fd8b68459101",
"assets/packages/layout_form_builder/assets/images/logout.svg": "fd0b92d1fc2924c3bde8febdb8a5bce0",
"assets/packages/layout_form_builder/assets/images/no_action.svg": "9dfbe425228020beacbc9627569e7efd",
"assets/packages/layout_form_builder/assets/images/recipient.svg": "17fbadc49335aca822f84b6c16721a12",
"assets/packages/layout_form_builder/assets/images/security.svg": "bd565cd964a209310252ba1836741177",
"assets/packages/layout_form_builder/assets/images/sending_noti.png": "3798b99c3e5eacb841b238910d18e970",
"assets/packages/layout_form_builder/assets/images/support.svg": "c6fa9df83270616a618235569fd504c9",
"assets/packages/layout_form_builder/assets/images/user_jd.png": "2576850df1aff2099fea587980fc8910",
"assets/packages/layout_form_builder/assets/images/visibility.svg": "83b667d4ecc653568600bd4cb56db5e8",
"assets/packages/layout_form_builder/assets/images/web_url.svg": "abdde6177156a3f4e35065f4e35c0644",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/nui_error_handler/assets/error_mapping.xlsx": "b65243e674602efa01f90ddfa8a5c3c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1a458a014b8632521e6929013f4347bc",
"/": "1a458a014b8632521e6929013f4347bc",
"main.dart.js": "bc4e97f8389fd735f22ee6e38b9785e5",
"manifest.json": "6af49fec1dd063a55cfede64959d0bf6",
"nuiapp.js": "61a725f5e14940d6689216e6717bc699",
"version.json": "e020ff8469c8884b34101c6986077067"
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
