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

function getElementsByClassName(classname)
{
  var a = [];
  var re = new RegExp('\\b' + classname + '\\b');
  var els = document.all ? document.all : document.getElementsByTagName("*");
  for(var i=0,j=els.length; i<j; i++)
    if(re.test(els[i].className))a.push(els[i]);
  return a;
}


if (window.location.href.match(/http[s]?:\/\/observer.com/)) {
  // Test 0014_observer_com_1
  var elmDeletedList = getElementsByClassName("entry-content");
  for (var i=elmDeletedList.length - 1; i >= 0; i--) {
    elmDeletedList[i].className = "__entry-content__";
  }
}

