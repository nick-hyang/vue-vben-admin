import{d as t,b1 as s,dn as i,dp as e,h as o,o as a,i as l,j as d,aL as n,aM as m,l as r,m as p,bw as u}from"./index.b35d627b.js";import{L as c}from"./index.84b114a0.js";import"./index.b1b871ed.js";import"./index.12125303.js";import"./index.b8d712d0.js";import{T as b}from"./index.3d19020c.js";/* empty css              */import{d as j}from"./ScrollContainer.992f13b6.js";import{t as f}from"./data.aa527d47.js";import{E as _}from"./EllipsisOutlined.73434e58.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.2d9a2a5e.js";import"./CheckOutlined.1e3689b0.js";import"./DownOutlined.9676ed0b.js";import"./LeftOutlined.efceb197.js";import"./RightOutlined.8f262b29.js";import"./DoubleLeftOutlined.68ba66ac.js";import"./DoubleRightOutlined.84839c9c.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.15783dfd.js";import"./domUtils.9d257af5.js";import"./_stringToArray.d2fcf67e.js";import"./useTimeout.aed71b31.js";import"./useScrollTo.a712a7b3.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:c,ListItem:c.Item,ListItemMeta:c.Item.Meta,Tag:b,Tooltip:s,EllipsisOutlined:_},setup:()=>({todoList:f})});const O=u("data-v-579679d3");i("data-v-579679d3");const v=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),x={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},C=d("br",null,null,-1),I=p(" 待审批 "),g={class:"todo-list__all"},E=p(" 查看更多 ");e();const M=O(((t,s,i,e,u,c)=>{const b=o("ListItemMeta"),j=o("Tag"),f=o("a-button"),_=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:O((()=>[v])),default:O((()=>[d(L,null,{default:O((()=>[(a(!0),l(n,null,m(t.todoList,(t=>(a(),l(_,{key:t.id,class:"todo-list__item"},{default:O((()=>[d(b,null,{title:O((()=>[d("div",null,[d("span",x,r(t.title),1),d("span",T,r(t.memo),1)])])),description:O((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),C,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(f,{type:"link"},{default:O((()=>[d(j,{color:"blue"},{default:O((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",g,[d(k,{placement:"topRight"},{title:O((()=>[E])),default:O((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-579679d3";export default L;