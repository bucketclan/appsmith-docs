"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,c=h["".concat(d,".").concat(m)]||h[m]||u[m]||r;return a?o.createElement(c,i(i({ref:t},p),{},{components:a})):o.createElement(c,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={},i="Form",l={unversionedId:"reference/widgets/form",id:"reference/widgets/form",title:"Form",description:"A Form is the most widely used way of capturing a user\u2019s digital or handwritten information. Keeping this in mind, Appsmith provides a form widget that caters to all your needs to capture the user input and wire it to a database query or an API.",source:"@site/docs/reference/widgets/form.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/form",permalink:"/reference/widgets/form",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/form.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Document Viewer",permalink:"/reference/widgets/document-viewer"},next:{title:"Filepicker",permalink:"/reference/widgets/filepicker"}},d={},s=[{value:"Add to Canvas",id:"add-to-canvas",level:2},{value:"Components",id:"components",level:2},{value:"Employee Directory",id:"employee-directory",level:2},{value:"Search Employee Directory",id:"search-employee-directory",level:3},{value:"Form Button",id:"form-button",level:4},{value:"Reset Button",id:"reset-button",level:4},{value:"Reset Form on Success",id:"reset-form-on-success",level:5},{value:"Submit Button",id:"submit-button",level:4},{value:"Disabled Invalid Forms",id:"disabled-invalid-forms",level:5},{value:"Reset Form on Success**",id:"reset-form-on-success-1",level:5},{value:"Display Search Results",id:"display-search-results",level:2},{value:"Properties",id:"properties",level:2},{value:"General",id:"general",level:2},{value:"Name of Widget",id:"name-of-widget",level:3},{value:"Visible",id:"visible",level:3},{value:"Scroll Contents",id:"scroll-contents",level:3},{value:"hasChanges",id:"haschanges",level:3},{value:"data",id:"data",level:3},{value:"Styles",id:"styles",level:2},{value:"Background Color",id:"background-color",level:3},{value:"Border Color",id:"border-color",level:3},{value:"Border Width",id:"border-width",level:3},{value:"Border Radius",id:"border-radius",level:3},{value:"Box Shadow",id:"box-shadow",level:3},{value:"Shadow Color",id:"shadow-color",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"form"},"Form"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Form")," is the most widely used way of capturing a user\u2019s digital or handwritten information. Keeping this in mind, Appsmith provides a form widget that caters to all your needs to capture the user input and wire it to a database query or an API."),(0,n.kt)("p",null,"Form widget serves as a parent widget that can store different widgets like texts to display what information to capture, an input box to capture the desired input from the user, a dropdown to allow selection, and many more. From building a user registration to a complex checkout or payment app, you can easily design the forms that best suit your business requirement with all these widgets at your disposal."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/UgpQ0ZOnzdg?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"How to use Form Widget"))),(0,n.kt)("h2",{id:"add-to-canvas"},"Add to Canvas"),(0,n.kt)("p",null,"To add a form widget to your canvas, drag a form widget from a widget pane available on the left navigation bar."),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"PAGES")," \u2014> Select ",(0,n.kt)("strong",{parentName:"p"},"Widget")," Tab \u2014> Write ",(0,n.kt)("strong",{parentName:"p"},"Form")," in the search bar \u2014> ",(0,n.kt)("strong",{parentName:"p"},"Drag")," the widget on the ",(0,n.kt)("strong",{parentName:"p"},"canvas"),"."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/o-9kl0L6m58?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Add a Widget to Canvas"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can move the form widget along with the widgets embedded into it and position them on the screen according to your convenience.")),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("p",null,"A form widget stores one or more widgets to define a logical group for capturing information. Depending on the needs, the widget can store any number of widgets."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can create a hierarchy of forms and have one or more form widgets embedded into it.")),(0,n.kt)("p",null,"Once you drag a form widget on the canvas, you can see a ",(0,n.kt)("a",{parentName:"p",href:"/reference/widgets/text"},"text widget")," and two ",(0,n.kt)("a",{parentName:"p",href:"button/"},"buttons")," by default embedded into it. You can add more widgets based on your requirements."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"When you drag a form widget, it has embedded widgets.",src:a(18940).Z,width:"1054",height:"906"})),(0,n.kt)("p",null,"To add more widgets to your form, navigate to the left bar under ",(0,n.kt)("strong",{parentName:"p"},"PAGES"),", click on the ",(0,n.kt)("strong",{parentName:"p"},"Widget")," tab, and search for a widget like ",(0,n.kt)("strong",{parentName:"p"},"Text"),". Drag the widget on the form widget to embed it."),(0,n.kt)("h2",{id:"employee-directory"},"Employee Directory"),(0,n.kt)("p",null,"There are a lot of use cases that you can build using a form widget like user registration, checkout, and so on. Let\u2019s take an example to build a search function for an employee directory. The search will look into the employee directory and filter the records based on the given search term. If you do not supply a search term, you can display all employees."),(0,n.kt)("h3",{id:"search-employee-directory"},"Search Employee Directory"),(0,n.kt)("p",null,"To build this app, you can use a form widget to trigger the search with an input widget to capture the search term, embedded form buttons to trigger the search, reset the search term, and a table widget to display the search result."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/Mi_RNg5RVxk?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Employee Directory Search Term"))),(0,n.kt)("h4",{id:"form-button"},"Form Button"),(0,n.kt)("p",null,"By default, the form widget provides two buttons: Reset and Submit, which help reset the form fields to their original values or save the data by calling an API/Query. The form buttons have the same set of functionality as available for the ",(0,n.kt)("a",{parentName:"p",href:"button/"},"button widget"),". This section will focus on the specific attributes that the reset and submit buttons have as embedded widgets in the form."),(0,n.kt)("h4",{id:"reset-button"},"Reset Button"),(0,n.kt)("p",null,"The form button with the name \u201cReset\u201d allows users to reset the form fields to their original values. Say you are building a search app and displaying search results based on the search term provided by the user. You can use the reset button to clear the search term instead of manually clearing the search term field."),(0,n.kt)("h5",{id:"reset-form-on-success"},"Reset Form on Success"),(0,n.kt)("p",null,"In the properties pane, for the reset button where you can see the property - ",(0,n.kt)("strong",{parentName:"p"},"Reset Form on Success")," that is on by default. This property lets you clear the form fields whenever you click the reset button."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can use the onClick property in conjunction with the reset form on success. For example, you are recording user actions on your app. You can use the ",(0,n.kt)("strong",{parentName:"p"},"onClick")," event to track the operation, and the ",(0,n.kt)("strong",{parentName:"p"},"reset form on success")," can clear the form fields.")),(0,n.kt)("h4",{id:"submit-button"},"Submit Button"),(0,n.kt)("p",null,"The form button with the name \u201cSubmit\u201d allows you to add an action to capture the inputs provided by the user and then process it to generate results. In our search app, rename it to ",(0,n.kt)("strong",{parentName:"p"},"Search"),", and it captures the search term provided by the user. You can then bind a ",(0,n.kt)("a",{parentName:"p",href:"/core-concepts/data-access-and-binding/capturing-data-write/capture-form-data"},"call to an API or a query to store/display the data"),"."),(0,n.kt)("h5",{id:"disabled-invalid-forms"},"Disabled Invalid Forms"),(0,n.kt)("p",null,"If you have mandatory fields in your form, say the search term, you can see a grayed-out submit button until the user supplies the search term. The platform provides this as an out-of-the-box functionality, and you don\u2019t have to add any additional code to achieve it. By default, the property is on, and you can toggle it off if you would like to disable it. You would want to disable the property, say you have a small data set for search and would want to fetch all the results if the user provides no search term. You can turn off the ",(0,n.kt)("strong",{parentName:"p"},"Disabled Invalid Forms")," property, and the submit button will be enabled on the form and perform the onClick action."),(0,n.kt)("h5",{id:"reset-form-on-success-1"},"Reset Form on Success**"),(0,n.kt)("p",null,"The property is on for a submit form button, and it clears the fields after the successful execution of an onClick event. You can turn it off if you would like to restore the values. For example, you would like to preserve the search term supplied by the user on the screen even after you fetch the search results. You can achieve this by turning off the property."),(0,n.kt)("h2",{id:"display-search-results"},"Display Search Results"),(0,n.kt)("p",null,"Now that the search is in place, you can use the table widget to bind the query's response and display the results, as shown in the video. You can do a lot of manipulation in data in a table widget, like hiding some columns, format column values, and more. ",(0,n.kt)("a",{parentName:"p",href:"table/"},"Read more on how to use the table widget to structure your data"),"."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/Upn7LDy7UQQ?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Display Search Results"))),(0,n.kt)("p",null,"You saw that your form is a logical group of widgets that allows you to capture user-related information and perform an operation like a search."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can embed a lot of widgets into the form. Typically, all the widgets that can capture user input are eligible for embedding like input, checkbox, datepicker, select, etc.")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("p",null,"The widget properties allow you to enhance the look and feel of a form widget and personalize the same as per your needs. You can find the properties pane on the right side of the canvas."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Ensure that you select the widget to access its properties on the right bar.")),(0,n.kt)("p",null,"The properties pane follows the same structure for almost all the widgets and includes or excludes properties not specific to the selected widget."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Example")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Code Snippet")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to provide a unique name to the widget"),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"In the example above for capturing the Job applicant\u2019s information app. We named a form widget ",(0,n.kt)("strong",{parentName:"td"},"SearchTermForm"),"."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Visible")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to show/hide a widget."),(0,n.kt)("td",{parentName:"tr",align:null},"Binding"),(0,n.kt)("td",{parentName:"tr",align:null},"You can either use a toggle or code to turn it off/on."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{widget_name.isVisible}}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Animate Loading")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to control a widget\u2019s animation on the page load."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can use a toggle to turn it on/off. When turned off, the widget will load without any skeletal animation. You can also turn it off/on using javascript by enabling the JS label next to it."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Scroll Contents")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to enable a scroll bar to scroll the contents."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can use a toggle to turn it on/off. Turning it on gives you the flexibility to embed more widgets in a small space."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Background Color")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to set the background color of the widget."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can select the color from the pallet or use an HTML Color Code."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Border Color")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to set a color for displaying the form's border."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can select the color from the pallet or use an HTML Color Code."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Border Width")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to define the thickness of the border."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can supply a higher number for a thick border."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Border Radius")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to define curved corners."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can supply a higher number for a profound curve."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Box Shadow")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to choose from the available shadow styles."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can choose one of the available shadow styles for the widget."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Shadow Color")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to set the color of the shadow."),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,n.kt)("td",{parentName:"tr",align:null},"You can choose the color from the pallet or supply an HTML Color Code."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"hasChanges")),(0,n.kt)("td",{parentName:"tr",align:null},"It helps you to know if the form has been changed by the application user"),(0,n.kt)("td",{parentName:"tr",align:null},"Binding"),(0,n.kt)("td",{parentName:"tr",align:null},"You can use the property to verify if any fields in the form have been changed."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{widget_name.hasChanges}}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to access the data of embedded widgets."),(0,n.kt)("td",{parentName:"tr",align:null},"Binding"),(0,n.kt)("td",{parentName:"tr",align:null},"You can use the property to access the widget data."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{{widget_name.data}}"))))),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("p",null,"You can choose the properties under this head to name, show/hide, enable scrolling or animate the loading of the widget."),(0,n.kt)("p",null,"Let\u2019s deep dive into the properties available under this head."),(0,n.kt)("h3",{id:"name-of-widget"},"Name of Widget"),(0,n.kt)("p",null,"As soon as you select the widget, you can see an editable box available on top of the properties pane. You can use the default name supplied in the box or provide a meaningful name to the widget. You\u2019ll also see the default naming convention follows the pattern WidgetType followed by a number. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"Form1"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"number"),(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"{1}"))," is a running sequence and increments if you add more widgets of the same type, provided you have not given a unique name to your widget. For example, if you add two more form widgets to the canvas, then the default names for these widgets would be ",(0,n.kt)("inlineCode",{parentName:"p"},"Form1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Form2"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Form3"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It\u2019s advisable to rename the widget to give some meaningful name. It makes it easy to pass parameters by using the widget name to the APIs or queries.")),(0,n.kt)("h3",{id:"visible"},"Visible"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"Visible")," to show or hide the widget. By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"Visible")," is toggled ",(0,n.kt)("strong",{parentName:"p"},"on")," that is enabled, so the widget is visible on page load. This property particularly comes in handy when you want to ",(0,n.kt)("strong",{parentName:"p"},"hide/show")," a widget programmatically or hide a widget on page load and then show it when a particular condition or data is available."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When you set the visible property of a form widget to false, it\u2019ll hide the form widget and the child widgets embedded into the form. It's useful to use the form widget\u2019s visible property instead of iterating and hiding each widget in a form.")),(0,n.kt)("p",null,"There are two ways in which you can manipulate this property."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable the JS label next to ",(0,n.kt)("inlineCode",{parentName:"li"},"Visible")," and write the JavaScript code to control the widget's visibility."),(0,n.kt)("li",{parentName:"ul"},"Write your own JS object and JavaScript code to link to any other widget and manage the show/hide.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can get the reference of visible property by using ",(0,n.kt)("inlineCode",{parentName:"p"},"{{widget_name.isVisible}}")," in your code.")),(0,n.kt)("p",null,"For example, let\u2019s drag a checkbox widget ",(0,n.kt)("inlineCode",{parentName:"p"},"Checkbox1")," onto the canvas. Rename the checkbox to ",(0,n.kt)("inlineCode",{parentName:"p"},"ShowHideForm")," and bind it to the Visible property of the form widget by enabling the JS label next to it. Add the following JavaScript code in the Visible property."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{{ShowHideForm.isChecked}}\n")),(0,n.kt)("p",null,"When you check the checkbox, it will enable the Visible property and show the form widget and all its children. Whereas the uncheck on the checkbox will hide the widget and its children."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/P_98MzwE_lI?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Visible"))),(0,n.kt)("h3",{id:"scroll-contents"},"Scroll Contents"),(0,n.kt)("p",null,"You can enable scroll contents em on when you want to embed multiple widgets. The scroll contents property enables a scroll bar to scroll the contents within a form."),(0,n.kt)("h3",{id:"haschanges"},"hasChanges"),(0,n.kt)("p",null,"Whenever the application is loaded the ",(0,n.kt)("inlineCode",{parentName:"p"},"hasChanges")," property is set to ",(0,n.kt)("strong",{parentName:"p"},"false.")," Whenever the application user changes the values of the widgets embedded in the form, Appsmith sets the property ",(0,n.kt)("inlineCode",{parentName:"p"},"hasChanges")," to ",(0,n.kt)("strong",{parentName:"p"},"true"),". You can use this property to verify if the fields are modified and can prompt the users with a confirmation message to save or discard the changes."),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/UsZQ6q48sKw?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"How to use hasChanges property?"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'export default {\n    checkDataChanges: () => {\n        //checks if the form has changed.\n        if (EmployeeForm.hasChanges) {\n           showAlert("You have unsaved changes on the form. Please save to proceed.");\n           return false;\n        }       \n    }\n}\n')),(0,n.kt)("p",null,"You can see that the ",(0,n.kt)("inlineCode",{parentName:"p"},"hasChanges")," value can be read into the code, and the user can be prompted to save the data."),(0,n.kt)("h3",{id:"data"},"data"),(0,n.kt)("p",null,"You can use the property ",(0,n.kt)("strong",{parentName:"p"},"data")," to access the values of embedded widgets in the form. For example, you have added an input widget with the name ",(0,n.kt)("inlineCode",{parentName:"p"},"FirstName")," to form ",(0,n.kt)("inlineCode",{parentName:"p"},"EmployeeForm"),". You can access the value provided by the user in the ",(0,n.kt)("strong",{parentName:"p"},"FirstName")," field by using the code snippet:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"EmployeeForm.data.FirstName;\n")),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/pKrOLPDYelc?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"How to use the data property of the form to read embedded widgets' values?"))),(0,n.kt)("h2",{id:"styles"},"Styles"),(0,n.kt)("p",null,"Choose properties under this head to change the look and feel of the form. You can choose a background color, border color, width, and radius."),(0,n.kt)("p",null,"Let\u2019s deep dive into the properties to enhance the look of your form widget."),(0,n.kt)("h3",{id:"background-color"},"Background Color"),(0,n.kt)("p",null,"You can use the property background color to set the widget\u2019s background. You can select the available colors from the color pallet to change the background color. You can also use HTML color codes to change the background."),(0,n.kt)("h3",{id:"border-color"},"Border Color"),(0,n.kt)("p",null,"You can use the property border-color to set the widget\u2019s border color. You can select the colors from the color pallet or supply HTML color codes to set the border color."),(0,n.kt)("h3",{id:"border-width"},"Border Width"),(0,n.kt)("p",null,"It\u2019s often required to set a profound separation between UI elements, and then, you can use border width. Border width allows you to set how thick or thin the border is."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can supply a higher number to have a thick border. However, a smaller number will result in a thin border.")),(0,n.kt)("h3",{id:"border-radius"},"Border Radius"),(0,n.kt)("p",null,"To beautify the form widget, you might want rounded or curved corners. You can achieve this by setting a border-radius for the widget."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The higher the number more profound are the curved corners.")),(0,n.kt)("h3",{id:"box-shadow"},"Box Shadow"),(0,n.kt)("p",null,"You can use the box-shadow property to attach one or more shadows to the widget. That is, it adds a shadow effect to your widget. You can select one out of the popular available options for a shadow effect."),(0,n.kt)("h3",{id:"shadow-color"},"Shadow Color"),(0,n.kt)("p",null,"You can choose from the popular color options to add a color effect to the widget shadow."),(0,n.kt)("p",null,"Build your apps using the form widget and capture user information seamlessly."))}u.isMDXComponent=!0},18940:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Widgets_Form_widget_Default_view-31965b808b2720b604158b922c54df58.png"}}]);