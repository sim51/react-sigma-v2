(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=t,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({229:"a2fc0657",289:"94632c8a",701:"0e29f09e",788:"ed19ce8b",958:"0abc1b57",1131:"fe3b803a",1235:"a7456010",1244:"127e2a23",1272:"735d0569",1284:"406179f6",1373:"700704ff",1403:"36d28def",1441:"2c32c100",1459:"958d1a80",1462:"9ff21ef4",1531:"7267a26e",1811:"737f273a",1852:"50c0544f",2019:"88c72a41",2063:"4d2c4bb1",2194:"bf0ee195",2265:"ec0ed7e7",2303:"44ea4b08",2388:"f11c0912",2433:"3a91e6eb",2711:"1aa56bec",2765:"47a287a0",2799:"999d5064",2881:"f7d9daf5",2885:"a1f74bf5",2907:"22f670d9",3055:"eec79c8d",3080:"4f8b49f0",3115:"e3af3295",3379:"e9d20596",3592:"566af407",3670:"8cb8b060",3697:"77c36cd3",3829:"f097fad7",3969:"a6d01e9f",3993:"4c00c60f",4516:"415b76c9",4583:"1df93b7f",4939:"f8014d76",4954:"87d975d3",4970:"23db31aa",5328:"b32aa62f",5349:"652142ff",5362:"e60724d1",5378:"b025ee8f",5482:"6c60958d",5618:"4c3db254",5742:"aba21aa0",5773:"5b5d3e9c",5823:"3e23a349",5989:"8e6581c0",6217:"c6c56b9b",6224:"28066f65",6519:"e82272c9",6623:"b766a9ba",6725:"4c8499be",6809:"a8addf22",6937:"cc19ab3b",7016:"6c3cbc8a",7073:"e6c6c456",7098:"a7bd4aaa",7186:"b5bbf372",7624:"5fbc5cf1",7664:"c064a133",7738:"8044840a",7759:"d0955971",7784:"28a50278",7804:"f744d675",7919:"09a6fb8d",8070:"0480b142",8078:"6f332553",8262:"190e4be3",8387:"f822d16e",8401:"17896441",8508:"177d4b79",8693:"204e7141",8770:"a2f529ce",8795:"b94983b7",8973:"47e42361",8995:"1b26c453",9048:"a94703ab",9074:"e3510249",9266:"86602c7e",9405:"c7bdaeff",9466:"61c3ac8d",9619:"71d6bb1a",9647:"5e95c892",9653:"de170a46",9717:"a1de5fff",9799:"275a1e34",9993:"5ea3f514"}[e]||e)+"."+{229:"dd41fa90",289:"d369b5e8",548:"9fa9a095",701:"07dcf8cb",788:"58d5b693",958:"21b72015",1131:"048bd5ac",1158:"7621e90d",1235:"62a0ba21",1244:"b58c8da1",1272:"10525ffc",1284:"d065cc34",1373:"615861b4",1403:"12297da5",1441:"aae0574a",1459:"0367c0d6",1462:"c29319b2",1531:"9b7da9b6",1811:"f2647da0",1852:"e2651592",2008:"f9056235",2019:"dda6eb39",2063:"3965ec0a",2194:"1a8b739e",2265:"58f55eea",2303:"260fe248",2388:"0b012bbb",2433:"7653d87a",2711:"195281d8",2765:"b5a64abc",2799:"b3c0384c",2881:"3b7d1114",2885:"92cf0d61",2907:"647a6c80",2995:"db1b078a",3055:"8eed326b",3080:"27ed7f86",3115:"1724dcaa",3379:"353ffb1d",3592:"0b18317d",3670:"96fc22c6",3697:"7a9a2d9d",3724:"af3779c7",3829:"6fdd8d01",3969:"45c857a9",3993:"8b1af2ac",4516:"2950cbf9",4583:"bbfabdb5",4939:"cec68f9d",4954:"bd35f94b",4970:"bf331764",5328:"120ff6b4",5349:"7da6a196",5362:"bfa55f94",5378:"d4fb7cab",5482:"a3798014",5504:"bd270508",5618:"ff22c77b",5692:"d6712ab5",5742:"b8b2ef8f",5773:"aa18a52d",5823:"d6117381",5989:"507b54af",6217:"4fd35c3b",6224:"99abd234",6519:"8a52087f",6545:"fd0f1d52",6623:"2be8b9f5",6725:"9ae098b6",6809:"76848b0f",6937:"29d1b5ae",7016:"6e6982e0",7073:"ba8bd71f",7098:"99ae9022",7186:"42527d75",7624:"fa0c2439",7664:"692039ed",7738:"14a8c8fc",7759:"d37d78e1",7784:"f4fc3fa7",7803:"b2660d07",7804:"0ed0ad96",7919:"fc812710",8070:"0df64ba1",8078:"e0675b67",8262:"21311f48",8387:"f48092bf",8401:"2eea7635",8508:"9f0011d6",8693:"e6c49b9c",8770:"2e783b3c",8795:"0e489ee1",8927:"92c73c1c",8973:"b4891fc9",8995:"a5249228",9048:"9a0a4b20",9074:"26c088d6",9266:"18c414ed",9405:"ddbb4776",9466:"1a206e9a",9619:"d114d5b9",9647:"d1ea5d79",9653:"dd3fe555",9717:"0d1e3dd3",9799:"642999a7",9993:"f262b3e4"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="@react-sigma/website:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/react-sigma/",r.gca=function(e){return e={17896441:"8401",a2fc0657:"229","94632c8a":"289","0e29f09e":"701",ed19ce8b:"788","0abc1b57":"958",fe3b803a:"1131",a7456010:"1235","127e2a23":"1244","735d0569":"1272","406179f6":"1284","700704ff":"1373","36d28def":"1403","2c32c100":"1441","958d1a80":"1459","9ff21ef4":"1462","7267a26e":"1531","737f273a":"1811","50c0544f":"1852","88c72a41":"2019","4d2c4bb1":"2063",bf0ee195:"2194",ec0ed7e7:"2265","44ea4b08":"2303",f11c0912:"2388","3a91e6eb":"2433","1aa56bec":"2711","47a287a0":"2765","999d5064":"2799",f7d9daf5:"2881",a1f74bf5:"2885","22f670d9":"2907",eec79c8d:"3055","4f8b49f0":"3080",e3af3295:"3115",e9d20596:"3379","566af407":"3592","8cb8b060":"3670","77c36cd3":"3697",f097fad7:"3829",a6d01e9f:"3969","4c00c60f":"3993","415b76c9":"4516","1df93b7f":"4583",f8014d76:"4939","87d975d3":"4954","23db31aa":"4970",b32aa62f:"5328","652142ff":"5349",e60724d1:"5362",b025ee8f:"5378","6c60958d":"5482","4c3db254":"5618",aba21aa0:"5742","5b5d3e9c":"5773","3e23a349":"5823","8e6581c0":"5989",c6c56b9b:"6217","28066f65":"6224",e82272c9:"6519",b766a9ba:"6623","4c8499be":"6725",a8addf22:"6809",cc19ab3b:"6937","6c3cbc8a":"7016",e6c6c456:"7073",a7bd4aaa:"7098",b5bbf372:"7186","5fbc5cf1":"7624",c064a133:"7664","8044840a":"7738",d0955971:"7759","28a50278":"7784",f744d675:"7804","09a6fb8d":"7919","0480b142":"8070","6f332553":"8078","190e4be3":"8262",f822d16e:"8387","177d4b79":"8508","204e7141":"8693",a2f529ce:"8770",b94983b7:"8795","47e42361":"8973","1b26c453":"8995",a94703ab:"9048",e3510249:"9074","86602c7e":"9266",c7bdaeff:"9405","61c3ac8d":"9466","71d6bb1a":"9619","5e95c892":"9647",de170a46:"9653",a1de5fff:"9717","275a1e34":"9799","5ea3f514":"9993"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();