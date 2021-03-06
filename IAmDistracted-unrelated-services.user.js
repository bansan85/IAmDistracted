// ==UserScript==
// @name        I Am Distracted - Unrelated services
// @namespace   https://github.com/bansan85/IAmDistracted.unrelated-services
// @description Help to keep you focus while browsing. Disabling unrelated services frame.
// @include     http://*
// @include     https://*
// @license     https://opensource.org/licenses/MIT
// @homepage    https://github.com/bansan85/IAmDistracted
// @updateURL   https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-unrelated-services.meta.js
// @downloadURL https://raw.githubusercontent.com/bansan85/IAmDistracted/master/IAmDistracted-unrelated-services.user.js
// @version     0.1.3
// @grant       GM_addStyle
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
  // Test 0010_lemonde_fr_4
  var elmDeleted = document.getElementById('bandeau_bizdev');
  elmDeleted.parentNode.removeChild(elmDeleted);
  // Test 0011_lemonde_fr_5
  var elmDeletedList = getElementsByClassName("promo");
  for (var i=elmDeletedList.length - 1; i >= 0; i--) {
    elmDeletedList[i].parentNode.removeChild(elmDeletedList[i]);
  }
}
else if (window.location.href.match(/http[s]?:\/\/.*.lefigaro.fr/)) {
  // Test 0016_lefigaro_fr_1
  // http://madame.lefigaro.fr/bien-etre/cloudbread-tendance-pain-sans-gluten-ni-farine-110316-113389
  var elmDeletedList = getElementsByClassName("mad__market__droit");
  for (var i=elmDeletedList.length - 1; i >= 0; i--) {
    elmDeletedList[i].parentNode.removeChild(elmDeletedList[i]);
  }
  // Mise en page
  GM_addStyle ( " \
    .container_sticky { \
        padding-right: 0px; \
    } \
    .fig-page__col-left { \
        width: 100%; \
    } \
" );
}

