import{ax as r}from"./index.8ee268f5.js";import{b as t}from"./_baseIteratee.61382218.js";import{t as a}from"./toInteger.f9a43c77.js";var e=Math.max;function n(n,o,f){var s=null==n?0:n.length;if(!s)return-1;var m=null==f?0:a(f);return m<0&&(m=e(s+m,0)),r(n,t(o),m)}export{n as f};