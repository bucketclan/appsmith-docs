"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[6309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4.4},o="Active Directory",p={unversionedId:"getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory",id:"getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory",title:"Active Directory",description:"Azure Active Directory (Azure AD) is a cloud-based identity and access management service. This service helps your employees access external resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications.",source:"@site/docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory.md",sourceDirName:"getting-started/setup/instance-configuration/authentication/openid-connect-oidc",slug:"/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory.md",tags:[],version:"current",sidebarPosition:4.4,frontMatter:{sidebar_position:4.4},sidebar:"tutorialSidebar",previous:{title:"OpenID Connect SSO",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/"},next:{title:"Auth0",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc/auth0"}},s={},c=[{value:"Create an Application",id:"create-an-application",level:3},{value:"Configure Active directory with Appsmith",id:"configure-active-directory-with-appsmith",level:3},{value:"Configure Scopes",id:"configure-scopes",level:3},{value:"What does Appsmith need as part of Scopes?",id:"what-does-appsmith-need-as-part-of-scopes",level:4},{value:"Configure Scopes in Active Directory",id:"configure-scopes-in-active-directory",level:3},{value:"Configure Username Attributes for Active Directory",id:"configure-username-attributes-for-active-directory",level:3},{value:"What does Appsmith need as a Username Attribute?",id:"what-does-appsmith-need-as-a-username-attribute",level:4},{value:"Complete OIDC Setup",id:"complete-oidc-setup",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"active-directory"},"Active Directory"),(0,i.kt)("p",null,"Azure Active Directory (Azure AD) is a cloud-based identity and access management service. This service helps your employees access external resources, such as ",(0,i.kt)("strong",{parentName:"p"},"Microsoft 365"),", the ",(0,i.kt)("strong",{parentName:"p"},"Azure portal,")," and thousands of other ",(0,i.kt)("strong",{parentName:"p"},"SaaS")," applications."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"OpenID Connect is available only in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.appsmith.com/pricing"},(0,i.kt)("strong",{parentName:"a"},"enterprise edition"))," for ",(0,i.kt)("strong",{parentName:"p"},"self-hosted instances,")," and only the ",(0,i.kt)("strong",{parentName:"p"},"Superuser")," of your ",(0,i.kt)("strong",{parentName:"p"},"Appsmith Instance")," can set up OIDC.")),(0,i.kt)("p",null,"To configure OpenID Connect(OIDC) within Appsmith using Active Directory as an OIDC provider, follow these steps:"),(0,i.kt)("h3",{id:"create-an-application"},"Create an Application"),(0,i.kt)("figure",null,(0,i.kt)("object",{data:"https://www.youtube.com/embed/GDOVdeIe3VU?autoplay=0",width:"750px",height:"400px"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Creating an application in Active Directory"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to your ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com/#allservices"},"Azure")," account and click on ",(0,i.kt)("strong",{parentName:"li"},"More services"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on Azure Active Directory and hit \u201c",(0,i.kt)("strong",{parentName:"li"},"+Add"),'.\u201d From the "+Add" dropdown, select \u201c',(0,i.kt)("strong",{parentName:"li"},"App Registration"),".\u201d"),(0,i.kt)("li",{parentName:"ol"},"Under App Registration:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name"),": Give your App a meaningful name."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Supported account types"),': Select \u201cAccounts in this organizational directory only (Default Directory only - Single tenant)."'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Redirect URL"),": select the application type as Web for Platform and add the redirect URL (Copied from the ",(0,i.kt)("a",{parentName:"li",href:"./#capture-redirect-url-for-sso-configuration"},"OIDC window in Appsmith\u2019s Admin Settings"),")."))),(0,i.kt)("li",{parentName:"ol"},"Click on Register to create the application.")),(0,i.kt)("h3",{id:"configure-active-directory-with-appsmith"},"Configure Active directory with Appsmith"),(0,i.kt)("p",null,"On the application homepage, go to the overview tab and perform the following actions under the essentials dropdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the ",(0,i.kt)("strong",{parentName:"li"},"Application (client) ID")," and paste it under the ",(0,i.kt)("strong",{parentName:"li"},"Client ID")," in the OIDC configurations in Appsmith."),(0,i.kt)("li",{parentName:"ul"},"For Client secret, click on \u201cClient credentials: Add a certificate or secret.\u201d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the \u201cCertificates and Secrets window,\u201d go to the ",(0,i.kt)("strong",{parentName:"li"},"Client secret")," tab and click on \u201cNew client secret.\u201d"),(0,i.kt)("li",{parentName:"ul"},"Add the key's description and expiration time in the \u201c",(0,i.kt)("strong",{parentName:"li"},"Add a client secret"),"\u201d pop-up. Click on Save."),(0,i.kt)("li",{parentName:"ul"},"Copy the value of the new Client secret and add it under ",(0,i.kt)("strong",{parentName:"li"},"Client secret")," in the OIDC configurations in Appsmith.")))),(0,i.kt)("figure",null,(0,i.kt)("object",{data:"https://www.youtube.com/embed/AcpfV0sQ26w?autoplay=0",width:"750px",height:"400px"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Creating a new Client secret in Active Directory"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"Endpoints")," tab under App overview and copy the ",(0,i.kt)("strong",{parentName:"p"},"OpenID Connect metadata document")," URL."),(0,i.kt)("object",{data:"https://www.youtube.com/embed/v6N09_Q5LoY?autoplay=0",width:"750px",height:"400px"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the metadata URL in a browser window and copy the following configurations from the above link and add them to OIDC Configurations on Appsmith:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Azure Active Directory Configuration")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"OIDC configuration field in Appsmith")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorization","_","endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token","_","endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"Token URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userinfo","_","endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"User Info URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwks","_","uri"),(0,i.kt)("td",{parentName:"tr",align:null},"JWK Set URL")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Appsmith - OIDC Setup",src:n(64635).Z,width:"2616",height:"1586"})),(0,i.kt)("h3",{id:"configure-scopes"},"Configure Scopes"),(0,i.kt)("p",null,"The scope defines the OpenID Connect (OIDC) scopes that allow you to authorize the access of user details ( after a user is successfully authenticated) like name, email, profile picture, and more. Each scope maps to a set of user attributes and returns its value. You'll see the Scope field below the ",(0,i.kt)("strong",{parentName:"p"},"JSON Web Key Set"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure Scope(s) at Appsmith",src:n(96995).Z,width:"2978",height:"906"})),(0,i.kt)("h4",{id:"what-does-appsmith-need-as-part-of-scopes"},"What does Appsmith need as part of Scopes?"),(0,i.kt)("p",null,"Appsmith needs ",(0,i.kt)("strong",{parentName:"p"},"openId")," as a mandatory scope. You can add more scopes if the need be. You'll have to ensure that the same is available at Active Directory."),(0,i.kt)("h3",{id:"configure-scopes-in-active-directory"},"Configure Scopes in Active Directory"),(0,i.kt)("figure",null,(0,i.kt)("object",{data:"https://www.youtube.com/embed/AcpfV0sQ26w?autoplay=0",width:"750px",height:"400px"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Configuring scopes in Active Directory"))),(0,i.kt)("p",null,"To configure scopes/permissions on Active Directory, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to API permissions on the left panel."),(0,i.kt)("li",{parentName:"ol"},"Click on Add a permission button."),(0,i.kt)("li",{parentName:"ol"},"Under Request API permissions, Select Microsoft Graph and click on Delegated permissions."),(0,i.kt)("li",{parentName:"ol"},"Select the following permissions:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"OpenID")," permissions-",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"email"),(0,i.kt)("li",{parentName:"ol"},"openid"),(0,i.kt)("li",{parentName:"ol"},"Profile"))),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"User")," permissions-",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"User.Read"))))),(0,i.kt)("li",{parentName:"ol"},"Once complete, these scopes will get added to the Active Directory application."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Grant admin consent for Default Directory")," on the top of the table, next to Add a permission button.")),(0,i.kt)("h3",{id:"configure-username-attributes-for-active-directory"},"Configure Username Attributes for Active Directory"),(0,i.kt)("p",null,"The username attributes define the attributes used as usernames for authentication. You can add the attribute to this field that you consider for logging."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Appsmith Username Attribute",src:n(56282).Z,width:"2484",height:"1500"})),(0,i.kt)("h4",{id:"what-does-appsmith-need-as-a-username-attribute"},"What does Appsmith need as a Username Attribute?"),(0,i.kt)("p",null,"For Active Directory, Appsmith considers ",(0,i.kt)("strong",{parentName:"p"},'"sub"'),' address as username. Please ensure that you have added "',(0,i.kt)("strong",{parentName:"p"},"sub"),'" as an attribute in the Username Attribute field.'),(0,i.kt)("h3",{id:"complete-oidc-setup"},"Complete OIDC Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save the changes and restart your application by clicking ",(0,i.kt)("inlineCode",{parentName:"li"},"SAVE & RESTART")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Click on the &quot;SAVE &amp; RESTART&quot; button to complete the setup",src:n(78798).Z,width:"2078",height:"1594"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You\u2019ll see the ",(0,i.kt)("strong",{parentName:"li"},"SIGN IN WITH OIDC SSO")," on the Appsmith\u2019s login screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SIGN IN WITH OIDC SSO - Available on Login Screen",src:n(94154).Z,width:"1056",height:"680"})))}u.isMDXComponent=!0},64635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Admin-Settings-Authentication-OIDC-Setup-0d6aaadc1d8576e45b6f4db2ff4d55ff.png"},78798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Appsmith-OIDC-Setup-Complete-1a3e8c49ab85feacfd80c48a0757d295.png"},94154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Appsmith-SSO-OIDC-Available-76cfa72aa4cc02e9d20509fc3fc006c0.png"},96995:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Appsmith-Scope-Field-fa703d3f740ba741b655ab3b0053064f.png"},56282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OIDC___Active_Directory___Username_Attribute___sub-00c14336ed2c7c350482fd4f4a0394be.png"}}]);