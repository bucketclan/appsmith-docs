"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(a),m=r,c=h["".concat(s,".").concat(m)]||h[m]||u[m]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Tree-select",o={unversionedId:"reference/widgets/tree-select",id:"reference/widgets/tree-select",title:"Tree-select",description:"A tree-select widget captures user inputs from a specified list of permitted options in which each option can then have child options associated with it.",source:"@site/docs/reference/widgets/tree-select.md",sourceDirName:"reference/widgets",slug:"/reference/widgets/tree-select",permalink:"/reference/widgets/tree-select",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/tree-select.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/reference/widgets/text"},next:{title:"Video",permalink:"/reference/widgets/video"}},s={},d=[{value:"Displaying Data",id:"displaying-data",level:3},{value:"Filtering Data",id:"filtering-data",level:3},{value:"<strong>Form Submission</strong>",id:"form-submission",level:3},{value:"Properties",id:"properties",level:2},{value:"Widget Properties",id:"widget-properties",level:3},{value:"Binding Properties",id:"binding-properties",level:3},{value:"Events",id:"events",level:3},{value:"Label",id:"label",level:3},{value:"<strong>Text</strong>",id:"text",level:4},{value:"<strong>Position</strong>",id:"position",level:4},{value:"Styles",id:"styles",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tree-select"},"Tree-select"),(0,r.kt)("p",null,"A tree-select widget captures user inputs from a specified list of permitted options in which each option can then have child options associated with it."),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/vSqpSssJdws?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to use Tree-select Widget"))),(0,r.kt)("h3",{id:"displaying-data"},"Displaying Data"),(0,r.kt)("p",null,"Tree-select options can be populated from a data source like an API / Query by transforming the incoming data to an array of ","\\","(label, value","\\","). The transformation can be performed using javascript. So if the data is an array, we can transform it using the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map"},(0,r.kt)("strong",{parentName:"a"},"Array.map"))," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Query1.data is assumed to be an array here\n{{ Query1.data.map((row) => {\n      return { label: row.name, value: row.id, children: {label: row.child.label, value: row.child.value}}\n   })\n}}\n")),(0,r.kt)("h3",{id:"filtering-data"},"Filtering Data"),(0,r.kt)("p",null,"A Tree-select widget can filter a dataset based on the user's input. The selected value can be passed to an API using",(0,r.kt)("inlineCode",{parentName:"p"},"{{ TreeSelect1.selectedOptionValue }}")," ."),(0,r.kt)("h3",{id:"form-submission"},(0,r.kt)("strong",{parentName:"h3"},"Form Submission")),(0,r.kt)("p",null,"Tree-select widgets can capture from a fixed set of options inside a form such as gender, role, status."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some forms need to be pre-filled data from a table or API. We can bind the data to the default property to enable this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{ Table1.selectedRow.gender }}\n/**\n* Binding this to the default option will update the selected option\n* of the TreeSelect widget with the gender of the selected row in Table1\n*/\n")),(0,r.kt)("p",null,"Read more about submitting Input data to an API below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/core-concepts/data-access-and-binding/capturing-data-write/capture-form-data"},"Sending widget data in the post body")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,r.kt)("h3",{id:"widget-properties"},"Widget Properties"),(0,r.kt)("p",null,"These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Options")),(0,r.kt)("td",{parentName:"tr",align:null},"It lets you set labels and values for different items/options in the list of the tree select widget. Options must be specified as an array of objects with a label and value property. The tree structure can be added to any option by adding the children field that should be an object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default Value")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a default option that will be captured as user input unless the user changes it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the Placeholder of the multi-select widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"When turned on, it makes a user input required and disables any form submission until the user makes an input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Animate Loading")),(0,r.kt)("td",{parentName:"tr",align:null},"Control\u2019s widget\u2019s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Clear all Selections")),(0,r.kt)("td",{parentName:"tr",align:null},"When turned on, it allows users to clear the selection, which was the default or the selection made by them.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Expand all by default")),(0,r.kt)("td",{parentName:"tr",align:null},"It shows a dropdown in an expanded state when turned on, revealing all the children options.")))),(0,r.kt)("h3",{id:"binding-properties"},"Binding Properties"),(0,r.kt)("p",null,"These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Code Snippet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"selectedOptionValue")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the value of the option displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{TreeSelect.selectedOptionLabel}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"selectedOptionLabel")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the Label of the option displayed in a Tree-Select dropdown. This label changes if the default value of the dropdown changes or the user changes an option selection."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{TreeSelect.selectedOptionLabel}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isDisabled")),(0,r.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is disabled or not."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{TreeSelect.isDisabled}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isValid")),(0,r.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is valid or not."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{TreeSelect.isValid}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"This property indicates whether the widget is visible or not."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{TreeSelect.isVisible}}"))))),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"They are a set of actions that you can perform on the widget. The following table lists the actions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Events"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"onOptionChange")),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers an action when a user selects an option. See a list of ",(0,r.kt)("a",{parentName:"td",href:"../appsmith-framework/widget-actions/"},"supported actions"),".")))),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Position")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label position of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Alignment")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label alignment of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Width")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the label width of the widget as the number of columns.")))),(0,r.kt)("p",null,"Let's understand these properties in detail."),(0,r.kt)("h4",{id:"text"},(0,r.kt)("strong",{parentName:"h4"},"Text")),(0,r.kt)("p",null,'It allows you to set the display name for the Tree-select. For example, if you want the user to select a category and its subcategories of fruits, you can enter the text as "Fruits."'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can leave the text empty if you don't want any display name for your Tree-select widget.")),(0,r.kt)("h4",{id:"position"},(0,r.kt)("strong",{parentName:"h4"},"Position")),(0,r.kt)("p",null,"It allows you to specify the placement of the label. You can select one of the available options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Top - It allows you to align the text at the top of the Tree-select."),(0,r.kt)("li",{parentName:"ul"},"Left - It aligns the text to the left of the Tree-select. When you select ",(0,r.kt)("strong",{parentName:"li"},"Left")," alignment, you get additional settings that you can use to control the alignment and define the text's width.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Tree-select. You can choose:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Left - It aligns the text to the widget's left boundary that is away from the Tree-select."),(0,r.kt)("li",{parentName:"ul"},"Right - It aligns the text closer to the Tree-select."))),(0,r.kt)("li",{parentName:"ul"},"Width - With the help of width, you can define the ",(0,r.kt)("strong",{parentName:"li"},"number of columns")," in the ",(0,r.kt)("strong",{parentName:"li"},"grid")," that surrounds the widget. You can specify how close or far the text can be placed to the Tree-select."))),(0,r.kt)("li",{parentName:"ul"},"Auto - It automatically adjusts the position of the text based on the Tree-select's height.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.")),(0,r.kt)("figure",null,(0,r.kt)("object",{data:"https://www.youtube.com/embed/p1mt_Fo3C70?autoplay=0",width:"750px",height:"400px"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"How to set the label properties?"))),(0,r.kt)("h3",{id:"styles"},"Styles"),(0,r.kt)("p",null,"Style properties allow you to change the look and feel of the widget."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Border Radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to define curved corners.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Box Shadow")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to choose from the available shadow styles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Font Style")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to choose a font style, i.e., bold or italic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Text Color")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to set text color for the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Label Text Size")),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to set the size of the label.")))))}u.isMDXComponent=!0}}]);