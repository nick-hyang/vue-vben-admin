import{I as e}from"./index.d558ca51.js";import{_ as t}from"./index.e93a3a43.js";import{_ as i}from"./index.b61969dc.js";import{d as s,r as o,h as r,o as a,i as d,w as m,j as p,aL as n,aM as c,m as j}from"./index.fc2bceed.js";import"./vendor.3b1829c7.js";import"./index.05ba8954.js";import"./SearchOutlined.b791d657.js";import"./CheckOutlined.bc0fbee5.js";import"./DownOutlined.d73ccdaa.js";import"./index.6a96ebae.js";import"./index.f81bbaf2.js";import"./index.dc375aff.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.d28fee74.js";import"./isEqual.c8096102.js";import"./get.d9db5c92.js";import"./_baseProperty.74f89655.js";import"./toInteger.e02d7f5c.js";import"./index.d55e1e2c.js";import"./index.425c1282.js";import"./EyeOutlined.37ca3d26.js";import"./index.d5ca1ee7.js";import"./index.35628843.js";import"./UpOutlined.0892c991.js";import"./index.adb8f8c1.js";import"./RightOutlined.beea8186.js";import"./RedoOutlined.388e10ad.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./Tree.a83232e3.js";import"./util.edeb8cdb.js";import"./useAttrs.bbc68625.js";/* empty css              */import"./uuid.ab37d4ae.js";import"./index.71ed3a05.js";import"./DeleteOutlined.3e9efee6.js";import"./index.ca73c41e.js";import"./index.0fd04956.js";import"./useTimeout.6614a499.js";import"./useWindowSizeFn.9bbe50ab.js";import"./index.7193e9be.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./FullscreenOutlined.d522cd46.js";import"./index.180576da.js";import"./index.3a4c8dcc.js";import"./index.a86b88ea.js";import"./LeftOutlined.c79d72a2.js";import"./download.61ebcf37.js";import"./index.4a8fa3b1.js";import"./DoubleLeftOutlined.63e14a01.js";import"./DoubleRightOutlined.fe892374.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.dac5ecd7.js";import"./CaretDownFilled.41339a76.js";import"./clickOutside.220a7664.js";import"./useSortable.2b1dfcd4.js";import"./SettingOutlined.4b328ef8.js";import"./useExpose.f3261264.js";import"./useForm.d15f9a91.js";import"./index.514c3889.js";import"./index.2012ee21.js";import"./usePageContext.1003cadc.js";import"./ArrowLeftOutlined.8f0a19db.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const u=j(" 导入Excel ");l.render=function(e,t,i,s,o,j){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),d(x,{title:"excel数据导入示例"},{default:m((()=>[p(f,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(l,{class:"m-3"},{default:m((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(a(!0),d(n,null,c(e.tableListRef,((e,t)=>(a(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
