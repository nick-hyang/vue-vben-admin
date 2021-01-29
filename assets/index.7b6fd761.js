var e=Object.assign;import{u as l,aF as n,aZ as t,e as o,d as a,aD as s,j as r,cU as i,D as c,cV as u,aX as d,aY as f,r as p,$ as g,aT as m,q as h,bW as b,E as v,h as C,bA as F,o as y,i as k,w as H,H as M,b0 as O,bO as S,aK as x,aL as P,k as w,T as j,m as $,l as W,bc as T,cy as R,aU as B,a$ as E,cS as A,bx as N,aM as _,a as L,cW as V,cX as I,t as q,cR as X,bZ as D,bX as Y}from"./index.89eaa474.js";import{u as z}from"./useTimeout.2438cbf6.js";import{u as U}from"./useAttrs.2235e19b.js";import{u as Z}from"./useWindowSizeFn.02c59bc0.js";import{_ as K,d as G}from"./index.72bfb6c6.js";import{F as J,a as Q}from"./FullscreenOutlined.038a48b5.js";import{i as ee}from"./isEqual.0bcea136.js";const{t:le}=l(),ne={visible:n.bool,height:n.number,minHeight:n.number,draggable:n.bool.def(!0),centered:n.bool,cancelText:n.string.def(le("common.cancelText")),okText:n.string.def(le("common.okText")),closeFunc:Function},te=Object.assign({},ne,{defaultFullscreen:n.bool,canFullscreen:n.bool.def(!0),wrapperFooterOffset:n.number.def(0),helpMessage:[String,Array],useWrapper:n.bool.def(!0),loading:n.bool,loadingTip:n.string,showCancelBtn:n.bool.def(!0),showOkBtn:n.bool.def(!0),wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:n.bool.def(!0),closeIcon:Object,confirmLoading:n.bool,destroyOnClose:n.bool,footer:Object,getContainer:Function,mask:n.bool.def(!0),maskClosable:n.bool.def(!0),keyboard:n.bool.def(!0),maskStyle:Object,okType:n.string.def("primary"),okButtonProps:Object,cancelButtonProps:Object,title:n.string,visible:n.bool,width:[String,Number],wrapClassName:n.string,zIndex:n.number});function oe(e){const l=(e,l)=>getComputedStyle(e)[l],n=n=>{if(!n)return;n.setAttribute("data-drag",o(e.draggable));const t=n.querySelector(".ant-modal-header"),a=n.querySelector(".ant-modal");t&&a&&o(e.draggable)&&(t.style.cursor="move",t.onmousedown=e=>{if(!e)return;const n=e.clientX,t=e.clientY,o=document.body.clientWidth,s=document.documentElement.clientHeight,r=a.offsetWidth,i=a.offsetHeight,c=a.offsetLeft,u=o-a.offsetLeft-r,d=a.offsetTop,f=s-a.offsetTop-i,p=l(a,"left"),g=l(a,"top");let m=+p,h=+g;p.includes("%")?(m=+document.body.clientWidth*(+p.replace(/%/g,"")/100),h=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(m=+p.replace(/px/g,""),h=+g.replace(/px/g,"")),document.onmousemove=function(e){let l=e.clientX-n,o=e.clientY-t;-l>c?l=-c:l>u&&(l=u),-o>d?o=-d:o>f&&(o=f),a.style.cssText+=`;left:${l+m}px;top:${o+h}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};t((()=>{o(e.visible)&&o(e.draggable)&&z((()=>{(()=>{const t=document.querySelectorAll(".ant-modal-wrap");for(const a of Array.from(t)){if(!a)continue;const t=l(a,"display"),s=a.getAttribute("data-drag");"none"!==t&&(null===s||o(e.destroyOnClose))&&n(a)}})()}),30)}))}var ae=a({name:"Modal",inheritAttrs:!1,props:te,setup(l,{slots:n}){const{visible:t,draggable:a,destroyOnClose:d}=s(l),f=U();return oe({visible:t,destroyOnClose:d,draggable:a}),()=>{let t;const a=e(e({},o(f)),l);return r(u,a,"function"==typeof(s=t=i(n))||"[object Object]"===Object.prototype.toString.call(s)&&!c(s)?t:{default:()=>[t]});var s}}});const se=Symbol();function re(){return f(se)}var ie=a({name:"ModalWrapper",components:{ScrollContainer:K},inheritAttrs:!1,props:{loading:n.bool,useWrapper:n.bool.def(!0),modalHeaderHeight:n.number.def(57),modalFooterHeight:n.number.def(74),minHeight:n.number.def(200),height:n.number,footerOffset:n.number.def(0),visible:n.bool,fullScreen:n.bool,loadingTip:n.string},emits:["height-change","ext-height"],setup(e,{emit:l}){const n=p(null),a=p(null),s=p(0),r=p(0);let i=0;Z(u),d({redoModalHeight:u},se);const c=g((()=>({minHeight:`${e.minHeight}px`,height:`${o(s)}px`})));async function u(){if(!e.visible)return;const t=o(n);if(!t)return;const r=t.$el.parentElement;if(r){r.style.padding="0",await v();try{const n=r.parentElement&&r.parentElement.parentElement;if(!n)return;const t=getComputedStyle(n).top,c=Number.parseInt(t);let u=window.innerHeight-2*c+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;c<40&&(u-=26),await v();const d=o(a);if(!d)return;await v(),i=d.scrollHeight,e.fullScreen?s.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:s.value=e.height?e.height:i>u?u:i,l("height-change",o(s))}catch(c){}}}return t((()=>{e.useWrapper&&u()})),m((()=>e.fullScreen),(e=>{u(),e?r.value=s.value:s.value=r.value})),h((()=>{const{modalHeaderHeight:n,modalFooterHeight:t}=e;l("ext-height",n+t)})),b((()=>{})),{wrapperRef:n,spinRef:a,spinStyle:c}}});ie.render=function(e,l,n,t,o,a){const s=C("ScrollContainer"),i=F("loading");return y(),k(s,{ref:"wrapperRef"},{default:H((()=>[M(r("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,["loading-tip"]),[[i,e.loading]])])),_:3},512)};var ce=a({name:"ModalClose",components:{FullscreenExitOutlined:J,FullscreenOutlined:Q,CloseOutlined:S},props:{canFullscreen:n.bool.def(!0),fullScreen:n.bool},emits:["cancel","fullscreen"],setup(e,{emit:l}){const{prefixCls:n}=x("basic-modal-close");return{getClass:g((()=>[n,`${n}--custom`,{[`${n}--can-full`]:e.canFullscreen}])),prefixCls:n,handleCancel:function(){l("cancel")},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),l("fullscreen")}}}});ce.render=function(e,l,n,t,o,a){const s=C("FullscreenExitOutlined"),i=C("FullscreenOutlined"),c=C("CloseOutlined");return y(),k("div",{class:e.getClass},[e.canFullscreen?(y(),k(P,{key:0},[e.fullScreen?(y(),k(s,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(y(),k(i,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):w("",!0),r(c,{onClick:e.handleCancel},null,8,["onClick"])],2)};var ue=a({name:"BasicModalFooter",props:te,emits:["ok","cancel"],setup:(e,{emit:l})=>({handleOk:function(){l("ok")},handleCancel:function(){l("cancel")}})});ue.render=function(e,l,n,t,o,a){const s=C("a-button");return y(),k("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(y(),k(s,j({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:H((()=>[$(W(e.cancelText),1)])),_:1},16,["onClick"])):w("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(y(),k(s,j({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:H((()=>[$(W(e.okText),1)])),_:1},16,["type","onClick","loading"])):w("",!0),O(e.$slots,"appendFooter")])};var de=a({name:"BasicModalHeader",components:{BasicTitle:G},props:{helpMessage:{type:[String,Array]},title:n.string}});de.render=function(e,l,n,t,o,a){const s=C("BasicTitle");return y(),k(s,{helpMessage:e.helpMessage},{default:H((()=>[$(W(e.title),1)])),_:1},8,["helpMessage"])};var fe=a({name:"BasicModal",components:{Modal:ae,ModalWrapper:ie,ModalClose:ce,ModalFooter:ue,ModalHeader:de},inheritAttrs:!1,props:te,emits:["visible-change","height-change","cancel","ok","register"],setup(l,{emit:n,attrs:a}){const s=p(!1),r=p(null),i=p(null),c=p(0),u={setModalProps:function(e){if(r.value=A(o(r)||{},e),!Reflect.has(e,"visible"))return;s.value=!!e.visible},emitVisible:void 0},d=E();d&&n("register",u,d.uid);const f=g((()=>e(e({},l),o(r)))),{handleFullScreen:h,getWrapClassName:b,fullScreenRef:v}=function(e){const l=p(!1);return{getWrapClassName:g((()=>{const n=o(e.wrapClassName)||"";return o(l)?`fullscreen-modal ${n} `:o(n)})),handleFullScreen:function(e){e&&e.stopPropagation(),l.value=!o(l)},fullScreenRef:l}}({modalWrapperRef:i,extHeightRef:c,wrapClassName:T(f.value,"wrapClassName")}),C=g((()=>{const l=e(e({},o(f)),{visible:o(s),title:void 0});return e(e({},l),{wrapClassName:o(b)})})),F=g((()=>e(e({},a),o(C))));return t((()=>{s.value=!!l.visible,v.value=!!l.defaultFullscreen})),m((()=>o(s)),(e=>{var l;n("visible-change",e),d&&(null==(l=u.emitVisible)||l.call(u,e,d.uid))}),{immediate:!1}),{handleCancel:async function(e){if(null==e||e.stopPropagation(),l.closeFunc&&B(l.closeFunc)){const e=await l.closeFunc();s.value=!e}else s.value=!1,n("cancel")},getBindValue:F,getProps:C,handleFullScreen:h,fullScreenRef:v,getMergeProps:f,handleOk:function(){n("ok")},visibleRef:s,omit:R,modalWrapperRef:i,handleExtHeight:function(e){c.value=e},handleHeightChange:function(e){n("height-change",e)}}}});fe.render=function(e,l,n,t,o,a){const s=C("ModalClose"),i=C("ModalHeader"),c=C("ModalFooter"),u=C("ModalWrapper"),d=C("Modal");return y(),k(d,j({onCancel:e.handleCancel},e.getBindValue),N({default:H((()=>[r(u,j({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,minHeight:e.getProps.minHeight,height:e.getProps.height,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:H((()=>[O(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:H((()=>[r(s,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:H((()=>[r(i,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title},null,8,["helpMessage","title"])]))},e.$slots.footer?void 0:{name:"footer",fn:H((()=>[r(c,j(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),N({_:2},[_(Object.keys(e.$slots),(l=>({name:l,fn:H((n=>[O(e.$slots,l,n)]))})))]),1040,["onOk","onCancel"])]))},_(Object.keys(e.omit(e.$slots,"default")),(l=>({name:l,fn:H((n=>[O(e.$slots,l,n)]))})))]),1040,["onCancel"])};const pe=L({}),ge=L({});function me(){V();const e=p(null),l=p(!1),n=p("");const t=()=>{const l=o(e);return l||X("useModal instance is undefined!"),l};return[function(t,a){n.value=a,b((()=>{e.value=null,l.value=!1,pe[o(n)]=null})),o(l)&&I()&&t===o(e)||(e.value=t,t.emitVisible=(e,l)=>{ge[l]=e})},{setModalProps:e=>{var l;null==(l=t())||l.setModalProps(e)},getVisible:g((()=>ge[~~o(n)])),openModal:(e=!0,l,a=!0)=>{var s;if(null==(s=t())||s.setModalProps({visible:e}),!l)return;if(a)return pe[o(n)]=null,void(pe[o(n)]=l);ee(q(pe[o(n)]),l)||(pe[o(n)]=l)}}]}const he=e=>{const l=p(null),n=E(),a=p(""),s=()=>{const e=o(l);return e||X("useModalInner instance is undefined!"),e};return t((()=>{const l=pe[o(a)];l&&e&&B(e)&&v((()=>{e(l)}))})),[(e,t)=>{D((()=>{l.value=null})),a.value=t,l.value=e,null==n||n.emit("register",e,t)},{changeLoading:(e=!0)=>{var l;null==(l=s())||l.setModalProps({loading:e})},getVisible:g((()=>ge[~~o(a)])),changeOkLoading:(e=!0)=>{var l;null==(l=s())||l.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=s())||e.setModalProps({visible:!1})},setModalProps:e=>{var l;null==(l=s())||l.setModalProps(e)}}]};Y(fe);export{fe as _,he as a,me as b,re as u};
