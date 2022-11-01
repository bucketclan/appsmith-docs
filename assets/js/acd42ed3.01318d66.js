"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[5577],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(i),c=a,h=g["".concat(s,".").concat(c)]||g[c]||u[c]||r;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},74083:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={description:"In this guide, you'll learn how to use filters on the Table widget.",sidebar_position:3},l="How to use filters on Appsmith table widget",o={unversionedId:"learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget",id:"learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget",title:"How to use filters on Appsmith table widget",description:"In this guide, you'll learn how to use filters on the Table widget.",source:"@site/docs/learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"In this guide, you'll learn how to use filters on the Table widget.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Writing JavaScript in Appsmith",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/writing-javascript-in-appsmith"},next:{title:"How to build auto-generated forms using List widget",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/build-auto-generated-forms-using-list-widget"}},s={},d=[{value:"Setting Up Appsmith",id:"setting-up-appsmith",level:2},{value:"Adding Table Widget",id:"adding-table-widget",level:2},{value:"Using Filters on Table Widget",id:"using-filters-on-table-widget",level:2},{value:"Removing Filters on Table Widget",id:"removing-filters-on-table-widget",level:2},{value:"Grouping Filters on Table Widget",id:"grouping-filters-on-table-widget",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-filters-on-appsmith-table-widget"},"How to use filters on Appsmith table widget"),(0,a.kt)("h2",{id:"setting-up-appsmith"},"Setting Up Appsmith"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new account on ",(0,a.kt)("a",{parentName:"li",href:"https://www.appsmith.com"},"Appsmith")," (it\u2019s free!), if you are already an existing login to your Appsmith account."),(0,a.kt)("li",{parentName:"ul"},"Create a new application by clicking on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Create New")," button under the Appsmith dashboard."),(0,a.kt)("li",{parentName:"ul"},"We\u2019ll now see a new Appsmith app with an empty canvas and a sidebar with Widgets, APIs, and DB Queries.")),(0,a.kt)("h2",{id:"adding-table-widget"},"Adding Table Widget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," button in the sidebar to add a new widget."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Table")," widget. Drag and drop it into the canvas."),(0,a.kt)("li",{parentName:"ul"},"You can now see the Table widget in the canvas.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding a Table WIdget",src:i(31788).Z,width:"1920",height:"928"})),(0,a.kt)("h2",{id:"using-filters-on-table-widget"},"Using Filters on Table Widget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Filters")," option on the Table widget. A filters popup opens."),(0,a.kt)("li",{parentName:"ul"},"Select the various filters you want to use on the Table widget.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Attribute")," filter from the dropdown, which is the column from the table you want to filter."),(0,a.kt)("li",{parentName:"ul"},"Select the conditions you want to add to the filter from the dropdown."),(0,a.kt)("li",{parentName:"ul"},"Enter the value."))),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Apply")," button to apply the filter."),(0,a.kt)("li",{parentName:"ul"},"You can now see the filtered data in the Table widget.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Using Filters on Table Widget",src:i(74507).Z,width:"1920",height:"928"})),(0,a.kt)("h2",{id:"removing-filters-on-table-widget"},"Removing Filters on Table Widget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," button on the left side of the filter that has been added to remove the filter."),(0,a.kt)("li",{parentName:"ul"},"You can now see the unfiltered data in the Table widget.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Removing Filters on Table Widget",src:i(25243).Z,width:"1920",height:"928"})),(0,a.kt)("h2",{id:"grouping-filters-on-table-widget"},"Grouping Filters on Table Widget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"While a filter has already been added, you can also group the filters by adding a new filter."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Filter")," button to add a new filter."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"AND"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"OR")," Condition from the dropdown."),(0,a.kt)("li",{parentName:"ul"},"Add the new filter following the same steps as above."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Apply")," button to apply the filter."),(0,a.kt)("li",{parentName:"ul"},"You can now see the filtered data in the Table widget.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Grouping Filters on Table Widget",src:i(91304).Z,width:"1920",height:"928"})))}u.isMDXComponent=!0},31788:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/adding-table-widget-c6cba12cf28a7cdf5f848b60b094921a.gif"},91304:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/grouping-filters-on-table-widget-eb637c6b94259210127458b7c8529d54.gif"},25243:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/removing-filters-on-table-widget-3c4427c33ea4540159c64429be56fe8c.gif"},74507:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/using-filters-on-table-widget-c37cd47985d45dda6f8350405240e7c6.gif"}}]);