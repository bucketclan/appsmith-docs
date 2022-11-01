"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={},o="Security",s={unversionedId:"product/security",id:"product/security",title:"Security",description:"Does Appsmith store my data?",source:"@site/docs/product/security.md",sourceDirName:"product",slug:"/product/security",permalink:"/product/security",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/product/security.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Widget Errors",permalink:"/help-and-support/troubleshooting-guide/widget-errors"},next:{title:"Telemetry",permalink:"/product/telemetry"}},p={},l=[{value:"Does Appsmith store my data?",id:"does-appsmith-store-my-data",level:2},{value:"Security measures within Appsmith",id:"security-measures-within-appsmith",level:2},{value:"Securely Executing Queries &amp; APIs",id:"securely-executing-queries--apis",level:2},{value:"Securely Executing JavaScript",id:"securely-executing-javascript",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security"},"Security"),(0,n.kt)("h2",{id:"does-appsmith-store-my-data"},"Does Appsmith store my data?"),(0,n.kt)("p",null,"Appsmith does not store any data returned from your API endpoints or DB queries. Appsmith only acts as a proxy layer. When you query your database/API endpoint, the Appsmith server only appends sensitive credentials before forwarding the request to your backend. It doesn\u2019t expose sensitive credentials to the browser as it can lead to security breaches. The routing ensures the security of your systems and data."),(0,n.kt)("h2",{id:"security-measures-within-appsmith"},"Security measures within Appsmith"),(0,n.kt)("p",null,"Appsmith applications are secure-by-default. The security measures implemented for Appsmith installations are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All sensitive credentials, such as database credentials, are encrypted with ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES-256 encryption"),". Each self-hosted Appsmith instance ensures ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_at_rest"},"data-at-rest")," security by configuring unique salt and password values."),(0,n.kt)("li",{parentName:"ul"},"On Appsmith Cloud, all connections are ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Public_key_certificate"},"TLS")," encrypted. For self-hosted instances, we offer the capability to set up ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Public_key_certificate"},"SSL "),"certificates via ",(0,n.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"LetsEncrypt "),"during installation."),(0,n.kt)("li",{parentName:"ul"},"Appsmith Cloud will ",(0,n.kt)("strong",{parentName:"li"},"only")," connect to your databases/API endpoints through whitelisted IPs: ",(0,n.kt)("strong",{parentName:"li"},"18.223.74.85")," & ",(0,n.kt)("strong",{parentName:"li"},"3.131.104.27"),", ensuring that you only expose database access to specific IPs when using our cloud offering."),(0,n.kt)("li",{parentName:"ul"},"Appsmith Cloud is hosted in AWS data centers on ",(0,n.kt)("strong",{parentName:"li"},"SOC 1")," and ",(0,n.kt)("strong",{parentName:"li"},"SOC 2")," compliant servers. We also maintain data redundancy on our cloud instances via regular backups."),(0,n.kt)("li",{parentName:"ul"},"Internal access to Appsmith Cloud is controlled through a ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Help:Two-factor_authentication"},"Two-Factor Authentication System")," and audit logs.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The above reference to the ",(0,n.kt)("strong",{parentName:"p"},"audit logs")," pertains only to the ",(0,n.kt)("strong",{parentName:"p"},"cloud-hosted instance")," of Appsmith and does ",(0,n.kt)("strong",{parentName:"p"},"not")," refer to the ",(0,n.kt)("strong",{parentName:"p"},"audit logs")," ",(0,n.kt)("strong",{parentName:"p"},"feature."))),(0,n.kt)("h2",{id:"securely-executing-queries--apis"},"Securely Executing Queries & APIs"),(0,n.kt)("p",null,"Appsmith's backend system doesn't store any data when responding to API calls or executing any queries. The security measures implemented for Appsmith Executing Queries & APIs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Appsmith's backend system doesn't store any information about query responses or user inputs. Appsmith ",(0,n.kt)("strong",{parentName:"li"},"only")," acts as a proxy and never logs or stores the private/confidential data in Appsmith's data stores."),(0,n.kt)("li",{parentName:"ul"},"To protect the application so that users cannot infer the executed query - Appsmith stores the query configuration and ensures that the SQL query body or custom API URLs are never exposed to the client in ",(0,n.kt)("inlineCode",{parentName:"li"},"view")," mode. "," "),(0,n.kt)("li",{parentName:"ul"},"To avoid SQL injections, all SQL queries have ",(0,n.kt)("a",{parentName:"li",href:"/learning-and-resources/how-to-guides/how-to-use-prepared-statements"},"prepared statements")," enabled by default.")),(0,n.kt)("h2",{id:"securely-executing-javascript"},"Securely Executing JavaScript"),(0,n.kt)("p",null,"The JavaScript code written within Appsmith is executed on the client only, and a user can inspect the site and view the code in the browser. Hence, we recommend implementing the standard best practices when dealing with client-side code."),(0,n.kt)("p",null,"The code is stored in the MongoDB database that Appsmith uses to store all other application configurations. To ensure that all data is secure, please read the following carefully:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We recommend that you ",(0,n.kt)("strong",{parentName:"li"},"do")," ",(0,n.kt)("strong",{parentName:"li"},"not")," hard code the sensitive keys, credentials, or other sensitive information in the JavaScript objects in plain text.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You can add ",(0,n.kt)("strong",{parentName:"p"},"secrets")," to ",(0,n.kt)("strong",{parentName:"p"},"APIs")," or ",(0,n.kt)("strong",{parentName:"p"},"datasource configurations")," as they are ",(0,n.kt)("strong",{parentName:"p"},"not")," exposed in the ",(0,n.kt)("strong",{parentName:"p"},"view mode"),". You can update the ",(0,n.kt)("strong",{parentName:"p"},"secrets")," in ",(0,n.kt)("strong",{parentName:"p"},"edit")," ",(0,n.kt)("strong",{parentName:"p"},"mode")," but ",(0,n.kt)("strong",{parentName:"p"},"cannot")," view the existing ",(0,n.kt)("strong",{parentName:"p"},"secrets")," while ",(0,n.kt)("strong",{parentName:"p"},"viewing")," or ",(0,n.kt)("strong",{parentName:"p"},"editing")," the configurations.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you sync applications to git repositories, the JavaScript code is also synced and stored as a JavaScript file in the repository. As a result, we recommend following standard best practices when dealing with JavaScript code written on Appsmith."),(0,n.kt)("li",{parentName:"ul"},"We ",(0,n.kt)("strong",{parentName:"li"},"do not")," expose DOM APIs directly to the user while writing JavaScript code, but we support a few features via global actions like ",(0,n.kt)("inlineCode",{parentName:"li"},"setInterval()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"clearInterval()")," available on Appsmith."),(0,n.kt)("li",{parentName:"ul"},"Appsmith does not allow some actions like ",(0,n.kt)("inlineCode",{parentName:"li"},"Fetch"),". You cannot call an external API directly from the JavaScript code. However, you can add an API on Appsmith and use it to request, read data, or manipulate the response from the external API."),(0,n.kt)("li",{parentName:"ul"},"You should not store sensitive information using a ",(0,n.kt)("inlineCode",{parentName:"li"},"storeValue")," function because the data is stored in the browser's local storage and can be read.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We maintain an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@appsmith.com"},"security@appsmith.com"),", and we'll resolve it ASAP.")))}u.isMDXComponent=!0}}]);