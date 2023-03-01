import{i as D,T as X}from"./index-33d02da0.js";import{a0 as Z,a1 as ee,a2 as A}from"./index-849e8c5d.js";import{_ as te}from"./SvgIcon.vue_vue_type_script_setup_true_lang-df08f621.js";import{d as _,p as ne,h,i as oe,c as P,b as N,v as ie,g as re,f as ae,j as v,z as L,C as J,u as z,k as R,l as c,q as r,A as u,ax as se,s as le,aP as ce,F as G,B as H,ah as me}from"./runtime-core.esm-bundler-b2c41dc4.js";import{_ as de}from"./Button-643d1ca6.js";import{_ as K}from"./Card-25731fbe.js";import{_ as F,a as O}from"./Grid-c04f5098.js";import{b as pe,f as s,g as w,j as S,k as f,u as Y,h as q,e as ue,t as fe,n as T,i as _e,$ as I,a0 as M}from"./light-a4b7478e.js";import{f as ge}from"./format-length-c9d165c6.js";import{u as he}from"./use-houdini-165727f7.js";import{N as xe}from"./Tag-0846e0d4.js";import{_ as ve}from"./DataTable-b3c98a29.js";import{_ as ye}from"./Space-22b52c27.js";import"./_commonjsHelpers-87174ba5.js";import"./light-cd339fd5.js";import"./light-6b66b35a.js";import"./light-b4e02078.js";import"./_common-89f2509f.js";import"./light-ad9434f6.js";import"./browser-e8121bf8.js";import"./runtime-dom.esm-bundler-3825b271.js";import"./is-browser-fc34c9a6.js";import"./use-memo-3ef194ef.js";import"./color-to-class-b0332f36.js";import"./utils-ae28b86b.js";import"./VResizeObserver-83b1dbc1.js";import"./next-frame-once-7035a838.js";import"./flatten-c427e247.js";import"./Scrollbar-70a7a212.js";import"./Checkbox-2d43d64c.js";import"./use-merged-state-950900ad.js";import"./index-cad90cf4.js";import"./Popover-a2602014.js";import"./Suffix-70fdc0aa.js";import"./index-ffcef1ee.js";import"./get-82c961ad.js";import"./cssr-f33a4f78.js";import"./use-compitable-d780974b.js";import"./Dropdown-4a6757de.js";import"./render-ae2c70c2.js";import"./Select-0d590ec4.js";import"./fade-in-scale-up.cssr-f6939416.js";import"./Input-91e0bb4f.js";import"./omit-b0e7e098.js";const be=t=>{const{textColor3:o,infoColor:e,errorColor:i,successColor:n,warningColor:l,textColor1:m,textColor2:d,railColor:a,fontWeightStrong:g,fontSize:p}=t;return Object.assign(Object.assign({},Z),{contentFontSize:p,titleFontWeight:g,circleBorder:`2px solid ${o}`,circleBorderInfo:`2px solid ${e}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${l}`,iconColor:o,iconColorInfo:e,iconColorError:i,iconColorSuccess:n,iconColorWarning:l,titleTextColor:m,contentTextColor:d,metaTextColor:o,lineColor:a})},ze={name:"Timeline",common:pe,self:be},$e=ze,W=1.25,ke=s("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${W};
`,[w("horizontal",`
 flex-direction: row;
 `,[S(">",[s("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[w("dashed-line-type",[S(">",[s("timeline-item-timeline",[f("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),S(">",[s("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[S(">",[f("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),s("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[f("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),w("right-placement",[s("timeline-item",[s("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),w("left-placement",[s("timeline-item",[s("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 left: 0;
 `)])]),s("timeline-item",`
 position: relative;
 `,[S("&:last-child",[s("timeline-item-timeline",[f("line",`
 display: none;
 `)]),s("timeline-item-content",[f("meta",`
 margin-bottom: 0;
 `)])]),s("timeline-item-content",[f("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),f("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),f("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),w("dashed-line-type",[s("timeline-item-timeline",[f("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),s("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${W} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[f("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),f("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),f("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),Ce=Object.assign(Object.assign({},q.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Q=ue("n-timeline"),we=_({name:"Timeline",props:Ce,setup(t,{slots:o}){const{mergedClsPrefixRef:e}=Y(t),i=q("Timeline","-timeline",ke,$e,t,e);return ne(Q,{props:t,mergedThemeRef:i,mergedClsPrefixRef:e}),()=>{const{value:n}=e;return h("div",{class:[`${n}-timeline`,t.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${t.size}-size`,!t.horizontal&&`${n}-timeline--${t.itemPlacement}-placement`]},o)}}}),Se={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Te=_({name:"TimelineItem",props:Se,setup(t){const o=oe(Q);o||fe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),he();const{inlineThemeDisabled:e}=Y(),i=P(()=>{const{props:{size:l,iconSize:m},mergedThemeRef:d}=o,{type:a}=t,{self:{titleTextColor:g,contentTextColor:p,metaTextColor:x,lineColor:y,titleFontWeight:$,contentFontSize:V,[T("iconSize",l)]:j,[T("titleMargin",l)]:k,[T("titleFontSize",l)]:C,[T("circleBorder",a)]:b,[T("iconColor",a)]:E},common:{cubicBezierEaseInOut:B}}=d.value;return{"--n-bezier":B,"--n-circle-border":b,"--n-icon-color":E,"--n-content-font-size":V,"--n-content-text-color":p,"--n-line-color":y,"--n-meta-text-color":x,"--n-title-font-size":C,"--n-title-font-weight":$,"--n-title-margin":k,"--n-title-text-color":g,"--n-icon-size":ge(m)||j}}),n=e?_e("timeline-item",P(()=>{const{props:{size:l,iconSize:m}}=o,{type:d}=t;return`${l[0]}${m||"a"}${d[0]}`}),i,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:e?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:t,color:o,onRender:e,$slots:i}=this;return e==null||e(),h("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},h("div",{class:`${t}-timeline-item-timeline`},h("div",{class:`${t}-timeline-item-timeline__line`}),I(i.icon,n=>n?h("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:o}},n):h("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:o}}))),h("div",{class:`${t}-timeline-item-content`},I(i.header,n=>n||this.title?h("div",{class:`${t}-timeline-item-content__title`},n||this.title):null),h("div",{class:`${t}-timeline-item-content__content`},M(i.default,()=>[this.content])),h("div",{class:`${t}-timeline-item-content__meta`},M(i.footer,()=>[this.time]))))}}),Be=_({name:"CountTo"}),U=_({...Be,props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(t,{emit:o}){const e=t,i=N(e.startValue);let n=D(i);const l=P(()=>g(n.value)),m=N(!1);function d(){n=D(i,{disabled:m,duration:e.duration,onStarted:()=>o("on-started"),onFinished:()=>o("on-finished"),...e.useEasing?{transition:X[e.transition]}:{}})}function a(){d(),i.value=e.endValue}function g(p){if(p!==0&&!p)return"";const{decimals:x,decimal:y,separator:$,suffix:V,prefix:j}=e;let k=Number(p).toFixed(x);k=String(k);const C=k.split(".");let b=C[0];const E=C.length>1?y+C[1]:"",B=/(\d+)(\d{3})/;if($&&!ee($))for(;B.test(b);)b=b.replace(B,`$1${$}$2`);return j+b+E+V}return ie([()=>e.startValue,()=>e.endValue],()=>{e.autoplay&&a()}),re(()=>{i.value=e.startValue}),ae(()=>{e.autoplay&&a()}),(p,x)=>(v(),L("span",null,J(z(l)),1))}}),Pe={class:"flex w-full h-360px"},Ne={class:"w-200px h-full py-12px"},Le=u("h3",{class:"text-16px font-bold"},"Dashboard",-1),Re=u("p",{class:"text-[#aaa]"},"Overview Of Lasted Month",-1),Ve={class:"pt-36px text-24px font-bold"},je=u("p",{class:"text-[#aaa]"},"Current Month Earnings",-1),Ee={class:"pt-36px text-24px font-bold"},Fe=u("p",{class:"text-[#aaa]"},"Current Month Sales",-1),Oe={class:"flex-1-hidden h-full"},De=_({name:"DashboardAnalysisTopCard"}),Ae=_({...De,setup(t){const o=N({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["下载量","注册数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"]}],yAxis:[{type:"value"}],series:[{color:"#8e9dff",name:"下载量",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311]},{color:"#26deca",name:"注册数",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#26deca"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[2208,2016,2916,4512,8281,2008,1963,2367,2956,678]}]}),{domRef:e}=A(o),i=N({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"时间安排",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[{value:20,name:"学习"},{value:10,name:"娱乐"},{value:30,name:"工作"},{value:40,name:"休息"}]}]}),{domRef:n}=A(i);return(l,m)=>{const d=U,a=de,g=K,p=F,x=O;return v(),R(x,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:c(()=>[r(p,{span:"0:24 640:24 1024:16"},{default:c(()=>[r(g,{bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[u("div",Pe,[u("div",Ne,[Le,Re,u("h3",Ve,[r(d,{prefix:"$","start-value":0,"end-value":7754})]),je,u("h3",Ee,[r(d,{"start-value":0,"end-value":1234})]),Fe,r(a,{class:"mt-24px",type:"primary"},{default:c(()=>[se("Last Month Summary")]),_:1})]),u("div",Oe,[u("div",{ref_key:"lineRef",ref:e,class:"wh-full"},null,512)])])]),_:1})]),_:1}),r(p,{span:"0:24 640:24 1024:8"},{default:c(()=>[r(g,{bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[u("div",{ref_key:"pieRef",ref:n,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}}),Ie=_({__name:"GradientBg",props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(t){const o=t,e=P(()=>`linear-gradient(to bottom right, ${o.startColor}, ${o.endColor})`);return(i,n)=>(v(),L("div",{class:"p-16px rounded-16px text-white",style:ce({backgroundImage:z(e)})},[le(i.$slots,"default")],4))}}),Me={class:"text-16px"},We={class:"flex justify-between pt-12px"},Je=_({name:"DashboardAnalysisDataCard"}),Ge=_({...Je,setup(t){const o=[{id:"visit",title:"访问量",value:1e6,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"成交额",value:234567.89,unit:"$",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"下载数",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"成交数",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(e,i)=>{const n=te,l=U,m=F,d=O;return v(),R(d,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:c(()=>[(v(),L(G,null,H(o,a=>r(m,{key:a.id},{default:c(()=>[r(z(Ie),{class:"h-100px","start-color":a.colors[0],"end-color":a.colors[1]},{default:c(()=>[u("h3",Me,J(a.title),1),u("div",We,[r(n,{icon:a.icon,class:"text-32px"},null,8,["icon"]),r(l,{prefix:a.unit,"start-value":1,"end-value":a.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})}}}),He=_({name:"DashboardAnalysisBottomPart"}),Ke=_({...He,setup(t){const o=[{type:"default",title:"啊",content:"",time:"2021-10-10 20:46"},{type:"success",title:"成功",content:"哪里成功",time:"2021-10-10 20:46"},{type:"error",title:"错误",content:"哪里错误",time:"2021-10-10 20:46"},{type:"warning",title:"警告",content:"哪里警告",time:"2021-10-10 20:46"},{type:"info",title:"信息",content:"是的",time:"2021-10-10 20:46"}],e=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(n){return n.tags.map(m=>h(xe,{style:{marginRight:"6px"},type:"info"},{default:()=>m}))}}],i=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Soybean",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(n,l)=>{const m=Te,d=we,a=K,g=F,p=ve,x=O;return v(),R(x,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:c(()=>[r(g,{span:"0:24 640:24 1024:8"},{default:c(()=>[r(a,{title:"时间线",bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[r(d,null,{default:c(()=>[(v(),L(G,null,H(o,y=>r(m,me({key:y.type},y),null,16)),64))]),_:1})]),_:1})]),_:1}),r(g,{span:"0:24 640:24 1024:16"},{default:c(()=>[r(a,{title:"表格",bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[r(p,{size:"small",columns:e,data:i})]),_:1})]),_:1})]),_:1})}}}),Ot=_({__name:"index",setup(t){return(o,e)=>{const i=ye;return v(),R(i,{vertical:!0,size:16},{default:c(()=>[r(z(Ae)),r(z(Ge)),r(z(Ke))]),_:1})}}});export{Ot as default};
