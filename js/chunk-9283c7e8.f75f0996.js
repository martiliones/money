(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9283c7e8"],{"2bc9":function(t,e,n){},"5c3a":function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),o={class:"flex-grow px-4 pt-6 flex flex-col justify-between"},i={class:"flex items-center justify-between gap-2"},r={class:"text-sm text-fg-light font-medium dark:text-fg"},l=Object(c["g"])("div",{class:"w-18px h-18px rounded-full bg-primary"},null,-1),a={class:"rounded border-brd-light border-1 px-2 flex gap-2 items-center p-1 cursor-pointer mt-4 dark:border-brd hover-button justify-center"},s=Object(c["g"])("div",{class:"text-fg-light dark:text-fg text-xs font-medium"}," Добавить операцию ",-1),u={class:"mt-4 flex flex-col gap-2"},b={class:"text-sm text-fg-light font-bold dark:text-fg mt-6 px-2"},d={class:"mb-2"},f={class:"flex justify-between items-center"},g=Object(c["g"])("div",null,[Object(c["i"])(" Ваши счета "),Object(c["g"])("span",{class:"text-fg-secondary-light pl-1 text-xs"},"95,459 ₸")],-1),j={class:"flex flex-col gap-1"},p={class:"flex flex-col gap-2 mt-6"},O={class:"flex gap-2 hover-button rounded items-center px-2 py-1 cursor-pointer text-fg-secondary-light"},m=Object(c["g"])("div",{class:"text-sm font-medium"}," Пригласить друзей ",-1),x={class:"flex gap-2 hover-button rounded items-center px-2 py-1 cursor-pointer text-fg-secondary-light"},h=Object(c["g"])("div",{class:"text-sm font-medium"}," Помощь и поддержка ",-1),v=Object(c["g"])("div",{class:"w-full border-t-1px border-color my-3"},null,-1),k=Object(c["g"])("div",{class:"text-sm font-medium"}," Выйти из аккаунта ",-1),y={class:"lg:hidden"},w={class:"lg:ml-55 background min-h-100vh <lg:pt-12 flex flex-col"};function C(t,e,n,C,z,I){var M=Object(c["z"])("router-link"),$=Object(c["z"])("PlusSmIcon"),F=Object(c["z"])("NavLink"),_=Object(c["z"])("ChatIcon"),A=Object(c["z"])("LogoutIcon"),S=Object(c["z"])("MenuIcon"),L=Object(c["z"])("router-view"),U=Object(c["z"])("Modal");return Object(c["t"])(),Object(c["f"])(c["a"],null,[z.openMenu?(Object(c["t"])(),Object(c["f"])("div",{key:0,class:"h-100vh w-full fixed left-0 top-0",onClick:e[0]||(e[0]=function(t){return z.openMenu=!1})})):Object(c["e"])("",!0),Object(c["g"])("nav",{class:Object(c["p"])(["lg:left-0 <lg:pt-12 fixed top-0 h-100vh w-55 border-r-1 border-color dark:text-fg background z-99 transition-all flex overflow-y-auto",{"left-0":z.openMenu,"-left-55":!z.openMenu}]),onClick:e[3]||(e[3]=function(){return I.handleClick&&I.handleClick.apply(I,arguments)})},[Object(c["g"])("div",o,[Object(c["g"])("div",null,[Object(c["j"])(M,{to:"/user"},{default:Object(c["F"])((function(){var e;return[Object(c["g"])("div",i,[Object(c["g"])("div",r,Object(c["C"])(null===(e=t.$store.state.auth.me)||void 0===e?void 0:e.login),1),l])]})),_:1}),Object(c["g"])("div",a,[Object(c["j"])($,{class:"w-4 h-4"}),s]),Object(c["g"])("div",u,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(z.nav,(function(t,e){return Object(c["t"])(),Object(c["d"])(F,{key:e,to:t.to,icon:t.icon},{default:Object(c["F"])((function(){return[Object(c["i"])(Object(c["C"])(t.name),1)]})),_:2},1032,["to","icon"])})),128))]),Object(c["g"])("div",b,[Object(c["g"])("div",d,[Object(c["g"])("div",f,[g,Object(c["g"])("div",{onClick:e[1]||(e[1]=function(t){return z.isCreatingAccount=!0}),class:"p-0.5 border-color border-1 rounded cursor-pointer hover-button"},[Object(c["j"])($,{class:"w-4 h-4"})])])]),Object(c["g"])("div",j,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(z.accounts,(function(t,e){return Object(c["t"])(),Object(c["d"])(F,{key:e,to:t.to,icon:t.icon},{default:Object(c["F"])((function(){return[Object(c["i"])(Object(c["C"])(t.name),1)]})),_:2},1032,["to","icon"])})),128))])])]),Object(c["g"])("div",p,[Object(c["g"])("div",O,[Object(c["j"])($,{class:"w-4 h-4"}),m]),Object(c["j"])(M,{to:"/faq"},{default:Object(c["F"])((function(){return[Object(c["g"])("div",x,[Object(c["j"])(_,{class:"w-4 h-4"}),h])]})),_:1}),v,Object(c["g"])("div",{onClick:e[2]||(e[2]=function(){return I.logout&&I.logout.apply(I,arguments)}),class:"flex gap-2 hover-button rounded mb-6 items-center px-2 py-1 cursor-pointer text-fg-secondary-light"},[Object(c["j"])(A,{class:"w-4 h-4"}),k])])])],2),Object(c["g"])("nav",y,[Object(c["g"])("div",{onClick:e[4]||(e[4]=function(t){return z.openMenu=!z.openMenu}),class:"border-1 rounded p-2 mt-4 border-color background flex items-center cursor-pointer fixed left-4 top-0 z-100 hover:text-fg-light hover:dark:text-fg text-fg-secondary-light"},[Object(c["j"])(S,{class:"h-4 w-4"})])]),Object(c["g"])("div",w,[Object(c["j"])(L)]),Object(c["j"])(U,{visible:z.isCreatingAccount,onConfirmation:I.handleConfirmationCreate},null,8,["visible","onConfirmation"])],64)}var z=n("9510"),I={class:"py-6 px-6"},M={class:"text-fg-light dark:text-fg text-sm font-medium mb-4 flex gap-1 items-center"},$={class:"px-2 py-1 rounded flex items-center gap-2"},F=Object(c["g"])("div",null," Новый счет ",-1),_=Object(c["g"])("input",{placeholder:"Название счета...",class:"w-165 bg-transparent text-fg-light dark:text-fg font-medium text-lg placeholder-opacity-50"},null,-1),A=Object(c["g"])("input",{resize:"none",placeholder:"Добавить описание...",class:"block w-165 bg-transparent text-fg-light dark:text-fg font-light text-tiny placeholder-opacity-50 mt-3 resize-none outline-none"},null,-1),S={class:"flex gap-4 justify-between mt-6"},L={class:"flex gap-2 items-center"},U=Object(c["g"])("div",null," Наличные ",-1),G=Object(c["i"])(" Создать счет ");function N(t,e,n,o,i,r){var l,a=Object(c["z"])("UserIcon"),s=Object(c["z"])("ChevronRightIcon"),u=Object(c["z"])("CashIcon"),b=Object(c["z"])("UiButton");return n.visible?(Object(c["t"])(),Object(c["f"])("div",{key:0,onClick:e[3]||(e[3]=function(e){return t.$emit("confirmation",!1)}),class:"fixed z-102 top-0 left-0 bg-wrap w-full h-100vh flex items-center justify-center px-2"},[Object(c["g"])("div",{onClick:e[2]||(e[2]=Object(c["G"])((function(){}),["stop"])),class:"modal shadow-modal border-color border-1 bg-base-bg-light dark:bg-base-bg rounded-lg max-w-full"},[Object(c["g"])("div",I,[Object(c["g"])("div",M,[Object(c["g"])("div",$,[Object(c["j"])(a,{class:"w-3 h-3"}),Object(c["g"])("div",null,Object(c["C"])(null===(l=t.$store.state.auth.me)||void 0===l?void 0:l.login),1)]),Object(c["j"])(s,{class:"w-3 h-3"}),F]),_,A,Object(c["g"])("div",S,[Object(c["j"])(b,{onClick:e[0]||(e[0]=Object(c["G"])((function(e){return t.$emit("confirmation",!0)}),["prevent"])),type:"transparent",class:"px-3 py-1 rounded transition-all text-xs bg-btn-light-hover dark:bg-btn-hover"},{default:Object(c["F"])((function(){return[Object(c["g"])("div",L,[Object(c["j"])(u,{class:"w-4 h-4"}),U])]})),_:1}),Object(c["j"])(b,{onClick:e[1]||(e[1]=Object(c["G"])((function(e){return t.$emit("confirmation",!1)}),["prevent"])),type:"primary",class:"text-xs py-1 px-3 font-medium"},{default:Object(c["F"])((function(){return[G]})),_:1})])])])])):Object(c["e"])("",!0)}var E=n("fd7f"),P=n("8bd7"),B={props:["visible"],components:{UiButton:P["a"],CashIcon:E["a"],UserIcon:E["d"],ChevronRightIcon:E["b"]}},J=(n("a606"),n("d959")),R=n.n(J);const T=R()(B,[["render",N]]);var q=T,K={class:"flex gap-2 rounded items-center px-2 py-1 cursor-pointer text-fg-light dark:text-fg hover-button"},X={class:"text-sm font-medium"};function D(t,e,n,o,i,r){var l=Object(c["z"])("router-link");return Object(c["t"])(),Object(c["d"])(l,{to:n.to},{default:Object(c["F"])((function(){return[Object(c["g"])("div",K,[(Object(c["t"])(),Object(c["d"])(Object(c["A"])(n.icon),{class:"w-4 h-4"})),Object(c["g"])("div",X,[Object(c["y"])(t.$slots,"default")])])]})),_:3},8,["to"])}var H={name:"NavLink",props:["to","icon"]};const Q=R()(H,[["render",D]]);var V=Q,W=function t(e){return"A"===e.tagName||!!e.parentElement&&t(e.parentElement)},Y={components:{MenuIcon:z["k"],PlusSmIcon:z["l"],ChatIcon:z["c"],LogoutIcon:z["j"],Modal:q,NavLink:V},data:function(){return{openMenu:!1,isCreatingAccount:!0,PlusSmIcon:z["l"],accounts:[{name:"Наличные",icon:z["a"],to:"/account"},{name:"Kaspi Gold",icon:z["f"],to:"/account"}],nav:[{name:"Планирование",icon:z["m"],to:"/planing"},{name:"Операции",icon:z["e"],to:"/planing"},{name:"Статистика",icon:z["b"],to:"/planing"},{name:"Итоги года",icon:z["i"],to:"/planing"}]}},mounted:function(){this.$store.state.auth.me||this.$store.dispatch("auth/getMe")},methods:{logout:function(){var t=this;this.$store.dispatch("auth/logout").then((function(){t.$router.push(t.$route.params.nextUrl||"/login")}))},handleClick:function(t){console.log(t),W(t.originalTarget)&&(this.openMenu=!1)},handleConfirmationCreate:function(t){t||(this.isCreatingAccount=!1)}}};const Z=R()(Y,[["render",C]]);e["default"]=Z},a606:function(t,e,n){"use strict";n("2bc9")},b0c0:function(t,e,n){var c=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),r=n("9bf2").f,l=Function.prototype,a=i(l.toString),s=/^\s*function ([^ (]*)/,u=i(s.exec),b="name";c&&!o&&r(l,b,{configurable:!0,get:function(){try{return u(s,a(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-9283c7e8.f75f0996.js.map