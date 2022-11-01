"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={},a="Troubleshooting",p={unversionedId:"help-and-support/troubleshooting-guide/README",id:"help-and-support/troubleshooting-guide/README",title:"Troubleshooting",description:"This document aims to help debug common errors on the Appsmith platform.",source:"@site/docs/help-and-support/troubleshooting-guide/README.md",sourceDirName:"help-and-support/troubleshooting-guide",slug:"/help-and-support/troubleshooting-guide/",permalink:"/appsmith-docs/help-and-support/troubleshooting-guide/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/help-and-support/troubleshooting-guide/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/appsmith-docs/learning-and-resources/integrations"},next:{title:"Action Errors",permalink:"/appsmith-docs/help-and-support/troubleshooting-guide/action-errors/"}},s={},l=[{value:"Using the Linter and Debugger",id:"using-the-linter-and-debugger",level:2},{value:"Getting Help",id:"getting-help",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"This document aims to help debug common errors on the Appsmith platform."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"action-errors/"},"Action Errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/appsmith-docs/help-and-support/troubleshooting-guide/application-errors"},"Application Errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/appsmith-docs/help-and-support/troubleshooting-guide/deployment-errors"},"Deployment Errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/appsmith-docs/help-and-support/troubleshooting-guide/js-errors"},"JS Errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/appsmithorg/appsmith-docs/tree/9fe81bb98cdc29e7f6ba351c3620699e98ca891e/troubleshooting-guide/hint-messages.md"},"Hint Messages")," (Coming Soon)")),(0,n.kt)("h2",{id:"using-the-linter-and-debugger"},"Using the Linter and Debugger"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"../../core-concepts/writing-code/javascript-editor-beta/#linting-errors"},"Linter")," and ",(0,n.kt)("a",{parentName:"p",href:"../../core-concepts/writing-code/javascript-editor-beta/#debugger-statements"},"Debugger")," are tools built right into the Editor to help you find and fix bugs quickly. The video below shows how to use the ",(0,n.kt)("a",{parentName:"p",href:"../../core-concepts/writing-code/javascript-editor-beta/#linting-errors"},"Linter")," and ",(0,n.kt)("a",{parentName:"p",href:"../../core-concepts/writing-code/javascript-editor-beta/#debugger-statements"},"Debugger")," to fix various bugs."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/DuDBMCqG2Zo",width:"750px",height:"400px"}),")",(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Using the Linter and Debugger"))),(0,n.kt)("h2",{id:"getting-help"},"Getting Help"),(0,n.kt)("p",null,"If you are unable to debug an error, please reach out to us on our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord Server")," or write to us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},"support@appsmith.com")))}c.isMDXComponent=!0}}]);