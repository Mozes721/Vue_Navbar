(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1a12":function(t,e,n){},"41cd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"vue"}},[n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("div",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/contacts"}},[t._v("Contact")])],1),n("Services",{attrs:{title:"Services",items:t.services}})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-item",on:{click:function(e){t.isOpen=!t.isOpen}}},[n("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.title)+" ")]),n("svg",{attrs:{viewBox:"0 0 1030 638",width:"10"}},[n("path",{attrs:{d:"M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z",fill:"#FFF"}})]),n("transition",{attrs:{name:"fade",apear:""}},[t.isOpen?n("div",{staticClass:"sub-menu"},t._l(t.route,(function(e){return n("div",{key:e.path,staticClass:"menu-item",attrs:{to:e.path}},[t._v(" "+t._s(t.router.name)+" ")])})),0):t._e()])],1)},c=[],l={name:"services",props:["title","path","name"],data(){return{isOpen:!1}}},p=l,f=(n("63ee"),n("2877")),m=Object(f["a"])(p,u,c,!1,null,null,null),d=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.msg))])])},b=[],h={name:"About",data(){return{msg:"The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://example.com/), which may be interlinked by hypertext, and are accessible over the Internet."}}},_=h,g=(n("5be3"),Object(f["a"])(_,v,b,!1,null,"c40670f0",null)),y=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.msg))])])},O=[],j={name:"About",data(){return{msg:"A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process."}}},x=j,C=Object(f["a"])(x,w,O,!1,null,null,null),A=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.msg))])])},$=[],E={name:"About",data(){return{msg:"Get the official YouTube app for Android phones and tablets. See what the world is watching -- from the hottest music videos to what is trending in gaming"}}},S=E,W=Object(f["a"])(S,k,$,!1,null,null,null),P=W.exports,T={name:"navbar",components:{Services:d},data(){return{services:[{path:"/web",name:"Web",components:y},{path:"/design",name:"Design",components:A},{path:"/videos",name:"Videos",components:P}],mode:"history"}}},M=T,H=(n("5dfc"),Object(f["a"])(M,s,i,!1,null,null,null)),L=H.exports,F={name:"App",components:{Navbar:L}},q=F,J=(n("034f"),Object(f["a"])(q,o,a,!1,null,null,null)),N=J.exports,R=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._v(" "+t._s(t.msg)+" ")])},z=[],B={name:"HelloWorld",data(){return{msg:"Hello Component"}}},D=B,G=(n("677e"),Object(f["a"])(D,U,z,!1,null,"07706592",null)),I=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[t._v(" "+t._s(t.msg)+" ")])},V=[],Y={name:"About",data(){return{msg:"About page being written"}}},K=Y,X=Object(f["a"])(K,Q,V,!1,null,"6523a900",null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(t._s(t.msg))])},et=[],nt={name:"About",data(){return{msg:"Contact us"}}},rt=nt,ot=(n("6e85"),Object(f["a"])(rt,tt,et,!1,null,"001ae747",null)),at=ot.exports;r["a"].use(R["a"]);var st=new R["a"]({routes:[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:Z},{path:"/contacts",name:"Contacts",component:at}],mode:"history"});r["a"].config.productionTip=!1,new r["a"]({router:st,render:function(t){return t(N)}}).$mount("#app")},"5be3":function(t,e,n){"use strict";n("41cd")},"5dfc":function(t,e,n){"use strict";n("1a12")},"63ee":function(t,e,n){"use strict";n("8b78")},"677e":function(t,e,n){"use strict";n("b2b0")},"6e85":function(t,e,n){"use strict";n("cb23")},"85ec":function(t,e,n){},"8b78":function(t,e,n){},b2b0:function(t,e,n){},cb23:function(t,e,n){}});
//# sourceMappingURL=app.98c82374.js.map