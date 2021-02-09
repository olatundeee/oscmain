/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.element=t,this.$element=e(t)}var e=window.Zepto,i=window.Waypoint;e.each(["off","on","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),t.prototype.offset=function(){return this.element!==this.element.window?this.$element.offset():void 0},e.each(["width","height"],function(i,o){function n(t,i){return function(t){var n=this.$element,r=n[o](),s={width:["left","right"],height:["top","bottom"]};return e.each(s[o],function(e,o){r+=parseInt(n.css("padding-"+o),10),i&&(r+=parseInt(n.css("border-"+o+"-width"),10)),t&&(r+=parseInt(n.css("margin-"+o),10))}),r}}var r=e.camelCase("inner-"+o),s=e.camelCase("outer-"+o);t.prototype[r]=n(!1),t.prototype[s]=n(!0)}),e.each(["extend","inArray"],function(i,o){t[o]=e[o]}),t.isEmptyObject=function(t){for(var e in t)return!1;return!0},i.adapters.push({name:"zepto",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Inview Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var n=t[this.axis][e];this.createWaypoint(n)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(i){e.options[t[i]].call(e,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},i.Inview=e}();
/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});

let faqContent = [

  // GENERAL
  {
    question: `What is Cowrywise?`,
    answer: `<p>Cowrywise helps make saving and investing seamless. Cowrywise takes away the stress and planning required to save and invest on a regular basis through its automated and easy-to-use platform. Your savings also generate interests until a set maturity date. For Muslims who just want to save without earning interests, we have the automated halal savings option.</p>`,
    type: "general"
  },

  {
    question: `Why should I save on Cowrywise?`,
    answer: `<p>Cowrywise is suitable for anyone who: <p>
    <ul>
      <li> never want to miss their saving and investment goals again. </li>
      <li> wants to save and invest even while they are asleep. </li>
      <li> wants the discipline to keep their savings and investments for a long period of time without tampering with them. </li>
      <li> wants to plan their financial goals with easy to use 
        <a href="https://ovest.ng/tools" target="_blank"></a> financial tools.
      </li>
    </ul>`,
    type: "general"
  },

  {
    question: `How are you able to offer higher returns than traditional banks?`,
    answer:  `<p>This is simple. We do not have the high-cost base of traditional banks. Our operations are lean, driven by our proprietary technology. We invest our customers' funds in risk-free instruments offered by the Central Bank of Nigeria, Nigeria’s Debt Management Office (DMO) and a few low-risk investment opportunities such as corporate bonds and high-quality commercial papers. These cost savings are passed to our customers in the form of higher returns.</p>`,
    
    type: "general"
  },

  {
    question: `What kind of debit cards can I use on Cowrywise?`,
    answer:  `<p>Cowrywise accepts debit cards issued by all Nigerian banks.</p>`,
    type: "general"
  },

  // SAVINGS & RETURNS
  {
    question: `How much can I save on Cowrywise?`,
    answer:  `<p>You can start your saving plans with as low as ₦100 (One hundred Naira). We do not have an upper limit. You have a billion Naira you want to save with us? Please go ahead.</p>`,

    type: "savings"
  },
  {
    question: `What types of savings and investment plans are available on Cowrywise?`,
    answer:  `<ol>
          <li>Regular Savings. With this, you can set your savings plan to be daily, weekly or monthly for a minimum of 3 months. You need only to specify this once during the setting up of your plan and Cowrywise will ensure this money is saved automatically on those specified days into your Cowrywise savings plan. You can also choose to manually top up your savings plan randomly with other amounts outside the automated scheduled amount.</li>

          <li>Life Goals. These plans help you meet commitments to long term financial goals. These are similar to periodic plans but they have a minimum maturity period of 1 year.</li>
          
          <li>Halal Savings. These are for Muslims who don’t want to earn interest on their savings. They can be set up as periodic plans, life goals, save as you earn plans or fixed plan; but they won’t attract any form of interest.</li>
    </ol>`,

    type: "savings"
  },
  {
    question: `How many saving plans can I create?`,
    answer:  `<p>All dreams count, so you can create as many plans as you wish. Housing Plan, Car Plan, Wedding Plan, Education Plan, Children Plan, Vacation Plan and so on. You have the flexibility to give each plan a unique name that resonates with your financial goals.</p>`,
    
    type: "savings"
  },
  {
    question: `How long can I keep my savings and investment with Cowrywise?`,
    answer:  `<p>There is a minimum duration of 90 days and no maximum time limit. You can keep your savings and investment with us for as long as you wish. We make everyday count by making your plans earn returns daily.</p>`,
    
    type: "savings"
  },
  {
    question: `What rate of return do I earn on my plans?`,
    answer:  `<p>Our rates are drawn from the instruments we help you invest in. The instruments are treasury bills, commercial papers and government bonds. Before you create a plan, we’ll show you the prevailing rate and how much you stand to earn. Here’s a little secret, it’s always going to be better than your bank’s savings rate. </p>`,

    type: "savings"
  },
  {
    question: `How do my earnings accumulate on Cowrywise?`,
    answer:  `<p>For every plan created on Cowrywise, there is a maturity period assigned to it. For each maturity period range, there is an attached interest rate. Remember, we make everyday count by making your savings earn returns daily. This is done by prorating the annual interest rate attached to your plan. That is, a daily breakdown of the annual interest rate is paid on the available balance in your plan(s) each day. Also, as big fans of compound interest, your returns compound annually or whenever you rollover your plan after maturity.</p>`,

    type: "savings"
  },
  {
    question: `Can I pause my plans?`,
    answer:  `<p>Yes, you can.</p>
    <ul>
        <li> Simply select the plan you wish to pause. </li>
        <li> Tap "Edit". </li>
        <li> Tap "Plan Status" to toggle between "Active" and "Pause"</li>
        <li> Select "Pause" </li>
        <li> Finally, tap "Save" to save the changes you’ve made.</li>
    </ul>`,

    type: "savings"
  },
  {
    question: `When does my saving begin to earn returns?`,
    answer:  `<p>Your plans start to earn returns the following day after you begin saving on Cowrywise and on daily basis thereafter. Your daily returns are credited to your Cowrywise account by 12 midnight each day.</p>`,
    type: "savings"
  },
  {
    question: `Can I monitor my savings and returns?`,
    answer:  `<p>Absolutely. Our dashboard was designed with this objective in mind. You can monitor the progress on your savings and investment plans and returns on daily basis on our easy-to-understand dashboard. On the dashboard, you can view the following:</p>
    <ul>
      <li> Balance: a sum of your current savings and current returns.</li>
      <li> Current Savings: the total amount of savings you currently have in your Cowrywise account.</li>
      <li> Lifetime Returns: the total amount of returns you’ve earned since you create a Cowrywise account.</li>
      <li> Current Returns: the total amount of returns you are yet to withdraw.</li>
    </ul>
    <p>Also, we also push instant notifications to your verified email address and phone numbers for key transactions on your Cowrywise account, so nothing goes unnoticed or unapproved by you.</p>`,
    
    type: "savings"
  },

  // MUTUAL FUNDS
  {
    question: `What is a mutual fund?`,
    answer:  `<p>Mutual funds pool money from various small investors to make massive investments at once.</p>`,    
    type: "mutual"
  },
  {
    question: `What are the various types of mutual funds?`,
    answer:  `<p>The common ones being equity funds, fixed-income funds, and balanced funds. Equity funds invest your money in shares of high-flying companies that are carefully selected. While fixed-income funds invest in low-risk investments that are backed by a promise — government debt for instance; in which the government borrows x and agrees to pay back with a certain percentage. Finally, balanced funds. As the name suggests, they mix the earlier options.</p>`,    
    type: "mutual"
  },
  {
    question: `How do I invest in mutual funds?`,
    answer:  `<p>To invest in mutual funds, using Cowrywise, you’ll need to signup and login to take a short risk assessment. The results of this test will help us suggest funds you can invest in. Once you’ve chosen a fund, all you need do is buy some units of the fund to have your money invested in it.</p>`,    
    type: "mutual"
  },
  {
    question: `How much interest can I earn with mutual funds?`,
    answer:  `<p>The world is actually limitless with mutual funds. We have brought together a fine mix of fund managers that offer great rates. Hence, you’ll have to check out the various offerings once you log in.</p>`,    
    type: "mutual"
  },
  {
    question: `Are mutual funds better than Cowrywise savings?`,
    answer:  `<p>Not really. Cowrywise high-interest savings provide guaranteed returns, however, a mutual fund’s returns depend on the fund’s performance. Some funds can lose money while others can give higher returns than savings. What is key to note is that they help spread your money, which is very key when investing.</p>`,    
    type: "mutual"
  },
  {
    question: `Does my investment earn interest daily?`,
    answer:  `<p>Daily, you can monitor how much your fund has earned or lost (if it is a type of fund that invests in stocks).</p>`,    
    type: "mutual"
  },
  {
    question: `What is the Systematic Investment Program (SIP)?`,
    answer:  `<p>This is an automated investment plan allows you to effortlessly invest a fixed amount regularly into a mutual fund daily, weekly or monthly. That way, you can even invest in your sleep. The beauty of this plan is that, in the long term, it helps you benefit more despite the high and low performances of a mutual fund.</p>`,    
    type: "mutual"
  },
  {
    question: `How can I redeem my investment?`,
    answer:  `<p>You’'ll have to sell the units you have bought and make a withdrawal request once you are credited in your stash. Once the funds are in your Stash, you can request for an instant withdrawal into your bank account. Please note that the value for sold units reflects in your Stash between 24 to 48 working hours after sales.</p>`,    
    type: "mutual"
  },
  {
    question: `What is the Cowrywise Stash?`,
    answer:  `<p>The stash is a money pool on the app that receives cash from sold mutual funds. Also, you can transfer from any bank account into your stash via bank transfers or USSD. Funds in your stash can be transferred to a savings plan, investment plan or another Cowrywise user. Finally, you can transfer to any bank account for as low as N25.</p>`,    
    type: "mutual"
  },
  {
    question: `What is the management fee?`,
    answer:  `<p>The management fee is a token the fund manager charges to ensure your invested funds earn money. The fee is deducted from the interest you earn. Finally, the fee is clearly stated on the details of each fund.</p>`,    
    type: "mutual"
  },
  {
    question: `What is the processing fee?`,
    answer:  `<p>To pay into a mutual fund traditionally you have to pay about NGN100 or NGN52.5 for transfers. In some instances, you even have to follow up with the fund manager to inform them of your payment. We have made the entire process a lot seamless! The payment processor that makes this possible charges a little percentage that is added when trying to buy a fund.</p>`,    
    type: "mutual"
  },
  {
    question: `Who is a fund manager?`,
    answer:  `<p>The fund manager is the professional who oversees the money invested in a mutual fund; to ensure it earns more money. Importantly, they are always registered with the Securities and Exchange Commission.</p>`,    
    type: "mutual"
  },
  {
    question: `Who is a trustee in a mutual fund?`,
    answer:  `<p>Trustees ensure that fund managers invest your money rightly and earn you correct returns.</p>`,    
    type: "mutual"
  },
  {
    question: `What does a registrar do?`,
    answer:  `<p>A registrar, in the case of a mutual fund, keeps a record of those who have invested in a particular fund and the invested amounts.</p>`,    
    type: "mutual"
  },
  {
    question: `What is a risk assessment?`,
    answer:  `<p>Before you invest in any fund, we take you through a risk assessment (test). Based on the results, we suggest the best-fit funds for you. Equity mutual funds are very spicy, that is they are for high-risk investors. On the other hand, fixed-income funds are a little bit spicy, while balanced funds are moderately spicy.</p>`,    
    type: "mutual"
  },

  // FEES & CHARGES
  {
    question: `How much do you charge?`,
    answer:  `<p>Cowrywise is completely free: zero SMS fees, zero account maintenance fees.</p>`,
    
    type: "charges"
  },


  // SAFETY & SECURITY
  {
    question: `How secure is my information?`,
    answer:  `<p>Cowrywise was built with the security of your payment data in mind. Critical customer data is encrypted and securely stored. We do not store your card information as we work with a PCIDSS-compliant payment processor to handle all our customers’ card details. The PCIDSS is a standard guide, globally, that all reputable payment processors must adhere to.</p>`,
    
    type: "safety"
  },
  {
    question: `How safe is my money?`,
    answer:  `<p>In addition to investing your money in risk-free instruments, invested assets are held by Meristem Trustees, a company registered with the Securities and Exchange Commission (SEC), on behalf of savers. These assets are marked to market periodically to ensure customers are not exposed. Think of it as insurance and more.</p>`,
    
    type: "safety"
  },
  {
    question: `What is the role of Meristem Trustees?`,
    answer:  `<p>Meristem Trustees  is a subsidiary of Meristem Wealth Management Limited. The company was incorporated by the Corporate Affairs Commission as a Private Limited Liability Company in April 2012 and duly licensed by the Securities & Exchange Commission (SEC) to carry out the functions of Trustees in the Capital market in June 2012.</p>

    <p>Meristem Trustees holds all invested assets on behalf of savers. This makes your money absolutely safe.</p>
    `,
    
    type: "safety"
  },


  // WITHDRAWALS
  {
    question: `When can I withdraw my money?`,
    answer:  `<p>You can only withdraw at the set maturity date. You can choose to withdraw some or all of your savings together with interests. You can decide to rollover the plan for another period or withdraw part or whole.</p>
    <p>Rolling over matured plans for another period makes it possible to enjoy compound returns.</p>
    `,
    type: "withdrawals"
  },
  {
    question: `How do I withdraw my money?`,
    answer:  `<p>Withdrawing your money is as quite simple and withdrawals are settled almost instantly.</p>
    <p>To initiate a withdrawal, do follow these steps:</p>
    <ol>
        <li>
          Log in to your Cowrywise account.
        </li>
        <li>
          Select your matured plan
        </li>
        <li>
        Tap "withdraw".
        </li>
        <li>
          Enter the amount you want to withdraw
        </li>
        <li>
          Select the withdrawal destination. You can withdraw into your bank or stash.
        </li>
        <li>
          Set a new maturity date.
        </li>
        <li>
          Make your withdrawal. Viola!
        </li>
    </ol>

    <p> *Please note that any funds left will be kept in the plan till the new maturity date you set. </p>

    <p> If you have not added your bank details, tap “Banks & Cards”. Under “Banks” provide details of the preferred bank account to be credited and save. If withdrawal is not settled after six hours, do send us a message on any of our channels: Twitter, Instagram, Email or Live Chat. </p>`,
    
    type: "withdrawals"
  },

  // OUR PEOPLE
  {
    question: `Who is behind Cowrywise?`,
    answer:  `<p>Cowrywise is a registered Cooperative with its assets held and monitored by Meristem Trustees Limited, an SEC-registered company. Cowrywise is run by finance and technology professionals with over 20 years aggregate domain experience. On our team is a CFA charterholder and technology solution architects. You’re rest assured your savings are in safe hands.

      <a href="https://ovest.ng/about">Read more about our team</a>

    </p>`,
    type: "people"
  },

]


