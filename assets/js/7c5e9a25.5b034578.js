"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[7230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:1},o="Supervisor",i={unversionedId:"getting-started/setup/instance-management/supervisor",id:"getting-started/setup/instance-management/supervisor",title:"Supervisor",description:"The container runs multiple processes, including the Appsmith server, Nginx, MongoDB, etc., inside a single Docker container. These processes are started and managed by Supervisor.",source:"@site/docs/getting-started/setup/instance-management/supervisor.md",sourceDirName:"getting-started/setup/instance-management",slug:"/getting-started/setup/instance-management/supervisor",permalink:"/appsmith-docs/getting-started/setup/instance-management/supervisor",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/instance-management/supervisor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Instance Management",permalink:"/appsmith-docs/getting-started/setup/instance-management/"},next:{title:"Appsmithctl",permalink:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supervisor"},"Supervisor"),(0,a.kt)("p",null,"The container runs multiple processes, including the Appsmith server, Nginx, MongoDB, etc., inside a single Docker container. These processes are started and managed by ",(0,a.kt)("a",{parentName:"p",href:"http://supervisord.org"},"Supervisor"),"."),(0,a.kt)("p",null,"Supervisor comes with a web interface for managing the various processes, available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost/supervisor"},"http://localhost/supervisor"),", as well as a command-line interface towards the same goal."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The credentials for supervisor access is defined by the environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"APPSMITH_SUPERVISOR_USER")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"APPSMITH_SUPERVISOR_PASSWORD")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"stacks/configuration/docker.env")," file.")),(0,a.kt)("p",null,"Here's a screenshot of the web interface listing all the processes managed:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith_supervisord_ui.png",alt:null})),(0,a.kt)("p",null,"The command-line interface can also be used to perform operations like restarting the Appsmith server, restarting Nginx, etc. For example, the following command (run in the installation folder) can be used to get the status of all running processes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith supervisorctl status\n")),(0,a.kt)("p",null,"Or to view the last few lines of stderr output of one of the processes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith supervisorctl tail backend stderr\n")),(0,a.kt)("p",null,"To learn more, please refer to ",(0,a.kt)("a",{parentName:"p",href:"http://supervisord.org/running.html#supervisorctl-actions"},"Supervisor's documentation")," on what actions are available to be performed by the command-line interface."))}u.isMDXComponent=!0}}]);