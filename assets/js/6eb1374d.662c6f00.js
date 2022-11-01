"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[6460],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:e},d),{},{components:n})):r.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34694:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Icon Button",l={unversionedId:"reference/widgets/icon-button",id:"reference/widgets/icon-button",title:"Icon Button",description:"Icon button widget is just an icon, along with all other button properties.",source:"@site/docs/reference/widgets/icon-button.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/icon-button",permalink:"/reference/widgets/icon-button",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/icon-button.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Filepicker",permalink:"/reference/widgets/filepicker"},next:{title:"Iframe",permalink:"/reference/widgets/iframe"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Styles",id:"styles",level:3}],d={toc:s};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icon-button"},"Icon Button"),(0,a.kt)("p",null,"Icon button widget is just an icon, along with all other button properties."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87555).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,a.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,a.kt)("p",null,"These properties allow you to edit the Icon Button widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tooltip")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets a tooltip that appears when the user hovers over the widget with the mouse. Use this to provide hints or extra information to the user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Disabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Visible")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Animate Loading")),(0,a.kt)("td",{parentName:"tr",align:null},"When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.")))),(0,a.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,a.kt)("p",null,"These properties allow you to bind your Icon Button widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Binding Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"isVisible")),(0,a.kt)("td",{parentName:"tr",align:null},"Reflects the state of the widget's ",(0,a.kt)("strong",{parentName:"td"},"Visible")," setting ",(0,a.kt)("em",{parentName:"td"},"(bool)"),".")))),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("p",null,"You can define functions that will be called when these events are triggered in the widget."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"onClick")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets an an action to take place when the user clicks on this widget. Can be set from the GUI list of common actions (",(0,a.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),"), or you can define a custom JavaScript function to call instead.")))),(0,a.kt)("h3",{id:"styles"},"Styles"),(0,a.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Style Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Icon")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets an icon to be included on the button.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Button Color")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the color of the widget's button. Accepts valid CSS ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},(0,a.kt)("inlineCode",{parentName:"a"},"color")," "),"values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Button Variant")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the ",(0,a.kt)("em",{parentName:"td"},"string"),' "PRIMARY", "SECONDARY", or "TERTIARY".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Border Radius")),(0,a.kt)("td",{parentName:"tr",align:null},"Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},(0,a.kt)("inlineCode",{parentName:"a"},"border-radius"))," values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Box Shadow")),(0,a.kt)("td",{parentName:"tr",align:null},"Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},(0,a.kt)("inlineCode",{parentName:"a"},"box-shadow"))," values.")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We currently use the icons from ",(0,a.kt)("a",{parentName:"p",href:"https://blueprintjs.com"},"Blueprint")," library. You can see the list of icons ",(0,a.kt)("a",{parentName:"p",href:"https://blueprintjs.com/docs/#icons"},"here"),".")))}u.isMDXComponent=!0},87555:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/icon-button-f89976654b7dbae3993bee8985b0dff9.gif"}}]);