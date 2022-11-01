"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[1924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),u=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=l;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},62507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:10},s="Returning data from a stored procedure",i={unversionedId:"learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure",id:"learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure",title:"Returning data from a stored procedure",description:"If your stored procedure is returning a set of rows, it may not be displayed inside appsmith today due to some limitations in the platform. To get around these limitations, we need to add a dummy select statement at the end of the p rocedure call to return the results of the procedure.",source:"@site/docs/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Whitelist Appsmith on AWS",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/aws-whitelist"},next:{title:"How to use MS SQL as a data source on Appsmith",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/use-mssql-as-data-source"}},d={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"returning-data-from-a-stored-procedure"},"Returning data from a stored procedure"),(0,n.kt)("p",null,"If your stored procedure is returning a set of rows, it may not be displayed inside appsmith today due to some limitations in the platform. To get around these limitations, we need to add a dummy select statement at the end of the p rocedure call to return the results of the procedure."),(0,n.kt)("p",null,"The query would look like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"call test2('BA01'); \nselect \"dummy\" as dummy where false;\n")))}p.isMDXComponent=!0}}]);