let vueApp = document.getElementById("app");

if (vueApp) {
  var app = new Vue({
    el: '#app',
    data: {
      faqs: faqContent,
      filter: '',
    },
    methods: {
      filteredFAQ(type) {
        return this.faqs.filter(element => {
          return ( element.question.toLowerCase().match(this.filter.toLowerCase()) || element.answer.toLowerCase().match(this.filter.toLowerCase()) ) && element.type === type;
        });
      },

      filterSearchTerm(term){
        this.filter = term
      },
      
      hasClass( target, className ) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
      },

      toggleCollapsedFAQ(event){
        let faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(function (element, index){
          if (event.target !== element) {
            element.querySelector('.faq-content').classList.remove('active')
            element.querySelector('.faq__accordion').classList.remove('active')
          }
        })
        event.target.querySelector('.faq-content').classList.toggle('active')
        event.target.querySelector('.faq__accordion').classList.toggle('active')
      }
    },

    /* This is for a use-case where you search and there are no search results for a particular section but the left header of the section still shows. Instead, we hide the entire section. */
    updated() {
      let faqSections = document.querySelectorAll('.faq-content-section');
      faqSections.forEach((element) => {
        if (!element.querySelector('.faq-item')) {
          element.style.display = 'none'
        }
        else {
          element.style.display = 'block'
        }
      })
    },
  });
}

