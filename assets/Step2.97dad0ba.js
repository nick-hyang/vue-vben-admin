import{d as e,cp as t,cq as i,h as s,o,i as a,j as r,bw as d,m as n}from"./index.fc2bceed.js";import{A as m}from"./index.ca73c41e.js";import{D as p}from"./index.180576da.js";import{D as c}from"./index.4a760f02.js";import{_ as j}from"./index.6a96ebae.js";import{step2Schemas as l}from"./data.2505cb7f.js";import{u}from"./useForm.d15f9a91.js";import"./vendor.3b1829c7.js";import"./responsiveObserve.c545f1cc.js";import"./index.f81bbaf2.js";import"./index.dc375aff.js";import"./findIndex.d28fee74.js";import"./isEqual.c8096102.js";import"./get.d9db5c92.js";import"./_baseProperty.74f89655.js";import"./toInteger.e02d7f5c.js";import"./index.d55e1e2c.js";import"./index.425c1282.js";import"./SearchOutlined.b791d657.js";import"./EyeOutlined.37ca3d26.js";import"./index.05ba8954.js";import"./CheckOutlined.bc0fbee5.js";import"./DownOutlined.d73ccdaa.js";import"./index.d5ca1ee7.js";import"./index.35628843.js";import"./UpOutlined.0892c991.js";import"./index.adb8f8c1.js";import"./RightOutlined.beea8186.js";import"./RedoOutlined.388e10ad.js";import"./index.2b44e935.js";import"./EllipsisOutlined.91d07448.js";import"./types.77b50da4.js";import"./Tree.a83232e3.js";import"./util.edeb8cdb.js";import"./useAttrs.bbc68625.js";/* empty css              */import"./uuid.ab37d4ae.js";import"./index.71ed3a05.js";import"./DeleteOutlined.3e9efee6.js";import"./index.0fd04956.js";import"./useTimeout.6614a499.js";import"./useWindowSizeFn.9bbe50ab.js";import"./index.7193e9be.js";import"./index.5f4955fb.js";import"./domUtils.20d68c97.js";import"./_stringToArray.e6ffaa09.js";import"./useScrollTo.fb795e0a.js";import"./animation.e9a67fb3.js";import"./FullscreenOutlined.d522cd46.js";import"./index.3a4c8dcc.js";import"./index.a86b88ea.js";import"./LeftOutlined.c79d72a2.js";import"./download.61ebcf37.js";var f=e({components:{BasicForm:j,[m.name]:m,[p.name]:p,[c.name]:c,[c.Item.name]:c.Item},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=u({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const b=d("data-v-01481d2f");t("data-v-01481d2f");const x={class:"step2"},O=n(" ant-design@alipay.com "),g=n(" test@example.com "),v=n(" Vben "),_=n(" 500元 ");i();const h=b(((e,t,i,d,n,m)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),u=s("BasicForm");return o(),a("div",x,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(j,{column:1,class:"mt-5"},{default:b((()=>[r(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),r(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),r(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),r(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),r(l),r(u,{onRegister:e.register},null,8,["onRegister"])])}));f.render=h,f.__scopeId="data-v-01481d2f";export default f;
