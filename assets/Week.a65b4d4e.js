import{d as t}from"./ScrollContainer.9446e27c.js";import{u as a}from"./useApexCharts.a4d8ad29.js";import{d as e,i as r,a5 as s,r as o,o as n,f as i,p as d,g as p}from"./index.8ee268f5.js";import"./index.f462a389.js";import"./domUtils.0a930948.js";import"./_stringToArray.a6684183.js";import"./RightOutlined.8408a911.js";/* empty css              */import"./useTimeout.72f9750e.js";import"./useScrollTo.da0b1c1d.js";import"./vendor.3b1829c7.js";var l=e({components:{CollapseContainer:t},setup(){const t=r(null),{setOptions:e}=a(t);return s((()=>{e({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const c={ref:"chartRef",style:{width:"100%"}};l.render=function(t,a,e,r,s,l){const m=o("CollapseContainer");return n(),i(m,{title:"销售统计",canExpan:!1},{default:d((()=>[p("div",c,null,512)])),_:1})};export default l;