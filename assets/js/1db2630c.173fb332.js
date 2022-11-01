"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,h=u["".concat(d,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Container",l={unversionedId:"reference/widgets/container",id:"reference/widgets/container",title:"Container",description:"When you organize your cupboard or home, you want to pack stuff in boxes and name them. Similarly, you can use a container widget to hold the widgets. A container widget serves as a logical group of related widgets. It gives your page a distinctive layout.",source:"@site/docs/reference/widgets/container.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/container",permalink:"/reference/widgets/container",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/container.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code Scanner",permalink:"/reference/widgets/code-scanner"},next:{title:"Currency Input",permalink:"/reference/widgets/currency-input"}},d={},s=[{value:"Add to Canvas",id:"add-to-canvas",level:2},{value:"Components",id:"components",level:2},{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Name of Widget",id:"name-of-widget",level:3},{value:"Visible",id:"visible",level:3},{value:"Scroll Contents",id:"scroll-contents",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Styles",id:"styles",level:3}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container"},"Container"),(0,r.kt)("p",null,"When you organize your cupboard or home, you want to pack stuff in boxes and name them. Similarly, you can use a container widget to hold the widgets. A container widget serves as a logical group of related widgets. It gives your page a distinctive layout."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/mfPGTUxr6SY?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to use Container Widget"))),(0,r.kt)("p",null,"You can use a container widget to create rich UI by managing the design of each container differently. You can use different containers to segregate the components and define a logical separation."),(0,r.kt)("h2",{id:"add-to-canvas"},"Add to Canvas"),(0,r.kt)("p",null,"To add a container widget to your canvas, drag a container widget from a widget pane available on the left navigation bar."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"PAGES")," \u2014> Select ",(0,r.kt)("strong",{parentName:"p"},"Widget"),' Tab \u2014> Write "',(0,r.kt)("strong",{parentName:"p"},"container\u201d")," in the search bar \u2014> Drag the widget on the canvas."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can move the container widget along with the widgets embedded into it and position it on the screen according to your convenience. A container widget ensures that the layout of child widgets is intact and not disrupted.")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"A container widget stores one or more widgets and serves as a logical group defining a functionality. It can include any number of components based on your requirement."),(0,r.kt)("p",null,"For example, you have an app for a movie library that provides movie listing and search functionality. If you want to design this app, it will be easy to segregate your page into containers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How to use the container widget?",src:n(89697).Z,width:"2304",height:"1214"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parent Container - Drag a container widget on the canvas that takes care of the main layout."),(0,r.kt)("li",{parentName:"ul"},"Search Container - Add another container widget to the parent container. It serves as a search bar.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input box to capture the search term provided by the user."),(0,r.kt)("li",{parentName:"ul"},"Search button that triggers the search action."))),(0,r.kt)("li",{parentName:"ul"},"Movie Listing Container - Add one more container widget to the parent container. It takes care of the movie listing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The table widget allows you to display the movie listing.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can create a hierarchy of containers and have one or more widgets embedded into it, including another container widget.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,r.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,r.kt)("p",null,"These properties allow you to edit the Container widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Animate Loading")),(0,r.kt)("td",{parentName:"tr",align:null},"When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Scroll Contents")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables scrolling in this widget when its contents are larger than its dimensions.")))),(0,r.kt)("h3",{id:"name-of-widget"},"Name of Widget"),(0,r.kt)("p",null,"As soon as you select the widget, you can see an editable box available on top of the properties pane. You can use the default name supplied in the box or provide a meaningful name to the widget. You\u2019ll also see the default naming convention follows the pattern WidgetType followed by a number like ",(0,r.kt)("inlineCode",{parentName:"p"},"Container1"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{1}"))," is a running sequence and increments if you add more widgets of the same type, provided you have not given a unique name to your widget. For example, if you add two more container widgets to the canvas, then the default names for these widgets would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Container"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1")),(0,r.kt)("inlineCode",{parentName:"p"},", Container"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"2")),(0,r.kt)("inlineCode",{parentName:"p"},", and Container"),(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"3")),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It\u2019s advisable to rename the widget to give some meaningful name. It makes it easy to pass parameters by using the widget name to the APIs or queries.")),(0,r.kt)("h3",{id:"visible"},"Visible"),(0,r.kt)("p",null,"You can use Visible to show or hide the widget. By default, visible is toggled ",(0,r.kt)("strong",{parentName:"p"},"on")," that's enabled, so the widget is visible on page load. This property particularly comes in handy when you want to ",(0,r.kt)("strong",{parentName:"p"},"hide/show")," a widget programmatically or hide a widget on page load and then show it when a particular condition or data is available."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you set the visible property of a container widget to false, it\u2019ll hide the container widget and the child widgets embedded into the container. It's helpful to use the container widget\u2019s visible property instead of iterating and hiding each widget in a container.")),(0,r.kt)("p",null,"There are two ways in which you can manipulate this property."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable the JS label next to Visible and write the JavaScript code that can handle the show and hide of the widget by manipulating visible property."),(0,r.kt)("li",{parentName:"ul"},"Write your own JS object and JavaScript code to link to any other widget and manage the show/hide.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can get the reference of visible property by using ",(0,r.kt)("inlineCode",{parentName:"p"},"{{widget_name.isVisible}}")," in your code.")),(0,r.kt)("p",null,"For example, let\u2019s drag a checkbox widget Checkbox1 onto the canvas. Rename the checkbox to ",(0,r.kt)("strong",{parentName:"p"},"ShowHideParentContainer")," and bind it to the Visible property of the container widget by enabling the JS label next to it. Add the following JavaScript code in the Visible property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{ShowHideParentContainer.isChecked}}\n")),(0,r.kt)("p",null,"When you check the checkbox, it will enable the Visible property and shows the container widget and all its child. Whereas the uncheck on the checkbox will hide the widget and its child."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/ImuDDWfVWas?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Visible"))),(0,r.kt)("h3",{id:"scroll-contents"},"Scroll Contents"),(0,r.kt)("p",null,"When you want to embed a container with multiple widgets and save space, you can enable scroll contents by toggling it on. The scroll contents property enables a scroll bar to scroll the contents within a container."),(0,r.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,r.kt)("p",null,"These properties allow you to bind your Container widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Binding Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"backgroundColor")),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the widget's ",(0,r.kt)("strong",{parentName:"td"},"Background Color")," setting as a CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},(0,r.kt)("inlineCode",{parentName:"a"},"color")," "),"value ",(0,r.kt)("em",{parentName:"td"},"(string)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"Reflects the state of the widget's ",(0,r.kt)("strong",{parentName:"td"},"Visible")," setting ",(0,r.kt)("em",{parentName:"td"},"(bool)"),".")))),(0,r.kt)("h3",{id:"styles"},"Styles"),(0,r.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the background color of the widget. Accepts  CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},(0,r.kt)("inlineCode",{parentName:"a"},"color")," "),"values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the border color of the widget. Accepts  CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},(0,r.kt)("inlineCode",{parentName:"a"},"color")," "),"values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Width")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the width of the widget's border. Accepts ",(0,r.kt)("em",{parentName:"td"},"number")," values only, in px.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},(0,r.kt)("inlineCode",{parentName:"a"},"border-radius"))," values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Box Shadow")),(0,r.kt)("td",{parentName:"tr",align:null},"Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},(0,r.kt)("inlineCode",{parentName:"a"},"box-shadow"))," values.")))))}c.isMDXComponent=!0},89697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Widgets__Container__Components-4420c34c90910e1c1d0c7ab29e4abaa9.png"}}]);