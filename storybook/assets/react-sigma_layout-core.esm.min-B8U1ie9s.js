import{v as h,j as _}from"./style-CWrtVBmu.js";import{r as s,R as g}from"./index-nBX9XC1j.js";function x(e,a){const r=h(),t=s.useRef(a);return _(t.current,a)||(t.current=a),{positions:s.useCallback(()=>t.current?e(r.getGraph(),t.current):{},[r,t,e]),assign:s.useCallback(()=>{t.current&&e.assign(r.getGraph(),t.current)},[r,t,e])}}function O(e,a){const r=h(),[t,l]=s.useState(!1),[n,o]=s.useState(null),u=s.useRef(a);return _(u.current,a)||(u.current=a),s.useEffect(()=>{l(!1);let i=null;return u.current&&(i=new e(r.getGraph(),u.current)),o(i),()=>{i!==null&&i.kill()}},[r,u,o,l,e]),{stop:s.useCallback(()=>{n&&(n.stop(),l(!1))},[n,l]),start:s.useCallback(()=>{n&&(n.start(),l(!0))},[n,l]),kill:s.useCallback(()=>{n&&n.kill(),l(!1)},[n,l]),isRunning:t}}var v;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},m.apply(null,arguments)}var w,b=function(e){return s.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14","data-icon":"play","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),v||(v=s.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"})))};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(null,arguments)}var E=function(e){return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14","data-icon":"stop","data-prefix":"fas",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),w||(w=s.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"})))};function R({id:e,className:a,style:r,layout:t,autoRunFor:l,children:n,labels:o={}}){const u=h(),{stop:i,start:f,isRunning:c}=t,y={className:`react-sigma-control ${a||""}`,id:e,style:r};return s.useEffect(()=>{if(!u)return;let p=null;return l!==void 0&&l>-1&&u.getGraph().order>0&&(f(),p=l>0?window.setTimeout(()=>{i()},l):null),()=>{p&&clearTimeout(p)}},[l,f,i,u]),g.createElement("div",Object.assign({},y),g.createElement("button",{onClick:()=>c?i():f(),title:c?o.stop||"Stop the layout animation":o.start||"Start the layout animation"},n&&!c&&n[0],n&&c&&n[1],!n&&!c&&g.createElement(b,{style:{width:"1em"}}),!n&&c&&g.createElement(E,{style:{width:"1em"}})))}export{O as c,R as h,x as o};