(function(t){function e(e){for(var r,n,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-006bcef1":"ead0adaa"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-006bcef1":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-006bcef1":"49877acc"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],d.parentNode.removeChild(d),a(o)},d.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,a[1](p)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("AppBar"),a("v-container",[a("br"),a("router-view",{attrs:{state:t.state}}),a("div",[t.error?a("v-alert",{attrs:{type:"error"}},[t._v("Something went wrong 😐 "),a("br"),t._v(t._s(t.error))]):t._e()],1)],1)],1)},s=[],o=(a("96cf"),a("1da1")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-app-bar",{attrs:{id:"home-app-bar",app:"",elevation:"1",height:"60","hide-on-scroll":""}},[a("div",[a("v-toolbar-title",{staticClass:"heading, font-weight-bold",attrs:{"min-width":"96"}},[t._v("D2E Exporter")])],1),a("v-spacer"),a("div",[a("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{optional:""}},t._l(t.items,(function(e,r){return a("v-tab",{key:r,staticClass:"font-bold",attrs:{to:{name:e},exact:"Overview"===e,ripple:!1,"active-class":"text--secondary","min-width":"96",text:""}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)},c=[],u={name:"MainPage",data:function(){return{items:["Overview","Download"]}}},l=u,p=a("2877"),d=a("6544"),v=a.n(d),f=a("40dc"),h=a("a523"),m=a("2fa4"),b=a("71a3"),y=a("fe57"),g=a("2a7f"),w=Object(p["a"])(l,i,c,!1,null,null,null),_=w.exports;v()(w,{VAppBar:f["a"],VContainer:h["a"],VSpacer:m["a"],VTab:b["a"],VTabs:y["a"],VToolbarTitle:g["a"]});var C=a("d3a4"),x={components:{AppBar:_},data:function(){return{state:[],error:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C["a"].getState();case 3:t.state=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},O=x,S=(a("5c0b"),a("0798")),k=a("7496"),j=Object(p["a"])(O,n,s,!1,null,null,null),V=j.exports;v()(j,{VAlert:S["a"],VApp:k["a"],VContainer:h["a"]});var A=a("f309");r["a"].use(A["a"]);var T=new A["a"]({}),E=(a("d3b7"),a("8c4f")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",{staticClass:"OVTitle"},[t._v("Overview")]),t.importState?a("v-card",{staticClass:"pa-1 overview"},[a("v-alert",{staticClass:"text--accent-1 ma-2",attrs:{dense:"",type:"success"}},[t._v("Last import at "),a("span",{staticClass:"lastImport"},[t._v(t._s(this.lastImport))])]),a("v-card-text",[a("div",[t._v("Total tags in scope")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.validObjects)+" ")]),a("div",{staticClass:"pieChartSubSystem"}),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("div",[t._v("S7 tags")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.S7Values)+" ")])]),a("v-col",{attrs:{cols:"3"}},[a("div",[t._v("BAC tags")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.BACValues)+" ")])])],1),a("v-row",[a("v-col",[a("div",[t._v("Analog tags")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.analogValues)+" ")])]),a("v-col",[a("div",[t._v("Binary tags")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.binaryValues)+" ")])]),a("v-col",[a("div",[t._v("Desigo server tags")]),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(this.dash.summary.desigoCCValues)+" ")])])],1)],1)],1):t._e(),t.importState?t._e():a("v-alert",{staticClass:"error"},[t._v("No data import yet 😥 ... "),a("br"),t._v("Ask siemens for help🧠")])],1)},D=[],L={name:"Overview",data:function(){return{dash:"",lastImport:"",importState:!1}},mounted:function(){this.getOverview()},methods:{getOverview:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C["a"].getState();case 3:t.dash=e.sent,t.lastImport=t.parseDate(t.dash.summary.updated_at),t.importState=t.dash.importState,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.importState=!1;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},parseDate:function(t){return new Date(t).toDateString()}}},B=L,N=(a("b7c8"),a("b0af")),R=a("99d9"),I=a("62ad"),M=a("0fd9"),F=Object(p["a"])(B,P,D,!1,null,"1bb762d6",null),$=F.exports;v()(F,{VAlert:S["a"],VCard:N["a"],VCardText:R["a"],VCol:I["a"],VContainer:h["a"],VRow:M["a"]}),r["a"].use(E["a"]);var U=new E["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}},routes:[{path:"/",name:"Overview",component:$},{path:"/download",name:"Download",component:function(){return a.e("chunk-006bcef1").then(a.bind(null,"fc69"))}}]}),q=U;r["a"].config.productionTip=!1,new r["a"]({vuetify:T,router:q,render:function(t){return t(V)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},b7c8:function(t,e,a){"use strict";var r=a("ccd0"),n=a.n(r);n.a},ccd0:function(t,e,a){},d3a4:function(t,e,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var r=a("d4ec"),n=a("bee2"),s=a("bc3a"),o=a.n(s),i="api/v1/",c=function(){function t(){Object(r["a"])(this,t)}return Object(n["a"])(t,null,[{key:"getState",value:function(){return new Promise((function(t,e){return o.a.get(i).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}},{key:"getAliasList",value:function(){var t=this;return new Promise((function(e,a){return o.a.get(i+"/aliasList",{responseType:"arraybuffer"}).then((function(a){e(t.forceFileDownload(a,"alias_list"))})).catch((function(t){a(t)}))}))}},{key:"getClientList",value:function(t){var e=this;return new Promise((function(a,r){return o.a.get(i+"downloadClientList",{params:{clientNumber:t},responseType:"arraybuffer"}).then((function(r){a(e.forceFileDownload(r,"client"+t))})).catch((function(t){r(t)}))}))}},{key:"forceFileDownload",value:function(t,e){var a=window.URL.createObjectURL(new Blob([t.data])),r=document.createElement("a");r.href=a,r.setAttribute("download",e+".xlsx"),document.body.appendChild(r),r.click()}}]),t}();e["a"]=c}});
//# sourceMappingURL=app.efc41c26.js.map