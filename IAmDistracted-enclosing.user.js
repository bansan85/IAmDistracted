// ==UserScript==
// @name        I Am Distracted - Enclosing
// @namespace   https://github.com/bansan85/IAmDistracted.enclosing
// @description Help to keep you focus while browsing. Disabling relating content and you will loose your time.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-enclosing.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-enclosing.user.js
// @version     0.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

if (window.location.href.match(/http[s]?:\/\/www.facebook.com/)) {
  // Test 0008_facebook_com_1
  var elmDeleted = document.getElementById("pagelet_ego_pane");
  elmDeleted.parentNode.removeChild(elmDeleted);
}

