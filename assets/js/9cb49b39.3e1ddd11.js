"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[5922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,description:"In this guide, you'll learn how to implement this custom Auth using JWTs by chaining multiple steps."},r="Custom Authentication",l={unversionedId:"advanced-concepts/how-to-implement-custom-authentication-on-appsmith",id:"advanced-concepts/how-to-implement-custom-authentication-on-appsmith",title:"Custom Authentication",description:"In this guide, you'll learn how to implement this custom Auth using JWTs by chaining multiple steps.",source:"@site/docs/advanced-concepts/how-to-implement-custom-authentication-on-appsmith.md",sourceDirName:"advanced-concepts",slug:"/advanced-concepts/how-to-implement-custom-authentication-on-appsmith",permalink:"/advanced-concepts/how-to-implement-custom-authentication-on-appsmith",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/advanced-concepts/how-to-implement-custom-authentication-on-appsmith.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"In this guide, you'll learn how to implement this custom Auth using JWTs by chaining multiple steps."},sidebar:"tutorialSidebar",previous:{title:"Intervals (Time events)",permalink:"/reference/appsmith-framework/widget-actions/intervals-time-events"},next:{title:"Share Data Across Pages",permalink:"/advanced-concepts/sharing-data-across-pages"}},s={},u=[{value:"<strong>Building UI for Login Form</strong>",id:"building-ui-for-login-form",level:2},{value:"<strong>Custom Google Authentication</strong>",id:"custom-google-authentication",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-authentication"},"Custom Authentication"),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/5oPcF9dXZyU",width:"860px",height:"515px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"How to Implement Custom Login/Authentication in Appsmith"))),(0,a.kt)("p",null,"A lot of applications use Authentication APIs to secure their information. You can use those API's on Appsmith to build UI or tools using a custom authentication mode. In this guide, you'll learn how to implement this custom Auth using JWTs by chaining multiple steps."),(0,a.kt)("h2",{id:"building-ui-for-login-form"},(0,a.kt)("strong",{parentName:"h2"},"Building UI for Login Form")),(0,a.kt)("p",null,"The auth APIs require a login form. Hence let\u2019s build one on Appsmith. Follow the below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Firstly, log in to your Appsmith account; if you\u2019re new, sign-up ",(0,a.kt)("a",{parentName:"li",href:"https://appsmith.com"},"here")," (it\u2019s free)!."),(0,a.kt)("li",{parentName:"ol"},"Now create a new application by clicking on the ","`","Create New","`"," button on the dashboard."),(0,a.kt)("li",{parentName:"ol"},"Next, click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon next to widgets from the side navigation and drag and drop a form widget onto the canvas."),(0,a.kt)("li",{parentName:"ol"},"Now let\u2019s add two ",(0,a.kt)("strong",{parentName:"li"},"text")," ",(0,a.kt)("strong",{parentName:"li"},"widgets")," and ",(0,a.kt)("strong",{parentName:"li"},"input widgets")," to create our login form. Rename the input widgets to following:"),(0,a.kt)("li",{parentName:"ol"},"Username Input Widget: ",(0,a.kt)("inlineCode",{parentName:"li"},"userName")),(0,a.kt)("li",{parentName:"ol"},"Password Input: ",(0,a.kt)("inlineCode",{parentName:"li"},"password"))),(0,a.kt)("p",null,"This is a screenshot of how the login form looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/ZumVJGnKnwENgd_sVX-hv9BxWUjINUh0ClOZfGQqIhXKQXOJLpNG51phXV5CRriuSQnWOgtbA1vk0gDz2epQk2CNv5iWJbUXAZ2HpsG5Jma0pZkBtLmgTCGLnPMO0cC4ahcm8vsI",alt:null})),(0,a.kt)("p",null,"Let's use these values in an Auth API; usually, login API requires a username and a password. In this example, we'll be using the same, which will return a JWT token and the user details with his permission roles. Here\u2019s how the output looks like after running the API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIyNzE1MTU0LCJleHAiOjE2MjUzMDcxNTR9.rqkR0bVR5g0k8awGTYDEQ0vr15H7401zxkTxpWp9Mc4",\n  "user": {\n    "id": 2,\n    "username": "Vihar",\n    "email": "vihar@appsmith.com",\n    "provider": "local",\n    "confirmed": true,\n    "blocked": false,\n    "role": {\n      "id": 1,\n      "name": "Authenticated",\n      "description": "Default role given to authenticated user.",\n      "type": "authenticated"\n    },\n    "created_at": "2021-06-03T03:10:37.945Z",\n    "updated_at": "2021-06-03T03:10:37.952Z"\n  }\n}\n')),(0,a.kt)("p",null,"Now, let\u2019s create an API that\u2019ll return the JWT using the login API. Follow the below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon next to the APIs in the side navigation."),(0,a.kt)("li",{parentName:"ul"},"This will create a new API, now add the URL for the Login API"),(0,a.kt)("li",{parentName:"ul"},"Set the API name as ",(0,a.kt)("inlineCode",{parentName:"li"},"login_api."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To test this out, we\u2019ve created a test Auth API; use the following if you don\u2019t have any Auth APIs.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this example, let\u2019s use ",(0,a.kt)("inlineCode",{parentName:"li"},"https://appsmith-tutorial-apis.herokuapp.com/auth/local"),", set the request type to ",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),"."),(0,a.kt)("li",{parentName:"ul"},"Next, in the body, add the following JSON to send username and password to the API. IN this case, we\u2019re taking the inputs from the form using the moustache syntax.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "identifier":"{{userName.text}}",\n  "password":"{{password.text}}"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next, add a username and password based on the user\u2019s roles in your API. If you\u2019re using the example AUTH Api, use the following credentials.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Identifier: appsmith_user\nPassword: appsmith_password\n")),(0,a.kt)("p",null,"Awesome, now we\u2019ll need to save the JWT token generated after the API is run. Appsmith has a store where you can save all the variables; for this, we\u2019ll need to use the moustache syntax after the API is successfully run. Below are the steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Firstly, open the Submit button property pane and set the ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick")," property to ",(0,a.kt)("inlineCode",{parentName:"li"},"Call an API")," and choose ",(0,a.kt)("inlineCode",{parentName:"li"},"call_an_api")),(0,a.kt)("li",{parentName:"ol"},"Next, set the ",(0,a.kt)("inlineCode",{parentName:"li"},"onSuccess")," property to ","`","Store a value","`"," and name the key as jwt and value as ",(0,a.kt)("inlineCode",{parentName:"li"},"{{login_api.data.jwt}}"))),(0,a.kt)("p",null,"This will save the ",(0,a.kt)("strong",{parentName:"p"},"jwt")," token from the API response. This is how the screenshot looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/-onVg-gGl_Uu0QouR3NBmL1tggxEuklnoI_2i7D1fBgam6K3TvRUbpDviuv0kAhWVfGA-xT-vy0S_wyRdO7zzEk52IzK3_Pm5s7KDzpj5ceCYRi7ftrGykOBJSqr6566Qn2_mPZy",alt:null})),(0,a.kt)("p",null,"Now we\u2019ll be passing this ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," variable in the header with an Authorization mode to access the secure APIs. As an example, let\u2019s create a secure page and test it out."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now, let\u2019s add a new page and access the data from the secure API."),(0,a.kt)("li",{parentName:"ul"},"Create a new API by clicking on the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon next to the APIs section."),(0,a.kt)("li",{parentName:"ul"},"Now add you\u2019re secure API, or you can use the following example API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://appsmith-tutorial-apis.herokuapp.com/logistics \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This API requires authorization, lets now add a new header with key and value as:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{appsmith.store.jwt}}")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As we can see, in the place of the token, we\u2019re using the moustache syntax and binding the ",(0,a.kt)("inlineCode",{parentName:"li"},"jwt")," token that\u2019s saved from the login-api."),(0,a.kt)("li",{parentName:"ul"},"Now run the API, you should see the response.")),(0,a.kt)("p",null,"In this way, you can use a custom login on Appsmith. Additionally, you can customise the redirections based on the authentication mode and your use case."),(0,a.kt)("h2",{id:"custom-google-authentication"},(0,a.kt)("strong",{parentName:"h2"},"Custom Google Authentication")),(0,a.kt)("p",null,"It is possible to use third-party OAuth services like Google, Twitter, Github, etc, to authenticate users for your app. In this case, you'll need to connect with a service that integrates with the desired Oauth provider. Here's a quick video showing how to implement a custom Google login with Xano:"),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/n3XSAA7q--I",width:"860px",height:"515px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Setting up Custom Login | Google"))),(0,a.kt)("p",null,"You can also setup custom Google authentication using Supabase:"),(0,a.kt)("figure",null,(0,a.kt)("object",{data:"https://www.youtube.com/embed/mfhHUDNCkoQ",width:"860px",height:"515px"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Setting Up Custom Login | Supabase"))))}c.isMDXComponent=!0}}]);