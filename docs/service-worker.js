if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const r=e=>i(e,o),t={module:{uri:o},exports:l,require:r};n[o]=Promise.all(s.map((e=>t[e]||r(e)))).then((e=>(d(...e),l)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wedding"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/wedding/css/app.ea4be2b9.css",revision:null},{url:"/wedding/css/chunk-vendors.f33db68e.css",revision:null},{url:"/wedding/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/wedding/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/wedding/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/wedding/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/wedding/img/logo.4d6033c9.svg",revision:null},{url:"/wedding/index.html",revision:"5450e5fdf6a408edef77c7ed00dae416"},{url:"/wedding/js/about.ec11c6eb.js",revision:null},{url:"/wedding/js/app.5b581439.js",revision:null},{url:"/wedding/js/chunk-vendors.d3618996.js",revision:null},{url:"/wedding/js/webfontloader.d1f3b791.js",revision:null},{url:"/wedding/manifest.json",revision:"4a1fe432f6bb12d32f6ab2ee625c24e8"}],{})}));
//# sourceMappingURL=service-worker.js.map
