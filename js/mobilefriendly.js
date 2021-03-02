/*!
 *
 * plugins/mobilefriendly.js
 * Litepicker v2.0.10 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *
 * Hash: d4e396e1f9c0acc74e78
 *
 */!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var a,l,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function l(e,n){for(var t=[],i={},o=0;o<e.length;o++){var r=e[o],a=n.base?r[0]+n.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(l):t.push(i[a]={id:a,parts:[l]})}return t}function s(e,n){for(var t=0;t<e.length;t++){var i=e[t],r=o[i.id],a=0;if(r){for(r.refs++;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],n))}else{for(var l=[];a<i.parts.length;a++)l.push(b(i.parts[a],n));o[i.id]={id:i.id,refs:1,parts:l}}}}function c(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var i=t.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var r=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function f(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function b(e,n){var t,i,o;if(n.singleton){var r=h++;t=m||(m=c(n)),i=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=c(n),i=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e,n);return s(t,n),function(e){for(var i=[],r=0;r<t.length;r++){var a=t[r],c=o[a.id];c&&(c.refs--,i.push(c))}e&&s(l(e,n),n);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete o[d.id]}}}}},,,,function(e,n,t){"use strict";t.r(n);t(6);Litepicker.add("mobilefriendly",{init:function(e){var n=e.options;Object.defineProperties(e,{xTouchDown:{value:null,writable:!0},yTouchDown:{value:null,writable:!0},touchTargetMonth:{value:null,writable:!0}});var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(e){}function o(){var e="portrait"===r();return window.matchMedia("(max-device-".concat(e?"width":"height",": ",480,"px)")).matches}function r(){return"orientation"in window.screen&&"type"in window.screen.orientation?window.screen.orientation.type.replace(/\-\w+$/,""):window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape"}function a(){"portrait"===r()?(e.options.numberOfMonths=1,e.options.numberOfColumns=1):(e.options.numberOfMonths=2,e.options.numberOfColumns=2)}var l=function(n){var t=n.touches[0];e.xTouchDown=t.clientX,e.yTouchDown=t.clientY},s=function(n){if(e.xTouchDown&&e.yTouchDown){var t=n.touches[0].clientX,i=n.touches[0].clientY,o=e.xTouchDown-t,r=e.yTouchDown-i,a=Math.abs(o)>Math.abs(r),l=e.options.numberOfMonths,s=null,c=!1,u="",d=Array.from(e.ui.querySelectorAll(".month-item"));if(a){var p=e.DateTime(e.ui.querySelector(".day-item").dataset.time),f=Number("".concat(1-Math.abs(o)/100)),m=0;if(o>0){m=-Math.abs(o),s=p.clone().add(l,"month");var h=e.options.maxDate;c=!h||s.isSameOrBefore(e.DateTime(h),"month"),u="next"}else{m=Math.abs(o),s=p.clone().subtract(l,"month");var b=e.options.minDate;c=!b||s.isSameOrAfter(e.DateTime(b),"month"),u="prev"}c&&d.map((function(e){e.style.opacity=f,e.style.transform="translateX(".concat(m,"px)")}))}Math.abs(o)+Math.abs(r)>100&&a&&s&&c&&(e.touchTargetMonth=u,e.gotoDate(s))}},c=function(n){e.touchTargetMonth||Array.from(e.ui.querySelectorAll(".month-item")).map((function(e){e.style.transform="translateX(0px)",e.style.opacity=1}));e.xTouchDown=null,e.yTouchDown=null};e.backdrop=document.createElement("div"),e.backdrop.className="litepicker-backdrop",e.backdrop.addEventListener("click",e.hide()),n.element&&n.element.parentNode&&n.element.parentNode.appendChild(e.backdrop),window.addEventListener("orientationchange",(function(t){window.addEventListener("resize",(function t(){if(o()&&e.isShowning()){var i=r();switch(i){case"landscape":n.numberOfMonths=2,n.numberOfColumns=2;break;default:n.numberOfMonths=1,n.numberOfColumns=1}e.ui.classList.toggle("mobilefriendly-portrait","portrait"===i),e.ui.classList.toggle("mobilefriendly-landscape","landscape"===i),e.render()}window.removeEventListener("resize",t)}))})),n.inlineMode&&o()&&(window.dispatchEvent(new Event("orientationchange")),window.dispatchEvent(new Event("resize"))),e.on("before:show",(function(n){if(e.triggerElement=n,!e.options.inlineMode&&o()){e.emit("mobilefriendly.before:show",n),e.ui.style.position="fixed",e.ui.style.display="block",a(),e.scrollToDate(n),e.render();var t=r();e.ui.classList.add("mobilefriendly"),e.ui.classList.toggle("mobilefriendly-portrait","portrait"===t),e.ui.classList.toggle("mobilefriendly-landscape","landscape"===t),e.ui.style.top="50%",e.ui.style.left="50%",e.ui.style.right=null,e.ui.style.bottom=null,e.ui.style.zIndex=e.options.zIndex,e.backdrop.style.display="block",e.backdrop.style.zIndex=e.options.zIndex-1,document.body.classList.add("litepicker-open"),(n||e.options.element).blur(),e.emit("mobilefriendly.show",n)}else o()&&(a(),e.render())})),e.on("render",(function(n){e.touchTargetMonth&&Array.from(e.ui.querySelectorAll(".month-item")).map((function(n){return n.classList.add("touch-target-".concat(e.touchTargetMonth))}));e.touchTargetMonth=null})),e.on("hide",(function(){document.body.classList.remove("litepicker-open"),e.backdrop.style.display="none",e.ui.classList.remove("mobilefriendly","mobilefriendly-portrait","mobilefriendly-landscape")})),e.on("destroy",(function(){e.backdrop&&e.backdrop.parentNode&&e.backdrop.parentNode.removeChild(e.backdrop)})),e.ui.addEventListener("touchstart",l,!!t&&{passive:!0}),e.ui.addEventListener("touchmove",s,!!t&&{passive:!0}),e.ui.addEventListener("touchend",c,!!t&&{passive:!0})}})},function(e,n,t){var i=t(7);"string"==typeof i&&(i=[[e.i,i,""]]);var o={insert:function(e){var n=document.querySelector("head"),t=window._lastElementInsertedByStyleLoader;window.disableLitepickerStyles||(t?t.nextSibling?n.insertBefore(e,t.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),window._lastElementInsertedByStyleLoader=e)},singleton:!1};t(1)(i,o);i.locals&&(e.exports=i.locals)},function(e,n,t){(n=t(0)(!1)).push([e.i,':root {\n  --litepicker-mobilefriendly-backdrop-color-bg: #000;\n}\n\n.litepicker-backdrop {\n  display: none;\n  background-color: var(--litepicker-mobilefriendly-backdrop-color-bg);\n  opacity: 0.3;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.litepicker-open {\n  overflow: hidden;\n}\n\n.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] {\n  transform: translate(-50%, -50%);\n  font-size: 1.1rem;\n  --litepicker-container-months-box-shadow-color: #616161;\n}\n.litepicker.mobilefriendly-portrait {\n  --litepicker-day-width: 13.5vw;\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);\n}\n.litepicker.mobilefriendly-landscape {\n  --litepicker-day-width: 5.5vw;\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);\n}\n\n.litepicker[data-plugins*="mobilefriendly"] .container__months {\n  overflow: hidden;\n}\n\n.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] .container__months .month-item-header {\n  height: var(--litepicker-day-width);\n}\n\n.litepicker.mobilefriendly[data-plugins*="mobilefriendly"] .container__days > div {\n  height: var(--litepicker-day-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item {\n  transform-origin: center;\n}\n\n.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item.touch-target-next {\n  animation-name: lp-bounce-target-next;\n  animation-duration: .5s;\n  animation-timing-function: ease;\n}\n\n.litepicker[data-plugins*="mobilefriendly"] .container__months .month-item.touch-target-prev {\n  animation-name: lp-bounce-target-prev;\n  animation-duration: .5s;\n  animation-timing-function: ease;\n}\n\n@keyframes lp-bounce-target-next {\n  from {\n    transform: translateX(100px) scale(0.5);\n  }\n  to {\n    transform: translateX(0px) scale(1);\n  }\n}\n\n@keyframes lp-bounce-target-prev {\n  from {\n    transform: translateX(-100px) scale(0.5);\n  }\n  to {\n    transform: translateX(0px) scale(1);\n  }\n}',""]),e.exports=n}]);
