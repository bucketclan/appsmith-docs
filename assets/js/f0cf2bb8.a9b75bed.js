"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[1698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1,description:"This guide helps you to connect your APIs or databases running on localhost with Appsmith using host.docker.internal or ngrok."},i="Connect via localhost",s={unversionedId:"advanced-concepts/more/how-to-work-with-local-apis-on-appsmith",id:"advanced-concepts/more/how-to-work-with-local-apis-on-appsmith",title:"Connect via localhost",description:"This guide helps you to connect your APIs or databases running on localhost with Appsmith using host.docker.internal or ngrok.",source:"@site/docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith.md",sourceDirName:"advanced-concepts/more",slug:"/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith",permalink:"/appsmith-docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"This guide helps you to connect your APIs or databases running on localhost with Appsmith using host.docker.internal or ngrok."},sidebar:"tutorialSidebar",previous:{title:"More",permalink:"/appsmith-docs/advanced-concepts/more/"},next:{title:"Migrate Applications",permalink:"/appsmith-docs/advanced-concepts/more/backup-restore"}},l={},p=[{value:"Connect to a localhost database/API",id:"connect-to-a-localhost-databaseapi",level:2},{value:"Using host.docker.internal",id:"using-hostdockerinternal",level:2},{value:"Using ngrok",id:"using-ngrok",level:2},{value:"Building a Simple Local API",id:"building-a-simple-local-api",level:3},{value:"Setting ngrok",id:"setting-ngrok",level:3},{value:"Testing APIs on Appsmith",id:"testing-apis-on-appsmith",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-via-localhost"},"Connect via localhost"),(0,a.kt)("h2",{id:"connect-to-a-localhost-databaseapi"},"Connect to a localhost database/API"),(0,a.kt)("p",null,"With your on-premises Appsmith instance running on the same system, you may use ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith#using-docker-internal"},(0,a.kt)("inlineCode",{parentName:"a"},"host.docker.internal")," "),"or ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith#using-ngrok"},"ngrok")," to connect to databases, APIs, and services that are running on localhost or as other docker containers."),(0,a.kt)("h2",{id:"using-hostdockerinternal"},"Using host.docker.internal"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host"},(0,a.kt)("inlineCode",{parentName:"a"},"host.docker.internal"))," to connect with the databases/APIs/other docker containers running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". The video below shows how to set things up."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can also visit docker docs to read the use cases and workarounds for the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms"},"host.docker.internal")," usage.")),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/4XlgsVekzhI",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Connect to databases/APIs running on localhost"))),"For Linux systems, you would need to provide a run flag `add-host`.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--add-host=host.docker.internal:host-gateway\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only more recent versions of Docker support host-gateway, which is transformed to the Docker default bridge network IP (or virtual IP of the host).")),(0,a.kt)("p",null,"Run the below command to test it and make sure the IP address from the hosts file is displayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," run \u2014-rm -\u2014add-host=host.docker.internal:host-gateway\n")),(0,a.kt)("p",null,"For Docker compose on Linux, you need to manually add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, use ",(0,a.kt)("inlineCode",{parentName:"p"},"extra hosts")," to add the entry as shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},' extra_hosts:\n    - "host.docker.internal:host-gateway"\n')),(0,a.kt)("h2",{id:"using-ngrok"},"Using ngrok"),(0,a.kt)("p",null,"Appsmith allows you to work with APIs running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," using the help of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ngrok")),". Let\u2019s look at how you can build an Appsmith application utilizing the APIs running on localhost."),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/IUX2rXmS17E",width:"750px",height:"400px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Connect to localhost using ngrok"))),(0,a.kt)("h3",{id:"building-a-simple-local-api"},"Building a Simple Local API"),(0,a.kt)("p",null,"Let's take an example, we\u2019ll use a Python FastAPI server for serving a simple API on localhost. Let\u2019s install the necessary packages using pip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install fastapi uvicorn\n")),(0,a.kt)("p",null,"Now let\u2019s write a script that\u2019ll serve as a simple API request, below is the code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\n\napp = FastAPI()\n\nitems = [{     \n       "name": "Counter-Strike",\n       "appid": 10,\n       "average_playtime": 17612,\n       "genres": "Action",\n       "price": 7.2\n     },\n     {\n       "name": "Team Fortress Classic",\n       "appid": 20,\n       "average_playtime": 277,\n       "genres": "Action",\n       "price": 3.99\n     }]\n\n\n@app.get("/")\nasync def root():\n   return items\n')),(0,a.kt)("p",null,"Here, we imported the FastAPI library and initiated an app using the ",(0,a.kt)("inlineCode",{parentName:"p"},"FastAPI")," class. Next, we define a simple list consisting of details of steam games as objects"),(0,a.kt)("p",null,"Lastly, we declare a route \u201c/\u201d at which the items variables (game objects) are being returned. We can get this server running by using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ uvicorn main:app --reload\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The command uvicorn main:app refers to:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main"),': the file main.py (the Python "module").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app"),": the object created inside of main.py with the line app = FastAPI()."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--reload"),": make the server restart after code changes. Only use for development."))),(0,a.kt)("p",null,"Awesome, with this we should see our API running at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/appsmithorg/appsmith-docs/blob/v1.3/how-to-guides/http:/127.0.0.1:8000!"},"http://127.0.0.1:8000")," !"),(0,a.kt)("h3",{id:"setting-ngrok"},"Setting ngrok"),(0,a.kt)("p",null,"Now that we have our local APIs, let\u2019s use ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok")," to serve them on production. For this, we\u2019ll have to signup at ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/get-started/setup"},"ngrok")," (it\u2019s free!), and follow the instructions to connect your account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok")," installation file and unzip it."),(0,a.kt)("li",{parentName:"ol"},"Add your ",(0,a.kt)("inlineCode",{parentName:"li"},"auth-token")," to the default ngrok.yml configuration file using:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./ngrok authtoken <your-auth-token>\n")),(0,a.kt)("p",null,"Fire up ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok"),", we already have our API server ready, now we\u2019ll have to expose the particular local port for HTTP tunnel forwarding using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./ngrok http 8000\n")),(0,a.kt)("p",null,"Awesome, we can now see that the local APIs are now being forwarded to a different server on production using ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok"),". Below is a screenshot,"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/5Qdqw3U5EYtDk5EhpWrTrrUw5EcKPqZGE8xX2W7NjazBd_cdSQZNUgVkUzkQXjG0NqCusqQW4ftUp3GAOg794gsWCZpXrDi1lmtBF7ZplJ5lAAcdsc_hfKOFr93KebVE4nZ1JKp9",alt:"ngrok commands"})),(0,a.kt)("h3",{id:"testing-apis-on-appsmith"},"Testing APIs on Appsmith"),(0,a.kt)("p",null,"Now that we have API, up and running, let\u2019s test these out on Appsmith."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an application on Appsmith"),(0,a.kt)("li",{parentName:"ul"},"Create a New API by clicking on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon next to the APIs section on the left navigation and rename it to ",(0,a.kt)("inlineCode",{parentName:"li"},"getGames")),(0,a.kt)("li",{parentName:"ul"},"Add the forwarded API link and hit RUN, we\u2019ll have to see the API response on the response pane."),(0,a.kt)("li",{parentName:"ul"},"Next, navigate to Pages, and drag and drop a Table Widget onto the canvas."),(0,a.kt)("li",{parentName:"ul"},"Open the table property pane and add use the API to display data on to the table by adding the following code snippet under the Table Data property:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{{ getGames.data }}\n")),(0,a.kt)("p",null,"Below is a GIF, following the same steps:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test API",src:n(50587).Z,width:"2500",height:"1456"})))}d.isMDXComponent=!0},50587:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/NGROK-6742d739b9a7399fc1220087644f5243.gif"}}]);