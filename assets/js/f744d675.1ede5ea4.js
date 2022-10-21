(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[484],{8158:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,Z:()=>c});var o=n(7294),l=n(814);const a=e=>{let{code:t,title:n,children:a,mode:c="code"}=e;const[s,i]=(0,o.useState)(c);return o.createElement("div",{className:"code-preview"},o.createElement("div",{className:"header"},o.createElement("div",null,n&&o.createElement("h5",null,n)),o.createElement("div",{className:"switch"},o.createElement("button",{className:"button",onClick:()=>i("code"),disabled:"code"===s},"Code"),o.createElement("button",{className:"button",onClick:()=>i("preview"),disabled:"preview"===s},"Preview"))),o.createElement("div",{className:"content"},"preview"===s&&a,"code"===s&&o.createElement(l.Z,{language:"jsx"},t)))},c=a},8370:(e,t,n)=>{"use strict";n.d(t,{a:()=>d});var o=n(7294),l=n(2698),a=n.n(l),c=n(8925),s=n(1154),i=n(5506);const d=e=>{let{order:t,probability:n}=e;const{faker:l,randomColor:d}=(0,i.g)(),r=(0,c.Ys)(),{assign:g}=(0,s.f)(),v=(0,c.$j)(),u=(0,c.sG)(),m=(0,c.eP)(),[h,p]=(0,o.useState)(null);return(0,o.useEffect)((()=>{const e=new(a());for(let n=0;n<t;n++)e.addNode(n,{label:l.name.fullName(),size:l.datatype.number({min:4,max:20,precision:1}),color:d(),x:0,y:0});for(let o=0;o<t;o++)for(let l=o+1;l<t;l++)Math.random()<n&&e.addDirectedEdge(o,l),Math.random()<n&&e.addDirectedEdge(l,o);u(e),g(),v({enterNode:e=>p(e.node),leaveNode:()=>p(null)})}),[g,u,v,l.datatype,l.name,d,t,n]),(0,o.useEffect)((()=>{m({nodeReducer:(e,t)=>{const n=r.getGraph(),o={...t,highlighted:t.highlighted||!1};return h&&(e===h||n.neighbors(h).includes(e)?o.highlighted=!0:(o.color="#E2E2E2",o.highlighted=!1)),o},edgeReducer:(e,t)=>{const n=r.getGraph(),o={...t,hidden:!1};return h&&!n.extremities(e).includes(h)&&(o.hidden=!0),o}})}),[h,m,r]),null}},5506:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});var o=n(7294),l=n(6377),a=n.n(l),c=n(2779);const s=()=>{const e=new URLSearchParams(window.location.search).get("seed");(0,o.useEffect)((()=>{e&&(a()(e,{global:!0}),c.We.seed(Math.random()))}),[e]);const t=(0,o.useMemo)((()=>()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789abcdef".charAt(Math.floor(16*Math.random()));return e}),[]);return{faker:c.We,randomColor:t}}},798:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>p,frontMatter:()=>r,metadata:()=>v,toc:()=>m});var o=n(7462),l=n(7294),a=n(3905),c=n(8158),s=n(8925),i=n(8370);const d=()=>{const e=()=>{const e=(0,s.$j)();return(0,l.useEffect)((()=>{e({clickNode:e=>console.log("clickNode",e.event,e.node,e.preventSigmaDefault),doubleClickNode:e=>console.log("doubleClickNode",e.event,e.node,e.preventSigmaDefault),rightClickNode:e=>console.log("rightClickNode",e.event,e.node,e.preventSigmaDefault),wheelNode:e=>console.log("wheelNode",e.event,e.node,e.preventSigmaDefault),downNode:e=>console.log("downNode",e.event,e.node,e.preventSigmaDefault),enterNode:e=>console.log("enterNode",e.node),leaveNode:e=>console.log("leaveNode",e.node),clickEdge:e=>console.log("clickEdge",e.event,e.edge,e.preventSigmaDefault),doubleClickEdge:e=>console.log("doubleClickEdge",e.event,e.edge,e.preventSigmaDefault),rightClickEdge:e=>console.log("rightClickEdge",e.event,e.edge,e.preventSigmaDefault),wheelEdge:e=>console.log("wheelEdge",e.event,e.edge,e.preventSigmaDefault),downEdge:e=>console.log("downEdge",e.event,e.edge,e.preventSigmaDefault),enterEdge:e=>console.log("enterEdge",e.edge),leaveEdge:e=>console.log("leaveEdge",e.edge),clickStage:e=>console.log("clickStage",e.event,e.preventSigmaDefault),doubleClickStage:e=>console.log("doubleClickStage",e.event,e.preventSigmaDefault),rightClickStage:e=>console.log("rightClickStage",e.event,e.preventSigmaDefault),wheelStage:e=>console.log("wheelStage",e.event,e.preventSigmaDefault),downStage:e=>console.log("downStage",e.event,e.preventSigmaDefault),click:e=>console.log("click",e.x,e.y),doubleClick:e=>console.log("doubleClick",e.x,e.y),wheel:e=>console.log("wheel",e.x,e.y,e.delta),rightClick:e=>console.log("rightClick",e.x,e.y),mouseup:e=>console.log("mouseup",e.x,e.y),mousedown:e=>console.log("mousedown",e.x,e.y),mousemove:e=>console.log("mousemove",e.x,e.y),touchup:e=>console.log("touchup",e.touches),touchdown:e=>console.log("touchdown",e.touches),touchmove:e=>console.log("touchmove",e.touches),kill:()=>console.log("kill"),updated:e=>console.log("updated",e.x,e.y,e.angle,e.ratio)})}),[e]),null};return l.createElement(s.C6,{style:{height:"500px"}},l.createElement(i.a,{order:100,probability:.1}),l.createElement(e,null))},r={},g="Events",v={unversionedId:"example/events",id:"example/events",title:"Events",description:"Sigma dispatch various events that you can listen :",source:"@site/docs/example/02_events.mdx",sourceDirName:"example",slug:"/example/events",permalink:"/react-sigma/docs/example/events",draft:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/example/02_events.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Load a graph",permalink:"/react-sigma/docs/example/load-graph"},next:{title:"Drag'n'Drop",permalink:"/react-sigma/docs/example/drag_n_drop"}},u={},m=[],h={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"Sigma dispatch various events that you can listen :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mouse events"),(0,a.kt)("li",{parentName:"ul"},"touch events"),(0,a.kt)("li",{parentName:"ul"},"camera events"),(0,a.kt)("li",{parentName:"ul"},"graph events"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"react-sigma")," you can listen to all those events with the help of the hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegisterEvents"),"."),(0,a.kt)("p",null,"This hook helps you to register your listeners (and also do the remove for you).\nCheck the code below to see how to do it, and don't forget to open your browser console in preview mode."),(0,a.kt)(c.G,{code:'import React, { FC, useEffect } from "react";\n\nimport "@react-sigma/core/lib/react-sigma.min.css";\nimport { SigmaContainer, useRegisterEvents } from "@react-sigma/core";\n\nimport { GraphDefault } from "../GraphDefault";\n\nconst Events: FC = () => {\n  const GraphEvents: React.FC = () => {\n    const registerEvents = useRegisterEvents();\n\n    useEffect(() => {\n      // Register the events\n      registerEvents({\n        // node events\n        clickNode: (event) => console.log("clickNode", event.event, event.node, event.preventSigmaDefault),\n        doubleClickNode: (event) => console.log("doubleClickNode", event.event, event.node, event.preventSigmaDefault),\n        rightClickNode: (event) => console.log("rightClickNode", event.event, event.node, event.preventSigmaDefault),\n        wheelNode: (event) => console.log("wheelNode", event.event, event.node, event.preventSigmaDefault),\n        downNode: (event) => console.log("downNode", event.event, event.node, event.preventSigmaDefault),\n        enterNode: (event) => console.log("enterNode", event.node),\n        leaveNode: (event) => console.log("leaveNode", event.node),\n        // edge events\n        clickEdge: (event) => console.log("clickEdge", event.event, event.edge, event.preventSigmaDefault),\n        doubleClickEdge: (event) => console.log("doubleClickEdge", event.event, event.edge, event.preventSigmaDefault),\n        rightClickEdge: (event) => console.log("rightClickEdge", event.event, event.edge, event.preventSigmaDefault),\n        wheelEdge: (event) => console.log("wheelEdge", event.event, event.edge, event.preventSigmaDefault),\n        downEdge: (event) => console.log("downEdge", event.event, event.edge, event.preventSigmaDefault),\n        enterEdge: (event) => console.log("enterEdge", event.edge),\n        leaveEdge: (event) => console.log("leaveEdge", event.edge),\n        // stage events\n        clickStage: (event) => console.log("clickStage", event.event, event.preventSigmaDefault),\n        doubleClickStage: (event) => console.log("doubleClickStage", event.event, event.preventSigmaDefault),\n        rightClickStage: (event) => console.log("rightClickStage", event.event, event.preventSigmaDefault),\n        wheelStage: (event) => console.log("wheelStage", event.event, event.preventSigmaDefault),\n        downStage: (event) => console.log("downStage", event.event, event.preventSigmaDefault),\n        // default mouse events\n        click: (event) => console.log("click", event.x, event.y),\n        doubleClick: (event) => console.log("doubleClick", event.x, event.y),\n        wheel: (event) => console.log("wheel", event.x, event.y, event.delta),\n        rightClick: (event) => console.log("rightClick", event.x, event.y),\n        mouseup: (event) => console.log("mouseup", event.x, event.y),\n        mousedown: (event) => console.log("mousedown", event.x, event.y),\n        mousemove: (event) => console.log("mousemove", event.x, event.y),\n        // default touch events\n        touchup: (event) => console.log("touchup", event.touches),\n        touchdown: (event) => console.log("touchdown", event.touches),\n        touchmove: (event) => console.log("touchmove", event.touches),\n        // sigma kill\n        kill: () => console.log("kill"),\n        // sigma camera update\n        updated: (event) => console.log("updated", event.x, event.y, event.angle, event.ratio),\n      });\n    }, [registerEvents]);\n\n    return null;\n  };\n  return (\n    <SigmaContainer style={{ height: "500px" }}>\n      <GraphDefault order={100} probability={0.1} />\n      <GraphEvents />\n    </SigmaContainer>\n  );\n};\n\nexport default Events;\n',title:"Display in the console all sigma events",mdxType:"CodePreview"},(0,a.kt)(d,{mdxType:"Events"})))}p.isMDXComponent=!0},5042:()=>{}}]);