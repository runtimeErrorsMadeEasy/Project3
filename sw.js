if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>i(e,r),d={module:{uri:r},exports:s,require:c};t[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-3832c073"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"d3cdada3.js",revision:"5adf1ee6bb730e93c77f77b62059a5b0"},{url:"index.html",revision:"58d92113e27ac4a751cfd19cb260cdb7"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
