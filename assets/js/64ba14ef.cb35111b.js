"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3},i="Deployment Errors",p={unversionedId:"help-and-support/troubleshooting-guide/deployment-errors",id:"help-and-support/troubleshooting-guide/deployment-errors",title:"Deployment Errors",description:"Ports Unavailable",source:"@site/docs/help-and-support/troubleshooting-guide/deployment-errors.md",sourceDirName:"help-and-support/troubleshooting-guide",slug:"/help-and-support/troubleshooting-guide/deployment-errors",permalink:"/help-and-support/troubleshooting-guide/deployment-errors",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/help-and-support/troubleshooting-guide/deployment-errors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JS Errors",permalink:"/help-and-support/troubleshooting-guide/js-errors"},next:{title:"Application Errors",permalink:"/help-and-support/troubleshooting-guide/application-errors"}},l={},s=[{value:"Ports Unavailable",id:"ports-unavailable",level:2},{value:"Containers Failed to Start",id:"containers-failed-to-start",level:2},{value:"Unable to access Appsmith",id:"unable-to-access-appsmith",level:2},{value:"OAuth Sign Up not working",id:"oauth-sign-up-not-working",level:2},{value:"Server not booting because of MongoCommandException",id:"server-not-booting-because-of-mongocommandexception",level:2},{value:"Step 1: Edit MongoDB URI",id:"step-1-edit-mongodb-uri",level:4},{value:"Step 2: Restart server",id:"step-2-restart-server",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment-errors"},"Deployment Errors"),(0,r.kt)("h2",{id:"ports-unavailable"},"Ports Unavailable"),(0,r.kt)("p",null,"If you encounter the error that ports 80 & 443 are not open, we recommend that you kill all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run appsmith on another port."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", change the ports for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com"},"Nginx")," container to a custom port as shown in the below example."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    ports:\n      - "80:80"\n      - "443:443"\n      - "9001:9001"\n')),(0,r.kt)("p",{parentName:"li"},"Change to"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    ports:\n      - "8080:80"\n      - "8443:443"\n      - "9801:9001"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To kill a previous version of appsmith running on these ports, run the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"sudo su"),(0,r.kt)("li",{parentName:"ul"},"docker container kill $(docker ps -q)"))),(0,r.kt)("h2",{id:"containers-failed-to-start"},"Containers Failed to Start"),(0,r.kt)("p",null,"If you chose to initialize a new database and are seeing this error, it could be due to an error while fetching dependencies during installation. Deleting the current installation direction, killing the docker containers, and restarting the installation should work in most cases. If it does not, please reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"discord")),(0,r.kt)("p",null,"If you are trying to connect to an existing ",(0,r.kt)("a",{parentName:"p",href:"../../reference/datasources/querying-mongodb/"},"MongoDB")," and the containers failed to start it may be due to one of the following reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Incorrect ",(0,r.kt)("a",{parentName:"li",href:"../../reference/datasources/querying-mongodb/"},"MongoDB")," credentials"),(0,r.kt)("li",{parentName:"ol"},"Empty Salt / Password for encryption")),(0,r.kt)("p",null,"Restart the installation process with valid values for the above"),(0,r.kt)("h2",{id:"unable-to-access-appsmith"},"Unable to access Appsmith"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance."),(0,r.kt)("li",{parentName:"ul"},"You can access the running application on",(0,r.kt)("a",{parentName:"li",href:"http://localhost"}," localhost")," in any browser or the ",(0,r.kt)("inlineCode",{parentName:"li"},"public IP")," of your machine."),(0,r.kt)("li",{parentName:"ul"},"You may need to wait 2 - 3 minutes before accessing the application to allow ",(0,r.kt)("a",{parentName:"li",href:"https://www.nginx.com"},"Nginx")," to start.")),(0,r.kt)("h2",{id:"oauth-sign-up-not-working"},"OAuth Sign Up not working"),(0,r.kt)("p",null,"If your deployment is behind an ELB / Proxy, you must update the ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com"},"Nginx")," configuration of the deployment. In the file ",(0,r.kt)("inlineCode",{parentName:"p"},"data/nginx/nginx.app.conf.template")," modify the line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"proxy_set_header X-Forwarded-Proto $scheme;\n")),(0,r.kt)("p",null,"with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;\n")),(0,r.kt)("p",null,"This will ensure that the redirect URLs are correct during ",(0,r.kt)("a",{parentName:"p",href:"../../core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/"},"OAuth2")," logins. This works even if the ELB is configured to run on a custom port."),(0,r.kt)("h2",{id:"server-not-booting-because-of-mongocommandexception"},"Server not booting because of MongoCommandException"),(0,r.kt)("p",null,"In release ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.6.4"),", we upgraded our libraries & ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-framework"},"Spring framework"),". This caused a compatibility issue between the libraries used within Appsmith and the version of ",(0,r.kt)("a",{parentName:"p",href:"../../reference/datasources/querying-mongodb/"},"MongoDB")," that was shipped earlier. This didn't show up in our testing because all our testing happened against ",(0,r.kt)("a",{parentName:"p",href:"../../reference/datasources/querying-mongodb/"},"MongoDB")," clusters with replica sets, where the problem doesn't surface. We apologize for this breaking experience."),(0,r.kt)("p",null,"If you see an error like the below, your instance is affected by the library upgrade we performed in ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.6.4"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Caused by: com.mongodb.MongoCommandException: Command failed with error 17 (ProtocolError): \'Attempt to switch database target during SASL authentication.\' on server mongo:27017. The full response is {"ok": 0.0, "errmsg": "Attempt to switch database target during SASL authentication.", "code": 17, "codeName": "ProtocolError"}\n')),(0,r.kt)("p",null,"Please follow the steps mentioned below to fix your Appsmith installation."),(0,r.kt)("h4",{id:"step-1-edit-mongodb-uri"},"Step 1: Edit MongoDB URI"),(0,r.kt)("p",null,"Adding ",(0,r.kt)("inlineCode",{parentName:"p"},"&authSource=admin")," to the end of your ",(0,r.kt)("inlineCode",{parentName:"p"},"APPSMITH_MONGODB_URI")," variable\u2019s value in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.env")," file. For example, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.env")," file, if you have the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Old config\nAPPSMITH_MONGODB_URI=mongodb://<your_username>:<your_password>@mongo/appsmith?retryWrites=true\n")),(0,r.kt)("p",null,"Change it to the following (notice the only change is ",(0,r.kt)("inlineCode",{parentName:"p"},"&authSource=admin"),". Do NOT copy-paste this whole line. Only add the ",(0,r.kt)("inlineCode",{parentName:"p"},"&authSource=admin")," part to your existing value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# New config\nAPPSMITH_MONGODB_URI=mongodb://<your_username>:<your_password>@mongo/appsmith?retryWrites=true&authSource=admin\n")),(0,r.kt)("p",null,"Save the file."),(0,r.kt)("h4",{id:"step-2-restart-server"},"Step 2: Restart server"),(0,r.kt)("p",null,"Now restart your container with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose up -d --force-recreate appsmith-internal-server\n")),(0,r.kt)("p",null,"In a minute or two, the server should now come up and be ready."))}c.isMDXComponent=!0}}]);