"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[4407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="Map Chart",l={unversionedId:"reference/widgets/map-chart",id:"reference/widgets/map-chart",title:"Map Chart",description:"Map Chart widget is useful for data visualizations on a map. The visualizations can be used in dashboards to denote areas of interest.",source:"@site/docs/reference/widgets/map-chart.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/map-chart",permalink:"/reference/widgets/map-chart",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/map-chart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maps",permalink:"/reference/widgets/maps"},next:{title:"Menu Button",permalink:"/reference/widgets/menu-button"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Styles",id:"styles",level:3},{value:"Displaying Data",id:"displaying-data",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map-chart"},"Map Chart"),(0,n.kt)("p",null,"Map Chart widget is useful for data visualizations on a map. The visualizations can be used in dashboards to denote areas of interest."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(49254).Z,width:"1649",height:"938"})),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,n.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,n.kt)("p",null,"These properties allow you to edit the Map chart widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Map type")),(0,n.kt)("td",{parentName:"tr",align:null},"It lets you select the maps of the world or continents to visualize data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Title")),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the title to be displayed on top of the map chart.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Visible")),(0,n.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Data")),(0,n.kt)("td",{parentName:"tr",align:null},"Information in a specified format (array \\<id, value>) is to be displayed on the selected map type. To know what each ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," represents for a map, please refer to this ",(0,n.kt)("a",{parentName:"td",href:"https://www.fusioncharts.com/dev/map-guide/list-of-maps"},"documentation"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Show Labels")),(0,n.kt)("td",{parentName:"tr",align:null},"When turned on, it shows the labels for each data point on the map chart.")))),(0,n.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,n.kt)("p",null,"These properties allow you to bind your Map chart widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Internal Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"selectedDataPoint")),(0,n.kt)("td",{parentName:"tr",align:null},"An object of the currently selected data point in the map. This object changes when the user selects a different data point in the map.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"isVisible")),(0,n.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is visible or not.")))),(0,n.kt)("h3",{id:"events"},"Events"),(0,n.kt)("p",null,"They are a set of actions that you can perform on the widget."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Event"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"onDataPointClick")),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the action to be run when the user selects a distinct region in the map. See a list of ",(0,n.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),".")))),(0,n.kt)("h3",{id:"styles"},"Styles"),(0,n.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Styles"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Color range")),(0,n.kt)("td",{parentName:"tr",align:null},"Controls the colour of a set of regions based on the range of values assigned. Accepts arrays of objects with the following keys: code (Color code to be applied), minValue (Minimum value for which this colour should be applied), maxValue (Maximum value for which this colour should be applied).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Border Radius")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to define curved corners.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Box Shadow")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to choose from the available shadow styles.")))),(0,n.kt)("h2",{id:"displaying-data"},"Displaying Data"),(0,n.kt)("p",null,"Map chart\u2019s options can be populated from a data source like an API / Query by transforming the incoming data to an array of ","\\","(id, value","\\","). For each \u201cMap type\u201d, each unique ID represents a fixed region in the map, which can be determined from the ",(0,n.kt)("a",{parentName:"p",href:"https://www.fusioncharts.com/dev/map-guide/list-of-maps"},"fusion map chart documentation"),"."),(0,n.kt)("p",null,"The transformation can be performed using JavaScript. So if the data is an array, we can transform it using the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map"},(0,n.kt)("strong",{parentName:"a"},"Array.map"))," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Query1.data is assumed to be an array here\n{{ Query1.data.map((row) => {\n      return { id: row.name, value: row.id }\n   })\n}}\n")))}u.isMDXComponent=!0},49254:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mapschart-9f0cb7b8435d47c5c13c6a04fc72d018.png"}}]);