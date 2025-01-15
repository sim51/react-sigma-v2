"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[2907],{2141:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"start-setup","title":"Setup","description":"1. Follow all the steps from the installation page","source":"@site/docs/start-setup.md","sourceDirName":".","slug":"/start-setup","permalink":"/react-sigma/docs/start-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/start-setup.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Installation","permalink":"/react-sigma/docs/start-installation"},"next":{"title":"index","permalink":"/react-sigma/docs/api"}}');var a=r(1085),s=r(1184);const o={},i="Setup",l={},c=[{value:"Graph Constructor",id:"graph-constructor",level:2},{value:"Graph instance",id:"graph-instance",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Follow all the steps from the ",(0,a.jsx)(n.a,{href:"/react-sigma/docs/start-installation",children:"installation page"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Import the React Sigma style file in your application.\nDepending on your React app setup, the way to import a CSS file might differ.\nHere is an example with "create react app" setup : ',(0,a.jsx)(n.code,{children:'import "@react-sigma/core/lib/style.css"'})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create the following components into your app and check it displays correctly:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { useEffect } from "react";\nimport Graph from "graphology";\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/style.css";\n\nconst sigmaStyle = { height: "500px", width: "500px" };\n\n// Component that load the graph\nexport const LoadGraph = () => {\n  const loadGraph = useLoadGraph();\n\n  useEffect(() => {\n    const graph = new Graph();\n    graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });\n    loadGraph(graph);\n  }, [loadGraph]);\n\n  return null;\n};\n\n// Component that display the graph\nexport const DisplayGraph = () => {\n  return (\n    <SigmaContainer style={sigmaStyle}>\n      <LoadGraph />\n    </SigmaContainer>\n  );\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can take a look at this ",(0,a.jsx)(n.a,{href:"https://codesandbox.io/s/react-sigma-example-qlkqg8",children:"code sandbox"})," to see a working example."]}),"\n",(0,a.jsx)(n.p,{children:"If the graph is not displayed properly, it is most likely because you haven't followed all the prerequisites."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Make sure you have imported React Sigma style file"}),"\n",(0,a.jsx)(n.li,{children:"Make sure all dependencies are installed and using supported versions"}),"\n",(0,a.jsx)(n.li,{children:"Make sure your Graph container has a defined height"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you're still having trouble, you can use the ",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/sigma.js",children:"Stack Overflow"}),"."]}),"\n",(0,a.jsxs)(n.h1,{id:"the-graph-property-on-sigmacontainer",children:["The ",(0,a.jsx)(n.code,{children:"graph"})," property on ",(0,a.jsx)(n.code,{children:"SigmaContainer"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SigmaContainer"})," takes an optional property ",(0,a.jsx)(n.code,{children:"graph"}),".\nThis property can be either a ",(0,a.jsx)(n.strong,{children:"graphology instance"}),", or a ",(0,a.jsx)(n.strong,{children:"graph constructor"})]}),"\n",(0,a.jsx)(n.h2,{id:"graph-constructor",children:"Graph Constructor"}),"\n",(0,a.jsx)(n.p,{children:"The library creates for you a default graph instance for graphology.\nPer default on graphology, a graph is :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"mixed"})," (ie undirected & directed)"]}),"\n",(0,a.jsx)(n.li,{children:"with self-loop"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"without"})," multi-edges"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If you need a different graph definition, you have to pass to the ",(0,a.jsx)(n.code,{children:"SigmaContainer"})," component,\nthe good ",(0,a.jsx)(n.a,{href:"https://graphology.github.io/instantiation.html#typed-constructors",children:"graphology constructor"})]}),"\n",(0,a.jsx)(n.p,{children:"Example :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { FC, useEffect } from "react";\nimport { MultiDirectedGraph } from "graphology";\n\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\n\nconst MyGraph: FC = () => {\n  const loadGraph = useLoadGraph();\n\n  useEffect(() => {\n    // Create the graph\n    const graph = new MultiDirectedGraph();\n    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });\n    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });\n    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });\n    graph.addEdgeWithKey("rel2", "A", "B", { label: "REL_2" });\n\n    loadGraph(graph);\n  }, [loadGraph]);\n\n  return null;\n};\n\nexport const MultiDirectedGraphView: FC = () => {\n  return (\n    <SigmaContainer graph={MultiDirectedGraph}>\n      <MyGraph />\n    </SigmaContainer>\n  );\n};\n'})}),"\n",(0,a.jsx)(n.h2,{id:"graph-instance",children:"Graph instance"}),"\n",(0,a.jsxs)(n.p,{children:["You can directly pass a graph instance to the ",(0,a.jsx)(n.code,{children:"SigmaContainer"}),", but in this case at each render of the component, Sigma will be killed, recreated and the graph loaded."]}),"\n",(0,a.jsx)(n.p,{children:"In this scenario you must control the react lifecycle of its parent component, to avoid poor performances, specially with heavy graphs."}),"\n",(0,a.jsx)(n.p,{children:"Examples :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import Graph from "graphology";\nimport { SigmaContainer, useLoadGraph } from "@react-sigma/core";\nimport "@react-sigma/core/lib/style.css";\n\nexport const DisplayGraph = () => {\n  const graph = new Graph();\n  graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });\n  return <SigmaContainer style={{ height: "500px", width: "500px" }} graph={graph}></SigmaContainer>;\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1184:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(4041);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);