"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[1956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(a),u=r,c=g["".concat(p,".").concat(u)]||g[u]||m[u]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="Image",o={unversionedId:"reference/widgets/image",id:"reference/widgets/image",title:"Image",description:"The Image widget displays the images in your app. Images must be either a URL or a valid base64.",source:"@site/docs/reference/widgets/image.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/image",permalink:"/reference/widgets/image",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/image.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Iframe",permalink:"/reference/widgets/iframe"},next:{title:"Input",permalink:"/reference/widgets/input"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Styles",id:"styles",level:3},{value:"Supported File Type",id:"supported-file-type",level:2},{value:"Inline SVG",id:"inline-svg",level:4}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image"},"Image"),(0,r.kt)("p",null,"The Image widget displays the images in your app. Images must be either a URL or a valid base64."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/jdDcydQ8Ho0?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to use Image Widget"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,r.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,r.kt)("p",null,"These properties allow you to edit the Image widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the source from which to render the image. Accepts an image URL, data URI, or base64 encoded image data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default Image")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a default image that will be displayed if no image is rendered via the ",(0,r.kt)("strong",{parentName:"td"},"Image")," property. Accepts an image URL, data URI, or base64 encoded image data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Object Fit")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets how the image should be resized to fit its container. With JS enabled, accepts ",(0,r.kt)("em",{parentName:"td"},"string"),' values "auto", "cover", or "contain". See CSS ',(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},(0,r.kt)("inlineCode",{parentName:"a"},"object-fit"))," docs for reference on these behaviors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Max Zoom Level")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the maximum allowable zoom level for the image view. With JS enabled, accepts ",(0,r.kt)("em",{parentName:"td"},"number")," values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Animate Loading")),(0,r.kt)("td",{parentName:"tr",align:null},"When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the ",(0,r.kt)("inlineCode",{parentName:"td"},"JS")," label next to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Enable Rotation")),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles a control on the widget that allows the user to rotate the image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Enable Download")),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles a control on the widget that allows the user to download the image.")))),(0,r.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,r.kt)("p",null,"These properties allow you to bind your Image widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Binding Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the URL of the image source ",(0,r.kt)("em",{parentName:"td"},"(string)."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Reflects the state of the widget's ",(0,r.kt)("strong",{parentName:"td"},"Visible")," setting ",(0,r.kt)("em",{parentName:"td"},"(bool)"),".")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"You can define functions that will be called when these events are triggered in the widget."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"onClick")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets an action to take place when the user clicks this widget. Can be set from the GUI list of common actions (",(0,r.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"examples here"),"), or you can define a custom JS function to call instead.")))),(0,r.kt)("h3",{id:"styles"},"Styles"),(0,r.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},(0,r.kt)("inlineCode",{parentName:"a"},"border-radius"))," values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Box Shadow")),(0,r.kt)("td",{parentName:"tr",align:null},"Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},(0,r.kt)("inlineCode",{parentName:"a"},"box-shadow"))," values.")))),(0,r.kt)("h2",{id:"supported-file-type"},"Supported File Type"),(0,r.kt)("p",null,"Appsmith supports almost every primary image format, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JPG"),(0,r.kt)("li",{parentName:"ul"},"PNG"),(0,r.kt)("li",{parentName:"ul"},"SVG"),(0,r.kt)("li",{parentName:"ul"},"WebP"),(0,r.kt)("li",{parentName:"ul"},"GIFs.")),(0,r.kt)("p",null,"You can use the same method to display different image formats. Let\u2019s see how you can display:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag & Drop the Image widget into the canvas."),(0,r.kt)("li",{parentName:"ul"},"Now in the image section, paste your image URL."),(0,r.kt)("li",{parentName:"ul"},"For example,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//png:\n https://assets.appsmith.com/widgets/default.png\n\n//jpg:\nhttps://jpeg.org/images/jpegsystems-home.jpg\n\n//gif:\nhttps://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif\n\n//webp:\nhttps://www.gstatic.com/webp/gallery/4.sm.webp\n\n//svg:\nhttps://assets.codepen.io/3/kiwi.svg\n")),(0,r.kt)("h4",{id:"inline-svg"},"Inline SVG"),(0,r.kt)("p",null,"Inline SVG refers to SVG markup included in the markup of a webpage. To display inline SVG, follow the below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag & Drop the Image widget into the canvas."),(0,r.kt)("li",{parentName:"ul"},"Now in the image section, paste the below mentioned URL with your SVG code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"data:image/svg+xml;charset=UTF-8,{{encodeURI('<svg..<your-svg>.. ></svg>')}}\n")),(0,r.kt)("p",null,"You can even use an encoded URL like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"example 1:\ndata:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='50' cx='50' cy='50' fill='tomato'/%3E%3Ccircle r='41' cx='47' cy='50' fill='orange'/%3E%3Ccircle r='33' cx='48' cy='53' fill='gold'/%3E%3Ccircle r='25' cx='49' cy='51' fill='yellowgreen'/%3E%3Ccircle r='17' cx='52' cy='50' fill='lightseagreen'/%3E%3Ccircle r='9' cx='55' cy='48' fill='teal'/%3E%3C/svg%3E\n\nexample 2:\ndata:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /%3E%3C/svg%3E\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use URL-based SVG files just like any other image.")))}m.isMDXComponent=!0}}]);