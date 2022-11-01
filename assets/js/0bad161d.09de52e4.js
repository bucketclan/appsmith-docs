"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[7521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:13},o="Redis",s={unversionedId:"reference/datasources/querying-redis",id:"reference/datasources/querying-redis",title:"Redis",description:"The following document assumes that you understand the basics of connecting to databases on Appsmith. If not, please go over them before reading further.",source:"@site/docs/reference/datasources/querying-redis.md",sourceDirName:"reference/datasources",slug:"/reference/datasources/querying-redis",permalink:"/reference/datasources/querying-redis",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/datasources/querying-redis.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/reference/datasources/querying-postgres"},next:{title:"Redshift",permalink:"/reference/datasources/querying-redshift"}},c={},l=[{value:"Connection Settings",id:"connection-settings",level:2},{value:"Querying Redis",id:"querying-redis",level:2},{value:"Checking connection",id:"checking-connection",level:3},{value:"Inserting a key",id:"inserting-a-key",level:3},{value:"Retrieving a key",id:"retrieving-a-key",level:3},{value:"Using Queries in applications",id:"using-queries-in-applications",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis"},"Redis"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The following document assumes that you understand the ",(0,i.kt)("a",{parentName:"p",href:"/core-concepts/connecting-to-data-sources/connecting-to-databases#connecting-to-a-database"},"basics of connecting to databases on Appsmith"),". If not, please go over them before reading further.")),(0,i.kt)("h2",{id:"connection-settings"},"Connection Settings"),(0,i.kt)("p",null,"Appsmith needs the following information to connect to a Redis instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Click to expand",src:n(45008).Z,width:"2170",height:"954"})),(0,i.kt)("p",null,'After filling up the three fields as described above, click on the "Test" button to verify the configuration and click "Save".'),(0,i.kt)("h2",{id:"querying-redis"},"Querying Redis"),(0,i.kt)("p",null,"The Redis query pane can be used to run any of the commands supported by Redis. The response from this command is displayed in the result window. Please refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/commands"},"documentation")," for the list of commands that are supported. A few examples are listed below."),(0,i.kt)("h3",{id:"checking-connection"},"Checking connection"),(0,i.kt)("p",null,"The connection to a Redis instance can be verified using a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"PING")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PING\n")),(0,i.kt)("h3",{id:"inserting-a-key"},"Inserting a key"),(0,i.kt)("p",null,"A new key value pair can be inserted into the cache using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SET")," command as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET key_name new_value\n")),(0,i.kt)("h3",{id:"retrieving-a-key"},"Retrieving a key"),(0,i.kt)("p",null,"Stored key value pairs can be retrieved using the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET key_name\n")),(0,i.kt)("h2",{id:"using-queries-in-applications"},"Using Queries in applications"),(0,i.kt)("p",null,"Once you have successfully run a Query, you can use it in your application to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/displaying-data-read/"},"Display Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/capturing-data-write/"},"Capture Data"))))}u.isMDXComponent=!0},45008:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redis-datasource-form-77a4c048a9b41dbd452e3eca32be5aae.png"}}]);