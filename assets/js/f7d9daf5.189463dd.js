(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[881],{4374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var a=n(1085),r=n(1184),i=(n(6704),n(5694));const o='import { FC, useEffect, CSSProperties } from "react";\nimport { MultiDirectedGraph } from "graphology";\n\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nconst MyGraph: FC = () => {\n  const loadGraph = useLoadGraph();\n\n  useEffect(() => {\n    // Create the graph\n    const graph = new MultiDirectedGraph();\n    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n    loadGraph(graph);\n  }, [loadGraph]);\n\n  return null;\n};\n\nexport const LoadGraphWithHook: FC<{ style?: CSSProperties }> = ({ style }) => {\n  return (\n    <SigmaContainer style={style}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n',l='import { FC, CSSProperties } from "react";\nimport { MultiDirectedGraph } from "graphology";\n\nimport { SigmaContainer } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nexport const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {\n  // Create the graph\n  const graph = new MultiDirectedGraph();\n  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n\n  return <SigmaContainer style={style} graph={graph} settings={{ allowInvalidContainer: true }}></SigmaContainer>;\n};\n',s='import { FC, useEffect, useMemo, CSSProperties } from "react";\nimport { MultiDirectedGraph as MultiGraphConstructor } from "graphology";\nimport EdgeCurveProgram, { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from "@sigma/edge-curve";\nimport { EdgeArrowProgram } from "sigma/rendering";\n\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/react-sigma.min.css";\n\nimport { useRandom } from "./common/useRandom";\n\ninterface NodeType {\n  x: number;\n  y: number;\n  label: string;\n  size: number;\n  color: string;\n}\ninterface EdgeType {\n  type?: string;\n  label?: string;\n  size?: number;\n  curvature?: number;\n  parallelIndex?: number;\n  parallelMaxIndex?: number;\n}\n\nconst MyGraph: React.FC = () => {\n  const { faker, randomColor } = useRandom();\n  const loadGraph = useLoadGraph<NodeType, EdgeType>();\n\n  useEffect(() => {\n    // Create the graph\n    const graph = new MultiGraphConstructor<NodeType, EdgeType>();\n\n    graph.addNode("a", {\n      x: 0,\n      y: 0,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("b", {\n      x: 1,\n      y: -1,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("c", {\n      x: 3,\n      y: -2,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("d", {\n      x: 1,\n      y: -3,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("e", {\n      x: 3,\n      y: -4,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n    graph.addNode("f", {\n      x: 4,\n      y: -5,\n      size: faker.number.int({ min: 4, max: 20 }),\n      color: randomColor(),\n      label: faker.person.fullName(),\n    });\n\n    graph.addEdge("a", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("b", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("b", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("c", "b", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("c", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "c", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("d", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("e", "d", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("e", "f", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n    graph.addEdge("f", "e", { label: faker.date.anytime().toISOString(), size: faker.number.int({ min: 1, max: 5 }) });\n\n    // Use dedicated helper to identify parallel edges:\n    indexParallelEdgesIndex(graph, { edgeIndexAttribute: "parallelIndex", edgeMaxIndexAttribute: "parallelMaxIndex" });\n\n    // Adapt types and curvature of parallel edges for rendering:\n    graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {\n      if (typeof parallelIndex === "number") {\n        graph.mergeEdgeAttributes(edge, {\n          type: "curved",\n          curvature: DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),\n        });\n      } else {\n        graph.setEdgeAttribute(edge, "type", "straight");\n      }\n    });\n\n    // load the graph in sigma\n    loadGraph(graph);\n  }, [loadGraph, faker, randomColor]);\n\n  return null;\n};\n\nexport const MultiDirectedGraph: FC<{ style?: CSSProperties }> = ({ style }) => {\n  // Sigma settings\n  const settings = useMemo(\n    () => ({\n      allowInvalidContainer: true,\n      renderEdgeLabels: true,\n      defaultEdgeType: "straight",\n      edgeProgramClasses: {\n        straight: EdgeArrowProgram,\n        curved: EdgeCurveProgram,\n      },\n    }),\n    [],\n  );\n\n  return (\n    <SigmaContainer style={style} graph={MultiGraphConstructor<NodeType, EdgeType>} settings={settings}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n',d={},c="Load a graph",m={id:"example/load-graph",title:"Load a graph",description:"Graph property on SigmaContainer",source:"@site/docs/example/01_load-graph.mdx",sourceDirName:"example",slug:"/example/load-graph",permalink:"/react-sigma/docs/example/load-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/01_load-graph.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"layout-noverlap",permalink:"/react-sigma/docs/api/layout-noverlap/"},next:{title:"Events",permalink:"/react-sigma/docs/example/events"}},u={},g=[{value:"Graph property on <strong>SigmaContainer</strong>",id:"graph-property-on-sigmacontainer",level:2},{value:"By using <strong>useLoadGraph</strong>",id:"by-using-useloadgraph",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"load-a-graph",children:"Load a graph"}),"\n",(0,a.jsxs)(t.h2,{id:"graph-property-on-sigmacontainer",children:["Graph property on ",(0,a.jsx)(t.strong,{children:"SigmaContainer"})]}),"\n",(0,a.jsxs)(t.p,{children:["Component ",(0,a.jsx)(t.code,{children:"SigmaContainer"})," can take a ",(0,a.jsx)(t.code,{children:"graph"})," property which is either a graph instance or a graph constructor."]}),"\n",(0,a.jsx)(t.p,{children:"So you can use it to load your graph."}),"\n",(0,a.jsx)(i.O,{code:l,title:"Loading a graph via the graph property",component:()=>{const{LoadGraphWithProp:e}=n(7415);return(0,a.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,a.jsxs)(t.h2,{id:"by-using-useloadgraph",children:["By using ",(0,a.jsx)(t.strong,{children:"useLoadGraph"})]}),"\n",(0,a.jsxs)(t.p,{children:["In a children component of ",(0,a.jsx)(t.code,{children:"SigmaContainer"}),", you can use the hook ",(0,a.jsx)(t.code,{children:"useLoadGraph"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This hook is just returns a function that takes a graphology instance, and load it in Sigma."}),"\n",(0,a.jsx)(i.O,{title:"Loading a graph with useLoadGraph hook",code:o,component:()=>{const{LoadGraphWithHook:e}=n(2141);return(0,a.jsx)(e,{style:{height:"400px"}})}}),"\n",(0,a.jsxs)(t.p,{children:["Per default, when the ",(0,a.jsx)(t.code,{children:"SigmaContainer"})," is mounted, the library create a default graphology graph (see ",(0,a.jsx)(t.a,{href:"https://graphology.github.io/instantiation.html",children:"https://graphology.github.io/instantiation.html"}),").\nBut you can define the type of graph that react-sigma will create by passing the constructor you want to use."]}),"\n",(0,a.jsx)(t.p,{children:"This step is mandatory if you want to use a multi graph (ie. parallel edges)."}),"\n",(0,a.jsx)(i.O,{code:s,title:"Defining the graph constructor",component:()=>{const{MultiDirectedGraph:e}=n(2999);return(0,a.jsx)(e,{style:{height:"400px"}})}})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},2141:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LoadGraphWithHook:()=>s});var a=n(4041),r=n(2437),i=n(5556),o=n(1085);const l=()=>{const e=(0,i.Su)();return(0,a.useEffect)((()=>{const t=new r.MultiDirectedGraph;t.addNode("A",{x:0,y:0,label:"Node A",size:10}),t.addNode("B",{x:1,y:1,label:"Node B",size:10}),t.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),e(t)}),[e]),null},s=e=>{let{style:t}=e;return(0,o.jsx)(i.hF,{style:t,children:(0,o.jsx)(l,{})})}},7415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LoadGraphWithProp:()=>o});var a=n(2437),r=n(5556),i=n(1085);const o=e=>{let{style:t}=e;const n=new a.MultiDirectedGraph;return n.addNode("A",{x:0,y:0,label:"Node A",size:10}),n.addNode("B",{x:1,y:1,label:"Node B",size:10}),n.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),(0,i.jsx)(r.hF,{style:t,graph:n,settings:{allowInvalidContainer:!0}})}},2999:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MultiDirectedGraph:()=>m});var a=n(4041),r=n(2437),i=n(548),o=n(2072),l=n(5556),s=n(1724),d=n(1085);const c=()=>{const{faker:e,randomColor:t}=(0,s.l)(),n=(0,l.Su)();return(0,a.useEffect)((()=>{const a=new r.MultiDirectedGraph;a.addNode("a",{x:0,y:0,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addNode("b",{x:1,y:-1,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addNode("c",{x:3,y:-2,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addNode("d",{x:1,y:-3,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addNode("e",{x:3,y:-4,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addNode("f",{x:4,y:-5,size:e.number.int({min:4,max:20}),color:t(),label:e.person.fullName()}),a.addEdge("a","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("b","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("b","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("c","b",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("c","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("d","c",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("d","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("e","d",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("e","f",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),a.addEdge("f","e",{label:e.date.anytime().toISOString(),size:e.number.int({min:1,max:5})}),(0,i.IU)(a,{edgeIndexAttribute:"parallelIndex",edgeMaxIndexAttribute:"parallelMaxIndex"}),a.forEachEdge(((e,t)=>{let{parallelIndex:n,parallelMaxIndex:r}=t;"number"==typeof n?a.mergeEdgeAttributes(e,{type:"curved",curvature:i.yk+3*i.yk*n/(r||1)}):a.setEdgeAttribute(e,"type","straight")})),n(a)}),[n,e,t]),null},m=e=>{let{style:t}=e;const n=(0,a.useMemo)((()=>({allowInvalidContainer:!0,renderEdgeLabels:!0,defaultEdgeType:"straight",edgeProgramClasses:{straight:o.nc,curved:i.Ay}})),[]);return(0,d.jsx)(l.hF,{style:t,graph:r.MultiDirectedGraph,settings:n,children:(0,d.jsx)(c,{})})}},1724:(e,t,n)=>{"use strict";n.d(t,{l:()=>c});var a=n(4041),r=n(2464),i=n.n(r),o=n(8188),l=n(2437),s=n(273),d=n.n(s);const c=()=>{const[e,t]=(0,a.useState)(o.Jb);(0,a.useEffect)((()=>{const e=new URLSearchParams(document.location.search).get("seed");if(e){i()(e,{global:!0});const n=new o.Gz({locale:o.en});n.seed(Math.random()),t(n)}}),[document.location]);const n=(0,a.useCallback)((()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[e]),r=(0,a.useCallback)((()=>{const t=d()(l.UndirectedGraph,{order:100,probability:.1});return t.nodes().forEach((a=>{t.mergeNodeAttributes(a,{label:e.person.fullName(),size:e.number.int({min:4,max:20}),color:n(),x:Math.random(),y:Math.random(),borderColor:n(),borderSize:e.number.float({min:0,max:1,multipleOf:.1}),pictoColor:n(),image:e.image.urlLoremFlickr()})})),t}),[e]);return{faker:e,randomColor:n,randomGraph:r}}},5694:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,O:()=>l});var a=n(4041),r=n(4506),i=n(6704),o=n(1085);const l=e=>{let{code:t,title:n,component:l,mode:s="code"}=e;const[d,c]=(0,a.useState)(s);return(0,o.jsx)(i.A,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:()=>(0,o.jsxs)("div",{className:"code-preview",children:[(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("div",{children:n&&(0,o.jsx)("h5",{children:n})}),(0,o.jsxs)("div",{className:"switch",children:[(0,o.jsx)("button",{className:"button",onClick:()=>c("code"),disabled:"code"===d,children:"Code"}),(0,o.jsx)("button",{className:"button",onClick:()=>c("preview"),disabled:"preview"===d,children:"Preview"})]})]}),(0,o.jsxs)("div",{className:"content",children:["preview"===d&&l(),"code"===d&&(0,o.jsx)(r.A,{language:"jsx",children:t})]})]})})},s=l},7713:()=>{},5556:(e,t,n)=>{"use strict";n.d(t,{Bx:()=>d,Qp:()=>p,Su:()=>f,_d:()=>v,dW:()=>c,hF:()=>y,n4:()=>b,pj:()=>z,qz:()=>D,t_:()=>F});var a=n(4041),r=n(2437),i=n(4160);const o=(0,a.createContext)(null),l=o.Provider;function s(){const e=(0,a.useContext)(o);if(null==e)throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");return e}function d(){return s().sigma}function c(){const{sigma:e,container:t}=s(),[n,r]=(0,a.useState)({});return(0,a.useEffect)((()=>{if(!e||!n)return;const a={};return Object.keys(n).forEach((t=>{a[t]=n[t],e.setSetting(t,n[t])})),()=>{e&&t&&t.offsetWidth>0&&t.offsetHeight>0&&Object.keys(a).forEach((t=>{e.setSetting(t,a[t])}))}}),[e,n,t]),r}const m=["clickNode","rightClickNode","downNode","enterNode","leaveNode","doubleClickNode","wheelNode","clickEdge","rightClickEdge","downEdge","enterEdge","leaveEdge","doubleClickEdge","wheelEdge","clickStage","rightClickStage","downStage","doubleClickStage","wheelStage","beforeRender","afterRender","kill"],u=["click","rightClick","mouseup","mousedown","mousemove","mousemovebody","doubleClick","wheel"],g=["touchup","touchdown","touchmove"],h=["updated"];function p(){const e=d(),t=c(),[n,r]=(0,a.useState)({});return(0,a.useEffect)((()=>{if(!e||!n)return;const t=n,a=Object.keys(t);return a.forEach((n=>{const a=t[n];m.find((e=>e===n))&&e.on(n,a),u.find((e=>e===n))&&e.getMouseCaptor().on(n,a),g.find((e=>e===n))&&e.getTouchCaptor().on(n,a),h.find((e=>e===n))&&e.getCamera().on(n,a)})),()=>{e&&a.forEach((n=>{const a=t[n];m.find((e=>e===n))&&e.off(n,a),u.find((e=>e===n))&&e.getMouseCaptor().off(n,a),g.find((e=>e===n))&&e.getTouchCaptor().off(n,a),h.find((e=>e===n))&&e.getCamera().off(n,a)}))}}),[e,n,t]),r}function f(){const e=d();return(0,a.useCallback)((function(t,n){void 0===n&&(n=!0),e&&t&&(n&&e.getGraph().order>0&&e.getGraph().clear(),e.getGraph().import(t),e.refresh())}),[e])}function b(e,t){if(e===t)return!0;if("object"==typeof e&&null!=e&&"object"==typeof t&&null!=t){if(Object.keys(e).length!=Object.keys(t).length)return!1;for(const n in e){if(!Object.hasOwn(t,n))return!1;if(!b(e[n],t[n]))return!1}return!0}return!1}function x(e){const t=d(),[n,r]=(0,a.useState)(e||{});(0,a.useEffect)((()=>{b(n,e||{})||r(e||{})}),[e]);const i=(0,a.useCallback)((e=>{t.getCamera().animatedZoom(Object.assign(Object.assign({},n),e))}),[t,n]),o=(0,a.useCallback)((e=>{t.getCamera().animatedUnzoom(Object.assign(Object.assign({},n),e))}),[t,n]),l=(0,a.useCallback)((e=>{t.getCamera().animatedReset(Object.assign(Object.assign({},n),e))}),[t,n]),s=(0,a.useCallback)(((e,a)=>{t.getCamera().animate(e,Object.assign(Object.assign({},n),a))}),[t,n]),c=(0,a.useCallback)(((e,a)=>{const r=t.getNodeDisplayData(e);r?t.getCamera().animate(r,Object.assign(Object.assign({},n),a)):console.log(`Node ${e} not found`)}),[t,n]);return{zoomIn:i,zoomOut:o,reset:l,goto:s,gotoNode:c}}const y=(0,a.forwardRef)(((e,t)=>{let{graph:n,id:o,className:s,style:d,settings:c={},children:m}=e;const u=(0,a.useRef)(null),g=(0,a.useRef)(null),h={className:`react-sigma ${s||""}`,id:o,style:d},[p,f]=(0,a.useState)(null),[x,y]=(0,a.useState)(c);(0,a.useEffect)((()=>{b(x,c)||y(c)}),[c]),(0,a.useEffect)((()=>{let e=null;if(null!==g.current){let t=new r;n&&(t="function"==typeof n?new n:n),e=new i.UT(t,g.current,x),p&&e.getCamera().setState(p.getCamera().getState())}return f(e),()=>{e&&e.kill(),f(null)}}),[g,n,x]),(0,a.useImperativeHandle)(t,(()=>p),[p]);const v=(0,a.useMemo)((()=>p&&u.current?{sigma:p,container:u.current}:null),[p,u.current]),E=null!==v?a.createElement(l,{value:v},m):null;return a.createElement("div",Object.assign({},h,{ref:u}),a.createElement("div",{className:"sigma-container",ref:g}),E)})),v=e=>{let{id:t,className:n,style:r,children:i,position:o="bottom-left"}=e;const l={className:`react-sigma-controls ${n||""} ${o}`,id:t,style:r};return a.createElement("div",Object.assign({},l),i)};var E;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}var C,k=function(e){return a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14","data-icon":"plus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),E||(E=a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var j,N=function(e){return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14","data-icon":"minus","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),C||(C=a.createElement("path",{fill:"currentColor",d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"})))};function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}var _=function(e){return a.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16","data-icon":"dot-circle","data-prefix":"far",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),j||(j=a.createElement("path",{fill:"currentColor",d:"M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80"})))};const z=e=>{let{className:t,style:n,animationDuration:r=200,children:i,labels:o={}}=e;const{zoomIn:l,zoomOut:s,reset:d}=x({duration:r,factor:1.5}),c={style:n,className:`react-sigma-control ${t||""}`};return a.createElement(a.Fragment,null,a.createElement("div",Object.assign({},c),a.createElement("button",{onClick:()=>l(),title:o.zoomIn||"Zoom In"},i?i[0]:a.createElement(k,{style:{width:"1em"}}))),a.createElement("div",Object.assign({},c),a.createElement("button",{onClick:()=>s(),title:o.zoomOut||"Zoom Out"},i?i[1]:a.createElement(N,{style:{width:"1em"}}))),a.createElement("div",Object.assign({},c),a.createElement("button",{onClick:()=>d(),title:o.reset||"See whole graph"},i?i[2]:a.createElement(_,{style:{width:"1em"}}))))};var I;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},G.apply(this,arguments)}var M,A=function(e){return a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14","data-icon":"expand","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),I||(I=a.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12M288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12m148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12M160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12"})))};function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}var P=function(e){return a.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14","data-icon":"compress","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),M||(M=a.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24m0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"})))};const F=e=>{let{id:t,className:n,style:r,container:i,children:o,labels:l={}}=e;const{isFullScreen:d,toggle:c}=function(e){const t=s(),[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(e||t.container),l=()=>r((e=>!e));return(0,a.useEffect)((()=>(document.addEventListener("fullscreenchange",l),()=>document.removeEventListener("fullscreenchange",l))),[l]),(0,a.useEffect)((()=>{o(e||t.container)}),[e,t.container]),{toggle:(0,a.useCallback)((()=>{var e;e=i,document.fullscreenElement!==e?e.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}),[i]),isFullScreen:n}}(null==i?void 0:i.current),m={className:`react-sigma-control ${n||""}`,id:t,style:r};return document.fullscreenEnabled?a.createElement("div",Object.assign({},m),a.createElement("button",{onClick:c,title:d?l.exit||"Exit fullscreen":l.enter||"Enter fullscreen"},o&&!d&&o[0],o&&d&&o[1],!o&&!d&&a.createElement(A,{style:{width:"1em"}}),!o&&d&&a.createElement(P,{style:{width:"1em"}}))):null},D=e=>{let{id:t,className:n,style:r,labels:i={}}=e;const o=d(),l=p(),{gotoNode:s}=x(),[c,m]=(0,a.useState)(""),[u,g]=(0,a.useState)([]),[h,f]=(0,a.useState)(null),[b,y]=(0,a.useState)("");(0,a.useEffect)((()=>{y(`search-${Math.random().toString(36).slice(2)}`)}),[]),(0,a.useEffect)((()=>{const e=[];!h&&c.length>1&&o.getGraph().forEachNode(((t,n)=>{n.label&&n.label.toLowerCase().includes(c.toLowerCase())&&e.push({id:t,label:n.label})})),g(e)}),[c]),(0,a.useEffect)((()=>{l({clickStage:()=>{f(null),m("")}})}),[l]),(0,a.useEffect)((()=>{if(h)return o.getGraph().setNodeAttribute(h,"highlighted",!0),s(h),()=>{o.getGraph().setNodeAttribute(h,"highlighted",!1)}}),[h]);const v={className:`react-sigma-search ${n||""}`,id:t,style:r};return a.createElement("div",Object.assign({},v),a.createElement("label",{htmlFor:b,style:{display:"none"}},i.text||"Search a node"),a.createElement("input",{id:b,type:"text",placeholder:i.placeholder||"Search...",list:`${b}-datalist`,value:c,onChange:e=>{const t=e.target.value,n=u.find((e=>e.label===t));n?(m(n.label),g([]),f(n.id)):(f(null),m(t))}}),a.createElement("datalist",{id:`${b}-datalist`},u.map((e=>a.createElement("option",{key:e.id,value:e.label},e.label)))))}}}]);