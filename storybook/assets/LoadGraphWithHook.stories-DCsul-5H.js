import{j as o,k as p,_ as i,M as l}from"./react-sigma.min-Bv1msYwt.js";import{r as h}from"./index-Dl6G-zuu.js";const c=()=>{const e=i();return h.useEffect(()=>{const r=new l;r.addNode("A",{x:0,y:0,label:"Node A",size:10}),r.addNode("B",{x:1,y:1,label:"Node B",size:10}),r.addEdgeWithKey("rel1","A","B",{label:"REL_1"}),e(r)},[e]),null},d=({style:e})=>o.jsx(p,{style:e,settings:{allowInvalidContainer:!0},children:o.jsx(c,{})});d.__docgenInfo={description:"",methods:[],displayName:"LoadGraphWithHook",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const m=`import { FC, useEffect, CSSProperties } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

const MyGraph: FC = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    // Create the graph
    const graph = new MultiDirectedGraph();
    graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
    graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
    graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export const LoadGraphWithHook: FC<{ style?: CSSProperties }> = ({ style }) => {
  return (
    <SigmaContainer style={style} settings={{ allowInvalidContainer: true }}>
      <MyGraph />
    </SigmaContainer>
  );
};
`,y={component:d,id:"load-graph-hook",title:"Graph load"},a={name:"Load a graph using the `loadGraph` hook",args:{},parameters:{storySource:{source:m}}};var t,n,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Load a graph using the \`loadGraph\` hook",
  args: {},
  parameters: {
    storySource: {
      source
    }
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,y as default};