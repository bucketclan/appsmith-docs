"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"Whitelist the IP of the appsmith instance in your AWS database to access it from within your applications",sidebar_position:9},s="Whitelist Appsmith on AWS",i={unversionedId:"learning-and-resources/how-to-guides/aws-whitelist",id:"learning-and-resources/how-to-guides/aws-whitelist",title:"Whitelist Appsmith on AWS",description:"Whitelist the IP of the appsmith instance in your AWS database to access it from within your applications",source:"@site/docs/learning-and-resources/how-to-guides/aws-whitelist.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/aws-whitelist",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/aws-whitelist",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/aws-whitelist.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Whitelist the IP of the appsmith instance in your AWS database to access it from within your applications",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"OAuth2 Authorization for Google Sheets",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/oauth2-authorization-for-google-sheets"},next:{title:"Returning data from a stored procedure",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure"}},p={},c=[],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whitelist-appsmith-on-aws"},"Whitelist Appsmith on AWS"),(0,o.kt)("p",null,"Whitelist the appsmith IP address with the following steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Log in to the AWS")," ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/console/"},(0,o.kt)("strong",{parentName:"a"},"console"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Navigate to the RDS Console")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Choose the RDS database from the list of instances")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click to expand",src:n(98545).Z,width:"700",height:"262"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Select the security group linked to your RDS(Make sure the RDS instance is publicly accessible)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click to expand",src:n(29756).Z,width:"700",height:"591"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Click on \u201cInbound\u201d at the bottom and then click \u201cEdit\u201d")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click to expand",src:n(35489).Z,width:"700",height:"469"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Select the port to whitelist. If you are using the default MySQL port then selecting the \u201cMYSQL/Aurora\u201d option works")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click to expand",src:n(53725).Z,width:"700",height:"205"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7. Set")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Source"))," ",(0,o.kt)("strong",{parentName:"p"},"to")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Custom"))," ",(0,o.kt)("strong",{parentName:"p"},"and enter the Appsmith IP address 18.223.74.85/32 and 3.131.104.27/32")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8. Click")," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Save"))),(0,o.kt)("p",null,"Your database should now be accessible from your EC2 instance. Read more about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html"},"security group rules"),"."))}u.isMDXComponent=!0},35489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chose_inbound-a7dc3181a6a367c7c2d774c56b0f8ae0.png"},98545:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chose_rds-444684e83cab23239eed754b243c56ea.png"},29756:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/chose_sg-ad6350d25e081382f1851c4fb25c9eea.png"},53725:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edit_inbound-c8c85e8c480bde8c0a2878f1223cf348.png"}}]);