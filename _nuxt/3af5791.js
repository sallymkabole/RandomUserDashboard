(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{336:function(t,e,r){var content=r(404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("19d30d74",content,!0,{sourceMap:!1})},403:function(t,e,r){"use strict";r(336)},404:function(t,e,r){(e=r(32)(!1)).push([t.i,'.bg[data-v-c780a25a]{background-color:#262a41}.right[data-v-c780a25a]{width:50%;height:95%;border-radius:35px;right:50px;top:20px;background-color:#f7f7ff}.left[data-v-c780a25a],.right[data-v-c780a25a]{position:absolute}.left[data-v-c780a25a]{top:250px;left:150px;width:650px}.txt[data-v-c780a25a]{font-family:"Poppins",sans-serif}.round[data-v-c780a25a]{background:0 0 no-repeat padding-box;box-shadow:0 3px 30px rgba(0,0,0,.16078);border-radius:20px;opacity:1}.search[data-v-c780a25a]{background:#3c3f54 0 0 no-repeat padding-box;border:1px solid #3c3f54;border-radius:28px;opacity:1}.text[data-v-c780a25a]{color:#262a41;letter-spacing:-.04px;opacity:1;font:normal normal 700 37px/122px Poppins}.greet[data-v-c780a25a]{font:normal normal 200 49px/120px Poppins}.v-text-field[data-v-c780a25a]{width:300px}.img[data-v-c780a25a]{width:90px;height:90px;border-radius:50%;border:6px solid #75d6d1;opacity:1}.btn[data-v-c780a25a]{background:#30bbb5 0 0 no-repeat padding-box;box-shadow:2px 15px 30px rgba(48,187,181,.4549);border-radius:13px;opacity:1}.small[data-v-c780a25a]{width:700px}.download-btn[data-v-c780a25a]{background:#7946c1 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.16078);border-radius:35px;opacity:1}',""]),t.exports=e},413:function(t,e,r){"use strict";r.r(e);r(34);var o=r(61),l=r.n(o),n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,title:"Vuetify.js",country:!0,people:[],items:["Kenya","Nigeria","Ghana","Tz"]}},created:function(){var t=this;l.a.get("https://randomuser.me/api/?results=3").then((function(e){t.people=e.data.results}))},methods:{userDetails:function(){var t={fname:this.person.name.first,lname:this.person.name.last};console.log("userDetails"),this.$store.commit("SET_USER_DETAILS",t),this.$router.push("/user-details")},pagination:function(){var t=this;l.a.get("https://randomuser.me/api/?page=3&gender=male&results=3&seed=3").then((function(e){t.people=e.data.results}))}}},c=(r(403),r(58)),d=r(86),v=r.n(d),m=r(409),x=r(416),h=r(333),f=r(290),_=r(406),w=r(321),C=r(407),y=r(313),V=r(327),k=r(289),A=r(394),L=r(408),S=r(415),B=r(337),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"white--text txt",attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("div",{staticClass:"left"},[r("v-card-title",{staticClass:"greet"},[t._v(" Hello User ")]),t._v(" "),r("v-card-text",[r("p",[t._v("\n          Welcome to your dashboard,kindly sort through the user base\n        ")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("v-text-field",{attrs:{id:"user","prepend-inner-icon":"mdi-magnify",label:"Find in List",type:"text",solo:"",rounded:""}})],1)]),t._v(" "),r("v-card-title",[t._v(" Show Users ")]),t._v(" "),r("v-card-actions",[r("v-card",{staticClass:"bg white--text",attrs:{flat:"",width:"400"}},[r("v-card-actions",[r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#F935A9",to:"/all-users"}},[r("v-icon",[t._v("mdi-account-group")])],1),t._v(" "),r("v-card-text",[t._v("All Users")])],1),t._v(" "),r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#30BBB5",to:"/male-users"}},[r("v-icon",[t._v("mdi-human-male")])],1),t._v(" "),r("v-card-text",[t._v("Male Users")])],1),t._v(" "),r("v-flex",{attrs:{md4:""}},[r("v-btn",{staticClass:"round white--text",attrs:{"x-large":"",color:"#7946C1",to:"/female-users"}},[r("v-icon",[t._v("mdi-human-female")])],1),t._v(" "),r("v-card-text",[t._v("Female Users")])],1)],1)],1)],1)],1)]),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",{staticClass:"right"},[r("v-flex",{attrs:{md12:""}},[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-card-title",{staticClass:"text ml-4"},[t._v(" All Users ")]),t._v(" "),r("v-card-subtitle",{staticClass:"grey--text mb-2 ml-4"},[t._v("\n            Filter by\n          ")])],1),t._v(" "),r("v-row",[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{staticClass:"ml-10",attrs:{id:"user","prepend-inner-icon":"mdi-magnify",label:"Find in List",type:"text",solo:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-autocomplete",{staticClass:"ml-10 text--grey",attrs:{items:t.items,solo:"",dense:"","small-chips":"",height:"50px",clearable:"",label:"Country",multiple:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-switch",{staticClass:"mb-12 ml-8",attrs:{label:"Country"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1),t._v(" "),r("v-row",{staticClass:"mb-4"},t._l(t.people,(function(e,o){return r("v-card",{key:o,staticClass:"ml-10 mt-4",attrs:{width:"900",height:"115"}},[r("v-flex",{staticClass:"mt-4 ml-4 mr-2",attrs:{xs1:""}}),t._v(" "),r("v-list-item",[r("img",{staticClass:" img",attrs:{src:e.picture.large,alt:e}}),t._v(" "),r("v-list-item-content",{staticClass:"ml-6"},[r("v-list-item-title",[t._v(t._s(e.name.first)+"\n                  "+t._s(e.name.last)+" ")]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.location.street.number)+"\n                  "+t._s(e.location.city)+"\n                  "+t._s(e.location.state))]),t._v(" "),r("v-list-item-subtitle",[r("v-icon",[t._v("mdi-email-outline")]),t._v(" "+t._s(e.email)+"\n\n                  "),r("v-icon",[t._v("mdi-phone-in-talk")]),t._v(" "+t._s(e.phone)+"\n                ")],1)],1),t._v(" "),r("v-list-item-action",[r("v-spacer"),r("v-btn",{staticClass:"btn white--text",attrs:{color:"#30BBB5"},on:{click:t.userDetails}},[r("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)],1)})),1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"ma-8 white--text download-btn",attrs:{rounded:"",color:"#7946C1",href:"https://randomuser.me/api/?results=99&nat=gb,us,es&format=csv&dl",download:""}},[r("v-icon",{staticClass:"pa-2"},[t._v("mdi-cloud-download-outline")]),t._v("\n          Download")],1),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"mr-4"},[r("v-btn",{staticClass:" ",attrs:{rounded:"",color:"#E2E2EA"}},[r("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"white--text ",attrs:{rounded:"",color:"#262A41"},on:{click:t.pagination}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"c780a25a",null);e.default=component.exports;v()(component,{VAutocomplete:m.a,VBtn:x.a,VCard:h.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VFlex:_.a,VIcon:w.a,VLayout:C.a,VListItem:y.a,VListItemAction:V.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:A.a,VSpacer:L.a,VSwitch:S.a,VTextField:B.a})}}]);