import{v as t,bc as e,d as n,N as o,D as i,F as r,S as s,cN as a,d6 as c,d7 as l,z as u,j as d,d8 as g,H as f,d9 as p,a7 as h,a8 as v,aJ as m,h as b,o as T,i as k,k as y,ab as S}from"./index.899e68b1.js";function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function O(){return window}var _=n({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:w(w({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:i("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||O;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||O)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;c(0,{getContainer:void 0===e?O:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=l((void 0===e?O:e)(),!0);this.setState({visible:n>t})}},render:function(){var t,e,n=this.prefixCls,o=this.$slots,i=(0,this.configProvider.getPrefixCls)("back-top",n),r=u(i,this.$attrs.class),s=d("div",{class:"".concat(i,"-content")},[d("div",{class:"".concat(i,"-icon")},null)]),a=w(w({},this.$attrs),{onClick:this.scrollToTop,class:r}),c=this.visible?d("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,l=g("fade");return d(p,l,"function"==typeof(e=c)||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)?c:{default:function(){return[c]}})}}),j=n({name:"LayoutFeatures",components:{BackTop:e(_),LayoutLockPage:h((()=>v((()=>__import__("./index.314f2748.js")),["/assets/index.314f2748.js","/assets/index.899e68b1.js","/assets/index.f21ab055.css","/assets/LockOutlined.3a85a489.js","/assets/header.3041aac3.js","/assets/LockPage.a6269214.js","/assets/LockPage.426e5e92.css"]))),SettingDrawer:h((()=>v((()=>__import__("./index.c3927da1.js").then((function(t){return t.i}))),["/assets/index.c3927da1.js","/assets/index.60acafd9.css","/assets/index.899e68b1.js","/assets/index.f21ab055.css","/assets/index.d138d7fc.js","/assets/index.2f74f299.css","/assets/index.1156589c.js","/assets/index.76e45014.css","/assets/domUtils.511e170d.js","/assets/_stringToArray.45d16e42.js","/assets/RightOutlined.7a52ca15.js","/assets/useTimeout.1aa049d6.js","/assets/index.8a587a60.js","/assets/index.121e7eba.css","/assets/useScrollTo.14ce33f8.js","/assets/animation.ce68d404.js","/assets/useAttrs.65aacca0.js","/assets/SettingOutlined.a20a6645.js","/assets/useHeaderSetting.2947a160.js"])))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=m();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});j.render=function(t,e,n,o,i,r){const s=b("LayoutLockPage"),a=b("BackTop"),c=b("SettingDrawer");return T(),k(S,null,[d(s),t.getUseOpenBackTop?(T(),k(a,{key:0,target:t.getTarget},null,8,["target"])):y("",!0),t.getShowSettingButton?(T(),k(c,{key:1})):y("",!0)],64)};export default j;