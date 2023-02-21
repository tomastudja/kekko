(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"836f":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{attrs:{padding:""}},[t.data&&!t.data.done?a("div",[a("div",{staticClass:"text-h4 q-mb-md"},[t._v("Importing data")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("strong",[t._v("Market:")])]),a("div",{staticClass:"col-10"},[t._v(t._s(t.data.watch.exchange))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("strong",[t._v("Currency/Asset:")])]),a("div",{staticClass:"col-10"},[t._v(t._s(t.data.watch.currency)+"/"+t._s(t.data.watch.asset))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("strong",[t._v("From:")])]),a("div",{staticClass:"col-10"},[t._v(t._s(t.fmt(t.from)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("strong",[t._v("To:")])]),a("div",{staticClass:"col-10"},[t._v(t._s(t.fmt(t.to)))])]),t.initialized?a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("strong",[t._v("Remaining:")])]),a("div",{staticClass:"col-10"},[t._v(t._s(t.fromEnd))])]):a("div",{staticClass:"row justify-center"},[a("q-spinner-dots",{attrs:{color:"secondary",size:66}})],1),t.data&&!t.data.done&&t.progress?a("div",{staticClass:"row justify-center q-pa-sm"},[a("p",{staticClass:"text-h4"},[t._v(t._s(t.progress)+" %")]),a("q-linear-progress",{staticStyle:{height:"20px"},attrs:{rounded:"",value:t.progress/100,color:t.colorString,stripe:"",animate:"",height:"24px"}})],1):t._e(),a("div",{staticClass:"row q-pa-xs"},[a("p",[a("em",[t._v(" you don't have to wait until the import is done, you can already start\n          "),a("router-link",{attrs:{to:"/backtest"}},[t._v("backtesting")]),t._v("\n          .\n        ")],1)])])]):t._e(),t.data&&t.data.done?a("div",[a("h4",[t._v("Import done!")]),a("p",[t._v("The import\n      for "),a("strong",[t._v(t._s(t.data.watch.exchange)+": "+t._s(t.data.watch.currency)+"-"+t._s(t.data.watch.asset))]),t._v("\n      is complete! "),a("br"),t._v("\n      Go and\n      "),a("router-link",{attrs:{to:"/backtest"}},[t._v("backtest")]),t._v("\n      with your new data!\n    ")],1)]):t._e(),t.data?t._e():a("div",[a("h3",{staticClass:"text-negative"},[t._v("ERROR: Unknown import")]),a("p",[t._v("The import could not be found!")])])])},n=[],r=(a("7514"),a("8f14")),o=a.n(r),e=a("c1df"),d=a.n(e),c=a("2ef0"),l=a.n(c),v={computed:{colorString:function(){var t=this.progress;return t<25?"negative":t>=25&&t<95?"warning":"positive"},data:function(){return l.a.find(this.$store.state.imports.imports,{id:this.$route.params.id})},done:function(){var t=l.a.find(this.$store.state.imports.imports,{id:this.$route.params.id});return t.done},initialized:function(){if(this.data&&this.latest.isValid())return!0},latest:function(){if(this.data)return this.mom(this.data.latest)},fromEndMs:function(){if(this.data)return this.to.diff(this.latest)},fromEnd:function(){return this.latest?o()(this.fromEndMs):"LOADING"},from:function(){if(this.data)return this.mom(this.data.from)},to:function(){if(this.data)return this.mom(this.data.to)},timespan:function(){if(this.data)return this.to.diff(this.from)},progress:function(){if(this.data){if(this.data.done)return 100..toFixed(2);var t=this.timespan-this.fromEndMs,s=+(100*t/this.timespan).toFixed(2);return s||!1}}},methods:{fmt:function(t){return t.format("YYYY-MM-DD HH:mm:ss")},mom:function(t){return d.a.utc(t)}}},u=v,h=a("2877"),f=Object(h["a"])(u,i,n,!1,null,null,null);s["default"]=f.exports}}]);