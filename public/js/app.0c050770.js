(function(t){function e(e){for(var a,i,n=e[0],c=e[1],l=e[2],u=0,f=[];u<n.length;u++)i=n[u],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,n=1;n<o.length;n++){var c=o[n];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("64a9"),r=o.n(a);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("b-navbar",{staticStyle:{"margin-bottom":"20px"},attrs:{toggleable:"md",type:"dark",variant:"info"}},[o("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),o("b-navbar-brand",{on:{click:function(e){return t.routeTo("/")}}},[t._v(" \n        XPert_iPay - Versão "+t._s(t.versao)+"\n      ")])],1),o("router-view")],1)},s=[],i=o("bc3a"),n=o.n(i),c={name:"app",data:function(){return{versao:""}},methods:{routeTo:function(t){this.$router.push(t)},onLoad:function(){var t=this;n()({method:"get",url:"/api/versao"}).then(function(e){t.versao=e.data.versao}).catch(function(t){console.error(t)})}},created:function(){this.onLoad()}},l=c,d=(o("034f"),o("2877")),u=Object(d["a"])(l,r,s,!1,null,null,null),f=u.exports,b=o("5f5b"),p=(o("f9e3"),o("2dd8"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("div",[o("b-alert",{attrs:{dismissible:"",variant:"danger",show:t.showErro},on:{dismissed:function(e){t.showErro=!1}}},[t._v(t._s(t.erroMsg))]),o("b-alert",{attrs:{dismissible:"",variant:"success",show:t.dismissCountDown},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.okMsg))])],1)]),o("b-container",[o("b-row",{staticClass:"justify-content-md-center"},[o("b-col",[o("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("b-card",{attrs:{"no-body":""}},[o("b-tabs",{attrs:{card:""}},[o("b-tab",{attrs:{title:"Configurações do Servidor",active:""}},[o("b-row",[o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupUser",label:"Usuário:","label-for":"InputUser"}},[o("b-form-input",{attrs:{id:"InputUser",type:"text",required:"",placeholder:"Admin"},model:{value:t.cfg.user,callback:function(e){t.$set(t.cfg,"user",e)},expression:"cfg.user"}})],1)],1),o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupPass",label:"Senha:","label-for":"InputPass"}},[o("b-form-input",{attrs:{id:"InputPass",type:"password",required:""},model:{value:t.cfg.password,callback:function(e){t.$set(t.cfg,"password",e)},expression:"cfg.password"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupServ",label:"Endereço Servidor:","label-for":"InputServ"}},[o("b-form-input",{attrs:{id:"InputServ",type:"text",required:"",placeholder:"localhost"},model:{value:t.cfg.servidor,callback:function(e){t.$set(t.cfg,"servidor",e)},expression:"cfg.servidor"}})],1)],1),o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupInst",label:"Instância:","label-for":"InputInst"}},[o("b-form-input",{attrs:{id:"InputInst",type:"text",required:"",placeholder:"Default"},model:{value:t.cfg.instancia,callback:function(e){t.$set(t.cfg,"instancia",e)},expression:"cfg.instancia"}})],1)],1)],1),o("b-row",[o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupDb",label:"Banco de Dados:","label-for":"InputDb"}},[o("b-form-input",{attrs:{id:"InputDb",type:"text",required:"",placeholder:"ATXDADOS"},model:{value:t.cfg.base,callback:function(e){t.$set(t.cfg,"base",e)},expression:"cfg.base"}})],1)],1),o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{id:"InputGroupPort",label:"Porta XPPagamentos:","label-for":"InputPort"}},[o("b-form-input",{attrs:{id:"InputPort",type:"number",required:"",placeholder:"3333"},model:{value:t.cfg.porta,callback:function(e){t.$set(t.cfg,"porta",e)},expression:"cfg.porta"}})],1)],1)],1)],1),o("b-tab",{attrs:{title:"Configurações Operacionais"}},[o("b-row",[o("b-col",[o("b-form-checkbox",{model:{value:t.cfg.log,callback:function(e){t.$set(t.cfg,"log",e)},expression:"cfg.log"}},[t._v("Gerar log dos eventos")])],1)],1)],1)],1)],1),o("div",{staticClass:"mt-2 text-right"},[o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Salvar")])],1)],1)],1)],1),o("hr")],1)],1)}),h=[],m={data:function(){return{showErro:!1,dismissSecs:5,dismissCountDown:0,erroMsg:"",okMsg:"",cfg:{log:!1,user:"",password:"",servidor:"",database:"",grupoProdutos:[],instancia:"",porta:""}}},methods:{showOK:function(t){this.okMsg=t,this.dismissCountDown=this.dismissSecs},showFail:function(t){this.erroMsg=t,this.showErro=!0},onLoad:function(){var t=this;n()({method:"get",url:"/api/cfg"}).then(function(e){t.cfg.log=e.data.log,t.cfg.user=e.data.user,t.cfg.password=e.data.password,t.cfg.servidor=e.data.servidor,t.cfg.database=e.data.database,t.cfg.porta=e.data.porta,e.data.servidor.indexOf("\\")>0?(t.cfg.servidor=e.data.servidor.substr(0,e.data.servidor.indexOf("\\")),t.cfg.instancia=e.data.servidor.substr(e.data.servidor.indexOf("\\")+1)):(t.cfg.servidor=e.data.servidor,t.cfg.instancia="DEFAULT"),t.cfg.base=e.data.database}).catch(function(t){console.error(t)})},onSubmit:function(t){var e=this;t.preventDefault();var o=this.cfg;n()({method:"post",url:"/api/cfg",data:o}).then(function(t){200==t.status?e.showOK("Configurações atualizadas!"):(e.erroMsg="Houve problemas ao salvar as configurações!",e.showErro=!0)}).catch(function(t){console.log(t),e.$eventHub.$emit("saveCfg",404)})},onReset:function(t){t.preventDefault(),this.cfg.log=!1,this.cfg.user="",this.cfg.password="",this.cfg.servidor="",this.cfg.database="",this.cfg.instancia=""}},created:function(){this.onLoad()}},v=m,g=Object(d["a"])(v,p,h,!1,null,null,null),w=g.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("div",[o("b-alert",{attrs:{dismissible:"",variant:"danger",show:t.showErro},on:{dismissed:function(e){t.showErro=!1}}},[t._v(t._s(t.erroMsg))]),o("b-alert",{attrs:{dismissible:"",variant:"success",show:t.dismissCountDown},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.okMsg))])],1)]),o("b-container",{staticStyle:{padding:"10px"}},[o("b-row",[o("b-col",[o("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("b-card",{attrs:{"no-body":""}},[o("b-tabs",{attrs:{card:""}},[o("b-tab",{attrs:{title:"Configurações das Bandeiras de Cartões",active:""}},[o("b-row",[o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{label:"Bandeira:","label-for":"bandeira"}},[o("b-form-input",{attrs:{id:"bandeira",type:"text",required:"",placeholder:"Exemplo: VISA"},model:{value:t.bandeira,callback:function(e){t.bandeira=e},expression:"bandeira"}})],1)],1),o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{label:"Código Débito:","label-for":"debito"}},[o("b-form-input",{attrs:{id:"debito",type:"text",placeholder:"Exemplo: 20002"},model:{value:t.debito,callback:function(e){t.debito=e},expression:"debito"}})],1)],1),o("b-col",[o("b-form-group",{staticClass:"text-left",attrs:{label:"Código Crédito:","label-for":"credito"}},[o("b-form-input",{attrs:{id:"credito",type:"text",placeholder:"Exemplo: 1"},model:{value:t.credito,callback:function(e){t.credito=e},expression:"credito"}})],1)],1)],1),o("b-row",[o("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.topleft",modifiers:{hover:!0,topleft:!0}}],attrs:{title:"Marque essa opção caso o código seja de um cartão vale/voucher"}},[o("b-form-checkbox",{attrs:{id:"methodCard"},model:{value:t.vale,callback:function(e){t.vale=e},expression:"vale"}},[t._v("Cartão tipo Vale/Voucher")])],1),o("b-col"),o("b-col")],1)],1)],1)],1),o("div",{staticClass:"mt-2 text-right"},[o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Salvar")]),o("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"danger"}},[t._v("Limpar")])],1)],1)],1)],1),o("hr")],1),o("b-container",[o("b-table",{attrs:{striped:"",hover:"",small:"",items:t.cartoes,busy:"isBusy",fields:t.fields},scopedSlots:t._u([{key:"actions",fn:function(e){return[o("b-button",{staticStyle:{"margin-right":"2px"},attrs:{size:"sm",variant:"primary"},on:{click:function(o){return t.edit(e.item)}}},[o("font-awesome-icon",{attrs:{icon:"edit"}})],1),o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(o){return t.showConfirmacao(e.item.index)}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]}}])})],1)],1)},C=[],y={data:function(){return{bandeira:"",debito:"",credito:"",vale:!1,index:-1,cartoes:[],fields:[{key:"bandeira",label:"Bandeira",class:"text-center"},{key:"debito",label:"Cód. Débito",class:"text-right"},{key:"credito",label:"Cód. Crédito",class:"text-right"},{key:"tipoModal",label:"Vale/Voucher",class:"text-center",formatter:function(t){return 3==t?"Sim":"Não"}},{key:"actions",label:"Ações"}],isBusy:!1,showErro:!1,dismissSecs:5,dismissCountDown:0,erroMsg:"",okMsg:""}},methods:{showOK:function(t){this.okMsg=t,this.dismissCountDown=this.dismissSecs},showFail:function(t){this.erroMsg=t,this.showErro=!0},edit:function(t){console.log(t),this.bandeira=t.bandeira,this.debito=t.debito,this.credito=t.credito,this.vale=3==t.tipoModal,this.index=t.index},showConfirmacao:function(t){var e=this;this.$bvModal.msgBoxConfirm("Deseja mesmo deletar a configuração?",{title:"Por favor confirme!",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"SIM",cancelTitle:"NÃO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then(function(o){o&&n()({method:"post",url:"/api/cfg-cartoes/delete",data:{index:t}}).then(function(t){e.onLoad(),200==t.status?(e.showOK("Cadastro deletado!"),e.reset()):e.showFail("Houve problemas ao Deletar o cadastro!")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},validate:function(){var t=!1;if(this.bandeira)if(this.debito||this.credito)if(this.debito&&this.credito&&this.vale)this.showFail("Quando o cartão for do tipo Vale/Voucher favor informar somente um código de Crédito ou Débito!");else{var e=!1,o=this;this.cartoes.some(function(t){if(e=o.bandeira==t.bandeira&&o.index!=t.index,e)return e}),e?this.showFail("Configuração já existe!"):(t=!0,this.showErro=!1)}else this.showFail("Favor informar a pelo menos um Código de Débito ou Crédito");else this.showFail("Favor informar a Bandeira do Cartão");return t},onSubmit:function(t){var e=this;if(t.preventDefault(),this.validate()){var o={index:this.index,bandeira:this.bandeira,debito:this.debito,credito:this.credito,vale:this.vale};n()({method:"post",url:"/api/cfg-cartoes",data:o}).then(function(t){e.onLoad(),200==t.status?(e.showOK("Configurações atualizadas!"),e.onReset()):e.showFail("Houve problemas ao salvar as configurações!")}).catch(function(t){console.log(t)})}},onReset:function(t){this.bandeira="",this.debito="",this.credito="",this.vale=!1,this.index=-1},onLoad:function(){var t=this;n()({method:"get",url:"/api/cfg-cartoes"}).then(function(e){t.cartoes=e.data.cartoes,t.cartoes=t.cartoes.map(function(t,e){return t.index=e,t})}).catch(function(t){console.error(t)})}},created:function(){this.onLoad()}},k=y,S=Object(d["a"])(k,x,C,!1,null,null,null),_=(S.exports,{routes:[{path:"/",component:w}]}),D=o("8c4f"),I=o("ad3d"),O=o("c074"),M=o("ecee");M["c"].add(O["a"],O["b"]),a["default"].use(D["a"]),a["default"].component("font-awesome-icon",I["a"]),a["default"].use(b["a"]),a["default"].config.productionTip=!1,a["default"].prototype.$eventHub=new a["default"];var P=new D["a"](_);e["default"]=new a["default"]({router:P,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.0c050770.js.map