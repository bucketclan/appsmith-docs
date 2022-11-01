"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},l="Divider",o={unversionedId:"reference/widgets/divider",id:"reference/widgets/divider",title:"Divider",description:"The Divider widget is used to visually separate or compartmentalise different parts of your application.",source:"@site/docs/reference/widgets/divider.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/divider",permalink:"/appsmith-docs/reference/widgets/divider",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/divider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Datepicker",permalink:"/appsmith-docs/reference/widgets/datepicker"},next:{title:"Document Viewer",permalink:"/appsmith-docs/reference/widgets/document-viewer"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Style",id:"style",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"divider"},"Divider"),(0,a.kt)("p",null,"The Divider widget is used to visually separate or compartmentalise different parts of your application."),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/rTJtDOusWmM?autoplay=0",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"How to use Divider Widget"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,a.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,a.kt)("p",null,"These properties allow you to edit the Divider widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Orientation")),(0,a.kt)("td",{parentName:"tr",align:null},'Sets whether the line of the widget is oriented horizontally or vertically. With JS enabled, accepted values are "horizontal" or "vertical".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Visible")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Animate Loading")),(0,a.kt)("td",{parentName:"tr",align:null},"When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.")))),(0,a.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,a.kt)("p",null,"These properties allow you to bind your Divider widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"capSide")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the widget's ",(0,a.kt)("strong",{parentName:"td"},"Cap Position")," style property, shows which sides of the divider line have a cap. Values are ",(0,a.kt)("em",{parentName:"td"},"numbers"),", either -1 (left or top only), 0 (both sides), or 1 (right or bottom only).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"capType")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the widget's ",(0,a.kt)("strong",{parentName:"td"},"Cap")," style property, shows whether the divider line is capped with a dot, an arrow, or no cap. Values are ",(0,a.kt)("em",{parentName:"td"},"strings"),' "dot", "arrow", or "nc".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"dividerColor")),(0,a.kt)("td",{parentName:"tr",align:null},"Contains the color of the divider line, represented as a hexadecimal color code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"isVisible")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the state of the widget's ",(0,a.kt)("strong",{parentName:"td"},"Visible")," setting ",(0,a.kt)("em",{parentName:"td"},"(bool)"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"orientation")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the ",(0,a.kt)("strong",{parentName:"td"},"Orientation")," property of the widget, values are ",(0,a.kt)("em",{parentName:"td"},"strings"),' either "horizontal" or "vertical".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"strokeStyle")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the widget's ",(0,a.kt)("strong",{parentName:"td"},"Dash Style")," property as a ",(0,a.kt)("em",{parentName:"td"},"string"),' with value either "solid", "dashed", or "dotted".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"thickness")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the thickness of the divider line as a ",(0,a.kt)("em",{parentName:"td"},"number")," of pixels.")))),(0,a.kt)("h3",{id:"style"},"Style"),(0,a.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Style Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Dash Style")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the type of line used for the divider, either Solid, Dashed, or Dotted. With JS enabled, accepts ",(0,a.kt)("em",{parentName:"td"},"strings"),' with value "solid", "dashed", or "dotted".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Thickness")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the thickness of the divider line in pixels. Accepts ",(0,a.kt)("em",{parentName:"td"},"number")," values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Divider Color")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the color of the divider line. Accepts valid CSS ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},(0,a.kt)("inlineCode",{parentName:"a"},"color")),"values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Cap")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the type of cap to use on the divider line; none, arrows, or dots. With JS enabled, accepts ",(0,a.kt)("em",{parentName:"td"},"strings"),' with value "nc", "arrow", or "dot".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Cap Position")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets which sides of the divider line have caps. With JS enabled, accepts ",(0,a.kt)("em",{parentName:"td"},"number")," values -1 (left/top), 0 (both), or 1 (right/bottom).")))))}m.isMDXComponent=!0}}]);