else {
  let faqItem = $('.faq-item');

  faqItem.each(function (index, element) {
    let that = this;
    $(element).on('click', function(event) {
      faqItem.each(function (index, element) {
        if (event.target !== element) {
          $(element).find('.faq-content').removeClass('active');
          $(element).find('.faq__accordion').removeClass('active');
        }
      });
      $(that).find('.faq-content').toggleClass('active');
      $(that).find('.faq__accordion').toggleClass('active');
    })
  });
}
let nav = $('nav');
let stickyDownload = $('.sticky__download');
let stickyDownloadMessage = $('.sticky__download .free-text');
let navMenuItems  = $('.global-nav__list');
let iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)

if (iOS) {
  stickyDownloadMessage.text('Free on App Store')
}

var navWaypoint = $('section:first-of-type').waypoint({
  handler: function(direction) {
    if (direction == "down" && !navMenuItems.hasClass("light")) {
      nav.addClass("global-nav--sticky");
      stickyDownload.addClass('is-active');
    }
    if (direction == "up") {
      nav.removeClass('global-nav--sticky');
      stickyDownload.removeClass('is-active')
    }
  },
  offset: "-300"
})

// Hamburger & Mobile Menu
let hamburger = $('.global-mobile-nav__trigger');
let mobileNavMenu = $('.global-mobile-nav__menu');

