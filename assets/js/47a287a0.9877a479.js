"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[601],{876:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2807:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7896),o=t(1461),l=(t(2784),t(876)),i=["components"],a={id:"FullScreenControlProps",title:"Interface: FullScreenControlProps",sidebar_label:"FullScreenControlProps",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"api/core/interfaces/FullScreenControlProps",id:"api/core/interfaces/FullScreenControlProps",title:"Interface: FullScreenControlProps",description:"Properties for FullScreenControl component.",source:"@site/docs/api/core/interfaces/FullScreenControlProps.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/FullScreenControlProps",permalink:"/react-sigma/docs/api/core/interfaces/FullScreenControlProps",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FullScreenControlProps",title:"Interface: FullScreenControlProps",sidebar_label:"FullScreenControlProps",sidebar_position:0,custom_edit_url:null},sidebar:"docs",previous:{title:"EventHandlers",permalink:"/react-sigma/docs/api/core/interfaces/EventHandlers"},next:{title:"MouseEvent",permalink:"/react-sigma/docs/api/core/interfaces/MouseEvent"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"children",id:"children",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"className",id:"classname",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"style",id:"style",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Properties for ",(0,l.kt)("inlineCode",{parentName:"p"},"FullScreenControl")," component."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"children"),": ","[",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),"]"),(0,l.kt)("p",null,'It\'s possible to customize the button, by passing to JSX Element.\nFirst one is for the "enter fullscreen", and the second to "exit fullscreen".\nExample :'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<FullScreenControl>\n  <>\n    <BiFullscreen />\n    <BiExitFullscreen />\n  </>\n</FullScreenControl>\n")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sim51/react-sigma/blob/45755e9/packages/core/src/components/controls/FullScreenControl.tsx#L39"},"components/controls/FullScreenControl.tsx:39")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"classname"},"className"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"className"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"HTML class"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sim51/react-sigma/blob/45755e9/packages/core/src/components/controls/FullScreenControl.tsx#L19"},"components/controls/FullScreenControl.tsx:19")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"HTML id"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sim51/react-sigma/blob/45755e9/packages/core/src/components/controls/FullScreenControl.tsx#L14"},"components/controls/FullScreenControl.tsx:14")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"style"},"style"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"style"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"CSSProperties")),(0,l.kt)("p",null,"HTML CSS style"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sim51/react-sigma/blob/45755e9/packages/core/src/components/controls/FullScreenControl.tsx#L24"},"components/controls/FullScreenControl.tsx:24")))}m.isMDXComponent=!0}}]);