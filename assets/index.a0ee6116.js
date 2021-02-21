import{d as e}from"./ScrollContainer.9446e27c.js";import{i as t,s as r,a6 as o,aw as a,d as n,r as s,o as i,f as l,p as d,g as m,q as c}from"./index.8ee268f5.js";import{_ as p}from"./index.588fa705.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./RightOutlined.8408a911.js";/* empty css              */import"./useTimeout.72f9750e.js";import"./useScrollTo.da0b1c1d.js";import"./vendor.3b1829c7.js";import"./index.745441c2.js";import"./index.704d9bda.js";import"./EllipsisOutlined.db13ebb2.js";import"./types.88458431.js";import"./isEqual.bd3c511a.js";import"./toInteger.f9a43c77.js";import"./DownOutlined.e4764c63.js";import"./index.760a65dd.js";import"./usePageContext.0b401fae.js";import"./transButton.d9491e45.js";import"./ArrowLeftOutlined.20117012.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const o=r(e);o&&o.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const o=document.createElement("canvas");o.width=300,o.height=240;const a=o.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o.width/20,o.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+o.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),a()&&o((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),g=c(" Clear "),x=c(" Reset ");f.render=function(e,t,r,o,a,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[g])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[x])),_:1})])),_:1})])),_:1})};export default f;