hamburger.on("click", function () {
  // console.log("Clicked");
  hamburger.toggleClass('is-active');  
  $('.global-mobile-nav__menu').toggleClass('is-active');
  $('body').toggleClass('mobile-nav-is-active');
  $('.global-mobile-nav__menu ul li').toggleClass('is-active');
  $('.global-mobile-nav__menu ul.small-menu').toggleClass('is-active');
  $('.global-mobile-nav__menu .app-download-bar').toggleClass('is-active');
});


// Lazyload images for performance
const observer = window.lozad('.lozad', {
  loaded: function (el) {
    el.classList.add('fade')
  },
  rootMargin: '300px 0px'
});
observer.observe();
let wads = $('.floating-wads');
let screen = $(window);
let isMobile = /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || $(window).width() <= 768;
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

let demoVideo = document.getElementById("demoVideo");
let juiceVideo = document.getElementById("juiceVideo");

let stepsArea = $('.steps-area');


let wadContent = 
`<div class="wad wad-1"></div> 
<div class="wad wad-2"></div>
<div class="wad wad-3"></div>
<div class="wad wad-4"></div>
<div class="wad wad-6"></div>
<div class="wad wad-7"></div>
<div class="wad wad-8"></div>`

function doParallaxAnimation () {
  $('.wad-1').css("transform", `translate3d(0, -${screen.scrollTop() / 6}px, 0) scale(0.62)` );
  $('.wad-2').css("transform", `translate3d(0, -${screen.scrollTop() / 5}px, 0) scale(0.62)` );
  $('.wad-3').css("transform", `translate3d(0, -${screen.scrollTop() / 3}px, 0) scale(0.62)` );
  $('.wad-4').css("transform", `translate3d(0, -${screen.scrollTop() / 4}px, 0) scale(0.62)` );
  $('.wad-6').css("transform", `translate3d(0, -${screen.scrollTop() / 5}px, 0) scale(0.62)` );
  $('.wad-7').css("transform", `translate3d(0, -${screen.scrollTop() / 5}px, 0) scale(0.62)` );
  $('.wad-8').css("transform", `translate3d(0, -${screen.scrollTop() / 4}px, 0) scale(0.62)` );
}

