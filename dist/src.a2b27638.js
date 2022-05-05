// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/algoliasearch/dist/algoliasearch.umd.js":[function(require,module,exports) {
var define;
/*! algoliasearch.umd.js | 4.13.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).algoliasearch=e()}(this,(function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))}))}return r}function n(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){var e,r="algoliasearch-client-js-".concat(t.key),n=function(){return void 0===e&&(e=t.localStorage||window.localStorage),e},o=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(t),n=o()[r];return Promise.all([n||e(),void 0!==n])})).then((function(t){var e=a(t,2),n=e[0],o=e[1];return Promise.all([n,o||r.miss(n)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve().then((function(){var a=o();return a[JSON.stringify(t)]=e,n().setItem(r,JSON.stringify(a)),e}))},delete:function(t){return Promise.resolve().then((function(){var e=o();delete e[JSON.stringify(t)],n().setItem(r,JSON.stringify(e))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function u(t){var e=o(t.caches),r=e.shift();return void 0===r?{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=e();return n.then((function(t){return Promise.all([t,r.miss(t)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve(e)},delete:function(t){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(t,n,a).catch((function(){return u({caches:e}).get(t,n,a)}))},set:function(t,n){return r.set(t,n).catch((function(){return u({caches:e}).set(t,n)}))},delete:function(t){return r.delete(t).catch((function(){return u({caches:e}).delete(t)}))},clear:function(){return r.clear().catch((function(){return u({caches:e}).clear()}))}}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},e={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in e)return Promise.resolve(t.serializable?JSON.parse(e[o]):e[o]);var i=n(),u=a&&a.miss||function(){return Promise.resolve()};return i.then((function(t){return u(t)})).then((function(){return i}))},set:function(r,n){return e[JSON.stringify(r)]=t.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(t){return delete e[JSON.stringify(t)],Promise.resolve()},clear:function(){return e={},Promise.resolve()}}}function c(t,e,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":e};return{headers:function(){return t===m.WithinHeaders?n:{}},queryParameters:function(){return t===m.WithinQueryParameters?n:{}}}}function f(t){var e=0;return t((function r(){return e++,new Promise((function(n){setTimeout((function(){n(t(r))}),Math.min(100*e,1e3))}))}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return Promise.resolve()};return Object.assign(t,{wait:function(r){return d(t.then((function(t){return Promise.all([e(t,r),t])})).then((function(t){return t[1]})))}})}function l(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}return t}function p(t,e){return e?(Object.keys(e).forEach((function(r){t[r]=e[r](t)})),t):t}function h(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=0;return t.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var m={WithinQueryParameters:0,WithinHeaders:1};function y(t,e){var r=t||{},n=r.data||{};return Object.keys(r).forEach((function(t){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(t)&&(n[t]=r[t])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||e,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var g={Read:1,Write:2,Any:3},v=1,b=2,P=3;function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return r(r({},t),{},{status:e,lastUpdate:Date.now()})}function O(t){return"string"==typeof t?{protocol:"https",url:t,accept:g.Any}:{protocol:t.protocol||"https",url:t.url,accept:t.accept||g.Any}}var I="DELETE",x="GET",j="POST",D="PUT";function q(t,e){return Promise.all(e.map((function(e){return t.get(e,(function(){return Promise.resolve(w(e))}))}))).then((function(t){var r=t.filter((function(t){return function(t){return t.status===v||Date.now()-t.lastUpdate>12e4}(t)})),n=t.filter((function(t){return function(t){return t.status===P&&Date.now()-t.lastUpdate<=12e4}(t)})),a=[].concat(o(r),o(n));return{getTimeout:function(t,e){return(0===n.length&&0===t?1:n.length+3+t)*e},statelessHosts:a.length>0?a.map((function(t){return O(t)})):e}}))}function S(t,e,n,a){var i=[],u=function(t,e){if(t.method===x||void 0===t.data&&void 0===e.data)return;var n=Array.isArray(t.data)?t.data:r(r({},t.data),e.data);return JSON.stringify(n)}(n,a),s=function(t,e){var n=r(r({},t.headers),e.headers),a={};return Object.keys(n).forEach((function(t){var e=n[t];a[t.toLowerCase()]=e})),a}(t,a),c=n.method,f=n.method!==x?{}:r(r({},n.data),a.data),d=r(r(r({"x-algolia-agent":t.userAgent.value},t.queryParameters),f),a.queryParameters),l=0,p=function e(r,o){var f=r.pop();if(void 0===f)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:R(i)};var p={data:u,headers:s,method:c,url:N(f,n.path,d),connectTimeout:o(l,t.timeouts.connect),responseTimeout:o(l,a.timeout)},h=function(t){var e={request:p,response:t,host:f,triesLeft:r.length};return i.push(e),e},m={onSuccess:function(t){return function(t){try{return JSON.parse(t.content)}catch(e){throw function(t,e){return{name:"DeserializationError",message:t,response:e}}(e.message,t)}}(t)},onRetry:function(n){var a=h(n);return n.isTimedOut&&l++,Promise.all([t.logger.info("Retryable failure",A(a)),t.hostsCache.set(f,w(f,n.isTimedOut?P:b))]).then((function(){return e(r,o)}))},onFail:function(t){throw h(t),function(t,e){var r=t.content,n=t.status,a=r;try{a=JSON.parse(r).message}catch(t){}return function(t,e,r){return{name:"ApiError",message:t,status:e,transporterStackTrace:r}}(a,n,e)}(t,R(i))}};return t.requester.send(p).then((function(t){return function(t,e){return function(t){var e=t.status;return t.isTimedOut||function(t){var e=t.isTimedOut,r=t.status;return!e&&0==~~r}(t)||2!=~~(e/100)&&4!=~~(e/100)}(t)?e.onRetry(t):2==~~(t.status/100)?e.onSuccess(t):e.onFail(t)}(t,m)}))};return q(t.hostsCache,e).then((function(t){return p(o(t.statelessHosts).reverse(),t.getTimeout)}))}function k(t){var e=t.hostsCache,r=t.logger,n=t.requester,o=t.requestsCache,i=t.responsesCache,u=t.timeouts,s=t.userAgent,c=t.hosts,f=t.queryParameters,d={hostsCache:e,logger:r,requester:n,requestsCache:o,responsesCache:i,timeouts:u,userAgent:s,headers:t.headers,queryParameters:f,hosts:c.map((function(t){return O(t)})),read:function(t,e){var r=y(e,d.timeouts.read),n=function(){return S(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Read)})),t,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:t.cacheable))return n();var o={request:t,mappedRequestOptions:r,transporter:{queryParameters:d.queryParameters,headers:d.headers}};return d.responsesCache.get(o,(function(){return d.requestsCache.get(o,(function(){return d.requestsCache.set(o,n()).then((function(t){return Promise.all([d.requestsCache.delete(o),t])}),(function(t){return Promise.all([d.requestsCache.delete(o),Promise.reject(t)])})).then((function(t){var e=a(t,2);e[0];return e[1]}))}))}),{miss:function(t){return d.responsesCache.set(o,t)}})},write:function(t,e){return S(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Write)})),t,y(e,d.timeouts.write))}};return d}function T(t){var e={value:"Algolia for JavaScript (".concat(t,")"),add:function(t){var r="; ".concat(t.segment).concat(void 0!==t.version?" (".concat(t.version,")"):"");return-1===e.value.indexOf(r)&&(e.value="".concat(e.value).concat(r)),e}};return e}function N(t,e,r){var n=E(r),a="".concat(t.protocol,"://").concat(t.url,"/").concat("/"===e.charAt(0)?e.substr(1):e);return n.length&&(a+="?".concat(n)),a}function E(t){return Object.keys(t).map((function(e){return h("%s=%s",e,(r=t[e],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(t[e]):t[e]));var r})).join("&")}function R(t){return t.map((function(t){return A(t)}))}function A(t){var e=t.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},t),{},{request:r(r({},t.request),{},{headers:r(r({},t.request.headers),e)})})}var C=function(t){return function(e,r){return t.transporter.write({method:j,path:"2/abtests",data:e},r)}},U=function(t){return function(e,r){return t.transporter.write({method:I,path:h("2/abtests/%s",e)},r)}},z=function(t){return function(e,r){return t.transporter.read({method:x,path:h("2/abtests/%s",e)},r)}},J=function(t){return function(e){return t.transporter.read({method:x,path:"2/abtests"},e)}},F=function(t){return function(e,r){return t.transporter.write({method:j,path:h("2/abtests/%s/stop",e)},r)}},H=function(t){return function(e){return t.transporter.read({method:x,path:"1/strategies/personalization"},e)}},M=function(t){return function(e,r){return t.transporter.write({method:j,path:"1/strategies/personalization",data:e},r)}};function K(t){return function e(r){return t.request(r).then((function(n){if(void 0!==t.batch&&t.batch(n.hits),!t.shouldStop(n))return n.cursor?e({cursor:n.cursor}):e({page:(r.page||0)+1})}))}({})}var W=function(t){return function(e,a){var o=a||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=r({acl:e},void 0!==i?{queryParameters:i}:{});return d(t.transporter.write({method:j,path:"1/keys",data:s},u),(function(e,r){return f((function(n){return tt(t)(e.key,r).catch((function(t){if(404!==t.status)throw t;return n()}))}))}))}},B=function(t){return function(e,r,n){var a=y(n);return a.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:j,path:"1/clusters/mapping",data:{cluster:r}},a)}},Q=function(t){return function(e,r,n){return t.transporter.write({method:j,path:"1/clusters/mapping/batch",data:{users:e,cluster:r}},n)}},G=function(t){return function(e,r){return d(t.transporter.write({method:j,path:h("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:{action:"addEntry",body:[]}}},r),(function(e,r){return jt(t)(e.taskID,r)}))}},L=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:h("1/indexes/%s/operation",e),data:{operation:"copy",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},V=function(t){return function(e,n,a){return L(t)(e,n,r(r({},a),{},{scope:[pe.Rules]}))}},_=function(t){return function(e,n,a){return L(t)(e,n,r(r({},a),{},{scope:[pe.Settings]}))}},X=function(t){return function(e,n,a){return L(t)(e,n,r(r({},a),{},{scope:[pe.Synonyms]}))}},Y=function(t){return function(e,r){return e.method===x?t.transporter.read(e,r):t.transporter.write(e,r)}},Z=function(t){return function(e,r){return d(t.transporter.write({method:I,path:h("1/keys/%s",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).then(r).catch((function(t){if(404!==t.status)throw t}))}))}))}},$=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"deleteEntry",body:{objectID:t}}}));return d(t.transporter.write({method:j,path:h("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},tt=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/keys/%s",e)},r)}},et=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/task/%s",e.toString())},r)}},rt=function(t){return function(e){return t.transporter.read({method:x,path:"/1/dictionaries/*/settings"},e)}},nt=function(t){return function(e){return t.transporter.read({method:x,path:"1/logs"},e)}},at=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping/top"},e)}},ot=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/clusters/mapping/%s",e)},r)}},it=function(t){return function(e){var r=e||{},a=r.retrieveMappings,o=n(r,["retrieveMappings"]);return!0===a&&(o.getClusters=!0),t.transporter.read({method:x,path:"1/clusters/mapping/pending"},o)}},ut=function(t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:t.transporter,appId:t.appId,indexName:e};return p(n,r.methods)}},st=function(t){return function(e){return t.transporter.read({method:x,path:"1/keys"},e)}},ct=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters"},e)}},ft=function(t){return function(e){return t.transporter.read({method:x,path:"1/indexes"},e)}},dt=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping"},e)}},lt=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:h("1/indexes/%s/operation",e),data:{operation:"move",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},pt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:"1/indexes/*/batch",data:{requests:e}},r),(function(e,r){return Promise.all(Object.keys(e.taskID).map((function(n){return ut(t)(n,{methods:{waitTask:de}}).waitTask(e.taskID[n],r)})))}))}},ht=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:e}},r)}},mt=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{params:E(t.params||{})})}));return t.transporter.read({method:j,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},yt=function(t){return function(e,a){return Promise.all(e.map((function(e){var o=e.params,i=o.facetName,u=o.facetQuery,s=n(o,["facetName","facetQuery"]);return ut(t)(e.indexName,{methods:{searchForFacetValues:ue}}).searchForFacetValues(i,u,r(r({},a),s))})))}},gt=function(t){return function(e,r){var n=y(r);return n.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:I,path:"1/clusters/mapping"},n)}},vt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:h("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},bt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:h("1/keys/%s/restore",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).catch((function(t){if(404!==t.status)throw t;return r()}))}))}))}},Pt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:h("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},wt=function(t){return function(e,r,n){return t.transporter.read({method:j,path:h("/1/dictionaries/%s/search",e),data:{query:r},cacheable:!0},n)}},Ot=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/clusters/mapping/search",data:{query:e}},r)}},It=function(t){return function(e,r){return d(t.transporter.write({method:D,path:"/1/dictionaries/*/settings",data:e},r),(function(e,r){return jt(t)(e.taskID,r)}))}},xt=function(t){return function(e,r){var a=Object.assign({},r),o=r||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=i?{queryParameters:i}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return d(t.transporter.write({method:D,path:h("1/keys/%s",e),data:s},u),(function(r,n){return f((function(r){return tt(t)(e,n).then((function(t){return function(t){return Object.keys(a).filter((function(t){return-1!==c.indexOf(t)})).every((function(e){return t[e]===a[e]}))}(t)?Promise.resolve():r()}))}))}))}},jt=function(t){return function(e,r){return f((function(n){return et(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},Dt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:h("1/indexes/%s/batch",t.indexName),data:{requests:e}},r),(function(e,r){return de(t)(e.taskID,r)}))}},qt=function(t){return function(e){return K(r(r({shouldStop:function(t){return void 0===t.cursor}},e),{},{request:function(r){return t.transporter.read({method:j,path:h("1/indexes/%s/browse",t.indexName),data:r},e)}}))}},St=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return K(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return se(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},kt=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return K(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return ce(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},Tt=function(t){return function(e,r,a){var o=a||{},i=o.batchSize,u=n(o,["batchSize"]),s={taskIDs:[],objectIDs:[]};return d(function n(){var a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=[];for(a=o;a<e.length&&(c.push(e[a]),c.length!==(i||1e3));a++);return 0===c.length?Promise.resolve(s):Dt(t)(c.map((function(t){return{action:r,body:t}})),u).then((function(t){return s.objectIDs=s.objectIDs.concat(t.objectIDs),s.taskIDs.push(t.taskID),a++,n(a)}))}(),(function(e,r){return Promise.all(e.taskIDs.map((function(e){return de(t)(e,r)})))}))}},Nt=function(t){return function(e){return d(t.transporter.write({method:j,path:h("1/indexes/%s/clear",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Et=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:h("1/indexes/%s/rules/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},Rt=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:h("1/indexes/%s/synonyms/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},At=function(t){return function(e,r){return d(t.transporter.write({method:j,path:h("1/indexes/%s/deleteByQuery",t.indexName),data:e},r),(function(e,r){return de(t)(e.taskID,r)}))}},Ct=function(t){return function(e){return d(t.transporter.write({method:I,path:h("1/indexes/%s",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Ut=function(t){return function(e,r){return d(zt(t)([e],r).then((function(t){return{taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},zt=function(t){return function(e,r){var n=e.map((function(t){return{objectID:t}}));return Tt(t)(n,le.DeleteObject,r)}},Jt=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:h("1/indexes/%s/rules/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ft=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:h("1/indexes/%s/synonyms/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ht=function(t){return function(e){return Lt(t)(e).then((function(){return!0})).catch((function(t){if(404!==t.status)throw t;return!1}))}},Mt=function(t){return function(e,r,n){return t.transporter.read({method:j,path:h("1/answers/%s/prediction",t.indexName),data:{query:e,queryLanguages:r},cacheable:!0},n)}},Kt=function(t){return function(e,o){var i=o||{},u=i.query,s=i.paginate,c=n(i,["query","paginate"]),f=0;return function n(){return ie(t)(u||"",r(r({},c),{},{page:f})).then((function(t){for(var r=0,o=Object.entries(t.hits);r<o.length;r++){var i=a(o[r],2),u=i[0],c=i[1];if(e(c))return{object:c,position:parseInt(u,10),page:f}}if(f++,!1===s||f>=t.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()}))}()}},Wt=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/indexes/%s/%s",t.indexName,e)},r)}},Bt=function(){return function(t,e){for(var r=0,n=Object.entries(t.hits);r<n.length;r++){var o=a(n[r],2),i=o[0];if(o[1].objectID===e)return parseInt(i,10)}return-1}},Qt=function(t){return function(e,a){var o=a||{},i=o.attributesToRetrieve,u=n(o,["attributesToRetrieve"]),s=e.map((function(e){return r({indexName:t.indexName,objectID:e},i?{attributesToRetrieve:i}:{})}));return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:s}},u)}},Gt=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/indexes/%s/rules/%s",t.indexName,e)},r)}},Lt=function(t){return function(e){return t.transporter.read({method:x,path:h("1/indexes/%s/settings",t.indexName),data:{getVersion:2}},e)}},Vt=function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/indexes/%s/synonyms/%s",t.indexName,e)},r)}},_t=function(t){return function(e,r){return d(Xt(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},Xt=function(t){return function(e,r){var a=r||{},o=a.createIfNotExists,i=n(a,["createIfNotExists"]),u=o?le.PartialUpdateObject:le.PartialUpdateObjectNoCreate;return Tt(t)(e,u,i)}},Yt=function(t){return function(e,i){var u=i||{},s=u.safe,c=u.autoGenerateObjectIDIfNotExist,f=u.batchSize,l=n(u,["safe","autoGenerateObjectIDIfNotExist","batchSize"]),p=function(e,r,n,a){return d(t.transporter.write({method:j,path:h("1/indexes/%s/operation",e),data:{operation:n,destination:r}},a),(function(e,r){return de(t)(e.taskID,r)}))},m=Math.random().toString(36).substring(7),y="".concat(t.indexName,"_tmp_").concat(m),g=ee({appId:t.appId,transporter:t.transporter,indexName:y}),v=[],b=p(t.indexName,y,"copy",r(r({},l),{},{scope:["settings","synonyms","rules"]}));return v.push(b),d((s?b.wait(l):b).then((function(){var t=g(e,r(r({},l),{},{autoGenerateObjectIDIfNotExist:c,batchSize:f}));return v.push(t),s?t.wait(l):t})).then((function(){var e=p(y,t.indexName,"move",l);return v.push(e),s?e.wait(l):e})).then((function(){return Promise.all(v)})).then((function(t){var e=a(t,3),r=e[0],n=e[1],i=e[2];return{objectIDs:n.objectIDs,taskIDs:[r.taskID].concat(o(n.taskIDs),[i.taskID])}})),(function(t,e){return Promise.all(v.map((function(t){return t.wait(e)})))}))}},Zt=function(t){return function(e,n){return ne(t)(e,r(r({},n),{},{clearExistingRules:!0}))}},$t=function(t){return function(e,n){return oe(t)(e,r(r({},n),{},{clearExistingSynonyms:!0}))}},te=function(t){return function(e,r){return d(ee(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},ee=function(t){return function(e,r){var a=r||{},o=a.autoGenerateObjectIDIfNotExist,i=n(a,["autoGenerateObjectIDIfNotExist"]),u=o?le.AddObject:le.UpdateObject;if(u===le.UpdateObject){var s=!0,c=!1,f=void 0;try{for(var l,p=e[Symbol.iterator]();!(s=(l=p.next()).done);s=!0){if(void 0===l.value.objectID)return d(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}))}}catch(t){c=!0,f=t}finally{try{s||null==p.return||p.return()}finally{if(c)throw f}}}return Tt(t)(e,u,i)}},re=function(t){return function(e,r){return ne(t)([e],r)}},ne=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingRules,u=y(n(a,["forwardToReplicas","clearExistingRules"]));return o&&(u.queryParameters.forwardToReplicas=1),i&&(u.queryParameters.clearExistingRules=1),d(t.transporter.write({method:j,path:h("1/indexes/%s/rules/batch",t.indexName),data:e},u),(function(e,r){return de(t)(e.taskID,r)}))}},ae=function(t){return function(e,r){return oe(t)([e],r)}},oe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingSynonyms,u=a.replaceExistingSynonyms,s=y(n(a,["forwardToReplicas","clearExistingSynonyms","replaceExistingSynonyms"]));return o&&(s.queryParameters.forwardToReplicas=1),(u||i)&&(s.queryParameters.replaceExistingSynonyms=1),d(t.transporter.write({method:j,path:h("1/indexes/%s/synonyms/batch",t.indexName),data:e},s),(function(e,r){return de(t)(e.taskID,r)}))}},ie=function(t){return function(e,r){return t.transporter.read({method:j,path:h("1/indexes/%s/query",t.indexName),data:{query:e},cacheable:!0},r)}},ue=function(t){return function(e,r,n){return t.transporter.read({method:j,path:h("1/indexes/%s/facets/%s/query",t.indexName,e),data:{facetQuery:r},cacheable:!0},n)}},se=function(t){return function(e,r){return t.transporter.read({method:j,path:h("1/indexes/%s/rules/search",t.indexName),data:{query:e}},r)}},ce=function(t){return function(e,r){return t.transporter.read({method:j,path:h("1/indexes/%s/synonyms/search",t.indexName),data:{query:e}},r)}},fe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:D,path:h("1/indexes/%s/settings",t.indexName),data:e},i),(function(e,r){return de(t)(e.taskID,r)}))}},de=function(t){return function(e,r){return f((function(n){return function(t){return function(e,r){return t.transporter.read({method:x,path:h("1/indexes/%s/task/%s",t.indexName,e.toString())},r)}}(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},le={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},pe={Settings:"settings",Synonyms:"synonyms",Rules:"rules"},he=1,me=2,ye=3;function ge(t,e,n){var a,o={appId:t,apiKey:e,timeouts:{connect:1,read:2,write:30},requester:{send:function(t){return new Promise((function(e){var r=new XMLHttpRequest;r.open(t.method,t.url,!0),Object.keys(t.headers).forEach((function(e){return r.setRequestHeader(e,t.headers[e])}));var n,a=function(t,n){return setTimeout((function(){r.abort(),e({status:0,content:n,isTimedOut:!0})}),1e3*t)},o=a(t.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(t.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),e({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),e({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(t.data)}))}},logger:(a=ye,{debug:function(t,e){return he>=a&&console.debug(t,e),Promise.resolve()},info:function(t,e){return me>=a&&console.info(t,e),Promise.resolve()},error:function(t,e){return console.error(t,e),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:u({caches:[i({key:"".concat("4.13.0","-").concat(t)}),s()]}),userAgent:T("4.13.0").add({segment:"Browser"})},f=r(r({},o),n),d=function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=k(r(r({hosts:[{url:"personalization.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return p({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{getPersonalizationStrategy:H,setPersonalizationStrategy:M}}))}};return function(t){var e=t.appId,n=c(void 0!==t.authMode?t.authMode:m.WithinHeaders,e,t.apiKey),a=k(r(r({hosts:[{url:"".concat(e,"-dsn.algolia.net"),accept:g.Read},{url:"".concat(e,".algolia.net"),accept:g.Write}].concat(l([{url:"".concat(e,"-1.algolianet.com")},{url:"".concat(e,"-2.algolianet.com")},{url:"".concat(e,"-3.algolianet.com")}]))},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return p({transporter:a,appId:e,addAlgoliaAgent:function(t,e){a.userAgent.add({segment:t,version:e})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},t.methods)}(r(r({},f),{},{methods:{search:mt,searchForFacetValues:yt,multipleBatch:pt,multipleGetObjects:ht,multipleQueries:mt,copyIndex:L,copySettings:_,copySynonyms:X,copyRules:V,moveIndex:lt,listIndices:ft,getLogs:nt,listClusters:ct,multipleSearchForFacetValues:yt,getApiKey:tt,addApiKey:W,listApiKeys:st,updateApiKey:xt,deleteApiKey:Z,restoreApiKey:bt,assignUserID:B,assignUserIDs:Q,getUserID:ot,searchUserIDs:Ot,listUserIDs:dt,getTopUserIDs:at,removeUserID:gt,hasPendingMappings:it,clearDictionaryEntries:G,deleteDictionaryEntries:$,getDictionarySettings:rt,getAppTask:et,replaceDictionaryEntries:vt,saveDictionaryEntries:Pt,searchDictionaryEntries:wt,setDictionarySettings:It,waitAppTask:jt,customRequest:Y,initIndex:function(t){return function(e){return ut(t)(e,{methods:{batch:Dt,delete:Ct,findAnswers:Mt,getObject:Wt,getObjects:Qt,saveObject:te,saveObjects:ee,search:ie,searchForFacetValues:ue,waitTask:de,setSettings:fe,getSettings:Lt,partialUpdateObject:_t,partialUpdateObjects:Xt,deleteObject:Ut,deleteObjects:zt,deleteBy:At,clearObjects:Nt,browseObjects:qt,getObjectPosition:Bt,findObject:Kt,exists:Ht,saveSynonym:ae,saveSynonyms:oe,getSynonym:Vt,searchSynonyms:ce,browseSynonyms:kt,deleteSynonym:Ft,clearSynonyms:Rt,replaceAllObjects:Yt,replaceAllSynonyms:$t,searchRules:se,getRule:Gt,deleteRule:Jt,saveRule:re,saveRules:ne,replaceAllRules:Zt,browseRules:St,clearRules:Et}})}},initAnalytics:function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=k(r(r({hosts:[{url:"analytics.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return p({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{addABTest:C,getABTest:z,getABTests:J,stopABTest:F,deleteABTest:U}}))}},initPersonalization:d,initRecommendation:function(){return function(t){return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."),d()(t)}}}}))}return ge.version="4.13.0",ge}));

},{}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _algoliasearch = _interopRequireDefault(require("algoliasearch"));

require("regenerator-runtime/runtime");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Variables
var client, index;
var appId = '',
    indexName = '',
    apiKey = '',
    pid = '',
    query = ''; // Elements

var form = document.getElementById('search-form');
var message = document.getElementById('search-message');
var link = document.getElementById('search-link');
var results = document.getElementById('search-results'); // Functions

var fetchRules = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
    var _yield$index$searchRu, hits, nbHits;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return index.searchRules(query);

          case 3:
            _yield$index$searchRu = _context.sent;
            hits = _yield$index$searchRu.hits;
            nbHits = _yield$index$searchRu.nbHits;

            if (!(nbHits === 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", []);

          case 8:
            return _context.abrupt("return", hits.map(function (_ref2) {
              var description = _ref2.description,
                  id = _ref2.objectID,
                  tags = _ref2.tags;
              return {
                id: id,
                editor: tags !== null && tags !== void 0 && tags.includes('visual-editor') ? 'visual' : 'manual',
                description: description !== null && description !== void 0 ? description : ''
              };
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            message.innerHTML = "\n      <p class=\"text-danger fb-4\">\n        Your search returned an error \uD83E\uDEE5 <br> \n        Please check the specified data and try again.\n      </p>\n    ";
            link.innerHTML = '';
            results.innerHTML = '';
            throw _context.t0;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function fetchRules(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getSearchUrl = function getSearchUrl(query) {
  var pidParam = pid ? "&pid=".concat(pid) : '';
  return "https://www.algolia.com/apps/".concat(appId, "/explorer/browse/").concat(indexName, "?query=").concat(query, "&searchMode=search").concat(pidParam);
};

var getRuleUrl = function getRuleUrl(id, editor) {
  var pidParam = pid ? "?pid=".concat(pid) : '';
  return "https://www.algolia.com/apps/".concat(appId, "/rules/").concat(indexName, "/").concat(editor, "-editor/edit/").concat(id).concat(pidParam);
}; // Search


form.addEventListener('submit', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var _appId, _indexName, _apiKey, _pid, _query, rules;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _appId = e.target.querySelector('#app_id').value.trim();
            _indexName = e.target.querySelector('#index_name').value.trim();
            _apiKey = e.target.querySelector('#api_key').value.trim();
            _pid = e.target.querySelector('#pid').value.trim();
            _query = e.target.querySelector('#query').value.trim();

            if (_appId !== appId || _indexName !== indexName || _apiKey !== apiKey) {
              client = (0, _algoliasearch.default)(_appId, _apiKey);
              index = client.initIndex(_indexName);
              appId = _appId;
              indexName = _indexName;
              apiKey = _apiKey;
            }

            pid = _pid;

            if (!(_query.toLowerCase() === query.toLowerCase() && _appId !== appId && _indexName !== indexName && _apiKey !== apiKey)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return");

          case 10:
            query = _query; // Fetch rules

            _context2.next = 13;
            return fetchRules(query);

          case 13:
            rules = _context2.sent;
            // Link to dashboard
            link.innerHTML = "<a href=\"".concat(getSearchUrl(query), "\" target=\"_blank\">See this search in the dashboard</a>"); // No rules

            if (!(rules.length === 0)) {
              _context2.next = 19;
              break;
            }

            message.innerHTML = "<p class=\"text-danger\">No rules are applying with the query \"".concat(query, "\"</p>");
            results.innerHTML = '';
            return _context2.abrupt("return");

          case 19:
            // Rules
            message.innerHTML = "\n    <p class=\"text-success\">".concat(rules.length, " rule").concat(rules.length > 1 ? 's are' : ' is', " applying with the query \"").concat(query, "\"</p>\n  ");
            results.innerHTML = "\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Rule ID</th>\n          <th scope=\"col\">Type</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">URL</th>\n        </tr>\n      </thead>\n      <tbody>\n        ".concat(rules.map(function (_ref4) {
              var id = _ref4.id,
                  editor = _ref4.editor,
                  description = _ref4.description;
              return "\n          <tr>\n            <td>".concat(id, "</td>\n            <td>", "".concat(editor[0].toUpperCase()).concat(editor.slice(1)), "\n            <td>").concat(description, "</td>\n            <td><a href=\"").concat(getRuleUrl(id, editor), "\" target=\"_blank\">Link to rule</a></td>\n          </tr>\n        ");
            }), "\n      </tbody>\n    </table>\n  ");

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
},{"algoliasearch":"node_modules/algoliasearch/dist/algoliasearch.umd.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53263" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map