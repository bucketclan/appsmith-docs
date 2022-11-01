"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8914],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>u});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},c=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=l(o),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return o?n.createElement(h,r(r({ref:e},c),{},{components:o})):n.createElement(h,r({ref:e},c))}));function u(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,r=new Array(i);r[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,r[1]=p;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},15851:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_position:2},r="Migrate Applications",p={unversionedId:"advanced-concepts/more/backup-restore",id:"advanced-concepts/more/backup-restore",title:"Migrate Applications",description:"On Appsmith, you can migrate all Appsmith data from one instance to another or just migrate necessary applications.",source:"@site/docs/advanced-concepts/more/backup-restore.md",sourceDirName:"advanced-concepts/more",slug:"/advanced-concepts/more/backup-restore",permalink:"/appsmith-docs/advanced-concepts/more/backup-restore",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/more/backup-restore.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Connect via localhost",permalink:"/appsmith-docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith"},next:{title:"Keyboard Shortcuts",permalink:"/appsmith-docs/advanced-concepts/more/keyboard-shortcuts"}},s={},l=[{value:"<strong>Steps to Migrate entire Appsmith Data onto instances:</strong>",id:"steps-to-migrate-entire-appsmith-data-onto-instances",level:3},{value:"<strong>Backup the old VM</strong>",id:"backup-the-old-vm",level:4},{value:"<strong>Restore the backup on the new VM:</strong>",id:"restore-the-backup-on-the-new-vm",level:2},{value:"Import/Export Applications",id:"importexport-applications",level:2},{value:"Export Application",id:"export-application",level:3},{value:"Import Application",id:"import-application",level:3},{value:"Import from an application JSON file",id:"import-from-an-application-json-file",level:4},{value:"Import from a Git repository",id:"import-from-a-git-repository",level:3}],c={toc:l};function m(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-applications"},"Migrate Applications"),(0,a.kt)("p",null,"On Appsmith, you can migrate all Appsmith data from one instance to another or just migrate necessary applications."),(0,a.kt)("h3",{id:"steps-to-migrate-entire-appsmith-data-onto-instances"},(0,a.kt)("strong",{parentName:"h3"},"Steps to Migrate entire Appsmith Data onto instances:")),(0,a.kt)("h4",{id:"backup-the-old-vm"},(0,a.kt)("strong",{parentName:"h4"},"Backup the old VM")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dump the mongo data from the old VM via the command: ",(0,a.kt)("inlineCode",{parentName:"li"},'mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/tmp/appsmith-mongo-dump')),(0,a.kt)("li",{parentName:"ol"},"Copy the dump file to the new VM"),(0,a.kt)("li",{parentName:"ol"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"li"},"encryption.env")," and note the values in this file. The values here are important for Appsmith to be able to read sensitive information in the new installation.")),(0,a.kt)("h2",{id:"restore-the-backup-on-the-new-vm"},(0,a.kt)("strong",{parentName:"h2"},"Restore the backup on the new VM:")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The restore would end up deleting all the existing data in the mongo database of the newly installed appsmith instance")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Appsmith via the install.sh script."),(0,a.kt)("li",{parentName:"ol"},"Restore the dump on the newly created mongo container via the command: ",(0,a.kt)("inlineCode",{parentName:"li"},"mongorestore --drop /tmp/appsmith-mongo-dump -d appsmith --uri=mongodb://<rootUsername>:<rootPassword>@localhost/appsmith")),(0,a.kt)("li",{parentName:"ol"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"li"},"encryption.env")," and change the variables ",(0,a.kt)("inlineCode",{parentName:"li"},"APPSMITH_ENCRYPTION_PASSWORD")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"APPSMITH_ENCRYPTION_SALT")," to the same ones as the old VM. This is important because sensitive data in Mongo is encrypted using these credentials. Without this, you risk corrupting any passwords you've saved."),(0,a.kt)("li",{parentName:"ol"},"Restart the Appsmith system using the command: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo docker-compose down && sudo docker-compose up -d"))),(0,a.kt)("h2",{id:"importexport-applications"},"Import/Export Applications"),(0,a.kt)("p",null,"You can import or export the desired application to any workspace, either in the same or a different Appsmith instance."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Applications are forward compatible from Appsmith version 1.6.9."),(0,a.kt)("p",{parentName:"admonition"},"Applications built in an older version of an Appsmith instance will work when imported into a newer version of an Appsmith instance.")),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/2JuJ0v56ztw",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Import/Export Apps on Appsmith"))),(0,a.kt)("h3",{id:"export-application"},"Export Application"),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/advanced-concepts/version-control-with-git/connecting-to-git-repository"},"sync")," your application to a ",(0,a.kt)("a",{parentName:"p",href:"../version-control-with-git/"},"Git repository")," or export your application as a JSON file to your system."),(0,a.kt)("p",null,"Follow the steps below to export your application as a JSON file:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your workspace homepage and navigate to the app you want to export."),(0,a.kt)("li",{parentName:"ol"},"Click on the menu button at the bottom of the Application card and select \u201c",(0,a.kt)("strong",{parentName:"li"},"Export"),".\u201d")),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/lBMP9MQHdCQ",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"How to export an app"))),(0,a.kt)("h3",{id:"import-application"},"Import Application"),(0,a.kt)("p",null,"You can choose one of the below ways to import an Appsmith application.-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/appsmith-docs/advanced-concepts/more/backup-restore#import-from-a-git-repository"},"Import from a Git Repository")," ;"),(0,a.kt)("li",{parentName:"ol"},"From an application JSON file.")),(0,a.kt)("h4",{id:"import-from-an-application-json-file"},"Import from an application JSON file"),(0,a.kt)("p",null,"If you have exported an application as a JSON file, you can import the same application to any workspace or Appsmith instance."),(0,a.kt)("p",null,"Follow the steps below to import an exported (JSON file) application -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your workspace homepage and navigate to the menu button of the workspace."),(0,a.kt)("li",{parentName:"ol"},"Click on the menu button (next to +NEW) and select the \u201c",(0,a.kt)("strong",{parentName:"li"},"Import"),"\u201d option."),(0,a.kt)("li",{parentName:"ol"},"In the import pop-up window, click on import from file and pick the JSON file from your system\u2019s memory."),(0,a.kt)("li",{parentName:"ol"},"Once the file is imported, you will see a datasource configuration modal (if the imported app had a datasource connection) where you can configure the datasources used by the imported application.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"As a security measure, we do not export any config values used for the connecting datasource during the import operation. So either you have to configure it in the datasource configuration modal, or you can skip this and choose to configure it later")),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/bhzGIdXq2Z4",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"How to import an app"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When you import the application into the destination instance/ workspace, it's a new one, meaning source and destination applications are detached, and changes will not be synced.")),(0,a.kt)("h3",{id:"import-from-a-git-repository"},"Import from a Git repository"),(0,a.kt)("p",null,"If you have an application connected to Git version control in Appsmith, you can import the Appsmith application from your Git repository into any workspace. For more information, check out ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/advanced-concepts/version-control-with-git/import-from-repository"},"Import from Repository"),"."))}m.isMDXComponent=!0}}]);