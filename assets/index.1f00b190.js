import{d as e,dx as t,dy as s,cp as a,cq as o,h as n,o as r,i,bw as d,j as m,m as c}from"./index.2273c044.js";import{A as p}from"./index.320d6be3.js";import u from"./CurrentPermissionMode.3129b6d1.js";import{_ as l}from"./index.8677a64d.js";import"./vendor.0d1494f4.js";import"./index.255cd0cd.js";import"./index.4b8f2690.js";import"./index.d4b76a25.js";import"./RightOutlined.a39414d6.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./isEqual.2182e848.js";import"./toInteger.629e3cf7.js";import"./DownOutlined.00438a9e.js";import"./index.95c10fda.js";import"./index.9b781c36.js";import"./usePageContext.0daaedcb.js";import"./transButton.a80db483.js";import"./ArrowLeftOutlined.96686bf6.js";var j=e({components:{Alert:p,CurrentPermissionMode:u,PageWrapper:l},setup(){const{changeMenu:e}=s();return{RoleEnum:t,changeMenu:e}}});const b=d("data-v-bcdaa5b4");a("data-v-bcdaa5b4");const f={class:"mt-4"},g=c(" 权限切换(请先切换权限模式为后台权限模式): "),x=c(" 获取用户id为1的菜单 "),h=c(" 获取用户id为2的菜单 ");o();const C=b(((e,t,s,a,o,d)=>{const c=n("CurrentPermissionMode"),p=n("Alert"),u=n("a-button"),l=n("a-button-group"),j=n("PageWrapper");return r(),i(j,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:b((()=>[m(c),m(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),m("div",f,[g,m(l,null,{default:b((()=>[m(u,{onClick:t[1]||(t[1]=t=>e.changeMenu("1"))},{default:b((()=>[x])),_:1}),m(u,{onClick:t[2]||(t[2]=t=>e.changeMenu("2"))},{default:b((()=>[h])),_:1})])),_:1})])])),_:1})}));j.render=C,j.__scopeId="data-v-bcdaa5b4";export default j;