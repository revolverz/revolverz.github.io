(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3e740fc8":"71720752"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3e740fc8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3e740fc8":"13a01b2c"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"26e7":function(e,t,n){"use strict";n("29ca")},"29ca":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ExchangeRates")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"rates-wrapper"},[n("section",{staticClass:"rates-list-content"},[n("h2",{staticClass:"title"},[e._v("Курс валют к рублю")]),n("list-exchange-rates",{on:{"open-converter":function(t){return e.goToConverter(t)}}})],1),e.isConverterOpened?n("rate-converter",{staticClass:"rate-converter",attrs:{rate:e.rate},on:{"close-converter":function(t){e.isConverterOpened=!1}}}):e._e()],1)},c=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"search"},[n("label",[n("p",{staticClass:"search__label"},[e._v("Поиск:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search__input",attrs:{type:"search",placeholder:"Начните набирать символ..."},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.getAndFilterRates]}})])]),e.listRates.length?n("div",[n("ul",{staticClass:"rate-list"},e._l(e.listRates,(function(t){return n("li",{key:t.ID,staticClass:"rate-elem",on:{click:function(n){return e.openConverter(t)}}},[n("div",{staticClass:"rate-type"},[n("p",{staticClass:"rate-elem__charcode"},[e._v(e._s(t.CharCode))]),n("div",{staticClass:"rate-elem__nominal"},[e._v(" "+e._s(t.Nominal)+" "+e._s(t.Name)+" ")])]),n("span",{staticClass:"rate-elem__value"},[e._v(e._s(t.Value))])])})),0),e.isNeedShowMore?n("button",{staticClass:"show-more-btn",on:{click:e.getAndAddRatesPortion}},[e._v(" Показать еще... ")]):e._e()]):n("p",[e._v("Ничего не найдено!")])])}),u=[],l=n("2909"),p=n("1da1"),f=(n("4de4"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("841c"),n("466d"),n("99af"),n("96cf"),n("fb6a"),n("d81d"),n("b64b"),"https://www.cbr-xml-daily.ru/daily_json.js"),d=10,h=n("bc3a"),v=n.n(h),m=function(e,t,n){var r=t*(n-1),a=t*n;return e.slice(r,a)},g=function(e){var t=Object.keys(e).map((function(t){return e[t]}));return t},b=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"get",url:f});case 2:if(t=e.sent,t.data){e.next=5;break}throw"Data fetch error!";case 5:return n=g(t.data.Valute),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return n=e.sent,r=m(n,10,t),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_={name:"ListExchangeRates",data:function(){return{listRates:[],page:0,search:"",isNeedShowMore:!0}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(1);case 3:n=t.sent,e.listRates=Object(l["a"])(n),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{nextPage:function(){return Math.ceil(this.listRates.length/d)+1}},methods:{filterRates:function(e){var t=this;this.isNeedShowMore=!1,this.listRates=e.filter((function(e){var n=new RegExp(t.search,"i");return e.Name.match(n)||e.CharCode.match(n)}))},getAndFilterRates:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b();case 3:n=t.sent,e.filterRates(n),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},addRates:function(e){e.length||(this.isNeedShowMore=!1),this.listRates=[].concat(Object(l["a"])(this.listRates),Object(l["a"])(e))},getAndAddRatesPortion:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.nextPage);case 3:n=t.sent,e.addRates(n),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},openConverter:function(e){this.$emit("open-converter",{rateName:e.CharCode,rateNominal:e.Nominal,rateValue:e.Value})}}},y=_,C=(n("26e7"),n("2877")),x=Object(C["a"])(y,i,u,!1,null,null,null),R=x.exports,O=function(){return n.e("chunk-3e740fc8").then(n.bind(null,"d793"))},j={name:"ExchangeRates",components:{ListExchangeRates:R,RateConverter:O},data:function(){return{isConverterOpened:!1,rate:{name:"",nominal:0,value:0}}},methods:{goToConverter:function(e){var t=e.rateName,n=e.rateNominal,r=e.rateValue;this.isConverterOpened=!0,this.rate.name=t,this.rate.nominal=n,this.rate.value=r,window.scrollTo({top:0})}}},k=j,E=(n("d127"),Object(C["a"])(k,s,c,!1,null,null,null)),N=E.exports,P={name:"App",components:{ExchangeRates:N}},A=P,S=(n("034f"),Object(C["a"])(A,a,o,!1,null,null,null)),T=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},7868:function(e,t,n){},"85ec":function(e,t,n){},d127:function(e,t,n){"use strict";n("7868")}});
//# sourceMappingURL=app.91c0efb3.js.map