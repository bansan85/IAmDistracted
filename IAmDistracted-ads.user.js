// ==UserScript==
// @name        I Am Distracted - Ads
// @namespace   https://github.com/bansan85/IAmDistracted.ads
// @description Help to keep you focus while browsing. Disabling ads.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-ads.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-ads.user.js
// @version     0.1.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

if (window.location.href.match(/http[s]?:\/\/www.facebook.com/)) {
  // Test 0009_facebook_com_2
  var elmDeleted = document.getElementById("substream_1");
  elmDeleted.parentNode.removeChild(elmDeleted);
}

