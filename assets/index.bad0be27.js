import{d as a,b$ as e,r as s,bG as t,bH as o,h as l,o as i,i as n,j as r,aU as d,aA as c,aB as p,aY as u,m as v}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import{F as S,S as m,a as T,b as f,c as b,d as x,e as R,f as X,g as Y,h as j,i as _,E as h,j as g}from"./index.8a587a60.js";import{_ as y}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var F=a({components:{Select:e,PageWrapper:y,FadeTransition:S,ScaleTransition:m,SlideYTransition:T,ScrollYTransition:f,SlideYReverseTransition:b,ScrollYReverseTransition:x,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:Y,ScrollXReverseTransition:j,ScaleRotateTransition:_,ExpandXTransition:h,ExpandTransition:g},setup(){const a=s("Fade"),e=s(!0);return{options:E,value:a,start:function(){e.value=!1,setTimeout((()=>{e.value=!0}),300)},show:e}}});const k=u("data-v-51fb1392");t("data-v-51fb1392");const w={class:"flex"},C=v(" start "),P={class:"box"};o();const U=k(((a,e,s,t,o,u)=>{const v=l("Select"),S=l("a-button"),m=l("PageWrapper");return i(),n(m,{title:"动画组件示例"},{default:k((()=>[r("div",w,[r(v,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(S,{type:"primary",class:"ml-4",onClick:a.start},{default:k((()=>[C])),_:1},8,["onClick"])]),(i(),n(d(`${a.value}Transition`),null,{default:k((()=>[c(r("div",P,null,512),[[p,a.show]])])),_:1}))])),_:1})}));F.render=U,F.__scopeId="data-v-51fb1392";export default F;