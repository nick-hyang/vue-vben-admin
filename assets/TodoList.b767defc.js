import{d as t,b1 as s,cp as i,cq as e,h as o,o as a,i as l,j as d,aL as m,aM as n,l as r,m as p,bw as c}from"./index.1d8b385f.js";import"./index.95c10fda.js";import{T as f}from"./index.215af218.js";import{L as u}from"./index.0817edef.js";import"./index.b65239bc.js";import"./index.aed40204.js";import"./index.e447d389.js";import{a as j}from"./index.fd2324d6.js";import{t as _}from"./data.aa527d47.js";import{E as b}from"./EllipsisOutlined.2068088a.js";import"./vendor.3b1829c7.js";import"./colors.cfff8c2b.js";import"./SearchOutlined.094b03ed.js";import"./CheckOutlined.f4a7eca6.js";import"./DownOutlined.012ff21f.js";import"./LeftOutlined.e3b02fdb.js";import"./RightOutlined.04567b90.js";import"./DoubleLeftOutlined.0f71090e.js";import"./DoubleRightOutlined.188866c7.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.e2a60846.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./useTimeout.b2101222.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:f,Tooltip:s,EllipsisOutlined:b},setup:()=>({todoList:_})});const x=c("data-v-579679d3");i("data-v-579679d3");const O=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),v={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},I=d("br",null,null,-1),g=p(" 待审批 "),C={class:"todo-list__all"},E=p(" 查看更多 ");e();const M=x(((t,s,i,e,c,f)=>{const u=o("ListItemMeta"),j=o("Tag"),_=o("a-button"),b=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:x((()=>[O])),default:x((()=>[d(L,null,{default:x((()=>[(a(!0),l(m,null,n(t.todoList,(t=>(a(),l(b,{key:t.id,class:"todo-list__item"},{default:x((()=>[d(u,null,{title:x((()=>[d("div",null,[d("span",v,r(t.title),1),d("span",T,r(t.memo),1)])])),description:x((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),I,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(_,{type:"link"},{default:x((()=>[d(j,{color:"blue"},{default:x((()=>[g])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",C,[d(k,{placement:"topRight"},{title:x((()=>[E])),default:x((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-579679d3";export default L;