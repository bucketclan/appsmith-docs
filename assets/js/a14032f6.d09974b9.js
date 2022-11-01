"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[7241],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(m,o(o({ref:e},d),{},{components:n})):a.createElement(m,o({ref:e},d))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69870:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5.2},o="Ping Identity",l={unversionedId:"getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity",id:"getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity",title:"Ping Identity",description:"Ping Identity (PingID) is the identity as a security platform provider. It is a cloud-based authentication service provider and supports Security Assertion Markup Language (SAML). You can use Appsmith to integrate with Ping Identity using SAML configuration for authentication.",source:"@site/docs/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity.md",sourceDirName:"getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml",slug:"/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity",permalink:"/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity.md",tags:[],version:"current",sidebarPosition:5.2,frontMatter:{sidebar_position:5.2},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/okta"},next:{title:"OpenID Connect SSO",permalink:"/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/"}},s={},p=[{value:"Create Environment",id:"create-environment",level:2},{value:"Create Application",id:"create-application",level:3},{value:"Configure SAML",id:"configure-saml",level:3},{value:"Configure Ping Identity Fields in Appsmith",id:"configure-ping-identity-fields-in-appsmith",level:2},{value:"Register Identity Provider",id:"register-identity-provider",level:3},{value:"Metadata URL",id:"metadata-url",level:4},{value:"XML",id:"xml",level:4},{value:"IdP Data",id:"idp-data",level:4},{value:"Complete the SAML Configuration",id:"complete-the-saml-configuration",level:2}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},c=d("EntityDescriptor"),u=d("SingleSignOnService"),g=d("X509Certificate"),m={toc:p};function k(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ping-identity"},"Ping Identity"),(0,i.kt)("p",null,"Ping Identity (PingID) is the identity as a security platform provider. It is a cloud-based authentication service provider and supports Security Assertion Markup Language (SAML). You can use Appsmith to integrate with Ping Identity using SAML configuration for authentication."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Security Assertion Markup Language (SAML) is available only in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.appsmith.com/pricing"},"enterprise edition")," for ",(0,i.kt)("strong",{parentName:"p"},"self-hosted")," instances, and only the ",(0,i.kt)("strong",{parentName:"p"},"Superuser")," of your ",(0,i.kt)("strong",{parentName:"p"},"Appsmith Instance")," can set up ",(0,i.kt)("strong",{parentName:"p"},"SAML"),".")),(0,i.kt)("h2",{id:"create-environment"},"Create Environment"),(0,i.kt)("p",null,"Log into your ",(0,i.kt)("a",{parentName:"p",href:"https://www.pingidentity.com/en/account/sign-on.html"},"PingOne")," account. (Please create an account if you don\u2019t have one). On the dashboard, you can see the Home menu, click on home and see the environment listing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Add Environment")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add an Environment",src:n(27582).Z,width:"3000",height:"308"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Build your own Solution,")," select ",(0,i.kt)("inlineCode",{parentName:"li"},"PingOne SSO"),", and click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("h3",{id:"create-application"},"Create Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Connections")," available on the left sidebar and click ",(0,i.kt)("strong",{parentName:"li"},"Applications"),". Create a new application by clicking on ",(0,i.kt)("inlineCode",{parentName:"li"},"(+)"),"."),(0,i.kt)("li",{parentName:"ul"},"Fill in the details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name - Provide a meaningful name"),(0,i.kt)("li",{parentName:"ul"},"Description - Provide a description"),(0,i.kt)("li",{parentName:"ul"},"Select Application Type as SAML Application.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add a new application and choose SAML Application as the application type",src:n(9804).Z,width:"3016",height:"1598"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click Save, and you\u2019ll see a configuration overlay and Configure button. Click on Configure button to complete the SAML configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure SAML",src:n(50757).Z,width:"3008",height:"1646"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can choose one of the available options to configure SAML.")),(0,i.kt)("figure",null,(0,i.kt)("object",{data:"https://www.youtube.com/embed/iMAOqRo2KuI?autoplay=0",width:"750px",height:"400px"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"How to Configure SAML For Ping Identity as IdP?"))),(0,i.kt)("h3",{id:"configure-saml"},"Configure SAML"),(0,i.kt)("p",null,"Ping Identity provides several ways to set up SAML integration. For configuring integration with Appsmith, select ",(0,i.kt)("strong",{parentName:"p"},"Manually Enter")," for ",(0,i.kt)("strong",{parentName:"p"},"Provide Metadata"),". Add the details as per the below mapping:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("strong",{parentName:"li"},"Redirect URL")," (available on Appsmith) to ",(0,i.kt)("strong",{parentName:"li"},"ACS URLs")," field."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("strong",{parentName:"li"},"Entity URL")," (available on Appsmith) to the ",(0,i.kt)("strong",{parentName:"li"},"Entity ID")," field."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save")," to create an application with SAML Configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manually Enter - Redirect and Entity URL",src:n(10897).Z,width:"3020",height:"1638"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You\u2019ll see the application is created with SAML configuration as below")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SAML configuration",src:n(28032).Z,width:"3014",height:"1588"})),(0,i.kt)("h2",{id:"configure-ping-identity-fields-in-appsmith"},"Configure Ping Identity Fields in Appsmith"),(0,i.kt)("p",null,"To complete the SAML setup, you\u2019ll have to register PingID as a provider on the Appsmith platform. Follow the instructions listed below to complete this step:"),(0,i.kt)("h3",{id:"register-identity-provider"},"Register Identity Provider"),(0,i.kt)("p",null,"There are many ways to register the identity provider on Appsmith and complete the SAML Configuration."),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Admin Settings")," >> ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," >> Click ",(0,i.kt)("strong",{parentName:"p"},"Enable.")," Choose the one that best suits you:"),(0,i.kt)("h4",{id:"metadata-url"},"Metadata URL"),(0,i.kt)("p",null,"SAML metadata is an XML document that provides information required for interaction with a SAML-enabled identity or service provider. The Metadata URL is the URL metadata for SAML configuration hosted on a remote server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Metadata URL")," is the quickest and most ",(0,i.kt)("strong",{parentName:"p"},"recommended")," way to set up ",(0,i.kt)("strong",{parentName:"p"},"SAML"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Environment")," >> Select ",(0,i.kt)("strong",{parentName:"li"},"Environment","_","Name")," >> Click ",(0,i.kt)("strong",{parentName:"li"},"Connections")," >> Select ",(0,i.kt)("strong",{parentName:"li"},"Application","_","Name")," >> Click ",(0,i.kt)("strong",{parentName:"li"},"Configuration")," Tab >> copy IDP Metadata URL.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IdP Metadata URL",src:n(72501).Z,width:"3014",height:"1588"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the copied ",(0,i.kt)("strong",{parentName:"li"},"IDP Metadata URL")," to the ",(0,i.kt)("strong",{parentName:"li"},"Metadata URL")," field on Appsmith and click ",(0,i.kt)("inlineCode",{parentName:"li"},"SAVE & RESTART")," button to save the configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Metadata URL",src:n(88916).Z,width:"2344",height:"1646"})),(0,i.kt)("h4",{id:"xml"},"XML"),(0,i.kt)("p",null,"If you don\u2019t have a ",(0,i.kt)("strong",{parentName:"p"},"Metadata URL")," but have a ",(0,i.kt)("strong",{parentName:"p"},"raw SAML Metadata XML")," document, you can choose ",(0,i.kt)("strong",{parentName:"p"},"XML")," to configure SAML."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"XML"),", add the raw XML in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Metadata XML")," field, and click the ",(0,i.kt)("inlineCode",{parentName:"li"},"SAVE & RESTART")," button to save the configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add a raw Metadata XML",src:n(90423).Z,width:"2170",height:"1636"})),(0,i.kt)("h4",{id:"idp-data"},"IdP Data"),(0,i.kt)("p",null,"You can also configure SAML by providing the identity provider(IdP) data. If you have Identity provider\u2019s data like X509 Public Certificate, Email, and more, you can choose this option to configure SAML."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Environment")," >> Select ",(0,i.kt)("strong",{parentName:"li"},"Environment","_","Name")," >> Click ",(0,i.kt)("strong",{parentName:"li"},"Connections")," >> Select ",(0,i.kt)("strong",{parentName:"li"},"Application","_","Name")," >> Click ",(0,i.kt)("strong",{parentName:"li"},"Configuration")," Tab >> Click ",(0,i.kt)("strong",{parentName:"li"},"Download Metadata"),"."),(0,i.kt)("li",{parentName:"ul"},"Add the content of the tags as per the below mapping table on the Appsmith platform:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Appsmith Field Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Metadata XML Tag")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Entity ID")),(0,i.kt)("td",{parentName:"tr",align:null},"\\",(0,i.kt)(c,{mdxType:"EntityDescriptor"})," ",(0,i.kt)("strong",{parentName:"td"},"entityID")," attribute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Single Sign-On URL")),(0,i.kt)("td",{parentName:"tr",align:null},"\\",(0,i.kt)(u,{mdxType:"SingleSignOnService"})," ",(0,i.kt)("strong",{parentName:"td"},"Location")," attribute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"X509 Public Certificate")),(0,i.kt)("td",{parentName:"tr",align:null},"\\",(0,i.kt)(g,{mdxType:"X509Certificate"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Email")),(0,i.kt)("td",{parentName:"tr",align:null},'\\<saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" Name="',(0,i.kt)("strong",{parentName:"td"},"user.email"),'" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"/>')))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IdP Data",src:n(96984).Z,width:"2136",height:"1582"})),(0,i.kt)("h2",{id:"complete-the-saml-configuration"},"Complete the SAML Configuration"),(0,i.kt)("p",null,"Once the server restarts with new configurations, you will see a screen showing the message \u2018Authentication Successful!\u2019."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SAML Configuration Successfully completed",src:n(38762).Z,width:"2530",height:"976"})),(0,i.kt)("p",null,"You\u2019ll see a login screen with the button ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN IN WITH SAML SSO"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SIGN IN WITH SAML SSO - Available on Login Screen",src:n(6964).Z,width:"1124",height:"1350"})))}k.isMDXComponent=!0},96984:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Admin-Settings-Authentication-SAML-IdP-Data-f7e419b0586396695efc3a8b83a98dd1.png"},88916:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Admin-Settings-Authentication-SAML-Metadata-URL-9c31c53f1351a0c9b3c94de738503dc8.png"},90423:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Admin-Settings-Authentication-SAML-XML-8ad59cb9c43e3db28250b0063309e93c.png"},6964:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Login-Screen-Shows-SAML-7771054ef01d60366549e39e26940ba5.png"},38762:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Appsmith-SAML-Authentication-Successful-da8331e0a8d5ad870cf8a1b49f9c06a1.png"},27582:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingID-Add-Environment_(1)-46e05075f29bd2ec1f75327a9b1514be.png"},9804:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingIdentity-SAML-Add-Application-47d0f13a7111fb32ad164a706e6d8714.png"},50757:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingIdentity-SAML-Add-New-Application-02458000d53500d81959bf0dd8da155d.png"},10897:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingIdentity-SAML-Configure-SAML-Redirect-Entity-URL-836ffe73150063ef4893a18f85f346ac.png"},28032:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingIdentity-SAML-Configure-Success-5d91555ea858a57f5624d31a17172b80.png"},72501:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PingIdentity-SAML-Metadata-URL-58dca269b9751e6f3641004093f862cb.png"}}]);