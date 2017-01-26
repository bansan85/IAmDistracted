// ==UserScript==
// @name        I Am Distracted - Social network
// @namespace   https://github.com/bansan85/IAmDistracted.social
// @description Help to keep you focus while browsing. Disabling social network.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-social.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-social.user.js
// @version     0.1.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

function getElementsByClassName(classname)
{
  var a = [];
  var re = new RegExp('\\b' + classname + '\\b');
  var els = document.all ? document.all : document.getElementsByTagName("*");
  for(var i=0,j=els.length; i<j; i++)
    if(re.test(els[i].className))a.push(els[i]);
  return a;
}

if (window.location.href.match(/http[s]?:\/\/www.lemonde.fr/)) {
  // Test 0012_lemonde_fr_6
  var elmDeletedList = getElementsByClassName("fixed-header");
  for (var i=elmDeletedList.length - 1; i >= 0; i--) {
    elmDeletedList[i].parentNode.removeChild(elmDeletedList[i]);
  }
  // Different class for live
  elmDeletedList = getElementsByClassName("live-toolbar");
  for (var i=elmDeletedList.length - 1; i >= 0; i--) {
    elmDeletedList[i].parentNode.removeChild(elmDeletedList[i]);
  }
}
