var e=Object.assign;import{aF as n,r as t,q as o,E as i,dD as a,d as r,u as l,aK as s,b as d,h as u,o as c,i as p,j as m,m as g,l as f,bw as h,$ as v,e as b,aT as y,bW as C,dE as x,H as j,b8 as U,k}from"./index.89eaa474.js";import{U as w,s as _}from"./uuid.f9ee62f2.js";import"./index.089467a0.js";/* empty css              */import"./vendor.3b1829c7.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./util.99ac0f73.js";import"./DeleteOutlined.74882a9c.js";import"./EyeOutlined.b4c40e2a.js";import"./types.8ffdb72a.js";import"./CheckOutlined.8a1d6e93.js";const D={options:{type:Object,default:{}},value:n.string,modelValue:n.string,height:{type:[Number,String],required:!1,default:400},width:{type:[Number,String],required:!1,default:"auto"},showImageUpload:n.bool.def(!0)},P=["fontsizeselect lineheight searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],I=["lineheight advlist anchor autolink autosave code codesample  directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template  textpattern visualblocks visualchars wordcount"],O=()=>{const e="undefined"!=typeof window?window:global;return e&&e.tinymce?e.tinymce:null};const S=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],M=e=>-1!==S.indexOf(e);var E=r({name:"TinymceImageUpload",components:{Upload:w},emits:["uploading","done","error"],setup(e,{emit:n}){let t=!1;const{uploadUrl:o}=d(),{t:i}=l(),{prefixCls:a}=s("tinymce-img-upload");return{prefixCls:a,handleChange:function(e){var o;const i=e.file,a=null==i?void 0:i.status,r=null==(o=null==i?void 0:i.response)?void 0:o.url,l=null==i?void 0:i.name;"uploading"===a?t||(n("uploading",l),t=!0):"done"===a?(n("done",l,r),t=!1):"error"===a&&(n("error"),t=!1)},uploadUrl:o,t:i}}});const R=h("data-v-ccf74658"),$=R(((e,n,t,o,i,a)=>{const r=u("a-button"),l=u("Upload");return c(),p("div",{class:e.prefixCls},[m(l,{name:"file",multiple:"",onChange:e.handleChange,action:e.uploadUrl,showUploadList:!1,accept:".jpg,.jpeg,.gif,.png,.webp"},{default:R((()=>[m(r,{type:"primary"},{default:R((()=>[g(f(e.t("component.upload.imgUpload")),1)])),_:1})])),_:1},8,["onChange","action"])],2)}));E.render=$,E.__scopeId="data-v-ccf74658";const A="https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1",B=`${A}/tinymce.min.js`;var q=r({name:"Tinymce",components:{ImgUpload:E},inheritAttrs:!1,props:D,emits:["change","update:modelValue"],setup(n,{emit:r,attrs:l}){const d=t(null),u=t(_("tiny-vue")),c=t(null),{prefixCls:p}=s("tinymce-container"),m=v((()=>n.modelValue)),g=v((()=>{const e=n.width;return/^[\d]+(\.[\d]+)?$/.test(e.toString())?`${e}px`:e})),f=v((()=>{const{height:t,options:o}=n;return e(e({selector:`#${b(u)}`,base_url:A,suffix:".min",height:t,toolbar:P,menubar:"file edit insert view format table",plugins:I,language_url:"resource/tinymce/langs/zh_CN.js",language:"zh_CN",default_link_target:"_blank",link_title:!1,advlist_bullet_styles:"square",advlist_number_styles:"default",object_resizing:!1,fontsize_formats:"10px 11px 12px 14px 16px 18px 20px 24px 36px 48px",lineheight_formats:"1 1.5 1.75 2.0 3.0 4.0 5.0"},o),{setup:e=>{d.value=e,e.on("init",(e=>function(e){const t=b(d);if(!t)return;const o=n.modelValue||"";t.setContent(o),function(e){const t=l.modelEvents?l.modelEvents:null,o=Array.isArray(t)?t.join(" "):t;y((()=>n.modelValue),((n,t)=>{U(e,n,t)})),y((()=>n.value),((n,t)=>{U(e,n,t)}),{immediate:!0}),e.on(o||"change keyup undo redo",(()=>{const n=e.getContent({format:l.outputFormat});r("update:modelValue",n),r("change",n)}))}(t),((e,n,t)=>{Object.keys(n).filter(M).forEach((o=>{const i=n[o];"function"==typeof i&&("onInit"===o?i(e,t):t.on(o.substring(2),(e=>i(e,t))))}))})(e,l,b(d))}(e)))}})})),{toPromise:h}=function(e){const n=t(!1),i=t(!1),a=t(!1),r=new Promise(((t,r)=>{o((()=>{const o=document.createElement("script");o.onload=function(){n.value=!1,a.value=!0,i.value=!1,t("")},o.onerror=function(e){n.value=!1,a.value=!1,i.value=!0,r(e)},o.src=e.src,document.head.appendChild(o)}))}));return{isLoading:n,error:i,success:a,toPromise:()=>r}}({src:B});function j(){var e,n;null!==O()&&(null==(n=null==(e=O())?void 0:e.remove)||n.call(e,b(d)))}function U(e,n,t){e&&"string"==typeof n&&n!==t&&n!==e.getContent({format:l.outputFormat})&&e.setContent(n)}function k(e){return`[uploading:${e}]`}return y((()=>l.disabled),(()=>{const e=b(d);e&&e.setMode(l.disabled?"readonly":"design")})),function(e){let n;o((()=>{e(),i((()=>{n=!0}))})),a((()=>{n&&e()}))}((()=>{u.value=_("tiny-vue"),i((()=>{h().then((()=>{setTimeout((()=>{!function(){var e;O().PluginManager.add("lineHeight",((e=O()).PluginManager.add("lineheight",(function(e){e.on("init",(function(){e.formatter.register({lineheight:{inline:"span",styles:{"line-height":"%value"}}})})),e.ui.registry.addMenuButton("lineheight",{icon:"lineheight",tooltip:"Line Height"})})),void e.PluginManager.requireLangPack("lineheight","de")));const n=b(c);n&&(n.style.visibility=""),O().init(b(f))}()}),0)}))}))})),C((()=>{j()})),x((()=>{j()})),{prefixCls:p,containerWidth:g,initOptions:f,tinymceContent:m,tinymceScriptSrc:B,elRef:c,tinymceId:u,handleImageUploading:function(e){var n;const t=b(d);if(!t)return;const o=null!=(n=null==t?void 0:t.getContent())?n:"";U(t,`${o}\n${k(e)}`)},handleDone:function(e,n){var t,o;const i=b(d);if(!i)return;const a=null!=(t=null==i?void 0:i.getContent())?t:"";U(i,null!=(o=null==a?void 0:a.replace(k(e),`<img src="${n}"/>`))?o:"")},editorRef:d}}});q.render=function(e,n,t,o,i,a){const r=u("ImgUpload");return c(),p("div",{class:e.prefixCls,style:{width:e.containerWidth}},[e.showImageUpload?j((c(),p(r,{key:0,onUploading:e.handleImageUploading,onDone:e.handleDone},null,8,["onUploading","onDone"])),[[U,e.editorRef]]):k("",!0),m("textarea",{id:e.tinymceId,ref:"elRef",style:{visibility:"hidden"}},null,8,["id"])],6)};export default q;
