import{_ as e}from"./index.e93a3a43.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.e4658289.js";import{d as s,h as o,o as r,i as d,j as p,w as a,l as m}from"./index.fc2bceed.js";import{u as n}from"./useTable.c2e798fb.js";import"./index.05ba8954.js";import"./SearchOutlined.b791d657.js";import"./CheckOutlined.bc0fbee5.js";import"./DownOutlined.d73ccdaa.js";import"./index.6a96ebae.js";import"./index.f81bbaf2.js";import"./index.dc375aff.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.d28fee74.js";import"./isEqual.c8096102.js";import"./get.d9db5c92.js";import"./_baseProperty.74f89655.js";import"./toInteger.e02d7f5c.js";import"./index.d55e1e2c.js";import"./index.425c1282.js";import"./EyeOutlined.37ca3d26.js";import"./index.d5ca1ee7.js";import"./index.35628843.js";import"./UpOutlined.0892c991.js";import"./index.adb8f8c1.js";import"./RightOutlined.beea8186.js";import"./RedoOutlined.388e10ad.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./Tree.a83232e3.js";import"./util.edeb8cdb.js";import"./useAttrs.bbc68625.js";/* empty css              */import"./uuid.ab37d4ae.js";import"./index.71ed3a05.js";import"./DeleteOutlined.3e9efee6.js";import"./index.ca73c41e.js";import"./index.0fd04956.js";import"./useTimeout.6614a499.js";import"./useWindowSizeFn.9bbe50ab.js";import"./index.7193e9be.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./FullscreenOutlined.d522cd46.js";import"./index.180576da.js";import"./index.3a4c8dcc.js";import"./index.a86b88ea.js";import"./LeftOutlined.c79d72a2.js";import"./download.61ebcf37.js";import"./index.4a8fa3b1.js";import"./DoubleLeftOutlined.63e14a01.js";import"./DoubleRightOutlined.fe892374.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.dac5ecd7.js";import"./CaretDownFilled.41339a76.js";import"./clickOutside.220a7664.js";import"./useSortable.2b1dfcd4.js";import"./SettingOutlined.4b328ef8.js";import"./useExpose.f3261264.js";import"./useForm.d15f9a91.js";var j=s({components:{BasicTable:e},setup(){const[e]=n({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,i,t,s,n,j){const l=o("BasicTable");return r(),d("div",c,[p(l,{onRegister:e.registerTable},{expandedRowRender:a((({record:e})=>[p("span",null,"No: "+m(e.no),1)])),_:1},8,["onRegister"])])};export default j;
