import{d as e,a9 as t,h as s,o as a,i as n,j as i,l as r,a0 as o,aY as p}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import{I as m}from"./index.55180915.js";import"./index.1156589c.js";import"./index.d138d7fc.js";import"./RightOutlined.7a52ca15.js";import"./SettingOutlined.a20a6645.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useHeaderSetting.2947a160.js";import{b as d}from"./index.c3927da1.js";var u=e({name:"InputNumberItem",components:{InputNumber:m},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:s}=t("setting-input-number-item");return{prefixCls:s,handleChange:function(t){e.event&&d(e.event,t)}}}});const l=p("data-v-c7d8b828")(((e,t,p,m,d,u)=>{const l=s("InputNumber");return a(),n("div",{class:e.prefixCls},[i("span",null,r(e.title),1),i(l,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-c7d8b828";export default u;