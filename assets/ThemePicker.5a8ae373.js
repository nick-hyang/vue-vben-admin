import{d as e,aK as t,h as i,o as s,i as r,aL as d,aM as o,j as n}from"./index.1d8b385f.js";import{b as a}from"./index.007f0e37.js";import{C as p}from"./CheckOutlined.f4a7eca6.js";import"./vendor.3b1829c7.js";import"./index.50c0302c.js";import"./index.ae6f7dd4.js";import"./index.463f5903.js";import"./index.fd2324d6.js";import"./index.e2a60846.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./RightOutlined.04567b90.js";import"./index.95c10fda.js";import"./useTimeout.b2101222.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./ArrowLeftOutlined.277444d7.js";import"./useAttrs.de3dd077.js";import"./isEqual.93fdd584.js";import"./useHeaderSetting.f804b134.js";import"./SettingOutlined.4952c6db.js";var m=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&a(e.event,t)}}}});m.render=function(e,t,a,p,m,c){const l=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(d,null,o(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[n(l)],14,["onClick"])))),128))],2)};export default m;