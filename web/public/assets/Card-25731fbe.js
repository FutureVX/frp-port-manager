import{v as fe,X as be,S as C,A as ge,c as pe,f,j as t,a2 as w,g as l,a3 as ve,_ as me,k as c,Z as he,a5 as xe,u as ye,h as $,O as Ce,l as ze,n as h,i as ke,$ as g,a1 as Se}from"./light-a4b7478e.js";import{d as m,i as we,h as s,bc as R,c as z}from"./runtime-core.esm-bundler-b2c41dc4.js";function ho(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function xo(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function $e(e,n){const r=e.trim().split(/\s+/g),o={top:r[0]};switch(r.length){case 1:o.right=r[0],o.bottom=r[0],o.left=r[0];break;case 2:o.right=r[1],o.left=r[1],o.bottom=r[0];break;case 3:o.right=r[1],o.bottom=r[2],o.left=r[1];break;case 4:o.right=r[1],o.bottom=r[2],o.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n===void 0?o:o[n]}function yo(e,n){const[r,o]=e.split(" ");return n?n==="row"?r:o:{row:r,col:o||r}}function Re(e){return Object.keys(e)}var Be="[object Symbol]";function Te(e){return typeof e=="symbol"||fe(e)&&be(e)==Be}function Me(e,n){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=n(e[r],r,e);return a}var Pe=1/0,k=C?C.prototype:void 0,S=k?k.toString:void 0;function B(e){if(typeof e=="string")return e;if(ge(e))return Me(e,B)+"";if(Te(e))return S?S.call(e):"";var n=e+"";return n=="0"&&1/e==-Pe?"-0":n}function _e(e){return e==null?"":B(e)}function Le(e,n,r){var o=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var d=Array(a);++o<a;)d[o]=e[o+n];return d}function je(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:Le(e,n,r)}var Oe="\\ud800-\\udfff",Ee="\\u0300-\\u036f",Ie="\\ufe20-\\ufe2f",Ae="\\u20d0-\\u20ff",Fe=Ee+Ie+Ae,He="\\ufe0e\\ufe0f",Ne="\\u200d",Ve=RegExp("["+Ne+Oe+Fe+He+"]");function T(e){return Ve.test(e)}function We(e){return e.split("")}var M="\\ud800-\\udfff",Ze="\\u0300-\\u036f",De="\\ufe20-\\ufe2f",Ge="\\u20d0-\\u20ff",Ue=Ze+De+Ge,qe="\\ufe0e\\ufe0f",Je="["+M+"]",x="["+Ue+"]",y="\\ud83c[\\udffb-\\udfff]",Ke="(?:"+x+"|"+y+")",P="[^"+M+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",Xe="\\u200d",j=Ke+"?",O="["+qe+"]?",Ye="(?:"+Xe+"(?:"+[P,_,L].join("|")+")"+O+j+")*",Qe=O+j+Ye,eo="(?:"+[P+x+"?",x,_,L,Je].join("|")+")",oo=RegExp(y+"(?="+y+")|"+eo+Qe,"g");function ro(e){return e.match(oo)||[]}function no(e){return T(e)?ro(e):We(e)}function to(e){return function(n){n=_e(n);var r=T(n)?no(n):void 0,o=r?r[0]:n.charAt(0),a=r?je(r,1).join(""):n.slice(1);return o[e]()+a}}var ao=to("toUpperCase");const io=ao;function so(e,n){return m({name:io(e),setup(){var r;const o=(r=we(pe,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var a;const d=(a=o==null?void 0:o.value)===null||a===void 0?void 0:a[e];return d?d():n}}})}const lo=so("close",s("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),co=f("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[t("svg",`
 height: 1em;
 width: 1em;
 `)]),uo=m({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){w("-base-icon",co,R(e,"clsPrefix"))},render(){return s("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),fo=f("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[l("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),ve("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[t("&::before",`
 border-radius: 50%;
 `)])]),bo=m({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return w("-base-close",fo,R(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:o,round:a,isButtonTag:d}=e;return s(d?"button":"div",{type:d?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:d?void 0:"button",disabled:r,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,a&&`${n}-base-close--round`],onMousedown:b=>{e.focusable||b.preventDefault()},onClick:e.onClick},s(uo,{clsPrefix:n},{default:()=>s(lo,null)}))}}}),go=t([f("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[me({background:"var(--n-color-modal)"}),l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[c("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[c("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[c("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[c("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[c("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),c("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),c("content","flex: 1; min-width: 0;"),c("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),c("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[c("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[c("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[c("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),he(f("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),xe(f("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),E={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Co=Re(E),po=Object.assign(Object.assign({},$.props),E),zo=m({name:"Card",props:po,setup(e){const n=()=>{const{onClose:i}=e;i&&Se(i)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:a}=ye(e),d=$("Card","-card",go,Ce,e,o),p=ze("Card",a,o),b=z(()=>{const{size:i}=e,{self:{color:v,colorModal:I,colorTarget:A,textColor:F,titleTextColor:H,titleFontWeight:N,borderColor:V,actionColor:W,borderRadius:Z,lineHeight:D,closeIconColor:G,closeIconColorHover:U,closeIconColorPressed:q,closeColorHover:J,closeColorPressed:K,closeBorderRadius:X,closeIconSize:Y,closeSize:Q,boxShadow:ee,colorPopover:oe,colorEmbedded:re,colorEmbeddedModal:ne,colorEmbeddedPopover:te,[h("padding",i)]:ae,[h("fontSize",i)]:ie,[h("titleFontSize",i)]:se},common:{cubicBezierEaseInOut:de}}=d.value,{top:le,left:ce,bottom:ue}=$e(ae);return{"--n-bezier":de,"--n-border-radius":Z,"--n-color":v,"--n-color-modal":I,"--n-color-popover":oe,"--n-color-embedded":re,"--n-color-embedded-modal":ne,"--n-color-embedded-popover":te,"--n-color-target":A,"--n-text-color":F,"--n-line-height":D,"--n-action-color":W,"--n-title-text-color":H,"--n-title-font-weight":N,"--n-close-icon-color":G,"--n-close-icon-color-hover":U,"--n-close-icon-color-pressed":q,"--n-close-color-hover":J,"--n-close-color-pressed":K,"--n-border-color":V,"--n-box-shadow":ee,"--n-padding-top":le,"--n-padding-bottom":ue,"--n-padding-left":ce,"--n-font-size":ie,"--n-title-font-size":se,"--n-close-size":Q,"--n-close-icon-size":Y,"--n-close-border-radius":X}}),u=r?ke("card",z(()=>e.size[0]),b,e):void 0;return{rtlEnabled:p,mergedClsPrefix:o,mergedTheme:d,handleCloseClick:n,cssVars:r?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{segmented:e,bordered:n,hoverable:r,mergedClsPrefix:o,rtlEnabled:a,onRender:d,embedded:p,tag:b,$slots:u}=this;return d==null||d(),s(b,{class:[`${o}-card`,this.themeClass,p&&`${o}-card--embedded`,{[`${o}-card--rtl`]:a,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},g(u.cover,i=>i&&s("div",{class:`${o}-card-cover`,role:"none"},i)),g(u.header,i=>i||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},i||this.title),g(u["header-extra"],v=>v&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?s(bo,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),g(u.default,i=>i&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},i)),g(u.footer,i=>i&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},i)]),g(u.action,i=>i&&s("div",{class:`${o}-card__action`,role:"none"},i)))}});export{bo as N,zo as _,uo as a,Co as b,E as c,ho as d,yo as e,Me as f,$e as g,Te as i,Re as k,xo as p,so as r,_e as t};
