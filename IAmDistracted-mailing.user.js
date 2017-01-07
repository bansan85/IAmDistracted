// ==UserScript==
// @name        I Am Distracted
// @namespace   https://github.com/bansan85/IAmDistracted
// @description Help to keep you focus while browsing. Disabling mailing list.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-mailing.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-mailing.user.js
// @version     0.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

// Remove distracting div
if (window.location.href.match(/http[s]?:\/\/dzone.com/)) {
  // Test 0001_dzone_com_1
  var elmDeleted = document.getElementById('emailSubPanel');
  elmDeleted.parentNode.removeChild(elmDeleted);
}
