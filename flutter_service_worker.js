'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cae2099712c25fa1e6d6217e1070f62b",
"index.html": "52c1377830a5b761b3b76b31404dffa7",
"/": "52c1377830a5b761b3b76b31404dffa7",
"main.dart.js": "f3efd6c74309a41041e56fb605dca69e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icon.svg": "231ca0512d076afe0559f751b82553e0",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "79503548b7d418fd1654d7b5b30471f7",
"icons/Icon-192.png": "02a6579ac0da44717fa5e9d7bd0a40b1",
"icons/Icon-maskable-192.png": "02a6579ac0da44717fa5e9d7bd0a40b1",
"icons/Icon-maskable-512.png": "6b1dd7a1bb9adc649a8678ccb345d703",
"icons/Icon-512.png": "6b1dd7a1bb9adc649a8678ccb345d703",
"manifest.json": "e705f19facb3c991846736757fd6b951",
".git/config": "196cb1bc01d7697adfccfa744aaf1df8",
".git/objects/0d/0e1d8ccdd568cd637ac3353c29ab4b01e2b65a": "886905834570e6098ba32eeddacb3919",
".git/objects/0d/b28ee92e870ac3905e775be65cde77a8f18b55": "e50b8b89898fc01c12e61097e2a2aba5",
".git/objects/59/d0b81519f4a9b55c17a43bd3956d56289cd71e": "56dfbd38b23d83638cd0527d7e55f42c",
".git/objects/92/c7f298158965b9f7bdb53e44d61a3173dbf506": "0001e5bffca514410c9f127745a9f8d6",
".git/objects/3e/1f6d957e929a32464085cec2503afcbb93866c": "e98afc0b96b0fd74ad411133923e9e0b",
".git/objects/57/ba773404a2f5b32febf6bfb5c3499ea5ed2d0a": "bae58286e5b0f2cd74022a52e2d6edee",
".git/objects/04/747ca4f01ed2de3456b163229f30892eb5f039": "6824ee36b971ec5d76f55c46bd0174aa",
".git/objects/6a/70e5f7269fa1f51224c05d01cef368ef5c89ef": "5b3f1a27e318e0464f224300831b6aec",
".git/objects/05/c51e2de4e87207437068b1b68ed99d97717f3a": "b8e4fe248e206bf045ec8202b6e3cd16",
".git/objects/9d/68db40067b14a8b916a0e8d8c85e853015ff2f": "d2ad95923270fea55072e494f5988f4b",
".git/objects/9d/5ec058f76eedd0fd05bece1a0ceb503f491ebb": "276fe52823a8503a3e77aab28aeb7349",
".git/objects/02/b24e3d006db26819635e95e57293f236385a15": "246f8ff0449741acb6e464b90e7af1a3",
".git/objects/a3/ba8605b7fd1fa58c46b078cbf8e2e5278d6a7f": "0b403b1296614f03434c09a2960974f7",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/d7/cfb8c45e4d33b336a03483acc59d017379653e": "d3b2deda4e3fd651b3af2fed79b1b483",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/b4/444e8f18028fe2754389467e4b804471dc2add": "98269256cd82b6b2276b0e37312e43b0",
".git/objects/f3/2f72f075f1ac3fa8927eb0aa97d390fe83e3c0": "cd32a5bbcc7180fbc81711182ac7cedf",
".git/objects/f2/ff62967b91a11a8b054dd33cc6fc56e540a127": "4bc46fa9b39d2680cf112caab7c6c180",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/objects/c8/f7baf0153a6fcef13dea310484ae7637d97952": "9c593c92183e6df2ef6a1f472071011b",
".git/objects/fb/e6e01f6c10ff87fee75cd8f2f08dd89c2cf1c0": "a764b0c87be30ca4ce02a762cc2ffa7a",
".git/objects/4e/631a8131d7bec9bb44075d0c94da6acd38f5f8": "9db0631c2a0c107025456f453adbff22",
".git/objects/27/3712daac725c647aab9d36d4bd5fc588a419d5": "63f69f466fde8b51771e4c192d7ce3ad",
".git/objects/4b/405b1a858034852e57d70159db1590b31bb492": "6d66d9aa076c7eba1a11fa7762a7bead",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/08cb8076731633136d9ca205ea2814ac45bf96": "4d2644c478ae6e51c055c38dd1fd5646",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/65d4c0b3fdc75b70dac8d649dd84a997bccb2f": "56b5a79dc6dd075e59a0a381d628db37",
".git/objects/8f/23958b42baec542c34d3701823e1fa1d2acbfd": "0acee219ae99423d1f082a23e591c7f4",
".git/objects/7e/69006c94ca33d082e070d45fc726cd74b5473a": "4db5e2509d97237ae3edeb3c8c2eb05e",
".git/objects/26/51f2f83308f16d89d0a3e12c34555866488049": "25e3dfa64867d5785bab9143c51e1813",
".git/objects/4d/38fd831c60c88cc233f62547931042ac7fcd67": "01b8e01e21c94771e42e31532a662ce7",
".git/objects/86/c3f2665a6a1835b3846ab3c6b0884783f84ebd": "51adcc60fa71948dccaffd360c94932a",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/43/228706aafcca8f5c178fda8a6e5b48884ca452": "1e28885c44e7f0659601f63992853fdd",
".git/objects/88/60441f88d1ec781c72d8ecfd432eb9ec592f64": "1428ea9149f089ce9c9789533f7e97d3",
".git/objects/6b/20a88095d838a95d52289991bec6b97383fb58": "488ba3368afe178d666349f94dec71ed",
".git/objects/00/b18eea71d4de68ebb106da082c948a6685cdb7": "9378ee81cf33b54725325f0049892cd8",
".git/objects/00/d60601a1288dc9bf2d867f3e2741fd2baa0c48": "91956ac50eda4b37c2d4b9437a1f3301",
".git/objects/09/dc33af609102fe547c27b256401bcb69dd68e5": "e30f66593e5d43f254a32451bf5d0b01",
".git/objects/09/6d2abddd9d1c26b020b33756c5ce65150613c9": "495a9d017fe829f33cf4d680befc5d38",
".git/objects/98/1989e60207b2d8bacd54518350382af79786b3": "b68f2873a26187a3501ac6c69c10ecf4",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/01/b6ad687b3ce995b42cdbfcb35e5f820b5942e4": "390eac34cfcb4493a13fbeb6e46dca6b",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d3/cf7fda0a0b6e351f0b29fc8741411da3ccb832": "d167f771b11dbf516fbef95ce226d5c2",
".git/objects/a7/9e7b6fe0a7611e149752927479e2d177b82809": "c40a22de109943e4e867d84b1b1bcf20",
".git/objects/dd/c76b1c9795e89c80fbc1973bd3631c68397153": "c86e74fb91b5af0c2c4f299e801a97e6",
".git/objects/b6/95bb60caec26e52c1bc611849b9e2eb786e5e1": "2b4ca85ccc734a05d741fa2332d12853",
".git/objects/a9/8208f8d8820384994544474a23136282bd37f8": "6c45d1885fe660c18beb513fdb357490",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/d2/25d720df27cb577b7f518c446d23b5a4b6dc52": "6db53ab5cb9e944d4c91be856296d98e",
".git/objects/af/41156c8a2078a1bf35c9861c39eaaa3cc651e6": "884c7de856e3de82c71535a188eeaf13",
".git/objects/b7/0c22e04d8bbca0cdc70b87979c6da05e32f4ac": "20e4c02c345c0d762fe3dda80058562b",
".git/objects/de/1a4cbf9cf33502a26ed73b2c4d18e15b1fc850": "06178b55ac2aee4acc6ede470025a7b9",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/2461beba01a8218c9450dbb4f95e9d2b4cc908": "05f4cfa9ff3db8ff703a6ec4e1b8b8a6",
".git/objects/b9/457aecef98c6be3f6d9d28d7de41ba3cd73bf5": "ad83b6675348ce276cbbf0ac07899162",
".git/objects/c3/5e1cd6db68a01fb8acf3a134773d173b80ee2a": "0c43b4317879d7ad965ab8fdebdc2066",
".git/objects/e1/9279101b2da170810fb08ae6c39e5838349c78": "39cdabf8aaaecff308580f0ef3b7f76f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/c8a179c922f2308a780ee16853a0c7feb89954": "40081c587c8319874a424ff0922a2dbd",
".git/objects/f9/3e3a1a1525fb5b91020da86e44810c87a2d7bc": "3bfabf2b9b9d1a341e4263f23c96a46b",
".git/objects/f9/66f69c9692ddce8a485678c7fa962ec571c1a1": "0f497df3cb4c17e64ffc4163d2e4e4ea",
".git/objects/cb/4358617a017eb28fd6b5df4b73aba647233b56": "bdac1203a44c96d8f1efb487062a2e36",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cb/ebdf6a97774160beb182b779a278ba4f522be1": "2cadf5f5b75de7ff3e199e5edeebb4b2",
".git/objects/f8/e9cd972343e1d91ed128fd815a398745906f14": "6ef96a3d6d09881b07431afab357f89a",
".git/objects/f8/ea059e68b2ea3d3d62b936ddb8c19414bd64d9": "de1e5f333e77a8665fbd7278e287cf79",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/665434df08874999e6b97e48e448366c8a60a4": "f91e4b31a675414345c3c3d2dfd13b8d",
".git/objects/77/77d1f3d05448a552a91f2fb02840507e8920ab": "820a2253004bad2c76088b4a829d241b",
".git/objects/70/483babe78ef3db607dbcc728ffec3d396f883b": "96ab89a54bf8886974d8a849307d6a8a",
".git/objects/4f/d1685438b6cd347329dbc9984cd1da3e2863d6": "1f149045507308a3f1d26048bf307136",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1c/a31f434f4c00e99fd2a5f8d654df15f4691ba6": "64d02fc9f04e98634d0f5330e889627d",
".git/objects/82/84bbe37ceb44ace2b9ce1bd4daaeb4630d63cf": "fd87152db64a012f955f1f2da2749193",
".git/objects/49/4d4e7425c3df705468203efb28b4b6691f70aa": "5c2960b4ccfb9036b29e21a1b2b15d23",
".git/objects/2b/0bae2e06cbbf897391e74b87cb60ed051c94a5": "f84ff603de948aacfcb5ec8a6692aded",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/66d23b50b86bb768e242a037b37a1819b09f61": "bca3677ea1960722610f3d057e744b78",
".git/objects/78/6aef418b6d4e6267f9952f89b147cffca58b7a": "08bc9bfef4207277bb84bd2696d4aa9b",
".git/objects/13/1f3acaa252a863c3b694d0f522ea750aebd81c": "eed35917566bae72d1c532b2464680d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "402934c5bff5fbf2952a92a19188e244",
".git/logs/refs/heads/main": "e1fdce96ca2be21eedd2bd642b2a259b",
".git/logs/refs/remotes/origin/main": "0e558cc293fea97ee9fd3935e5ed5d8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6236ad806c5083902e8bdb58a46b0198",
".git/refs/remotes/origin/main": "6236ad806c5083902e8bdb58a46b0198",
".git/index": "80c5f6ebe85835887b01353284ef010c",
".git/COMMIT_EDITMSG": "06b8c06e26de027b631ab65880732779",
"assets/AssetManifest.json": "cb4e97e46804f75200adb0a7e9d3a7e5",
"assets/NOTICES": "736e5c792e9a9b85f273c7fe272f5631",
"assets/FontManifest.json": "1dcae8368a267f33971494450108fd9f",
"assets/shaders/ink_sparkle.frag": "ccb77e22bfe534493a6b8831ff83e6b0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/static_api/portfolio_id.json": "a25b9756d9677793026951ad15c42131",
"assets/assets/static_api/portfolio_en.json": "2310844c3eb648d50a71f47f4915a7a4",
"assets/assets/images/ic_facebook.svg": "3c3490700c33bb4e54b5964cf2a78d9d",
"assets/assets/images/ic_upwork.svg": "57b8521494d9a2f34512e0abb5a7bd85",
"assets/assets/images/ic_tiktok.svg": "b7b8e497afdaea80e412ba3b57834128",
"assets/assets/images/ic_avatar.svg": "28d59cf1dd1cb4c0a93181a6171e406a",
"assets/assets/images/ic_close.svg": "24b3b74283c089eaefdbfb147e9f7f22",
"assets/assets/images/ic_linkedin.svg": "fb534c4ab06fb2deffcdd5b7f6ff06a0",
"assets/assets/images/ic_profile.jpg": "4c2f53b0515f2bc5ae3038eb48d46766",
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
