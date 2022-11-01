"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(a),c=i,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},28665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={description:"Guide on how to use MsSQL as a data source on Appsmith",sidebar_position:11},s="How to use MS SQL as a data source on Appsmith",r={unversionedId:"learning-and-resources/how-to-guides/use-mssql-as-data-source",id:"learning-and-resources/how-to-guides/use-mssql-as-data-source",title:"How to use MS SQL as a data source on Appsmith",description:"Guide on how to use MsSQL as a data source on Appsmith",source:"@site/docs/learning-and-resources/how-to-guides/use-mssql-as-data-source.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/use-mssql-as-data-source",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/use-mssql-as-data-source",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/use-mssql-as-data-source.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{description:"Guide on how to use MsSQL as a data source on Appsmith",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Returning data from a stored procedure",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure"},next:{title:"How to Use Notion as a Database on Appsmith",permalink:"/appsmith-docs/learning-and-resources/how-to-guides/use-notion-as-database-on-appsmith"}},l={},p=[{value:"MS SQL",id:"ms-sql",level:2},{value:"What to build",id:"what-to-build",level:2},{value:"Initial setup",id:"initial-setup",level:2},{value:"Querying the database",id:"querying-the-database",level:2},{value:"Displaying the data",id:"displaying-the-data",level:2},{value:"Writing data",id:"writing-data",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-ms-sql-as-a-data-source-on-appsmith"},"How to use MS SQL as a data source on Appsmith"),(0,i.kt)("p",null,"This guide assumes you have basic familiarity with ",(0,i.kt)("a",{parentName:"p",href:"https://www.appsmith.com/"},"Appsmith"),". If you don't have much understanding, I would suggest creating an account and trying it out. I assure you that it is straightforward to get acquainted with quickly."),(0,i.kt)("h2",{id:"ms-sql"},"MS SQL"),(0,i.kt)("p",null,"MS SQL or Microsoft SQL Server is a relational database management system developed by Microsoft. It is a database server developed by Microsoft which provides all the primary functionalities of the SQL version you might have used. MsSQL databases can be queried using the standard T-SQL syntax."),(0,i.kt)("p",null,"In this guide, you will learn how you can use MsSQL as a data source for your Appsmith application."),(0,i.kt)("h2",{id:"what-to-build"},"What to build"),(0,i.kt)("p",null,"Since everybody likes Pok\xe9mons, let's build a simple application that will show you a few Pok\xe9mons with their images, names, and types. It's simple enough for our tutorial and should help explore all the essential things to learn here. You can check out the complete application from this guide ",(0,i.kt)("a",{parentName:"p",href:"https://app.appsmith.com/applications/615cb29fea18372f05103b73/pages/615cb29fea18372f05103b75"},"here"),"."),(0,i.kt)("p",null,"Let's start with setting up an MsSQL server."),(0,i.kt)("h2",{id:"initial-setup"},"Initial setup"),(0,i.kt)("p",null,"Let's quickly first see how you can integrate MsSQL in Appsmith. There are not many steps or any complicated ones. Just head to Appsmith, and let's say for the scope of this guide, you're building a new application which you want to get data from your MsSQL server."),(0,i.kt)("p",null,"So, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"New")," button to create a new application. Then click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate from a Data table")," option. You should be prompted with a screen that would ask you to connect the database of your choice. It should look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 1 49 56 AM",src:a(62818).Z,width:"1172",height:"715"})),(0,i.kt)("p",null,"Now you can click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect new Datasource")," and find ",(0,i.kt)("inlineCode",{parentName:"p"},"MsSQL")," from all the available database options."),(0,i.kt)("p",null,"Now you will be greeted with a page to fill in your credentials for your MsSQL server. You should fill in the host/port along with your database name and login credentials. The unfilled screen for this would look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 12 54 20 PM",src:a(20516).Z,width:"1133",height:"688"})),(0,i.kt)("p",null,"Once you fill in all the details, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," from the options below to test your connection. It will let you know if Appsmith is successfully able to connect to your database or not."),(0,i.kt)("p",null,"If you're able to test your connection successfully using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," button, you're ready to hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," and save your connection on Appsmith."),(0,i.kt)("h2",{id:"querying-the-database"},"Querying the database"),(0,i.kt)("p",null,"So, now that you're done with setting up a connection to your database server, you should be able to see a screen like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 1 03 09 PM",src:a(23913).Z,width:"1171",height:"278"})),(0,i.kt)("p",null,"From here, let's try writing a query for our application. For our database, I have already created a table ",(0,i.kt)("inlineCode",{parentName:"p"},"pokemon")," which already has the data that we need to query."),(0,i.kt)("p",null,"Querying in Appsmith is very simple; click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"New Query")," button from above and select which kind of query operation you're going to have. For our use case, we're just reading from our database, so I would go ahead and use ",(0,i.kt)("inlineCode",{parentName:"p"},"Select"),"."),(0,i.kt)("p",null,"Now for your convenience, Appsmith does all the input sanitization and helps you query your database without worrying about any malicious data. In our case, we're just reading from the database, so our query will also be very simple, and that will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT * FROM pokemon;\n")),(0,i.kt)("p",null,"You can put your query in the Query box and the screen should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 1 09 33 PM",src:a(8520).Z,width:"1180",height:"690"})),(0,i.kt)("p",null,"From here, you can run your query, name your query something to remember and test it. If you need more information regarding querying MsSQL in Appsmith, you can refer to this ",(0,i.kt)("a",{parentName:"p",href:"/appsmith-docs/reference/datasources/querying-mssql#querying-mssql"},"great piece of article"),"."),(0,i.kt)("p",null,"Once you write your query, it will be saved in the left-hand side menu with the identifier name of your choice and would look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 1 11 51 PM",src:a(69350).Z,width:"250",height:"335"})),(0,i.kt)("h2",{id:"displaying-the-data"},"Displaying the data"),(0,i.kt)("p",null,"Now that we have connected our query and database to our Appsmith application, it's time to display the data. Let's start with a simple way to go on to this."),(0,i.kt)("p",null,"How is the data stored in MsSQL databases? Tables. What would be the easiest way to see that in our application? Yep, using a table."),(0,i.kt)("p",null,"So let's try displaying our query data in a single table. For that, go to the page in Appsmith and drag and drop a Table widget. Now click on the settings icon and all you have to do is replace the table data value with your query data. In this case, the identifier of my query is ",(0,i.kt)("inlineCode",{parentName:"p"},"main_query")," so I will just put ",(0,i.kt)("inlineCode",{parentName:"p"},"main_query.data")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}"),"."),(0,i.kt)("p",null,"It looks something like this: ",(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 2 12 53 PM",src:a(67970).Z,width:"1405",height:"682"})),(0,i.kt)("p",null,"And when you reload your page, voila, your query data will be there in a table!!!"),(0,i.kt)("p",null,"Easy, right?"),(0,i.kt)("p",null,"So, let's now try to display the data in a more good-looking way, like in a List."),(0,i.kt)("p",null,"For that, first of all, let's drag and drop a List widget in our UI. Now that we have the UI, let's set up the data. Again, simple click on the settings icon of the List widget and replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," value with ",(0,i.kt)("inlineCode",{parentName:"p"},"{{your_query_identifier.Data}}"),", in my case, that will be ",(0,i.kt)("inlineCode",{parentName:"p"},"{{main_query.Data}}"),"."),(0,i.kt)("p",null,"But the only thing more that you have to do this time is set up the image and text widgets inside the List widget to the values they are expected to show. Since the image should render ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," part of each item, we set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"{{currentItem.URL}}")," in the settings of Image1 in the List. Similarly, the text widgets will be updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"{{currentItem.Name}}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{{currentItem.Type}}"),"."),(0,i.kt)("p",null,"Please note that these are the columns in my database table that I get from the query; they might differ depending on your data. All we want is the List items to show the data that it is getting from the query data that we set up earlier."),(0,i.kt)("p",null,"Once this is done, after a bit of styling (adding colors to text), you will have something that looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 2 35 39 PM",src:a(24314).Z,width:"1115",height:"677"})),(0,i.kt)("p",null,"Oh, also, since all data is fetched from your database, naturally, adding more data will automatically show more data in your application. Like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 2 40 48 PM",src:a(52843).Z,width:"1113",height:"676"})),(0,i.kt)("h2",{id:"writing-data"},"Writing data"),(0,i.kt)("p",null,"Now that you know how to read data from your MsSQL database and display relevant data in your Appsmith application, let's now focus on writing to your database. First of all, if you have chosen ",(0,i.kt)("inlineCode",{parentName:"p"},"Read only")," for your database connection in Appsmith, as you can see in one of the images below, you should choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Read/Write"),"."),(0,i.kt)("p",null,"For this, let's update our application by adding two new buttons which update a new ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," column named ",(0,i.kt)("inlineCode",{parentName:"p"},"Valid")," in our database."),(0,i.kt)("p",null,"This allows the user to tell if the data is correct and send this information to the database. This is a bit straightforward thing to demonstrate how you can write/update data in your database from your Appsmith application."),(0,i.kt)("p",null,"So, first let's drag and drop two buttons for sending ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to our database. Our app now looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 3 53 54 PM",src:a(70377).Z,width:"1120",height:"566"})),(0,i.kt)("p",null,"Now, let's write queries for actually updating the stuff. Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Datasources")," from your left-hand side menu and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"New Query")," like before. This time we would be choosing ",(0,i.kt)("inlineCode",{parentName:"p"},"Update")," in the next step."),(0,i.kt)("p",null,"Now our updating queries will be this in our case: For ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UPDATE pokemon\n  SET Valid = 'TRUE'\n  WHERE Name = {{ List1.selectedItem.Name }};\n")),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UPDATE pokemon\n  SET Valid = 'FALSE'\n  WHERE Name = {{ List1.selectedItem.Name }};\n")),(0,i.kt)("p",null,"Please note that I am using ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," as a primary key in my database. The ",(0,i.kt)("inlineCode",{parentName:"p"},"List1")," is the List widget in our application. ",(0,i.kt)("inlineCode",{parentName:"p"},"List1.selectedItem.Name")," refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"selectedItem")," from the List widget."),(0,i.kt)("p",null,"I named these queries ",(0,i.kt)("inlineCode",{parentName:"p"},"update_true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"update_false")," respectively in our case here."),(0,i.kt)("p",null,"Now head back to your page and click on the settings icon of the buttons you added. Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Run Query")," option and choose the query that you want to run when the button is clicked."),(0,i.kt)("p",null,"In our case here, I am running ",(0,i.kt)("inlineCode",{parentName:"p"},"update_true")," from the green button, click and ",(0,i.kt)("inlineCode",{parentName:"p"},"update_false")," from the red button click."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 4 00 36 PM",src:a(30212).Z,width:"1116",height:"686"})),(0,i.kt)("p",null,"To display the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"Valid")," column, I also have added a switch to be ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"Valid")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". And the complete application now looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2021-10-06 at 4 05 11 PM",src:a(36462).Z,width:"1122",height:"681"})),(0,i.kt)("p",null,"Now, if you click the green confirm button, the switch will be set to on, and on clicking the red button, the switch will be set to off. You can go ahead and check out the entire application ",(0,i.kt)("a",{parentName:"p",href:"https://app.appsmith.com/applications/615cb29fea18372f05103b73/pages/615cb29fea18372f05103b75"},"here"),"."),(0,i.kt)("p",null,"And, now you know how to use MsSQL as a data source for your Appsmith application :)"))}u.isMDXComponent=!0},62818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-1-1164662350dd0b24f4369eda214da487.png"},30212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-10-fefa20ad9ee1c3ebad20c5e91faf3ca1.png"},36462:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-11-6b401f0be915e4d76e3d77d8a78a94cd.png"},20516:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-2-14ed3a6591bf1305580a2bea8ecd4778.png"},23913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-3-e2b69ea24568404b0e78f2985e8469af.png"},8520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-4-d7029b4816450852f7cc57f1a3cbf750.png"},69350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-5-2fef6e93e83024059e6674df020fb688.png"},67970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-6-7097ce10d23a0860ee35b8706128e8b4.png"},24314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-7-1ffed4db7b55fc8a5e6174e111dfee4d.png"},52843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-8-7b638b63297a04c7bf99129723c4c86a.png"},70377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mssql-appsmith-9-b4a07b646fb2c4d4e5be8ecb698e38e1.png"}}]);