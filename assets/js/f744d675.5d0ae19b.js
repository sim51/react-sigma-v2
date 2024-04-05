(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[804],{8989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(1085),l=n(1184),r=n(5694);const a='import { FC, useEffect, CSSProperties } from "react";\n\nimport { SigmaContainer, useRegisterEvents } from "@react-sigma/core";\nimport { SampleGraph } from "./common/SampleGraph";\n\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\n// Sigma settings\nconst sigmaSettings = { allowInvalidContainer: true };\n\n// Create the Component that listen to all events\nconst GraphEvents: React.FC = () => {\n  const registerEvents = useRegisterEvents();\n\n  useEffect(() => {\n    console.log("register events");\n    // Register the events\n    registerEvents({\n      // node events\n      clickNode: (event) => console.log("clickNode", event.event, event.node, event.preventSigmaDefault),\n      doubleClickNode: (event) => console.log("doubleClickNode", event.event, event.node, event.preventSigmaDefault),\n      rightClickNode: (event) => console.log("rightClickNode", event.event, event.node, event.preventSigmaDefault),\n      wheelNode: (event) => console.log("wheelNode", event.event, event.node, event.preventSigmaDefault),\n      downNode: (event) => console.log("downNode", event.event, event.node, event.preventSigmaDefault),\n      enterNode: (event) => console.log("enterNode", event.node),\n      leaveNode: (event) => console.log("leaveNode", event.node),\n      // edge events\n      clickEdge: (event) => console.log("clickEdge", event.event, event.edge, event.preventSigmaDefault),\n      doubleClickEdge: (event) => console.log("doubleClickEdge", event.event, event.edge, event.preventSigmaDefault),\n      rightClickEdge: (event) => console.log("rightClickEdge", event.event, event.edge, event.preventSigmaDefault),\n      wheelEdge: (event) => console.log("wheelEdge", event.event, event.edge, event.preventSigmaDefault),\n      downEdge: (event) => console.log("downEdge", event.event, event.edge, event.preventSigmaDefault),\n      enterEdge: (event) => console.log("enterEdge", event.edge),\n      leaveEdge: (event) => console.log("leaveEdge", event.edge),\n      // stage events\n      clickStage: (event) => console.log("clickStage", event.event, event.preventSigmaDefault),\n      doubleClickStage: (event) => console.log("doubleClickStage", event.event, event.preventSigmaDefault),\n      rightClickStage: (event) => console.log("rightClickStage", event.event, event.preventSigmaDefault),\n      wheelStage: (event) => console.log("wheelStage", event.event, event.preventSigmaDefault),\n      downStage: (event) => console.log("downStage", event.event, event.preventSigmaDefault),\n      // default mouse events\n      click: (event) => console.log("click", event.x, event.y),\n      doubleClick: (event) => console.log("doubleClick", event.x, event.y),\n      wheel: (event) => console.log("wheel", event.x, event.y, event.delta),\n      rightClick: (event) => console.log("rightClick", event.x, event.y),\n      mouseup: (event) => console.log("mouseup", event.x, event.y),\n      mousedown: (event) => console.log("mousedown", event.x, event.y),\n      mousemove: (event) => console.log("mousemove", event.x, event.y),\n      // default touch events\n      touchup: (event) => console.log("touchup", event.touches),\n      touchdown: (event) => console.log("touchdown", event.touches),\n      touchmove: (event) => console.log("touchmove", event.touches),\n      // sigma kill\n      kill: () => console.log("kill"),\n      resize: () => console.log("resize"),\n      beforeRender: () => console.log("beforeRender"),\n      afterRender: () => console.log("afterRender"),\n      // sigma camera update\n      updated: (event) => console.log("updated", event.x, event.y, event.angle, event.ratio),\n    });\n  }, [registerEvents]);\n\n  return null;\n};\n\nexport const Events: FC<{ style?: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style} settings={sigmaSettings}>\n      <SampleGraph />\n      <GraphEvents />\n    </SigmaContainer>\n  );\n};\n',s={},c="Events",i={id:"example/events",title:"Events",description:"Sigma dispatch various events that you can listen :",source:"@site/docs/example/02_events.mdx",sourceDirName:"example",slug:"/example/events",permalink:"/react-sigma/docs/example/events",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/02_events.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Load a graph",permalink:"/react-sigma/docs/example/load-graph"},next:{title:"Drag'n'Drop",permalink:"/react-sigma/docs/example/drag_n_drop"}},d={},u=[];function g(e){const t={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,o.jsx)(t.p,{children:"Sigma dispatch various events that you can listen :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"mouse events"}),"\n",(0,o.jsx)(t.li,{children:"touch events"}),"\n",(0,o.jsx)(t.li,{children:"camera events"}),"\n",(0,o.jsx)(t.li,{children:"graph events"}),"\n",(0,o.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["With ",(0,o.jsx)(t.strong,{children:"react-sigma"})," you can listen to all those events with the help of the hook ",(0,o.jsx)(t.code,{children:"useRegisterEvents"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This hook helps you to register your listeners (and also do the remove for you).\nCheck the code below to see how to do it, and don't forget to open your browser console in preview mode."}),"\n",(0,o.jsx)(r.O,{code:a,title:"Display in the console all sigma events",component:()=>{const{Events:e}=n(1697);return(0,o.jsx)(e,{style:{height:"400px"}})}})]})}function v(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},1697:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Events:()=>i});var o=n(4041),l=n(5556),r=n(7734),a=n(1085);const s={allowInvalidContainer:!0},c=()=>{const e=(0,l.Qp)();return(0,o.useEffect)((()=>{console.log("register events"),e({clickNode:e=>console.log("clickNode",e.event,e.node,e.preventSigmaDefault),doubleClickNode:e=>console.log("doubleClickNode",e.event,e.node,e.preventSigmaDefault),rightClickNode:e=>console.log("rightClickNode",e.event,e.node,e.preventSigmaDefault),wheelNode:e=>console.log("wheelNode",e.event,e.node,e.preventSigmaDefault),downNode:e=>console.log("downNode",e.event,e.node,e.preventSigmaDefault),enterNode:e=>console.log("enterNode",e.node),leaveNode:e=>console.log("leaveNode",e.node),clickEdge:e=>console.log("clickEdge",e.event,e.edge,e.preventSigmaDefault),doubleClickEdge:e=>console.log("doubleClickEdge",e.event,e.edge,e.preventSigmaDefault),rightClickEdge:e=>console.log("rightClickEdge",e.event,e.edge,e.preventSigmaDefault),wheelEdge:e=>console.log("wheelEdge",e.event,e.edge,e.preventSigmaDefault),downEdge:e=>console.log("downEdge",e.event,e.edge,e.preventSigmaDefault),enterEdge:e=>console.log("enterEdge",e.edge),leaveEdge:e=>console.log("leaveEdge",e.edge),clickStage:e=>console.log("clickStage",e.event,e.preventSigmaDefault),doubleClickStage:e=>console.log("doubleClickStage",e.event,e.preventSigmaDefault),rightClickStage:e=>console.log("rightClickStage",e.event,e.preventSigmaDefault),wheelStage:e=>console.log("wheelStage",e.event,e.preventSigmaDefault),downStage:e=>console.log("downStage",e.event,e.preventSigmaDefault),click:e=>console.log("click",e.x,e.y),doubleClick:e=>console.log("doubleClick",e.x,e.y),wheel:e=>console.log("wheel",e.x,e.y,e.delta),rightClick:e=>console.log("rightClick",e.x,e.y),mouseup:e=>console.log("mouseup",e.x,e.y),mousedown:e=>console.log("mousedown",e.x,e.y),mousemove:e=>console.log("mousemove",e.x,e.y),touchup:e=>console.log("touchup",e.touches),touchdown:e=>console.log("touchdown",e.touches),touchmove:e=>console.log("touchmove",e.touches),kill:()=>console.log("kill"),resize:()=>console.log("resize"),beforeRender:()=>console.log("beforeRender"),afterRender:()=>console.log("afterRender"),updated:e=>console.log("updated",e.x,e.y,e.angle,e.ratio)})}),[e]),null},i=e=>{let{style:t}=e;return(0,a.jsxs)(l.hF,{style:t,settings:s,children:[(0,a.jsx)(r.n,{}),(0,a.jsx)(c,{})]})}},7734:(e,t,n)=>{"use strict";n.d(t,{n:()=>s});var o=n(4041),l=n(5556),r=n(4504),a=n(1724);const s=e=>{let{disableHoverEffect:t}=e;const{randomGraph:n}=(0,a.l)(),s=(0,l.Bx)(),c=(0,l.Qp)(),i=(0,l.dW)(),d=(0,l.Su)(),{assign:u}=(0,r.J)(),[g,v]=(0,o.useState)(null);return(0,o.useEffect)((()=>{const e=n();console.log("Graph is ",e.toJSON()),d(e),u(),c({enterNode:e=>v(e.node),leaveNode:()=>v(null)})}),[u,d,c,n]),(0,o.useEffect)((()=>{i({nodeReducer:(e,n)=>{const o=s.getGraph(),l={...n,highlighted:n.highlighted||!1};return!t&&g&&(e===g||o.neighbors(g).includes(e)?l.highlighted=!0:(l.color="#E2E2E2",l.highlighted=!1)),l},edgeReducer:(e,n)=>{const o=s.getGraph(),l={...n,hidden:!1};return t||!g||o.extremities(e).includes(g)||(l.hidden=!0),l}})}),[g,i,s,t]),null}},1724:(e,t,n)=>{"use strict";n.d(t,{l:()=>d});var o=n(4041),l=n(2464),r=n.n(l),a=n(8188),s=n(2437),c=n(273),i=n.n(c);const d=()=>{const[e,t]=(0,o.useState)(a.Jb);(0,o.useEffect)((()=>{const e=new URLSearchParams(document.location.search).get("seed");if(e){r()(e,{global:!0});const n=new a.Gz({locale:a.en});n.seed(Math.random()),t(n)}}),[document.location]);const n=(0,o.useCallback)((()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[e]),l=(0,o.useCallback)((()=>{const t=i()(s.UndirectedGraph,{order:100,probability:.1});return t.nodes().forEach((o=>{t.mergeNodeAttributes(o,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:n(),x:Math.random(),y:Math.random(),borderColor:n(),borderSize:e.number.float({min:0,max:1,multipleOf:.1}),pictoColor:n(),image:e.image.urlLoremFlickr()})})),t}),[e]);return{faker:e,randomColor:n,randomGraph:l}}},5694:(e,t,n)=>{"use strict";n.d(t,{A:()=>c,O:()=>s});var o=n(4041),l=n(4506),r=n(6704),a=n(1085);const s=e=>{let{code:t,title:n,component:s,mode:c="code"}=e;const[i,d]=(0,o.useState)(c);return(0,a.jsx)(r.A,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:()=>(0,a.jsxs)("div",{className:"code-preview",children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{children:n&&(0,a.jsx)("h5",{children:n})}),(0,a.jsxs)("div",{className:"switch",children:[(0,a.jsx)("button",{className:"button",onClick:()=>d("code"),disabled:"code"===i,children:"Code"}),(0,a.jsx)("button",{className:"button",onClick:()=>d("preview"),disabled:"preview"===i,children:"Preview"})]})]}),(0,a.jsxs)("div",{className:"content",children:["preview"===i&&s(),"code"===i&&(0,a.jsx)(l.A,{language:"jsx",children:t})]})]})})},c=s},9258:(e,t,n)=>{var o=n(8058),l=n(181),r={dimensions:["x","y"],center:.5,scale:1};function a(e,t,n){if(!l(t))throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");var a=(n=o(n,r)).dimensions;if(!Array.isArray(a)||2!==a.length)throw new Error("graphology-layout/random: given dimensions are invalid.");var s=n.center,c=n.scale,i=2*Math.PI,d=(s-.5)*c,u=t.order,g=a[0],v=a[1];function h(e,t){return t[g]=c*Math.cos(e*i/u)+d,t[v]=c*Math.sin(e*i/u)+d,t}var m=0;if(!e){var f={};return t.forEachNode((function(e){f[e]=h(m++,{})})),f}t.updateEachNodeAttributes((function(e,t){return h(m++,t),t}),{attributes:a})}var s=a.bind(null,!1);s.assign=a.bind(null,!0),e.exports=s},8058:e=>{e.exports=function e(t,n){t=t||{};var o,l={};for(var r in n){var a=t[r],s=n[r];!(o=s)||"object"!=typeof o||"function"==typeof o||Array.isArray(o)||o instanceof Set||o instanceof Map||o instanceof RegExp||o instanceof Date?l[r]=void 0===a?s:a:l[r]=e(a,s)}return l}},7713:()=>{},5556:(e,t,n)=>{"use strict";n.d(t,{Bx:()=>i,Qp:()=>m,Su:()=>f,_d:()=>E,dW:()=>d,hF:()=>w,n4:()=>p,pj:()=>D,qz:()=>A,t_:()=>P});var o=n(4041),l=n(2437),r=n(4160);const a=(0,o.createContext)(null),s=a.Provider;function c(){const e=(0,o.useContext)(a);if(null==e)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return e}function i(){return c().sigma}function d(){const{sigma:e,container:t}=c(),[n,l]=(0,o.useState)({});return(0,o.useEffect)((()=>{if(!e||!n)return;const o={};return Object.keys(n).forEach((t=>{o[t]=n[t],e.setSetting(t,n[t])})),()=>{e&&t&&t.offsetWidth>0&&t.offsetHeight>0&&Object.keys(o).forEach((t=>{e.setSetting(t,o[t])}))}}),[e,n,t]),l}const u=["clickNode","rightClickNode","downNode","enterNode","leaveNode","doubleClickNode","wheelNode","clickEdge","rightClickEdge","downEdge","enterEdge","leaveEdge","doubleClickEdge","wheelEdge","clickStage","rightClickStage","downStage","doubleClickStage","wheelStage","beforeRender","afterRender","kill"],g=["click","rightClick","mouseup","mousedown","mousemove","mousemovebody","doubleClick","wheel"],v=["touchup","touchdown","touchmove"],h=["updated"];function m(){const e=i(),t=d(),[n,l]=(0,o.useState)({});return(0,o.useEffect)((()=>{if(!e||!n)return;const t=n,o=Object.keys(t);return o.forEach((n=>{const o=t[n];u.find((e=>e===n))&&e.on(n,o),g.find((e=>e===n))&&e.getMouseCaptor().on(n,o),v.find((e=>e===n))&&e.getTouchCaptor().on(n,o),h.find((e=>e===n))&&e.getCamera().on(n,o)})),()=>{e&&o.forEach((n=>{const o=t[n];u.find((e=>e===n))&&e.off(n,o),g.find((e=>e===n))&&e.getMouseCaptor().off(n,o),v.find((e=>e===n))&&e.getTouchCaptor().off(n,o),h.find((e=>e===n))&&e.getCamera().off(n,o)}))}}),[e,n,t]),l}function f(){const e=i();return(0,o.useCallback)((function(t,n){void 0===n&&(n=!0),e&&t&&(n&&e.getGraph().order>0&&e.getGraph().clear(),e.getGraph().import(t),e.refresh())}),[e])}function p(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!=Object.keys(t).length)return!1;for(const n in e){if(!Object.hasOwn(t,n))return!1;if(!p(e[n],t[n]))return!1}return!0}return!1}function b(e){const t=i(),[n,l]=(0,o.useState)(e||{});(0,o.useEffect)((()=>{p(n,e||{})||l(e||{})}),[e]);const r=(0,o.useCallback)((e=>{t.getCamera().animatedZoom(Object.assign(Object.assign({},n),e))}),[t,n]),a=(0,o.useCallback)((e=>{t.getCamera().animatedUnzoom(Object.assign(Object.assign({},n),e))}),[t,n]),s=(0,o.useCallback)((e=>{t.getCamera().animatedReset(Object.assign(Object.assign({},n),e))}),[t,n]),c=(0,o.useCallback)(((e,o)=>{t.getCamera().animate(e,Object.assign(Object.assign({},n),o))}),[t,n]),d=(0,o.useCallback)(((e,o)=>{const l=t.getNodeDisplayData(e);l?t.getCamera().animate(l,Object.assign(Object.assign({},n),o)):console.log(`Node ${e} not found`)}),[t,n]);return{zoomIn:r,zoomOut:a,reset:s,goto:c,gotoNode:d}}const w=(0,o.forwardRef)(((e,t)=>{let{graph:n,id:a,className:c,style:i,settings:d,children:u}=e;const g=(0,o.useRef)(null),v=(0,o.useRef)(null),h={className:`react-sigma ${c||""}`,id:a,style:i},[m,f]=(0,o.useState)(null),[b,w]=(0,o.useState)(d||{});(0,o.useEffect)((()=>{p(b,d)||w(d||{})}),[d]),(0,o.useEffect)((()=>{let e=null;if(null!==v.current){let t=new l;n&&(t="function"==typeof n?new n:n),e=new r.UT(t,v.current,b),m&&e.getCamera().setState(m.getCamera().getState())}return f(e),()=>{e&&e.kill(),f(null)}}),[v,n,b]),(0,o.useImperativeHandle)(t,(()=>m),[m]);const E=(0,o.useMemo)((()=>m&&g.current?{sigma:m,container:g.current}:null),[m,g.current]),C=null!==E?o.createElement(s,{value:E},u):null;return o.createElement("div",Object.assign({},h,{ref:g}),o.createElement("div",{className:"sigma-container",ref:v}),C)})),E=e=>{let{id:t,className:n,style:l,children:r,position:a="bottom-left"}=e;const s={className:`react-sigma-controls ${n||""} ${a}`,id:t,style:l};return o.createElement("div",Object.assign({},s),r)};var C;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k.apply(this,arguments)}var x,y=function(e){return o.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),C||(C=o.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S.apply(this,arguments)}var j,N=function(e){return o.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),x||(x=o.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}var O=function(e){return o.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),j||(j=o.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};const D=e=>{let{className:t,style:n,animationDuration:l=200,children:r,labels:a={}}=e;const{zoomIn:s,zoomOut:c,reset:i}=b({duration:l,factor:1.5}),d={style:n,className:`react-sigma-control ${t||""}`};return o.createElement(o.Fragment,null,o.createElement("div",Object.assign({},d),o.createElement("button",{onClick:()=>s(),title:a.zoomIn||"Zoom In"},r?r[0]:o.createElement(y,{style:{width:"1em"}}))),o.createElement("div",Object.assign({},d),o.createElement("button",{onClick:()=>c(),title:a.zoomOut||"Zoom Out"},r?r[1]:o.createElement(N,{style:{width:"1em"}}))),o.createElement("div",Object.assign({},d),o.createElement("button",{onClick:()=>i(),title:a.reset||"See whole graph"},r?r[2]:o.createElement(O,{style:{width:"1em"}}))))};var R;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},M.apply(this,arguments)}var G,H=function(e){return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),R||(R=o.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},z.apply(this,arguments)}var F=function(e){return o.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),G||(G=o.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};const P=e=>{let{id:t,className:n,style:l,container:r,children:a,labels:s={}}=e;const{isFullScreen:i,toggle:d}=function(e){const t=c(),[n,l]=(0,o.useState)(!1),[r,a]=(0,o.useState)(e||t.container),s=()=>l((e=>!e));return(0,o.useEffect)((()=>(document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s))),[s]),(0,o.useEffect)((()=>{a(e||t.container)}),[e,t.container]),{toggle:(0,o.useCallback)((()=>{var e;e=r,document.fullscreenElement!==e?e.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}),[r]),isFullScreen:n}}(null==r?void 0:r.current),u={className:`react-sigma-control ${n||""}`,id:t,style:l};return document.fullscreenEnabled?o.createElement("div",Object.assign({},u),o.createElement("button",{onClick:d,title:i?s.exit||"Exit fullscreen":s.enter||"Enter fullscreen"},a&&!i&&a[0],a&&i&&a[1],!a&&!i&&o.createElement(H,{style:{width:"1em"}}),!a&&i&&o.createElement(F,{style:{width:"1em"}}))):null},A=e=>{let{id:t,className:n,style:l,labels:r={}}=e;const a=i(),s=m(),{gotoNode:c}=b(),[d,u]=(0,o.useState)(""),[g,v]=(0,o.useState)([]),[h,f]=(0,o.useState)(null),[p,w]=(0,o.useState)("");(0,o.useEffect)((()=>{w(`search-${Math.random().toString(36).slice(2)}`)}),[]),(0,o.useEffect)((()=>{const e=[];!h&&d.length>1&&a.getGraph().forEachNode(((t,n)=>{n.label&&n.label.toLowerCase().includes(d.toLowerCase())&&e.push({id:t,label:n.label})})),v(e)}),[d]),(0,o.useEffect)((()=>{s({clickStage:()=>{f(null),u("")}})}),[s]),(0,o.useEffect)((()=>{if(h)return a.getGraph().setNodeAttribute(h,"highlighted",!0),c(h),()=>{a.getGraph().setNodeAttribute(h,"highlighted",!1)}}),[h]);const E={className:`react-sigma-search ${n||""}`,id:t,style:l};return o.createElement("div",Object.assign({},E),o.createElement("label",{htmlFor:p,style:{display:"none"}},r.text||"Search a node"),o.createElement("input",{id:p,type:"text",placeholder:r.placeholder||"Search...",list:`${p}-datalist`,value:d,onChange:e=>{const t=e.target.value,n=g.find((e=>e.label===t));n?(u(n.label),v([]),f(n.id)):(f(null),u(t))}}),o.createElement("datalist",{id:`${p}-datalist`},g.map((e=>o.createElement("option",{key:e.id,value:e.label},e.label)))))}},4504:(e,t,n)=>{"use strict";n.d(t,{J:()=>l});var o=n(9258);const l=(0,n(7504).Cm)(o,{})},7504:(e,t,n)=>{"use strict";n.d(t,{Cb:()=>v,Cm:()=>a,Io:()=>s});var o,l=n(4041),r=n(5556);function a(e,t){return function(n){void 0===n&&(n=t);const o=(0,r.Bx)(),a=(0,l.useRef)(t);return(0,r.n4)(a.current,n)||(a.current=n),{positions:(0,l.useCallback)((()=>a.current?e(o.getGraph(),a.current):{}),[o,a]),assign:(0,l.useCallback)((()=>{a.current&&e.assign(o.getGraph(),a.current)}),[o,a])}}}function s(e){return t=>{const n=(0,r.Bx)(),[o,a]=(0,l.useState)(!1),[s,c]=(0,l.useState)(null),i=(0,l.useRef)();return(0,r.n4)(i.current,t)||(i.current=t),(0,l.useEffect)((()=>{a(!1);let t=null;return i.current&&(t=new e(n.getGraph(),i.current)),c(t),()=>{null!==t&&t.kill()}}),[n,i,c,a]),{stop:(0,l.useCallback)((()=>{s&&(s.stop(),a(!1))}),[s,a]),start:(0,l.useCallback)((()=>{s&&(s.start(),a(!0))}),[s,a]),kill:(0,l.useCallback)((()=>{s&&s.kill(),a(!1)}),[s,a]),isRunning:o}}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}var i,d=function(e){return l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14","data-icon":"play","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),o||(o=l.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"})))};function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}var g=function(e){return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14","data-icon":"stop","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),i||(i=l.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"})))};function v(e){let{id:t,className:n,style:o,layout:a,settings:s,autoRunFor:c,children:i,labels:u={}}=e;const v=(0,r.Bx)(),{stop:h,start:m,isRunning:f}=a(s),p={className:`react-sigma-control ${n||""}`,id:t,style:o};return(0,l.useEffect)((()=>{if(!v)return;let e=null;return void 0!==c&&c>-1&&v.getGraph().order>0&&(m(),e=c>0?window.setTimeout((()=>{h()}),c):null),()=>{e&&clearTimeout(e)}}),[c,m,h,v]),l.createElement("div",Object.assign({},p),l.createElement("button",{onClick:()=>f?h():m(),title:f?u.stop||"Stop the layout animation":u.start||"Start the layout animation"},i&&!f&&i[0],i&&f&&i[1],!i&&!f&&l.createElement(d,{style:{width:"1em"}}),!i&&f&&l.createElement(g,{style:{width:"1em"}})))}}}]);