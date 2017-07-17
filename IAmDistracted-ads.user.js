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
// @version     0.1.3
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

if (window.location.href.match(/http[s]?:\/\/www.facebook.com/)) {
  // Test 0009_facebook_com_2
  var elmDeleted = document.getElementById("substream_1");
  elmDeleted.parentNode.removeChild(elmDeleted);
  var target = document.getElementById("stream_pagelet");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var items = document.getElementsByClassName("_3e_2");
      for (var i = items.length-1; i >=0 ; i--) {
        if (items[i].innerHTML.indexOf("Sponsoris") != -1) {
          items[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(items[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        }
      }
    });
  });
  var config = { attributes: true, childList: true, characterData: true, subtree: true };
  observer.observe(target, config);
}

