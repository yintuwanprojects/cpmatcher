(function(t){function e(e){for(var i,o,c=e[0],a=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cpmatcher/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0a9f":function(t,e,n){t.exports=n.p+"img/hhyy.d5525ef7.jpg"},"134f":function(t,e,n){t.exports=n.p+"img/hhxc.3e216dee.jpg"},"25ef":function(t,e,n){t.exports=n.p+"media/Tiny Button Push-SoundBible.com-513260752.5cac6fc7.wav"},"3a01":function(t,e,n){},4019:function(t,e,n){t.exports=n.p+"img/zjwl.68916f7a.jpg"},"4c60":function(t){t.exports=JSON.parse('{"HDY":{"name":"好多宇","people":"赞多 刘宇","img":"hdy.jpg"},"YZL":{"name":"元周率","people":"周柯宇 张嘉元","img":"yzl.gif"},"SYDT":{"name":"双宇电台","people":"周柯宇 尹浩宇","img":"sydt.gif"},"BFZY":{"name":"暴风周宇","people":"周柯宇 刘宇","img":"bfzy.jpg"},"LZMQ":{"name":"林阵磨枪","people":"刘彰 林墨","img":"lzmq.jpg"},"FJYL":{"name":"风景元林","people":"张嘉元 林墨","img":"fjyl.jpg"},"ZJWL":{"name":"赞就丸了","people":"赞多 力丸","img":"zjwl.jpg"},"HHXC":{"name":"浩瀚星尘","people":"尹浩宇 高卿尘","img":"hhxc.jpg"},"RDYL":{"name":"热带宇林","people":"周柯宇 林墨","img":"rdyl.jpg"},"HHYY":{"name":"花浩月远","people":"尹浩宇 伯远","img":"hhyy.jpg"}}')},"4dca":function(t,e,n){},5279:function(t,e,n){t.exports=n.p+"img/lzmq.952e86c4.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Quiz",{staticClass:"mb-auto mt-5"}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-light small"},[t._v(" 制作: INTO1叠组 - 宇宙宝"),n("br"),t._v(" 欢迎合作，一起开发"),n("br")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["pre"===t.quizStatus?n("div",[t._m(0),n("div",{staticClass:"button6",on:{click:t.startQuiz}},[t._v("开始测试")])]):t._e(),"during"===t.quizStatus?n("div",{staticClass:"question-text m-2"},[n("h4",{staticClass:"m-2",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.question))]),n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"yes",value:"y"},domProps:{checked:t._q(t.picked,"y")},on:{change:function(e){t.picked="y"}}}),n("label",{attrs:{for:"yes"}},[t._v(" 是")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"no",value:"n"},domProps:{checked:t._q(t.picked,"n")},on:{change:function(e){t.picked="n"}}}),n("label",{attrs:{for:"no"}},[t._v(" 不是")]),n("br")])]),n("div",[n("div",{staticClass:"button6 options m-1",on:{click:function(e){return t.chooseAns()}}},[n("strong",[t._v("下一题")])])])]):t._e(),"post"===t.quizStatus?n("div",{staticClass:"question-text m-2"},[n("h3",[t._v("最适合你的万内CP是：")]),n("img",{attrs:{src:t.getImgUrl(t.chosenCPImg),alt:t.chosenCPImg}}),n("h2",[t._v(t._s(t.chosenCP))]),n("p",{staticClass:"people"},[t._v(t._s(t.cpPeople))]),n("div",[n("p",[t._v("适配度前五名")]),n("ul",{staticClass:"ranking text-light small"},t._l(Object.fromEntries(Object.entries(t.sortedCPList).slice(0,5)),(function(e,i){return n("li",{key:i},[t._v(" "+t._s(t.cpNames[i])+": "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"button6 return m-1",on:{click:t.resetPage}},[t._v("再测一次")])]):t._e()])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("h2",{staticClass:"fw-bold",staticStyle:{color:"white"}},[t._v("音兔万CP挑选器")]),n("br"),n("div",{staticClass:"slider-wrapper"},[n("div",{staticClass:"slider"},[n("div",{staticClass:"slider-text1"},[t._v("好多宇")]),n("div",{staticClass:"slider-text2"},[t._v("元周率")]),n("div",{staticClass:"slider-text3"},[t._v("赞就丸了")]),n("div",{staticClass:"slider-text4"},[t._v("双宇电台")])])])])}],a=n("ade3"),u=n("5530"),p=n("3835"),l=(n("b64b"),n("159b"),n("b0c0"),n("fb6a"),n("4e82"),n("4fad"),n("613d")),f=n("4c60"),d=n("25ef"),Y=n.n(d),h={name:"Quiz",data:function(){return{questions:[],cpList:{},chosenCPImg:"",sortedCPList:{},cpPeople:"",currentQuestion:0,picked:"",score:0,quizStatus:"pre",sound:new Audio(Y.a)}},mounted:function(){this.resetPage()},computed:{question:function(){return this.questions[this.currentQuestion]["q"]},cpNames:function(){var t={},e=Object.keys(f);return e.forEach((function(e){return t[e]=f[e]["name"]})),t}},methods:{startQuiz:function(){var t=this;this.questions=l.sort((function(){return Math.random()-.5})).slice(0,10);var e=Object.keys(f);e.forEach((function(e){return t.cpList[e]=0})),this.sound.play(),this.quizStatus="during"},nextQuestion:function(){var t=this;if(this.currentQuestion<this.questions.length-1)this.currentQuestion++;else if(this.currentQuestion===this.questions.length-1){this.sortedCPList=Object.entries(this.cpList).sort((function(t,e){var n=Object(p["a"])(t,2),i=n[1],s=Object(p["a"])(e,2),r=s[1];return r-i})).reduce((function(t,e){var n=Object(p["a"])(e,2),i=n[0],s=n[1];return Object(u["a"])(Object(u["a"])({},t),{},Object(a["a"])({},i,s))}),{});var e=Object.keys(this.cpList).reduce((function(e,n){return t.cpList[e]>t.cpList[n]?e:n}));this.chosenCP=f[e]["name"],this.chosenCPImg=f[e]["img"],this.cpPeople=f[e]["people"],this.quizStatus="post",this.sendAnalytics()}},getImgUrl:function(t){return n("7584")("./"+t)},chooseAns:function(){var t=this;this.sound.play();var e=this.questions[this.currentQuestion]["a"][this.picked];Object.keys(e).forEach((function(n){return t.cpList[n]=t.cpList[n]+e[n]})),this.nextQuestion()},resetPage:function(){this.sound.play(),this.questions=l,this.chosenCP="",this.picked="",this.quizStatus="pre",this.cpList={},this.cpPeople="",this.chosenCPImg="",this.currentQuestion=0},sendAnalytics:function(){this.$ga.event({eventCategory:"CompleteQuiz",eventAction:"completed",eventLabel:this.chosenCP})}}},m=h,g=(n("5ccb"),n("2877")),L=Object(g["a"])(m,o,c,!1,null,"6225f184",null),v=L.exports,H={name:"App",components:{Quiz:v}},y=H,b=(n("034f"),Object(g["a"])(y,s,r,!1,null,null,null)),C=b.exports,Z=(n("7b17"),n("ab8b"),n("4dca"),n("0284")),j=n.n(Z);i["a"].config.productionTip=!1,i["a"].use(j.a,{id:"UA-150354610-3",autoTracking:{screenview:!0},trackEvent:!0}),new i["a"]({render:function(t){return t(C)}}).$mount("#app")},"5a62":function(t,e,n){t.exports=n.p+"img/rdyl.6a5d0ed8.jpg"},"5ccb":function(t,e,n){"use strict";n("3a01")},"613d":function(t){t.exports=JSON.parse('[{"q":"可以磕到异国CP","a":{"y":{"HDY":10,"SYDT":10,"HHYY":10},"n":{"HDY":-10,"SYDT":-10,"HHYY":-10}}},{"q":"可以磕到有纯种外国人的CP","a":{"y":{"HDY":10,"SYDT":10,"ZJWL":10,"HHXC":10,"HHYY":10},"n":{"HDY":-10,"SYDT":-10,"ZJWL":-10,"HHXC":-10,"HHYY":-10}}},{"q":"更喜欢年龄差大于3岁的CP","a":{"y":{"ZJWL":10,"HHXC":10,"HHYY":10,"HDY":-10,"YZL":-10,"SYDT":-10,"BFZY":-10,"LZMQ":-10,"FJYL":-10,"RDYL":-10},"n":{"ZJWL":-10,"HHXC":-10,"HHYY":-10,"HDY":10,"YZL":10,"SYDT":10,"BFZY":10,"LZMQ":10,"FJYL":10,"RDYL":10}}},{"q":"比起年上，更喜欢年下","a":{"y":{"BFZY":10,"FJYL":10,"ZJWL":10,"HHXC":10,"RDYL":10,"HHYY":10,"HDY":-10,"YZL":-10,"SYDT":-10,"LZMQ":-10},"n":{"BFZY":-10,"FJYL":-10,"ZJWL":-10,"HHXC":-10,"RDYL":-10,"HHYY":-10,"HDY":10,"YZL":10,"SYDT":10,"LZMQ":10}}},{"q":"喜欢身高差在5cm内的CP","a":{"y":{"YZL":10,"LZMQ":10,"HHXC":10,"HHYY":10,"HDY":-10,"SYDT":-10,"BFZY":-10,"FJYL":-10,"ZJWL":-10,"RDYL":-10},"n":{"YZL":-10,"LZMQ":-10,"HHXC":-10,"HHYY":-10,"HDY":10,"SYDT":10,"BFZY":10,"FJYL":10,"ZJWL":10,"RDYL":10}}},{"q":"更喜欢攻比较主动的CP","a":{"y":{"HDY":10,"SYDT":10,"LZMQ":10,"FJYL":10,"ZJWL":10,"YZL":-10,"BFZY":-10,"HHXC":-10,"RDYL":-10,"HHYY":0},"n":{"HDY":-10,"SYDT":-10,"LZMQ":-10,"FJYL":-10,"ZJWL":-10,"YZL":10,"BFZY":10,"HHXC":10,"RDYL":10}}},{"q":"在乎学历要相配","a":{"y":{"YZL":10,"SYDT":10,"LZMQ":10,"ZJWL":10,"HDY":-10,"BFZY":-10,"FJYL":-10,"HHXC":-10,"RDYL":-10,"HHYY":-10},"n":{"HDY":10,"BFZY":10,"FJYL":10,"HHXC":10,"RDYL":10,"HHYY":10}}},{"q":"更喜欢BG感重的CP","a":{"y":{"YZL":-10,"SYDT":-10,"LZMQ":-10,"ZJWL":-10,"HDY":10,"BFZY":10,"FJYL":-10,"HHXC":-10,"RDYL":-10,"HHYY":-10},"n":{"YZL":10,"SYDT":10,"LZMQ":10,"ZJWL":10,"HDY":-10,"BFZY":-10,"FJYL":10,"HHXC":10,"RDYL":10,"HHYY":10}}},{"q":"更喜欢冤家模式的CP","a":{"y":{"LZMQ":10,"RDYL":10},"n":{"LZMQ":-10,"RDYL":-10}}},{"q":"更喜欢互攻的CP","a":{"y":{"YZL":10,"HHYY":10},"n":{"YZL":-10,"HHYY":-10,"HDY":10,"SYDT":10,"BFZY":10,"LZMQ":10,"FJYL":10,"ZJWL":10,"HHXC":10,"RDYL":10}}}]')},"69d8":function(t,e,n){t.exports=n.p+"img/hdy.f82fe868.jpg"},7252:function(t,e,n){t.exports=n.p+"img/fjyl.454c00bb.jpg"},7584:function(t,e,n){var i={"./bfzy.jpg":"d0c1","./fjyl.jpg":"7252","./hdy.jpg":"69d8","./hhxc.jpg":"134f","./hhyy.jpg":"0a9f","./logo.png":"9d64","./lzmq.jpg":"5279","./rdyl.jpg":"5a62","./sydt.gif":"9038","./yzl.gif":"b7cf","./zjwl.jpg":"4019"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="7584"},"85ec":function(t,e,n){},9038:function(t,e,n){t.exports=n.p+"img/sydt.407a1875.gif"},"9d64":function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},b7cf:function(t,e,n){t.exports=n.p+"img/yzl.5730946c.gif"},d0c1:function(t,e,n){t.exports=n.p+"img/bfzy.9e317a9f.jpg"}});
//# sourceMappingURL=app.bdb41cc6.js.map