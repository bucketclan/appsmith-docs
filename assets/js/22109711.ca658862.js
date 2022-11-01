"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[615],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,g=u["".concat(o,".").concat(h)]||u[h]||c[h]||i;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33823:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={},s="Display Data in Tables",l={unversionedId:"core-concepts/data-access-and-binding/displaying-data-read/display-data-tables",id:"core-concepts/data-access-and-binding/displaying-data-read/display-data-tables",title:"Display Data in Tables",description:"The Table Widget helps us visualize rows of information that are returned from our data sources. We make use of the Table Data property to display data in the table.",source:"@site/docs/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md",sourceDirName:"core-concepts/data-access-and-binding/displaying-data-read",slug:"/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables",permalink:"/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Displaying Data (Read)",permalink:"/core-concepts/data-access-and-binding/displaying-data-read/"},next:{title:"Capturing Data (Write)",permalink:"/core-concepts/data-access-and-binding/capturing-data-write/"}},o={},p=[{value:"Pagination",id:"pagination",level:2},{value:"Offset Based Pagination",id:"offset-based-pagination",level:3},{value:"Key Based Pagination",id:"key-based-pagination",level:3},{value:"Server-Side Searching / Filtering",id:"server-side-searching--filtering",level:2},{value:"Searching",id:"searching",level:4},{value:"Filtering",id:"filtering",level:4},{value:"Transforming Table Data",id:"transforming-table-data",level:2},{value:"Example Github API",id:"example-github-api",level:4}],d={toc:p};function c(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"display-data-in-tables"},"Display Data in Tables"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../../../reference/widgets/table/"},"Table Widget")," helps us visualize rows of information that are returned from our data sources. We make use of the Table Data property to display data in the table."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3203).Z,width:"941",height:"694"})),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Tables are generally required to display large data sets from ",(0,r.kt)("a",{parentName:"p",href:"../querying-a-database/"},"Queries")," and ",(0,r.kt)("a",{parentName:"p",href:"../../connecting-to-data-sources/authentication/"},"APIs")," yet browsers cannot load all the data present in our database. To paginate this data, we can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enable the server-side pagination property in the table"),(0,r.kt)("li",{parentName:"ol"},"Call the API / Query onPageChange"),(0,r.kt)("li",{parentName:"ol"},"Configure pagination in the API / Query")),(0,r.kt)("h3",{id:"offset-based-pagination"},"Offset Based Pagination"),(0,r.kt)("p",null,"This method uses the Table's page number to determine the offset of the records to fetch from the database. This method relies on the pageNo and pageSize fields of the ",(0,r.kt)("a",{parentName:"p",href:"../../../reference/widgets/table/"},"Table")," and is used in both APIs and Queries."),(0,r.kt)("p",null,"The pageNo and pageSize can be used in the API / Query by referencing them inside ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ }}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from users limit {{ Table1.pageSize }} offset {{ (Table1.pageNo - 1) * Table1.pageSize }}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://mock-api.appsmith.com/users?page={{Table1.pageNo}}\n")),(0,r.kt)("h3",{id:"key-based-pagination"},"Key Based Pagination"),(0,r.kt)("p",null,"This method uses a value in the response of the API as the key to the next API call. This can be configured in the API settings by providing the Next & Previous URLs that the API should execute onPageChange."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7177).Z,width:"1181",height:"937"})),(0,r.kt)("h2",{id:"server-side-searching--filtering"},"Server-Side Searching / Filtering"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../reference/widgets/table/"},"Tables")," come with client-side searching, and filtering out of the box. To perform these operations ",(0,r.kt)("a",{parentName:"p",href:"../../../reference/widgets/table/#setup-server-side-search"},"server-side"),", we have to pass these values to the API / Query."),(0,r.kt)("h4",{id:"searching"},"Searching"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call the API / Query onSearchTextChange from the Table"),(0,r.kt)("li",{parentName:"ol"},"Pass the value of the Table's searchText to the API / Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'select * from users where name ilike {{"%" + Table1.searchText + "%"}}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://mock-api.appsmith.com/users?name={{Table1.searchText}}\n")),(0,r.kt)("h4",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget"},"Server-side filtering")," requires us to use another widget like a dropdown which can provide users a list of filters that our APIs support."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag a dropdown and populate it with filter values"),(0,r.kt)("li",{parentName:"ol"},"Call the API / Query onOptionChange from the Table"),(0,r.kt)("li",{parentName:"ol"},"Pass the value of the Dropdown's selectedOptionValue to the API / Query")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from users where gender = {{genderDropdown.selectedOptionValue}}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://mock-api.appsmith.com/users?gender={{genderDropdown.selectedOptionValue}}\n")),(0,r.kt)("h2",{id:"transforming-table-data"},"Transforming Table Data"),(0,r.kt)("p",null,"Some API / Query responses might have nested, unnecessary, or poorly formatted fields. These can be easily transformed inside the table data property by mapping over the data using javascript."),(0,r.kt)("h4",{id:"example-github-api"},"Example Github API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.github.com/repos/appsmithorg/appsmith/issues\n")),(0,r.kt)("p",null,"Binding this APIs response directly to a table would be unreadable like the image below"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(738).Z,width:"1128",height:"917"})),(0,r.kt)("p",null,"To format this data, we can simply write a map function over the API response and return an array of objects with only the fields we want to display. We can also format these fields how we'd like using javascript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{{ \n    fetch_issues.data.map((issue) => {\n    return {\n        user: issue.user.login,\n        assignees: issue.assignees.map((assignee) => assignee.login).join(","),\n        title: issue.title,\n        number: "#" + issue.number,\n    };\n    });\n\n}}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(29921).Z,width:"2270",height:"1802"})))}c.isMDXComponent=!0},3203:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bind-table_(2)_(4)-79750f38d9b7a97e0aba5dbeede75728.gif"},738:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/github_table-1692eb097d0855e01d0d000d65af9f50.gif"},29921:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/github_table_formatted-7e907c8935014d77c842bdbef4633841.png"},7177:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/pagination_(2)_(2)-c82d720d9d9e381ab0aed67fd85158fa.gif"}}]);