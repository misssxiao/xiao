webpackJsonp([4],{EtgE:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"zhudi",data:function(){return{movielist:[],istrue:!0,onno:!1,prevCityId:-1}},methods:{showBuy:function(){var t=this;this.onno=!0,setTimeout(function(){t.onno=!1},800)},hanh:function(t){this.$router.push("/sousuo/detail/"+t)}},created:function(){var t=this,s=this.$store.state.city.id;this.prevCityId!=s&&(this.istrue=!0,this.axios.get("https://douban.uieee.com/v2/movie/coming_soon").then(function(s){"OK"==s.statusText&&(t.movielist=s.data.subjects,t.istrue=!1)}))}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"crui"},[i("div",{staticClass:"baib"},[t.istrue?i("load"):i("bscroll",{staticClass:"scc"},[i("ul",{staticClass:"liul"},t._l(t.movielist,function(s){return i("li",{key:s.id,staticClass:"bigMovie"},[i("div",{staticClass:"leftImg",on:{tap:function(i){return t.hanh(s.id)}}},[i("img",{staticStyle:{width:"100px",height:"128px"},attrs:{src:s.images.small}})]),t._v(" "),i("div",{staticClass:"introduce"},[i("h2",{staticStyle:{"font-size":"16px"},on:{tap:function(i){return t.hanh(s.id)}}},[t._v(t._s(t._f("len")(s.title)))]),t._v(" "),i("p",[t._v("主演："),t._l(s.casts,function(s){return i("b",[t._v("  "+t._s(s.name))])})],2),t._v(" "),i("p",[t._v("类型："+t._s(t._f("jion")(s.genres)))]),t._v(" "),i("p",[t._v("上映时间："+t._s(s.mainland_pubdate))])]),t._v(" "),i("div",{staticClass:"buy_ticket"},[i("p",{staticClass:"buy_ticketP",on:{tap:t.showBuy}},[t._v("预售")])])])}),0)])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.onno,expression:"onno"}],staticClass:"tank"},[t._v("暂时没有此功能")])])},staticRenderFns:[]};var a=i("VU/8")(e,n,!1,function(t){i("WrPT")},"data-v-2ce1d960",null);s.default=a.exports},WrPT:function(t,s){}});
//# sourceMappingURL=4.fc02c664a420bd173f8b.js.map