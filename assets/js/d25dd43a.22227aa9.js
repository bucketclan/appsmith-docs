"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9732],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=h(o),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(g,l(l({ref:t},p),{},{components:o})):n.createElement(g,l({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var h=2;h<i;h++)l[h]=o[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},87529:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_position:7},l="How to work with Google Sheets on Appsmith",r={unversionedId:"learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith",id:"learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith",title:"How to work with Google Sheets on Appsmith",description:"With Appsmith's inbuilt Google Sheet Integration Plugin, you can use any Google Sheet as a data source or a backend to build powerful applications. In this tutorial, we'll build a CRUD app that allows us to store and update investor contact information on top of Google Sheet with Appsmith.",source:"@site/docs/learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to Use the Camera/Image Widget to Upload/Download Images?",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images"},next:{title:"OAuth2 Authorization for Google Sheets",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/oauth2-authorization-for-google-sheets"}},s={},h=[{value:"Setting Up Google Sheets and Appsmith",id:"setting-up-google-sheets-and-appsmith",level:3},{value:"Fetch Data from Google Sheet to Appsmith",id:"fetch-data-from-google-sheet-to-appsmith",level:3},{value:"Insert Data/Rows to Google Sheet from Appsmith",id:"insert-datarows-to-google-sheet-from-appsmith",level:3},{value:"Updating Data on Google Sheet from Appsmith",id:"updating-data-on-google-sheet-from-appsmith",level:3},{value:"Delete Data on Google Sheets from Appsmith",id:"delete-data-on-google-sheets-from-appsmith",level:3}],p={toc:h};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-google-sheets-on-appsmith"},"How to work with Google Sheets on Appsmith"),(0,a.kt)("p",null,"With Appsmith's inbuilt Google Sheet Integration Plugin, you can use any Google Sheet as a data source or a backend to build powerful applications. In this tutorial, we'll build a CRUD app that allows us to store and update investor contact information on top of Google Sheet with Appsmith."),(0,a.kt)("h3",{id:"setting-up-google-sheets-and-appsmith"},"Setting Up Google Sheets and Appsmith"),(0,a.kt)("p",null,"Follow the below steps to use Google Sheets with Appsmith:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new account on ",(0,a.kt)("a",{parentName:"li",href:"https://www.appsmith.com/?utm_source=blog%5C&utm_medium=direct%5C&utm_content=google_sheets_crm%5C&utm_campaign=weeklyblog%5C&utm_term=google_sheets_crm"},"Appsmith")," (it\u2019s free!), if you are already an existing login to your Appsmith account."),(0,a.kt)("li",{parentName:"ul"},"Create a new application by clicking on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Create New")," button under the Appsmith dashboard."),(0,a.kt)("li",{parentName:"ul"},"We\u2019ll now see a new Appsmith app with an empty canvas and a sidebar with Widgets, APIs and DB Queries."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon next to the APIs section and choose the ",(0,a.kt)("inlineCode",{parentName:"li"},"Google Sheets")," option. Next, click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"New Datasource")," button and set the scope to ",(0,a.kt)("inlineCode",{parentName:"li"},"Read and Write")," and click Authorise."),(0,a.kt)("li",{parentName:"ul"},"This will ask us to log in from our Google Account, choose the account we want to access Google Sheets with and log in. After successful authorisation, this will redirect back to your Appsmith account."),(0,a.kt)("li",{parentName:"ul"},"Now, you\u2019ll find your Google Sheets Datasource under your APIs, and you can create the necessary queries by choosing this data source.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up Google Sheets on Appsmith",src:o(77145).Z,width:"2000",height:"1160"})),(0,a.kt)("p",null,"Awesome! Now that our Google Sheets Plugin is set up, let\u2019s create a new Google Sheet and add the necessary fields required for Investor CRM."),(0,a.kt)("p",null,"Following are the fields we\u2019ll be considering:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Investment Fund"),(0,a.kt)("li",{parentName:"ul"},"Location"),(0,a.kt)("li",{parentName:"ul"},"Name of Investor"),(0,a.kt)("li",{parentName:"ul"},"Designation"),(0,a.kt)("li",{parentName:"ul"},"Interesting Portfolio Companies"),(0,a.kt)("li",{parentName:"ul"},"Size of Fund")),(0,a.kt)("p",null,"To make this more precise, we\u2019ve made a sample Google Sheet with some mock data ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1f5lw-SO2NOCUhFKmDFPcXgI7qhA_VIwJXhOm8JmhEBA/edit?usp=sharing"},"here"),". We\u2019ll be using the same Sheet throughout this guide, and you can either follow with this or create your own based on our requirements."),(0,a.kt)("h3",{id:"fetch-data-from-google-sheet-to-appsmith"},"Fetch Data from Google Sheet to Appsmith"),(0,a.kt)("p",null,"Now that we are connected to our Google Sheets data source, let\u2019s connect to our Google Sheet and query all the data onto a table widget in Appsmith. To do this, navigate to the created data source under the APIs section and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"New API")," button on the top right. Next, follow the below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After clicking the ",(0,a.kt)("inlineCode",{parentName:"li"},"New API")," button, you\u2019ll be redirected to a new query tab, name your API to ",(0,a.kt)("inlineCode",{parentName:"li"},"getInvestorDetails")," by double-clicking on the existing one."),(0,a.kt)("li",{parentName:"ul"},"Now set the method to ",(0,a.kt)("inlineCode",{parentName:"li"},"Fetch Sheets Row"),", this method will query the data that\u2019s present in the given Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"In the SpreadSheet URL property, paste the URL of your Google Sheet, in this tutorial we\u2019ll be following with the following URL:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://docs.google.com/spreadsheets/d/19ewbxuiNwfD5etHpb__jMzFYjVdYaeLSviC951htlsI/edit#gid=333192")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next, in the Sheet name, add the name of our first sheet which is ",(0,a.kt)("inlineCode",{parentName:"li"},"Investor Details")),(0,a.kt)("li",{parentName:"ul"},"The Table Heading Row Index property takes in the row number that basically has our column heading, we\u2019ll set this to ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},"Next, we\u2019ll set the ",(0,a.kt)("inlineCode",{parentName:"li"},"Row Offset")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Row limit")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),", this will query only the first 100 rows of our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"Lastly, click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Run")," button on the top right, we should see the sheet information in JSON format in the response pane at the bottom. Below is the GIF showing the same:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fetch Data from Excel Sheet to Appsmith",src:o(70444).Z,width:"2000",height:"1160"})),(0,a.kt)("p",null,"Awesome, now that we have our data from the Google Sheet, let\u2019s put this in a table; drag and drop a new table widget and paste the following in the Table Data property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{ getInvestorDetails.data }}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Pagination when Working with Large Data")),(0,a.kt)("p",{parentName:"admonition"},"When working with large data on Google Sheets Sheets from APIs, browsers cannot load all the data present in our sheets. For such cases, you can enable server-side pagination, on API calls. To paginate the data, follow the below steps:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Enable the server-side pagination property in the table"),(0,a.kt)("li",{parentName:"ol"},"Call the API/Query ",(0,a.kt)("inlineCode",{parentName:"li"},"onPageChange")),(0,a.kt)("li",{parentName:"ol"},"Toggle pagination in the API under Pagination Tab"))),(0,a.kt)("h3",{id:"insert-datarows-to-google-sheet-from-appsmith"},"Insert Data/Rows to Google Sheet from Appsmith"),(0,a.kt)("p",null,"Let\u2019s start by adding a button and showing a modal that has a form to add all the details of the new investors. Follow the below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drag and drop a button widget on to the canvas and next open the property pane of the button by clicking on the cog icon on the top right of the button when selected."),(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick")," property and select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Open Modal")," option and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"New Modal"),", this should open a new modal."),(0,a.kt)("li",{parentName:"ul"},"Now add the necessary form fields by dragging the Input widgets onto the Modal. In our case of Investor CRM, we will add the following fields:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Investment Fund"),(0,a.kt)("li",{parentName:"ul"},"Location"),(0,a.kt)("li",{parentName:"ul"},"Name of Investor"),(0,a.kt)("li",{parentName:"ul"},"Designation"),(0,a.kt)("li",{parentName:"ul"},"Interesting Portfolio Companies"),(0,a.kt)("li",{parentName:"ul"},"Size of Fund"))),(0,a.kt)("li",{parentName:"ul"},"Name the input widgets to follow to easily use them for other operations for our CRM.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Investment Fund: ",(0,a.kt)("inlineCode",{parentName:"li"},"addFund")),(0,a.kt)("li",{parentName:"ul"},"Location: ",(0,a.kt)("inlineCode",{parentName:"li"},"addLocation")),(0,a.kt)("li",{parentName:"ul"},"Name of Investor: ",(0,a.kt)("inlineCode",{parentName:"li"},"addInvestorInput")),(0,a.kt)("li",{parentName:"ul"},"Designation: ",(0,a.kt)("inlineCode",{parentName:"li"},"addDesignation")),(0,a.kt)("li",{parentName:"ul"},"Interesting Portfolio Companies: ",(0,a.kt)("inlineCode",{parentName:"li"},"addPortifolio")),(0,a.kt)("li",{parentName:"ul"},"Size of Fund: ",(0,a.kt)("inlineCode",{parentName:"li"},"addFundSize"))))),(0,a.kt)("p",null,"This is how the form should look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(70998).Z,width:"1144",height:"1274"})),(0,a.kt)("p",null,"Now that we have our form ready, let's write the logic to push the values from the form to the Google Sheet whenever submitted. Follow the below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new API from the existing Google Sheets data source and set the query method to ",(0,a.kt)("inlineCode",{parentName:"li"},"Insert Sheet Row"),". This query method helps us insert new data to the Google Sheet from Appsmith."),(0,a.kt)("li",{parentName:"ul"},"Name the query as ",(0,a.kt)("inlineCode",{parentName:"li"},"addNewInvestor")),(0,a.kt)("li",{parentName:"ul"},"Next, in the SpreadSheet URL property, add the link to our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Sheet Name will be ",(0,a.kt)("inlineCode",{parentName:"li"},"Investor Details")," as named in our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Table Heading Row Index will be the row where the names of the columns are listed; in our case, this will be ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),","),(0,a.kt)("li",{parentName:"ul"},"Lastly, the Row Object takes a JSON object with keys set to the column names associated with the desired values. In our case, below is how the Row Object should look like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "Investment Fund": "{{addFund.text}}",\n  "Location": "{{addLocation.text}}",\n  "Name of Investor": "{{addInvestorInput.text}}",\n  "Designation": "{{addDesignation.text}}",\n  "Interesting Portfolio Companies": "{{addPortifolio.text}}",\n  "Size of Fund": "{{addFundSize.text}}",\n}\n')),(0,a.kt)("p",null,"Here, the key's are the column names in the Google Sheet, and the values associated with them are the names of the input widgets. The ",(0,a.kt)("inlineCode",{parentName:"p"},".text")," method is used to pick the text that's written in the input widgets."),(0,a.kt)("p",null,"Lastly, in the form below for the submit button, set the on click property to ",(0,a.kt)("inlineCode",{parentName:"p"},"Call an API")," and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"addNewInvestor")," API from the options. With this, we should be able to add new rows to Google Sheet from Appsmith."),(0,a.kt)("h3",{id:"updating-data-on-google-sheet-from-appsmith"},"Updating Data on Google Sheet from Appsmith"),(0,a.kt)("p",null,"Let's add a feature to display this data and able to update them using the input widget. Drag and drop a container and add necessary input widgets to display the Investor Details. In this case, we\u2019ll be adding the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Investment Fund: ",(0,a.kt)("inlineCode",{parentName:"li"},"editFund")),(0,a.kt)("li",{parentName:"ul"},"Location: ",(0,a.kt)("inlineCode",{parentName:"li"},"editLocation")),(0,a.kt)("li",{parentName:"ul"},"Name of Investor: ",(0,a.kt)("inlineCode",{parentName:"li"},"editInvestorInput")),(0,a.kt)("li",{parentName:"ul"},"Designation: ",(0,a.kt)("inlineCode",{parentName:"li"},"editDesignation")),(0,a.kt)("li",{parentName:"ul"},"Interesting Portfolio Companies: ",(0,a.kt)("inlineCode",{parentName:"li"},"editPortifolio")),(0,a.kt)("li",{parentName:"ul"},"Size of Fund: ",(0,a.kt)("inlineCode",{parentName:"li"},"editFundSize"))),(0,a.kt)("p",null,"The left side text will be the default text in the text widget of the form, and on the right, we have the names of the input widgets corresponding to them. Below is a screenshot of how the form looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(56770).Z,width:"1372",height:"1134"})),(0,a.kt)("p",null,"Set the following to the Default text of input widgets in the investor details container:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Investment Fund Input Widget: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{Table1.selectedRow.Investment_Fund}}")),(0,a.kt)("li",{parentName:"ul"},"Name of Investor Widget: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{Table1.selectedRow.Name_of_Investor}}")),(0,a.kt)("li",{parentName:"ul"},"Location Input Widget: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{Table1.selectedRow.Location}}"))),(0,a.kt)("p",null,"Similarly, add the default text to the other widgets. Now, when a row is selected in the table you should have all the details of the selected investor in the investor detail container."),(0,a.kt)("p",null,"Now, whenever we made changes in the input widgets and hit update details, the associated investor details should be updated in the Google Sheet. For this, let\u2019s write a new update API that\u2019ll help us update the values in the selected row of the Google Sheet. Follow the below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new API from the existing Google Sheets data source and set the query method to ",(0,a.kt)("inlineCode",{parentName:"li"},"Update Sheet Row"),". This query method helps us update row data in the Google Sheet from Appsmith."),(0,a.kt)("li",{parentName:"ul"},"Name the API to ",(0,a.kt)("inlineCode",{parentName:"li"},"editInvestorDetail")),(0,a.kt)("li",{parentName:"ul"},"Next, in the SpreadSheet URL property, add the link to our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Sheet Name will be ",(0,a.kt)("inlineCode",{parentName:"li"},"Investor Details")," as named in our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Table Heading Row Index will be the row where the names of the columns are listed; in our case, this will be ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),","),(0,a.kt)("li",{parentName:"ul"},"Lastly, the Row Object takes a JSON object with keys set to the column names associated with the desired values. In our case, below is how the Row Object should look like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "rowIndex":{{Table1.selectedRow.rowIndex}},\n    "Investment Fund": "{{editFund.text}}",\n    "Location": "{{editLocation.text}}",\n    "Name of Investor": "{{editInvestorInput.text}}",\n    "Designation": "{{editDesignation.text}}",\n    "Interesting Portfolio Companies": "{{editPortifolio.text}}",\n    "Size of Fund": "{{editFundSize.text}}",\n}\n')),(0,a.kt)("p",null,"Lastly, for the Update Details button, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"onclick")," property to Call an API and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"editInvestorDetail")," API. We should now be able to update the investor details by editing the necessary input widgets and clicking on the update button."),(0,a.kt)("h3",{id:"delete-data-on-google-sheets-from-appsmith"},"Delete Data on Google Sheets from Appsmith"),(0,a.kt)("p",null,"For the delete option, let's add a new column in the table and set the column to a button. Update the label as ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," so that we see a new delete button on each row in the table. Now let's go ahead and create a new Delete API on the Google Sheets data source."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new API from the existing Google Sheets data source and set the query method to ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete Row"),". This query method helps us delete row data in the Google Sheet from Appsmith."),(0,a.kt)("li",{parentName:"ul"},"Name the API to ",(0,a.kt)("inlineCode",{parentName:"li"},"deleteInvestorDetail")),(0,a.kt)("li",{parentName:"ul"},"Next, in the SpreadSheet URL property, add the link to our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Sheet Name will be ",(0,a.kt)("inlineCode",{parentName:"li"},"Investor Details")," as named in our Google Sheet."),(0,a.kt)("li",{parentName:"ul"},"The Table Heading Row Index will be the row where the names of the columns are listed; in our case, this will be ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),","),(0,a.kt)("li",{parentName:"ul"},"Lastly, in the Row Index add the following code snippet:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{Table1.selectedRow.rowIndex}}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete row")," method only takes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rowIndex"),", hence we're passing this via the Table1 widget using the ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedRow")," property."),(0,a.kt)("p",null,"With this, we were able to perform CRUD operations on Google Sheet using Appsmith. Do refer to the ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/reference/datasources/querying-google-sheets"},"docs")," for other query methods in the Google Sheets plugin."))}d.isMDXComponent=!0},77145:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Plugin_Intro-b511d068f2b9ca5f5fe17a0b4415ce40.gif"},70444:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Query_Table-027cab24017519ecb8bbde747c6adbb2.gif"},70998:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/image_(18)-d4171d3ef3bba511ed8ce4a3647ab695.png"},56770:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/image_(19)-7dcdf05ea0ef5fd7a67f8edb2ad7a224.png"}}]);