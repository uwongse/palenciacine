webpackJsonp([10],{H7fG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("PJh5"),i=a.n(s),n={name:"app-allavenida",props:{films:{type:Array}},methods:{sanitizeTitle:function(t){return t.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-")},transformFecha:function(t){return i.a.locale("es"),i()(t,"YYYY/MM/DD").format("dddd D [de] MMMM ").toUpperCase()}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("router-link",{attrs:{to:"/contacto/multicinesavenida"}},[s("div",{attrs:{id:"imagen"}})]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("section",{staticClass:"row"},[t._m(0),t._v(" "),s("section",{staticClass:"container-fluid"},[s("section",{staticClass:"row "},[s("section",{staticClass:"col mx-4 mt-3"},[t.films.length?s("section",{staticClass:"movie-container"},[s("section",{staticClass:"movies-list"},[s("router-view"),t._v(" "),t._l(t.films,function(e){return s("section",{key:e.id,staticClass:"movie"},[s("section",{staticClass:"product-image"},[s("section",{class:[{estreno:1==e.active}]}),t._v(" "),s("img",{attrs:{id:"img",src:""+e.poster,alt:""}})]),t._v(" "),s("section",{staticClass:"details"},[s("router-link",{staticClass:"item",attrs:{to:{path:"obrasavenida/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[s("h4",[t._v(t._s(e.projections[0].cinema.cinema))])]),t._v(" "),s("section",{staticClass:"detalles"},[s("router-link",{staticClass:"item",attrs:{to:{path:"obrasavenida/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[s("section",[s("h2",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(t.transformFecha(e.projections[0].release_date)))]),t._v(" "),s("section",{attrs:{id:"horas"}},t._l(e.projections,function(e){return s("section",{key:e.id},[s("p",[t._v(t._s(e.hour)+" ")])])}),0)])]),t._v(" "),s("button",[s("b-icon",{attrs:{icon:"bookmark-plus","font-scale":"1"}}),t._v(" "),s("router-link",{staticClass:"item",attrs:{to:{path:"obrasavenida/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[s("i",[t._v("Más Información")])])],1),t._v(" "),s("button",[s("img",{attrs:{id:"logoentrada",src:a("Cs3S"),alt:""}}),s("a",{attrs:{href:""+e.buy}},[s("i",[t._v(" Comprar Entradas")])])])],1)],1)])})],2)]):s("article",[s("span",{staticClass:"px-2",attrs:{id:"color"}},[t._v("HOY CERRAMOS")])])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"col"},[e("section",{staticClass:"col mx-3 mt-2"},[e("span",[this._v("Hoy en Cartelera")])])])}]};var r=a("VU/8")(n,o,!1,function(t){a("V0TC")},"data-v-292c8fe4",null).exports,c=a("uGoH"),l=a("mtWM"),p=a.n(l),d={name:"app-ortegas",components:{AppAllavenida:r,AppPromociones:c.a},mounted:function(){var t=this;p.a.get("https://seashell-app-se7bo.ondigitalocean.app/api/avenida",{}).then(function(e){t.films=e.data.data,console.log(e.data.data)})},data:function(){return{films:[]}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("app-allavenida",{attrs:{films:this.films}}),this._v(" "),e("app-promociones")],1)},staticRenderFns:[]},m=a("VU/8")(d,u,!1,null,null,null);e.default=m.exports},V0TC:function(t,e){}});
//# sourceMappingURL=10.dcd91172ae9e8800b65d.js.map