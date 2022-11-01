"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[7942],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14817:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2,id:"start-building",slug:"/getting-started/start-building"},l="Build Your First App",o={unversionedId:"getting-started/start-building",id:"getting-started/start-building",title:"Build Your First App",description:"In this Quickstart guide, you will learn to:",source:"@site/docs/getting-started/start-building.md",sourceDirName:"getting-started",slug:"/getting-started/start-building",permalink:"/appsmith-docs/getting-started/start-building",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/start-building.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"start-building",slug:"/getting-started/start-building"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/appsmith-docs/"},next:{title:"Self Hosting",permalink:"/appsmith-docs/getting-started/setup"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"<strong>Create a New Application</strong>",id:"create-a-new-application",level:2},{value:"<strong>Connect Database</strong>",id:"connect-database",level:2},{value:"Build UI",id:"build-ui",level:2},{value:"Create Queries and Bind Data to Widgets",id:"create-queries-and-bind-data-to-widgets",level:2},{value:"Deploy and Share",id:"deploy-and-share",level:2}],u={toc:s};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-your-first-app"},"Build Your First App"),(0,r.kt)("p",null,"In this Quickstart guide, you will learn to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new application"),(0,r.kt)("li",{parentName:"ul"},"Connect to a database"),(0,r.kt)("li",{parentName:"ul"},"Build UI by dragging and dropping widgets onto the canvas"),(0,r.kt)("li",{parentName:"ul"},"Write queries to fetch data from the database"),(0,r.kt)("li",{parentName:"ul"},"Bind data to widgets"),(0,r.kt)("li",{parentName:"ul"},"Deploy and share the application")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to create an account on ",(0,r.kt)("a",{parentName:"p",href:"https://app.appsmith.com/"},"Appsmith Cloud"),", or you can ",(0,r.kt)("a",{parentName:"p",href:"setup/"},"self-host Appsmith")," locally or on a hosting platform of your choice."),(0,r.kt)("h2",{id:"create-a-new-application"},(0,r.kt)("strong",{parentName:"h2"},"Create a New Application")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When creating a new ",(0,r.kt)("a",{parentName:"li",href:"https://app.appsmith.com/"},"Appsmith account"),", an application titled '",(0,r.kt)("strong",{parentName:"li"},"My first application'")," is automatically added under the default ",(0,r.kt)("strong",{parentName:"li"},"Workspace"),". You can use this application to build your first app or create a new one by clicking on the ",(0,r.kt)("strong",{parentName:"li"},"+ New")," button under the Workspace."),(0,r.kt)("li",{parentName:"ul"},"For this tutorial, we will use the default application. Hover over the '",(0,r.kt)("strong",{parentName:"li"},"My first application'")," card and click the ",(0,r.kt)("strong",{parentName:"li"},"Edit")," button to open the application.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating a new application on Appsmith",src:a(64577).Z,width:"3200",height:"1206"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You'll land on the Appsmith editor. Select the ",(0,r.kt)("strong",{parentName:"li"},"Build with drag & drop")," option to start from scratch and create your custom UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"'Page 1'")," is the default page on the application. To rename the page, click on the Kebab menu (three vertical dots) and select ",(0,r.kt)("strong",{parentName:"li"},"Edit Name"),". Label the page '",(0,r.kt)("strong",{parentName:"li"},"User Information"),"'.")),(0,r.kt)("h2",{id:"connect-database"},(0,r.kt)("strong",{parentName:"h2"},"Connect Database")),(0,r.kt)("p",null,"We'll use the mock PostgreSQL database named '",(0,r.kt)("strong",{parentName:"p"},"users'")," available on Appsmith."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Explorer")," tab, click the ",(0,r.kt)("strong",{parentName:"li"},"+")," sign next to ",(0,r.kt)("strong",{parentName:"li"},"DATASOURCES"),". Under ",(0,r.kt)("strong",{parentName:"li"},"Sample Databases,")," select ",(0,r.kt)("strong",{parentName:"li"},"users.")),(0,r.kt)("li",{parentName:"ul"},"The '",(0,r.kt)("strong",{parentName:"li"},"users'")," database will be added under the ",(0,r.kt)("strong",{parentName:"li"},"Explorer")," tab -> ",(0,r.kt)("strong",{parentName:"li"},"DATASOURCES"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating a new datasource",src:a(94585).Z,width:"2852",height:"1490"})),(0,r.kt)("h2",{id:"build-ui"},"Build UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"PAGES")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"User Information"),". Drag and drop a ","[",(0,r.kt)("strong",{parentName:"li"},"Table"),"]"," widget on the canvas. On the ",(0,r.kt)("strong",{parentName:"li"},"Property Pane")," to the right, rename the table to '",(0,r.kt)("strong",{parentName:"li"},"usersTable"),"'."),(0,r.kt)("li",{parentName:"ul"},"Drag and drop a ","[",(0,r.kt)("strong",{parentName:"li"},"Container"),"]"," widget to the right of the Table widget. Let's add a few widgets to display user details from the selected row on the table. Add a label titled '",(0,r.kt)("strong",{parentName:"li"},"User Details"),"'."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/input"},(0,r.kt)("strong",{parentName:"a"},"Input"))," widgets for Name (",(0,r.kt)("em",{parentName:"li"},"nameInput"),"), Email (",(0,r.kt)("em",{parentName:"li"},"emailInput"),") and Phone (",(0,r.kt)("em",{parentName:"li"},"phoneInput"),"), a ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/datepicker"},(0,r.kt)("strong",{parentName:"a"},"Datepicker"))," widget for DOB (",(0,r.kt)("em",{parentName:"li"},"dobInput"),"), an ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/image"},(0,r.kt)("strong",{parentName:"a"},"Image"))," widget for the Image and finally a ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/button/"},(0,r.kt)("strong",{parentName:"a"},"Button"))," widget labelled '",(0,r.kt)("strong",{parentName:"li"},"Update"),"'.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build UI by laying out widgets on the canvas",src:a(33251).Z,width:"1942",height:"1156"})),(0,r.kt)("h2",{id:"create-queries-and-bind-data-to-widgets"},"Create Queries and Bind Data to Widgets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Explorer")," tab, navigate to the database under ",(0,r.kt)("strong",{parentName:"li"},"DATASOURCES")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"users")),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"New Query +")," button next to the datasource.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating a new query on the datasource",src:a(53407).Z,width:"2474",height:"436"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rename the query to \u2018",(0,r.kt)("strong",{parentName:"li"},"getUsers"),"\u2019"),(0,r.kt)("li",{parentName:"ul"},"Write the below query to pull ten records from the '",(0,r.kt)("strong",{parentName:"li"},"users'")," table in the database.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT * FROM users ORDER BY id LIMIT 10;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Writing query to fetch data in the Query Editor",src:a(7040).Z,width:"1760",height:"724"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Run")," button on the right of the Query Editor to confirm that the query returns data."),(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"PAGES")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"User Information"),". Hover over the table and click on the table name 'usersTable' to open the property pane. On the ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/table/#table-data"},(0,r.kt)("strong",{parentName:"a"},"Table Data"))," property write this JS snippet ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{getUsers.data}}"))," to display the results from the 'getUsers",(0,r.kt)("strong",{parentName:"li"},"'")," query on the table.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"{{mustache}}")," template is used to write JS inside widgets and queries.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bind the data from the query to the table widget",src:a(46036).Z,width:"2468",height:"1030"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Similarly, to display information from a selected row on the table, refer below to bind the corresponding data to the widgets inside the Container.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Widget"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{usersTable.selectedRow.image}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"nameInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{usersTable.selectedRow.name}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"emailInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{usersTable.selectedRow.email}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOB"),(0,r.kt)("td",{parentName:"tr",align:null},"dobInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{usersTable.selectedRow.dob}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"phoneInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Default Text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{usersTable.selectedRow.phone}}"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Turn on the ",(0,r.kt)("strong",{parentName:"p"},"JS")," toggle to bind data for the ",(0,r.kt)("strong",{parentName:"p"},"Default Date")," property")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create another query on the '",(0,r.kt)("strong",{parentName:"li"},"users'")," database and rename it to '",(0,r.kt)("strong",{parentName:"li"},"updateUsers"),"'. Use the below update command to write any modified data on the widgets back to the database.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UPDATE users SET name = '{{nameInput.text}}', email = '{{emailInput.text}}', dob = '{{dobInput.selectedDate}}', phone = '{{phoneInput.text}}' WHERE id = {{usersTable.selectedRow.id}} \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the property pane of the ",(0,r.kt)("strong",{parentName:"li"},"Update")," button execute this query on the ",(0,r.kt)("a",{parentName:"li",href:"../reference/widgets/button/#events"},(0,r.kt)("strong",{parentName:"a"},"onClick"))," event. On the success of the update query, run the '",(0,r.kt)("strong",{parentName:"li"},"getusers'")," query to populate the table with updated data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bind query execution to the button&#39;s  onClick event ",src:a(16714).Z,width:"1270",height:"1236"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test the ",(0,r.kt)("strong",{parentName:"li"},"'Update'")," button by modifying the phone number of the user.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You\u2019ve completed your first app that can display information from the database and update data, all in just a few minutes.")),(0,r.kt)("h2",{id:"deploy-and-share"},"Deploy and Share"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Deploy")," button on the top right of the Appsmith editor to deploy the app and test it as an ",(0,r.kt)("strong",{parentName:"li"},"App Viewer.")),(0,r.kt)("li",{parentName:"ul"},"Once deployed, you can share your application with users. Click the ",(0,r.kt)("strong",{parentName:"li"},"Share")," button on the top right of the Appsmith editor.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Invite specific users using their email ID",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select an appropriate role for the user"),(0,r.kt)("li",{parentName:"ul"},"Share the application's URL with the user"))),(0,r.kt)("li",{parentName:"ul"},"You can also make the application ",(0,r.kt)("strong",{parentName:"li"},"public"),". In this case, anyone with the application URL can view the application without signing in. You can read more about ",(0,r.kt)("strong",{parentName:"li"},"access control")," ",(0,r.kt)("a",{parentName:"li",href:"../advanced-concepts/access-control"},(0,r.kt)("strong",{parentName:"a"},"here")),".")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Congratulations"),", you have completed the Appsmith Quickstart tutorial.")),(0,r.kt)("p",null,"Now that you have created your first Appsmith application, you may be wondering what to learn next. The Quickstart covered only the basic concepts. There's so much more to explore, so head over to the ",(0,r.kt)("a",{parentName:"p",href:"../#advanced-users"},(0,r.kt)("strong",{parentName:"a"},"next steps")),"."))}d.isMDXComponent=!0},94585:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add_Datasource-7e571e2141b791ee2862c39de8493408.png"},53407:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/New_Query_(1)-a72e9443f54fa7cde440e5a627f85756.png"},33251:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_2022-06-28_at_10.50.31_PM-f4aa3daf8c7204a79e24edba86f476e2.png"},16714:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_2022-06-28_at_11.36.28_PM-c6394f1be8b661ab8d317bc5bcdc6fbd.png"},7040:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_2022-07-12_at_22.38.19-76d65138dad56bde2698468dcdc27976.png"},46036:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_2022-07-12_at_22.40.59-9581a425fbb5502bf564e2aec0b9f075.png"},64577:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_2022-07-21_at_11.49.02_AM-f3c1f9a25a9471beca3ee8aa072c900d.png"}}]);