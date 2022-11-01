"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2036],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3697:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l="Checkbox Group",i={unversionedId:"reference/widgets/checkbox-group",id:"reference/widgets/checkbox-group",title:"Checkbox Group",description:"Checkbox group widget allows users to configure multiple checkboxes together.",source:"@site/docs/reference/widgets/checkbox-group.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/checkbox-group",permalink:"/appsmith-docs/reference/widgets/checkbox-group",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/checkbox-group.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/appsmith-docs/reference/widgets/checkbox"},next:{title:"Code Scanner",permalink:"/appsmith-docs/reference/widgets/code-scanner"}},p={},s=[{value:"Properties",id:"properties",level:3},{value:"Label",id:"label",level:3},{value:"<strong>Text</strong>",id:"text",level:4},{value:"Position",id:"position",level:4},{value:"Actions",id:"actions",level:2}],u={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"checkbox-group"},"Checkbox Group"),(0,r.kt)("p",null,"Checkbox group widget allows users to configure multiple checkboxes together."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/-7cvZ2yCgtE?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to use Checkbox Group Widget"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a list of options for a user to select. Values must be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default Selected Values")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets values of the options checked by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label")),(0,r.kt)("td",{parentName:"tr",align:null},"It is a group of properties that allows you to provide a name to the field and define the placement of the widget. ",(0,r.kt)("a",{parentName:"td",href:"/appsmith-docs/reference/widgets/checkbox-group#label"},"Learn more"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Inline")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the checkbox buttons are to be displayed inline horizontally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes input to the widget mandatory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls the visibility of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select All Options")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls whether select all control is shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables input to this widget.")))),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:"),(0,r.kt)("h4",{id:"text"},(0,r.kt)("strong",{parentName:"h4"},"Text")),(0,r.kt)("p",null,'It allows you to set the display name for the Checkbox Group. For example, if you want the user to give their consent to the terms & conditions, you can enter the text as "Terms & Conditions."'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can leave the text empty if you don't want any display name for your Checkbox Group widget.")),(0,r.kt)("h4",{id:"position"},"Position"),(0,r.kt)("p",null,"It allows you to specify the placement of the label. You can select one of the available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Top - It allows you to align the text at the top of the Checkbox Group."),(0,r.kt)("li",{parentName:"ul"},"Left - It aligns the text to the left of the Checkbox Group. When you select ",(0,r.kt)("strong",{parentName:"li"},"Left")," alignment, you get additional settings that you can use to control the alignment and define the text's width.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Checkbox Group. You can choose:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left - It aligns the text to the widget's left boundary that is away from the Checkbox Group."),(0,r.kt)("li",{parentName:"ul"},"Right - It aligns the text closer to the Checkbox Group."))),(0,r.kt)("li",{parentName:"ul"},"Width - With the help of width, you can define the ",(0,r.kt)("strong",{parentName:"li"},"number of columns")," in the ",(0,r.kt)("strong",{parentName:"li"},"grid")," that surrounds the widget. You can specify how close or far the text can be placed to the Checkbox Group."))),(0,r.kt)("li",{parentName:"ul"},"Auto - It automatically adjusts the position of the text based on the Checkbox Group's height.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.")),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/KVCjIWWzO5o?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to set the label properties?"))),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"onSelectionChange")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the action to be run when the check state is changed. See a list of ",(0,r.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),".")))))}c.isMDXComponent=!0}}]);