"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[5237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={description:"We ask you to opt-in to send us regular usage telemetry during the installation process. Even if you don't, we understand and appreciate your security requirements. Read on to understand more."},o="Telemetry",l={unversionedId:"product/telemetry",id:"product/telemetry",title:"Telemetry",description:"We ask you to opt-in to send us regular usage telemetry during the installation process. Even if you don't, we understand and appreciate your security requirements. Read on to understand more.",source:"@site/docs/product/telemetry.md",sourceDirName:"product",slug:"/product/telemetry",permalink:"/product/telemetry",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/product/telemetry.md",tags:[],version:"current",frontMatter:{description:"We ask you to opt-in to send us regular usage telemetry during the installation process. Even if you don't, we understand and appreciate your security requirements. Read on to understand more."},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/product/security"}},p={},s=[{value:"What data is collected?",id:"what-data-is-collected",level:2},{value:"Appsmith Server",id:"appsmith-server",level:3},{value:"Opt-in Telemetry",id:"opt-in-telemetry",level:2},{value:"Appsmith Client",id:"appsmith-client",level:3},{value:"Appsmith Server",id:"appsmith-server-1",level:3},{value:"Disable Telemetry",id:"disable-telemetry",level:2},{value:"Admin Settings",id:"admin-settings",level:3},{value:"Docker.env file",id:"dockerenv-file",level:3}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"telemetry"},"Telemetry"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Data collected is strictly ",(0,r.kt)("strong",{parentName:"p"},"anonymous")," in nature and ",(0,r.kt)("strong",{parentName:"p"},"cannot")," be used to ",(0,r.kt)("strong",{parentName:"p"},"uniquely")," ",(0,r.kt)("strong",{parentName:"p"},"identify")," a ",(0,r.kt)("strong",{parentName:"p"},"user"),".")),(0,r.kt)("h2",{id:"what-data-is-collected"},"What data is collected?"),(0,r.kt)("h3",{id:"appsmith-server"},"Appsmith Server"),(0,r.kt)("p",null,"The Appsmith server sends a keep-alive ping every 6 hours to indicate that it is still running without any errors."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Appsmith is a lightweight proxy and ",(0,r.kt)("strong",{parentName:"p"},"does not capture")," any data returned by your APIs, databases, or third-party tools.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample event")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "context": {\n    "ip": "203.192.213.46",\n    "library": {\n      "name": "unknown",\n      "version": "unknown"\n    }\n  },\n  "event": "Instance Active",\n  "integrations": {},\n  "messageId": "api-1jokIBOkNv8nEmu2fGeNb01G1RC",\n  "properties": {\n    "instanceId": "<uuid>"\n  },\n  "receivedAt": "2020-11-04T08:15:49.537Z",\n  "timestamp": "2020-11-04T08:15:49.537Z",\n  "type": "track",\n  "userId": "203.192.213.46"\n}\n')),(0,r.kt)("h2",{id:"opt-in-telemetry"},"Opt-in Telemetry"),(0,r.kt)("p",null,"The following data is opt-in only. You can say no during the installation process."),(0,r.kt)("h3",{id:"appsmith-client"},"Appsmith Client"),(0,r.kt)("p",null,"The client captures anonymous behavioral data around navigation and clicks. No data from data sources is captured by Appsmith."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample data")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "anonymousId": "0b62ab60-02ad-4f69-a181-d9c5eb2f97fa",\n  "context": {\n    "ip": "49.207.192.209",\n    "library": {\n      "name": "analytics.js",\n      "version": "4.0.4"\n    },\n    "locale": "en-US",\n    "page": {\n      "path": "/applications",\n      "referrer": "https://dev.appsmith.com/applications",\n      "search": "",\n      "title": "Editor | Appsmith",\n      "url": "https://dev.appsmith.com/applications"\n    },\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"\n  },\n  "event": "APPLICATIONS_PAGE_LOAD",\n  "integrations": {},\n  "messageId": "ajs-9176c8f5ebc607524746206ea6aa7502",\n  "originalTimestamp": "2020-11-04T10:52:14.616Z",\n  "properties": {},\n  "receivedAt": "2020-11-04T10:52:14.750Z",\n  "sentAt": "2020-11-04T10:52:14.618Z",\n  "timestamp": "2020-11-04T10:52:14.748Z",\n  "type": "track",\n  "userId": "a3d8b23b9b0cac986af79f4826d009463f8dfc372f188934710115491b7665a1"\n}\n')),(0,r.kt)("h3",{id:"appsmith-server-1"},"Appsmith Server"),(0,r.kt)("p",null,"The server captures anonymous usage data around which plugins are being used. No data from data sources is captured by Appsmith."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "context": {\n    "library": {\n      "name": "analytics-java",\n      "version": "2.1.1"\n    }\n  },\n  "event": "execute_ACTION_TRIGGERED",\n  "integrations": {},\n  "messageId": "0f6b07ee-0717-413-808c-c25b09c0468",\n  "originalTimestamp": "2021-08-24T07:23:35.610Z",\n  "properties": {\n    "appId": "612465f87b2230debedfc6",\n    "appMode": "edit",\n    "appName": "APP1",\n    "datasource": {\n      "name": "Test App"\n    },\n    "instanceId": "612460418944011a10fa5b",\n    "isExampleApp": false,\n    "isSuccessfulExecution": true,\n    "name": "Test",\n    "orgId": "612464f7f230debedfc4",\n    "originService": "appsmith-server",\n    "pageId": "612465802230debedfc8",\n    "pageName": "Page1",\n    "pluginName": "PostgreSQL",\n    "statusCode": "",\n    "timeElapsed": 8,\n    "type": "DB",\n    "username": "70280e5d07e61e5e915e5d26ac8704bbd68d3f75ebad67ba439f4c354d7"\n  },\n  "receivedAt": "2021-08-24T07:23:39.996Z",\n  "sentAt": "2021-08-24T07:23:39.885Z",\n  "timestamp": "2021-08-24T07:23:35.721Z",\n  "type": "track",\n  "userId": "70280e5dd9e61e5e91526ac8704bbd68d3f75ebad67ba439f4c354d7",\n}\n')),(0,r.kt)("h2",{id:"disable-telemetry"},"Disable Telemetry"),(0,r.kt)("p",null,"If you have accidentally opted for Telemetry, you can disable it. You can either disable the telemetry from ",(0,r.kt)("a",{parentName:"p",href:"/product/telemetry#admin-settings"},(0,r.kt)("strong",{parentName:"a"},"Admin Settings"))," or by making changes to the ",(0,r.kt)("a",{parentName:"p",href:"/product/telemetry#docker.env-file"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker.env")))," file."),(0,r.kt)("h3",{id:"admin-settings"},"Admin Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Profile")," >> Click ",(0,r.kt)("strong",{parentName:"li"},"Admin Settings")," >> Click on ",(0,r.kt)("strong",{parentName:"li"},"General")," >> Scroll to ",(0,r.kt)("strong",{parentName:"li"},"Share anonymous usage")," ",(0,r.kt)("strong",{parentName:"li"},"data."))),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/di3CkNX7oUQ?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to disable telemetry from Admin Settings?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toggle to turn off telemetry")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigate to Admin Settings &gt;&gt; General to turn off Telemetry",src:n(85727).Z,width:"2196",height:"870"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click Save & Restart to restart the container for the changes to take effect.")),(0,r.kt)("h3",{id:"dockerenv-file"},"Docker.env file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"directory")," where the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.env")," file is located."),(0,r.kt)("li",{parentName:"ul"},"Open the file in an editor and search for ",(0,r.kt)("inlineCode",{parentName:"li"},"APPSMITH_DISABLE_TELEMETRY")),(0,r.kt)("li",{parentName:"ul"},"Change the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"APPSMITH_DISABLE_TELEMETRY")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"After changes, the property in the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.env")," file should read as below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APPSMITH_DISABLE_TELEMETRY=true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save Changes")),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/a8_S2fhskW4?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to disable telemetry?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the terminal and navigate to the location where the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file is located ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"(docker host directory)")),"."),(0,r.kt)("li",{parentName:"ul"},"Copy and paste the below command to restart the container:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose rm -fsv appsmith && sudo docker-compose up -d\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once the container restarts, Appsmith is up and running.")),(0,r.kt)("p",null,"You can verify that the telemetry is turned off by navigating to ",(0,r.kt)("a",{parentName:"p",href:"/product/telemetry#admin-settings"},(0,r.kt)("strong",{parentName:"a"},"Admin Settings"))," and checking the toggle for ",(0,r.kt)("strong",{parentName:"p"},"Share anonymous usage")," ",(0,r.kt)("strong",{parentName:"p"},"data.")))}c.isMDXComponent=!0},85727:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Telemetry__Admin_Settings__Turn_off_telemetry-3bd1a66492e9cb1931fb1843c2f53ee1.png"}}]);