function doMobileParallaxAnimation () {
  wads.css("transform", `translate3d(0, -${screen.scrollTop() / 10}px, 0)` );
}

if (wads.length != 0 ) {
  if (!isMobile) {
    $('.floating-wads').html(wadContent)
    // Delay and fade in wad sprite image on load complete
    $('<img/>').attr('src', 'https://ovest.ng/images/sprites/wads-save-online.png').on('load', function() {
      $(this).remove(); // prevent memory leaks
      $('.wad').addClass('reveal-wad');
    });
  }
  else {
    $('<img/>').attr('src', 'https://ovest.ng/images/illos/wads-save-online.png').on('load', function() {
      $(this).remove(); // prevent memory leaks
      $('.wad-illos').css('display', 'block');
      $('.wad-illos').attr('src', 'https://ovest.ng/images/illos/wads-save-online.png');
      $('.wad-illos').addClass('fade');
    });
  }
  animateWadsOnScroll();
}

// Animate wads
function animateWadsOnScroll() {
  let wadIsInView = new Waypoint.Inview({
    element: wads,
    enter: function () {
      if (!isMobile) {
        screen.on('scroll', doParallaxAnimation)
      }
      if (isMobile) {
        screen.on('scroll', doMobileParallaxAnimation)
      }
    },
    exited: function () {
      screen.off('scroll', doParallaxAnimation);
      if (isMobile) {
        screen.off('scroll', doMobileParallaxAnimation);
      }
    }
  });
}


