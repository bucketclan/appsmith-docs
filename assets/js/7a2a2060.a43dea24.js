"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[7029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(g,c(c({ref:t},d),{},{components:n})):i.createElement(g,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={},c="Self-signed Certificates",o={unversionedId:"core-concepts/connecting-to-data-sources/authentication/self-signed-certificates",id:"core-concepts/connecting-to-data-sources/authentication/self-signed-certificates",title:"Self-signed Certificates",description:"Self-signed certificates are sometimes used in testing or internal environments, as they provide incoming/outgoing data encryption and can be created quickly with no cost. This practice can carry significantly increased security risks, however, and should be carefully considered.",source:"@site/docs/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates.md",sourceDirName:"core-concepts/connecting-to-data-sources/authentication",slug:"/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates",permalink:"/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signature Header",permalink:"/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions"},next:{title:"Building UI",permalink:"/core-concepts/building-ui/"}},s={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"self-signed-certificates"},"Self-signed Certificates"),(0,r.kt)("p",null,"Self-signed certificates are sometimes used in testing or internal environments, as they provide incoming/outgoing data encryption and can be created quickly with no cost. This practice can carry significantly increased security risks, however, and should be carefully considered."),(0,r.kt)("p",null,"In case you need to use a self-signed certificate to access your REST endpoint, the ",(0,r.kt)("a",{parentName:"p",href:"./#create-authenticated-api"},(0,r.kt)("strong",{parentName:"a"},"Authenticated API"))," Datasource allows you to upload your own self-signed certificate within the API's configuration page."),(0,r.kt)("p",null,"To upload your self-signed certificate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your Authenticated API Datasource in the Explorer pane. If you haven't already created one, you can find instructions in the ",(0,r.kt)("a",{parentName:"li",href:"./#create-authenticated-api"},"Authenticated API docs"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," in the top-right of the window."),(0,r.kt)("li",{parentName:"ol"},"Click to open the ",(0,r.kt)("strong",{parentName:"li"},"Advanced Settings")," dropdown at the bottom of the window."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Use Self-signed certificate","*"),' option to "Yes".'),(0,r.kt)("li",{parentName:"ol"},"In the new ",(0,r.kt)("strong",{parentName:"li"},"Upload Certificate")," field, click the ",(0,r.kt)("strong",{parentName:"li"},"Select")," button. Now you can browse to find and upload your self-signed certificate file.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"After creating a New Datasource, select Authenticated API and use the Advanced Settings to upload your certificate.",src:n(94072).Z,width:"915",height:"731"})),(0,r.kt)("p",null,"This information needs to be provided in .PEM (",(0,r.kt)("em",{parentName:"p"},"Privacy Enhanced Mail"),") format, as shown below. The certificate information is stored securely in an encrypted format in the database."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example contents of a self-signed certificate in .PEM format.",src:n(28471).Z,width:"942",height:"826"})))}u.isMDXComponent=!0},28471:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Self-signed_certificate-11a63cc8bfa8edccd63cf41b728f6195.png"},94072:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/as_selfsigned_annotated-8b184d607d10b5dbfbccc369ad191714.png"}}]);