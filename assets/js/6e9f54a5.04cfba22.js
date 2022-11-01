"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[9202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={description:"Appsmith can be deployed locally or on your private instance using Docker",sidebar_position:1},r="Docker",p={unversionedId:"getting-started/setup/installation-guides/docker/README",id:"getting-started/setup/installation-guides/docker/README",title:"Docker",description:"Appsmith can be deployed locally or on your private instance using Docker",source:"@site/docs/getting-started/setup/installation-guides/docker/README.md",sourceDirName:"getting-started/setup/installation-guides/docker",slug:"/getting-started/setup/installation-guides/docker/",permalink:"/appsmith-docs/getting-started/setup/installation-guides/docker/",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/installation-guides/docker/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Appsmith can be deployed locally or on your private instance using Docker",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation Guides",permalink:"/appsmith-docs/getting-started/setup/installation-guides/"},next:{title:"Migrate from Multi-Container setup",permalink:"/appsmith-docs/getting-started/setup/installation-guides/docker/migrate"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start (with docker-compose)",id:"quick-start-with-docker-compose",level:2},{value:"Docker-compose configuration",id:"docker-compose-configuration",level:3},{value:"Updating Appsmith (with docker-compose)",id:"updating-appsmith-with-docker-compose",level:3},{value:"Enabling Appsmith Auto-updates (with docker-compose)",id:"enabling-appsmith-auto-updates-with-docker-compose",level:3},{value:"Explore Appsmith (without docker-compose)",id:"explore-appsmith-without-docker-compose",level:2},{value:"Community Edition",id:"community-edition",level:3},{value:"Business Edition",id:"business-edition",level:3},{value:"Restarting Containers",id:"restarting-containers",level:2},{value:"Updating Appsmith (without docker-compose)",id:"updating-appsmith-without-docker-compose",level:3},{value:"Community Edition",id:"community-edition-1",level:4},{value:"Business Edition",id:"business-edition-1",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:l};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Docker is an open-source ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/in-en/cloud/learn/containerization"},"containerization")," platform. It enables developers to package applications into containers\u2014standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment."),(0,a.kt)("object",{data:"https://www.youtube.com/embed/Tde7GqE6FQQ?autoplay=0",width:"750px",height:"400px"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (version 20.10.7 or later)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose "),"(version 1.29.2 or later)")),(0,a.kt)("p",null,"Create an installation folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"appsmith")," where you would like your Appsmith installation and data storage."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the installation folder."),(0,a.kt)("h2",{id:"quick-start-with-docker-compose"},"Quick Start (with docker-compose)"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Appsmith ",(0,a.kt)("a",{parentName:"p",href:"./#enabling-appsmith-auto-updates-with-docker-compose"},"auto-update")," now also supports auto-backup feature. This backup can be used to roll back an update to a previous version of Appsmith, if the user wants to.")),(0,a.kt)("p",null,"The Appsmith Docker image is built with all the components required to run within a single Docker container. All these multiple processes are managed by a Supervisord instance, which is a lightweight process manager."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You can expect one container running when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose ps")," command. Something like:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"#Container appsmith Running"))),(0,a.kt)("h3",{id:"docker-compose-configuration"},"Docker-compose configuration"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, auto-update is disabled on the docker-compose file. If you want to enable auto-update for Appsmith, please uncomment all the commented lines in the docker-compose file.")),(0,a.kt)("p",null,"Download the below ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file into the appsmith installation folder"),(0,a.kt)("a",{target:"_blank",href:"/img/docker-compose_(3).yml",download:"docker-compose_(3).yml"},"docker-compose.yml (Click to Download)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"or")," run the following curl if you're on a remote machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://bit.ly/3AQzII6 -o $PWD/docker-compose.yml\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For the ",(0,a.kt)("strong",{parentName:"p"},"Business Edition")," - change the ",(0,a.kt)("strong",{parentName:"p"},"image")," name from ",(0,a.kt)("inlineCode",{parentName:"p"},"appsmith-ce")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"appsmith-ee")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"image:")," key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.")),(0,a.kt)("p",null,"This configuration runs an Appsmith instance and a Watchtower instance to keep Appsmith automatically up-to-date."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For the ",(0,a.kt)("strong",{parentName:"p"},"Business Edition")," - add your ",(0,a.kt)("strong",{parentName:"p"},"license key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"APPSMITH_LICENSE_KEY"),") to the ",(0,a.kt)("inlineCode",{parentName:"p"},"environment:")," key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.")),(0,a.kt)("p",null,"Bring the docker container up by running the following command. (You may need to run as ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," if docker and docker-compose are not accessible by your user)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"If it is not available locally, the command above will download the Docker images and start the services. You can follow the logs with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f appsmith\n")),(0,a.kt)("p",null,"You should see a message ",(0,a.kt)("inlineCode",{parentName:"p"},"Appsmith is Running!")," once the container is ready. The message is also logged and available in server logs(",(0,a.kt)("mark",null,(0,a.kt)("inlineCode",{parentName:"p"},"stacks/logs/backend/backend.log")),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Appsmith is running message",src:n(65755).Z,width:"2960",height:"1180"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are ",(0,a.kt)("strong",{parentName:"p"},"unable")," to ",(0,a.kt)("strong",{parentName:"p"},"locate")," the message but can ",(0,a.kt)("strong",{parentName:"p"},"access")," Appsmith via ",(0,a.kt)("strong",{parentName:"p"},"localhost")," or a ",(0,a.kt)("strong",{parentName:"p"},"custom domain")," you have ",(0,a.kt)("strong",{parentName:"p"},"created"),", then Appsmith is up and running.")),(0,a.kt)("p",null,"If this is your first time using docker, you should expect a welcome page similar to the one below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Welcome Page",src:n(22649).Z,width:"1485",height:"784"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Congratulations! Your Appsmith server should be up and running now. You can access it at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost"),".")),(0,a.kt)("h3",{id:"updating-appsmith-with-docker-compose"},"Updating Appsmith (with docker-compose)"),(0,a.kt)("p",null,"To update Appsmith (configured with docker-compose) manually, go to the root directory of your setup and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d\n")),(0,a.kt)("h3",{id:"enabling-appsmith-auto-updates-with-docker-compose"},"Enabling Appsmith Auto-updates (with docker-compose)"),(0,a.kt)("p",null,"If your Appsmith setup does not have auto-update enabled (i.e. it will not have the Watchtower container running along with Appsmith in the host machine). You can enable auto-update by following the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the root directory of your Appsmith set up and run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with any text editor and uncomment all the lines that are commented out (lines 13-23)."),(0,a.kt)("li",{parentName:"ol"},"Run the command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,a.kt)("h2",{id:"explore-appsmith-without-docker-compose"},"Explore Appsmith (without docker-compose)"),(0,a.kt)("p",null,"To quickly get Appsmith up and running, run the following command on your machine:"),(0,a.kt)("h3",{id:"community-edition"},"Community Edition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" --pull always appsmith/appsmith-ce\n')),(0,a.kt)("h3",{id:"business-edition"},"Business Edition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<Add_YOUR_LICENSE_KEY> --pull always appsmith/appsmith-ee\n')),(0,a.kt)("p",null,"This command will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f appsmith\n")),(0,a.kt)("p",null,"You should see a message ",(0,a.kt)("inlineCode",{parentName:"p"},"Appsmith is Running!")," once the container is ready. The message is also logged and available in server logs(",(0,a.kt)("mark",null,(0,a.kt)("inlineCode",{parentName:"p"},"stacks/logs/backend/backend.log")),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Appsmith is running message",src:n(65755).Z,width:"2960",height:"1180"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are ",(0,a.kt)("strong",{parentName:"p"},"unable")," to ",(0,a.kt)("strong",{parentName:"p"},"locate")," the message but can ",(0,a.kt)("strong",{parentName:"p"},"access")," Appsmith via ",(0,a.kt)("strong",{parentName:"p"},"localhost")," or a ",(0,a.kt)("strong",{parentName:"p"},"custom domain")," you have ",(0,a.kt)("strong",{parentName:"p"},"created"),", then Appsmith is up and running.")),(0,a.kt)("h2",{id:"restarting-containers"},"Restarting Containers"),(0,a.kt)("p",null,"If your containers are failing to restart, you can execute the below script to bring them up:"),(0,a.kt)("div",{class:"downloadAssets"},(0,a.kt)("a",{target:"_blank",download:"restart-container.sh",href:"/img/restart-container.sh"},(0,a.kt)("img",{src:"/img/FileDownload.png",alt:"Click to Download"}))),"copy the script to your installation folder and make it executable",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x restart-containers.sh\n./restart-containers.sh\n")),(0,a.kt)("h3",{id:"updating-appsmith-without-docker-compose"},"Updating Appsmith (without docker-compose)"),(0,a.kt)("p",null,"To update Appsmith manually, go to the root directory of your setup and run the following commands:"),(0,a.kt)("h4",{id:"community-edition-1"},"Community Edition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker rmi appsmith/appsmith-ce -f\ndocker pull appsmith/appsmith-ce\ndocker rm -f appsmith\ndocker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" appsmith/appsmith-ce\n')),(0,a.kt)("h4",{id:"business-edition-1"},"Business Edition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker rmi appsmith/appsmith-ee -f\ndocker pull appsmith/appsmith-ee\ndocker rm -f appsmith\ndocker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<YOUR_LICENSE_KEY> appsmith/appsmith-ee\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Follow the instructions to ",(0,a.kt)("a",{parentName:"p",href:"../../upgrade-to-business-edition/"},"upgrade your existing installation")," to a Business Edition.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you encounter any errors during this process, check out our guide on ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/help-and-support/troubleshooting-guide/deployment-errors"},"debugging deployment errors"),". If you are still facing any issues, please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},"support@appsmith.com")," or join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord Server")," to speak to the Appsmith team directly!"),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../instance-configuration/#configuring-docker-installations"},"Configuring Self Hosted Instances")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../instance-management/"},"Managing the Appsmith instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../../learning-and-resources/tutorials/"},"Tutorials"))))}m.isMDXComponent=!0},65755:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/InstallationGuides__Docker__AppsmithRunningMessage-fb3af6bb84fcaa30ab30654dbe8b9b71.png"},22649:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image_(1)_(1)-cf77bd6a802b7b631b4e46447b5d343d.png"}}]);