// ==UserScript==
// @name        I Am Distracted - Unlocked-content
// @namespace   https://github.com/bansan85/IAmDistracted.unlocked-content
// @description Help to keep you focus while browsing. Remove boring "Click to continue" or silly hide content.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-unlocked-content.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-unlocked-content.user.js
// @version     0.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

if (window.location.href.match(/http[s]?:\/\/observer.com/)) {
  // Test 0014_observer_com_1
  // The easiest thing would be to rename entry-content to make failed script but simply removes getElementsByClassName fail.
  var elmDeleted = document.getElementById("hidden");
  elmDeleted.className = "__hidden__";
  elmDeleted = document.getElementById("continue");
  elmDeleted.parentNode.removeChild(elmDeleted);
  elmDeleted = document.getElementById("fade");
  elmDeleted.parentNode.removeChild(elmDeleted);
}
