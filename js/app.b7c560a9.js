(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/iths-oplask/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0b21":function(t,e,a){"use strict";a("2f57")},"2f57":function(t,e,a){},"350a":function(t,e,a){"use strict";a("cbb3")},"3dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i=(a("034f"),a("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),u=c.exports,l=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Search"),t.showFavorites?t._e():a("Pagination"),a("button",{staticClass:"showFav-button",on:{click:t.toggleFavorites}},[t._v(" "+t._s(t.btnText)+" ")]),a("Lightbox",{ref:"lightboxRef",attrs:{images:t.showFavorites?t.favorites:t.images}}),t.showFavorites?t._e():a("ul",t._l(t.images,(function(e,n){return a("li",{key:e.id},[a("Card",{attrs:{id:e.id,index:n,image:e},nativeOn:{click:function(e){return t.callLightbox(n)}}})],1)})),0),t.showFavorites?a("ul",t._l(t.favorites,(function(e,n){return a("li",{key:e.id},[a("Card",{attrs:{id:e.id,index:n,image:e},nativeOn:{click:function(e){return t.callLightbox(n)}}})],1)})),0):t._e()],1)},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-wrapper"},[a("i",{staticClass:"icon-favorite fas fa-heart",class:t.liked?"liked":"",on:{click:function(e){return e.stopPropagation(),t.addToFavorites(t.image)}}}),a("img",{staticClass:"image",attrs:{src:t.image.urls.small}}),a("div",{staticClass:"user"},[a("a",{attrs:{target:"_blank",href:t.image.user.portfolio_url}},[a("img",{staticClass:"profile-picture",attrs:{src:t.image.user.profile_image.medium,alt:""}})]),a("a",{attrs:{target:"_blank",href:t.image.user.portfolio_url}},[t._v(t._s(t.image.user.username))])])])},g=[],d=(a("caad"),a("a9e3"),a("2532"),{name:"Card",props:{image:Object,index:Number,id:String},data:function(){return{liked:!1}},methods:{addToFavorites:function(t){this.$store.state.favorites.includes(t)?(this.liked=!1,this.$store.dispatch("removeFromFavorites",this.index)):(console.log(t),this.liked=!0,this.$store.dispatch("pushToFavorites",t))}}}),m=d,v=(a("fbb1"),Object(i["a"])(m,h,g,!1,null,"1865477b",null)),b=v.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"lightbox",on:{click:t.hideLightbox}},[a("a",{on:{click:function(e){return e.stopPropagation(),t.prev(e)}}},[a("i",{staticClass:"nav fas fa-angle-left fa-10x",class:{hide:!t.checkPrev()}})]),a("div",{staticClass:"lightbox-image"},[a("img",{attrs:{src:t.images[t.index].urls.full,alt:"image"}})]),a("a",{on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[a("i",{staticClass:"nav fas fa-angle-right fa-10x",class:{hide:!t.checkNext()}})])]):t._e()},w=[],_={props:{images:Array},data:function(){return{show:!1,index:0}},methods:{showLightbox:function(){this.show=!0},hideLightbox:function(){this.show=!1,this.index=0},checkNext:function(){return this.index+1<this.images.length},checkPrev:function(){return this.index-1>=0},next:function(){this.checkNext()&&(this.index+=1)},prev:function(){this.checkPrev()&&(this.index-=1)}}},k=_,y=(a("350a"),Object(i["a"])(k,x,w,!1,null,"0c6cfeb8",null)),P=y.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[this.$store.state.totalPages[0]>0?a("nav",[a("a",{on:{click:t.prev}},[a("i",{staticClass:"fas fa-angle-left fa-10x"})]),a("p",[t._v(t._s(t.page)+" of "+t._s(t.totalPages))]),a("a",{on:{click:t.next}},[a("i",{staticClass:"fas fa-angle-right fa-10x"})])]):t._e()])},j=[],O=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),$={methods:{next:function(){this.page+1<=this.$store.state.totalPages[0]&&(this.$store.state.page+=1,this.search())},prev:function(){this.page-1>=1&&(this.$store.state.page-=1,this.search())},search:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a={input:t.$store.state.inputData,page:t.$store.state.page},t.$store.dispatch("search",a);case 2:case"end":return e.stop()}}),e)})))()}},computed:{totalPages:function(){return this.$store.state.totalPages[0]},page:function(){return this.$store.state.page}}},C=$,T=(a("0b21"),Object(i["a"])(C,F,j,!1,null,"07391960",null)),R=T.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"search-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],attrs:{type:"text",placeholder:"Search for image.."},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),a("button",{on:{click:function(e){return e.preventDefault(),t.search(e)}}},[a("i",{staticClass:"fas fa-search"})])])])},D=[],I={name:"Search",props:{page:Number},data:function(){return{inputData:""}},methods:{search:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a={input:t.inputData},console.log(a),t.$store.dispatch("search",a);case 3:case"end":return e.stop()}}),e)})))()}}},L=I,N=(a("a4ab"),Object(i["a"])(L,S,D,!1,null,"104a3071",null)),E=N.exports,G={data:function(){return{page:1,inputData:"",showFavorites:!1,btnText:"Show Favorites"}},computed:{images:function(){return this.$store.state.images},favorites:function(){return this.$store.state.favorites}},methods:{callLightbox:function(t){this.$refs.lightboxRef.index=t,this.$refs.lightboxRef.show=!0},toggleFavorites:function(){this.showFavorites=!this.showFavorites,this.showFavorites?this.btnText="Show Gallery":this.btnText="Show Favorites"}},created:function(){this.$store.dispatch("loadInitialImages")},components:{Card:b,Search:E,Lightbox:P,Pagination:R}},M=G,q=(a("ecdd"),Object(i["a"])(M,p,f,!1,null,"77fb185a",null)),A=q.exports;n["a"].use(l["a"]);var z=[{path:"/",name:"Gallery",component:A}],B=new l["a"]({mode:"history",base:"/iths-oplask/",routes:z}),J=B,K=(a("a434"),a("2909")),U=a("2f62"),V=(a("99af"),a("d3b7"),"https://api.unsplash.com/search/photos?per_page=16"),Z="https://api.unsplash.com/photos?per_page=16";function H(){return Q.apply(this,arguments)}function Q(){return Q=Object(O["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Z),{headers:{Authorization:"Client-ID ".concat("7oTFDmKuqqPGu6_RnrCn6aZB8j8VpU19M1Ro5NIG63c")}});case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}function W(t,e){return X.apply(this,arguments)}function X(){return X=Object(O["a"])(regeneratorRuntime.mark((function t(e,a){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(V,"&query=").concat(e,"&page=").concat(a),{headers:{Authorization:"Client-ID ".concat("7oTFDmKuqqPGu6_RnrCn6aZB8j8VpU19M1Ro5NIG63c")}});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),X.apply(this,arguments)}n["a"].use(U["a"]);var Y=new U["a"].Store({state:{favorites:[],images:[],inputData:"dog",page:1,totalPages:[]},mutations:{resetTotalPages:function(t){t.totalPages=[]},pushToTotalPages:function(t,e){t.totalPages.push(e)},resetImages:function(t){t.images=[]},pushToImage:function(t,e){var a;(a=t.images).push.apply(a,Object(K["a"])(e))},pushToFavorites:function(t,e){t.favorites.push(e)},removeFromFavorites:function(t,e){t.favorites.splice(e,1)},setSearchInput:function(t,e){t.inputData=e}},actions:{search:function(t,e){return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,r=e.input,s=e.page,n("resetImages"),n("resetTotalPages"),a.next=6,W(r,s);case 6:i=a.sent,n("setSearchInput",r),n("pushToTotalPages",i.total_pages),n("pushToImage",i.results);case 10:case"end":return a.stop()}}),a)})))()},loadInitialImages:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,H();case 3:n=e.sent,a("pushToImage",n);case 5:case"end":return e.stop()}}),e)})))()},pushToFavorites:function(t,e){var a=t.commit;a("pushToFavorites",e)},removeFromFavorites:function(t,e){var a=t.commit;a("removeFromFavorites",e)}}});n["a"].config.productionTip=!1,new n["a"]({router:J,data:function(){return{}},store:Y,render:function(t){return t(u)}}).$mount("#app")},"7aba":function(t,e,a){},"85ec":function(t,e,a){},a4ab:function(t,e,a){"use strict";a("3dad")},cbb3:function(t,e,a){},ecdd:function(t,e,a){"use strict";a("7aba")},f7b5:function(t,e,a){},fbb1:function(t,e,a){"use strict";a("f7b5")}});
//# sourceMappingURL=app.b7c560a9.js.map