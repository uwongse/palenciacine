webpackJsonp([7],{"9HCM":function(t,e){},"M+wI":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("PJh5"),i=s.n(a),n={name:"app-allortega",props:{films:{type:Array}},methods:{sanitizeTitle:function(t){return t.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-")},transformFecha:function(t){return i.a.locale("es"),i()(t,"YYYY/MM/DD").format("dddd D [de] MMMM ").toUpperCase()}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{attrs:{id:"imagen"}}),t._v(" "),a("section",{staticClass:"container-fuild"},[a("section",{staticClass:"row"},[a("section",{staticClass:"col"},[t._m(0),t._v(" "),a("section",{staticClass:"container-fluid"},[a("section",{staticClass:"row mx-3"},[t.films.length?a("section",{staticClass:"movie-container"},[a("section",{staticClass:"movies-list"},[a("router-view"),t._v(" "),t._l(t.films,function(e){return a("section",{key:e.id,staticClass:"movie"},[a("section",{staticClass:"product-image"},[a("section",{class:[{estreno:1==e.active}]}),t._v(" "),a("img",{attrs:{id:"img",src:""+e.poster,alt:""}})]),t._v(" "),a("section",{staticClass:"details"},[a("router-link",{staticClass:"item",attrs:{to:{path:"obrascineortega/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[a("h4",[t._v(t._s(e.projections[0].cinema.cinema))])]),t._v(" "),a("section",{staticClass:"detalles"},[a("router-link",{staticClass:"item",attrs:{to:{path:"obrascineortega/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[a("section",[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(t.transformFecha(e.projections[0].release_date)))]),t._v(" "),a("section",{attrs:{id:"horas"}},t._l(e.projections,function(e){return a("section",{key:e.id},[a("p",[t._v(t._s(e.hour)+" ")])])}),0)])]),t._v(" "),a("button",[a("b-icon",{attrs:{icon:"bookmark-plus","font-scale":"1"}}),t._v(" "),a("router-link",{staticClass:"item",attrs:{to:{path:"obrascineortega/"+e.id+"/"+t.sanitizeTitle(e.title)}}},[a("i",[t._v("Más Información")])])],1),t._v(" "),a("button",[a("img",{attrs:{id:"logoentrada",src:s("Cs3S"),alt:""}}),a("a",{attrs:{href:""+e.buy}},[a("i",[t._v(" Comprar Entradas")])])])],1)],1)])})],2)]):a("article",[a("span",{staticClass:"px-2",attrs:{id:"color"}},[t._v("HOY CERRAMOS")])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container-fluid"},[e("section",{staticClass:"row mx-3 my-4"},[e("span",[this._v("Hoy en Cartelera")])])])}]};var r=s("VU/8")(n,o,!1,function(t){s("9HCM")},"data-v-2e1d25a6",null).exports,c=s("uGoH"),l=s("mtWM"),p=s.n(l),u={name:"app-ortegas",components:{AppAllortega:r,AppPromociones:c.a},mounted:function(){var t=this;p.a.get("https://seashell-app-se7bo.ondigitalocean.app/api/cineortega",{}).then(function(e){t.films=e.data.data,console.log(e.data.data)})},data:function(){return{films:[]}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("app-allortega",{attrs:{films:this.films}}),this._v(" "),e("app-promociones")],1)},staticRenderFns:[]},m=s("VU/8")(u,d,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=7.9b1cba9f4fef99dd829a.js.map