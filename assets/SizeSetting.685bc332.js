import{j as e,a7 as t,a8 as i,d as n,b1 as o,u as s,r,bP as a,h as l,o as d,i as p,w as c,l as m}from"./index.b35d627b.js";/* empty css              */import{D as u,M as f}from"./index.b30471b8.js";import{u as j}from"./BasicForm.408555fc.js";import"./Dropdown.31b15b73.js";import"./vendor.3b1829c7.js";import"./RightOutlined.8f262b29.js";import"./EllipsisOutlined.73434e58.js";import"./types.83a5535a.js";import"./isEqual.81a8f73e.js";import"./toInteger.ba85bbaa.js";import"./index.de7d5ef5.js";import"./index.b8d712d0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.919925d7.js";import"./get.f7a09bef.js";import"./_baseProperty.74f89655.js";import"./index.611e1dd6.js";import"./index.e3f20d1f.js";import"./SearchOutlined.2d9a2a5e.js";import"./EyeOutlined.3c8e22f6.js";import"./index.b1b871ed.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./index.3d19020c.js";import"./index.1247f73f.js";import"./UpOutlined.27cd31ae.js";import"./index.fdaf4dfb.js";import"./RedoOutlined.875f929c.js";import"./Tree.7c786691.js";import"./util.712d4622.js";import"./uuid.9bbe5f4a.js";import"./index.6db39300.js";import"./DeleteOutlined.9c2c0df5.js";import"./index.1532450f.js";import"./useModal.c404053c.js";import"./useTimeout.aed71b31.js";import"./useWindowSizeFn.782faf75.js";import"./ScrollContainer.992f13b6.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useScrollTo.a712a7b3.js";import"./FullscreenOutlined.d5e2b78d.js";import"./index.c5a1f163.js";import"./index.4a68e0e9.js";import"./LeftOutlined.efceb197.js";import"./download.68be7467.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var O=n({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:o,Dropdown:u,Menu:f,MenuItem:f.Item},setup(){const e=j(),{t:t}=s(),i=r([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:a,t:t}}});O.render=function(t,i,n,o,s,r){const a=l("ColumnHeightOutlined"),u=l("MenuItem"),f=l("Menu"),j=l("Dropdown"),b=l("Tooltip");return d(),p(b,{placement:"top"},{title:c((()=>[e("span",null,m(t.t("component.table.settingDens")),1)])),default:c((()=>[e(j,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:c((()=>[e(f,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:c((()=>[e(u,{key:"default"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:c((()=>[e("span",null,m(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:c((()=>[e(a)])),_:1},8,["getPopupContainer"])])),_:1})};export default O;