import{d as e,h as i,o as t,i as r,bw as s,j as o}from"./index.fc2bceed.js";import{D as a}from"./index.180576da.js";import{D as d}from"./index.0884f4db.js";import{_ as m}from"./index.e93a3a43.js";import{_ as n}from"./index.b61969dc.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.69490278.js";import{u as g}from"./useTable.c2e798fb.js";import"./vendor.3b1829c7.js";import"./index.4a760f02.js";import"./responsiveObserve.c545f1cc.js";import"./index.7193e9be.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./RightOutlined.beea8186.js";/* empty css              */import"./useTimeout.6614a499.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./get.d9db5c92.js";import"./index.05ba8954.js";import"./SearchOutlined.b791d657.js";import"./CheckOutlined.bc0fbee5.js";import"./DownOutlined.d73ccdaa.js";import"./index.6a96ebae.js";import"./index.f81bbaf2.js";import"./index.dc375aff.js";import"./findIndex.d28fee74.js";import"./isEqual.c8096102.js";import"./_baseProperty.74f89655.js";import"./toInteger.e02d7f5c.js";import"./index.d55e1e2c.js";import"./index.425c1282.js";import"./EyeOutlined.37ca3d26.js";import"./index.d5ca1ee7.js";import"./index.35628843.js";import"./UpOutlined.0892c991.js";import"./index.adb8f8c1.js";import"./RedoOutlined.388e10ad.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./Tree.a83232e3.js";import"./util.edeb8cdb.js";import"./useAttrs.bbc68625.js";import"./uuid.ab37d4ae.js";import"./index.71ed3a05.js";import"./DeleteOutlined.3e9efee6.js";import"./index.ca73c41e.js";import"./index.0fd04956.js";import"./useWindowSizeFn.9bbe50ab.js";import"./FullscreenOutlined.d522cd46.js";import"./index.3a4c8dcc.js";import"./index.a86b88ea.js";import"./LeftOutlined.c79d72a2.js";import"./download.61ebcf37.js";import"./index.4a8fa3b1.js";import"./DoubleLeftOutlined.63e14a01.js";import"./DoubleRightOutlined.fe892374.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.dac5ecd7.js";import"./CaretDownFilled.41339a76.js";import"./clickOutside.220a7664.js";import"./useSortable.2b1dfcd4.js";import"./SettingOutlined.4b328ef8.js";import"./useExpose.f3261264.js";import"./useForm.d15f9a91.js";import"./index.514c3889.js";import"./index.2012ee21.js";import"./usePageContext.1003cadc.js";import"./ArrowLeftOutlined.8f0a19db.js";import"./index.609f3b74.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=s("data-v-ada482fc"),T=O(((e,s,a,d,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return t(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[o(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(c),o(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(c),o(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(c),o(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;
