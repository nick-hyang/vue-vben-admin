import{d as e,cf as a,r as t,a0 as n,K as s,x as r,e as i,h as o,o as l,i as c,j as d,bw as m}from"./index.fc2bceed.js";import{g as p}from"./domUtils.20d68c97.js";import{u as f}from"./useWindowSizeFn.9bbe50ab.js";import"./vendor.3b1829c7.js";import"./_stringToArray.e6ffaa09.js";var u=e({name:"IFrame",components:{Spin:a},props:{frameSrc:{type:String,default:""}},setup(){const e=t(!1),a=t(50),o=t(window.innerHeight),l=t(null);function c(){const e=i(l);if(!e)return;let{top:t}=p(e);t+=20,a.value=t,o.value=window.innerHeight-t;const n=document.documentElement.clientHeight-t;e.style.height=`${n}px`}function d(){e.value=!1,c()}return f(c,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=i(l);e&&(e.attachEvent?e.attachEvent("onload",(()=>{d()})):e.onload=()=>{d()})}))})),{getWrapStyle:s((()=>({height:`${i(o)}px`}))),loading:e,frameRef:l}}});const g=m("data-v-e11edb42"),v=g(((e,a,t,n,s,r)=>{const i=o("Spin");return l(),c("div",{class:"iframe-page",style:e.getWrapStyle},[d(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:g((()=>[d("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));u.render=v,u.__scopeId="data-v-e11edb42";export default u;
