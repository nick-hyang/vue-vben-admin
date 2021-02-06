import{d as e,B as t,q as n,P as o,s as a,y as d,E as r,v as s,U as i,j as c,z as l}from"./index.fc2bceed.js";import{c as y,a as h,d as u,e as f,p,b as _,g as v,f as K,h as g,i as k,j as b,k as x,m,l as N}from"./util.edeb8cdb.js";var O=function(){};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var $=e({name:"Tree",mixins:[t],provide:function(){return{vcTree:this}},inheritAttrs:!1,props:n({prefixCls:o.string,tabindex:o.oneOfType([o.string,o.number]),children:o.any,treeData:o.array,showLine:o.looseBool,showIcon:o.looseBool,icon:o.oneOfType([o.object,o.func]),focusable:o.looseBool,selectable:o.looseBool,disabled:o.looseBool,multiple:o.looseBool,checkable:a(o.oneOfType([o.object,o.looseBool])),checkStrictly:o.looseBool,draggable:o.looseBool,defaultExpandParent:o.looseBool,autoExpandParent:o.looseBool,defaultExpandAll:o.looseBool,defaultExpandedKeys:o.array,expandedKeys:o.array,defaultCheckedKeys:o.array,checkedKeys:o.oneOfType([o.array,o.object]),defaultSelectedKeys:o.array,selectedKeys:o.array,loadData:o.func,loadedKeys:o.array,filterTreeNode:o.func,openTransitionName:o.string,openAnimation:o.oneOfType([o.string,o.object]),switcherIcon:o.any,__propsSymbol__:o.any},{prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[]}),data:function(){O(this.$props.__propsSymbol__),O(this.$props.children),this.needSyncKeys={},this.domTreeNodes={};var e={_posEntities:new Map,_keyEntities:new Map,_expandedKeys:[],_selectedKeys:[],_checkedKeys:[],_halfCheckedKeys:[],_loadedKeys:[],_loadingKeys:[],_treeNode:[],_prevProps:null,_dragOverNodeKey:"",_dropPosition:null,_dragNodesKeys:[]};return D(D({},e),this.getDerivedState(d(this),e))},watch:D(D({},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){t[e]={handler:function(){this.needSyncKeys[e]=!0},flush:"sync"}})),t}(["treeData","children","expandedKeys","autoExpandParent","selectedKeys","checkedKeys","loadedKeys"])),{__propsSymbol__:function(){this.setState(this.getDerivedState(d(this),this.$data)),this.needSyncKeys={}}}),methods:{getDerivedState:function(e,t){var n=t._prevProps,o={_prevProps:D({},e)},a=this;function d(t){return!n&&t in e||n&&a.needSyncKeys[t]}var r=null;if(d("treeData")?r=y(e.treeData):d("children")&&(r=e.children),r){o._treeNode=r;var s=h(r);o._keyEntities=s.keyEntities}var i,c=o._keyEntities||t._keyEntities;if((d("expandedKeys")||n&&d("autoExpandParent")?o._expandedKeys=e.autoExpandParent||!n&&e.defaultExpandParent?u(e.expandedKeys,c):e.expandedKeys:!n&&e.defaultExpandAll?o._expandedKeys=C(c.keys()):!n&&e.defaultExpandedKeys&&(o._expandedKeys=e.autoExpandParent||e.defaultExpandParent?u(e.defaultExpandedKeys,c):e.defaultExpandedKeys),e.selectable&&(d("selectedKeys")?o._selectedKeys=f(e.selectedKeys,e):!n&&e.defaultSelectedKeys&&(o._selectedKeys=f(e.defaultSelectedKeys,e))),e.checkable)&&(d("checkedKeys")?i=p(e.checkedKeys)||{}:!n&&e.defaultCheckedKeys?i=p(e.defaultCheckedKeys)||{}:r&&(i=p(e.checkedKeys)||{checkedKeys:t._checkedKeys,halfCheckedKeys:t._halfCheckedKeys}),i)){var l=i,v=l.checkedKeys,K=void 0===v?[]:v,g=l.halfCheckedKeys,k=void 0===g?[]:g;if(!e.checkStrictly){var b=_(K,!0,c);K=b.checkedKeys,k=b.halfCheckedKeys}o._checkedKeys=K,o._halfCheckedKeys=k}return d("loadedKeys")&&(o._loadedKeys=e.loadedKeys),o},onNodeDragStart:function(e,t){var n=this.$data._expandedKeys,o=t.eventKey,a=r(t);this.dragNode=t,this.setState({_dragNodesKeys:v("function"==typeof a?a():a,t),_expandedKeys:K(n,o)}),this.__emit("dragstart",{event:e,node:t})},onNodeDragEnter:function(e,t){var n=this,o=this.$data._expandedKeys,a=t.pos,d=t.eventKey;if(this.dragNode&&t.selectHandle){var r=g(e,t);this.dragNode.eventKey!==d||0!==r?setTimeout((function(){n.setState({_dragOverNodeKey:d,_dropPosition:r}),n.delayedDragEnterLogic||(n.delayedDragEnterLogic={}),Object.keys(n.delayedDragEnterLogic).forEach((function(e){clearTimeout(n.delayedDragEnterLogic[e])})),n.delayedDragEnterLogic[a]=setTimeout((function(){var a=k(o,d);s(n,"expandedKeys")||n.setState({_expandedKeys:a}),n.__emit("dragenter",{event:e,node:t,expandedKeys:a})}),400)}),0):this.setState({_dragOverNodeKey:"",_dropPosition:null})}},onNodeDragOver:function(e,t){var n=t.eventKey,o=this.$data,a=o._dragOverNodeKey,d=o._dropPosition;if(this.dragNode&&n===a&&t.selectHandle){var r=g(e,t);if(r===d)return;this.setState({_dropPosition:r})}this.__emit("dragover",{event:e,node:t})},onNodeDragLeave:function(e,t){this.setState({_dragOverNodeKey:""}),this.__emit("dragleave",{event:e,node:t})},onNodeDragEnd:function(e,t){this.setState({_dragOverNodeKey:""}),this.__emit("dragend",{event:e,node:t}),this.dragNode=null},onNodeDrop:function(e,t){var n=this.$data,o=n._dragNodesKeys,a=void 0===o?[]:o,d=n._dropPosition,r=t.eventKey,s=t.pos;if(this.setState({_dragOverNodeKey:""}),-1===a.indexOf(r)){var i=b(s),c={event:e,node:t,dragNode:this.dragNode,dragNodesKeys:a.slice(),dropPosition:d+Number(i[i.length-1]),dropToGap:!1};0!==d&&(c.dropToGap=!0),this.__emit("drop",c),this.dragNode=null}},onNodeClick:function(e,t){this.__emit("click",e,t)},onNodeDoubleClick:function(e,t){this.__emit("dblclick",e,t)},onNodeSelect:function(e,t){var n=this.$data._selectedKeys,o=this.$data._keyEntities,a=this.$props.multiple,r=d(t),s=r.selected,i=r.eventKey,c=!s,l=(n=c?a?k(n,i):[i]:K(n,i)).map((function(e){var t=o.get(e);return t?t.node:null})).filter((function(e){return e}));this.setUncontrolledState({_selectedKeys:n});var y={event:"select",selected:c,node:t,selectedNodes:l,nativeEvent:e};this.__emit("select",n,y)},onNodeCheck:function(e,t,n){var o,a=this.$data,r=a._keyEntities,s=a._checkedKeys,i=a._halfCheckedKeys,c=this.$props.checkStrictly,l=d(t).eventKey,y={event:"check",node:t,checked:n,nativeEvent:e};if(c){var h=n?k(s,l):K(s,l);o={checked:h,halfChecked:K(i,l)},y.checkedNodes=h.map((function(e){return r.get(e)})).filter((function(e){return e})).map((function(e){return e.node})),this.setUncontrolledState({_checkedKeys:h})}else{var u=_([l],n,r,{checkedKeys:s,halfCheckedKeys:i}),f=u.checkedKeys,p=u.halfCheckedKeys;o=f,y.checkedNodes=[],y.checkedNodesPositions=[],y.halfCheckedKeys=p,f.forEach((function(e){var t=r.get(e);if(t){var n=t.node,o=t.pos;y.checkedNodes.push(n),y.checkedNodesPositions.push({node:n,pos:o})}})),this.setUncontrolledState({_checkedKeys:f,_halfCheckedKeys:p})}this.__emit("check",o,y)},onNodeLoad:function(e){var t=this;return new Promise((function(n){t.setState((function(o){var a=o._loadedKeys,r=void 0===a?[]:a,s=o._loadingKeys,i=void 0===s?[]:s,c=t.$props.loadData,l=d(e).eventKey;return c&&-1===r.indexOf(l)&&-1===i.indexOf(l)?(c(e).then((function(){var o=t.$data,a=o._loadedKeys,d=o._loadingKeys,r=k(a,l),s=K(d,l);t.__emit("load",r,{event:"load",node:e}),t.setUncontrolledState({_loadedKeys:r}),t.setState({_loadingKeys:s}),n()})),{_loadingKeys:k(i,l)}):{}}))}))},onNodeExpand:function(e,t){var n=this,o=this.$data._expandedKeys,a=this.$props.loadData,r=d(t),s=r.eventKey,i=r.expanded;o.indexOf(s);var c=!i;if(o=c?k(o,s):K(o,s),this.setUncontrolledState({_expandedKeys:o}),this.__emit("expand",o,{node:t,expanded:c,nativeEvent:e}),c&&a){var l=this.onNodeLoad(t);return l?l.then((function(){n.setUncontrolledState({_expandedKeys:o})})):null}return null},onNodeMouseEnter:function(e,t){this.__emit("mouseenter",{event:e,node:t})},onNodeMouseLeave:function(e,t){this.__emit("mouseleave",{event:e,node:t})},onNodeContextMenu:function(e,t){e.preventDefault(),this.__emit("rightClick",{event:e,node:t})},setUncontrolledState:function(e){var t=!1,n={},o=d(this);Object.keys(e).forEach((function(a){a.replace("_","")in o||(t=!0,n[a]=e[a])})),t&&this.setState(n)},registerTreeNode:function(e,t){t?this.domTreeNodes[e]=t:delete this.domTreeNodes[e]},isKeyChecked:function(e){var t=this.$data._checkedKeys;return-1!==(void 0===t?[]:t).indexOf(e)},renderTreeNode:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.$data,a=o._keyEntities,d=o._expandedKeys,r=void 0===d?[]:d,s=o._selectedKeys,c=void 0===s?[]:s,l=o._halfCheckedKeys,y=void 0===l?[]:l,h=o._loadedKeys,u=void 0===h?[]:h,f=o._loadingKeys,p=void 0===f?[]:f,_=o._dragOverNodeKey,v=o._dropPosition,K=N(n,t),g=e.key;return g||null!=g||(g=K),a.get(g)?i(e,{eventKey:g,expanded:-1!==r.indexOf(g),selected:-1!==c.indexOf(g),loaded:-1!==u.indexOf(g),loading:-1!==p.indexOf(g),checked:this.isKeyChecked(g),halfChecked:-1!==y.indexOf(g),pos:K,dragOver:_===g&&0===v,dragOverGapTop:_===g&&-1===v,dragOverGapBottom:_===g&&1===v,key:g}):null}},render:function(){var e=this,t=this.$data._treeNode,n=this.$props,o=n.prefixCls,a=n.focusable,d=n.showLine,r=n.tabindex,s=void 0===r?0:r,i=x(D(D({},this.$props),this.$attrs)),y=this.$attrs,h=y.class,u=y.style;return c("ul",S(S({},i),{},{class:l(o,h,P({},"".concat(o,"-show-line"),d)),style:u,role:"tree",unselectable:"on",tabindex:a?s:null}),[m(t,(function(t,n){return e.renderTreeNode(t,n)}))])}});export{$ as T,O as w};
