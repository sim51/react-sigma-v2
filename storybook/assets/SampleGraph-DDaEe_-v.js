import{v as p,y as m,p as f,C as E}from"./style-CWrtVBmu.js";import{t as G}from"./react-sigma_layout-circular.esm.min-C7ZDmpjv.js";import{r as a}from"./index-nBX9XC1j.js";import{u as N}from"./useRandom-glAHd7HG.js";const w=({disableHoverEffect:n})=>{const{randomGraph:h}=N(),o=p(),c=m(),d=f(),g=E(),{assign:l}=G(),[t,u]=a.useState(null);return a.useEffect(()=>{const r=h();g(r),l(),c({enterNode:s=>u(s.node),leaveNode:()=>u(null)})},[l,g,c,h]),a.useEffect(()=>{d({nodeReducer:(r,s)=>{const i=o.getGraph(),e={...s,highlighted:s.highlighted||!1};return!n&&t&&(r===t||i.neighbors(t).includes(r)?e.highlighted=!0:(e.color="#E2E2E2",e.highlighted=!1)),e},edgeReducer:(r,s)=>{const i=o.getGraph(),e={...s,hidden:!1};return!n&&t&&!i.extremities(r).includes(t)&&(e.hidden=!0),e}})},[t,d,o,n]),null};export{w as S};