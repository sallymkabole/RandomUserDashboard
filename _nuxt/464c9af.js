(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{309:function(t,e,r){var content=r(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("703f83f2",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(309)},336:function(t,e,r){(e=r(32)(!1)).push([t.i,'.bg[data-v-b1e1b31a]{background-color:#262a41}.right[data-v-b1e1b31a]{width:50%;height:95%;border-radius:35px;right:50px;top:20px;background-color:#f7f7ff}.left[data-v-b1e1b31a],.right[data-v-b1e1b31a]{position:absolute}.left[data-v-b1e1b31a]{top:250px;left:150px;width:650px}.txt[data-v-b1e1b31a]{font-family:"Poppins",sans-serif}.round[data-v-b1e1b31a]{background:0 0 no-repeat padding-box;box-shadow:0 3px 30px rgba(0,0,0,.16078);border-radius:20px;opacity:1}.search[data-v-b1e1b31a]{background:#3c3f54 0 0 no-repeat padding-box;border:1px solid #3c3f54;border-radius:28px;opacity:1}.text[data-v-b1e1b31a]{color:#262a41;letter-spacing:-.04px;opacity:1;font:normal normal 700 37px/122px Poppins}.greet[data-v-b1e1b31a]{font:normal normal 200 49px/120px Poppins}.v-text-field[data-v-b1e1b31a]{width:300px}.img[data-v-b1e1b31a]{width:113px;height:113px;border-radius:50%;border:8px solid #75d6d1;opacity:1}.btn[data-v-b1e1b31a]{background:#30bbb5 0 0 no-repeat padding-box;box-shadow:2px 15px 30px rgba(48,187,181,.4549);border-radius:13px;opacity:1}.small[data-v-b1e1b31a]{width:700px}.download-btn[data-v-b1e1b31a]{background:#7946c1 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.16078);border-radius:35px;opacity:1}',""]),t.exports=e},401:function(t,e,r){"use strict";r.r(e);var o=r(59),n=r.n(o),l={data:function(){return{clipped:!1,drawer:!1,fixed:!1,title:"Vuetify.js",country:!0,people:[],quantity:3,queryUser:{name:""},items:["Kenya","Nigeria","Ghana","Tz"]}},created:function(){var t=this;n.a.get("https://randomuser.me/api/?results=").then((function(e){t.people=e.data.results}))},methods:{displayAllgender:function(){var t=this;n.a.get("https://randomuser.me/api/?results=").then((function(e){t.people=e.data.results}))},displayMales:function(){var t=this;n.a.get("https://randomuser.me/api/?gender=male").then((function(e){t.people=e.data.results}))},displayFemales:function(){var t=this;n.a.get("https://randomuser.me/api/?gender=female").then((function(e){t.people=e.data.results}))}}},d=(r(335),r(58)),c=r(89),v=r.n(c),m=r(399),x=r(323),h=r(404),f=r(325),_=r(285),y=r(396),w=r(312),C=r(397),V=r(303),k=r(318),U=r(284),A=r(334),F=r(398),B=r(402),L=r(327),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"white--text txt",attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("div",{staticClass:"left"},[r("v-card-title",{staticClass:"greet"},[t._v(" Hello User ")]),t._v(" "),r("v-card-text",[r("p",[t._v("\n          Welcome to your dashboard,kindly sort through the user base\n        ")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("v-text-field",{staticClass:"white--text search",attrs:{id:"user","prepend-inner-icon":"mdi-magnify",label:"Find a User",type:"search"},model:{value:t.queryUser.name,callback:function(e){t.$set(t.queryUser,"name",e)},expression:"queryUser.name"}})],1)]),t._v(" "),r("v-card-title",[t._v(" Show Users ")]),t._v(" "),r("v-card-actions",[r("v-card",{staticClass:"bg white--text",attrs:{flat:"",width:"400"}},[r("v-card-actions",[r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#F935A9",to:"/"}},[r("v-icon",[t._v("mdi-account-group")])],1),t._v(" "),r("v-card-text",[t._v("All Users")])],1),t._v(" "),r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#30BBB5"},on:{click:t.displayMales}},[r("v-icon",[t._v("mdi-human-male")])],1),t._v(" "),r("v-card-text",[t._v("Male Users")])],1),t._v(" "),r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#7946C1",to:"/female-users"}},[r("v-icon",[t._v("mdi-human-female")])],1),t._v(" "),r("v-card-text",[t._v("Female Users")])],1)],1)],1)],1)],1)]),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",{staticClass:"right"},[r("v-flex",{attrs:{md12:""}},[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-card-title",{staticClass:"text ml-4"},[t._v(" Male Users ")]),t._v(" "),r("v-card-subtitle",{staticClass:"grey--text mb-2 ml-4"},[t._v("\n            Filter by\n          ")])],1),t._v(" "),r("v-row",[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{staticClass:"ml-10",attrs:{id:"user","prepend-inner-icon":"mdi-magnify",label:"Find in List",type:"text",solo:""},model:{value:t.queryUser.name,callback:function(e){t.$set(t.queryUser,"name",e)},expression:"queryUser.name"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-autocomplete",{staticClass:"ml-10 text--grey",attrs:{items:t.items,solo:"",dense:"","small-chips":"",height:"50px",clearable:"",label:"Country",multiple:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-switch",{staticClass:"mb-12 ml-8",attrs:{label:"Country: "+t.country.toString()},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1),t._v(" "),t._l(t.quantity,(function(i){return r("v-row",{staticClass:"mt-8"},[r("v-card",{staticClass:"ml-10",attrs:{width:"900",height:"115"}},[r("v-flex",{staticClass:"mt-4 ml-4 mr-2",attrs:{xs1:""}}),t._v(" "),r("v-list-item",[r("v-avatar",{staticClass:"img",attrs:{size:"86px"}},[r("img",{attrs:{alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"}})]),t._v(" "),t._l(t.people,(function(e,o){return r("v-list-item-content",{key:o,staticClass:"ml-6"},[r("v-list-item-title",[t._v(t._s(e.name.first)+"\n                  "+t._s(e.name.last))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.location.street.number)+"\n                  "+t._s(e.location.city)+"\n                  "+t._s(e.location.state))]),t._v(" "),r("v-list-item-subtitle",[r("v-icon",[t._v("mdi-email-outline")]),t._v(t._s(e.email)+"\n\n                  "),r("v-icon",[t._v("mdi-phone-in-talk")]),t._v(t._s(e.phone)+"\n                ")],1)],1)})),t._v(" "),r("v-list-item-action",[r("v-spacer"),r("v-btn",{staticClass:"btn white--text",attrs:{color:"#30BBB5"}},[r("v-icon",[t._v("mdi-arrow-right")])],1)],1)],2)],1)],1)}))],2),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"ma-8 white--text download-btn",attrs:{rounded:"",color:"#7946C1"}},[r("v-icon",{staticClass:"pa-2"},[t._v("mdi-cloud-download-outline")]),t._v("\n          Download")],1),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"mr-4"},[r("v-btn",{staticClass:" ",attrs:{rounded:"",color:"#E2E2EA"}},[r("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"white--text ",attrs:{rounded:"",color:"#262A41"}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"b1e1b31a",null);e.default=component.exports;v()(component,{VAutocomplete:m.a,VAvatar:x.a,VBtn:h.a,VCard:f.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VFlex:y.a,VIcon:w.a,VLayout:C.a,VListItem:V.a,VListItemAction:k.a,VListItemContent:U.a,VListItemSubtitle:U.b,VListItemTitle:U.c,VRow:A.a,VSpacer:F.a,VSwitch:B.a,VTextField:L.a})}}]);