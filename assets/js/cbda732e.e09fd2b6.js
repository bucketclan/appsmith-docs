"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Pull & Sync",c={unversionedId:"advanced-concepts/version-control-with-git/pull-and-sync",id:"advanced-concepts/version-control-with-git/pull-and-sync",title:"Pull & Sync",description:"If your local branch is not in sync with the remote branch of the git repository, you pull the latest changes by clicking on the pull button at the bottom left corner.",source:"@site/docs/advanced-concepts/version-control-with-git/pull-and-sync.md",sourceDirName:"advanced-concepts/version-control-with-git",slug:"/advanced-concepts/version-control-with-git/pull-and-sync",permalink:"/advanced-concepts/version-control-with-git/pull-and-sync",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/version-control-with-git/pull-and-sync.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Working with Branches",permalink:"/advanced-concepts/version-control-with-git/working-with-branches"},next:{title:"Merging Branches",permalink:"/advanced-concepts/version-control-with-git/merging-branches"}},l={},s=[{value:"<strong>Conflicts</strong>",id:"conflicts",level:4},{value:"Discard and pull changes",id:"discard-and-pull-changes",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull--sync"},"Pull & Sync"),(0,o.kt)("p",null,"If your local branch is not in sync with the remote branch of the git repository, you pull the latest changes by clicking on the pull button at the bottom left corner."),(0,o.kt)("h4",{id:"conflicts"},(0,o.kt)("strong",{parentName:"h4"},"Conflicts")),(0,o.kt)("p",null,"Consider a scenario where multiple users work on a single branch, say, the ",(0,o.kt)("em",{parentName:"p"},"feature/f1")," branch (we don\u2019t recommend this approach), and update the same resources from 2 different Appsmith instances (e.g., cloud and self-hosted). Now whoever commits later will face the issue of a merge conflict as the user who tries to commit and push will have to pull the changes from remote first."),(0,o.kt)("p",null,"You can resolve it in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new branch in appsmith from the conflicted branch (feature/f1","_","conflicted);"),(0,o.kt)("li",{parentName:"ul"},"Resolve the conflicts on the remote repository (Between origin/feature/f1 and origin/feature/f1","_","conflicted) by creating a pull request with origin/feature/f1 as a base branch;"),(0,o.kt)("li",{parentName:"ul"},"Once the conflicts are resolved merge this new branch (origin/feature/f1","_","conflicted) into the old branch(origin/feature/f1);")),(0,o.kt)("p",null,"(origin/feature/f1 <- origin/feature/f1","_","conflicted)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pull the branch (feature/f1) again in Appsmith\u2019s local repository;"),(0,o.kt)("li",{parentName:"ul"},"Delete branch origin/feature/f1","_","conflicted on the remote repository;"),(0,o.kt)("li",{parentName:"ul"},"Run sync branch flow to remove feature/f1","_","conflicted< from the local repository.")),(0,o.kt)("h2",{id:"discard-and-pull-changes"},"Discard and pull changes"),(0,o.kt)("p",null,"While developing an application in Appsmith, sometimes, you may end up in a situation where you want to discard the current changes and revert to the previous stable version. Now, with discard and pull functionality, you can remove the unwanted changes, and pull the changes present in the remote repository so that your application will always be in sync."),(0,o.kt)("p",null,"Discarding changes will result in the following scenarios: Any resources added after the last commit will be removed. Any resources deleted after the last commit will be restored. Changes made to any resource after the last commit will be removed."),(0,o.kt)("p",null,"Note: Resources refers to pages, JSObjects, queries, etc"))}p.isMDXComponent=!0}}]);