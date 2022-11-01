"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Configure your google maps API key to enable the maps widget on Appsmith",sidebar_position:5},i="Google Maps",s={unversionedId:"getting-started/setup/instance-configuration/google-maps",id:"getting-started/setup/instance-configuration/google-maps",title:"Google Maps",description:"Configure your google maps API key to enable the maps widget on Appsmith",source:"@site/docs/getting-started/setup/instance-configuration/google-maps.md",sourceDirName:"getting-started/setup/instance-configuration",slug:"/getting-started/setup/instance-configuration/google-maps",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/google-maps",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/instance-configuration/google-maps.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Configure your google maps API key to enable the maps widget on Appsmith",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Disable Intercom",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/disable-intercom"},next:{title:"Signup Restriction",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/disable-user-signup"}},p={},l=[],c={toc:l};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-maps"},"Google Maps"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68022).Z,width:"2446",height:"1428"})),(0,r.kt)("p",null,"To enable the maps widget, login to your ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"google cloud console")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Navigate to the")," ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},(0,r.kt)("strong",{parentName:"a"},"credentials section"))," ",(0,r.kt)("strong",{parentName:"p"},"under APIs & Services")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click to expand",src:n(15791).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Create a new API Key Credential")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click to expand",src:n(88776).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Restrict the API Key")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click to expand",src:n(10649).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Enable the following APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maps Embed API"),(0,r.kt)("li",{parentName:"ul"},"Maps JavaScript API"),(0,r.kt)("li",{parentName:"ul"},"Places API"),(0,r.kt)("li",{parentName:"ul"},"Geolocation API")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click to expand",src:n(55883).Z,width:"3360",height:"2100"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Update the")," ",(0,r.kt)("a",{parentName:"p",href:"./"},(0,r.kt)("strong",{parentName:"a"},"instance configuration"))," ",(0,r.kt)("strong",{parentName:"p"},"with the below fields")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Example Docker Configuration\n# ******** Google Maps ***********\nAPPSMITH_GOOGLE_MAPS_API_KEY=YOUR_API_KEY\n# ********************************\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," ",(0,r.kt)("a",{parentName:"p",href:"./"},(0,r.kt)("strong",{parentName:"a"},"Restart the Appsmith Instance"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The maps widget should now be enabled on your installation. Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"Obtaining a google API key"))))}g.isMDXComponent=!0},88776:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Maps_API_Key-b8d9c49ee6518b23442cfef3177a12ec.png"},10649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Maps_API_Restrict_(1)-a0c282cb24c33497de18145c3a679685.png"},55883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Maps_APIs-48c5f5946b8f48fdade6384a217171e2.png"},15791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Maps_Credentials-164e0d0d2bb66da757d23d163c156306.png"},68022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2020-07-17_at_5.02.29_PM-98438d9e6c1b109e5a750dc3e4d313ed.png"}}]);