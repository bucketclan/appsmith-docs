"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[5399],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),g=a,c=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(c,l(l({ref:e},d),{},{components:n})):r.createElement(c,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96203:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="Rating",o={unversionedId:"reference/widgets/rating",id:"reference/widgets/rating",title:"Rating",description:"The Rating widget is used to perform a quick rating operation on something.",source:"@site/docs/reference/widgets/rating.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/rating",permalink:"/appsmith-docs/reference/widgets/rating",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/rating.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Radio Group",permalink:"/appsmith-docs/reference/widgets/radio-group"},next:{title:"Rich Text Editor",permalink:"/appsmith-docs/reference/widgets/rich-text-editor"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Styles",id:"styles",level:3}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rating"},"Rating"),(0,a.kt)("p",null,"The Rating widget is used to perform a quick rating operation on something."),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/ssm7TYCQtfo?autoplay=0",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"How to use Rating Widget"))),(0,a.kt)("p",null,"Use the Rate component to rate any sort of information from the connected data source. It's customizable and features rich."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,a.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,a.kt)("p",null,"These properties allow you to edit the Rating widget. All these properties are present in the property pane of the widget. The rating widget comes with the following settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Max Rating")),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of stars you would like to rate the information with")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Default Rating")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the default option of the rating widget")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tooltips")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the tooltip content of starts. This expects an array of strings that can describe the values of each star")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Size")),(0,a.kt)("td",{parentName:"tr",align:null},"The star's sizes can be varied, default is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"Medium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Allow half stars")),(0,a.kt)("td",{parentName:"tr",align:null},"When toggled, half star ratings are accepted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Visible")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Disabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Animate Loading")),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to control a widget\u2019s animation on the page load.")))),(0,a.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,a.kt)("p",null,"These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Code Snippet"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"isVisible")),(0,a.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is visible or not."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{{widget_name.isVisible}}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"maxCount")),(0,a.kt)("td",{parentName:"tr",align:null},"This property indicates the total number of stars you would like to rate the information with."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{{widget_name.maxCount}}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:null},"This property indicates the value selected by user."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{{widget_name.value}}"))))),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"They are a set of actions that you can perform on the widget."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Events"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"onChange")),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers an action when the rate is changed. See a list of ",(0,a.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),".")))),(0,a.kt)("h3",{id:"styles"},"Styles"),(0,a.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Style"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Active color")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the color of stars for that are provided in the default rate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Inactive color")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the color of inactive stars")))))}u.isMDXComponent=!0}}]);