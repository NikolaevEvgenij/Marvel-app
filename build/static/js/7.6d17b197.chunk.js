(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{223:function(t,e,r){"use strict";r.r(e);var n=r(4),a=r(1),o=r(0),c=r(32),i=r(68),s=r(51),u=r(2);e.default=function(t){var e=t.Component,r=t.dataType,l=Object(o.useState)(null),f=Object(n.a)(l,2),h=f[0],p=f[1],d=Object(a.g)().id,v=Object(c.a)(),m=v.process,g=v.setProcess,b=v.getComic,y=v.getCharacter,x=v.clearError;Object(o.useEffect)((function(){switch(x(),r){case"comic":b(d).then(j).then((function(){return g("confirmed")}));break;default:y(d).then(j).then((function(){return g("confirmed")}))}}),[]);var j=function(t){p(t)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{}),Object(s.a)(m,e,h)]})}},26:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",a=r(2);e.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error Gif"})}},32:function(t,e,r){"use strict";var n=r(33),a=r.n(n),o=r(34),c=r(4),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(c.a)(t,2),r=e[0],n=e[1];return{request:Object(i.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(e){var r,o,c,i,s,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",o=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return s=t.sent,t.abrupt("return",s);case 16:throw t.prev=16,t.t0=t.catch(4),n("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),setProcess:n,process:r}}(),e=t.request,r=t.clearError,n=t.process,s=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=6384ce9cf17f02f85ebfa13f965d5627",f=400,h=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},p=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",language:t.textObjects.language||"en-us",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}},d=function(){var t=Object(o.a)(a.a.mark((function t(){var r,n,o=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:f,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return h(t)})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",h(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(r,"&").concat(l));case 2:if((n=t.sent).data.total){t.next=5;break}return t.abrupt("return",n="");case 5:return console.log(n),t.abrupt("return",h(n.data.results[0]));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{clearError:r,process:n,setProcess:s,getAllCharacters:d,getCharacter:v,getComics:function(){var t=Object(o.a)(a.a.mark((function t(){var r,n,o=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:f,t.next=3,e("".concat(u,"comics?limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return p(t)})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getComic:function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",p(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getCharacterByName:m}}},33:function(t,e,r){t.exports=r(54)},34:function(t,e,r){"use strict";function n(t,e,r,n,a,o,c){try{var i=t[o](c),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,s,"next",t)}function s(t){n(c,a,o,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},35:function(t,e,r){"use strict";var n=r(2);e.a=function(){return Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"0 auto",background:"rgb(255, 255, 255)",display:"block",shapeRendering:"auto",width:"250px",height:"250px"},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(n.jsx)("circle",{cx:"41",cy:"50",fill:"#000000",r:"9",children:Object(n.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"-0.5617977528089888s"})}),Object(n.jsx)("circle",{cx:"59",cy:"50",fill:"#ff0000",r:"9",children:Object(n.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"0s"})}),Object(n.jsxs)("circle",{cx:"41",cy:"50",fill:"#000000",r:"9",children:[Object(n.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1.1235955056179776s",keyTimes:"0;0.5;1",values:"41;59;41",begin:"-0.5617977528089888s"}),Object(n.jsx)("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1.1235955056179776s",repeatCount:"indefinite"})]})]})}},51:function(t,e,r){"use strict";r(55);var n=r(2),a=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})},o=r(35),c=r(26);e.a=function(t,e,r){switch(t){case"waiting":return Object(n.jsx)(a,{});case"loading":return Object(n.jsx)(o.a,{});case"error":return Object(n.jsx)(c.a,{});case"confirmed":return Object(n.jsx)(e,{data:r});default:throw new Error("Unexpected process state")}}},54:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),c=new N(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=_(c,r);if(i){if(i===v)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function b(){}var y={};s(y,o,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(C([])));j&&j!==r&&n.call(j,o)&&(y=j);var w=b.prototype=m.prototype=Object.create(y);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=b,s(w,"constructor",b),s(b,"constructor",g),g.displayName=s(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new k(u(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(w),s(w,i,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},55:function(t,e,r){},67:function(t,e,r){},68:function(t,e,r){"use strict";r(67);var n=r.p+"static/media/Avengers.4065c8f9.png",a=r.p+"static/media/Avengers_logo.9eaf2193.png",o=r(2);e.a=function(){return Object(o.jsxs)("div",{className:"app__banner ",children:[Object(o.jsx)("img",{src:n,alt:"Avengers"}),Object(o.jsxs)("div",{className:"app__banner-text mt-3",children:["New comics every week!",Object(o.jsx)("br",{}),"Stay tuned!"]}),Object(o.jsx)("img",{src:a,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=7.6d17b197.chunk.js.map