function doStepsAnimation() {
  let step1 = $('.step__item:nth-child(1)')
  let step2 = $('.step__item:nth-child(2)')
  let step3 = $('.step__item:nth-child(3)')

  step1.css("opacity", "1");
  step1.toggleClass('active');

  step1.on('transitionend', function () {
    step2.css("opacity", "1");
    step2.addClass('active'); 
  })

  step2.on('transitionend', function () {
    step3.css("opacity", "1");
    step3.addClass('active');
  })
}

// Signup Steps 
if (stepsArea.length != 0) {
  let stepWaypoint = new Waypoint({
    element: $('.steps-area'),
    handler: function(direction) {
      doStepsAnimation();
      this.destroy();
    },
    offset: "60%"
  });
}


// Product Demo Video
if (demoVideo) {
  let videoIsInView = new Waypoint.Inview({
    element: demoVideo,
    enter: function () {
      demoVideo.play();
    },
    exited: function () {
      demoVideo.pause();
    }
  });
}

// Product Demo Video
if (juiceVideo) {
  let videoIsInView = new Waypoint.Inview({
    element: "#juiceVideo",
    enter: function () {
      juiceVideo.playbackRate = 0.27;
      juiceVideo.play();
    },
    exited: function () {
      juiceVideo.pause();
    }
  });
}


// PERKS ANIMATION
if ($('.perks-section').length != 0) {
$('.perks-section').waypoint({
    handler: function(direction) {
      if (direction === "down") {
        doPerksAnimation();
        this.destroy();
      }
    },
    offset: "65%"
  });
}


