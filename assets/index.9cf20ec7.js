import{d as e,r as a,dn as s,dp as t,h as i,o,i as r,j as n,bs as l,a3 as d,b8 as p,bw as c,m}from"./index.b35d627b.js";import{S as u}from"./index.b1b871ed.js";import{_ as f}from"./index.b87f3b54.js";import{F as b,S as v,a as S,b as j,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.15783dfd.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.2d9a2a5e.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.14695b3f.js";import"./index.b30471b8.js";import"./RightOutlined.8f262b29.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./isEqual.81a8f73e.js";import"./toInteger.ba85bbaa.js";/* empty css              */import"./index.df0929cf.js";import"./usePageContext.ceff001a.js";import"./transButton.f2853e28.js";import"./ArrowLeftOutlined.a6b6ea94.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:b,ScaleTransition:v,SlideYTransition:S,ScrollYTransition:j,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=c("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,c,m)=>{const u=i("Select"),f=i("a-button"),b=i("PageWrapper");return o(),r(b,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[p,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;