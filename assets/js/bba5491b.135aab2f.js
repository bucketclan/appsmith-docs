"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[4835],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),c=l(a),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,s(s({ref:e},u),{},{components:a})):n.createElement(h,s({ref:e},u))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,s=new Array(i);s[0]=c;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:o,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8318:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={description:"Appsmith is open source and very easy to deploy on your machine.",slug:"/getting-started/setup",sidebar_position:3},s="Self Hosting",r={unversionedId:"getting-started/setup/README",id:"getting-started/setup/README",title:"Self Hosting",description:"Appsmith is open source and very easy to deploy on your machine.",source:"@site/docs/getting-started/setup/README.md",sourceDirName:"getting-started/setup",slug:"/getting-started/setup",permalink:"/appsmith-docs/getting-started/setup",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/README.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Appsmith is open source and very easy to deploy on your machine.",slug:"/getting-started/setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build Your First App",permalink:"/appsmith-docs/getting-started/start-building"},next:{title:"Installation Guides",permalink:"/appsmith-docs/getting-started/setup/installation-guides/"}},p={},l=[{value:"Cloud-hosted",id:"cloud-hosted",level:2},{value:"Self-hosted",id:"self-hosted",level:2},{value:"Security",id:"security",level:4},{value:"Internal database",id:"internal-database",level:4},{value:"Updates",id:"updates",level:4},{value:"Deploy",id:"deploy",level:2},{value:"Pre-setup checklist",id:"pre-setup-checklist",level:3},{value:"Deployment options",id:"deployment-options",level:3},{value:"Configure",id:"configure",level:3},{value:"Manage",id:"manage",level:3}],u={toc:l};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-hosting"},"Self Hosting"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Self-hosting_(web_services)"},"Self-hosting")," Appsmith means hosting and managing Appsmith directly on your server rather than relying on third-party service providers. Self-hosting is often seen as more secure and private, as you have complete control over your data and how it's used."),(0,o.kt)("p",null,"Appsmith provides a ",(0,o.kt)("a",{parentName:"p",href:"https://app.appsmith.com"},"cloud-hosted version")," and the option to set up your instance on some popular ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup#deploy"},"platforms"),"."),(0,o.kt)("h2",{id:"cloud-hosted"},"Cloud-hosted"),(0,o.kt)("p",null,"Cloud-hosted version is available over the internet, which makes it easy for users to sign up and start building apps. It's a perfect solution for users who don't have their infrastructure set up. You can sign up on ",(0,o.kt)("a",{parentName:"p",href:"https://appsmith.com"},"appsmith.com")," and follow the ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/start-building"},"Quick start guide")," to get started."),(0,o.kt)("h2",{id:"self-hosted"},"Self-hosted"),(0,o.kt)("p",null,"You can choose to deploy Appsmith on your own infrastructure. It's often useful when you want to plug it into existing infrastructure without the need to maintain a different setup. It enables you to take advantage of what your infrastructure has to offer and extend it to Appsmith."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Appsmith collects ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/product/telemetry"},"usage data")," to serve you better. You can choose to ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/product/telemetry#disable-telemetry"},"opt out")," at any time.")),(0,o.kt)("p",null,"Deploying Appsmith on your infrastructure offers the following benefits:"),(0,o.kt)("h4",{id:"security"},"Security"),(0,o.kt)("p",null,"You get to keep your data on-premise. It also ensures that your API keys or security credentials would never leave your server and have the same security rules applied to any other app. The applications you build would be on your infrastructure, inside your corporate networks. You may choose to host it on internal networks behind a firewall for a defined set of users. You may also configure your ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-configuration/custom-domain/"},"custom domain")," and extend the security policies to Appsmith installation."),(0,o.kt)("p",null,"Appsmith provides a ",(0,o.kt)("a",{parentName:"p",href:"../../product/security"},"secured environment")," for cloud-hosted and self-hosted instances by encrypting sensitive information like database credentials using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES 256 Encryption"),". For self-hosted instances, it also supports setting up ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-configuration/custom-domain/#custom-ssl-certificate"},"SSL certificates")," via ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"LetsEncrypt")," during installation."),(0,o.kt)("h4",{id:"internal-database"},"Internal database"),(0,o.kt)("p",null,"A self-hosted instance could allow you to connect with a database running on the same machine/intranet and use it to build apps."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using a ",(0,o.kt)("strong",{parentName:"p"},"cloud-hosted instance")," would require the ability to access the ",(0,o.kt)("strong",{parentName:"p"},"internal databases"),". For example, you would be required to use tunneling services like ",(0,o.kt)("a",{parentName:"p",href:"../../advanced-concepts/more/how-to-work-with-local-apis-on-appsmith/#using-ngrok"},"ngrok")," to expose your internal database to the internet or whitelist Appsmith cloud's external IP addresses to build apps.")),(0,o.kt)("p",null,"Appsmith uses MongoDB to store app data and Redis to store session information and non-critical caches. You may wish to integrate with custom MongoDB or Redis servers hosted on your infrastructure. For this, you would have to ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-configuration/custom-mongodb-redis"},"modify the configuration of environment variables and point them to the custom MongoDB/Redis")," instances."),(0,o.kt)("h4",{id:"updates"},"Updates"),(0,o.kt)("p",null,"You can configure more flexible updates, schedules, and other maintenance activities for a self-hosted instance. You can follow the steps to configure ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/maintenance-window"},"maintenance window and schedule auto updates"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The self-hosted version isn't air-gapped and reaches out to the Appsmith cloud. For example, to fetch release notes about product updates. It helps you stay updated with the latest releases. If you would like a fully air-gapped deployment, please write to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},(0,o.kt)("strong",{parentName:"a"},"support@appsmith.com")),".")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"You can choose from various popular platforms to deploy Appsmith, like Docker, Kubernetes, AWS, Digital Ocean, and more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udd14 Appsmith officially supports ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/installation-guides/docker/"},"docker-based installations."))),(0,o.kt)("h3",{id:"pre-setup-checklist"},"Pre-setup checklist"),(0,o.kt)("p",null,"It's simple and quick to deploy Appsmith. Please ensure that your system has the following recommended configuration for optimal performance before moving forward with the deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Two virtual CPUs ","[","vCPU]"),(0,o.kt)("li",{parentName:"ul"},"A four GB of memory")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"On Amazon Web Services(AWS), a ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/t3/"},"t3.medium")," instance would be ideal for installing Appsmith.")),(0,o.kt)("h3",{id:"deployment-options"},"Deployment options"),(0,o.kt)("p",null,"With a variety of",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/installation-guides/"}," deployment options"),", choose the one that best suits you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/docker/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/kubernetes/"},"Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/aws-ami"},"AWS AMI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/aws-ecs"},"AWS ECS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/digitalocean"},"DigitalOcean"))),(0,o.kt)("p",null,"And ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/installation-guides/"},"more"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://marketplace.digitalocean.com/apps/appsmith"},"DigitalOcean")," or ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/seller-profile?id=f12088a7-c7be-46e5-8c5d-9cd7a16c8c1e"},"AWS")," offers a one-click deployment from their marketplaces.")),(0,o.kt)("h3",{id:"configure"},"Configure"),(0,o.kt)("p",null,"You can configure and manage the self-hosted instance with the help of a ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-configuration/admin-settings"},"Super Admin")," user. There are out-of-the-box integrations like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/instance-configuration/authentication/"},"Custom authentication")," to onboard your existing user base"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/instance-configuration/email/"},"Email")," to invite users and notify admins"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/instance-configuration/disable-user-signup"},"Sign-up restriction")," to turn off signing up using the signup form or OAuth buttons, ensuring that only users you invite can signup")),(0,o.kt)("p",null,"And ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-configuration/"},"more")," that can be configured."),(0,o.kt)("h3",{id:"manage"},"Manage"),(0,o.kt)("p",null,"You can also effectively ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/"},"manage your self-hosted instance")," like ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#export-database"},"database backup"),", ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance"},"instance backup"),", and ",(0,o.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl"},"more"),"."),(0,o.kt)("p",null,"Deploying Appsmith as a self-hosted instance has its own perks - having your data and apps hosted on your infrastructure. It's also easier to manage things such as ","[","backups]","(","Link to Appsmithctl page) and scaling that follow the rules across deployed instances. Get started by following the ","[","installation guides]","(","link to the installation guide) that work for you."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Are you having trouble deploying Appsmith? Check out the ",(0,o.kt)("a",{parentName:"p",href:"../../help-and-support/troubleshooting-guide/deployment-errors"},"deployment troubleshooting guide")," or reach out on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord")," to get support or ask questions on the ",(0,o.kt)("a",{parentName:"p",href:"https://community.appsmith.com/"},"community forum"),". If you ",(0,o.kt)("strong",{parentName:"p"},"know")," the error and want to ",(0,o.kt)("strong",{parentName:"p"},"reinstall"),", ",(0,o.kt)("strong",{parentName:"p"},"delete")," the ",(0,o.kt)("strong",{parentName:"p"},"installation")," and ",(0,o.kt)("strong",{parentName:"p"},"templates")," folder, and ",(0,o.kt)("strong",{parentName:"p"},"execute")," the script ",(0,o.kt)("strong",{parentName:"p"},"again"),".")))}d.isMDXComponent=!0}}]);