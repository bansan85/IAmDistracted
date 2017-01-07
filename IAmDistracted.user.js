// ==UserScript==
// @name        I Am Distracted
// @namespace   https://github.com/bansan85/IAmDistracted
// @include     http://*/*
// @include     https://*/*
// @grant       none
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted.user.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted.user.js
// @run-at      document-end
// ==/UserScript==

// Supprime le div génant
if (window.location.href.match(/http[s]?:\/\/dzone.com/)) {
  // Test 0001_dzone_com_1
  var elmDeleted = document.getElementById('emailSubPanel');
  elmDeleted.parentNode.removeChild(elmDeleted);
}
