"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3999],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},l),{},{components:o})):n.createElement(m,i({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},16026:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:3},i="Commit and Push",c={unversionedId:"advanced-concepts/version-control-with-git/commit-and-push",id:"advanced-concepts/version-control-with-git/commit-and-push",title:"Commit and Push",description:"After developing your app further, you\u2019d want to sync it with your repository. To sync the app and the repository, commit the changes using the deploy button at the top right or + icon at the bottom left corner.",source:"@site/docs/advanced-concepts/version-control-with-git/commit-and-push.md",sourceDirName:"advanced-concepts/version-control-with-git",slug:"/advanced-concepts/version-control-with-git/commit-and-push",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/commit-and-push",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/version-control-with-git/commit-and-push.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import from Repository",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/import-from-repository"},next:{title:"Working with Branches",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/working-with-branches"}},s={},p=[{value:"Remote is Ahead",id:"remote-is-ahead",level:4},{value:"Merge Conflicts",id:"merge-conflicts",level:4}],l={toc:p};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commit-and-push"},"Commit and Push"),(0,r.kt)("p",null,"After developing your app further, you\u2019d want to sync it with your repository. To sync the app and the repository, commit the changes using the deploy button at the top right or ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," icon at the bottom left corner."),(0,r.kt)("p",null,"In the deploy window, enter your commit message and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit and Push")," to update your repository with the latest changes."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Once you commit and push changes, the changes are also published for the app viewers. Please note that the deployed version of one branch does not affect the other. For example, if you are working on a feature branch ",(0,r.kt)("inlineCode",{parentName:"p"},"f1")," and you deploy the changes from ",(0,r.kt)("inlineCode",{parentName:"p"},"f1")," branch, it will not affect the changes of the master branch")),(0,r.kt)("p",null,"Let\u2019s discuss some common errors you may face during the commit and push process."),(0,r.kt)("h4",{id:"remote-is-ahead"},"Remote is Ahead"),(0,r.kt)("p",null,"In case the remote counterpart of your current branch has some commits that are not present on the local branch, the push command would fail, and you would need to pull the changes to proceed. After pulling the changes, once you click on the pull button, all changes would be finally pushed to the repository, including the last commit."),(0,r.kt)("h4",{id:"merge-conflicts"},"Merge Conflicts"),(0,r.kt)("p",null,"If there are any merge conflicts, you will have to resolve them manually on the repository. Once you fix the conflicts, you can try pulling the changes again."))}h.isMDXComponent=!0}}]);