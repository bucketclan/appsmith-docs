"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:9},r="MongoDB",l={unversionedId:"reference/datasources/querying-mongodb/README",id:"reference/datasources/querying-mongodb/README",title:"MongoDB",description:"MongoDB is a document-oriented NoSQL database used for high-volume data storage. It doesn't store the data in the form of tables and rows as in traditional relational databases. Instead, it stores the data in collections and documents in JSON format (using key-value pairs).",source:"@site/docs/reference/datasources/querying-mongodb/README.md",sourceDirName:"reference/datasources/querying-mongodb",slug:"/reference/datasources/querying-mongodb/",permalink:"/appsmith-docs/reference/datasources/querying-mongodb/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/reference/datasources/querying-mongodb/README.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"GraphQL",permalink:"/appsmith-docs/reference/datasources/graphql"},next:{title:"Mongo Query Syntax",permalink:"/appsmith-docs/reference/datasources/querying-mongodb/mongo-syntax"}},s={},p=[{value:"Connection Settings",id:"connection-settings",level:2},{value:"<strong>Connection</strong>",id:"connection",level:3},{value:"<strong>Authentication</strong>",id:"authentication",level:3},{value:"<strong>SSL</strong>",id:"ssl",level:3},{value:"Connect using SRV URI",id:"connect-using-srv-uri",level:3},{value:"Standard Connection String Format",id:"standard-connection-string-format",level:4},{value:"<strong>Domain name service seed list format</strong>",id:"domain-name-service-seed-list-format",level:4},{value:"Querying Mongo (Form Input)",id:"querying-mongo-form-input",level:2},{value:"1. Find Document(s)",id:"1-find-documents",level:3},{value:"2. Insert Document(s)",id:"2-insert-documents",level:3},{value:"3. Update Document(s)",id:"3-update-documents",level:3},{value:"4. Delete Document(s)",id:"4-delete-documents",level:3},{value:"5. Count",id:"5-count",level:3},{value:"6. Distinct",id:"6-distinct",level:3},{value:"7. Aggregate",id:"7-aggregate",level:3},{value:"Querying Mongo (Advanced)",id:"querying-mongo-advanced",level:2},{value:"Template Queries",id:"template-queries",level:2},{value:"Using Queries in applications",id:"using-queries-in-applications",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDB"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com"},"MongoDB")," is a document-oriented NoSQL database used for high-volume data storage. It doesn't store the data in the form of tables and rows as in traditional relational databases. Instead, it stores the data in collections and documents in JSON format (using key-value pairs)."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The following document assumes that you understand the ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/core-concepts/connecting-to-data-sources/connecting-to-databases#connecting-to-a-database"},"basics of connecting to databases on Appsmith"),". If not, please go over them before reading further.")),(0,o.kt)("h2",{id:"connection-settings"},"Connection Settings"),(0,o.kt)("p",null,"Appsmith needs the following parameters for connecting to a Mongo database:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All required fields are suffixed with an asterisk (*).")),(0,o.kt)("h3",{id:"connection"},(0,o.kt)("strong",{parentName:"h3"},"Connection")),(0,o.kt)("p",null,"To set up a connection, fill in the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connection Mode:")," You must choose one of the following two modes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Read Only:")," Choosing this mode gives Appsmith read-only permission on the database. This only allows you to fetch data from the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Read / Write:")," Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connection Type:")," You must choose one of the following connection types:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Direct Connection"),": Choose this connection type to connect directly to a mongo instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Replicate Set"),": Choose this connection type to connect to a set of mongo instances."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host Address / Port:")," Fill in the database host\u2019s address and port. If you don\u2019t specify a port, Appsmith will try to connect to port ",(0,o.kt)("inlineCode",{parentName:"li"},"27017"),". You can specify multiple host addresses for a replicate set. If you have an ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/#dns-seed-list-connection-format"},"SRV URI"),", please follow ",(0,o.kt)("a",{parentName:"li",href:"./#connect-using-srv-uri"},"these")," steps to connect to your MongoDB instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default")," ",(0,o.kt)("strong",{parentName:"li"},"Database Name:")," Fill in the name of the database you want to connect to. This is your database\u2019s name on your mongo server.")),(0,o.kt)("h3",{id:"authentication"},(0,o.kt)("strong",{parentName:"h3"},"Authentication")),(0,o.kt)("p",null,"For authentication, fill in the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database Name:")," Fill in the name of the database against which you want to authenticate. This is typically admin for most MongoDB instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authentication Type:")," Choose the authentication mechanism to connect to your database. This can be one of ",(0,o.kt)("inlineCode",{parentName:"li"},"SCRAM-SHA-1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"SCRAM-SHA-256"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"MONGO-CR"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username:")," Fill in the username required for authenticating connection requests to your database. Set this to empty if you won't want to specify a username to authenticate with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password:")," Fill password required for authenticating connection requests for the given username to the database. Set this to ",(0,o.kt)("em",{parentName:"li"},"empty")," if you want to log in without a password (please ensure your database accepts such connections).")),(0,o.kt)("h3",{id:"ssl"},(0,o.kt)("strong",{parentName:"h3"},"SSL")),(0,o.kt)("p",null,"The SSL Mode can be set to one of the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default")),": Depends on Connection Type. If using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Replica set"),", this is ",(0,o.kt)("inlineCode",{parentName:"li"},"Enabled"),". If using a ",(0,o.kt)("inlineCode",{parentName:"li"},"Direct connection"),", this is ",(0,o.kt)("inlineCode",{parentName:"li"},"Disabled"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Enabled")),": Reject connection (if SSL is not available)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Disabled")),": Connect without SSL, use a plain unencrypted connection.")),(0,o.kt)("h3",{id:"connect-using-srv-uri"},"Connect using SRV URI"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SRV_record"},"service record")," (SRV) defines the location of a service hosting, like a hostname, port number, and more. You can create a MongoDB datasource on Appsmith using. ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-uri-format"},"SRV URI Formats")," - ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format"},"Standard URI Format")," or a ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format"},"DNS Seed List Format"),"."),(0,o.kt)("h4",{id:"standard-connection-string-format"},"Standard Connection String Format"),(0,o.kt)("p",null,"A Standard Connection String Format(Standard Format) connects to a standalone replica set or a shared cluster of MongoDB. The standard format is represented as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb://[@username:@password@]@host[:@port]/[@defaultauthdb]/[?authSource=@authDB]]\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98771).Z,width:"2480",height:"872"}),(0,o.kt)("figure",null,(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Prefix with ",(0,o.kt)("strong",null,"mongodb://")," to add a Standard Connection String URI")))),(0,o.kt)("p",null,"Map the URI fields as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mongodb://")," - a prefix to identify that it's a standard connection format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@username")," - the username of the MongoDB you wish to connect to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@password")," - the password of the MongoDB you want to connect to.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the username or password includes (",(0,o.kt)("inlineCode",{parentName:"p"},": /? # [ ] @),")," convert these characters using ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3986#section-2.1"},"percent encoding"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@host")," - the host address of the MongoDB you wish to connect to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@port")," - the port on which MongoDB is running.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can add ",(0,o.kt)("strong",{parentName:"p"},"multiple host")," and ",(0,o.kt)("strong",{parentName:"p"},"port")," details separated by a ",(0,o.kt)("strong",{parentName:"p"},"comma")," in the connection string to connect using the same user.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@defaultauthdb")," - the database you wish to connect to and would also authenticate the user credentials.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`defaultauthdb`")," is a ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},(0,o.kt)("strong",{parentName:"p"},"required"))," field in Appsmith as the queries would run against it.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@authDB")," - the database that stores the authorization information and authenticates the credentials. If you wish to use any other database instead of defaultauthdb, you can add the auth database name using the authSource keyword.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"**`authSource`**")," is unspecified, Appsmith attempts to authenticate using the ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"admin")," database.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example URIs")),(0,o.kt)("p",null,"Some example URIs could be as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default database is ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`users,`")," and ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`authSource`")," is set as ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`authusers`")," which is used to authenticate the user(",(0,o.kt)("mark",{style:{color:"#d33d3f"}},(0,o.kt)("inlineCode",{parentName:"li"},"dbuser")),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb://dbuser:s@cur!ty/mongodb0.standalone.com:27017/users/?authSource=authusers\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`authSource`")," is set as ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`admin`"),(0,o.kt)("mark",{style:{color:"#d33d3f"}},",")," and ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`replicaSet`")," keyword point to set the name of the replica set (",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`mongoRepl`"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb://dbuser:s@cur!ty@mongodb0.replicaset.com:27017,mongodb2.replicaset.com:27017/?authSource=admin&replicaSet=mongoRepl\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`authSource`")," keyword points to ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`admin`"),(0,o.kt)("mark",{style:{color:"#d33d3f"}},".")," You can add multiple host and port combinations that points to the shared cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb://dbuser:s@cur!ty@mongos0.sharedcluster.com:27017,mongos1.sharedcluster.com:27017,mongos2.sharedcluster.com:27017/?authSource=admin\n")),(0,o.kt)("h4",{id:"domain-name-service-seed-list-format"},(0,o.kt)("strong",{parentName:"h4"},"Domain name service seed list format")),(0,o.kt)("p",null,"MongoDB also supports a Domain Name Service (DNS) Seed list for connecting with the standard format. To use the DNS seed list format, you\u2019ll have to prefix the connection string with ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb+srv://"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"+srv")," indicates that the hostname corresponds to the DNS SRV. The DNS seed list format is represented as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb+srv://[@username:@password@]@host[:@port]/[@defaultauthdb]/[?authSource=@authDB]]\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7257).Z,width:"2486",height:"880"}),(0,o.kt)("figure",null,(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Prefix with ",(0,o.kt)("strong",null,"mongodb+srv://")," to add a DNS seed list URI")))),(0,o.kt)("p",null,"Like ",(0,o.kt)("a",{parentName:"p",href:"./#standard-connection-string-format"},"standard format"),", you can map the fields as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mongodb+srv://")," - a prefix to identify that it\u2019s a DNS Seed List format.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},"`+srv`")," automatically sets the TLS or SSL option to true. If you wish to turn off the TLS or SSL option, set ",(0,o.kt)("mark",{style:{color:"#d33d3f"}},(0,o.kt)("inlineCode",{parentName:"p"},"tls/ssl=false"))," in the query string.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Like Standard format, you can add ",(0,o.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"password"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"port"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"default database,")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"authSource"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the username or password includes (",(0,o.kt)("inlineCode",{parentName:"p"},": /? # [ ] @),")," convert these characters using ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3986#section-2.1"},"percent encoding"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example URIs")),(0,o.kt)("p",null,"An example URI could be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mongodb"},"mongodb+srv://dbuser:s@cur!ty/server.dnsseedlist.com/defaultauthdbSource?authSource=authusersb\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format"},"standard format "),"and ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format"},"DNS seed list format")," available on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.ssl"},"MongoDB documentation"),".")),(0,o.kt)("h2",{id:"querying-mongo-form-input"},"Querying Mongo (Form Input)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Form input")," provides an easy interface to query the Mongo database."),(0,o.kt)("p",null,"As part of Form Input, Appsmith supports queries like ",(0,o.kt)("inlineCode",{parentName:"p"},"Find one or more documents"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Insert a document"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Update one"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Count,")," and more."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All mongo queries return an ",(0,o.kt)("strong",{parentName:"p"},"array of objects")," where each object is a ",(0,o.kt)("strong",{parentName:"p"},"mongo document"),", and the object's properties are the document's keys.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72169).Z,width:"1258",height:"720"})),(0,o.kt)("h3",{id:"1-find-documents"},"1. Find Document(s)"),(0,o.kt)("p",null,"This command selects documents in a collection or view. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The name of the collection or view to query. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"restaurants\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Query"),": The query predicate. If unspecified, then all documents in the collection will match the predicate. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n     rating: { $gte: 9 }, \n     cuisine: "italian" \n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Sort")," : (Optional) The sort specification for ordering the results. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ name: 1 }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Projection")," : (Optional) The projection specification determines which fields to include in the returned documents. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ name: 1, rating: 1, address: 1 }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Limit")," : (Optional) The maximum number of documents to return. If unspecified, then defaults to 10 documents. The input is expected in number format :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"10\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Skip")," : (Optional) Number of documents to skip. Defaults to 0. The input is expected in number format :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0\n")),(0,o.kt)("h3",{id:"2-insert-documents"},"2. Insert Document(s)"),(0,o.kt)("p",null,"This command inserts one or more documents and returns a document containing the status of all inserts. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The name of the target collection. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"users\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Documents"),": An array of one or more documents to insert into the named collection. The input is expected in a JSON/BSON Array format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[ { _id: 1, user: "abc123", status: "A" } ]\n')),(0,o.kt)("h3",{id:"3-update-documents"},"3. Update Document(s)"),(0,o.kt)("p",null,"This command modifies multiple documents in a collection. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The collection against which to run the command. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"people\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Query"),": The query that matches documents to update. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ name: "Andy" }\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Update"),": The modifications are to apply. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ $inc: { score: 1 } }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Limit"),": The dropdown is used to configure if this delete command should act upon a single document or if this command should delete all the matching documents according to the query."),(0,o.kt)("h3",{id:"4-delete-documents"},"4. Delete Document(s)"),(0,o.kt)("p",null,"This command removes documents from a collection. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The target collection against which to run the command. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"orders\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Query"),": The query that matches document(s) to delete. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ status: "D" }\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Limit"),": The dropdown is used to configure if this delete command should act upon a single document or if this command should delete all the matching documents according to the query."),(0,o.kt)("h3",{id:"5-count"},"5. Count"),(0,o.kt)("p",null,"This command counts the number of documents in a collection or a view. Returns a document that contains this count. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The name of the collection or view to count. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"orders\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Query"),": A query that selects which documents to count in the collection or view. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ ord_dt: { $gt: new Date('01/01/2021') }\n")),(0,o.kt)("h3",{id:"6-distinct"},"6. Distinct"),(0,o.kt)("p",null,"This command finds the distinct values for a specified field across a single collection. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The name of the collection to query for distinct values. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"inventory\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Query"),": A query specifies documents from which to retrieve the distinct values. The input is expected in JSON/BSON format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ dept: "A"} }\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Key/Field"),": The field for which to return distinct values. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"item.sku\n")),(0,o.kt)("h3",{id:"7-aggregate"},"7. Aggregate"),(0,o.kt)("p",null,"This command performs aggregation operations using the aggregation pipeline. The pipeline allows users to process data from a collection or other source with a sequence of stage-based manipulations. The following fields are supported in Appsmith for this command :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Collection Name"),": The name of the collection or view that acts as the input for the aggregation pipeline. The input is expected in a string format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"articles\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array of Pipelines"),": An array of aggregation pipeline stages that process and transform the document stream as part of the aggregation pipeline. The input is expected in JSON/BSON array format like the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n      { $project: { tags: 1 } },\n      { $unwind: "$tags" },\n      { $group: { _id: "$tags", count: { $sum : 1 } } }\n]\n')),(0,o.kt)("p",null,"The above example performs an aggregate operation on the articles collection to calculate the count of each distinct element in the tags array that appears in the collection."),(0,o.kt)("h2",{id:"querying-mongo-advanced"},"Querying Mongo (Advanced)"),(0,o.kt)("p",null,"You can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Raw")," command to write your custom Mongo queries."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The mongo database command syntax is slightly different from the mongo collection methods you may be familiar with. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/command/nav-crud/"},"Read more"),".")),(0,o.kt)("p",null,"To add a Raw query, set your query parameters as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Commands")," - Select Command as ",(0,o.kt)("strong",{parentName:"li"},"Raw.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query palette -")," Add the Raw query to it."," "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Run")," to test your query.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to create a Raw Query?",src:n(80367).Z,width:"2582",height:"890"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All mongo queries return an ",(0,o.kt)("strong",{parentName:"p"},"array of objects")," where each object is a ",(0,o.kt)("strong",{parentName:"p"},"mongo document"),", and the object's properties are the document's keys.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/aggregation-pipeline/"},"pipeline")," is an array that contains the aggregation stages that process the documents. In your Raw query, you'll have to include the filter criteria in a pipeline keyword when using aggregation. For example, you wish to fetch data from movies where the revenue is 42600000. You'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"$match")," that checks for documents where the ",(0,o.kt)("inlineCode",{parentName:"p"},"revenue")," is  ",(0,o.kt)("inlineCode",{parentName:"p"},"42600000"),". You added the below query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "aggregate":"movies",\n   "$lookup":[\n      {\n         "$match":{\n            "revenue":42600000\n         }\n      }\n   ],\n   "cursor":{\n      "batchSize":10\n   }\n}\n\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, Mongo returns only ",(0,o.kt)("strong",{parentName:"p"},"101 records")," due to its default ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/"},"batchSize"),". You can update the limit and batchSize by adding values to your query.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Run")," button to execute the query.")),(0,o.kt)("p",null,"The queries will fail to execute and throw an exception ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipeline option must be specified as an array.")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The error generated when the pipeline keyword  is not added",src:n(26680).Z,width:"2536",height:"1246"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Raw queries, you'll have to add the filter criteria to the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pipeline"))," keyword as below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "aggregate":"movies",\n   "pipeline":[\n      {\n         "$match":{\n            "revenue":42600000\n         }\n      }\n   ],\n   "cursor":{\n      "batchSize":10\n   }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Run")," button to execute the query.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A raw query response",src:n(19653).Z,width:"1734",height:"1438"})),(0,o.kt)("h2",{id:"template-queries"},"Template Queries"),(0,o.kt)("p",null,"Appsmith provides template queries to help with the syntax."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/reference/datasources/querying-mongodb/mongo-syntax#insert-query"},"Insert Query")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/reference/datasources/querying-mongodb/mongo-syntax#find-query"},"Find Query")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/reference/datasources/querying-mongodb/mongo-syntax#update-query"},"Update Query")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/reference/datasources/querying-mongodb/mongo-syntax#delete-query"},"Delete Query"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31072).Z,width:"1378",height:"878"})),(0,o.kt)("h2",{id:"using-queries-in-applications"},"Using Queries in applications"),(0,o.kt)("p",null,"Once you have successfully run a Query, you can use it in your application to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/displaying-data-read/"},"Display Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/capturing-data-write/"},"Capture Data"))))}u.isMDXComponent=!0},80367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Datasources__MongoDB__Add_a_Raw_Query-a45035023a653ac36f3da153007bff4c.png"},7257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Datasources__MongoDB__Connect_using_SRV__DNS_Seed_List_Format-1f39af64450894e1a323f3b8567dac45.png"},98771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Datasources__MongoDB__Connect_using_SRV__Standard_Format-0417056d92880406869509c1239a24d3.png"},19653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Datasources__MongoDB__Pipeline_Keyword_added__Response_Generated_Successfully-8b3b2e6114e13fa0c6810faebfead6bf.png"},26680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Datasources__MongoDB__Pipeline_Keyword_not_supplied__Error_Generated-9ee4756b789978c1cbb5ada2e0d21f8e.png"},72169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mongo-form-3d911276c3b5c30dc385f75723721ddc.gif"},31072:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mongo-6e316487d8d28a9787fea33a72e34dd0.gif"}}]);