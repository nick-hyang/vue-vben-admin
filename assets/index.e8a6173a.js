import{d as e,bB as t,h as s,o,i as r,w as i,j as l,m as a}from"./index.fc2bceed.js";import{I as c}from"./index.425c1282.js";import{a as n}from"./index.7193e9be.js";import{_ as d}from"./index.b61969dc.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.b791d657.js";import"./EyeOutlined.37ca3d26.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./RightOutlined.beea8186.js";/* empty css              */import"./useTimeout.6614a499.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./index.514c3889.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./isEqual.c8096102.js";import"./toInteger.e02d7f5c.js";import"./DownOutlined.d73ccdaa.js";import"./index.2012ee21.js";import"./usePageContext.1003cadc.js";import"./transButton.dac5ecd7.js";import"./ArrowLeftOutlined.8f0a19db.js";var m=e({name:"TabsDemo",components:{CollapseContainer:n,PageWrapper:d,[c.name]:c},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}}});const p=a(" 关闭所有 "),f=a(" 关闭左侧 "),u=a(" 关闭右侧 "),j=a(" 关闭其他 "),C=a(" 关闭当前 "),b=a(" 刷新当前 ");m.render=function(e,t,a,c,n,d){const m=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:i((()=>[l(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[l(m,{placeholder:"请输入"})])),_:1}),l(h,{class:"mt-4",title:"标签页操作"},{default:i((()=>[l(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[p])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[j])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default m;
