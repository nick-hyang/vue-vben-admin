import{a as e}from"./index.7193e9be.js";import{u as l}from"./useFullScreen.bf60d565.js";import{_ as t}from"./index.b61969dc.js";import{d as r,r as o,h as s,o as i,i as n,w as c,j as a,m as u,l as m}from"./index.fc2bceed.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./RightOutlined.beea8186.js";/* empty css              */import"./useTimeout.6614a499.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./index.514c3889.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./isEqual.c8096102.js";import"./toInteger.e02d7f5c.js";import"./DownOutlined.d73ccdaa.js";import"./index.2012ee21.js";import"./usePageContext.1003cadc.js";import"./transButton.dac5ecd7.js";import"./ArrowLeftOutlined.8f0a19db.js";import"./vendor.3b1829c7.js";var d=r({components:{CollapseContainer:e,PageWrapper:t},setup(){const e=o(null),{enterFullscreen:t,toggleFullscreen:r,isFullscreenRef:s,exitFullscreen:i}=l(),{toggleFullscreen:n}=l(e);return{enterFullscreen:t,toggleDom:n,toggleFullscreen:r,isFullscreenRef:s,exitFullscreen:i,domRef:e}}});const p=u(" Enter Window Full Screen "),f=u(" Toggle Window Full Screen "),j=u(" Exit Window Full Screen "),g=u(" Enter Dom Full Screen "),F={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=u(" Exit Dom Full Screen ");d.render=function(e,l,t,r,o,d){const b=s("a-button"),C=s("CollapseContainer"),w=s("PageWrapper");return i(),n(w,{title:"全屏示例"},{default:c((()=>[a(C,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:c((()=>[a(b,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:c((()=>[p])),_:1},8,["onClick"]),a(b,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:c((()=>[f])),_:1},8,["onClick"]),a(b,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),u(" Current State: "+m(e.isFullscreenRef),1)])),_:1}),a(C,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:c((()=>[a(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:c((()=>[g])),_:1},8,["onClick"])])),_:1}),a("div",F,[a(b,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"])],512)])),_:1})};export default d;
