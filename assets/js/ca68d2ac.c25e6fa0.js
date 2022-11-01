"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={},r="Inline Editing",o={unversionedId:"reference/widgets/table/inline-editing",id:"reference/widgets/table/inline-editing",title:"Inline Editing",description:"Inline edit-ability for a column can be enabled for the whole column or at the cell level based on a condition.",source:"@site/docs/reference/widgets/table/inline-editing.md",sourceDirName:"reference/widgets/table",slug:"/reference/widgets/table/inline-editing",permalink:"/appsmith-docs/reference/widgets/table/inline-editing",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/widgets/table/inline-editing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Column Settings",permalink:"/appsmith-docs/reference/widgets/table/column-settings"},next:{title:"Text",permalink:"/appsmith-docs/reference/widgets/text"}},d={},p=[{value:"How to edit a cell",id:"how-to-edit-a-cell",level:2},{value:"Update mode",id:"update-mode",level:2},{value:"Row level mode",id:"row-level-mode",level:3},{value:"Custom mode",id:"custom-mode",level:3},{value:"Perform an Action when a cell is edited",id:"perform-an-action-when-a-cell-is-edited",level:2},{value:"Properties",id:"properties",level:2},{value:"Update Mode",id:"update-mode-1",level:3},{value:"Cell Wrapping",id:"cell-wrapping",level:3},{value:"Editable",id:"editable",level:3},{value:"Regex",id:"regex",level:3},{value:"Valid",id:"valid",level:3},{value:"Error Message",id:"error-message",level:3},{value:"Required",id:"required",level:3},{value:"Min",id:"min",level:3},{value:"Max",id:"max",level:3},{value:"updatedRows",id:"updatedrows",level:3},{value:"updatedRowIndices",id:"updatedrowindices",level:3},{value:"updatedRow",id:"updatedrow",level:3},{value:"Events",id:"events",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"inline-editing"},"Inline Editing"),(0,l.kt)("p",null,"Inline edit-ability for a column can be enabled for the whole column or at the cell level based on a condition. "),(0,l.kt)("figure",null,(0,l.kt)("object",{data:"https://www.youtube.com/embed/eIecDfvSOsU?autoplay=0",width:"750px",height:"400px"}),(0,l.kt)("figcaption",{align:"center"},(0,l.kt)("i",null))),(0,l.kt)("p",null,"The column list on the Table property pane has a checkbox to make that column editable."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Editable Checkbox",src:n(39244).Z,width:"560",height:"594"})),(0,l.kt)("p",null,"Click the checkbox inside a column card makes all the cells in that column editable. The editable checkbox at the top of the list can be checked to make all the editable columns editable."),(0,l.kt)("p",null,"Alternatively, A column can be editable by turning on ",(0,l.kt)("inlineCode",{parentName:"p"},"Editable")," property inside column settings."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(12840).Z,width:"544",height:"224"})),(0,l.kt)("p",null,"JS option of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Editable")," property can be leveraged to make a subset of the cells in a column editable."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(68363).Z,width:"546",height:"180"})),(0,l.kt)("p",null,"Once a column has been made editable, an edit icon appears on the column header as an indicator."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7488).Z,width:"612",height:"320"})),(0,l.kt)("h2",{id:"how-to-edit-a-cell"},"How to edit a cell"),(0,l.kt)("p",null,"An edit icon appears on hovering an editable cell, which, when clicked, would make the cell editable."," "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Currently, ",(0,l.kt)("strong",{parentName:"p"},"four column types")," support inline editing: ",(0,l.kt)("strong",{parentName:"p"},"Text, Number, Switch, and Checkbox."))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(64353).Z,width:"593",height:"220"})),(0,l.kt)("p",null,"Based on the Column type, cell content can be edited. Once done user can move away from the edit mode in two ways."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell."),(0,l.kt)("li",{parentName:"ol"},"You can discard the Edited contents by pressing the escape key.")),(0,l.kt)("h2",{id:"update-mode"},"Update mode"),(0,l.kt)("p",null,"Once a column is editable, a new property, ",(0,l.kt)("inlineCode",{parentName:"p"},"Update mode")," , appears under the column list."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(39289).Z,width:"556",height:"254"})),(0,l.kt)("h3",{id:"row-level-mode"},"Row level mode"),(0,l.kt)("p",null,"Actions can be performed at the row level. On selecting row level, a new column is injected called ",(0,l.kt)("inlineCode",{parentName:"p"},"Save/Discard")," with two buttons when a column is made editable."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(64624).Z,width:"777",height:"324"})),(0,l.kt)("p",null,"This column can't be deleted. It can only be made hidden. This column gets deleted when the update mode is switched to custom, or all the columns are made non-editable."),(0,l.kt)("p",null,"Users can customize the appearance of the Save and Discard button in the column settings. There are two events available ",(0,l.kt)("inlineCode",{parentName:"p"},"onSave,")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onDiscard"),", which users can use to trigger an action when the corresponding button is clicked."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"updatedRow")," can be used to access the row that triggered the event")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"ONLY single row cells are editable in row-level update mode. Users should save or discard the edited row before editing another row.")),(0,l.kt)("h3",{id:"custom-mode"},"Custom mode"),(0,l.kt)("p",null,"In custom mode, users can opt to save data at the table level, that is users are free to choose when to save the edited rows."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit")," property of the editable column can be used to save that cell when it's edited."),(0,l.kt)("li",{parentName:"ol"},"Users can trigger save when a button is clicked outside the table.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can edit Multiple rows in custom update mode.")),(0,l.kt)("p",null,"Table exposes two new properties ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedRows")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedRowIndices"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"updatedRows")," has details of all the edited rows. This property can be used in a trigger action to save the edited cells of the table, which gets called with the click of a button widget outside the table."),(0,l.kt)("h2",{id:"perform-an-action-when-a-cell-is-edited"},"Perform an Action when a cell is edited"),(0,l.kt)("p",null,"When a column is made editable, ",(0,l.kt)("inlineCode",{parentName:"p"},"onSubmit")," trigger property appears under the event section in the column settings."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(92525).Z,width:"572",height:"250"})),(0,l.kt)("p",null,"Users can bind any trigger action on this property, which gets called anytime cell content is edited and persisted. ",(0,l.kt)("inlineCode",{parentName:"p"},"currentRow")," can be used to access the corresponding row and ",(0,l.kt)("inlineCode",{parentName:"p"},"currentRow[\u201dkeyName\u201d]")," can be used to access the updated data."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"currentRow can be used to access the corresponding row, and currentRow","[","\u201dkeyName\u201d] can be used to access the updated data.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("p",null,"Properties allow you to edit the widget, connect it with other widgets and customize the user actions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"),(0,l.kt)("th",{parentName:"tr",align:null},"Code Snippet"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Update Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls the save experience of an edited cell.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Row level")," - Cells can be saved using the Save/Discard column buttons. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Custom")," - cells can be saved by using an onSubmit action of the column or through an external button."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Cell Wrapping")),(0,l.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls how overflowing contents of the column are handled.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"on")," - Contents get wrapped to the next line.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"off")," - Contents get ellipsised."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Editable")),(0,l.kt)("td",{parentName:"tr",align:null},"Formatting"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether cells of the column are editable"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Regex")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex adds validation to the cell value which displays an error on failure."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Valid")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid property shows the validity of the cell."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Error Message")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"The error message displays if the regex or valid property check fails."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Makes input to the widget mandatory."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Min")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the minimum allowed value."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max")),(0,l.kt)("td",{parentName:"tr",align:null},"Validation"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the maximum allowed value."),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"updatedRows")),(0,l.kt)("td",{parentName:"tr",align:null},"Binding"),(0,l.kt)("td",{parentName:"tr",align:null},"This property contains all the details of the edited rows."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{{Table1.updatedRows}}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"updatedRowIndices")),(0,l.kt)("td",{parentName:"tr",align:null},"Binding"),(0,l.kt)("td",{parentName:"tr",align:null},"This property contains an array of edited row indices."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{{Table1.updatedRowIndices}}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"updatedRow")),(0,l.kt)("td",{parentName:"tr",align:null},"Binding"),(0,l.kt)("td",{parentName:"tr",align:null},"This property contains the details of the row that triggered the action (",(0,l.kt)("inlineCode",{parentName:"td"},"onSubmit"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"onSave")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"onDiscard"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{{Table1.updatedRow}}"))))),(0,l.kt)("h3",{id:"update-mode-1"},"Update Mode"),(0,l.kt)("p",null,"Controls the save experience of an edited cell.\n",(0,l.kt)("strong",{parentName:"p"},"Row level")," - Cells can be saved using the Save/Discard column buttons\\\n",(0,l.kt)("strong",{parentName:"p"},"Custom")," - Cells can be saved by using an onSubmit action of the column or through an external button."),(0,l.kt)("h3",{id:"cell-wrapping"},"Cell Wrapping"),(0,l.kt)("p",null,"Controls how overflowing contents of the column are handled.  When turned on the Contents get wrapped to the next line."),(0,l.kt)("h3",{id:"editable"},"Editable"),(0,l.kt)("p",null,"Controls whether cells of the column are editable. To make the column editable, click the checkbox inside a column card that makes all the cells in that column editable."),(0,l.kt)("p",null,"Alternatively, A column can be editable by turning on ",(0,l.kt)("inlineCode",{parentName:"p"},"Editable")," property inside column settings."),(0,l.kt)("figure",null,(0,l.kt)("object",{data:"https://www.youtube.com/embed/BW5cVp0GfLE?autoplay=0",width:"750px",height:"400px"}),(0,l.kt)("figcaption",{align:"center"},(0,l.kt)("i",null,"Making column editable"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Validation ensures that only certain values are entered in a field. You have to make the column editable to allow validation. The validation feature is available for ",(0,l.kt)("strong",{parentName:"p"},"text")," and ",(0,l.kt)("strong",{parentName:"p"},"numeric")," column types.")),(0,l.kt)("h3",{id:"regex"},"Regex"),(0,l.kt)("p",null,"Regex adds validation to the cell value which displays an error on failure. When the input doesn't match the regex expression, the input is considered invalid. Using ",(0,l.kt)("inlineCode",{parentName:"p"},"Regex")," or Regular expression property, you can set specific constraints on the input you expect from the user."),(0,l.kt)("p",null,"For example, add a regular expression for entering a name. The name can contain only alphabets and spaces between the first and last name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/^[a-z -]+$/i\n")),(0,l.kt)("p",null,'If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."'),(0,l.kt)("p",null,"Similarly, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"s."),'to only display words that start with the letter "',(0,l.kt)("strong",{parentName:"p"},"s"),'".'),(0,l.kt)("h3",{id:"valid"},"Valid"),(0,l.kt)("p",null,"Valid property shows the validity of the cell. When the expression evaluates to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", the input is considered invalid and the widget shows an Error Message. The following variables are available for binding:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"currentRow")," - gives access to the row values of the editable cell."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"currentIndex")," - index of the current editable row."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"editedValue")," - the newly entered value on the editable input.")),(0,l.kt)("p",null,'Let\'s take an example to understand how the valid property works. If you want the updated value to be "John", so in the valid property section, add:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{{editedValue == "John"}}\n')),(0,l.kt)("p",null,'If a word other than "John" is added to the cell, an error will be displayed. Similarly, the above-mentioned binding variables can be used to obtain values and row indexes.'," "),(0,l.kt)("figure",null,(0,l.kt)("object",{data:"https://www.youtube.com/embed/c4Ylp9QUAc0?autoplay=0",width:"750px",height:"400px"}),(0,l.kt)("figcaption",{align:"center"},(0,l.kt)("i",null,"Valid"))),(0,l.kt)("h3",{id:"error-message"},"Error Message"),(0,l.kt)("p",null,'The error message displays if the regular expression(regex) or valid property check fails. If a user enters an incorrect value, the widget shows a message "invalid input." You can change this message by using the ',(0,l.kt)("inlineCode",{parentName:"p"},"Error message")," property to provide better feedback on the input given by the user."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(95261).Z,width:"524",height:"213"})),(0,l.kt)("h3",{id:"required"},"Required"),(0,l.kt)("p",null,"Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input."),(0,l.kt)("h3",{id:"min"},"Min"),(0,l.kt)("p",null,"Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want the numbers from 2 to 100. Any number entered that's less than 2 is considered invalid."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Min")," and ",(0,l.kt)("strong",{parentName:"p"},"Max")," properties are available for ",(0,l.kt)("strong",{parentName:"p"},"numeric"),"  column types.")),(0,l.kt)("h3",{id:"max"},"Max"),(0,l.kt)("p",null,"Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want the numbers from 2 to 100. Any number entered that's more than 100 is considered invalid."),(0,l.kt)("figure",null,(0,l.kt)("object",{data:"https://www.youtube.com/embed/bUbGMUuINvg?autoplay=0",width:"750px",height:"400px"}),(0,l.kt)("figcaption",{align:"center"},(0,l.kt)("i",null,"Min & Max Example"))),(0,l.kt)("h3",{id:"updatedrows"},"updatedRows"),(0,l.kt)("p",null,"This property contains all the details of the edited rows. It has the following structure."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'[\n  {\n    "index": 0, // Index of the row in tableData\n        "PRIMARY_KEY": "PRIMARY_KEY_VALUE", \n    "updatedFields": { // contains all the edited cell values from the row\n      "step": "#11"\n    },\n    "allFields": { // contains all the cell values (including the edited cells) from the row\n      "step": "#11",\n      "task": "Drop a table",\n      "status": "\u2705",\n      "action": "",\n      "EditActions1": ""\n    }\n  }\n]\n')),(0,l.kt)("h3",{id:"updatedrowindices"},"updatedRowIndices"),(0,l.kt)("p",null,"This binding property displays the index number of the updated row. It contains an array of edited row indices."," "),(0,l.kt)("p",null,"For example, if you updated the second row of a table. Now, when you bind this property into a text widget, the property displays the outcome as follows:"," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[ \n1\n]\n")),(0,l.kt)("h3",{id:"updatedrow"},"updatedRow"),(0,l.kt)("p",null,"This property contains the details of the row that triggered the action (",(0,l.kt)("inlineCode",{parentName:"p"},"onSubmit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"onSave")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"onDiscard"),"). For example, if you bind this property into a text widget, you get an output something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Name": "Updated Name",\n  "Date": "Updated Date",\n  "Status ": "Updated Status",\n  "rowIndex": "Row Index"\n}\n')),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Events"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSubmit")),(0,l.kt)("td",{parentName:"tr",align:null},"Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onSave")),(0,l.kt)("td",{parentName:"tr",align:null},"Action that gets triggered when the user clicks the save button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"onDiscard")),(0,l.kt)("td",{parentName:"tr",align:null},"Action that gets triggered when user clicks discard button")))),(0,l.kt)("h2",{id:"whats-next"},"What's next?"),(0,l.kt)("p",null,"The following resources can come in handy as you need to learn new tricks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/appsmith-docs/core-concepts/connecting-to-data-sources/"},"Core Concepts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../appsmith-framework/"},"Appsmith Framework")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../../core-concepts/writing-code/javascript-editor-beta/"},"JavaScript Editor"))))}u.isMDXComponent=!0},7488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Edit_icon_on_column_header-1ec1e9b981e21425eeb72b6a7d419586.png"},39244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Editable_checkbox_-_Inline_editing-15f4fe0d91f6648c1facfb42caf9e980.png"},12840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Editable_preoperty-519a66f36ef1524b174889165e70ee4c.png"},92525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OnSubmit_editable_enabled-33f8ab8bc258f76ac75422ed1822b8a1.png"},64624:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SaveDiscard-2b162cf654b4799848ddfcf270df02d1.jpg"},64353:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress-9c1d417eb96966816b9db72cfe2cebff.gif"},39289:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Update_mode-23f14ed8a4c9b8464cfe73c54d94cc37.png"},68363:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Using_JS_in_Editable-4cc418e78600732b1e20b6d92cf3ec94.png"},95261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inline32-ae99af01d66f5759f93fa0c6b1d74c53.PNG"}}]);