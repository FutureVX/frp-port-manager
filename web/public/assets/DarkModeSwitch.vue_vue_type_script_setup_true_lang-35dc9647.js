import{f as k,a3 as u,k as l,g as r,u as w,h as g,i as $}from"./light-a4b7478e.js";import{E as C}from"./index-849e8c5d.js";import{d as _,c as f,h as d,F as y,j as c,z as v,A as x,u as B,k as p}from"./runtime-core.esm-bundler-b2c41dc4.js";const M=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[u("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[u("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[l("line",[r("left",{width:"28px"})])]),r("title-position-right",[l("line",[r("right",{width:"28px"})])]),r("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),u("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[l("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),z=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),I=_({name:"Divider",props:z,setup(i){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=w(i),o=g("Divider","-divider",M,C,i,n),a=f(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:m,fontWeight:b}}=o.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":m,"--n-font-weight":b}}),t=s?$("divider",void 0,a,i):void 0;return{mergedClsPrefix:n,cssVars:s?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var i;const{$slots:n,titlePlacement:s,vertical:o,dashed:a,cssVars:t,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),d("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:o,[`${e}-divider--no-title`]:!n.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${s}`]:n.default&&s}],style:t},o?null:d("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!o&&n.default?d(y,null,d("div",{class:`${e}-divider__title`},this.$slots),d("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),P={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},R=x("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),D=[R];function E(i,n){return c(),v("svg",P,D)}const V={name:"mdi-moon-waning-crescent",render:E},j={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},L=x("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),O=[L];function S(i,n){return c(),v("svg",j,O)}const T={name:"mdi-white-balance-sunny",render:S},A=_({name:"DarkModeSwitch"}),W=_({...A,props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(i,{emit:n}){const s=i,o=f({get(){return s.dark},set(t){n("update:dark",t)}});function a(){o.value=!o.value}return(t,e)=>{const h=V,m=T;return c(),v("div",{class:"flex-center text-18px cursor-pointer",onClick:a},[B(o)?(c(),p(h,{key:0})):(c(),p(m,{key:1}))])}}});export{I as _,T as a,V as b,W as c};
