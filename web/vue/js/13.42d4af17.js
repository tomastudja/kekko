(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"21be":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("list-gekkos")],1)},n=[],s=(r("14d9"),function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"q-mb-md"},[e("div",{staticClass:"text-h5"},[t._v("Market watchers")]),t.watchers.length?t._e():e("q-banner",{staticClass:"bg-blue-grey-3 text-white",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"info",color:"white"}})]},proxy:!0}],null,!1,654320519)},[t._v("\n        You are currently not watching any markets.\n      ")]),t.watchers.length?e("q-table",{attrs:{columns:t.watchColumns,"row-key":"id",data:t.watchers,pagination:{rowsPerPage:0},color:"primary",separator:"horizontal","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(r){return e("q-tr",{attrs:{props:r}},[e("q-td",{key:"exchange",attrs:{props:r}},[t._v("\n            "+t._s(r.row.config.watch.exchange)+"\n          ")]),e("q-td",{key:"pair",attrs:{props:r}},[e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+r.row.config.watch.currency.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[t._v(t._s(r.row.config.watch.currency)+"\n            ")]),t._v("\n            -\n            "),e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+r.row.config.watch.asset.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[t._v(t._s(r.row.config.watch.asset)+"\n            ")])],1),e("q-td",{key:"startedat",attrs:{props:r}},[t._v("\n            "+t._s(t._f("formatDate")(r.row.start?r.row.start:""))+"\n          ")]),e("q-td",{key:"lastupdate",attrs:{props:r}},[t._v("\n            "+t._s(t._f("formatDate")(r.row.latestUpdate?r.row.latestUpdate:""))+"\n          ")]),e("q-td",{key:"duration",attrs:{props:r}},[t._v("\n            "+t._s(r.row.start&&r.row.latestUpdate?t.timespan(r.row.start,r.row.latestUpdate):"")+"\n          ")]),e("q-td",{key:"price",attrs:{props:r}},[t._v("\n            "+t._s(r.row.events.latest.candle?r.row.events.latest.candle.close+" "+r.row.config.watch.currency:"")+"\n          ")]),e("q-td",{key:"actions",attrs:{props:r}},[e("q-btn",{attrs:{size:"sm",color:"secondary",icon:"visibility",label:"view"},on:{click:function(e){return t.$router.push("live-gekkos/".concat(r.row.id))}}})],1)],1)}}],null,!1,1535527551)}):t._e()],1),e("div",{staticClass:"q-mb-md"},[e("div",{staticClass:"text-h5"},[t._v("Strategy Runners")]),t.stratrunners.length?t._e():e("q-banner",{staticClass:"bg-blue-grey-3 text-white",attrs:{"inline-actions":"",rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"info",color:"white"}})]},proxy:!0}],null,!1,654320519)},[t._v("\n        You are currently not running any strategies.\n      ")]),t.stratrunners.length?e("q-table",{attrs:{columns:t.stratColumns,"row-key":"id",data:t.stratrunners,pagination:{rowsPerPage:0},color:"primary",separator:"horizontal","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(r){return e("q-tr",{class:{"bg-green-11":r.row.events.latest.performanceReport&&r.row.events.latest.performanceReport.profit>0,"bg-red-11":r.row.events.latest.performanceReport&&r.row.events.latest.performanceReport.profit<0},attrs:{props:r}},[e("q-td",{key:"type",attrs:{props:r}},[t._v("\n            "+t._s(r.row.logType)+"\n          ")]),e("q-td",{key:"exchange",staticClass:"text-uppercase",attrs:{props:r}},[t._v("\n            "+t._s(r.row.config.watch.exchange)+"\n          ")]),e("q-td",{key:"pair",attrs:{props:r}},[e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+r.row.config.watch.currency.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[t._v(t._s(r.row.config.watch.currency)+"\n            ")]),t._v("\n            -\n            "),e("q-chip",{staticClass:"q-mb-xs",attrs:{avatar:"statics/crypto_icons/color/"+r.row.config.watch.asset.toLowerCase()+".svg",square:"",dense:"",color:"transparent","text-color":"black"}},[t._v(t._s(r.row.config.watch.asset)+"\n            ")])],1),e("q-td",{key:"status",attrs:{props:r}},[r.row.stopped?e("q-chip",{attrs:{square:"",dense:"",icon:"stop","text-color":"white",color:"orange"}},[t._v("Stopped")]):t._e(),r.row.errored?e("q-chip",{attrs:{square:"",dense:"",icon:"error","text-color":"white",color:"negative"}},[t._v("Error")]):t._e(),r.row.active?e("q-chip",{attrs:{square:"",dense:"",icon:"play_arrow","text-color":"white",color:"positive"}},[t._v("Running")]):t._e()],1),e("q-td",{key:"lastupdate",attrs:{props:r}},[t._v("\n            "+t._s(t._f("formatDate")(r.row.events.latest.candle?r.row.events.latest.candle.start:""))+"\n          ")]),e("q-td",{key:"duration",attrs:{props:r}},[t._v("\n            "+t._s(r.row.events.initial.candle&&r.row.events.latest.candle?t.timespan(r.row.events.latest.candle.start,r.row.events.initial.candle.start):"")+"\n          ")]),e("q-td",{key:"strategy",attrs:{props:r}},[t._v("\n            "+t._s(r.row.config.tradingAdvisor?r.row.config.tradingAdvisor.method:"")+"\n          ")]),e("q-td",{key:"trades_rt",attrs:{props:r}},[t._v("\n            "+t._s((r.row.events.tradeCompleted?r.row.events.tradeCompleted.length:0)+" / "+(r.row.events.roundtrip?r.row.events.roundtrip.length:0))+"\n          ")]),e("q-td",{key:"success",attrs:{props:r}},[t._v("\n            "+t._s(r.row.events.roundtrip?t.successRate(r.row.events.roundtrip):"0.00 %")+"\n          ")]),e("q-td",{key:"profit",attrs:{props:r}},[t._v(t._s(r.row.events.latest.performanceReport?t.round(r.row.events.latest.performanceReport.profit):"N/A")+"\n            "+t._s(r.row.events.latest.performanceReport?r.row.config.watch.currency:"")+"\n          ")]),e("q-td",{key:"actions",staticClass:"bg-white",attrs:{props:r}},[e("q-btn",{attrs:{size:"sm",color:"secondary",icon:"visibility",label:"view"},on:{click:function(e){return t.$router.push("live-gekkos/".concat(r.row.id))}}})],1)],1)}}],null,!1,503963581)}):t._e()],1),e("div",[e("div",{staticClass:"text-h4 q-mb-sm"},[t._v("Start a new live Gekko")]),e("q-btn",{attrs:{color:"amber-8"},on:{click:function(e){return e.preventDefault(),t.$router.push("/live-gekkos/new")}}},[t._v("Start a new live Gekko!")])],1)])}),o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"q-mb-md"},[e("div",{staticClass:"text-h4 q-mb-md"},[t._v("Live Gekkos")]),e("div",{staticClass:"text-subtitle"},[t._v("Run your strategy against a live market!")])])}],c=(r("4795"),r("4de4"),r("d3b7"),r("99af"),r("e260"),r("ddb0"),r("c740"),r("4160"),r("159b"),r("b680"),r("c1df")),i=r.n(c),l=r("8f14"),u=r.n(l),p=r("c49e"),d={mixins:[p["a"]],data:function(){return{timer:!1,now:i()(),watchColumns:[{name:"exchange",label:"Exchange"},{name:"pair",label:"Pair"},{name:"startedat",label:"Started at"},{name:"lastupdate",label:"Last update"},{name:"duration",label:"running since"},{name:"price",label:"Price"},{name:"actions",label:"Actions"}],stratColumns:[{name:"type",label:"Type"},{name:"exchange",label:"Exchange"},{name:"pair",label:"Pair"},{name:"status",label:"Status"},{name:"lastupdate",label:"Last update"},{name:"duration",label:"Duration"},{name:"strategy",label:"Strategy"},{name:"trades_rt",label:"Trades/RT"},{name:"success",label:"Successful"},{name:"profit",label:"Profit"},{name:"actions",label:"Actions"}]}},created:function(){var t=this;this.timer=setInterval((function(){t.now=i()()}),1e3)},destroyed:function(){clearTimeout(this.timer)},computed:{stratrunners:function(){return _.values(this.$store.getters["gekkos/list"]).concat(_.values(this.$store.getters["gekkos/archive"])).filter((function(t){switch(t.logType){case"papertrader":return!0;case"tradebot":return!0;default:return!1}}))},watchers:function(){return _.values(this.$store.getters["gekkos/list"]).concat(_.values(this.$store.getters["gekkos/archive"])).filter((function(t){return"watcher"===t.logType}))}},methods:{stopGekko:function(t){var e=this;if(t){var r=_.findIndex(this.stratrunners,(function(e){return e.id==t})),a=-1,n={};if(r>=0){n=this.stratrunners[r].watch;var s=_.filter(this.stratrunners,(function(t){var e=n.asset+n.currency+n.exchange,r=t.watch.asset+t.watch.currency+t.watch.exchange;return e==r}));s.length>1?this.$q.dialog({title:"Stop Live Gekko",color:"warning",message:"Do you really want to stop the Stratrunner for [".concat(n.exchange," ").concat(n.currency,"-").concat(n.asset,"] ?"),ok:"Ok",cancel:"Cancel"}).then((function(){var r=t;e.$axios.post(e.$store.state.config.apiBaseUrl+"killGekko",{id:r}).then((function(r){e.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+t+")"}),e.$store.dispatch("stratrunners/removeRunner",t)}))["catch"]((function(r){e.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+t+")",detail:r})}))})):this.$q.dialog({title:"Stop Live Gekko and market watcher",color:"info",message:"The selected stratrunner\n              for [".concat(n.exchange," ").concat(n.currency,"-").concat(n.asset,"]\n              has a dependant market-watcher. What do you want to do?"),options:{type:"radio",model:"1",items:[{label:"Stop only strategy-runner",value:"1",color:"primary"},{label:"Stop strategy-runner AND market-watcher",value:"2",color:"secondary"}]},ok:"Ok",cancel:"Cancel"}).then((function(r){var a=[];if(a.push(t),"2"==r){var s=_.findIndex(e.watchers,(function(t){return t.watch==n}));s>=0&&a.push(e.watchers[s].id)}var o=e;a.forEach((function(t){o.$axios.post(o.$store.state.config.apiBaseUrl+"killGekko",{id:t}).then((function(e){o.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+t+")"}),o.$store.dispatch("stratrunners/removeRunner",t),o.$store.dispatch("watchers/removeWatcher",t)}))["catch"]((function(e){o.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+t+")",detail:e})}))}))}))}else if(a=_.findIndex(this.watchers,(function(e){return e.id==t})),a>=0){var o=this.watchers[a].watch,c=_.filter(this.stratrunners,(function(t){var e=o.asset+o.currency+o.exchange,r=t.watch.asset+t.watch.currency+t.watch.exchange;return e==r}));c.length>0?this.$q.dialog({title:"This market watcher has dependant runners!",color:"warning",message:"The market watcher for [".concat(o.exchange," ").concat(o.currency,"-").concat(o.asset,"]\n                has ").concat(c.length," dependant strategy-runner(s).\n                Do you want to close ALL of them?"),ok:"Yes, close all!",cancel:"No, do nothing!"}).then((function(){var r=[];r.push(t),c.forEach((function(t){r.push(t.id)}));var a=e;r.forEach((function(t){a.$axios.post(a.$store.state.config.apiBaseUrl+"killGekko",{id:t}).then((function(e){a.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+t+")"}),a.$store.dispatch("stratrunners/removeRunner",t),a.$store.dispatch("watchers/removeWatcher",t)}))["catch"]((function(e){a.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+t+")",detail:e})}))}))})):this.$q.dialog({title:"Stop market watcher",message:"Do you really want to stop the market watcher for [".concat(o.exchange," ").concat(o.currency,"-").concat(o.asset,"] ?"),ok:"Ok",cancel:"Cancel"}).then((function(){e.$axios.post(e.$store.state.config.apiBaseUrl+"killGekko",{id:t}).then((function(r){e.$q.notify({type:"positive",message:"Successfully stopped Gekko (ID "+t+")"}),e.$store.dispatch("watchers/removeWatcher",gekkkoId)}))["catch"]((function(r){e.$q.notify({type:"negative",message:"Error while stopping Gekko (ID "+t+")",detail:r})}))}))}}},status:function(t){return t.errored?"errored":t.stopped?"stopped":t.active?"running":void console.log("unknown state:",t)},report:function(t){return _.get(t,"events.latest.performanceReport")},moment:function(t){return i.a.utc(t)},round:function(t){return(+t).toFixed(3)},timespan:function(t,e){return u()(this.moment(t).diff(this.moment(e)))},successRate:function(t){if(!t||!t.length)return(0).toFixed(2)+" %";var e=t.filter((function(t){return t.pnl>0}));return(+e.length/t.length*100).toFixed(2)+" %"}}},h=d,f=r("2877"),v=r("54e1"),w=r("0016"),g=r("eaac"),k=r("bd08"),m=r("db86"),y=r("b047"),b=r("9c40"),q=r("eebe"),x=r.n(q),$=Object(f["a"])(h,s,o,!1,null,null,null),C=$.exports;x()($,"components",{QBanner:v["a"],QIcon:w["a"],QTable:g["a"],QTr:k["a"],QTd:m["a"],QChip:y["a"],QBtn:b["a"]});var S={name:"LiveGekkosPage",components:{listGekkos:C}},G=S,D=r("9989"),R=Object(f["a"])(G,a,n,!1,null,null,null);e["default"]=R.exports;x()(R,"components",{QPage:D["a"]})}}]);