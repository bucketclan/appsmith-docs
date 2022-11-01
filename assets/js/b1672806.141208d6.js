"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[4231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},o="External Libraries",l={unversionedId:"core-concepts/writing-code/ext-libraries",id:"core-concepts/writing-code/ext-libraries",title:"External Libraries",description:"The Appsmith platform includes JavaScript utility libraries, which can be used to work with data within {{ }} bindings.",source:"@site/docs/core-concepts/writing-code/ext-libraries.md",sourceDirName:"core-concepts/writing-code",slug:"/core-concepts/writing-code/ext-libraries",permalink:"/appsmith-docs/core-concepts/writing-code/ext-libraries",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/core-concepts/writing-code/ext-libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JavaScript Promises",permalink:"/appsmith-docs/core-concepts/writing-code/javascript-promises"},next:{title:"Widgets",permalink:"/appsmith-docs/reference/widgets/"}},p={},s=[{value:"JavaScript Library Reference",id:"javascript-library-reference",level:2},{value:"Using JavaScript libraries",id:"using-javascript-libraries",level:2},{value:"Example: Lodash",id:"example-lodash",level:3},{value:"Example: moment",id:"example-moment",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"external-libraries"},"External Libraries"),(0,n.kt)("p",null,"The Appsmith platform includes JavaScript utility libraries, which can be used to work with data within ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ }}")," bindings."),(0,n.kt)("h2",{id:"javascript-library-reference"},"JavaScript Library Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15"},"lodash"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://momentjs.com/docs/"},"moment"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/dankogai/js-base64#readme"},"btoa"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/dankogai/js-base64#readme"},"atob"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/docs/v3/docs.md"},"xmlParser"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/digitalbazaar/forge"},"Forge")),(0,n.kt)("figure",null,(0,n.kt)("object",{data:"https://www.youtube.com/embed/tqJna718tj4?autoplay=0",width:"750px",height:"400px"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Using Built-in Libraries in Appsmith"))))),(0,n.kt)("h2",{id:"using-javascript-libraries"},"Using JavaScript libraries"),(0,n.kt)("p",null,"The external libraries can be used anywhere inside ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ }}")," just as JavaScript is used in the rest of the application. The signature of the JavaScript libraries are exactly the same as mentioned in their documentation"),(0,n.kt)("h3",{id:"example-lodash"},"Example: Lodash"),(0,n.kt)("p",null,"Following is an example of the Lodash ",(0,n.kt)("inlineCode",{parentName:"p"},"_.map")," utility, in use. fetchFruits is the name of the API / Query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"{{\n  _.map(fetchFruits.data, (fruit) => { \n    return { label: fruit.name, value: fruit.id } \n    })\n}}\n")),(0,n.kt)("h3",{id:"example-moment"},"Example: moment"),(0,n.kt)("p",null,"An example of the moment.js ",(0,n.kt)("inlineCode",{parentName:"p"},"format")," utility, in use in a ",(0,n.kt)("a",{parentName:"p",href:"../data-access-and-binding/querying-a-database/"},"query"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"insert into users (name, email, createdDate) values \n('John', 'john@appsmith.com', {{moment().format(\"YYYY-MM-DD\")}})\n")))}m.isMDXComponent=!0}}]);