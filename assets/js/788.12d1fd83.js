(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[788],{6610:(t,e,r)=>{"use strict";r.d(e,{VL:()=>u,wm:()=>s,zO:()=>f});var o,n=r(6486),a=r(7294),i=r(8925);function s(t,e){return(r=e)=>{const o=(0,i.Ys)(),s=(0,a.useRef)(e);return(0,n.isEqual)(s.current,r)||(s.current=r),{positions:(0,a.useCallback)((()=>s.current?t(o.getGraph(),s.current):{}),[o,s]),assign:(0,a.useCallback)((()=>{s.current&&t.assign(o.getGraph(),s.current)}),[o,s])}}}function u(t){return e=>{const r=(0,i.Ys)(),[o,s]=(0,a.useState)(!1),[u,l]=(0,a.useState)(null),h=(0,a.useRef)();return(0,n.isEqual)(h.current,e)||(h.current=e),(0,a.useEffect)((()=>{s(!1);let e=null;return h.current&&(e=new t(r.getGraph(),h.current)),l(e),()=>{null!==e&&e.kill()}}),[r,h,l,s]),{stop:(0,a.useCallback)((()=>{u&&(u.stop(),s(!1))}),[u,s]),start:(0,a.useCallback)((()=>{u&&(u.start(),s(!0))}),[u,s]),kill:(0,a.useCallback)((()=>{u&&u.kill(),s(!1)}),[u,s]),isRunning:o}}}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)}var h,c=function(t){return a.createElement("svg",l({"aria-hidden":"true","data-prefix":"fas","data-icon":"play",className:"play-solid_svg__svg-inline--fa play-solid_svg__fa-play play-solid_svg__fa-w-14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},t),o||(o=a.createElement("path",{fill:"currentColor",d:"M424.4 214.7 72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"})))};function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},d.apply(this,arguments)}var g=function(t){return a.createElement("svg",d({"aria-hidden":"true","data-prefix":"fas","data-icon":"stop",className:"stop-solid_svg__svg-inline--fa stop-solid_svg__fa-stop stop-solid_svg__fa-w-14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},t),h||(h=a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})))};function f({id:t,className:e,style:r,layout:o,settings:n,autoRunFor:s,children:u}){const l=(0,i.Ys)(),{stop:h,start:d,isRunning:f}=o(n),p={className:`react-sigma-control ${e||""}`,id:t,style:r};return(0,a.useEffect)((()=>{if(!l)return;let t=null;return s&&s>-1&&l.getGraph().order>0&&(d(),t=s>0?window.setTimeout((()=>{h()}),s):null),()=>{t&&clearTimeout(t)}}),[s,d,h,l]),a.createElement("div",Object.assign({},p),a.createElement("button",{onClick:()=>f?h():d(),title:f?"Stop the layout animation":"Start the layout animation"},u&&!f&&u[0],u&&f&&u[1],!u&&!f&&a.createElement(c,{style:{width:"1em"}}),!u&&f&&a.createElement(g,{style:{width:"1em"}})))}},8289:(t,e,r)=>{"use strict";r.d(e,{UZ:()=>h});var o=r(9404),n=r.n(o),a=r(6610),i=r(5812),s=r.n(i),u=r(7294);(0,a.wm)(n(),{iterations:100});const l=(0,a.VL)(s()),h=({id:t,className:e,style:r,settings:o={},autoRunFor:n,children:i})=>{const s={id:t,className:e,style:r,settings:o,autoRunFor:n,layout:l};return u.createElement(a.zO,Object.assign({},s),i)}},1847:t=>{t.exports={linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:1,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5}},1739:(t,e)=>{e.assign=function(t){t=t||{};var e,r,o,n=Array.prototype.slice.call(arguments).slice(1);for(e=0,o=n.length;e<o;e++)if(n[e])for(r in n[e])t[r]=n[e][r];return t},e.validateSettings=function(t){return"linLogMode"in t&&"boolean"!=typeof t.linLogMode?{message:"the `linLogMode` setting should be a boolean."}:"outboundAttractionDistribution"in t&&"boolean"!=typeof t.outboundAttractionDistribution?{message:"the `outboundAttractionDistribution` setting should be a boolean."}:"adjustSizes"in t&&"boolean"!=typeof t.adjustSizes?{message:"the `adjustSizes` setting should be a boolean."}:"edgeWeightInfluence"in t&&"number"!=typeof t.edgeWeightInfluence?{message:"the `edgeWeightInfluence` setting should be a number."}:!("scalingRatio"in t)||"number"==typeof t.scalingRatio&&t.scalingRatio>=0?"strongGravityMode"in t&&"boolean"!=typeof t.strongGravityMode?{message:"the `strongGravityMode` setting should be a boolean."}:!("gravity"in t)||"number"==typeof t.gravity&&t.gravity>=0?"slowDown"in t&&!("number"==typeof t.slowDown||t.slowDown>=0)?{message:"the `slowDown` setting should be a number >= 0."}:"barnesHutOptimize"in t&&"boolean"!=typeof t.barnesHutOptimize?{message:"the `barnesHutOptimize` setting should be a boolean."}:!("barnesHutTheta"in t)||"number"==typeof t.barnesHutTheta&&t.barnesHutTheta>=0?null:{message:"the `barnesHutTheta` setting should be a number >= 0."}:{message:"the `gravity` setting should be a number >= 0."}:{message:"the `scalingRatio` setting should be a number >= 0."}},e.graphToByteArrays=function(t,e){var r,o=t.order,n=t.size,a={},i=new Float32Array(10*o),s=new Float32Array(3*n);r=0,t.forEachNode((function(e,o){a[e]=r,i[r]=o.x,i[r+1]=o.y,i[r+2]=0,i[r+3]=0,i[r+4]=0,i[r+5]=0,i[r+6]=1+t.degree(e),i[r+7]=1,i[r+8]=o.size||1,i[r+9]=o.fixed?1:0,r+=10}));return r=0,t.forEachEdge((function(t,o,n,i){s[r]=a[n],s[r+1]=a[i],s[r+2]=function(t){if(!e)return 1;var r=t[e];return("number"!=typeof r||isNaN(r))&&(r=1),r}(o),r+=3})),{nodes:i,edges:s}},e.assignLayoutChanges=function(t,e,r){var o=0;t.updateEachNodeAttributes((function(t,n){return n.x=e[o],n.y=e[o+1],o+=10,r?r(t,n):n}))},e.readGraphPositions=function(t,e){var r=0;t.forEachNode((function(t,o){e[r]=o.x,e[r+1]=o.y,r+=10}))},e.collectLayoutChanges=function(t,e,r){for(var o=t.nodes(),n={},a=0,i=0,s=e.length;a<s;a+=10){if(r){var u=Object.assign({},t.getNodeAttributes(o[i]));u.x=e[a],u.y=e[a+1],u=r(o[i],u),n[o[i]]={x:u.x,y:u.y}}else n[o[i]]={x:e[a],y:e[a+1]};i++}return n},e.createWorker=function(t){var e=window.URL||window.webkitURL,r=t.toString(),o=e.createObjectURL(new Blob(["("+r+").call(this);"],{type:"text/javascript"})),n=new Worker(o);return e.revokeObjectURL(o),n}},9404:(t,e,r)=>{var o=r(6186),n=r(7810),a=r(1739),i=r(1847);function s(t,e,r){if(!o(e))throw new Error("graphology-layout-forceatlas2: the given graph is not a valid graphology instance.");"number"==typeof r&&(r={iterations:r});var s=r.iterations;if("number"!=typeof s)throw new Error("graphology-layout-forceatlas2: invalid number of iterations.");if(s<=0)throw new Error("graphology-layout-forceatlas2: you should provide a positive number of iterations.");var u=r.attributes||{},l=r.weighted?u.weight||"weight":null,h="function"==typeof r.outputReducer?r.outputReducer:null,c=a.assign({},i,r.settings),d=a.validateSettings(c);if(d)throw new Error("graphology-layout-forceatlas2: "+d.message);var g,f=a.graphToByteArrays(e,l);for(g=0;g<s;g++)n(c,f.nodes,f.edges);if(!t)return a.collectLayoutChanges(e,f.nodes);a.assignLayoutChanges(e,f.nodes,h)}var u=s.bind(null,!1);u.assign=s.bind(null,!0),u.inferSettings=function(t){var e="number"==typeof t?t:t.order;return{barnesHutOptimize:e>2e3,strongGravityMode:!0,gravity:.05,scalingRatio:10,slowDown:1+Math.log(e)}},t.exports=u},7810:t=>{var e=10;t.exports=function(t,r,o){var n,a,i,s,u,l,h,c,d,g,f,p,b,v,y,m,w,M,_,x,A,E,k,D=r.length,R=o.length,T=t.adjustSizes,O=t.barnesHutTheta*t.barnesHutTheta,L=[];for(i=0;i<D;i+=e)r[i+4]=r[i+2],r[i+5]=r[i+3],r[i+2]=0,r[i+3]=0;if(t.outboundAttractionDistribution){for(f=0,i=0;i<D;i+=e)f+=r[i+6];f/=D/e}if(t.barnesHutOptimize){var q,S,z,P=1/0,G=-1/0,j=1/0,C=-1/0;for(i=0;i<D;i+=e)P=Math.min(P,r[i+0]),G=Math.max(G,r[i+0]),j=Math.min(j,r[i+1]),C=Math.max(C,r[i+1]);var N=G-P,U=C-j;for(N>U?C=(j-=(N-U)/2)+N:G=(P-=(U-N)/2)+U,L[0]=-1,L[1]=(P+G)/2,L[2]=(j+C)/2,L[3]=Math.max(G-P,C-j),L[4]=-1,L[5]=-1,L[6]=0,L[7]=0,L[8]=0,n=1,i=0;i<D;i+=e)for(a=0,z=3;;){if(!(L[a+5]>=0)){if(L[a+0]<0){L[a+0]=i;break}if(L[a+5]=9*n,c=L[a+3]/2,L[(d=L[a+5])+0]=-1,L[d+1]=L[a+1]-c,L[d+2]=L[a+2]-c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]-c,L[d+2]=L[a+2]+c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]+c,L[d+2]=L[a+2]-c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]+c,L[d+2]=L[a+2]+c,L[d+3]=c,L[d+4]=L[a+4],L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,n+=4,q=r[L[a+0]+0]<L[a+1]?r[L[a+0]+1]<L[a+2]?L[a+5]:L[a+5]+9:r[L[a+0]+1]<L[a+2]?L[a+5]+18:L[a+5]+27,L[a+6]=r[L[a+0]+6],L[a+7]=r[L[a+0]+0],L[a+8]=r[L[a+0]+1],L[q+0]=L[a+0],L[a+0]=-1,q===(S=r[i+0]<L[a+1]?r[i+1]<L[a+2]?L[a+5]:L[a+5]+9:r[i+1]<L[a+2]?L[a+5]+18:L[a+5]+27)){if(z--){a=q;continue}z=3;break}L[S+0]=i;break}q=r[i+0]<L[a+1]?r[i+1]<L[a+2]?L[a+5]:L[a+5]+9:r[i+1]<L[a+2]?L[a+5]+18:L[a+5]+27,L[a+7]=(L[a+7]*L[a+6]+r[i+0]*r[i+6])/(L[a+6]+r[i+6]),L[a+8]=(L[a+8]*L[a+6]+r[i+1]*r[i+6])/(L[a+6]+r[i+6]),L[a+6]+=r[i+6],a=q}}if(t.barnesHutOptimize){for(p=t.scalingRatio,i=0;i<D;i+=e)for(a=0;;)if(L[a+5]>=0){if(m=Math.pow(r[i+0]-L[a+7],2)+Math.pow(r[i+1]-L[a+8],2),4*(g=L[a+3])*g/m<O){if(b=r[i+0]-L[a+7],v=r[i+1]-L[a+8],!0===T?m>0?(w=p*r[i+6]*L[a+6]/m,r[i+2]+=b*w,r[i+3]+=v*w):m<0&&(w=-p*r[i+6]*L[a+6]/Math.sqrt(m),r[i+2]+=b*w,r[i+3]+=v*w):m>0&&(w=p*r[i+6]*L[a+6]/m,r[i+2]+=b*w,r[i+3]+=v*w),(a=L[a+4])<0)break;continue}a=L[a+5]}else if((l=L[a+0])>=0&&l!==i&&(m=(b=r[i+0]-r[l+0])*b+(v=r[i+1]-r[l+1])*v,!0===T?m>0?(w=p*r[i+6]*r[l+6]/m,r[i+2]+=b*w,r[i+3]+=v*w):m<0&&(w=-p*r[i+6]*r[l+6]/Math.sqrt(m),r[i+2]+=b*w,r[i+3]+=v*w):m>0&&(w=p*r[i+6]*r[l+6]/m,r[i+2]+=b*w,r[i+3]+=v*w)),(a=L[a+4])<0)break}else for(p=t.scalingRatio,s=0;s<D;s+=e)for(u=0;u<s;u+=e)b=r[s+0]-r[u+0],v=r[s+1]-r[u+1],!0===T?(m=Math.sqrt(b*b+v*v)-r[s+8]-r[u+8])>0?(w=p*r[s+6]*r[u+6]/m/m,r[s+2]+=b*w,r[s+3]+=v*w,r[u+2]+=b*w,r[u+3]+=v*w):m<0&&(w=100*p*r[s+6]*r[u+6],r[s+2]+=b*w,r[s+3]+=v*w,r[u+2]-=b*w,r[u+3]-=v*w):(m=Math.sqrt(b*b+v*v))>0&&(w=p*r[s+6]*r[u+6]/m/m,r[s+2]+=b*w,r[s+3]+=v*w,r[u+2]-=b*w,r[u+3]-=v*w);for(d=t.gravity/t.scalingRatio,p=t.scalingRatio,i=0;i<D;i+=e)w=0,b=r[i+0],v=r[i+1],m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)),t.strongGravityMode?m>0&&(w=p*r[i+6]*d):m>0&&(w=p*r[i+6]*d/m),r[i+2]-=b*w,r[i+3]-=v*w;for(p=1*(t.outboundAttractionDistribution?f:1),h=0;h<R;h+=3)s=o[h+0],u=o[h+1],c=o[h+2],y=Math.pow(c,t.edgeWeightInfluence),b=r[s+0]-r[u+0],v=r[s+1]-r[u+1],!0===T?(m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)-r[s+8]-r[u+8]),t.linLogMode?t.outboundAttractionDistribution?m>0&&(w=-p*y*Math.log(1+m)/m/r[s+6]):m>0&&(w=-p*y*Math.log(1+m)/m):t.outboundAttractionDistribution?m>0&&(w=-p*y/r[s+6]):m>0&&(w=-p*y)):(m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)),t.linLogMode?t.outboundAttractionDistribution?m>0&&(w=-p*y*Math.log(1+m)/m/r[s+6]):m>0&&(w=-p*y*Math.log(1+m)/m):t.outboundAttractionDistribution?(m=1,w=-p*y/r[s+6]):(m=1,w=-p*y)),m>0&&(r[s+2]+=b*w,r[s+3]+=v*w,r[u+2]-=b*w,r[u+3]-=v*w);if(!0===T)for(i=0;i<D;i+=e)1!==r[i+9]&&((M=Math.sqrt(Math.pow(r[i+2],2)+Math.pow(r[i+3],2)))>10&&(r[i+2]=10*r[i+2]/M,r[i+3]=10*r[i+3]/M),_=r[i+6]*Math.sqrt((r[i+4]-r[i+2])*(r[i+4]-r[i+2])+(r[i+5]-r[i+3])*(r[i+5]-r[i+3])),x=Math.sqrt((r[i+4]+r[i+2])*(r[i+4]+r[i+2])+(r[i+5]+r[i+3])*(r[i+5]+r[i+3]))/2,A=.1*Math.log(1+x)/(1+Math.sqrt(_)),E=r[i+0]+r[i+2]*(A/t.slowDown),r[i+0]=E,k=r[i+1]+r[i+3]*(A/t.slowDown),r[i+1]=k);else for(i=0;i<D;i+=e)1!==r[i+9]&&(_=r[i+6]*Math.sqrt((r[i+4]-r[i+2])*(r[i+4]-r[i+2])+(r[i+5]-r[i+3])*(r[i+5]-r[i+3])),x=Math.sqrt((r[i+4]+r[i+2])*(r[i+4]+r[i+2])+(r[i+5]+r[i+3])*(r[i+5]+r[i+3]))/2,A=r[i+7]*Math.log(1+x)/(1+Math.sqrt(_)),r[i+7]=Math.min(1,Math.sqrt(A*(Math.pow(r[i+2],2)+Math.pow(r[i+3],2))/(1+Math.sqrt(_)))),E=r[i+0]+r[i+2]*(A/t.slowDown),r[i+0]=E,k=r[i+1]+r[i+3]*(A/t.slowDown),r[i+1]=k);return{}}},1928:t=>{t.exports=function(){var t,e,r,o={};r=10,o.exports=function(t,e,o){var n,a,i,s,u,l,h,c,d,g,f,p,b,v,y,m,w,M,_,x,A,E,k,D=e.length,R=o.length,T=t.adjustSizes,O=t.barnesHutTheta*t.barnesHutTheta,L=[];for(i=0;i<D;i+=r)e[i+4]=e[i+2],e[i+5]=e[i+3],e[i+2]=0,e[i+3]=0;if(t.outboundAttractionDistribution){for(f=0,i=0;i<D;i+=r)f+=e[i+6];f/=D/r}if(t.barnesHutOptimize){var q,S,z,P=1/0,G=-1/0,j=1/0,C=-1/0;for(i=0;i<D;i+=r)P=Math.min(P,e[i+0]),G=Math.max(G,e[i+0]),j=Math.min(j,e[i+1]),C=Math.max(C,e[i+1]);var N=G-P,U=C-j;for(N>U?C=(j-=(N-U)/2)+N:G=(P-=(U-N)/2)+U,L[0]=-1,L[1]=(P+G)/2,L[2]=(j+C)/2,L[3]=Math.max(G-P,C-j),L[4]=-1,L[5]=-1,L[6]=0,L[7]=0,L[8]=0,n=1,i=0;i<D;i+=r)for(a=0,z=3;;){if(!(L[a+5]>=0)){if(L[a+0]<0){L[a+0]=i;break}if(L[a+5]=9*n,c=L[a+3]/2,L[(d=L[a+5])+0]=-1,L[d+1]=L[a+1]-c,L[d+2]=L[a+2]-c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]-c,L[d+2]=L[a+2]+c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]+c,L[d+2]=L[a+2]-c,L[d+3]=c,L[d+4]=d+9,L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,L[(d+=9)+0]=-1,L[d+1]=L[a+1]+c,L[d+2]=L[a+2]+c,L[d+3]=c,L[d+4]=L[a+4],L[d+5]=-1,L[d+6]=0,L[d+7]=0,L[d+8]=0,n+=4,q=e[L[a+0]+0]<L[a+1]?e[L[a+0]+1]<L[a+2]?L[a+5]:L[a+5]+9:e[L[a+0]+1]<L[a+2]?L[a+5]+18:L[a+5]+27,L[a+6]=e[L[a+0]+6],L[a+7]=e[L[a+0]+0],L[a+8]=e[L[a+0]+1],L[q+0]=L[a+0],L[a+0]=-1,q===(S=e[i+0]<L[a+1]?e[i+1]<L[a+2]?L[a+5]:L[a+5]+9:e[i+1]<L[a+2]?L[a+5]+18:L[a+5]+27)){if(z--){a=q;continue}z=3;break}L[S+0]=i;break}q=e[i+0]<L[a+1]?e[i+1]<L[a+2]?L[a+5]:L[a+5]+9:e[i+1]<L[a+2]?L[a+5]+18:L[a+5]+27,L[a+7]=(L[a+7]*L[a+6]+e[i+0]*e[i+6])/(L[a+6]+e[i+6]),L[a+8]=(L[a+8]*L[a+6]+e[i+1]*e[i+6])/(L[a+6]+e[i+6]),L[a+6]+=e[i+6],a=q}}if(t.barnesHutOptimize){for(p=t.scalingRatio,i=0;i<D;i+=r)for(a=0;;)if(L[a+5]>=0){if(m=Math.pow(e[i+0]-L[a+7],2)+Math.pow(e[i+1]-L[a+8],2),4*(g=L[a+3])*g/m<O){if(b=e[i+0]-L[a+7],v=e[i+1]-L[a+8],!0===T?m>0?(w=p*e[i+6]*L[a+6]/m,e[i+2]+=b*w,e[i+3]+=v*w):m<0&&(w=-p*e[i+6]*L[a+6]/Math.sqrt(m),e[i+2]+=b*w,e[i+3]+=v*w):m>0&&(w=p*e[i+6]*L[a+6]/m,e[i+2]+=b*w,e[i+3]+=v*w),(a=L[a+4])<0)break;continue}a=L[a+5]}else if((l=L[a+0])>=0&&l!==i&&(m=(b=e[i+0]-e[l+0])*b+(v=e[i+1]-e[l+1])*v,!0===T?m>0?(w=p*e[i+6]*e[l+6]/m,e[i+2]+=b*w,e[i+3]+=v*w):m<0&&(w=-p*e[i+6]*e[l+6]/Math.sqrt(m),e[i+2]+=b*w,e[i+3]+=v*w):m>0&&(w=p*e[i+6]*e[l+6]/m,e[i+2]+=b*w,e[i+3]+=v*w)),(a=L[a+4])<0)break}else for(p=t.scalingRatio,s=0;s<D;s+=r)for(u=0;u<s;u+=r)b=e[s+0]-e[u+0],v=e[s+1]-e[u+1],!0===T?(m=Math.sqrt(b*b+v*v)-e[s+8]-e[u+8])>0?(w=p*e[s+6]*e[u+6]/m/m,e[s+2]+=b*w,e[s+3]+=v*w,e[u+2]+=b*w,e[u+3]+=v*w):m<0&&(w=100*p*e[s+6]*e[u+6],e[s+2]+=b*w,e[s+3]+=v*w,e[u+2]-=b*w,e[u+3]-=v*w):(m=Math.sqrt(b*b+v*v))>0&&(w=p*e[s+6]*e[u+6]/m/m,e[s+2]+=b*w,e[s+3]+=v*w,e[u+2]-=b*w,e[u+3]-=v*w);for(d=t.gravity/t.scalingRatio,p=t.scalingRatio,i=0;i<D;i+=r)w=0,b=e[i+0],v=e[i+1],m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)),t.strongGravityMode?m>0&&(w=p*e[i+6]*d):m>0&&(w=p*e[i+6]*d/m),e[i+2]-=b*w,e[i+3]-=v*w;for(p=1*(t.outboundAttractionDistribution?f:1),h=0;h<R;h+=3)s=o[h+0],u=o[h+1],c=o[h+2],y=Math.pow(c,t.edgeWeightInfluence),b=e[s+0]-e[u+0],v=e[s+1]-e[u+1],!0===T?(m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)-e[s+8]-e[u+8]),t.linLogMode?t.outboundAttractionDistribution?m>0&&(w=-p*y*Math.log(1+m)/m/e[s+6]):m>0&&(w=-p*y*Math.log(1+m)/m):t.outboundAttractionDistribution?m>0&&(w=-p*y/e[s+6]):m>0&&(w=-p*y)):(m=Math.sqrt(Math.pow(b,2)+Math.pow(v,2)),t.linLogMode?t.outboundAttractionDistribution?m>0&&(w=-p*y*Math.log(1+m)/m/e[s+6]):m>0&&(w=-p*y*Math.log(1+m)/m):t.outboundAttractionDistribution?(m=1,w=-p*y/e[s+6]):(m=1,w=-p*y)),m>0&&(e[s+2]+=b*w,e[s+3]+=v*w,e[u+2]-=b*w,e[u+3]-=v*w);if(!0===T)for(i=0;i<D;i+=r)1!==e[i+9]&&((M=Math.sqrt(Math.pow(e[i+2],2)+Math.pow(e[i+3],2)))>10&&(e[i+2]=10*e[i+2]/M,e[i+3]=10*e[i+3]/M),_=e[i+6]*Math.sqrt((e[i+4]-e[i+2])*(e[i+4]-e[i+2])+(e[i+5]-e[i+3])*(e[i+5]-e[i+3])),x=Math.sqrt((e[i+4]+e[i+2])*(e[i+4]+e[i+2])+(e[i+5]+e[i+3])*(e[i+5]+e[i+3]))/2,A=.1*Math.log(1+x)/(1+Math.sqrt(_)),E=e[i+0]+e[i+2]*(A/t.slowDown),e[i+0]=E,k=e[i+1]+e[i+3]*(A/t.slowDown),e[i+1]=k);else for(i=0;i<D;i+=r)1!==e[i+9]&&(_=e[i+6]*Math.sqrt((e[i+4]-e[i+2])*(e[i+4]-e[i+2])+(e[i+5]-e[i+3])*(e[i+5]-e[i+3])),x=Math.sqrt((e[i+4]+e[i+2])*(e[i+4]+e[i+2])+(e[i+5]+e[i+3])*(e[i+5]+e[i+3]))/2,A=e[i+7]*Math.log(1+x)/(1+Math.sqrt(_)),e[i+7]=Math.min(1,Math.sqrt(A*(Math.pow(e[i+2],2)+Math.pow(e[i+3],2))/(1+Math.sqrt(_)))),E=e[i+0]+e[i+2]*(A/t.slowDown),e[i+0]=E,k=e[i+1]+e[i+3]*(A/t.slowDown),e[i+1]=k);return{}};var n=o.exports;self.addEventListener("message",(function(r){var o=r.data;t=new Float32Array(o.nodes),o.edges&&(e=new Float32Array(o.edges)),n(o.settings,t,e),self.postMessage({nodes:t.buffer},[t.buffer])}))}},5812:(t,e,r)=>{var o=r(1928),n=r(6186),a=r(1739),i=r(1847);function s(t,e){if(e=e||{},!n(t))throw new Error("graphology-layout-forceatlas2/worker: the given graph is not a valid graphology instance.");var r=e.attributes||{},o=e.weighted?r.weight||"weight":null,s=a.assign({},i,e.settings),u=a.validateSettings(s);if(u)throw new Error("graphology-layout-forceatlas2/worker: "+u.message);this.worker=null,this.graph=t,this.settings=s,this.weightAttribute=o,this.matrices=null,this.running=!1,this.killed=!1,this.outputReducer="function"==typeof e.outputReducer?e.outputReducer:null,this.handleMessage=this.handleMessage.bind(this);var l=void 0,h=this;this.handleGraphUpdate=function(){h.worker&&h.worker.terminate(),l&&clearTimeout(l),l=setTimeout((function(){l=void 0,h.spawnWorker()}),0)},t.on("nodeAdded",this.handleGraphUpdate),t.on("edgeAdded",this.handleGraphUpdate),t.on("nodeDropped",this.handleGraphUpdate),t.on("edgeDropped",this.handleGraphUpdate),this.spawnWorker()}s.prototype.isRunning=function(){return this.running},s.prototype.spawnWorker=function(){this.worker&&this.worker.terminate(),this.worker=a.createWorker(o),this.worker.addEventListener("message",this.handleMessage),this.running&&(this.running=!1,this.start())},s.prototype.handleMessage=function(t){if(this.running){var e=new Float32Array(t.data.nodes);a.assignLayoutChanges(this.graph,e,this.outputReducer),this.outputReducer&&a.readGraphPositions(this.graph,e),this.matrices.nodes=e,this.askForIterations()}},s.prototype.askForIterations=function(t){var e=this.matrices,r={settings:this.settings,nodes:e.nodes.buffer},o=[e.nodes.buffer];return t&&(r.edges=e.edges.buffer,o.push(e.edges.buffer)),this.worker.postMessage(r,o),this},s.prototype.start=function(){if(this.killed)throw new Error("graphology-layout-forceatlas2/worker.start: layout was killed.");return this.running||(this.matrices=a.graphToByteArrays(this.graph,this.weightAttribute),this.running=!0,this.askForIterations(!0)),this},s.prototype.stop=function(){return this.running=!1,this},s.prototype.kill=function(){if(this.killed)return this;this.running=!1,this.killed=!0,this.matrices=null,this.worker.terminate(),this.graph.removeListener("nodeAdded",this.handleGraphUpdate),this.graph.removeListener("edgeAdded",this.handleGraphUpdate),this.graph.removeListener("nodeDropped",this.handleGraphUpdate),this.graph.removeListener("edgeDropped",this.handleGraphUpdate)},t.exports=s},212:function(t,e,r){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,n,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(s){n={error:s}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},i=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,n=0,a=e.length;n<a;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(4524),l=s(r(7822)),h=s(r(1397)),c=r(3533);!function(t){function e(e,r){return t.call(this,e,l.default,h.default,1,8)||this}n(e,t),e.prototype.bind=function(){},e.prototype.process=function(t,e,r){},e.prototype.render=function(t){},e.prototype.rebindTexture=function(){}}(c.AbstractNodeProgram);e.default=function(){var t,e=[],r={},o=!1,s=void 0;function d(n){if(!r[n]){var u=new Image;u.addEventListener("load",(function(){r[n]={status:"pending",image:u},"number"!=typeof s&&(s=requestAnimationFrame((function(){return function(){s=void 0;var n=[];for(var u in r){var l=r[u];"pending"===l.status&&n.push({id:u,image:l.image,size:Math.min(l.image.width,l.image.height)||1})}var h=document.createElement("canvas"),c=h.getContext("2d");h.width=n.reduce((function(t,e){return t+e.size}),o?t.width:0),h.height=Math.max.apply(Math,i([o?t.height:0],a(n.map((function(t){return t.size}))),!1));var d=0;o&&(c.putImageData(t,0,0),d=t.width);n.forEach((function(t){var e=t.id,o=t.image,n=t.size,a=Math.min(100,n),i=0,s=0;(o.width||0)>(o.height||0)?i=(o.width-o.height)/2:s=(o.height-o.width)/2,c.drawImage(o,i,s,n,n,d,0,a,a),r[e]={status:"ready",x:d,y:0,width:a,height:a},d+=a})),t=c.getImageData(0,0,h.width,h.height),o=!0,e.forEach((function(t){return t()}))}()})))})),u.addEventListener("error",(function(){r[n]={status:"error"}})),r[n]={status:"loading"},u.setAttribute("crossOrigin",""),u.src=n}}return function(o){function a(r,n){var a=o.call(this,r,l.default,h.default,1,8)||this;e.push((function(){a&&a.rebindTexture&&a.rebindTexture(),n&&n.refresh&&n.refresh()})),t=new ImageData(1,1),a.textureLocation=r.getAttribLocation(a.program,"a_texture");var i=r.getUniformLocation(a.program,"u_atlas");if(null===i)throw new Error("NodeProgramImage: error while getting atlasLocation");return a.atlasLocation=i,a.texture=r.createTexture(),r.bindTexture(r.TEXTURE_2D,a.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),a.bind(),a}return n(a,o),a.prototype.bind=function(){o.prototype.bind.call(this);var t=this.gl;t.enableVertexAttribArray(this.textureLocation),t.vertexAttribPointer(this.textureLocation,4,t.FLOAT,!1,this.attributes*Float32Array.BYTES_PER_ELEMENT,16)},a.prototype.process=function(e,o,n){var a=this.array,i=1*n*8,s=e.image,l=s&&r[s];if("string"!=typeof s||l||d(s),o)return a[i++]=0,a[i++]=0,a[i++]=0,a[i++]=0,a[i++]=0,a[i++]=0,a[i++]=0,void(a[i++]=0);if(a[i++]=e.x,a[i++]=e.y,a[i++]=e.size,a[i++]=(0,u.floatColor)(e.color),l&&"ready"===l.status){var h=t.width,c=t.height;a[i++]=l.x/h,a[i++]=l.y/c,a[i++]=l.width/h,a[i++]=l.height/c}else a[i++]=0,a[i++]=0,a[i++]=0,a[i++]=0},a.prototype.render=function(t){if(!this.hasNothingToRender()){this.latestRenderParams=t;var e=this.gl,r=this.program;e.useProgram(r),e.uniform1f(this.ratioLocation,1/Math.sqrt(t.ratio)),e.uniform1f(this.scaleLocation,t.scalingRatio),e.uniformMatrix3fv(this.matrixLocation,!1,t.matrix),e.uniform1i(this.atlasLocation,0),e.drawArrays(e.POINTS,0,this.array.length/8)}},a.prototype.rebindTexture=function(){var e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.latestRenderParams&&(this.bind(),this.bufferData(),this.render(this.latestRenderParams))},a}(c.AbstractNodeProgram)}},1397:t=>{(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{default:()=>o});const o="precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\nvarying vec4 v_texture;\n\nuniform sampler2D u_atlas;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec4 color;\n\n  if (v_texture.w > 0.0) {\n    vec4 texel = texture2D(u_atlas, v_texture.xy + gl_PointCoord * v_texture.zw, -1.0);\n    color = vec4(mix(v_color, texel, texel.a).rgb, max(texel.a, v_color.a));\n  } else {\n    color = v_color;\n  }\n\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = length(m);\n\n  if (dist < radius - v_border) {\n    gl_FragColor = color;\n  } else if (dist < radius) {\n    gl_FragColor = mix(transparent, color, (radius - dist) / v_border);\n  } else {\n    gl_FragColor = transparent;\n  }\n}\n";t.exports=r})()},7822:t=>{(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{default:()=>o});const o="attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\nattribute vec4 a_texture;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\nvarying vec4 v_texture;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n\n  // Pass the texture coordinates:\n  v_texture = a_texture;\n}\n";t.exports=r})()}}]);