function doPerksAnimation() {

  $('.perk-1 .perk__question').addClass("slide-in-question");
  $('.perk-1 .perk__answer').addClass("slide-in-answer");

  $('.perk-1 .perk__question').on("animationend", function() {
    setTimeout(() => {
      $(this).removeClass('slide-in-question');
      $(this).addClass('slide-out-question');
    }, 4000);
  })
  $('.perk-1 .perk__answer').on("animationend", function() {
    setTimeout(() => {
      $(this).removeClass('slide-in-answer');
      $(this).addClass('slide-out-answer');
      $('.perk-2 .perk__question').addClass('slide-in-question');
      $('.perk-2 .perk__answer').addClass('slide-in-answer');
    }, 4000);
  })
  $('.perk-2 .perk__answer').on("animationend", function() {
    setTimeout(() => {
      $('.perk-2 .perk__question').removeClass('slide-in-question');
      $('.perk-2 .perk__question').addClass('slide-out-question');
      $(this).removeClass('slide-in-answer');
      $(this).addClass('slide-out-answer');
      $('.perk-3 .perk__question').addClass('slide-in-question');
      $('.perk-3 .perk__answer').addClass('slide-in-answer');
    }, 4000);
  })
  $('.perk-3 .perk__answer').on("animationend", function() {
    setTimeout(() => {
      $('.perk-3 .perk__question').removeClass('slide-in-question');
      $('.perk-3 .perk__question').addClass('slide-out-question');
      $(this).removeClass('slide-in-answer');
      $(this).addClass('slide-out-answer');
      $('.perk-4 .perk__question').addClass('slide-in-question');
      $('.perk-4 .perk__answer').addClass('slide-in-answer');
    }, 4000);
  })
  $('.perk-4 .perk__answer').on("animationend", function() {
    setTimeout(() => {
      $('.perk-4 .perk__question').removeClass('slide-in-question');
      $('.perk-4 .perk__question').addClass('slide-out-question');
      $(this).removeClass('slide-in-answer');
      $(this).addClass('slide-out-answer');
      $('.perk-5 .perk__question').addClass('slide-in-question');
      $('.perk-5 .perk__answer').addClass('slide-in-answer');
    }, 4000);
  })
  $('.perk-5 .perk__answer').on("animationend", function() {
    setTimeout(() => {
      $('.perk-5 .perk__question').removeClass('slide-in-question');
      $('.perk-5 .perk__question').addClass('slide-out-question');
      $(this).removeClass('slide-in-answer');
      $(this).addClass('slide-out-answer');

      $('.perk__question').each((element, index) => {
        $(element).removeClass('slide-in-question, slide-out-question');
      });

      $('.perk__answer').each((element, index) => {
        $(element).removeClass('slide-in-question, slide-out-question');
      });

      $('.perk-1 .perk__question').addClass("slide-in-question");
      $('.perk-1 .perk__answer').addClass("slide-in-answer");

    }, 4000);
  })
}
let lowRiskTab = $('#low-risk-tab')
let mediumRiskTab = $('#medium-risk-tab')
let highRiskTab = $('#high-risk-tab')

let lowRiskFunds = $('.low-risk')
let mediumRiskFunds = $('.medium-risk')
let highRiskFunds = $('.high-risk')


// let riskFunds = $('.risk')

// $('.tab__item').click(function (e) {
//   $('.tab__item').each(function (index, item) {
//     if (e.target !== item ) {
//       $(item).removeClass('active')
//     }
//   })
//   $(this).addClass('active')

// })

lowRiskTab.click(function () {
  lowRiskTab.addClass('active')
  mediumRiskTab.removeClass('active')
  highRiskTab.removeClass('active')
  lowRiskFunds.addClass('active')
  mediumRiskFunds.removeClass('active')
  highRiskFunds.removeClass('active')
})


