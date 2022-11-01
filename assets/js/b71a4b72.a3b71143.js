"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9447],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),p=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return r.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,s(s({ref:a},l),{},{components:t})):r.createElement(h,s({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10859:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={sidebar_position:2,description:"The Appsmith platform allows us to share data across pages using URL query params & the browser's local storage."},s="Share Data Across Pages",i={unversionedId:"advanced-concepts/sharing-data-across-pages",id:"advanced-concepts/sharing-data-across-pages",title:"Share Data Across Pages",description:"The Appsmith platform allows us to share data across pages using URL query params & the browser's local storage.",source:"@site/docs/advanced-concepts/sharing-data-across-pages.md",sourceDirName:"advanced-concepts",slug:"/advanced-concepts/sharing-data-across-pages",permalink:"/advanced-concepts/sharing-data-across-pages",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/sharing-data-across-pages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"The Appsmith platform allows us to share data across pages using URL query params & the browser's local storage."},sidebar:"tutorialSidebar",previous:{title:"Custom Authentication",permalink:"/advanced-concepts/how-to-implement-custom-authentication-on-appsmith"},next:{title:"Embed Apps",permalink:"/advanced-concepts/embed-appsmith-into-existing-application"}},c={},p=[{value:"Sharing data via query params",id:"sharing-data-via-query-params",level:2},{value:"Sharing data via local storage",id:"sharing-data-via-local-storage",level:2}],l={toc:p};function d(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"share-data-across-pages"},"Share Data Across Pages"),(0,n.kt)("h2",{id:"sharing-data-via-query-params"},"Sharing data via query params"),(0,n.kt)("p",null,"Query params can be passed by adding the query params object to ",(0,n.kt)("a",{parentName:"p",href:"/reference/appsmith-framework/widget-actions/navigate-to"},"navigateTo function"),". To do this click on the JS mode for Action and update it as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{{navigateTo("PageName", {"param": "value"})}}\n')),(0,n.kt)("p",null,"These can be consumed on the destination page with ",(0,n.kt)("inlineCode",{parentName:"p"},"appsmith.URL.queryParams.param"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Click to expand",src:t(69594).Z,width:"1665",height:"752"})),(0,n.kt)("h2",{id:"sharing-data-via-local-storage"},"Sharing data via local storage"),(0,n.kt)("p",null,"Key-value pairs can be stored within the local storage with the help of the ",(0,n.kt)("a",{parentName:"p",href:"/reference/appsmith-framework/widget-actions/store-value"},"StoreValue action"),". To do so pick the StoreValue action and provide the desired key and values. These can be consumed on the destination page with ",(0,n.kt)("inlineCode",{parentName:"p"},"appsmith.store.key")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Click to expand",src:t(59476).Z,width:"1665",height:"752"})))}d.isMDXComponent=!0},59476:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/localStorage-b07404f48c81d3dfd261e72e8e831b91.gif"},69594:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/queryParams-3b29fadad3eb1f650c586daa80286e4c.gif"}}]);