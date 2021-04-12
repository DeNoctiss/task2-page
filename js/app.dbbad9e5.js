(function(t){function e(e){for(var s,n,o=e[0],l=e[1],h=e[2],c=0,u=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,h||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},i={app:0},a=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="task2-page/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4e2d":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Game")},a=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Simon Says")]),r("div",{staticClass:"simon"},[r("ul",[r("li",{staticClass:"red",class:{redOn:t.one},attrs:{"data-tile":"1"},on:{click:t.firstClick}}),r("li",{staticClass:"blue",class:{blueOn:t.second},attrs:{"data-tile":"2"},on:{click:t.secondClick}}),r("li",{staticClass:"yellow",class:{yellowOn:t.third},attrs:{"data-tile":"3"},on:{click:t.thirdClick}}),r("li",{staticClass:"green",class:{greenOn:t.fourty},attrs:{"data-tile":"4"},on:{click:t.fourtyClick}})])]),r("div",{staticClass:"game-info"},[r("h2",[t._v("Раунд: "),r("span",{attrs:{"data-round":"0"}},[t._v(t._s(t.round))])]),r("button",{attrs:{"data-action":"start",disabled:t.gameStart},on:{click:t.startGame}},[t._v("Начать")]),r("p",{attrs:{"data-action":"lose"}},[t.gameOver?r("span",[t._v("Извините, но вы проиграли!")]):t._e()])]),r("div",{staticClass:"game-options"},[r("h2",[t._v("Уровни сложности:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],attrs:{type:"radio",name:"mode",value:"1500",disabled:t.gameStart,checked:""},domProps:{checked:t._q(t.interval,"1500")},on:{change:function(e){t.interval="1500"}}}),t._v("Легкий"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],attrs:{type:"radio",name:"mode",value:"1000",disabled:t.gameStart},domProps:{checked:t._q(t.interval,"1000")},on:{change:function(e){t.interval="1000"}}}),t._v("Средний"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],attrs:{type:"radio",name:"mode",value:"400",disabled:t.gameStart},domProps:{checked:t._q(t.interval,"400")},on:{change:function(e){t.interval="400"}}}),t._v("Сложный ")]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sound"},[r("audio",{attrs:{id:"noise1"}},[r("source",{attrs:{src:"http://www.kellyking.me/projects/simon/sounds/1.mp3",type:"audio/mp3"}})]),r("audio",{attrs:{id:"noise2"}},[r("source",{attrs:{src:"http://www.kellyking.me/projects/simon/sounds/2.mp3",type:"audio/mp3"}})]),r("audio",{attrs:{id:"noise3"}},[r("source",{attrs:{src:"http://www.kellyking.me/projects/simon/sounds/3.mp3",type:"audio/mp3"}})]),r("audio",{attrs:{id:"noise4"}},[r("source",{attrs:{src:"http://www.kellyking.me/projects/simon/sounds/4.mp3",type:"audio/mp3"}})])])}],l={data(){return{order:[],playerOrder:[],gameStart:!1,round:0,gameOver:!1,intervalId:null,interval:1500,on:!1,flash:0,one:!1,second:!1,third:!1,fourty:!1,easy:!1,normal:!1,hard:!1}},methods:{startGame(){this.gameStart=!0,this.gameOver=!1,this.round=1,this.flash=0;for(let t=0;t<40;t++)this.order.push(Math.floor(4*Math.random())+1);this.intervalId=setInterval(this.gameTurn,Number(this.interval))},gameTurn(){this.on=!1,this.flash===this.round&&(clearInterval(this.intervalId),this.on=!0),this.on||setTimeout(()=>{1===this.order[this.flash]&&this.firstFlash(),2===this.order[this.flash]&&this.secondFlash(),3===this.order[this.flash]&&this.thirdFlash(),4===this.order[this.flash]&&this.fourFlash(),this.flash++},300)},firstFlash(){this.one=!0,setTimeout(()=>{let t=document.getElementById("noise1");t.play(),this.one=!1},400)},secondFlash(){this.second=!0,setTimeout(()=>{let t=document.getElementById("noise2");t.play(),this.second=!1},400)},thirdFlash(){this.third=!0,setTimeout(()=>{let t=document.getElementById("noise3");t.play(),this.third=!1},400)},fourFlash(){this.fourty=!0,setTimeout(()=>{let t=document.getElementById("noise4");t.play(),this.fourty=!1},400)},firstClick(){this.on&&(this.playerOrder.push(1),this.check(),this.firstFlash())},secondClick(){this.on&&(this.playerOrder.push(2),this.check(),this.secondFlash())},thirdClick(){this.on&&(this.playerOrder.push(3),this.check(),this.thirdFlash())},fourtyClick(){this.on&&(this.playerOrder.push(4),this.check(),this.fourFlash())},check(){this.playerOrder[this.playerOrder.length-1]!==this.order[this.playerOrder.length-1]&&(this.gameOver=!0,this.gameStart=!1,this.on=!1,this.playerOrder=[],this.order=[]),this.round!==this.playerOrder.length||this.gameOver||(this.round++,this.playerOrder=[],this.on=!1,this.flash=0,this.intervalId=setInterval(this.gameTurn,Number(this.interval)))}}},h=l,d=(r("68e4"),r("2877")),c=Object(d["a"])(h,n,o,!1,null,null,null),u=c.exports,p={name:"App",components:{Game:u}},m=p,f=Object(d["a"])(m,i,a,!1,null,null,null),v=f.exports;s["a"].config.productionTip=!1,s["a"].config.devtools=!0,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"68e4":function(t,e,r){"use strict";r("4e2d")}});
//# sourceMappingURL=app.dbbad9e5.js.map