(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"26e7":function(e,t,r){"use strict";r("29ca")},"29ca":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ExchangeRates")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rates-wrapper"},[r("section",{staticClass:"rates-list-content"},[r("h2",{staticClass:"title"},[e._v("Курс валют к рублю")]),r("list-exchange-rates",{on:{"open-converter":function(t){return e.goToConverter(t)}}})],1),e.isConverterOpened?r("rate-converter",{staticClass:"rate-converter",attrs:{rate:e.rate}}):e._e()],1)},i=[],c=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"search"},[r("label",[r("p",{staticClass:"search__label"},[e._v("Поиск:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search__input",attrs:{type:"search",placeholder:"Начните набирать символ..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e.filteredRates.length?r("div",[r("ul",{staticClass:"rate-list"},e._l(e.filteredRates,(function(t){return r("li",{key:t.ID,staticClass:"rate-elem",on:{click:function(r){return e.openConverter(t)}}},[r("div",{staticClass:"rate-type"},[r("p",{staticClass:"rate-elem__charcode"},[e._v(e._s(t.CharCode))]),r("div",{staticClass:"rate-elem__nominal"},[e._v(" "+e._s(t.Nominal)+" "+e._s(t.Name)+" ")])]),r("span",{staticClass:"rate-elem__value"},[e._v(e._s(t.Value))])])})),0),r("button",{staticClass:"get-rates-btn",on:{click:e.addRates}},[e._v(" Показать еще... ")])]):r("p",[e._v("Ничего не найдено!")])])}),u=[],l=r("2909"),p=r("1da1"),f=(r("4de4"),r("d3b7"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("841c"),r("466d"),r("99af"),r("96cf"),r("fb6a"),r("d81d"),r("b64b"),"https://www.cbr-xml-daily.ru/daily_json.js"),v=10,d=r("bc3a"),m=r.n(d),h=function(e,t,r){var n=t*(r-1),a=t*r;return e.slice(n,a)},_=function(e){var t=Object.keys(e).map((function(t){return e[t]}));return t},b=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m()({method:"get",url:f});case 2:if(r=e.sent,r.data){e.next=5;break}throw"Data fetch error!";case 5:return n=_(r.data.Valute),a=h(n,10,t),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={name:"ListExchangeRates",data:function(){return{listRates:[],page:0,search:""}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(1);case 3:r=t.sent,e.listRates=Object(l["a"])(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},computed:{nextPage:function(){return Math.ceil(this.listRates.length/v)+1},filteredRates:function(){var e=this,t=this.listRates.filter((function(t){var r=new RegExp(e.search,"i");return t.Name.match(r)||t.CharCode.match(r)}));return t}},methods:{openConverter:function(e){this.$emit("open-converter",{rateName:e.CharCode,rateNominal:e.Nominal,rateValue:e.Value})},addRates:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(e.nextPage);case 3:r=t.sent,e.listRates=[].concat(Object(l["a"])(e.listRates),Object(l["a"])(r)),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},C=g,x=(r("26e7"),r("2877")),w=Object(x["a"])(C,c,u,!1,null,null,null),y=w.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"rate-converter"},[n("div",{staticClass:"rate-converter__wrapper"},[n("div",{staticClass:"rate-converter__input-wrapper rate-converter__input-wrapper_type_rubles"},[n("label",[n("p",{staticClass:"rate-converter__input-label"},[e._v("В рублях")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rubAmount,expression:"rubAmount"}],staticClass:"rate-converter__input rate-converter__input_type_rubles",attrs:{type:"text",placeholder:"0"},domProps:{value:e.rubAmount},on:{keyup:e.rubToForeign,input:function(t){t.target.composing||(e.rubAmount=t.target.value)}}}),n("p",{staticClass:"rate-converter__input-hint"},[e._v(" 1 RUR = "+e._s(e.currentRubleExchangeRate)+" ")])])]),n("img",{staticClass:"rate-converter__arrow-picture",attrs:{src:r("b94f"),alt:"Конвертация"}}),n("div",{staticClass:"rate-converter__input-wrapper rate-converter__input-wrapper_type_foreign"},[n("label",[n("p",{staticClass:"rate-converter__input-label"},[e._v(e._s(e.rate.name))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foreignAmount,expression:"foreignAmount"}],staticClass:"rate-converter__input rate-converter__input_type_foreign",attrs:{type:"text",placeholder:"0"},domProps:{value:e.foreignAmount},on:{keyup:e.foreignToRub,input:function(t){t.target.composing||(e.foreignAmount=t.target.value)}}}),n("p",{staticClass:"rate-converter__input-hint"},[e._v(" 1 "+e._s(e.rate.name)+" = "+e._s(e.rate.value.toFixed(4))+" ")])])]),n("button",{staticClass:"rate-converter__reset-values-btn",on:{click:e.resetValues}},[e._v(" Сбросить значения ")])])])},O=[],j=(r("b680"),{props:{rate:{type:Object,required:!0}},data:function(){return{rubAmount:"",foreignAmount:""}},computed:{currentRubleExchangeRate:function(){var e=1/this.rate.value;return e.toFixed(4)}},methods:{foreignToRub:function(){this.rubAmount=this.foreignAmount*this.rate.value},rubToForeign:function(){this.foreignAmount=this.rubAmount/this.rate.value*this.rate.nominal},resetValues:function(){this.rubAmount="",this.foreignAmount=""}}}),A=j,k=(r("f81a"),Object(x["a"])(A,R,O,!1,null,null,null)),E=k.exports,P={name:"ExchangeRates",components:{ListExchangeRates:y,RateConverter:E},data:function(){return{isConverterOpened:!1,rate:{name:"",nominal:0,value:0}}},methods:{goToConverter:function(e){var t=e.rateName,r=e.rateNominal,n=e.rateValue;this.isConverterOpened=!0,this.rate.name=t,this.rate.nominal=r,this.rate.value=n,window.scrollTo({top:0})}}},N=P,T=(r("e9e7"),Object(x["a"])(N,o,i,!1,null,"4589e32b",null)),V=T.exports,$={name:"App",components:{ExchangeRates:V}},M=$,S=(r("034f"),Object(x["a"])(M,a,s,!1,null,null,null)),F=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(F)}}).$mount("#app")},"72da":function(e,t,r){},"776b":function(e,t,r){},"85ec":function(e,t,r){},b94f:function(e,t,r){e.exports=r.p+"img/arrow.9ab8a26c.svg"},e9e7:function(e,t,r){"use strict";r("72da")},f81a:function(e,t,r){"use strict";r("776b")}});
//# sourceMappingURL=app.01ab047c.js.map