(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={2:0},o={2:0},s=[];function c(e){return i.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"931c6a3e",3:"76dc7cf5",4:"25767b9b",5:"e8c42d0f",6:"c494979a",7:"093158b5",8:"44bea162",9:"0932469e",10:"cda22eda",11:"523a674d",12:"43c33161",13:"42d4af17"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={3:1,4:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"31d6cfe0",3:"d1e7de51",4:"f2faaa67",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],l.parentNode.removeChild(l),n(s)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"07bf":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"syncApiKeys",(function(){return ze})),n.d(r,"syncExchanges",(function(){return Ie}));var a={};n.r(a),n.d(a,"initApiKeys",(function(){return He})),n.d(a,"initExchanges",(function(){return Me}));var o={};n.r(o),n.d(o,"addImport",(function(){return Ke})),n.d(o,"syncImports",(function(){return We})),n.d(o,"updateImport",(function(){return Be}));var s={};n.r(s),n.d(s,"syncImports",(function(){return Ye})),n.d(s,"updateImport",(function(){return Fe})),n.d(s,"addImport",(function(){return Ve}));var c={};n.r(c),n.d(c,"connected",(function(){return Ze}));var i={};n.r(i),n.d(i,"SET_GLOBAL_WARNING",(function(){return et}));var u={};n.r(u),n.d(u,"setGlobalWarning",(function(){return tt}));var d={};n.r(d),n.d(d,"result",(function(){return at}));var f={};n.r(f),n.d(f,"setResult",(function(){return ot})),n.d(f,"setFixedCandles",(function(){return st}));var l={};n.r(l),n.d(l,"setBacktestResult",(function(){return ut}));var p={};n.r(p),n.d(p,"list",(function(){return lt})),n.d(p,"archive",(function(){return pt}));var b={};n.r(b),n.d(b,"syncGekkos",(function(){return wt})),n.d(b,"addGekko",(function(){return xt})),n.d(b,"updateGekko",(function(){return Qt})),n.d(b,"archiveGekko",(function(){return _t})),n.d(b,"errorGekko",(function(){return St})),n.d(b,"deleteGekko",(function(){return Ct}));var m=n("7ec2"),h=n.n(m),k=n("c973"),g=n.n(k),v=(n("ac1f"),n("5319"),n("7d6e"),n("e54f"),n("573e"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("2248"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af241"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("62f2"),n("7e6d"),n("2b0e")),j=n("b05d"),y=n("54e1"),w=n("58a81"),x=n("9c40"),Q=n("f09f"),_=n("4b7e"),S=n("a370"),C=n("8f8e"),T=n("b047"),$=n("52ee"),G=n("24e8"),A=n("8572"),P=n("0016"),E=n("27f9"),O=n("66e5"),z=n("0170"),I=n("4074"),R=n("3845"),D=n("4d5a"),N=n("9404"),H=n("7ff0"),M=n("e359"),L=n("1c1c"),U=n("9f0a"),q=n("9989"),K=n("09e3"),W=n("7cbe"),B=n("6b1d"),Y=n("58ea"),F=n("3786"),V=n("7867"),J=n("4983"),X=n("ddd8"),Z=n("eb85"),ee=n("2c91"),te=n("0d59"),ne=n("a154"),re=n("8380"),ae=n("9569"),oe=n("7460"),se=n("823b"),ce=n("adad"),ie=n("eaac"),ue=n("db86"),de=n("bd08"),fe=n("429b"),le=n("ca78"),pe=n("65c6"),be=n("6ac5"),me=n("714f"),he=n("2a19"),ke=n("436b");v["a"].use(j["a"],{config:{},components:{QBanner:y["a"],QBadge:w["a"],QBtn:x["a"],QCard:Q["a"],QCardActions:_["a"],QCardSection:S["a"],QCheckbox:C["a"],QChip:T["a"],QDate:$["a"],QDialog:G["a"],QField:A["a"],QIcon:P["a"],QInput:E["a"],QItem:O["a"],QItemLabel:z["a"],QItemSection:I["a"],QKnob:R["a"],QLayout:D["a"],QDrawer:N["a"],QFooter:H["a"],QHeader:M["a"],QList:L["a"],QOptionGroup:U["a"],QPage:q["a"],QPageContainer:K["a"],QPopupProxy:W["a"],QLinearProgress:B["a"],QCircularProgress:Y["a"],QRadio:F["a"],QRouteTab:V["a"],QScrollArea:J["a"],QSelect:X["a"],QSeparator:Z["a"],QSpace:ee["a"],QSpinner:te["a"],QSpinnerBars:ne["a"],QSpinnerDots:re["a"],QSpinnerRadio:ae["a"],QTab:oe["a"],QTabPanel:se["a"],QTabPanels:ce["a"],QTable:ie["a"],QTd:ue["a"],QTr:de["a"],QTabs:fe["a"],QTime:le["a"],QToolbar:pe["a"],QToolbarTitle:be["a"]},directives:{Ripple:me["a"]},plugins:{Notify:he["a"],Dialog:ke["a"]}});var ge=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view"),t("q-dialog",{attrs:{value:!e.connected,persistent:""}},[t("q-card",{staticClass:"bg-white q-pa-md"},[t("div",{staticClass:"text-h6 text-negative"},[e._v("Disconnected")]),t("p",[e._v("Something happened to either Gekko or the connection. "),t("br"),e._v("\n        Please check the terminals where Gekko is running "),t("em",[e._v("or")]),e._v(" your network connection.\n      ")]),t("q-separator"),t("p",{staticClass:"text-secondary text-center"},[e._v("I'm trying to re-establish the connection...")]),t("div",{staticClass:"row justify-center"},[t("q-spinner-radio",{attrs:{color:"secondary",size:"16px"}})],1)],1)],1)],1)},ve=[],je=n("ded3"),ye=n.n(je),we=(n("7db0"),n("d3b7"),n("2ef0")),xe=n.n(we),Qe=n("2f62"),_e={name:"App",computed:ye()({},Object(Qe["b"])("warnings",["connected"])),created:function(){this.$eventbus.$on("import_update",this.updateEvent)},methods:{updateEvent:function(e){if(e.updates&&e.updates.done){var t=xe.a.find(this.$store.state.imports.imports,(function(t){return t.id===e.import_id})),n=t&&t.watch?t.watch.exchange+" "+t.watch.currency+"-"+t.watch.asset:"unknown";this.$q.notify({message:"Import for "+n+" done.",type:"positive"})}}},beforeDestroy:function(){this.$eventbus.$off("import_update",this.updateEvent)}},Se=_e,Ce=n("2877"),Te=n("eebe"),$e=n.n(Te),Ge=Object(Ce["a"])(Se,ge,ve,!1,null,null,null),Ae=Ge.exports;$e()(Ge,"components",{QDialog:G["a"],QCard:Q["a"],QSeparator:Z["a"],QSpinnerRadio:ae["a"]});var Pe=n("af47"),Ee={apiKeys:[],exchanges:{},apiBaseUrl:Pe["a"]},Oe=n("07bf"),ze=function(e,t){return v["a"].set(e,"apiKeys",t),e},Ie=function(e,t){return v["a"].set(e,"exchanges",t),e},Re=n("278c"),De=n.n(Re),Ne=(n("4160"),n("159b"),n("14d9"),function(e){var t=e,n={};return t.forEach((function(e){n[e.slug]=n[e.slug]||{markets:{}},e.markets.forEach((function(t){var r=De()(t["pair"],2),a=r[0],o=r[1];n[e.slug].markets[a]=n[e.slug].markets[a]||[],n[e.slug].markets[a].push(o)})),"exchangeMaxHistoryAge"in e&&(n[e.slug].exchangeMaxHistoryAge=e.exchangeMaxHistoryAge),n[e.slug].importable=!!e.providesFullHistory,n[e.slug].tradable=!!e.tradable,n[e.slug].requires=e.requires})),n}),He=function(e,t){var n=e.commit;n("syncApiKeys",t)},Me=function(e,t){var n=e.commit;n("syncExchanges",Ne(t))},Le={namespaced:!0,state:Ee,getters:Oe,mutations:r,actions:a},Ue={imports:[]},qe=n("9638"),Ke=(n("c740"),function(e,t){return e.imports.push(t),e}),We=function(e,t){return e.imports=t,e},Be=function(e,t){var n=e.imports.findIndex((function(e){return e.id===t.import_id})),r=e.imports[n];if(!r)return e;var a=v["a"].util.extend(r,t.updates);return v["a"].set(e.imports,n,a),e},Ye=function(e,t){var n=e.commit;n("syncImports",t)},Fe=function(e,t){var n=e.commit;n("updateImport",t)},Ve=function(e,t){var n=e.commit;n("addImport",t)},Je={namespaced:!0,state:Ue,getters:qe,mutations:o,actions:s},Xe={connected:!0},Ze=function(e){return e.connected},et=function(e,t){return e[t.key]=t.value,e},tt=(n("e6cf"),function(){var e=g()(h()().mark((function e(t,n){var r;return h()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.abrupt("return",new Promise((function(e,t){r("SET_GLOBAL_WARNING",n),e()})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),nt={namespaced:!0,state:Xe,getters:c,mutations:i,actions:u},rt={backtestResult:{}},at=function(e){return e.backtestResult},ot=function(e,t){e.backtestResult=t},st=function(e,t){e.backtestResult.stratCandles=t},ct=(n("d81d"),n("c1df")),it=n.n(ct),ut=function(e,t){return new Promise((function(n){t&&(xe.a.has(t,"stratCandles")&&t.stratCandles.length>0&&(t.stratCandles=t.stratCandles.map((function(e){return e.start=it.a.unix(e.start).format("YYYY-MM-DD HH:mm"),e}))),xe.a.has(t,"stratUpdates")&&t.stratUpdates.length>0&&(t.stratUpdates=t.stratUpdates.map((function(e){return e.date=it.a.unix(e.date).format("YYYY-MM-DD HH:mm"),e}))),xe.a.has(t,"trades")&&t.trades.length>0&&(t.trades=t.trades.map((function(e){return e.date=it.a.unix(e.date).format("YYYY-MM-DD HH:mm"),e})))),e.commit("setResult",t),n()}))},dt={namespaced:!0,state:rt,getters:d,mutations:f,actions:l},ft={gekkos:null,archivedGekkos:null},lt=function(e){return e.gekkos},pt=function(e){return e.archivedGekkos},bt=n("9523"),mt=n.n(bt),ht=n("448a"),kt=n.n(ht),gt=(n("0d03"),n("caad"),n("99af"),["marketUpdate"]),vt=["marketStart","stratWarmupCompleted"],jt=["tradeCompleted","advice","roundtrip"],yt=function(e,t){var n=t.type,r=t.payload;return e=ye()(ye()({},e),{},{latestUpdate:new Date}),jt.includes(n)&&(e=e.events[n]?ye()(ye()({},e),{},{events:ye()(ye()({},e.events),{},mt()({},n,[].concat(kt()(e.events[n]),[r])))}):ye()(ye()({},e),{},{events:ye()(ye()({},e.events),{},mt()({},n,[r]))})),e.events.initial[n]||gt.includes(n)||(e=ye()(ye()({},e),{},{events:ye()(ye()({},e.events),{},{initial:ye()(ye()({},e.events.initial),{},mt()({},n,r))})})),vt.includes(n)||(e=ye()(ye()({},e),{},{events:ye()(ye()({},e.events),{},{latest:ye()(ye()({},e.events.latest),{},mt()({},n,r))})})),e},wt=function(e,t){return t?(e.gekkos=t.live,e.archivedGekkos=t.archive,e):e},xt=function(e,t){return e.gekkos=ye()(ye()({},e.gekkos),{},mt()({},t.id,t)),e},Qt=function(e,t){return t.id&&xe.a.has(e.gekkos,t.id)?(e.gekkos=ye()(ye()({},e.gekkos),{},mt()({},t.id,yt(e.gekkos[t.id],t.event))),e):console.error("cannot update unknown gekko..")},_t=function(e,t){return xe.a.has(e.gekkos,t)?(e.archivedGekkos=ye()(ye()({},e.archivedGekkos),{},mt()({},t,ye()(ye()({},e.gekkos[t]),{},{stopped:!0,active:!1}))),e.gekkos=xe.a.omit(e.gekkos,t),e):console.error("cannot archive unknown gekko..")},St=function(e,t){return xe.a.has(e.gekkos,t.id)?(e.gekkos=ye()(ye()({},e.gekkos),{},mt()({},t.id,ye()(ye()({},e.gekkos[t.id]),{},{errored:!0,errorMessage:t.error}))),e):console.error("cannot error unknown gekko..")},Ct=function(e,t){return xe.a.has(e.archivedGekkos,t)?(e.archivedGekkos=xe.a.omit(e.archivedGekkos,t),e):console.error("cannot delete unknown gekko..")},Tt=n("5598"),$t={namespaced:!0,state:ft,getters:p,mutations:b,actions:Tt};v["a"].use(Qe["a"]);var Gt=new Qe["a"].Store({modules:{config:Le,imports:Je,warnings:nt,backtest:dt,gekkos:$t}}),At=Gt,Pt=n("8c4f"),Et=(n("e260"),n("3ca3"),n("ddb0"),[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"7b3d"))},children:[{path:"",component:function(){return n.e(3).then(n.bind(null,"9261"))}},{path:"live-gekkos",component:function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"21be"))}},{path:"live-gekkos/new",component:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"d987"))}},{path:"live-gekkos/:id",component:function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,"99fd"))}},{path:"backtest",component:function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,"eb64"))}},{path:"data",component:function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"d7c4"))}},{path:"data/importer",component:function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"8e5a"))}},{path:"data/importer/import/:id",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"836f"))}},{path:"config",component:function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,"031f"))}},{path:"help",beforeEnter:function(e,t,n){window.open("https://github.com/universalbit-dev/gekko-m4","_blank")}}]},{path:"*",component:function(){return n.e(6).then(n.bind(null,"ee5d"))}}]);v["a"].use(Pt["a"]);var Ot=new Pt["a"]({mode:"hash",base:"",scrollBehavior:function(){return{y:0}},routes:Et}),zt=Ot,It=function(){return Rt.apply(this,arguments)};function Rt(){return Rt=g()(h()().mark((function e(){var t,n,r;return h()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof At){e.next=6;break}return e.next=3,At({Vue:v["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=At;case 7:if(t=e.t0,"function"!==typeof zt){e.next=14;break}return e.next=11,zt({Vue:v["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=zt;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(Ae)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),Rt.apply(this,arguments)}var Dt=n("a925"),Nt={failed:"Action failed",success:"Action was successful"},Ht={en:Nt},Mt=function(e){var t=e.app,n=e.Vue;n.use(Dt["a"]),t.i18n=new Dt["a"]({locale:"en",fallbackLocale:"en",messages:Ht})},Lt=(n("4795"),n("bc3a")),Ut=n.n(Lt),qt=null,Kt=function(e){e.app,e.router;var t=e.Vue,n=e.store;t.prototype.$axios=Ut.a;var r=new t;r.$on("gekko_error",(function(e){alert("GEKKO ERROR: "+e.error)})),r.$on("import_error",(function(e){alert("IMPORT ERROR: "+e.error)}));var a={connected:!1},o=function(){qt=new ReconnectingWebSocket(Pe["b"]),setTimeout((function(){a.connected||r.$emit("WS_STATUS_CHANGE",a)}),500),qt.onopen=function(){a.connected||(a.connected=!0,r.$emit("WS_STATUS_CHANGE",a))},qt.onclose=function(){a.connected&&(a.connected=!1,r.$emit("WS_STATUS_CHANGE",a))},qt.onerror=function(){a.connected&&(a.connected=!1,r.$emit("WS_STATUS_CHANGE",a))},qt.onmessage=function(e){var t=JSON.parse(e.data);r.$emit(t.type,t)}};Ut.a.get(Pe["a"]+"apiKeys").then((function(e){n.dispatch("config/initApiKeys",e.data)})),Ut.a.get(Pe["a"]+"exchanges").then((function(e){n.dispatch("config/initExchanges",e.data)})),r.$on("apiKeys",(function(e){n.dispatch("config/initApiKeys",e.exchanges)}));var s=function(e){n.dispatch("watchers/updateWatcher",e)};Ut.a.get(Pe["a"]+"gekkos").then((function(e){n.commit("gekkos/syncGekkos",e.data)})),r.$on("new_gekko",(function(e){"watcher"===e.gekko.type&&n.dispatch("watchers/addWatcher",e.gekko)})),r.$on("update",s),r.$on("startAt",s),r.$on("lastCandle",s),r.$on("firstCandle",s),r.$on("gekko_new",(function(e){return n.commit("gekkos/addGekko",e.state)})),r.$on("gekko_event",(function(e){return n.commit("gekkos/updateGekko",e)})),r.$on("gekko_archived",(function(e){return n.commit("gekkos/archiveGekko",e.id)})),r.$on("gekko_error",(function(e){return n.commit("gekkos/errorGekko",e)})),r.$on("gekko_deleted",(function(e){return n.commit("gekkos/deleteGekko",e.id)})),Ut.a.get(Pe["a"]+"imports").then((function(e){n.dispatch("imports/syncImports",e.data)})),r.$on("import_update",(function(e){n.dispatch("imports/updateImport",e)})),r.$on("WS_STATUS_CHANGE",(function(e){return n.dispatch("warnings/setGlobalWarning",{key:"connected",value:e.connected})})),r.$on("new_gekko",(function(e){"leech"===e.gekko.type&&n.dispatch("stratrunners/addStratrunner",e.gekko)}));var c=function(e){n.dispatch("stratrunners/updateStratrunner",e)},i=function(e){n.dispatch("stratrunners/addTradeToStratrunner",e)},u=function(e){n.dispatch("stratrunners/addRoundtripToStratrunner",e)};r.$on("report",c),r.$on("trade",i),r.$on("update",c),r.$on("startAt",c),r.$on("lastCandle",c),r.$on("firstCandle",c),r.$on("roundtrip",u),t.prototype.$eventbus=r,o()},Wt="";function Bt(){return Yt.apply(this,arguments)}function Yt(){return Yt=g()(h()().mark((function e(){var t,n,r,a,o,s,c,i,u;return h()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,It();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,o=!1,s=function(e){o=!0;var t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[Mt,Kt],u=0;case 11:if(!(!1===o&&u<i.length)){e.next=29;break}if("function"===typeof i[u]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,i[u]({app:n,router:a,store:r,Vue:v["a"],ssrContext:null,redirect:s,urlPath:c,publicPath:Wt});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:u++,e.next=11;break;case 29:if(!0!==o){e.next=31;break}return e.abrupt("return");case 31:new v["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Yt.apply(this,arguments)}Bt()},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="4678"},5598:function(e,t){},"7e6d":function(e,t,n){},9638:function(e,t){},af47:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n("99af");var r,a,o,s=window.CONFIG.ui,c="".concat(s.host).concat(80===s.port?"":":".concat(s.port)).concat(s.path);r=s.ssl?"https://".concat(c):"http://".concat(c),a=r+"api/",o=s.ssl?"wss://".concat(c,"/api"):"ws://".concat(c,"/api")}});