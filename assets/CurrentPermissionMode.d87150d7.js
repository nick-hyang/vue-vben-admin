import{d as e,c as s,bG as o,dy as i,bF as n,r,o as t,f as a,g as d,p as m,q as p,t as c}from"./index.8ee268f5.js";import{D as l}from"./index.8a231396.js";import"./vendor.3b1829c7.js";var u=e({name:"CurrentPermissionMode",components:{Divider:l},setup(){const e=s((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:e,PermissionModeEnum:o,togglePermissionMode:r}}});const f={class:"mt-2"},g=p(" 当前权限模式： "),M=p(" 切换权限模式 ");u.render=function(e,s,o,i,n,l){const u=r("a-button"),P=r("Divider");return t(),a("div",f,[g,d(u,{type:"link"},{default:m((()=>[p(c(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:m((()=>[M])),_:1},8,["onClick"]),d(P)])};export default u;