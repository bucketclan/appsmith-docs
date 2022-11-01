"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={description:"The signature header can be used to verify the authenticity and integrity of API requested made by Appsmith."},o="Signature Header",s={unversionedId:"core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions",id:"core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions",title:"Signature Header",description:"The signature header can be used to verify the authenticity and integrity of API requested made by Appsmith.",source:"@site/docs/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions.md",sourceDirName:"core-concepts/connecting-to-data-sources/authentication",slug:"/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions",permalink:"/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions.md",tags:[],version:"current",frontMatter:{description:"The signature header can be used to verify the authenticity and integrity of API requested made by Appsmith."},sidebar:"tutorialSidebar",previous:{title:"Client Credentials",permalink:"/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/client-credentials"},next:{title:"Self-signed Certificates",permalink:"/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates"}},c={},l=[{value:"Enabling the Header",id:"enabling-the-header",level:2},{value:"Contents of the JWT",id:"contents-of-the-jwt",level:2},{value:"Construction of token and signature",id:"construction-of-token-and-signature",level:2},{value:"Significance of the signature",id:"significance-of-the-signature",level:2}],h={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signature-header"},"Signature Header"),(0,i.kt)("p",null,"This is an option that can be enabled on ",(0,i.kt)("a",{parentName:"p",href:"./#create-authenticated-api"},"REST")," datasources. When enabled, we also require a signature secret (a string of at least 32 characters) as input from the user. The effect of this option being enabled is that every API call made to this datasource will include an additional header, ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Appsmith-Signature"),", whose value is a ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io"},"JSON Web Token (JWT)")," signed with the secret provided by the user. Following are details of how this signature is constructed, what the JWT contains, and what significance this header holds to users."),(0,i.kt)("h2",{id:"enabling-the-header"},"Enabling the Header"),(0,i.kt)("p",null,"There are two steps to enable the signature header for a particular ",(0,i.kt)("a",{parentName:"p",href:"./#create-authenticated-api"},"REST datasource"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("a",{parentName:"li",href:"./#send-appsmith-signature-header"},(0,i.kt)("inlineCode",{parentName:"a"},"Send Appsmith signature header"))," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Session Details Signature Key")," to a random string that is at least 32 characters long.")),(0,i.kt)("p",null,"Now ",(0,i.kt)("em",{parentName:"p"},"Save")," the datasource and any action built on top of this datasource should now have an ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Appsmith-Signature")," header with a JWT (described below) as it's value."),(0,i.kt)("h2",{id:"contents-of-the-jwt"},"Contents of the JWT"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io"},"JSON Web Token (JWT)")," is made up of three parts. The header, payload, and signature. The header and payload are essentially base64 encoded JSON objects."),(0,i.kt)("p",null,"A typical header JSON object looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "alg": "HS256",\n  "typ": "JWT"\n}\n')),(0,i.kt)("p",null,"A typical payload JSON object looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "iss": "Appsmith",\n  "exp": 1516239022\n}\n')),(0,i.kt)("h2",{id:"construction-of-token-and-signature"},"Construction of token and signature"),(0,i.kt)("p",null,"Now, these two are taken to construct the following string (let's call this the body):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'base64Encode(JSON.stringify(header)) + "." + base64Encode(JSON.stringify(payload))\n')),(0,i.kt)("p",null,"This body is then signed using the algorithm specified in the header's ",(0,i.kt)("inlineCode",{parentName:"p"},"alg")," key. The secret used to make this signature is the one configured in the datasource by the user. This signature is then appended to the above body, with another ",(0,i.kt)("inlineCode",{parentName:"p"},'"."')," in the middle."),(0,i.kt)("h2",{id:"significance-of-the-signature"},"Significance of the signature"),(0,i.kt)("p",null,"The signature will ensure the authenticity and integrity of this JWT."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authenticity"),": Authenticity is the property of the token that proves that the token is originating from Appsmith."),(0,i.kt)("p",null,"A signature cannot be recreated without access to the secret that was used to create it. The fact that the secret signature is only available to Appsmith and the user proves the signature's and so the token's authenticity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Integrity"),": Integrity is the property of the token that it cannot be tampered with."),(0,i.kt)("p",null,"The signature is constructed using the body, in addition to the secret. So, if the contents of the header or payload or changed (causing a change in the body part of the token), the signature will not match. However, the signature cannot be recreated by the tamperer since the secret is not available to them. So, integrity is ensured, as long as the secret remains a secret."))}u.isMDXComponent=!0}}]);