import{bu as e,bY as n,bZ as t}from"./index.89eaa474.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const m=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},u=()=>{window.removeEventListener("resize",o),d()};return n((()=>{m()})),t((()=>{u()})),[m,u]}export{i as u};