mediumRiskTab.click(function () {
  mediumRiskTab.addClass('active')
  lowRiskTab.removeClass('active')
  highRiskTab.removeClass('active')
  mediumRiskFunds.addClass('active')
  lowRiskFunds.removeClass('active')
  highRiskFunds.removeClass('active')
})

highRiskTab.click(function () {
  highRiskTab.addClass('active')
  mediumRiskTab.removeClass('active')
  lowRiskTab.removeClass('active')
  highRiskFunds.addClass('active')
  lowRiskFunds.removeClass('active')
  mediumRiskFunds.removeClass('active')
})

// function showTab(e, risk){

// }
let animatedElements = $('h1.animated, h2.animated, h3.animated, p.animated, div.animated, a.animated');

animatedElements.each(function () {
  $(this).waypoint({
    
    handler: function(direction) {

      if (direction === "down") {
        $(this.element).toggleClass("reveal");
        this.destroy();
      }
    },
    offset: "75%"
  });
});
let periodicIcon = document.getElementById("periodic")
let goalIcon = document.getElementById("goals")
// let sayeIcon = document.getElementById("saye")
// let fixedIcon = document.getElementById("fixed")
let halalIcon = document.getElementById("halal")
let circlesIcon = document.getElementById("circles")


if (periodicIcon) {
  var periodicAnimation = lottie.loadAnimation({
    container: periodicIcon, // the dom element that will contain the animation
    renderer: 'svg',
    autoplay: false,
    loop: true,
    path: '../lottie/periodic/data.json'
  });
  periodicAnimation.setSpeed(0.6);
  
  var goalsAnimation = lottie.loadAnimation({
    container: goalIcon, // the dom element that will contain the animation
    renderer: 'svg',
    autoplay: false,
    loop: true,
    path: '../lottie/goals/data.json'
  });

  goalsAnimation.setSpeed(0.6);
  
  var halalAnimation = lottie.loadAnimation({
    container: halalIcon, // the dom element that will contain the animation
    renderer: 'svg',
    autoplay: false,
    loop: true,
    path: '../lottie/halal/data.json'
  });
  
  var circlesAnimation = lottie.loadAnimation({
    container: circlesIcon, // the dom element that will contain the animation
    renderer: 'svg',
    autoplay: false,
    loop: true,
    path: '../lottie/circles/data.json'
  });
  
  
  
  // WAYPOINTS
  let periodicVisible = new Waypoint.Inview({
    element: periodicIcon,
    enter: function () {
      periodicAnimation.play();
    }
  });
  
  let goalsVisible = new Waypoint.Inview({
    element: goalIcon,
    enter: function () {
      goalsAnimation.play();
    }
  });
  
  let halalVisible = new Waypoint.Inview({
    element: halalIcon,
    enter: function () {
      halalAnimation.play();
    }
  });
  
  let cirlcesVisible = new Waypoint.Inview({
    element: circlesIcon,
    enter: function () {
      circlesAnimation.play();
    }
  });
}
let amountPerWeekText = document.getElementById("amountPerWeek")

function travelCalculator(endDate, amount) {
  let date = new Date()
  let newDate = `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
  let savedDate = ''

  if (window.localStorage.getItem('startDate')) {
    savedDate = window.localStorage.getItem('startDate')
    if (savedDate != newDate) {
      window.localStorage.removeItem('startDate')
      savedDate = newDate
    }
  }
  else {
    window.localStorage.setItem('startDate', newDate)
    savedDate = newDate
  }
  
  const timeDiff = new Date(endDate) - new Date(savedDate)
  const weeks = (timeDiff / (1000 * 60 * 60 * 24)) / 7
  const amountPerWeek = parseInt((amount / weeks)).toLocaleString()
  amountPerWeekText.innerText = '( ₦ ' + amountPerWeek + ' '
}