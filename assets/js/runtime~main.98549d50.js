(()=>{"use strict";var e,a,d,f,c,t={},b={};function r(e){var a=b[e];if(void 0!==a)return a.exports;var d=b[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=t,r.c=b,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(a,d,f,c)=>{if(!d){var t=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],c=e[i][2];for(var b=!0,o=0;o<d.length;o++)(!1&c||t>=c)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(b=!1,c<t&&(t=c));if(b){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,f,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var t={};a=a||[null,d({}),d([]),d(d)];for(var b=2&f&&e;"object"==typeof b&&!~a.indexOf(b);b=d(b))Object.getOwnPropertyNames(b).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,r.d(c,t),c},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({289:"94632c8a",701:"0e29f09e",788:"ed19ce8b",819:"6f8401eb",958:"0abc1b57",1131:"fe3b803a",1235:"a7456010",1244:"127e2a23",1272:"735d0569",1284:"406179f6",1373:"700704ff",1403:"36d28def",1441:"2c32c100",1459:"958d1a80",1462:"9ff21ef4",1531:"7267a26e",1811:"737f273a",1852:"50c0544f",2063:"4d2c4bb1",2388:"f11c0912",2711:"1aa56bec",2765:"32dd47bd",2799:"999d5064",2881:"f7d9daf5",2885:"a1f74bf5",2907:"22f670d9",3055:"eec79c8d",3379:"e9d20596",3592:"566af407",3829:"f097fad7",3969:"a6d01e9f",4583:"1df93b7f",4970:"23db31aa",5146:"47a287a0",5279:"84db464d",5328:"b32aa62f",5362:"e60724d1",5378:"b025ee8f",5482:"6c60958d",5618:"4c3db254",5742:"aba21aa0",5773:"5b5d3e9c",5823:"3e23a349",5989:"8e6581c0",6217:"c6c56b9b",6224:"28066f65",6519:"e82272c9",6725:"4c8499be",6809:"a8addf22",6937:"cc19ab3b",7016:"6c3cbc8a",7073:"e6c6c456",7098:"a7bd4aaa",7186:"b5bbf372",7624:"5fbc5cf1",7759:"d0955971",7784:"28a50278",7804:"f744d675",7919:"09a6fb8d",8070:"0480b142",8387:"f822d16e",8401:"17896441",8508:"177d4b79",8770:"a2f529ce",8795:"b94983b7",9048:"a94703ab",9266:"86602c7e",9405:"c7bdaeff",9619:"71d6bb1a",9647:"5e95c892",9653:"de170a46"}[e]||e)+"."+{289:"d28e9345",548:"d8393c59",701:"624fa5a6",788:"8cee8b60",819:"d8f44847",958:"151c27ae",1131:"3d38f159",1235:"62a0ba21",1244:"ca650d30",1272:"924edb34",1284:"7f56b2fe",1373:"44d19f77",1403:"6d695919",1441:"2b105067",1459:"4bc95d93",1462:"f6d1217f",1531:"bd48a83c",1811:"06a69050",1852:"91bb0a29",2063:"81818d26",2388:"5470cb47",2711:"1824fbbd",2765:"5dfb4e47",2799:"bfd133b5",2881:"8b178b17",2885:"632d0474",2907:"415b92ac",2995:"db1b078a",3055:"330d995e",3379:"ee697716",3592:"104d429c",3724:"7ce42cfe",3829:"3f305ad6",3969:"6f55917b",4506:"26e76f51",4583:"031d43b3",4970:"ffbf1b94",5146:"5e269668",5279:"34ff065b",5328:"a9d54cc4",5362:"f9bb97d4",5378:"cfb32254",5482:"b3c62558",5611:"446341c6",5618:"710ea0e2",5723:"874992df",5742:"b8b2ef8f",5773:"b01c8022",5823:"4e5ee3d9",5989:"0f18086d",6217:"7694fa98",6224:"a2d96a73",6519:"46288942",6725:"c3c97847",6809:"5ac42ba0",6937:"409049b3",7016:"c1cb58a6",7073:"187adda0",7098:"b79bba6a",7186:"61cd8af4",7624:"3a316252",7759:"185045bc",7784:"da2231cb",7803:"a306a702",7804:"ad74098d",7919:"fe630923",8070:"4d890942",8147:"4dac9a28",8387:"ee88cab2",8401:"1799e2c4",8508:"bf94d71d",8770:"e3ebea51",8795:"beb39a9e",9048:"71ff6267",9266:"9abe853f",9405:"f7e23a86",9619:"0b3ccd53",9647:"6f8d9ca7",9653:"7fbdbc9b"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="@react-sigma/website:",r.l=(e,a,d,t)=>{if(f[e])f[e].push(a);else{var b,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+d){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,r.nc&&b.setAttribute("nonce",r.nc),b.setAttribute("data-webpack",c+d),b.src=e),f[e]=[a];var l=(a,d)=>{b.onerror=b.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),c&&c.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/react-sigma/",r.gca=function(e){return e={17896441:"8401","94632c8a":"289","0e29f09e":"701",ed19ce8b:"788","6f8401eb":"819","0abc1b57":"958",fe3b803a:"1131",a7456010:"1235","127e2a23":"1244","735d0569":"1272","406179f6":"1284","700704ff":"1373","36d28def":"1403","2c32c100":"1441","958d1a80":"1459","9ff21ef4":"1462","7267a26e":"1531","737f273a":"1811","50c0544f":"1852","4d2c4bb1":"2063",f11c0912:"2388","1aa56bec":"2711","32dd47bd":"2765","999d5064":"2799",f7d9daf5:"2881",a1f74bf5:"2885","22f670d9":"2907",eec79c8d:"3055",e9d20596:"3379","566af407":"3592",f097fad7:"3829",a6d01e9f:"3969","1df93b7f":"4583","23db31aa":"4970","47a287a0":"5146","84db464d":"5279",b32aa62f:"5328",e60724d1:"5362",b025ee8f:"5378","6c60958d":"5482","4c3db254":"5618",aba21aa0:"5742","5b5d3e9c":"5773","3e23a349":"5823","8e6581c0":"5989",c6c56b9b:"6217","28066f65":"6224",e82272c9:"6519","4c8499be":"6725",a8addf22:"6809",cc19ab3b:"6937","6c3cbc8a":"7016",e6c6c456:"7073",a7bd4aaa:"7098",b5bbf372:"7186","5fbc5cf1":"7624",d0955971:"7759","28a50278":"7784",f744d675:"7804","09a6fb8d":"7919","0480b142":"8070",f822d16e:"8387","177d4b79":"8508",a2f529ce:"8770",b94983b7:"8795",a94703ab:"9048","86602c7e":"9266",c7bdaeff:"9405","71d6bb1a":"9619","5e95c892":"9647",de170a46:"9653"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,d)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>f=e[a]=[d,c]));d.push(f[2]=c);var t=r.p+r.u(a),b=new Error;r.l(t,(d=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;b.message="Loading chunk "+a+" failed.\n("+c+": "+t+")",b.name="ChunkLoadError",b.type=c,b.request=t,f[1](b)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var f,c,t=d[0],b=d[1],o=d[2],n=0;if(t.some((a=>0!==e[a]))){for(f in b)r.o(b,f)&&(r.m[f]=b[f]);if(o)var i=o(r)}for(a&&a(d);n<t.length;n++)c=t[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},d=self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();