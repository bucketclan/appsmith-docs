"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[2141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,u=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:3,description:"Guide on how to embed Appsmith into an existing application"},r="Embed Apps",p={unversionedId:"advanced-concepts/embed-appsmith-into-existing-application",id:"advanced-concepts/embed-appsmith-into-existing-application",title:"Embed Apps",description:"Guide on how to embed Appsmith into an existing application",source:"@site/docs/advanced-concepts/embed-appsmith-into-existing-application.md",sourceDirName:"advanced-concepts",slug:"/advanced-concepts/embed-appsmith-into-existing-application",permalink:"/advanced-concepts/embed-appsmith-into-existing-application",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/embed-appsmith-into-existing-application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Guide on how to embed Appsmith into an existing application"},sidebar:"tutorialSidebar",previous:{title:"Share Data Across Pages",permalink:"/advanced-concepts/sharing-data-across-pages"},next:{title:"Access Control",permalink:"/advanced-concepts/access-control"}},l={},s=[{value:"Creating HTML Page",id:"creating-html-page",level:3},{value:"Opening the HTML Page",id:"opening-the-html-page",level:3},{value:"Serving an HTML file with Node.js",id:"serving-an-html-file-with-nodejs",level:4},{value:"Running npx http-server",id:"running-npx-http-server",level:4},{value:"Modifying Layout",id:"modifying-layout",level:3},{value:"Remove Appsmith Top Bar",id:"remove-appsmith-top-bar",level:4}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-apps"},"Embed Apps"),(0,o.kt)("figure",null,(0,o.kt)("object",{data:"https://www.youtube.com/embed/l7508s-5VwU",width:"750px",height:"400px"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Embed Appsmith in your Website"))),(0,o.kt)("p",null,"Tools and Dashboards are great as an app and on a website, and now, you can have it both in one go by embedding apps to your website! In this guide, you'll learn how to embed Appsmith Apps into any website."),(0,o.kt)("p",null,"For this guide, we'll consider the ",(0,o.kt)("a",{parentName:"p",href:"https://app.appsmith.com/applications/5f2aeb2580ca1f6faaed4e4a/pages/5f2d61b580ca1f6faaed4e79"},"Customer Support Dashboard")," from the demo apps and embed that into an HTML page. You can also check out the live preview ",(0,o.kt)("a",{parentName:"p",href:"https://appsmith-embed.netlify.app/"},"here"),"."),(0,o.kt)("h3",{id:"creating-html-page"},"Creating HTML Page"),(0,o.kt)("p",null,"Firstly, let's create an HTML page and call it ","`",(0,o.kt)("inlineCode",{parentName:"p"},"cs_dashboard.html"),"`",". Now, add the basic HTML structure to make it an HTML page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"<!DOCTYPE html>\n<html>\n<head>\n    <title> Customer Support Dashboard </title>\n</head>\n<body>\n\n</body>\n</html>\n")),(0,o.kt)("p",null,"You'll also have to ensure your app is public to embed into other applications. You can do this by clicking on the Share option on the top toolbar and toggle the viewing option to ",(0,o.kt)("strong",{parentName:"p"},"Public"),". Here's a video example:"),(0,o.kt)("figure",null,(0,o.kt)("object",{data:"https://www.youtube.com/embed/gD0xV-Tt1_U",width:"750px",height:"400px"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Follow these steps to make your application public"))),(0,o.kt)("p",null,"Next, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," tag and add the shareable link from share options to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," attribute with height and width set to ",(0,o.kt)("inlineCode",{parentName:"p"},"500")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"100%")," respectively."),(0,o.kt)("p",null,"Include the meta tag in the head to ensure that the embedded application renders responsively on different screen sizes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1"\n    <title></title>\n</head>\n<body>\n    <iframe src="https://app.appsmith.com/app/customer-support-dashboard/support-tickets-62d5ae31b06ce90d91db643e" height="700" width="100%"></iframe>\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"opening-the-html-page"},"Opening the HTML Page"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are opening the HTML page as a",(0,o.kt)("inlineCode",{parentName:"p"},"file,"),"then the browser won't allow you to do that. The HTML file needs to come from a server.")),(0,o.kt)("p",null,"After creating the HTML page, save it as ",(0,o.kt)("inlineCode",{parentName:"p"},"cs_dashboard.html")," and have an HTTP server serve it. This can be done in several ways:"),(0,o.kt)("h4",{id:"serving-an-html-file-with-nodejs"},"Serving an HTML file with Node.js"),(0,o.kt)("p",null,"Once you have created your HTML file, create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js`` "),(0,o.kt)("strong",{parentName:"p"},"``")," file. Paste the below-mentioned code and edit your HTML file name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"const http = require('http');\nconst fs = require('fs');\n\nhttp.createServer(function(req, res) {\n    res.writeHead(200, { 'content-type': 'text/html' });\n    const html = fs.readFileSync('./cs_dashboard.html');\n    res.end(html);\n}).listen(3000, () => {\n    console.log('running on 3000');\n});\n")),(0,o.kt)("p",null,"Now, in the terminal, run ",(0,o.kt)("inlineCode",{parentName:"p"},"node app.js")),(0,o.kt)("p",null,"This will prompt a ",(0,o.kt)("inlineCode",{parentName:"p"},"running on 3000")," message. Next, go to your browser and open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")),(0,o.kt)("p",null,"This will open your HTML file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sceenshot of Appsmith Embed",src:n(18647).Z,width:"1920",height:"782"})),(0,o.kt)("h4",{id:"running-npx-http-server"},"Running npx http-server"),(0,o.kt)("p",null,"Let's look at another way to open an HTML file."),(0,o.kt)("p",null,"Now, if you have ",(0,o.kt)("em",{parentName:"p"},"Node JS")," installed, go to the command terminal and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx http-server\n")),(0,o.kt)("p",null,"Next, open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/cs_dashboard.html"},"http://localhost:8080/cs","_","dashboard.html")," and it should open the HTML File."),(0,o.kt)("h3",{id:"modifying-layout"},"Modifying Layout"),(0,o.kt)("p",null,"If you want to get your app to use the whole page in your browser, you can still change your height and width parameters like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1"\n    <title></title>\n</head>\n<body>\n    <iframe src="https://app.appsmith.com/app/customer-support-dashboard/support-tickets-62d5ae31b06ce90d91db643e"frameborder="0" scrolling="yes" seamless="seamless" style="display:block; width:100%; height:100vh;"></iframe>\n</body>\n</html>\n')),(0,o.kt)("h4",{id:"remove-appsmith-top-bar"},"Remove Appsmith Top Bar"),(0,o.kt)("p",null,"Additionally, you can also see the Appsmith toolbar on the top, you can remove this by adding ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"?embed=true"))," to the share URL. Update the code to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1"\n    <title></title>\n</head>\n<body>\n    <iframe src="https://app.appsmith.com/app/customer-support-dashboard/support-tickets-62d5ae31b06ce90d91db643e?embed=true" height="700" width="100%"></iframe>\n</body>\n</html>\n')),(0,o.kt)("p",null,"Awesome! Now you can see the app without any toolbar! Below is a screenshot:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Appsmith Embed with ?embed=true propert",src:n(70752).Z,width:"1920",height:"772"})))}c.isMDXComponent=!0},18647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Appsmith_embed-8520a48821141081cf248887d49e6174.png"},70752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/embed=true-d5f1018fc39c139b06ef270a07f17fcf.png"}}]);