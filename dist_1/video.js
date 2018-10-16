!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,s=0,c=[],l=n(4);function u(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(v(o.parts[i],t))}else{var s=[];for(i=0;i<o.parts.length;i++)s.push(v(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function d(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return p(t,e.attrs),d(e,t),t}function p(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var c=s++;n=i||(i=h(t)),r=y.bind(null,n,c,!1),o=y.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",p(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return u(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var i=n[a];(s=r[i.id]).refs--,o.push(s)}e&&u(f(e,t),t);for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[];["http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8","http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8","http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8","http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8"].forEach(function(e,t,n){var o=document.createElement("video");o.className="camera camera-"+(t+1),o.autoplay=!0,o.controls=!1,o.muted=!0,function(e,t){if(Hls.isSupported()){var n=new Hls;n.loadSource(t),n.attachMedia(e),n.on(Hls.Events.MANIFEST_PARSED,function(){e.play()})}else e.canPlayType("application/vnd.apple.mpegurl")&&(e.src=t,e.addEventListener("loadedmetadata",function(){e.play()}))}(o,e),r.push(o)}),t.Camera=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initAudioVizualizer=function(){d=document.createElement("canvas"),h=d.getContext("2d"),d.width=200,d.height=50,r.appendChild(d),m=document.createElement("canvas"),p=m.getContext("2d"),m.width=50,m.height=200,o.appendChild(m)},t.initAudioAnalyser=function(){if(!function(){return Boolean(window.AudioContext||window.webkitAudioContext)})return;s?s.resume():(s=new AudioContext,(c=s.createAnalyser()).smoothingTimeConstant=i,c.fftSize=a,l=s.createGain())},t.connectStream=function(e,t){v.get(t)||v.set(t,s.createMediaElementSource(e));v.get(t).connect(c),c.connect(l),l.connect(s.destination),g()};n(5);var r=document.querySelector(".volume-oscilloscope"),o=document.querySelector(".volume-bar"),a=2048,i=.5,s=null,c=null,l=null,u=null,f=null,d=null,m=null,h=null,p=null,v=new Map;function g(){r.classList.contains("volume-oscilloscope_visible")&&(requestAnimationFrame(g),u=c.frequencyBinCount,f=new Uint8Array(u),c.getByteTimeDomainData(f),function(){h.clearRect(0,0,d.width,d.height),h.fillStyle="rgba(255, 255, 255, .05)",h.fillRect(0,0,d.width,d.height),h.lineWidth=1,h.strokeStyle="rgb(0, 0, 0)",h.beginPath();for(var e=Number(d.width)/u,t=0,n=0;n<u;n++){var r=f[n]/128,o=r*d.height/2;0===n?h.moveTo(t,o):h.lineTo(t,o),t+=e}h.lineTo(d.width,d.height/2),h.stroke()}(),function(){p.clearRect(0,0,m.width,m.height),p.fillStyle="rgba(0, 0, 0, .15)",p.fillRect(0,0,m.width,m.height),p.beginPath(),p.lineWidth=m.width,p.strokeStyle="#fafafa",p.moveTo(m.width/2,m.height);var e=0;f.forEach(function(t){t>e&&(e=t)});var t=128/e;p.lineTo(m.width/2,Math.round(m.height*t)),p.stroke()}())}},,,,,function(e,t,n){"use strict";var r=n(12),o=n(6);n(0);var a=document.querySelector(".camera__list"),i=document.querySelector(".camera__btn"),s=document.querySelector(".range-controll_brightness"),c=document.querySelector(".range-controll_contrast"),l=document.querySelector(".volume__controll");!function(){for(var e=0;e<r.Canvas.length;e++)a.appendChild(r.Canvas[e]);i.addEventListener("click",r.toggleCamera),c.addEventListener("input",r.changeContrast),s.addEventListener("input",r.changeBrightness),l.addEventListener("click",r.changeVolume),(0,o.initAudioAnalyser)(),(0,o.initAudioVizualizer)()}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeVolume=t.changeBrightness=t.changeContrast=t.toggleCamera=t.Canvas=void 0;var r=n(5),o=n(6),a=[],i=document.querySelector(".camera__controlls"),s=document.querySelector(".volume__controll"),c=document.querySelector(".volume-oscilloscope"),l=document.querySelector(".volume-bar");!function(){for(var e=function(e){var t=document.createElement("canvas"),n=t.getContext("2d");t.className="camera camera-"+(e+1)+" camera_muted",t.width=640,t.height=480,n.filter="\n            brightness(1)\n            contrast(1)\n        ",t.addEventListener("click",function(){if(t.classList.toggle("camera_open"),i.classList.toggle("camera__controlls_visible"),t.classList.add("camera_muted"),s.classList.add("volume__controll_inactive"),c.classList.toggle("volume-oscilloscope_visible"),l.classList.toggle("volume-bar_visible"),this.classList.contains("camera_open")){var e=this.className.replace(/\D/g,"");(0,o.connectStream)(r.Camera[e-1],e)}});!function o(){n.drawImage(r.Camera[e],0,0,t.width,t.height),window.requestAnimationFrame(o),t.classList.contains("camera_muted")?r.Camera[e].muted=!0:r.Camera[e].muted=!1}(),a.push(t)},t=0;t<r.Camera.length;t++)e(t)}(),t.Canvas=a,t.toggleCamera=function(){var e=document.querySelector(".camera_open");e.classList.add("camera_muted"),e.classList.remove("camera_open"),i.classList.remove("camera__controlls_visible")},t.changeContrast=function(){var e=document.querySelector(".camera_open").getContext("2d");e.filter=e.filter+" contrast("+this.value/100+")"},t.changeBrightness=function(){var e=document.querySelector(".camera_open").getContext("2d");e.filter=e.filter+" brightness("+this.value/100+")"},t.changeVolume=function(){this.classList.toggle("volume__controll_inactive"),document.querySelector(".camera_open").classList.toggle("camera_muted")}}]);