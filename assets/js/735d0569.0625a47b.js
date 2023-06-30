"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={toc:[{value:"Version 3.4.2",id:"version-342",level:2},{value:"Fixes",id:"fixes",level:3},{value:"Version 3.4.1",id:"version-341",level:2},{value:"Fixes",id:"fixes-1",level:3},{value:"Version 3.4.0",id:"version-340",level:2},{value:"Feature",id:"feature",level:3},{value:"Version 3.3.0",id:"version-330",level:2},{value:"Feature",id:"feature-1",level:3},{value:"Version 3.2.0",id:"version-320",level:2},{value:"Features",id:"features",level:3},{value:"Version 3.1.0",id:"version-310",level:2},{value:"Fixes",id:"fixes-2",level:3},{value:"Features",id:"features-1",level:3},{value:"Version 3.0.3",id:"version-303",level:2},{value:"Fixes",id:"fixes-3",level:3},{value:"Version 3.0.2",id:"version-302",level:2},{value:"Features",id:"features-2",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Fixes",id:"fixes-4",level:3},{value:"Version 3.0.1",id:"version-301",level:2},{value:"Version 3.0.0",id:"version-300",level:2},{value:"Version 2.0.2",id:"version-202",level:2},{value:"Fixes",id:"fixes-5",level:3},{value:"Version 2.0.1",id:"version-201",level:2},{value:"Version 2.0.0",id:"version-200",level:2},{value:"Features",id:"features-3",level:3},{value:"Breaking changes",id:"breaking-changes-1",level:3}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"version-342"},"Version 3.4.2"),(0,a.kt)("h3",{id:"fixes"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/55"},"#55")," Fix the order in export in package.json (default entry should be the last)")),(0,a.kt)("h2",{id:"version-341"},"Version 3.4.1"),(0,a.kt)("h3",{id:"fixes-1"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/54"},"#54")," Compatibility with the TS moduleResolution ",(0,a.kt)("inlineCode",{parentName:"li"},"bundler"))),(0,a.kt)("h2",{id:"version-340"},"Version 3.4.0"),(0,a.kt)("h3",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/48"},"#48")," Camera state is restored when Sigma.js is recreated")),(0,a.kt)("h2",{id:"version-330"},"Version 3.3.0"),(0,a.kt)("h3",{id:"feature-1"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/43"},"#43")," Allow giving a different container for fullscreen control"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/46"},"#46")," Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"resize"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeRender")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"afterRender")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"useRegisterEvents"))),(0,a.kt)("h2",{id:"version-320"},"Version 3.2.0"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/42"},"#42")," Be able to customize labels on controls. Example :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<ZoomControl labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }} />\n')),(0,a.kt)("h2",{id:"version-310"},"Version 3.1.0"),(0,a.kt)("h3",{id:"fixes-2"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/pull/38"},"#38")," Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"mousemovebody")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"useRegisterEvents")," (thanks ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jakobhansen-blai"},"jakobhansen-blai")," !)")),(0,a.kt)("h3",{id:"features-1"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upgrade to ",(0,a.kt)("inlineCode",{parentName:"li"},"sigma@2.4.0")),(0,a.kt)("li",{parentName:"ul"},"Upgrade to ",(0,a.kt)("inlineCode",{parentName:"li"},"graphology-layout-forceatlas2@0.10.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/issues/30"},"#30")," : Forward the sigma ref on the ",(0,a.kt)("inlineCode",{parentName:"li"},"SigmaContainer"))),(0,a.kt)("h2",{id:"version-303"},"Version 3.0.3"),(0,a.kt)("h3",{id:"fixes-3"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix remove listeners on ",(0,a.kt)("inlineCode",{parentName:"li"},"useRegisterEvents")," hook.")),(0,a.kt)("h2",{id:"version-302"},"Version 3.0.2"),(0,a.kt)("h3",{id:"features-2"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding peer dependencies to react, and allow version 17 & 18"),(0,a.kt)("li",{parentName:"ul"},"Upgrade general dependencies included sigma & graphology"),(0,a.kt)("li",{parentName:"ul"},"Set per default the sigma settings ",(0,a.kt)("inlineCode",{parentName:"li"},"allowInvalidContainer")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Better type management for events ( thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jacomyal/sigma.js/issues/1142"},"#1142")," )"),(0,a.kt)("li",{parentName:"ul"},"Website with examples with code & preview"),(0,a.kt)("li",{parentName:"ul"},"Reset SearchControl when user click on the stage")),(0,a.kt)("h3",{id:"breaking-changes"},"Breaking changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Settings of forceAtlas2 has changed in the latest version of graphology"),(0,a.kt)("li",{parentName:"ul"},"Event ",(0,a.kt)("inlineCode",{parentName:"li"},"cameraUpdated")," has been renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"updated")),(0,a.kt)("li",{parentName:"ul"},"Property ",(0,a.kt)("inlineCode",{parentName:"li"},"initialSettings")," on component ",(0,a.kt)("inlineCode",{parentName:"li"},"SigmaContainer")," has been renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"settings"))),(0,a.kt)("h3",{id:"fixes-4"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix touch events - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sim51/react-sigma/pull/28"},"#28")," (thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/grothendeick"},"@grothendeick"),")"),(0,a.kt)("li",{parentName:"ul"},"Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"autoRunFor")," on layout worker when value is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," (ie. no timer)"),(0,a.kt)("li",{parentName:"ul"},"Fix CSS for borders issues")),(0,a.kt)("h2",{id:"version-301"},"Version 3.0.1"),(0,a.kt)("p",null,"Version 3.0.1 has missing files in npm binaries."),(0,a.kt)("h2",{id:"version-300"},"Version 3.0.0"),(0,a.kt)("p",null,"Version 3.0.0 has been partially published due npm OTP issue.\nThat's why the version 3.0.1 has been released."),(0,a.kt)("h2",{id:"version-202"},"Version 2.0.2"),(0,a.kt)("h3",{id:"fixes-5"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix repository link in ",(0,a.kt)("inlineCode",{parentName:"li"},"packages.json"))),(0,a.kt)("h2",{id:"version-201"},"Version 2.0.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding README.md on modules")),(0,a.kt)("h2",{id:"version-200"},"Version 2.0.0"),(0,a.kt)("h3",{id:"features-3"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename of the project to ",(0,a.kt)("inlineCode",{parentName:"li"},"@react-sigma")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project structure :")," mono-repo with multiple projects"),(0,a.kt)("li",{parentName:"ul"},"Possibility to initialize the ",(0,a.kt)("inlineCode",{parentName:"li"},"SigmaContainer")," with a graph"),(0,a.kt)("li",{parentName:"ul"},"Adding all layouts that are available in graphology"),(0,a.kt)("li",{parentName:"ul"},"Adding hooks to manage camera, zoom, fullscreen, context. Standard component are using those hooks, so it's easy to rewrite them (if needed)")),(0,a.kt)("h3",{id:"breaking-changes-1"},"Breaking changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sigma React div class name has changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"react-sigma-v2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"react-sigma")),(0,a.kt)("li",{parentName:"ul"},"Component ",(0,a.kt)("inlineCode",{parentName:"li"},"ForceAtlasControl")," has been rename ",(0,a.kt)("inlineCode",{parentName:"li"},"LayoutForceAtlasControl")),(0,a.kt)("li",{parentName:"ul"},"Components of type control don't take anymore properties to customize the DOM button. We use children instead now. For controls with multiple button, the child order is important.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<FullScreenControl customEnterFullScreen={<BsArrowsFullscreen />} customExitFullScreen={<BsFullscreenExit />} />\n")),(0,a.kt)("p",null,"Becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<FullScreenControl>\n  <>\n    <BsArrowsFullscreen />\n    <BsFullscreenExit />\n  </>\n</FullScreenControl>\n")))}l.isMDXComponent=!0;const o={hide_title:!0},s=void 0,u={unversionedId:"changelog",id:"changelog",title:"changelog",description:"",source:"@site/docs/changelog.mdx",sourceDirName:".",slug:"/changelog",permalink:"/react-sigma/docs/changelog",draft:!1,editUrl:"https://github.com/sim51/react-sigma/tree/main/packages/website/docs/changelog.mdx",tags:[],version:"current",frontMatter:{hide_title:!0}},m={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"Changelog"}))}c.isMDXComponent=!0}}]);