"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},i="Merging Branches",c={unversionedId:"advanced-concepts/version-control-with-git/merging-branches",id:"advanced-concepts/version-control-with-git/merging-branches",title:"Merging Branches",description:"When you want to merge your branch with the base branch -",source:"@site/docs/advanced-concepts/version-control-with-git/merging-branches.md",sourceDirName:"advanced-concepts/version-control-with-git",slug:"/advanced-concepts/version-control-with-git/merging-branches",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/merging-branches",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/version-control-with-git/merging-branches.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pull & Sync",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/pull-and-sync"},next:{title:"Disconnect the Git Repository",permalink:"/appsmith-docs/advanced-concepts/version-control-with-git/disconnect-the-git-repository"}},l={},s=[{value:"<strong>Conflicts</strong>",id:"conflicts",level:4}],p={toc:s};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merging-branches"},"Merging Branches"),(0,a.kt)("p",null,"When you want to merge your branch with the base branch -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the Merge button at the bottom left corner of the screen. It will open the merge tab"),(0,a.kt)("li",{parentName:"ol"},"Select your base branch and check the merge status",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"base")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," branches shouldn't have any uncommitted changes."),(0,a.kt)("li",{parentName:"ol"},"The remote counterpart of the ",(0,a.kt)("inlineCode",{parentName:"li"},"base")," branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"base")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," branch shouldn't have any conflicting changes."))),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Merge Changes")," if the merge status check is successful.")),(0,a.kt)("h4",{id:"conflicts"},(0,a.kt)("strong",{parentName:"h4"},"Conflicts")),(0,a.kt)("p",null,"Consider a scenario where the ",(0,a.kt)("strong",{parentName:"p"},"user1")," wants to develop a new feature and have a single branch  main ",(0,a.kt)("strong",{parentName:"p"},".")," As a general practice user creates  feature/f1  from the main branch. At the same time, ",(0,a.kt)("strong",{parentName:"p"},"user2")," updates the  main  branch with the same resources like page, query, or JSObject that ",(0,a.kt)("strong",{parentName:"p"},"user1")," modifies on the  feature/f1  branch. If ",(0,a.kt)("strong",{parentName:"p"},"user1")," tries to merge  feature/f1  to  main ",(0,a.kt)("strong",{parentName:"p"},",")," it leads to a merge conflict."),(0,a.kt)("p",null,"You can resolve it in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a pull request with main  as the base branch;"),(0,a.kt)("li",{parentName:"ul"},"Resolve the conflicts on remote branches (Between origin/f1  and  origin/main );"),(0,a.kt)("li",{parentName:"ul"},"Once the conflicts are resolved, merge this new branch(origin/f1 ) into the old branch( origin/main );")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"( origin/main  **<-** origin/f1 )")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pull the main branch again in your app. Now you should have all the changes from the  feature/f1  branch;"),(0,a.kt)("li",{parentName:"ul"},"Delete branch  origin/feature/f1  on remote;"),(0,a.kt)("li",{parentName:"ul"},"Sync branch with remote to remove  feature/f1  from the local repository.")))}h.isMDXComponent=!0}}]);