(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(o,n){!function(){var o,n=!1,e={};function r(o,n){var element=document.createElement(o);return element.style.cssText=n,element}function t(n){return function(){var e=r("div","line-height:1.7em;min-height:1.7em;background:"+(o.children.length%2?"rgba(255,255,255,0.1)":"")+";color:"+n),t=[].slice.call(arguments).reduce((function(o,n){return o+" "+("object"==typeof n?JSON.stringify(n):n)}),"");e.textContent=t,o.appendChild(e),_options.autoScroll&&(o.scrollTop=o.scrollHeight-o.clientHeight)}}function l(){o.innerHTML=""}function c(){return t(_options.logColor).apply(null,arguments)}function f(){return t(_options.infoColor).apply(null,arguments)}function h(){return t(_options.warnColor).apply(null,arguments)}function d(){return t(_options.errorColor).apply(null,arguments)}function w(){if(!n)throw"You need to call `screenLog.init()` first."}function _(o){return function(){return w(),o.apply(this,arguments)}}function v(o,n){return function(){o.apply(this,arguments),"function"==typeof e[n]&&e[n].apply(console,arguments)}}_options={bgColor:"black",logColor:"lightgreen",infoColor:"blue",warnColor:"orange",errorColor:"red",fontSize:"1em",freeConsole:!1,css:"",autoScroll:!0},window.screenLog={init:function(t){n||(n=!0,t&&function(o){for(var i in o)o.hasOwnProperty(i)&&_options.hasOwnProperty(i)&&(_options[i]=o[i])}(t),o=r("div","z-index:2147483647;font-family:Helvetica,Arial,sans-serif;font-size:"+_options.fontSize+";padding:5px;text-align:left;opacity:0.8;position:fixed;right:0;top:0;min-width:200px;max-height:50vh;overflow:auto;background:"+_options.bgColor+";"+_options.css),document.body.appendChild(o),_options.freeConsole||(e.log=console.log,e.clear=console.clear,e.info=console.info,e.warn=console.warn,e.error=console.error,console.log=v(c,"log"),console.clear=v(l,"clear"),console.info=v(f,"info"),console.warn=v(h,"warn"),console.error=v(d,"error")))},log:v(_(c),"log"),clear:v(_(l),"clear"),info:v(_(l),"info"),warn:v(_(h),"warn"),error:v(_(d),"error"),destroy:_((function(){n=!1,console.log=e.log,console.clear=e.clear,console.info=e.info,console.warn=e.warn,console.error=e.error,o.remove()}))}}()},234:function(o,n,e){"use strict";e.r(n);var r=e(1),t=(e(223),r.default.extend({mounted:function(){screenLog.init()},methods:{onClick:function(){console.log("clicked"),console.log("message")}}})),l=e(35),component=Object(l.a)(t,(function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("h1",[o._v("screenlog.js")]),o._v(" "),o._m(0),o._v(" "),e("div",[e("button",{on:{click:o.onClick}},[o._v("console.log")])])])}),[function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("a",{attrs:{href:"https://github.com/chinchang/screenlog.js"}},[o._v("https://github.com/chinchang/screenlog.js")])])}],!1,null,null,null);n.default=component.exports}}]);