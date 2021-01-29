import{_ as e}from"./index.a11b9577.js";import{a as o}from"./index.72bfb6c6.js";import{d as i,r as n,g as t,h as l,o as s,i as a,w as p,j as r}from"./index.89eaa474.js";import{_ as d}from"./index.6a59b07e.js";import{o as c}from"./select.ce20f08e.js";import"./index.a7743e73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e6cdd1b0.js";import"./vendor.3b1829c7.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./index.77be0dac.js";import"./index.7738c60b.js";import"./SearchOutlined.a793b9df.js";import"./CheckOutlined.8a1d6e93.js";import"./DownOutlined.1abeee16.js";import"./index.591d974e.js";import"./index.f7d29dbe.js";import"./UpOutlined.c83d32c3.js";import"./index.c01cefa1.js";import"./EyeOutlined.b4c40e2a.js";import"./index.1e19492c.js";import"./colors.e9cc1e07.js";import"./RightOutlined.f6122b3f.js";import"./RedoOutlined.1b8dc239.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./Tree.62740264.js";import"./util.99ac0f73.js";import"./useAttrs.2235e19b.js";/* empty css              */import"./index.6c42ac2e.js";import"./uuid.f9ee62f2.js";import"./index.089467a0.js";import"./DeleteOutlined.74882a9c.js";import"./index.7b6fd761.js";import"./useTimeout.2438cbf6.js";import"./useWindowSizeFn.02c59bc0.js";import"./FullscreenOutlined.038a48b5.js";import"./index.577f6c6d.js";import"./index.ef8c8b6c.js";import"./index.0b034549.js";import"./LeftOutlined.3f688a61.js";import"./download.3a13bc2e.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./index.3b842216.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./index.e2fe5134.js";import"./index.7d0c3879.js";import"./usePageContext.43155b53.js";import"./transButton.31c0fca4.js";import"./ArrowLeftOutlined.d2d3a70b.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:c},colProps:{span:8},defaultValue:"0"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const e=n(null),{createMessage:o}=t();return{schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});u.render=function(e,o,i,n,t,d){const c=l("BasicForm"),m=l("CollapseContainer"),u=l("PageWrapper");return s(),a(u,{title:"表单基础示例"},{default:p((()=>[r(m,{title:"基础示例"},{default:p((()=>[r(c,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
