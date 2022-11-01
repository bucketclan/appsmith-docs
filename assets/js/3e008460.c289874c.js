"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[102],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61154:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="Multi-select",o={unversionedId:"reference/widgets/multiselect",id:"reference/widgets/multiselect",title:"Multi-select",description:"Multi-select widget is used to capture user inputs from a specified list of permitted options. This widget captures multiple choices.",source:"@site/docs/reference/widgets/multiselect.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/multiselect",permalink:"/reference/widgets/multiselect",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/multiselect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/reference/widgets/modal"},next:{title:"Multi-tree-select",permalink:"/reference/widgets/multi-tree-select"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Label",id:"label",level:3},{value:"<strong>Text</strong>",id:"text",level:4},{value:"<strong>Position</strong>",id:"position",level:4},{value:"Styles",id:"styles",level:3},{value:"Displaying Data",id:"displaying-data",level:3},{value:"Filtering Data",id:"filtering-data",level:2},{value:"<strong>Form Submission</strong>",id:"form-submission",level:2}],d={toc:p};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-select"},"Multi-select"),(0,r.kt)("p",null,"Multi-select widget is used to capture user inputs from a specified list of permitted options. This widget captures multiple choices."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(42951).Z,width:"1568",height:"903"})),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,r.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,r.kt)("p",null,"These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Options")),(0,r.kt)("td",{parentName:"tr",align:null},"Let's you set labels and values for different items/options in the list of the multi-select widget. Options must be specified as an array of objects with a label and value property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default Value")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a default option that will be captured as user input unless it is changed by the user. Multiple values can be provided as CSV or an array of strings for a Multi-Select dropdown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the Placeholder of the multi-select widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"When turned on, it makes a user input required and disables any form submission until input is made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Animate Loading")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to control a widget\u2019s animation on the page load.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Filterable")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes the dropdown list filterable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Server Side Filtering")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables server-side filtering via an API / Query request. Use this property when your Select option data is being bound to an API / Query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Allow Select All")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls the visibility of ",(0,r.kt)("inlineCode",{parentName:"td"},"select all")," option in the dropdown.")))),(0,r.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,r.kt)("p",null,"These properties allow you to bind your widget with any other widget in queries or JS objects. The following table lists all the binding properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"filterText")),(0,r.kt)("td",{parentName:"tr",align:null},"The filter text for Server side filtering")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is visible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isDisabled")),(0,r.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is disabled or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},"This property shows the values of all the options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"selectedOptionLabels")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of Labels of the options are displayed in a Multi-Select dropdown. This label changes if the default values of the dropdown change or the user changes an option selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"selectedOptionValues")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of values of the options are displayed in a Multi-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection")))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"They are a set of actions that you can perform on the widget. The following table lists the actions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Events"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"onOptionChange")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the action to be run when the user selects/unselects an option. See a list of ",(0,r.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),".")))),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the Placeholder of the multi-select widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label position of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Alignment")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label alignment of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Width")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label width of the widget as the number of columns.")))),(0,r.kt)("h4",{id:"text"},(0,r.kt)("strong",{parentName:"h4"},"Text")),(0,r.kt)("p",null,'It allows you to set the display name for the Multi-select widget. For example, if you want the user to add multiple tags, you can enter the text as "Tags."'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can leave the text empty if you don't want any display name for your Multi-select widget.")),(0,r.kt)("h4",{id:"position"},(0,r.kt)("strong",{parentName:"h4"},"Position")),(0,r.kt)("p",null,"It allows you to specify the placement of the label. You can select one of the available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Top")," - It allows you to align the text at the top of the Multi-select widget."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Left")," - It aligns the text to the left of the Multi-select. When you select ",(0,r.kt)("strong",{parentName:"li"},"Left")," alignment, you get additional settings that you can use to control the alignment and define the text's width.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alignment")," - With the help of alignment, you can define the placement of the text in accordance with the position of the Multi-select widget. You can choose:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Left")," - It aligns the text to the widget's left boundary that is away from the Multi-select widget."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Right")," - It aligns the text closer to the Multi-select widget."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Width")," - With the help of width, you can define the ",(0,r.kt)("strong",{parentName:"li"},"number of columns")," in the ",(0,r.kt)("strong",{parentName:"li"},"grid")," that surrounds the widget. You can specify how close or far the text can be placed to the Multi-select widget."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auto")," - It automatically adjusts the position of the text based on the Multi-select widget's height.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.")),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/LlDnwBjDE6k?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to set the label properties?"))),(0,r.kt)("h3",{id:"styles"},"Styles"),(0,r.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Styles"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Text Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to set text color for the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Text Size")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to set the size of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Font Style")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to choose a font style, i.e., bold or italic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to define curved corners.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Box Shadow")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to choose from the available shadow styles.")))),(0,r.kt)("h3",{id:"displaying-data"},"Displaying Data"),(0,r.kt)("p",null,"Multi-select ",(0,r.kt)("strong",{parentName:"p"},"options")," can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using javascript. So if the data is an array, we can transform it using the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map"},(0,r.kt)("strong",{parentName:"a"},"Array map"))," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Query1.data is assumed to be an array here\n{{ Query1.data.map((row) => { \n      return { label: row.name, value: row.id } \n   }) \n}}\n")),(0,r.kt)("h2",{id:"filtering-data"},"Filtering Data"),(0,r.kt)("p",null,"A MultiSelect widget can be used to filter a dataset based on the user's input. The selected value can be passed to an API using ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ multiselect1.selectedOptionValues }}"),"."),(0,r.kt)("p",null,"Server Side Filtering can also be enabled on the widget by enabling Server Side Filtering property. When enabling server-side filtering in the widget, please update the default value to contain both ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," in this format ",(0,r.kt)("inlineCode",{parentName:"p"},'{"label":<label>, "value": <value>}')," if the default value is not present in the default options."),(0,r.kt)("h2",{id:"form-submission"},(0,r.kt)("strong",{parentName:"h2"},"Form Submission")),(0,r.kt)("p",null,"Multi-select widgets can be used to capture from a fixed set of options inside a form such as gender, role, and status."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{ Table1.selectedRow.gender }}\n/**\n* Binding this to the default option will update the selected option \n* of the MultiSelect widget with the gender of the selected row in Table1\n*/\n")),(0,r.kt)("p",null,"Read more about submitting Input data to an API below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/core-concepts/data-access-and-binding/capturing-data-write/capture-form-data"},"Sending widget data in the post body")))}u.isMDXComponent=!0},42951:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/multiselect-5de67e0ea53222e06468d680374f400c.png"}}]);