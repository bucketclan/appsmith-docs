"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},i="REST APIs",s={unversionedId:"core-concepts/connecting-to-data-sources/authentication/README",id:"core-concepts/connecting-to-data-sources/authentication/README",title:"REST APIs",description:"If your APIs are protected by an authentication mechanism, that requires a standard set of headers or parameters that need to be sent with every request, you can save these in a common data source to be reused with every request known as Authenticated APIs.",source:"@site/docs/core-concepts/connecting-to-data-sources/authentication/README.md",sourceDirName:"core-concepts/connecting-to-data-sources/authentication",slug:"/core-concepts/connecting-to-data-sources/authentication/",permalink:"/core-concepts/connecting-to-data-sources/authentication/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/core-concepts/connecting-to-data-sources/authentication/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/core-concepts/connecting-to-data-sources/connecting-to-databases"},next:{title:"Configuring APIs",permalink:"/core-concepts/connecting-to-data-sources/authentication/connect-to-apis"}},c={},u=[{value:"Create Authenticated API",id:"create-authenticated-api",level:2},{value:"Configure",id:"configure",level:2},{value:"Name",id:"name",level:3},{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Send Appsmith Signature Header",id:"send-appsmith-signature-header",level:3},{value:"Authentication Type",id:"authentication-type",level:3},{value:"Security",id:"security",level:2},{value:"Smart JSON Substitution",id:"smart-json-substitution",level:2}],l={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rest-apis"},"REST APIs"),(0,r.kt)("p",null,"If your APIs are protected by an authentication mechanism, that requires a standard set of headers or parameters that need to be sent with every request, you can save these in a common data source to be reused with every request known as Authenticated APIs."),(0,r.kt)("h2",{id:"create-authenticated-api"},"Create Authenticated API"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Explorer")," \u2192 scroll down to ",(0,r.kt)("strong",{parentName:"p"},"Datasources")," \u2192 Click on the ",(0,r.kt)("strong",{parentName:"p"},"(+)")," sign \u2192 Click ",(0,r.kt)("strong",{parentName:"p"},"Authenticated API"),"."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/Uy7ZDviGbtM?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Add new API"))),(0,r.kt)("p",null,"You\u2019ll be redirected to the create datasource page as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a new Datasource",src:a(1300).Z,width:"2502",height:"1088"})),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"You can configure the data source as follows:"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"By default, Appsmith supplies a running sequence for the data source created. You can click on the pencil icon next to it to edit the name of the data source."),(0,r.kt)("p",null,'{% hint style="info" %}\nIt is advisable that you give a meaningful name to your Authenticated API datasource.\n{% endhint %}'),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,"Use this field to add the API URL you would like to access. For example, I would like to access the mock API of Appsmith, and for that, I\u2019ll supply the URL as  ",(0,r.kt)("a",{parentName:"p",href:"https://mock-api.appsmith.com"},(0,r.kt)("inlineCode",{parentName:"a"},"https://mock-api.appsmith.com")),"``"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,"You can add one or more header details that you would like to send along with the request to access the API you have integrated."),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("p",null,"You can add one or more query parameters to the API you integrate with as part of the request."),(0,r.kt)("h3",{id:"send-appsmith-signature-header"},"Send Appsmith Signature Header"),(0,r.kt)("p",null,"When you want to ensure that the incoming requests originate from Appsmith, you can enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Send Appsmith Signature Header")," by selecting ",(0,r.kt)("strong",{parentName:"p"},"Yes"),". You\u2019ll see a new field - ",(0,r.kt)("strong",{parentName:"p"},"Session Details Signature Key")," to supply the signature key."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Appsmith Signature Header",src:a(1305).Z,width:"1088",height:"390"})),(0,r.kt)("h3",{id:"authentication-type"},"Authentication Type"),(0,r.kt)("p",null,"You can define an ",(0,r.kt)("a",{parentName:"p",href:"authentication-type/"},"authentication type")," for REST APIs by using the protocols available on Appsmith."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"Appsmith safely encrypts all your authentication credentials and stores them securely. Appsmith also does not store any data returned from your data sources and acts only as a proxy layer to orchestrate the API / Query calls. Since Appsmith is an open-source framework, you can ",(0,r.kt)("a",{parentName:"p",href:"../../../getting-started/setup/"},"deploy it on-premise"),", and audit it to ensure none of your data leaves your VPC."),(0,r.kt)("h2",{id:"smart-json-substitution"},"Smart JSON Substitution"),(0,r.kt)("p",null,"The smart JSON substitution feature allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:"),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/-Z3y-pdNhXc?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to use smart JSON substitution"))))}p.isMDXComponent=!0},1305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OAuth__API_Integration__Appsmith_Signature_Header__Enable__-058429c41d86cf47c85fb3ae098548e7.png"},1300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OAuth__API_Integration__Create_New_DB-c3cec5ebd845e0ad0fa8d4560ae81261.png"}}]);