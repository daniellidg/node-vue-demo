(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/web/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"05db":function(t,e,s){"use strict";var a=s("4187"),i=s.n(a);i.a},"1a5e":function(t,e,s){t.exports=s.p+"img/swipe3.e5acd51a.jpeg"},"21bb":function(t,e,s){"use strict";var a=s("7a98"),i=s.n(a);i.a},4187:function(t,e,s){},"43a4":function(t,e,s){},4742:function(t,e,s){t.exports=s.p+"img/swipe2.40d8ec58.jpeg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={name:"app",components:{}},c=r,l=s("2877"),o=Object(l["a"])(c,i,n,!1,null,null,null),u=o.exports,d=(s("be35"),s("78a7"),s("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("e269")}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("4742")}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("1a5e")}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right mt-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons text-dark bg-white text-center pt-3 mt-3"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(10,function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-story"}),a("div",{staticClass:"pt-1"},[t._v("爆料站")])])}),0),t._m(0)]),a("m-list-card",{attrs:{title:"新闻资讯",iconleft:"cc-menu-circle",iconright:"menu",datas:t.newsData},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.data;return t._l(s.newsList,function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex ai-center",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-dark-3"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"mx-1"},[t._v("|")]),a("span",{staticClass:"flex-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("dateFormat")(e.createdAt,"MM/DD")))])])})}}])}),a("m-list-card",{attrs:{title:"英雄列表",iconleft:"card-hero",iconright:"menu",datas:t.heroesData},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.data;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0 -0.5rem"}},t._l(s.heroesList,function(e,s){return a("router-link",{key:s,staticClass:"text-center p-2",staticStyle:{width:"20%"},attrs:{to:"/heroes/"+e._id,tag:"div"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:e.icon}}),a("div",[t._v(t._s(e.name))])])}),1)]}}])})],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-2"},[s("i",{staticClass:"sprite sprite-arrow mx-1"}),s("span",{staticClass:"fs-sm"},[t._v("收起")])])}],v=(s("96cf"),s("3b8d")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("m-card",{attrs:{title:t.title,iconleft:t.iconleft,iconright:t.iconright}},[s("div",{staticClass:"nav jc-between py-2"},t._l(t.datas,function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.navChange(a)}}},[s("router-link",{attrs:{tag:"div",to:""}},[t._v(t._s(e.name))])],1)}),0),s("swiper",{ref:"mSwiper",attrs:{options:{autoHeight:!0}},on:{"slide-change":t.swiperChange}},t._l(t.datas,function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{data:e})],2)}),1)],1)],1)},h=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3 bg-white mt-3"},[s("div",{staticClass:"card-header d-flex ai-center bg-white pb-3"},[s("i",{staticClass:"iconfont",class:"icon-"+t.iconleft}),s("div",{staticClass:"fs-xxl flex-1 px-2"},[t._v(t._s(t.title))]),s("i",{staticClass:"iconfont",class:"icon-"+t.iconright})]),s("div",{staticClass:"card-body mt-2"},[t._t("default")],2)])},g=[],x={props:{title:{type:String,require:!0},iconleft:{type:String,require:!0},iconright:{type:String,require:!1}}},C=x,b=(s("e60d"),Object(l["a"])(C,_,g,!1,null,null,null)),w=b.exports,y={props:{title:{type:String,require:!0},iconleft:{type:String,require:!0},iconright:{type:String,require:!1},datas:{type:Array,require:!0}},data:function(){return{active:0}},components:{MCard:w},methods:{navChange:function(t){this.active=t,this.$refs.mSwiper.swiper.slideTo(t)},swiperChange:function(){this.active=this.$refs.mSwiper.swiper.realIndex}}},k=y,j=Object(l["a"])(k,m,h,!1,null,null,null),O=j.exports,S={data:function(){return{newsData:[],heroesData:[],swiperOption:{pagination:{el:".pagination-home"}}}},components:{MListCard:O},methods:{fetchNews:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/list");case 2:e=t.sent,this.newsData=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchHeroes:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/list");case 2:e=t.sent,this.heroesData=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchHeroes(),this.fetchNews()}},$=S,D=(s("21bb"),Object(l["a"])($,p,f,!1,null,null,null)),E=D.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"nav reverse jc-around bg-primary py-3"},[s("div",{staticClass:"nav-item active"},[s("router-link",{attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item "},[s("router-link",{attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)]),s("router-view")],1)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-black d-flex ai-center py-2 px-3 topbar"},[s("i",{staticClass:"sprite sprite-logo"}),s("div",{staticClass:"flex-1 mx-2"},[s("div",{staticClass:"text-white"},[t._v("王者荣耀")]),s("div",{staticClass:"text-grey-2 fs-xxs"},[t._v("团队成就更多")])]),s("i",{staticClass:"sprite sprite-download"})])}],R=(s("bb5b"),{}),q=Object(l["a"])(R,M,P,!1,null,"055d7e02",null),T=q.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"articles"},[s("div",{staticClass:"article-header d-flex ai-center p-2 pl-0 border-bottom"},[s("i",{staticClass:"iconfont icon-back text-blue",on:{click:function(e){return t.$router.go(-1)}}}),s("strong",{staticClass:"flex-1 px-2 text-blue text-ellipsis pr-3"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"fs-sm text-grey"},[t._v(t._s(t._f("dateFormat")(t.model.createdAt,"YYYY-MM-DD")))])]),s("div",{staticClass:"article-body",domProps:{innerHTML:t._s(t.model.content)}}),s("div",{staticClass:"px-2"},[t._m(0),t._l(t.model.related,function(e){return s("router-link",{key:e._id,staticClass:"d-flex jc-between ai-center py-1",attrs:{tag:"div",to:"/articles/"+e._id}},[s("div",{staticClass:"text-ellipsis pr-4 flex-1"},[t._v(t._s(e.title))]),s("div",{staticClass:"text-grey"},[t._v(t._s(t._f("dateFormat")(e.createdAt,"YYYY-MM-DD")))])])})],2)]):t._e()},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article-footer d-flex ai-center py-3"},[s("i",{staticClass:"iconfont icon-suggest"}),s("strong",{staticClass:"text-blue px-1 fs-xl"},[t._v("相关资讯")])])}],L={props:{id:{require:!0}},watch:{id:function(){this.fetchDetail()}},data:function(){return{model:{}}},methods:{fetchDetail:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("articles/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchDetail()}},N=L,F=(s("05db"),Object(l["a"])(N,Y,A,!1,null,null,null)),H=F.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-hero"},[s("div",{staticClass:"bg-black d-flex ai-center py-2 px-3 text-white topbar"},[s("i",{staticClass:"sprite sprite-logo"}),t._m(0),s("router-link",{attrs:{to:"/",tag:"div"}},[s("span",{staticClass:"fs-sm px-2"},[t._v("更多英雄")]),s("span",{staticClass:"fs-sm"},[t._v(">")])])],1),s("div",{staticClass:"banner",style:{"background-image":"url("+t.model.banner+")"}},[s("div",{staticClass:"info text-white p-3 d-flex flex-column jc-end h-100"},[s("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),s("h2",{staticClass:"my-1"},[t._v(t._s(t.model.name))]),s("div",[t._v(t._s(t.model.categories.map(function(t){return t.name}).join("/")))]),t.model.scores?s("div",{staticClass:"d-flex ai-center jc-between mt-1"},[s("div",{staticClass:"fs-sm"},[s("span",[t._v("难度")]),s("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),s("span",[t._v("技能")]),s("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skill))]),s("span",[t._v("攻击")]),s("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),s("span",[t._v("生存")]),s("span",{staticClass:"badge bg-grey"},[t._v(t._s(t.model.scores.survive))])]),s("router-link",{staticClass:"fs-sm text-grey-4",attrs:{tag:"div",to:"/"}},[s("span",[t._v("皮肤:")]),s("span",{staticClass:"px-2"},[t._v("4")]),s("span",[t._v(">")])])],1):t._e()])]),s("m-card",{attrs:{title:"出装推荐",iconleft:"rementuijian"}},[s("div",{staticClass:"items-good pb-3"},[s("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),s("div",{staticClass:"d-flex"},t._l(t.model.itemsGood,function(e){return s("div",{key:e._id,staticClass:"p-2",staticStyle:{width:"16.5%"}},[s("el-avatar",{attrs:{size:"large",src:e.icon}}),s("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])],1)}),0),s("div",{staticClass:"notes lineheight text-grey-5 py-2"},[s("span",[t._v("小提示")]),s("span",[t._v("：")]),s("span",[t._v("全防御出装，能够成为团队的前排，为队友争取到输出空间，红莲斗篷能帮助亚瑟快速清线，霸者重装让其恢复能力大幅上升")])])]),s("div",{staticClass:"pt-3"},[s("div",{staticClass:"fs-xl"},[t._v("逆风出装")]),s("div",{staticClass:"d-flex"},t._l(t.model.itemsBad,function(e){return s("div",{key:e._id,staticClass:"p-2",staticStyle:{width:"16.5%"}},[s("el-avatar",{attrs:{size:"large",src:e.icon}}),s("div",{staticClass:"fs-xs"},[t._v(t._s(e.name))])],1)}),0),s("div",{staticClass:"notes text-grey-5 py-2"},[s("span",[t._v("小提示")]),s("span",[t._v("：")]),s("span",[t._v("装备提供了大量冷却缩减，让亚瑟能一直维持一个超高的机动性，让其能够频繁的释放技能制造混乱和伤害")])])])]),s("m-card",{attrs:{title:"使用技巧",iconleft:"rementuijian"}},[s("div",{staticClass:"text-grey-5 lineheight"},[t._v(t._s(t.model.usageTips))])]),s("m-card",{attrs:{title:"对抗技巧",iconleft:"rementuijian"}},[s("div",{staticClass:"text-grey-5 lineheight"},[t._v(t._s(t.model.battleTips))])]),s("m-card",{attrs:{title:"团战思路",iconleft:"rementuijian"}},[s("div",{staticClass:"text-grey-5 lineheight"},[t._v(t._s(t.model.teamTips))])]),s("m-card",{attrs:{title:"英雄关系",iconleft:"rementuijian"}},[s("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,function(e){return s("div",{key:e._id,staticClass:"d-flex my-3"},[s("img",{attrs:{src:e.hero.icon,height:"50"}}),s("span",{staticClass:"px-2 lineheight"},[t._v(t._s(e.description))])])})],2)],1):t._e()},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-1 mx-2"},[s("span",{},[t._v("王者荣耀")]),s("span",{staticClass:"px-3"},[t._v("攻略站")])])}],B={props:{id:{require:!0}},components:{MCard:w},data:function(){return{model:null}},methods:{fetch:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},I=B,J=(s("6e94"),Object(l["a"])(I,U,z,!1,null,null,null)),V=J.exports;a["default"].use(d["a"]);var G=new d["a"]({routes:[{path:"/",component:T,children:[{path:"",name:"home",component:E},{path:"articles/:id",name:"articles",component:H,props:!0}]},{path:"/heroes/:id",name:"heroes",component:V,props:!0}]}),K=s("5a0c"),Q=s.n(K);a["default"].filter("dateFormat",function(t,e){return t?Q()(t).format(e):""});var W=s("bc3a"),X=s.n(W),Z=s("7212"),tt=s.n(Z),et=(s("dfa4"),s("5c96")),st=s.n(et);s("0fae");a["default"].use(st.a),a["default"].config.productionTip=!1,a["default"].prototype.$http=X.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_URL||"/web/api"}),a["default"].use(tt.a),new a["default"]({router:G,render:function(t){return t(u)}}).$mount("#app")},"6e94":function(t,e,s){"use strict";var a=s("72a9"),i=s.n(a);i.a},"72a9":function(t,e,s){},"78a7":function(t,e,s){},"7a98":function(t,e,s){},bb5b:function(t,e,s){"use strict";var a=s("43a4"),i=s.n(a);i.a},be35:function(t,e,s){},e269:function(t,e,s){t.exports=s.p+"img/swipe1.7d748755.jpeg"},e60d:function(t,e,s){"use strict";var a=s("f5c3"),i=s.n(a);i.a},f5c3:function(t,e,s){}});
//# sourceMappingURL=app.0c1b4106.js.map