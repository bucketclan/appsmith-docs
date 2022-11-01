"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[5972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=n,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:2},i="Building a Store Catalog Manager",s={unversionedId:"learning-and-resources/tutorials/building-a-store-catalog-manager/README",id:"learning-and-resources/tutorials/building-a-store-catalog-manager/README",title:"Building a Store Catalog Manager",description:"This tutorial shows you how to build a feature-complete Grocery Catalog application for an online grocery store called Oakry using Appsmith. The application we will be building is a multi-page dashboard used by Oakry's Catalog Managers to:",source:"@site/docs/learning-and-resources/tutorials/building-a-store-catalog-manager/README.md",sourceDirName:"learning-and-resources/tutorials/building-a-store-catalog-manager",slug:"/learning-and-resources/tutorials/building-a-store-catalog-manager/",permalink:"/appsmith-docs/learning-and-resources/tutorials/building-a-store-catalog-manager/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/tutorials/building-a-store-catalog-manager/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating Interactive Views",permalink:"/appsmith-docs/learning-and-resources/tutorials/review-moderator-dashboard/creating-interactive-views-using-lists-and-charts"},next:{title:"Building a Simple UI",permalink:"/appsmith-docs/learning-and-resources/tutorials/building-a-store-catalog-manager/building-a-simple-ui"}},l={},p=[{value:"The Appsmith Environment",id:"the-appsmith-environment",level:2},{value:"Creating your First Page",id:"creating-your-first-page",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"building-a-store-catalog-manager"},"Building a Store Catalog Manager"),(0,n.kt)("p",null,"This tutorial shows you how to build a feature-complete ",(0,n.kt)("strong",{parentName:"p"},"Grocery Catalog")," application for an online grocery store called Oakry using ",(0,n.kt)("a",{parentName:"p",href:"https://app.appsmith.com/"},"Appsmith"),". The application we will be building is a multi-page dashboard used by Oakry's Catalog Managers to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Browse the product catalog"),(0,n.kt)("li",{parentName:"ul"},"Add new products to the catalog"),(0,n.kt)("li",{parentName:"ul"},"Update the details of products in the catalog")),(0,n.kt)("p",null,"The tutorial is organized into three parts & we recommend you follow them in order."),(0,n.kt)("p",null,"You must have an account on either ",(0,n.kt)("a",{parentName:"p",href:"https://app.appsmith.com/user/signup"},"Appsmith Cloud")," (it's free) or your own ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/setup/"},"private instance")," before getting started. Before diving in, let's talk a bit about the Appsmith environment."),(0,n.kt)("h2",{id:"the-appsmith-environment"},"The Appsmith Environment"),(0,n.kt)("p",null,"If this is your first time using Appsmith, you'll need to get acquainted with some initial setup. When you log in, you'll be redirected to ",(0,n.kt)("a",{parentName:"p",href:"https://app.appsmith.com/applications"},"Appsmith Dashboard"),". This home page has an auto-generated workspace called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"<Your first-name>'s apps"))," (referred to as your personal workspace from now on) consisting of multiple templates. In this tutorial, we'll create our Catalog app under the same workspace."),(0,n.kt)("p",null,"Let's now create a new app named ",(0,n.kt)("em",{parentName:"p"},"Catalog Dashboard")," under the personal workspace."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"}," An app on Appsmith is a standalone software-application solving a specific use-case. It can consist of one or more web-pages.")),(0,n.kt)("p",null,"Here are steps to create an app from the Appsmith Dashboard:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Click on the "+New"',"_"," button in the area near your workspace's name on the dashboard."),(0,n.kt)("li",{parentName:"ol"},"You'll be redirected to the configuration page of the newly created app, which will be named ",(0,n.kt)("strong",{parentName:"li"},"Untitled Application 1")," by default."),(0,n.kt)("li",{parentName:"ol"},"Rename your app to ",(0,n.kt)("strong",{parentName:"li"},"Catalog Dashboard")," by clicking on the existing name in the top-left of the screen, and selecting ",(0,n.kt)("strong",{parentName:"li"},"Edit Name"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Build with drag & drop")," button located on the center of the canvas.")),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/TaPgZbHpkQw?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Creating and renaming a brand new application"))),(0,n.kt)("p",null,"The new app comes with auto-generated directories that establish an Appsmith app. Here is a look at the directory structure:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(25477).Z,width:"707",height:"672"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Entity Explorer pane on the left side of the screen is a place where you can create and organize UI widgets and data sources. Additionally, you can also find different integrations that you can utilize under these sections.")),(0,n.kt)("p",null,"Let's see what each of these directories is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Pages")),": This directory is a container for all the web-pages and their configuration of your app. Under this directory, you can create and organize different pages based on the tool or application you're building.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Page1"))," directory contains all entities required to render the corresponding web-page."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Widgets")),": This directory is a container for all the widgets that will be part of the web-page ",(0,n.kt)("inlineCode",{parentName:"li"},"Page1"),". You can think of Widgets as simple UI Components for your web-page, like a form or a table. By default, this directory doesn't have any pre-configured widgets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Datasources")),": The datasources directory is a container consisting of all API's and queries that Page1 connects to."),(0,n.kt)("li",{parentName:"ul"},"Lastly, you can also see all the ",(0,n.kt)("a",{parentName:"li",href:"/appsmith-docs/core-concepts/writing-code/ext-libraries"},"JS libraries supported by Appsmith")," under the ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"External libraries"))," section. These libraries are already imported into your app's environment, ready to be used.")),(0,n.kt)("h2",{id:"creating-your-first-page"},"Creating your First Page"),(0,n.kt)("p",null,"Now that your environment (referred to as an ",(0,n.kt)("strong",{parentName:"p"},"app"),") is set up, you're ready to start doing work."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A page in Appsmith is where the three building blocks of your app - Widgets, APIs, and DB Queries come together to create a view.")),(0,n.kt)("p",null,"The first page you create will list all the products at Oakry. Let's use the default page ",(0,n.kt)("strong",{parentName:"p"},"Page1")," that was created when you created this app. Now, rename the page to ",(0,n.kt)("strong",{parentName:"p"},"ProductListPage")," by double-clicking on ",(0,n.kt)("strong",{parentName:"p"},"Page1"),"."),(0,n.kt)("p",null,"In the next section, let's build a simple UI for our store manager."))}c.isMDXComponent=!0},25477:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/as_storeTutorial_dirs-a5f8b0e9a67e2a82907f55fc7367d24d.png"}}]);