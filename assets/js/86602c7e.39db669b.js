(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[266],{6124:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(1085),o=n(1184),s=n(5694);const l='import { FC, CSSProperties } from "react";\n\nimport { SigmaContainer, ControlsContainer, ZoomControl, SearchControl, FullScreenControl } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nimport { SampleGraph } from "./common/SampleGraph";\nimport { LayoutsControl } from "./common/LayoutsControl";\n\n// Sigma settings are outside the react lifecycle to avoid the change of its ref at every render\n// which triggers a full render of sigma.\n// An other way is to use the `useMemo` hook inside the component\nconst sigmaSettings = { allowInvalidContainer: true };\n\nexport const Complete: FC<{ style?: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer settings={sigmaSettings} style={style}>\n      <SampleGraph />\n      <ControlsContainer position={"bottom-right"}>\n        <ZoomControl />\n        <FullScreenControl />\n        <LayoutsControl />\n      </ControlsContainer>\n      <ControlsContainer position={"top-right"}>\n        <SearchControl style={{ width: "200px" }} />\n      </ControlsContainer>\n    </SigmaContainer>\n  );\n};\n',a='import { FC, useState, useEffect, CSSProperties } from "react";\nimport {\n  AiOutlineZoomIn,\n  AiOutlineZoomOut,\n  AiOutlineFullscreenExit,\n  AiOutlineFullscreen,\n  AiFillPlayCircle,\n  AiFillPauseCircle,\n} from "react-icons/ai";\nimport { MdFilterCenterFocus } from "react-icons/md";\n\nimport { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl } from "@react-sigma/core";\nimport { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";\nimport { SampleGraph } from "./common/SampleGraph";\n\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\n// Sigma settings are outside the react lifecycle to avoid the change of its ref at every render\n// which triggers a full render of sigma.\n// An other way is to use the `useMemo` hook inside the component\nconst sigmaSettings = { allowInvalidContainer: true };\n\nexport const CustomRender: FC<{ style?: CSSProperties }> = ({ style }) => {\n  const [faTime, setFaTime] = useState<number>(2000);\n\n  useEffect(() => {\n    // Globally seed the Math.random\n    const params = new URLSearchParams(window.location.search);\n    const time = params.get("faTime");\n    setFaTime(Number.parseInt(time ?? "2000") || 2000);\n  }, [window.location]);\n\n  return (\n    <SigmaContainer style={style} settings={sigmaSettings}>\n      <SampleGraph />\n      <ControlsContainer position={"bottom-right"}>\n        <ZoomControl labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }}>\n          <AiOutlineZoomIn />\n          <AiOutlineZoomOut />\n          <MdFilterCenterFocus />\n        </ZoomControl>\n        <FullScreenControl labels={{ enter: "ENTER", exit: "EXIT" }}>\n          <AiOutlineFullscreen />\n          <AiOutlineFullscreenExit />\n        </FullScreenControl>\n        <LayoutForceAtlas2Control labels={{ stop: "STOP", start: "START" }} autoRunFor={faTime}>\n          <AiFillPlayCircle />\n          <AiFillPauseCircle />\n        </LayoutForceAtlas2Control>\n      </ControlsContainer>\n    </SigmaContainer>\n  );\n};\n',i={},c="Controls",u={id:"example/controls",title:"Controls",description:"The library comes with a system of controls,",source:"@site/docs/example/05_controls.mdx",sourceDirName:"example",slug:"/example/controls",permalink:"/react-sigma/docs/example/controls",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/05_controls.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Layouts",permalink:"/react-sigma/docs/example/layouts"},next:{title:"External State",permalink:"/react-sigma/docs/example/external_state"}},d={},m=[{value:"List of controls",id:"list-of-controls",level:2},{value:"ControlContainer",id:"controlcontainer",level:2},{value:"Custom render for controls",id:"custom-render-for-controls",level:2},{value:"Custom labels for I18N",id:"custom-labels-for-i18n",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"controls",children:"Controls"}),"\n",(0,r.jsx)(t.p,{children:"The library comes with a system of controls,\nthat helps you to control / interact with the graph, out of the box."}),"\n",(0,r.jsx)(t.h2,{id:"list-of-controls",children:"List of controls"}),"\n",(0,r.jsx)(t.p,{children:"This is the list of available controls :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fullscreen button (on which you can defined the html container)"}),"\n",(0,r.jsx)(t.li,{children:"Search control"}),"\n",(0,r.jsx)(t.li,{children:"Zoom control (in, out & reset)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"controlcontainer",children:"ControlContainer"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.em,{children:"control"})," component must be include into a ",(0,r.jsx)(t.code,{children:"ControlContainer"})," component.\nThis component takes a property called ",(0,r.jsx)(t.code,{children:"position"})," which determinate where the controls will be displayed.\nValues are : ",(0,r.jsx)(t.code,{children:"top-right"}),", ",(0,r.jsx)(t.code,{children:"top-left"}),", ",(0,r.jsx)(t.code,{children:"bottom-right"}),", ",(0,r.jsx)(t.code,{children:"bottom-left"})," ;"]}),"\n",(0,r.jsx)(s.O,{code:l,title:"Control container example",component:()=>{const{Complete:e}=n(325);return(0,r.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,r.jsx)(t.h2,{id:"custom-render-for-controls",children:"Custom render for controls"}),"\n",(0,r.jsx)(t.p,{children:"Controls have pre-defined style and icon, but you can define your own one, by specifying children component."}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.code,{children:"FullScreenControl"}),' you must defined two children,\nthe first one will be the JSX element for the "enter fullscreen"\nand the second for the "exit fullscreen".']}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.code,{children:"ZoomControl"})," you must defined three children :"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"zoom in"}),"\n",(0,r.jsx)(t.li,{children:"zoom out"}),"\n",(0,r.jsx)(t.li,{children:"zoom reset"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"On the Worker layout you must defined two children :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"stop"}),"\n",(0,r.jsx)(t.li,{children:"start"}),"\n"]}),"\n",(0,r.jsx)(s.O,{code:a,title:"Custom render for control",component:()=>{const{CustomRender:e}=n(5519);return(0,r.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,r.jsx)(t.h2,{id:"custom-labels-for-i18n",children:"Custom labels for I18N"}),"\n",(0,r.jsxs)(t.p,{children:["Every component that display a label in a way accepts a property called ",(0,r.jsx)(t.code,{children:"labels"}),",\nwhich is a map of key/value."]}),"\n",(0,r.jsx)(t.p,{children:"For example, you can change the labels of the zoom control like that :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'<ZoomControl labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }} />\n'})})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},325:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Complete:()=>_});var r=n(5556),o=n(7734),s=n(4041),l=n(6750),a=n(5662),i=n(7504),c=n(4504),u=n(9194);const d=(0,i.Cm)(u,{});var m=n(8248);const h=(0,i.Cm)(m,{});var g=n(307),f=n(6145);const p=(0,i.Cm)(g,{}),v=(0,i.Io)(f);var b=n(5105),x=n(3195);const C=(0,i.Cm)(b,{maxIterations:100}),w=(0,i.Io)(x);var j=n(7500),y=n(1085);const E=()=>{const e=(0,r.Bx)(),[t,n]=(0,s.useState)("circular"),[o,u]=(0,s.useState)(!1),m=(0,c.J)(),g=d(),f=h(),b=p(),x=C({maxIterations:100}),E=(0,j.ix)({iterations:100}),S=(0,s.useMemo)((()=>({circular:{layout:m},circlepack:{layout:g},random:{layout:f},noverlaps:{layout:b,worker:v},forceDirected:{layout:x,worker:w},forceAtlas:{layout:E,worker:j.Ur}})),[]);return(0,s.useEffect)((()=>{const{positions:n}=S[t].layout;(0,a.fB)(e.getGraph(),n(),{duration:1e3})}),[t,S,e]),(0,s.useEffect)((()=>{const e=()=>{u(!1)};return!0===o&&setTimeout((()=>document.addEventListener("click",e)),0),()=>document.removeEventListener("click",e)}),[o]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:S[t]&&S[t].worker&&(0,y.jsx)(i.Cb,{layout:S[t].worker,settings:{}})}),(0,y.jsx)("div",{children:(0,y.jsxs)("div",{className:"react-sigma-control",children:[(0,y.jsx)("button",{onClick:()=>u((e=>!e)),children:(0,y.jsx)(l.yd7,{})}),!0===o&&(0,y.jsx)("ul",{style:{position:"absolute",bottom:0,right:"35px",backgroundColor:"#e7e9ed",margin:0,padding:0,listStyle:"none"},children:Object.keys(S).map((e=>(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:"btn btn-link",style:{fontWeight:t===e?"bold":"normal",width:"100%"},onClick:()=>{n(e)},children:e})},e)))})]})})]})},S={allowInvalidContainer:!0},_=e=>{let{style:t}=e;return(0,y.jsxs)(r.hF,{settings:S,style:t,children:[(0,y.jsx)(o.n,{}),(0,y.jsxs)(r._d,{position:"bottom-right",children:[(0,y.jsx)(r.pj,{}),(0,y.jsx)(r.t_,{}),(0,y.jsx)(E,{})]}),(0,y.jsx)(r._d,{position:"top-right",children:(0,y.jsx)(r.qz,{style:{width:"200px"}})})]})}},5519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CustomRender:()=>d});var r=n(4041),o=n(3315),s=n(5314),l=n(5556),a=n(7500),i=n(7734),c=n(1085);const u={allowInvalidContainer:!0},d=e=>{let{style:t}=e;const[n,d]=(0,r.useState)(2e3);return(0,r.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("faTime");d(Number.parseInt(e??"2000")||2e3)}),[window.location]),(0,c.jsxs)(l.hF,{style:t,settings:u,children:[(0,c.jsx)(i.n,{}),(0,c.jsxs)(l._d,{position:"bottom-right",children:[(0,c.jsxs)(l.pj,{labels:{zoomIn:"PLUS",zoomOut:"MINUS",reset:"RESET"},children:[(0,c.jsx)(o.Bj1,{}),(0,c.jsx)(o.kLl,{}),(0,c.jsx)(s.vZw,{})]}),(0,c.jsxs)(l.t_,{labels:{enter:"ENTER",exit:"EXIT"},children:[(0,c.jsx)(o.ssW,{}),(0,c.jsx)(o.IgM,{})]}),(0,c.jsxs)(a.sE,{labels:{stop:"STOP",start:"START"},autoRunFor:n,children:[(0,c.jsx)(o.G2B,{}),(0,c.jsx)(o.cp6,{})]})]})]})}},7734:(e,t,n)=>{"use strict";n.d(t,{n:()=>a});var r=n(4041),o=n(5556),s=n(4504),l=n(1724);const a=e=>{let{disableHoverEffect:t}=e;const{randomGraph:n}=(0,l.l)(),a=(0,o.Bx)(),i=(0,o.Qp)(),c=(0,o.dW)(),u=(0,o.Su)(),{assign:d}=(0,s.J)(),[m,h]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=n();console.log("Graph is ",e.toJSON()),u(e),d(),i({enterNode:e=>h(e.node),leaveNode:()=>h(null)})}),[d,u,i,n]),(0,r.useEffect)((()=>{c({nodeReducer:(e,n)=>{const r=a.getGraph(),o={...n,highlighted:n.highlighted||!1};return!t&&m&&(e===m||r.neighbors(m).includes(e)?o.highlighted=!0:(o.color="#E2E2E2",o.highlighted=!1)),o},edgeReducer:(e,n)=>{const r=a.getGraph(),o={...n,hidden:!1};return t||!m||r.extremities(e).includes(m)||(o.hidden=!0),o}})}),[m,c,a,t]),null}},1724:(e,t,n)=>{"use strict";n.d(t,{l:()=>u});var r=n(4041),o=n(2464),s=n.n(o),l=n(8188),a=n(2437),i=n(273),c=n.n(i);const u=()=>{const[e,t]=(0,r.useState)(l.Jb);(0,r.useEffect)((()=>{const e=new URLSearchParams(document.location.search).get("seed");if(e){s()(e,{global:!0});const n=new l.Gz({locale:l.en});n.seed(Math.random()),t(n)}}),[document.location]);const n=(0,r.useCallback)((()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[e]),o=(0,r.useCallback)((()=>{const t=c()(a.UndirectedGraph,{order:100,probability:.1});return t.nodes().forEach((r=>{t.mergeNodeAttributes(r,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:n(),x:Math.random(),y:Math.random(),borderColor:n(),borderSize:e.number.float({min:0,max:1,multipleOf:.1}),pictoColor:n(),image:e.image.urlLoremFlickr()})})),t}),[e]);return{faker:e,randomColor:n,randomGraph:o}}},5694:(e,t,n)=>{"use strict";n.d(t,{A:()=>i,O:()=>a});var r=n(4041),o=n(4506),s=n(6704),l=n(1085);const a=e=>{let{code:t,title:n,component:a,mode:i="code"}=e;const[c,u]=(0,r.useState)(i);return(0,l.jsx)(s.A,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:()=>(0,l.jsxs)("div",{className:"code-preview",children:[(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{children:n&&(0,l.jsx)("h5",{children:n})}),(0,l.jsxs)("div",{className:"switch",children:[(0,l.jsx)("button",{className:"button",onClick:()=>u("code"),disabled:"code"===c,children:"Code"}),(0,l.jsx)("button",{className:"button",onClick:()=>u("preview"),disabled:"preview"===c,children:"Preview"})]})]}),(0,l.jsxs)("div",{className:"content",children:["preview"===c&&a(),"code"===c&&(0,l.jsx)(o.A,{language:"jsx",children:t})]})]})})},i=a},7713:()=>{},5556:(e,t,n)=>{"use strict";n.d(t,{Bx:()=>u,Qp:()=>p,Su:()=>v,_d:()=>C,dW:()=>d,hF:()=>x,pj:()=>F,qz:()=>L,t_:()=>P});var r=n(4041),o=n(5250),s=n(2437),l=n(4160);const a=(0,r.createContext)(null),i=a.Provider;function c(){const e=(0,r.useContext)(a);if(null==e)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return e}function u(){return c().sigma}function d(){const{sigma:e,container:t}=c(),[n,o]=(0,r.useState)({});return(0,r.useEffect)((()=>{if(!e||!n)return;const r={};return Object.keys(n).forEach((t=>{r[t]=n[t],e.setSetting(t,n[t])})),()=>{e&&t&&t.offsetWidth>0&&t.offsetHeight>0&&Object.keys(r).forEach((t=>{e.setSetting(t,r[t])}))}}),[e,n,t]),o}const m=["clickNode","rightClickNode","downNode","enterNode","leaveNode","doubleClickNode","wheelNode","clickEdge","rightClickEdge","downEdge","enterEdge","leaveEdge","doubleClickEdge","wheelEdge","clickStage","rightClickStage","downStage","doubleClickStage","wheelStage","beforeRender","afterRender","kill"],h=["click","rightClick","mouseup","mousedown","mousemove","mousemovebody","doubleClick","wheel"],g=["touchup","touchdown","touchmove"],f=["updated"];function p(){const e=u(),t=d(),[n,o]=(0,r.useState)({});return(0,r.useEffect)((()=>{if(!e||!n)return;const t=n,r=Object.keys(t);return r.forEach((n=>{const r=t[n];m.find((e=>e===n))&&e.on(n,r),h.find((e=>e===n))&&e.getMouseCaptor().on(n,r),g.find((e=>e===n))&&e.getTouchCaptor().on(n,r),f.find((e=>e===n))&&e.getCamera().on(n,r)})),()=>{e&&r.forEach((n=>{const r=t[n];m.find((e=>e===n))&&e.off(n,r),h.find((e=>e===n))&&e.getMouseCaptor().off(n,r),g.find((e=>e===n))&&e.getTouchCaptor().off(n,r),f.find((e=>e===n))&&e.getCamera().off(n,r)}))}}),[e,n,t]),o}function v(){const e=u();return(0,r.useCallback)((function(t,n){void 0===n&&(n=!0),e&&t&&(n&&e.getGraph().order>0&&e.getGraph().clear(),e.getGraph().import(t),e.refresh())}),[e])}function b(e){const t=u(),n=(0,r.useRef)();(0,o.isEqual)(n.current,e)||(n.current=e);const s=(0,r.useCallback)((e=>{t.getCamera().animatedZoom(Object.assign(Object.assign({},n.current),e))}),[t,n]),l=(0,r.useCallback)((e=>{t.getCamera().animatedUnzoom(Object.assign(Object.assign({},n.current),e))}),[t,n]),a=(0,r.useCallback)((e=>{t.getCamera().animatedReset(Object.assign(Object.assign({},n.current),e))}),[t,n]),i=(0,r.useCallback)(((e,r)=>{t.getCamera().animate(e,Object.assign(Object.assign({},n.current),r))}),[t,n]),c=(0,r.useCallback)(((e,r)=>{const o=t.getNodeDisplayData(e);o?t.getCamera().animate(o,Object.assign(Object.assign({},n.current),r)):console.log(`Node ${e} not found`)}),[t,n]);return{zoomIn:s,zoomOut:l,reset:a,goto:i,gotoNode:c}}const x=(0,r.forwardRef)(((e,t)=>{let{graph:n,id:o,className:a,style:c,settings:u,children:d}=e;const m=(0,r.useRef)(null),h=(0,r.useRef)(null),g={className:`react-sigma ${a||""}`,id:o,style:c},[f,p]=(0,r.useState)(null);(0,r.useEffect)((()=>{let e=null;if(null!==h.current){let t=new s;n&&(t="function"==typeof n?new n:n),e=new l.UT(t,h.current,u),f&&e.getCamera().setState(f.getCamera().getState())}return p(e),()=>{e&&e.kill(),p(null)}}),[h,n,u]),(0,r.useImperativeHandle)(t,(()=>f),[f]);const v=(0,r.useMemo)((()=>f&&m.current?{sigma:f,container:m.current}:null),[f,m.current]),b=null!==v?r.createElement(i,{value:v},d):null;return r.createElement("div",Object.assign({},g,{ref:m}),r.createElement("div",{className:"sigma-container",ref:h}),b)})),C=e=>{let{id:t,className:n,style:o,children:s,position:l="bottom-left"}=e;const a={className:`react-sigma-controls ${n||""} ${l}`,id:t,style:o};return r.createElement("div",Object.assign({},a),s)};var w;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var y,E=function(e){return r.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),w||(w=r.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var _,O=function(e){return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),y||(y=r.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}var N=function(e){return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),_||(_=r.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};const F=e=>{let{className:t,style:n,animationDuration:o=200,children:s,labels:l={}}=e;const{zoomIn:a,zoomOut:i,reset:c}=b({duration:o,factor:1.5}),u={style:n,className:`react-sigma-control ${t||""}`};return r.createElement(r.Fragment,null,r.createElement("div",Object.assign({},u),r.createElement("button",{onClick:()=>a(),title:l.zoomIn||"Zoom In"},s?s[0]:r.createElement(E,{style:{width:"1em"}}))),r.createElement("div",Object.assign({},u),r.createElement("button",{onClick:()=>i(),title:l.zoomOut||"Zoom Out"},s?s[1]:r.createElement(O,{style:{width:"1em"}}))),r.createElement("div",Object.assign({},u),r.createElement("button",{onClick:()=>c(),title:l.reset||"See whole graph"},s?s[2]:r.createElement(N,{style:{width:"1em"}}))))};var R;function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var M,T=function(e){return r.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),R||(R=r.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}var G=function(e){return r.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),M||(M=r.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};const P=e=>{let{id:t,className:n,style:o,container:s,children:l,labels:a={}}=e;const{isFullScreen:i,toggle:u}=function(e){const t=c(),[n,o]=(0,r.useState)(!1),[s,l]=(0,r.useState)(e||t.container),a=()=>o((e=>!e));return(0,r.useEffect)((()=>(document.addEventListener("fullscreenchange",a),()=>document.removeEventListener("fullscreenchange",a))),[a]),(0,r.useEffect)((()=>{l(e||t.container)}),[e,t.container]),{toggle:(0,r.useCallback)((()=>{var e;e=s,document.fullscreenElement!==e?e.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}),[s]),isFullScreen:n}}(null==s?void 0:s.current),d={className:`react-sigma-control ${n||""}`,id:t,style:o};return document.fullscreenEnabled?r.createElement("div",Object.assign({},d),r.createElement("button",{onClick:u,title:i?a.exit||"Exit fullscreen":a.enter||"Enter fullscreen"},l&&!i&&l[0],l&&i&&l[1],!l&&!i&&r.createElement(T,{style:{width:"1em"}}),!l&&i&&r.createElement(G,{style:{width:"1em"}}))):null},L=e=>{let{id:t,className:n,style:o,labels:s={}}=e;const l=u(),a=p(),{gotoNode:i}=b(),[c,d]=(0,r.useState)(""),[m,h]=(0,r.useState)([]),[g,f]=(0,r.useState)(null),[v,x]=(0,r.useState)("");(0,r.useEffect)((()=>{x(`search-${Math.random().toString(36).slice(2)}`)}),[]),(0,r.useEffect)((()=>{const e=[];!g&&c.length>1&&l.getGraph().forEachNode(((t,n)=>{n.label&&n.label.toLowerCase().includes(c.toLowerCase())&&e.push({id:t,label:n.label})})),h(e)}),[c]),(0,r.useEffect)((()=>{a({clickStage:()=>{f(null),d("")}})}),[a]),(0,r.useEffect)((()=>{if(g)return l.getGraph().setNodeAttribute(g,"highlighted",!0),i(g),()=>{l.getGraph().setNodeAttribute(g,"highlighted",!1)}}),[g]);const C={className:`react-sigma-search ${n||""}`,id:t,style:o};return r.createElement("div",Object.assign({},C),r.createElement("label",{htmlFor:v,style:{display:"none"}},s.text||"Search a node"),r.createElement("input",{id:v,type:"text",placeholder:s.placeholder||"Search...",list:`${v}-datalist`,value:c,onChange:e=>{const t=e.target.value,n=m.find((e=>e.label===t));n?(d(n.label),h([]),f(n.id)):(f(null),d(t))}}),r.createElement("datalist",{id:`${v}-datalist`},m.map((e=>r.createElement("option",{key:e.id,value:e.label},e.label)))))}},4504:(e,t,n)=>{"use strict";n.d(t,{J:()=>o});var r=n(9258);const o=(0,n(7504).Cm)(r,{})},7504:(e,t,n)=>{"use strict";n.d(t,{Cb:()=>g,Cm:()=>a,Io:()=>i});var r,o=n(5250),s=n(4041),l=n(5556);function a(e,t){return function(n){void 0===n&&(n=t);const r=(0,l.Bx)(),a=(0,s.useRef)(t);return(0,o.isEqual)(a.current,n)||(a.current=n),{positions:(0,s.useCallback)((()=>a.current?e(r.getGraph(),a.current):{}),[r,a]),assign:(0,s.useCallback)((()=>{a.current&&e.assign(r.getGraph(),a.current)}),[r,a])}}}function i(e){return t=>{const n=(0,l.Bx)(),[r,a]=(0,s.useState)(!1),[i,c]=(0,s.useState)(null),u=(0,s.useRef)();return(0,o.isEqual)(u.current,t)||(u.current=t),(0,s.useEffect)((()=>{a(!1);let t=null;return u.current&&(t=new e(n.getGraph(),u.current)),c(t),()=>{null!==t&&t.kill()}}),[n,u,c,a]),{stop:(0,s.useCallback)((()=>{i&&(i.stop(),a(!1))}),[i,a]),start:(0,s.useCallback)((()=>{i&&(i.start(),a(!0))}),[i,a]),kill:(0,s.useCallback)((()=>{i&&i.kill(),a(!1)}),[i,a]),isRunning:r}}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u,d=function(e){return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14","data-icon":"play","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),r||(r=s.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"})))};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h=function(e){return s.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14","data-icon":"stop","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),u||(u=s.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"})))};function g(e){let{id:t,className:n,style:r,layout:o,settings:a,autoRunFor:i,children:c,labels:u={}}=e;const m=(0,l.Bx)(),{stop:g,start:f,isRunning:p}=o(a),v={className:`react-sigma-control ${n||""}`,id:t,style:r};return(0,s.useEffect)((()=>{if(!m)return;let e=null;return void 0!==i&&i>-1&&m.getGraph().order>0&&(f(),e=i>0?window.setTimeout((()=>{g()}),i):null),()=>{e&&clearTimeout(e)}}),[i,f,g,m]),s.createElement("div",Object.assign({},v),s.createElement("button",{onClick:()=>p?g():f(),title:p?u.stop||"Stop the layout animation":u.start||"Start the layout animation"},c&&!p&&c[0],c&&p&&c[1],!c&&!p&&s.createElement(d,{style:{width:"1em"}}),!c&&p&&s.createElement(h,{style:{width:"1em"}})))}},7500:(e,t,n)=>{"use strict";n.d(t,{Ur:()=>i,ix:()=>a,sE:()=>c});var r=n(9122),o=n(7504),s=n(2426),l=n(4041);const a=(0,o.Cm)(r,{iterations:100}),i=(0,o.Io)(s),c=e=>{let{id:t,className:n,style:r,settings:s={},autoRunFor:a,children:c,labels:u}=e;const d={id:t,className:n,style:r,settings:s,autoRunFor:a,labels:u,layout:i};return l.createElement(o.Cb,Object.assign({},d),c)}}}]);