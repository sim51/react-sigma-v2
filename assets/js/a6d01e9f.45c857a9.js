(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[3969],{6398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"example/layouts","title":"Layouts","description":"The react-sigma includes some sub-libraries for managing layouts on graphs.","source":"@site/docs/example/04_layouts.mdx","sourceDirName":"example","slug":"/example/layouts","permalink":"/react-sigma/docs/example/layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/04_layouts.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"docs","previous":{"title":"Drag\'n\'Drop","permalink":"/react-sigma/docs/example/drag_n_drop"},"next":{"title":"Controls","permalink":"/react-sigma/docs/example/controls"}}');var r=n(1085),o=n(1184),s=n(9893);const l="import { SigmaContainer, useLoadGraph } from '@react-sigma/core';\nimport '@react-sigma/core/lib/style.css';\nimport { useLayoutCircular } from '@react-sigma/layout-circular';\nimport Graph from 'graphology';\nimport { CSSProperties, FC, useEffect } from 'react';\n\nimport { useRandom } from './common/useRandom';\n\nconst RandomCircleGraph: FC = () => {\n  const { faker, randomColor } = useRandom();\n  // Hook for the layout\n  const { positions, assign } = useLayoutCircular();\n  // Hook to load the graph\n  const loadGraph = useLoadGraph();\n\n  useEffect(() => {\n    // Create a random graph\n    const order = 100;\n    const probability = 0.1;\n    const graph = new Graph();\n    for (let i = 0; i < order; i++) {\n      graph.addNode(i, {\n        label: faker.person.fullName(),\n        size: faker.number.int({ min: 4, max: 20 }),\n        color: randomColor(),\n        x: 0,\n        y: 0,\n      });\n    }\n    for (let i = 0; i < order; i++) {\n      for (let j = i + 1; j < order; j++) {\n        if (Math.random() < probability) graph.addDirectedEdge(i, j);\n        if (Math.random() < probability) graph.addDirectedEdge(j, i);\n      }\n    }\n\n    // Load the graph in sigma\n    loadGraph(graph);\n    // Apply the layout\n    assign();\n    // Display in the console the node's position for the layout\n    console.log(positions());\n  }, [assign, loadGraph, faker.datatype, faker, randomColor, positions]);\n\n  return null;\n};\n\nexport const LayoutCircular: FC<{ style: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>\n      <RandomCircleGraph />\n    </SigmaContainer>\n  );\n};\n",i="import { SigmaContainer } from '@react-sigma/core';\nimport '@react-sigma/core/lib/style.css';\nimport { useWorkerLayoutForceAtlas2 } from '@react-sigma/layout-forceatlas2';\nimport { CSSProperties, FC, useEffect } from 'react';\n\nimport { SampleGraph } from './common/SampleGraph';\n\nconst Fa2: FC = () => {\n  const { start, kill } = useWorkerLayoutForceAtlas2({ settings: { slowDown: 10 } });\n\n  useEffect(() => {\n    // start FA2\n    start();\n\n    // Kill FA2 on unmount\n    return () => {\n      kill();\n    };\n  }, [start, kill]);\n\n  return null;\n};\n\nexport const LayoutFA2: FC<{ style: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>\n      <SampleGraph />\n      <Fa2 />\n    </SigmaContainer>\n  );\n};\n",c="import { ControlsContainer, SigmaContainer } from '@react-sigma/core';\nimport '@react-sigma/core/lib/style.css';\nimport '@react-sigma/core/lib/style.css';\nimport { LayoutForceAtlas2Control } from '@react-sigma/layout-forceatlas2';\nimport { CSSProperties, FC } from 'react';\n\nimport { SampleGraph } from './common/SampleGraph';\n\nexport const LayoutFA2Control: FC<{ style: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>\n      <SampleGraph />\n      <ControlsContainer position={'bottom-right'}>\n        <LayoutForceAtlas2Control settings={{ settings: { slowDown: 10 } }} />\n      </ControlsContainer>\n    </SigmaContainer>\n  );\n};\n",u={},d="Layouts",h={},m=[{value:"List of available layouts",id:"list-of-available-layouts",level:2},{value:"Two types of layouts",id:"two-types-of-layouts",level:2},{value:"Regular layout",id:"regular-layout",level:2},{value:"Worker layout",id:"worker-layout",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"layouts",children:"Layouts"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"react-sigma"})," includes some sub-libraries for managing layouts on graphs.\nThey provide hooks that helps you to apply/run a layout on your sigma instance."]}),"\n",(0,r.jsx)(t.h2,{id:"list-of-available-layouts",children:"List of available layouts"}),"\n",(0,r.jsx)(t.p,{children:"We provide all the layouts that are part of graphology :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout.html#circular",children:"circular"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-circular",children:"@react-sigma/layout-circular"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout.html#circlepack",children:"circlepack"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-circlepack",children:"@react-sigma/layout-circlepack"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout-force.html",children:"force"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-force",children:"@react-sigma/layout-force"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout-forceatlas2.html",children:"force atlas 2"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-forceatlas2",children:"@react-sigma/layout-forceatlas2"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout-noverlap.html",children:"noverlap"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-noverlap",children:"@react-sigma/layout-noverlap"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://graphology.github.io/standard-library/layout.html#random",children:"random"})," in ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@react-sigma/layout-random",children:"@react-sigma/layout-random"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"two-types-of-layouts",children:"Two types of layouts"}),"\n",(0,r.jsxs)(t.p,{children:["There are two types of layout, the one that you call just once (ex: ",(0,r.jsx)(t.code,{children:"random"})," or ",(0,r.jsx)(t.code,{children:"circular"}),") and the worker one."]}),"\n",(0,r.jsx)(t.h2,{id:"regular-layout",children:"Regular layout"}),"\n",(0,r.jsx)(t.p,{children:"For regular layout, we provide a hook that returns two functions :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"positions : a function that execute the layout on the sigma's graph (but doesn't modify it) and returns you a map of position where the key is the node key."}),"\n",(0,r.jsx)(t.li,{children:"assign : a function that execute the layout on the sigma's graph and save the position of nodes in it"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const { positions, assign } = useLayoutCircular(...);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To use one of those hooks you firstly need to install the ",(0,r.jsx)(t.code,{children:"layout-core"})," package and then the layout package you want to use.\nAs an example"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install @react-sigma/layout-core @react-sigma/layout-circular\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can follow this example to see how to use it :"}),"\n",(0,r.jsx)(s.O,{code:l,title:"Apply a circular layout on the graph",component:()=>{const{LayoutCircular:e}=n(4566);return(0,r.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,r.jsx)(t.h2,{id:"worker-layout",children:"Worker layout"}),"\n",(0,r.jsx)(t.p,{children:"For worker layout, we provide a hook that returns :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"function to start the layout"}),"\n",(0,r.jsx)(t.li,{children:"function to stop the layout"}),"\n",(0,r.jsx)(t.li,{children:"function to kill the layout"}),"\n",(0,r.jsx)(t.li,{children:"a boolean to know if the layout is running or not"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const { stop, start, kill, isRunning } = useWorkerLayoutForceAtlas2(...);\n"})}),"\n",(0,r.jsx)(t.p,{children:"With this hook, you can implement your own component to manage the worker."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install @react-sigma/layout-core @react-sigma/layout-forceatlas2\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then you can follow this example to see how to use it :"}),"\n",(0,r.jsx)(s.O,{code:i,title:"FA2 layout on the graph",component:()=>{const{LayoutFA2:e}=n(6702);return(0,r.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,r.jsx)(t.p,{children:"If you want to display start/stop button, you can use the control component we provide for each worker component,\nthat display a start/stop button on the graph."}),"\n",(0,r.jsx)(s.O,{code:c,title:"Click on the FA2 controller",component:()=>{const{LayoutFA2Control:e}=n(3807);return(0,r.jsx)(e,{style:{height:"400px"}})}})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},4566:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LayoutCircular:()=>d});var a=n(3553),r=n(1385),o=n(2437),s=n.n(o),l=n(4041),i=n(1505),c=n(1085);const u=()=>{const{faker:e,randomColor:t}=(0,i.l)(),{positions:n,assign:o}=(0,r.J)(),c=(0,a.Su)();return(0,l.useEffect)((()=>{const a=new(s());for(let n=0;n<100;n++)a.addNode(n,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:t(),x:0,y:0});for(let e=0;e<100;e++)for(let t=e+1;t<100;t++)Math.random()<.1&&a.addDirectedEdge(e,t),Math.random()<.1&&a.addDirectedEdge(t,e);c(a),o(),console.log(n())}),[o,c,e.datatype,e,t,n]),null},d=e=>{let{style:t}=e;return(0,c.jsx)(a.hF,{style:t,settings:{allowInvalidContainer:!0},children:(0,c.jsx)(u,{})})}},6702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LayoutFA2:()=>c});var a=n(3553),r=n(7401),o=n(4041),s=n(3591),l=n(1085);const i=()=>{const{start:e,kill:t}=(0,r.Ur)({settings:{slowDown:10}});return(0,o.useEffect)((()=>(e(),()=>{t()})),[e,t]),null},c=e=>{let{style:t}=e;return(0,l.jsxs)(a.hF,{style:t,settings:{allowInvalidContainer:!0},children:[(0,l.jsx)(s.n,{}),(0,l.jsx)(i,{})]})}},3807:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LayoutFA2Control:()=>l});var a=n(3553),r=n(7401),o=n(3591),s=n(1085);const l=e=>{let{style:t}=e;return(0,s.jsxs)(a.hF,{style:t,settings:{allowInvalidContainer:!0},children:[(0,s.jsx)(o.n,{}),(0,s.jsx)(a._d,{position:"bottom-right",children:(0,s.jsx)(r.sE,{settings:{settings:{slowDown:10}}})})]})}},3591:(e,t,n)=>{"use strict";n.d(t,{n:()=>l});var a=n(3553),r=n(1385),o=n(4041),s=n(1505);const l=e=>{let{disableHoverEffect:t}=e;const{randomGraph:n}=(0,s.l)(),l=(0,a.Bx)(),i=(0,a.Qp)(),c=(0,a.dW)(),u=(0,a.Su)(),{assign:d}=(0,r.J)(),[h,m]=(0,o.useState)(null);return(0,o.useEffect)((()=>{const e=n();u(e),d(),i({enterNode:e=>m(e.node),leaveNode:()=>m(null)})}),[d,u,i,n]),(0,o.useEffect)((()=>{c({nodeReducer:(e,n)=>{const a=l.getGraph(),r={...n,highlighted:n.highlighted||!1};return!t&&h&&(e===h||a.neighbors(h).includes(e)?r.highlighted=!0:(r.color="#E2E2E2",r.highlighted=!1)),r},edgeReducer:(e,n)=>{const a=l.getGraph(),r={...n,hidden:!1};return t||!h||a.extremities(e).includes(h)||(r.hidden=!0),r}})}),[h,c,l,t]),null}},1505:(e,t,n)=>{"use strict";n.d(t,{l:()=>h});var a=n(9999),r=n(1504),o=n(4096),s=n(2437),l=n(273),i=n.n(l),c=n(4041),u=n(2464),d=n.n(u);const h=()=>{const[e,t]=(0,c.useState)(a.a);(0,c.useEffect)((()=>{const e=new URLSearchParams(document.location.search).get("seed");if(e){d()(e,{global:!0});const n=new r.n({locale:o.a});n.seed(Math.random()),t(n)}}),[]);const n=(0,c.useCallback)((()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[]),l=(0,c.useCallback)((()=>{const t=i()(s.UndirectedGraph,{order:100,probability:.1});return t.nodes().forEach((a=>{t.mergeNodeAttributes(a,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:n(),x:Math.random(),y:Math.random(),borderColor:n(),borderSize:e.number.float({min:0,max:1,multipleOf:.1}),pictoColor:n(),image:e.image.urlLoremFlickr()})})),t}),[e,n]);return{faker:e,randomColor:n,randomGraph:l}}},9893:(e,t,n)=>{"use strict";n.d(t,{A:()=>i,O:()=>l});var a=n(7565),r=n(8927),o=n(4041),s=n(1085);const l=e=>{let{code:t,title:n,component:l,mode:i="code"}=e;const[c,u]=(0,o.useState)(i);return(0,s.jsx)(a.A,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:()=>(0,s.jsxs)("div",{className:"code-preview",children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("div",{children:n&&(0,s.jsx)("h5",{children:n})}),(0,s.jsxs)("div",{className:"switch",children:[(0,s.jsx)("button",{className:"button",onClick:()=>u("code"),disabled:"code"===c,children:"Code"}),(0,s.jsx)("button",{className:"button",onClick:()=>u("preview"),disabled:"preview"===c,children:"Preview"})]})]}),(0,s.jsxs)("div",{className:"content",children:["preview"===c&&l(),"code"===c&&(0,s.jsx)(r.A,{language:"jsx",children:t})]})]})})},i=l},9258:(e,t,n)=>{var a=n(8058),r=n(181),o={dimensions:["x","y"],center:.5,scale:1};function s(e,t,n){if(!r(t))throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");var s=(n=a(n,o)).dimensions;if(!Array.isArray(s)||2!==s.length)throw new Error("graphology-layout/random: given dimensions are invalid.");var l=n.center,i=n.scale,c=2*Math.PI,u=(l-.5)*i,d=t.order,h=s[0],m=s[1];function g(e,t){return t[h]=i*Math.cos(e*c/d)+u,t[m]=i*Math.sin(e*c/d)+u,t}var p=0;if(!e){var f={};return t.forEachNode((function(e){f[e]=g(p++,{})})),f}t.updateEachNodeAttributes((function(e,t){return g(p++,t),t}),{attributes:s})}var l=s.bind(null,!1);l.assign=s.bind(null,!0),e.exports=l},8058:e=>{e.exports=function e(t,n){t=t||{};var a,r={};for(var o in n){var s=t[o],l=n[o];!(a=l)||"object"!=typeof a||"function"==typeof a||Array.isArray(a)||a instanceof Set||a instanceof Map||a instanceof RegExp||a instanceof Date?r[o]=void 0===s?l:s:r[o]=e(s,l)}return r}},7713:()=>{},3553:(e,t,n)=>{"use strict";n.d(t,{Bx:()=>c,Qp:()=>f,Su:()=>y,VF:()=>w,_d:()=>j,dW:()=>u,hF:()=>x,n4:()=>v,pj:()=>A,sg:()=>b,t_:()=>D});var a=n(4041),r=n(2437),o=n(60);const s=(0,a.createContext)(null),l=s.Provider;function i(){const e=(0,a.useContext)(s);if(null==e)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return e}function c(){return i().sigma}function u(){const{sigma:e}=i();return(0,a.useCallback)((t=>{e&&Object.keys(t).forEach((n=>{e.setSetting(n,t[n])}))}),[e])}function d(e){return new Set(Object.keys(e))}const h=d({clickNode:!0,rightClickNode:!0,downNode:!0,enterNode:!0,leaveNode:!0,doubleClickNode:!0,wheelNode:!0,clickEdge:!0,rightClickEdge:!0,downEdge:!0,enterEdge:!0,leaveEdge:!0,doubleClickEdge:!0,wheelEdge:!0,clickStage:!0,rightClickStage:!0,downStage:!0,doubleClickStage:!0,wheelStage:!0,beforeRender:!0,afterRender:!0,kill:!0,upStage:!0,upEdge:!0,upNode:!0,enterStage:!0,leaveStage:!0,resize:!0,afterClear:!0,afterProcess:!0,beforeClear:!0,beforeProcess:!0,moveBody:!0}),m=d({click:!0,rightClick:!0,doubleClick:!0,mouseup:!0,mousedown:!0,mousemove:!0,mousemovebody:!0,mouseleave:!0,mouseenter:!0,wheel:!0}),g=d({touchup:!0,touchdown:!0,touchmove:!0,touchmovebody:!0,tap:!0,doubletap:!0}),p=d({updated:!0});function f(){const e=c(),t=u(),[n,r]=(0,a.useState)({});return(0,a.useEffect)((()=>{if(!e||!n)return;const t=n,a=Object.keys(t);return a.forEach((n=>{const a=t[n];h.has(n)&&e.on(n,a),m.has(n)&&e.getMouseCaptor().on(n,a),g.has(n)&&e.getTouchCaptor().on(n,a),p.has(n)&&e.getCamera().on(n,a)})),()=>{e&&a.forEach((n=>{const a=t[n];h.has(n)&&e.off(n,a),m.has(n)&&e.getMouseCaptor().off(n,a),g.has(n)&&e.getTouchCaptor().off(n,a),p.has(n)&&e.getCamera().off(n,a)}))}}),[e,n,t]),r}function y(){const e=c();return(0,a.useCallback)((function(t,n){void 0===n&&(n=!0),e&&t&&(n&&e.getGraph().order>0&&e.getGraph().clear(),e.getGraph().import(t),e.refresh())}),[e])}function v(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!=Object.keys(t).length)return!1;for(const n in e){if(!Object.hasOwn(t,n))return!1;if(!v(e[n],t[n]))return!1}return!0}return!1}function b(e,t){let n;return a=>new Promise((r=>{n&&clearTimeout(n),n=setTimeout((()=>{r(e(a))}),t)}))}function w(e){const t=c(),[n,r]=(0,a.useState)(e||{});(0,a.useEffect)((()=>{r((t=>v(t,e||{})?t:e||{}))}),[e]);const o=(0,a.useCallback)((e=>{t.getCamera().animatedZoom(Object.assign(Object.assign({},n),e))}),[t,n]),s=(0,a.useCallback)((e=>{t.getCamera().animatedUnzoom(Object.assign(Object.assign({},n),e))}),[t,n]),l=(0,a.useCallback)((e=>{t.getCamera().animatedReset(Object.assign(Object.assign({},n),e))}),[t,n]),i=(0,a.useCallback)(((e,a)=>{t.getCamera().animate(e,Object.assign(Object.assign({},n),a))}),[t,n]),u=(0,a.useCallback)(((e,a)=>{const r=t.getNodeDisplayData(e);r?t.getCamera().animate(r,Object.assign(Object.assign({},n),a)):console.log(`Node ${e} not found`)}),[t,n]);return{zoomIn:o,zoomOut:s,reset:l,goto:i,gotoNode:u}}const x=(0,a.forwardRef)(((e,t)=>{let{graph:n,id:s,className:i,style:c,settings:u={},children:d}=e;const h=(0,a.useRef)(null),m=(0,a.useRef)(null),g={className:`react-sigma ${i||""}`,id:s,style:c},[p,f]=(0,a.useState)(null),[y,b]=(0,a.useState)(u);(0,a.useEffect)((()=>{b((e=>v(e,u)?e:u))}),[u]),(0,a.useEffect)((()=>{f((e=>{let t=null;if(null!==m.current){let a=new r;n&&(a="function"==typeof n?new n:n),console.log("new sigma instance",y);let s=null;e&&(s=e.getCamera().getState(),e.kill()),t=new o.UT(a,m.current,y),s&&t.getCamera().setState(s)}return t}))}),[m,n,y]),(0,a.useImperativeHandle)(t,(()=>p),[p]);const w=(0,a.useMemo)((()=>p&&h.current?{sigma:p,container:h.current}:null),[p,h]),x=null!==w?a.createElement(l,{value:w},d):null;return a.createElement("div",Object.assign({},g,{ref:h}),a.createElement("div",{className:"sigma-container",ref:m}),x)})),j=e=>{let{id:t,className:n,style:r,children:o,position:s="bottom-left"}=e;const l={className:`react-sigma-controls ${n||""} ${s}`,id:t,style:r};return a.createElement("div",Object.assign({},l),o)};var C;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(null,arguments)}var E,_=function(e){return a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),C||(C=a.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(null,arguments)}var O,N=function(e){return a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),E||(E=a.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(null,arguments)}var L=function(e){return a.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),O||(O=a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};const A=e=>{let{className:t,style:n,animationDuration:r=200,children:o,labels:s={}}=e;const{zoomIn:l,zoomOut:i,reset:c}=w({duration:r,factor:1.5}),u={style:n,className:`react-sigma-control ${t||""}`};return a.createElement(a.Fragment,null,a.createElement("div",Object.assign({},u),a.createElement("button",{onClick:()=>l(),title:s.zoomIn||"Zoom In"},o?o[0]:a.createElement(L,{style:{width:"1em"}}))),a.createElement("div",Object.assign({},u),a.createElement("button",{onClick:()=>i(),title:s.zoomOut||"Zoom Out"},o?o[1]:a.createElement(N,{style:{width:"1em"}}))),a.createElement("div",Object.assign({},u),a.createElement("button",{onClick:()=>c(),title:s.reset||"See whole graph"},o?o[2]:a.createElement(_,{style:{width:"1em"}}))))};var G;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(null,arguments)}var R,P=function(e){return a.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),G||(G=a.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(null,arguments)}var T=function(e){return a.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),R||(R=a.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};const D=e=>{let{id:t,className:n,style:r,container:o,children:s,labels:l={}}=e;const{isFullScreen:c,toggle:u}=function(e){const t=i(),[n,r]=(0,a.useState)(!1),[o,s]=(0,a.useState)(e||t.container),l=(0,a.useCallback)((()=>r((e=>!e))),[]);return(0,a.useEffect)((()=>(document.addEventListener("fullscreenchange",l),()=>document.removeEventListener("fullscreenchange",l))),[l]),(0,a.useEffect)((()=>{s(e||t.container)}),[e,t.container]),{toggle:(0,a.useCallback)((()=>{var e;e=o,document.fullscreenElement!==e?e.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}),[o]),isFullScreen:n}}(null==o?void 0:o.current),d={className:`react-sigma-control ${n||""}`,id:t,style:r};return document.fullscreenEnabled?a.createElement("div",Object.assign({},d),a.createElement("button",{onClick:u,title:c?l.exit||"Exit fullscreen":l.enter||"Enter fullscreen"},s&&!c&&s[0],s&&c&&s[1],!s&&!c&&a.createElement(T,{style:{width:"1em"}}),!s&&c&&a.createElement(P,{style:{width:"1em"}}))):null}},1385:(e,t,n)=>{"use strict";n.d(t,{J:()=>o});var a=n(5961),r=n(9258);function o(e){return void 0===e&&(e={}),(0,a.Cm)(r,e)}},5961:(e,t,n)=>{"use strict";n.d(t,{Cb:()=>m,Cm:()=>s,Io:()=>l});var a,r=n(3553),o=n(4041);function s(e,t){const n=(0,r.Bx)(),a=(0,o.useRef)(t);return(0,r.n4)(a.current,t)||(a.current=t),{positions:(0,o.useCallback)((()=>a.current?e(n.getGraph(),a.current):{}),[n,a,e]),assign:(0,o.useCallback)((()=>{a.current&&e.assign(n.getGraph(),a.current)}),[n,a,e])}}function l(e,t){const n=(0,r.Bx)(),[a,s]=(0,o.useState)(!1),[l,i]=(0,o.useState)(null),c=(0,o.useRef)(t);return(0,r.n4)(c.current,t)||(c.current=t),(0,o.useEffect)((()=>{s(!1);let t=null;return c.current&&(t=new e(n.getGraph(),c.current)),i(t),()=>{null!==t&&t.kill()}}),[n,c,i,s,e]),{stop:(0,o.useCallback)((()=>{l&&(l.stop(),s(!1))}),[l,s]),start:(0,o.useCallback)((()=>{l&&(l.start(),s(!0))}),[l,s]),kill:(0,o.useCallback)((()=>{l&&l.kill(),s(!1)}),[l,s]),isRunning:a}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(null,arguments)}var c,u=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14","data-icon":"play","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),a||(a=o.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"})))};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(null,arguments)}var h=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14","data-icon":"stop","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),c||(c=o.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"})))};function m(e){let{id:t,className:n,style:a,layout:s,autoRunFor:l,children:i,labels:c={}}=e;const d=(0,r.Bx)(),{stop:m,start:g,isRunning:p}=s,f={className:`react-sigma-control ${n||""}`,id:t,style:a};return(0,o.useEffect)((()=>{if(!d)return;let e=null;return void 0!==l&&l>-1&&d.getGraph().order>0&&(g(),e=l>0?window.setTimeout((()=>{m()}),l):null),()=>{e&&clearTimeout(e)}}),[l,g,m,d]),o.createElement("div",Object.assign({},f),o.createElement("button",{onClick:()=>p?m():g(),title:p?c.stop||"Stop the layout animation":c.start||"Start the layout animation"},i&&!p&&i[0],i&&p&&i[1],!i&&!p&&o.createElement(u,{style:{width:"1em"}}),!i&&p&&o.createElement(h,{style:{width:"1em"}})))}},7401:(e,t,n)=>{"use strict";n.d(t,{Ur:()=>i,ix:()=>l,sE:()=>c});var a=n(5961),r=n(9122),o=n(2426),s=n(4041);function l(e){return void 0===e&&(e={iterations:100}),(0,a.Cm)(r,e)}function i(e){return void 0===e&&(e={}),(0,a.Io)(o,e)}const c=e=>{let{id:t,className:n,style:r,settings:o={},autoRunFor:l,children:c,labels:u}=e;const d={id:t,className:n,style:r,autoRunFor:l,labels:u,layout:i(o)};return s.createElement(a.Cb,Object.assign({},d),c)}}}]);