import{r as e,cl as a,cm as t,q as s,s as n,aU as o,e as r,bR as l,cn as i,bS as c,u as d,bu as p,b5 as u,a1 as f,co as h,bI as m,E as v,aC as C,d as x,aK as g,h as b,o as S,i as _,j as w,l as y,bw as k,$,bA as E,b2 as A,H as j,b8 as I,aL as M,aM as R,k as T,b4 as N,bN as O,b1 as D,m as U}from"./index.1d8b385f.js";import"./index.95c10fda.js";import{I as K}from"./index.2292ad4b.js";import{b as L,u as H,d as W}from"./useHeaderSetting.f804b134.js";import{u as z}from"./useScrollTo.ff4d48ef.js";import{C as F}from"./clickOutside.ae0da015.js";import{S as P}from"./SearchOutlined.094b03ed.js";import"./vendor.3b1829c7.js";import"./EyeOutlined.87340723.js";import"./animation.dd9fb5c4.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";const B=["keydown"],q={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},G={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},J={ctrl:e=>e.ctrlKey,shift:e=>e.shiftKey,alt:e=>e.altKey,meta:e=>e.metaKey};function Q(e,a){if(!e.key)return!1;if(i(a))return e.keyCode===a;const t=a.split(".");let s=0;for(const n of t){const a=J[n],t=G[n],o=q[n];(a&&a(e)||(t&&c(t)?t.includes(e.key):t===e.key)||(o&&c(o)?o.includes(e.keyCode):o===e.keyCode)||e.key.toUpperCase()===n.toUpperCase())&&s++}return s===t.length}function V(e,a=t,d={}){const{events:p=B,target:u}=d;let f;function h(t){if(function(e){return o(e)?e:l(e)||i(e)?a=>Q(a,e):c(e)?a=>e.some((e=>Q(a,e))):e?()=>!0:()=>!1}(e)(t))return a(t)}s((()=>{if(f=function(e,a){if(!e)return a;let t;t=o(e)?e():r(e);return t}(u,window),f)for(const e of p)f.addEventListener(e,h)})),n((()=>{if(f)for(const e of p)f.removeEventListener(e,h)}))}var X,Y;function Z(a,t,s){const n=e([]),o=e(""),l=e(-1);let i=[];const{t:c}=d(),x=C(),[g]=p((function(e){null==e||e.stopPropagation();const a=e.target.value;if(o.value=a.trim(),!a)return void(n.value=[]);const t=function(e){const a=["",...[...e].map((e=>{return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(a=e)?`\\${a}`:a;var a})),""].join(".*");return new RegExp(a)}(r(o)),s=m(i,(e=>t.test(e.name)));n.value=b(s,t),l.value=0}),200);function b(e,a,t){const s=[];return e.forEach((e=>{const{name:n,path:o,icon:r,children:l}=e;a.test(n)&&!(null==l?void 0:l.length)&&s.push({name:(null==t?void 0:t.name)?`${t.name} > ${n}`:n,path:o,icon:r}),Array.isArray(l)&&l.length&&s.push(...b(l,a,e))})),s}function S(){const e=r(a);if(!e||!Array.isArray(e)||0===e.length||!r(t))return;const s=e[r(l)];if(!s)return;const n=r(t);if(!n)return;const o=s.offsetTop+s.offsetHeight,i=n.offsetHeight,{start:c}=z({el:n,duration:100,to:o-i});c()}async function _(){if(!n.value.length)return;const e=r(n),a=r(l);if(0===e.length||a<0)return;const t=e[a];w(),await v(),x(t.path)}function w(){n.value=[],s("close")}return u((async()=>{const e=await L();i=f(e),h(i,(e=>{e.name=c(e.name)}))})),V(["enter","up","down","esc"],(e=>{switch(e.keyCode){case 38:n.value.length&&(l.value--,l.value<0&&(l.value=n.value.length-1),S());break;case 40:n.value.length&&(l.value++,l.value>n.value.length-1&&(l.value=0),S());break;case 13:_();break;case 27:w()}})),{handleSearch:g,searchResult:n,keyword:o,activeIndex:l,handleMouseenter:function(e){const a=e.target.dataset.index;l.value=Number(a)},handleEnter:_}}(Y=X||(X={}))[Y.UP=38]="UP",Y[Y.DOWN=40]="DOWN",Y[Y.ENTER=13]="ENTER",Y[Y.ESC=27]="ESC";var ee=x({name:"AppSearchFooter",components:{},setup(){const{prefixCls:e}=g("app-search-footer"),{t:a}=d();return{prefixCls:e,t:a}}});const ae=k("data-v-8d332632")(((e,a,t,s,n,o)=>{const r=b("g-icon");return S(),_("div",{class:`${e.prefixCls}`},[w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"ant-design:enter-outlined"})],2),w("span",null,y(e.t("component.app.toSearch")),1),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"bi:arrow-up"})],2),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"bi:arrow-down"})],2),w("span",null,y(e.t("component.app.toNavigate")),1),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"mdi:keyboard-esc"})],2),w("span",null,y(e.t("common.closeText")),1)],2)}));ee.render=ae,ee.__scopeId="data-v-8d332632";var te=x({name:"AppSearchModal",components:{SearchOutlined:P,AppSearchFooter:ee,[K.name]:K},directives:{clickOutside:F},props:{visible:Boolean},emits:["close"],setup(t,{emit:s}){const n=e(null),{prefixCls:o}=g("app-search-modal"),{t:l}=d(),[i,c]=function(){const t=e([]);return a((()=>{t.value=[]})),[t,e=>a=>{t.value[e]=a}]}(),{getIsMobile:p}=H(),{handleSearch:u,searchResult:f,keyword:h,activeIndex:m,handleEnter:v,handleMouseenter:C}=Z(i,n,s),x=$((()=>!h||0===r(f).length)),b=$((()=>[o,{[`${o}--mobile`]:r(p)}]));return{t:l,prefixCls:o,getClass:b,handleSearch:u,searchResult:f,activeIndex:m,getIsNotData:x,handleEnter:v,setRefs:c,scrollWrap:n,handleMouseenter:C,handleClose:()=>{f.value=[],s("close")}}}});const se=k("data-v-368ac6fe"),ne=se(((e,a,t,s,n,o)=>{const r=b("SearchOutlined"),l=b("a-input"),i=b("g-icon"),c=b("AppSearchFooter"),d=E("click-outside");return S(),_(O,{to:"body"},[w(N,{name:"zoom-fade",mode:"out-in"},{default:se((()=>[e.visible?(S(),_("div",{key:0,class:e.getClass,onClick:a[4]||(a[4]=A((()=>{}),["stop"]))},[j(w("div",{class:`${e.prefixCls}-content`},[w("div",{class:`${e.prefixCls}-input__wrapper`},[w(l,{class:`${e.prefixCls}-input`,placeholder:e.t("common.searchText"),"allow-clear":"",onChange:e.handleSearch},{prefix:se((()=>[w(r)])),_:1},8,["class","placeholder","onChange"]),w("span",{class:`${e.prefixCls}-cancel`,onClick:a[1]||(a[1]=(...a)=>e.handleClose&&e.handleClose(...a))},y(e.t("common.cancelText")),3)],2),j(w("div",{class:`${e.prefixCls}-not-data`},y(e.t("component.app.searchNotData")),3),[[I,e.getIsNotData]]),j(w("ul",{class:`${e.prefixCls}-list`,ref:"scrollWrap"},[(S(!0),_(M,null,R(e.searchResult,((t,s)=>(S(),_("li",{ref:e.setRefs(s),key:t.path,"data-index":s,onMouseenter:a[2]||(a[2]=(...a)=>e.handleMouseenter&&e.handleMouseenter(...a)),onClick:a[3]||(a[3]=(...a)=>e.handleEnter&&e.handleEnter(...a)),class:[`${e.prefixCls}-list__item`,{[`${e.prefixCls}-list__item--active`]:e.activeIndex===s}]},[w("div",{class:`${e.prefixCls}-list__item-icon`},[w(i,{icon:t.icon||"mdi:form-select",size:20},null,8,["icon"])],2),w("div",{class:`${e.prefixCls}-list__item-text`},y(t.name),3),w("div",{class:`${e.prefixCls}-list__item-enter`},[w(i,{icon:"ant-design:enter-outlined",size:20})],2)],42,["data-index"])))),128))],2),[[I,!e.getIsNotData]]),w(c)],2),[[d,e.handleClose]])],2)):T("",!0)])),_:1})])}));te.render=ne,te.__scopeId="data-v-368ac6fe";var oe=x({name:"AppSearch",components:{AppSearchModal:te,Tooltip:D,SearchOutlined:P},setup(){const a=e(!1),{prefixCls:t}=g("app-search"),{getShowSearch:s}=W(),{t:n}=d();return{t:n,prefixCls:t,showModal:a,getShowSearch:s,handleClose:()=>{a.value=!1},handleSearch:function(){a.value=!0}}}});const re=k("data-v-261daa90"),le=re(((e,a,t,s,n,o)=>{const r=b("SearchOutlined"),l=b("Tooltip"),i=b("AppSearchModal");return e.getShowSearch?(S(),_("div",{key:0,class:e.prefixCls,onClick:a[1]||(a[1]=A(((...a)=>e.handleSearch&&e.handleSearch(...a)),["stop"]))},[w(l,null,{title:re((()=>[U(y(e.t("common.searchText")),1)])),default:re((()=>[w(r)])),_:1}),w(i,{onClose:e.handleClose,visible:e.showModal},null,8,["onClose","visible"])],2)):T("",!0)}));oe.render=le,oe.__scopeId="data-v-261daa90";export default oe;