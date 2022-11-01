"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2884],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||l[m]||i;return t?n.createElement(h,o(o({ref:r},d),{},{components:t})):n.createElement(h,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29193:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={sidebar_position:1},o="Action Errors",s={unversionedId:"help-and-support/troubleshooting-guide/action-errors/README",id:"help-and-support/troubleshooting-guide/action-errors/README",title:"Action Errors",description:")",source:"@site/docs/help-and-support/troubleshooting-guide/action-errors/README.md",sourceDirName:"help-and-support/troubleshooting-guide/action-errors",slug:"/help-and-support/troubleshooting-guide/action-errors/",permalink:"/help-and-support/troubleshooting-guide/action-errors/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/help-and-support/troubleshooting-guide/action-errors/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/help-and-support/troubleshooting-guide/"},next:{title:"Datasource Errors",permalink:"/help-and-support/troubleshooting-guide/action-errors/datasource-errors"}},p={},c=[{value:"Timeout Error",id:"timeout-error",level:3},{value:"Configuration Error",id:"configuration-error",level:3},{value:"Mandatory Parameter Empty Error",id:"mandatory-parameter-empty-error",level:3},{value:"Missing Query Error",id:"missing-query-error",level:3},{value:"Invalid Query Error",id:"invalid-query-error",level:3},{value:"Encoding Error",id:"encoding-error",level:3},{value:"Invalid Number Error",id:"invalid-number-error",level:3},{value:"JSON Parsing Error",id:"json-parsing-error",level:3}],d={toc:c};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"action-errors"},"Action Errors"),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/9YyHwmrkztE",width:"750px",height:"400px"}),")",(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Error Handling for APIs & Queries"))),(0,a.kt)("h3",{id:"timeout-error"},"Timeout Error"),(0,a.kt)("p",null,"If your API / DB Query times out, it could be due to one of the following reasons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your API / Database is behind a VPC which is not accessible from the appsmith Instance. This can be fixed by ",(0,a.kt)("a",{parentName:"li",href:"/learning-and-resources/how-to-guides/aws-whitelist"},"whitelisting the appsmith instance")," in your database or VPC."),(0,a.kt)("li",{parentName:"ul"},"Your API / Query is taking too long to respond. This can be fixed by fetching smaller datasets using")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination"},"server-side pagination")," or increasing the timeout of the ",(0,a.kt)("a",{parentName:"p",href:"/core-concepts/connecting-to-data-sources/authentication/connect-to-apis"},"API")," / ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"Query")," in the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/#setting-up-a-query"},"settings")," section."),(0,a.kt)("h3",{id:"configuration-error"},"Configuration Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"getUsers failed to execute. Please check its configuration\n")),(0,a.kt)("p",null,"This message indicates an error in the configuration of the action. You can navigate to the ",(0,a.kt)("a",{parentName:"p",href:"/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#api-editor"},"API")," / ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"Query")," in this state and see the error it encountered. If the error occurred intermittently, it is likely due to a value in the configuration not being available at the time that the API / Query was run."),(0,a.kt)("h3",{id:"mandatory-parameter-empty-error"},"Mandatory Parameter Empty Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Mandatory parameters 'Action' and 'Bucket Name' are missing\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Required parameter 'File Path' is missing\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Missing action name (like `ListTables`, `GetItem` etc.)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Document/Collection path cannot be empty\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Missing Firestore method\n")),(0,a.kt)("p",null,"A message of this type means that at least one of the mandatory/required fields in the query editor form is missing."),(0,a.kt)("p",null,"This error can be fixed by editing the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query editor form")," and providing the parameter mentioned in the error message."),(0,a.kt)("h3",{id:"missing-query-error"},"Missing Query Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Missing required parameter: Query\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"needs a non-empty body to work\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Body is null or empty\n")),(0,a.kt)("p",null,"Any one of these messages indicated that the body of the query has been left empty."),(0,a.kt)("p",null,"This error can be fixed by editing the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query form")," and providing a query body."),(0,a.kt)("h3",{id:"invalid-query-error"},"Invalid Query Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Not a valid Redis command\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Query preparation failed while inserting value\n")),(0,a.kt)("p",null,"A message of this type indicates that the syntax of the query body is invalid."),(0,a.kt)("p",null,"This error can be fixed by providing a valid syntax in the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query editor form"),"."),(0,a.kt)("h3",{id:"encoding-error"},"Encoding Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"File content is not base64 encoded\n")),(0,a.kt)("p",null,"This message indicates that the query was expecting a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Base64"},"base64 encoded")," value as content body, but the actual value passed to it was not base64 encoded."),(0,a.kt)("p",null,"This error can be fixed by passing a base64 encoded value as a file content parameter in the query."),(0,a.kt)("h3",{id:"invalid-number-error"},"Invalid Number Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Parameter 'Expiry Duration of Signed URL' is NOT a number\n")),(0,a.kt)("p",null,"This message indicates that the query parameter mentioned in the message expects a number but a non-numerical value has been provided in the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query form"),"."),(0,a.kt)("p",null,"This error can be fixed by editing the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query form")," and providing a valid number as input for the mentioned parameter."),(0,a.kt)("h3",{id:"json-parsing-error"},"JSON Parsing Error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error parsing the JSON body\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error converting array to ND-JSON\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Unable to parse condition value as a JSON list\n")),(0,a.kt)("p",null,"This message indicates that the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/whatis/whatis_json.asp"},"JSON")," string passed to the query as a parameter is not a valid JSON string."),(0,a.kt)("p",null,"This error can be fixed by editing the ",(0,a.kt)("a",{parentName:"p",href:"../../../core-concepts/data-access-and-binding/querying-a-database/"},"query form")," and passing a valid JSON string as a parameter."))}l.isMDXComponent=!0}}]);