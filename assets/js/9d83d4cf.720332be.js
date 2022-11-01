"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=o,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:6},i="How to Use the Camera/Image Widget to Upload/Download Images?",l={unversionedId:"learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images",id:"learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images",title:"How to Use the Camera/Image Widget to Upload/Download Images?",description:"Amazon S3 (Simple Storage Service) provides object storage built for storing and recovering any amount of information or data from anywhere over the internet. It provides this storage through a web services interface.",source:"@site/docs/learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images.md",sourceDirName:"learning-and-resources/how-to-guides",slug:"/learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images",permalink:"/learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Upload / Download Files from S3",permalink:"/learning-and-resources/how-to-guides/how-to-upload-to-s3"},next:{title:"How to work with Google Sheets on Appsmith",permalink:"/learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith"}},s={},u=[{value:"<strong>What you&#39;ll learn</strong>",id:"what-youll-learn",level:4},{value:"Create S3 Datasource",id:"create-s3-datasource",level:2},{value:"Upload Image Using Camera Widget",id:"upload-image-using-camera-widget",level:2},{value:"Upload Image Using Image Widget",id:"upload-image-using-image-widget",level:2},{value:"Download The Image",id:"download-the-image",level:2},{value:"Fetch Single File",id:"fetch-single-file",level:4},{value:"Fetch All Files",id:"fetch-all-files",level:4},{value:"Download Files",id:"download-files",level:4},{value:"Using Queries in applications",id:"using-queries-in-applications",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-the-cameraimage-widget-to-uploaddownload-images"},"How to Use the Camera/Image Widget to Upload/Download Images?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/?nc2=type_a"},"Amazon S3")," (Simple Storage Service) provides object storage built for storing and recovering any amount of information or data from anywhere over the internet. It provides this storage through a web services interface."),(0,o.kt)("h4",{id:"what-youll-learn"},(0,o.kt)("strong",{parentName:"h4"},"What you'll learn")),(0,o.kt)("p",null,"In this guide, you would learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to connect and configure the S3 datasource."),(0,o.kt)("li",{parentName:"ul"},"How to use the Image and Camera widget."),(0,o.kt)("li",{parentName:"ul"},"How to upload/download images using S3.")),(0,o.kt)("h2",{id:"create-s3-datasource"},"Create S3 Datasource"),(0,o.kt)("p",null,"To add an S3 datasource, navigate to ",(0,o.kt)("strong",{parentName:"p"},"Explorer")," >> Click plus sign (",(0,o.kt)("strong",{parentName:"p"},"+"),") (next to S3)>> ",(0,o.kt)("strong",{parentName:"p"},"Select S3 under Databases"),". Once your S3 datasource has been created, follow these ",(0,o.kt)("a",{parentName:"p",href:"/reference/datasources/querying-amazon-s3#connection-settings"},"instructions "),"to connect your app to the S3 database."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To upload your data to Amazon S3, you must first create an Amazon S3 bucket in one of the AWS Regions. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"Create a new bucket."))),(0,o.kt)("h2",{id:"upload-image-using-camera-widget"},"Upload Image Using Camera Widget"),(0,o.kt)("p",null,"The camera widget powers you to capture images and videos from your applications and share the data for further use. In this section, you will learn how you can upload images/videos to Amazon S3."),(0,o.kt)("figure",null,(0,o.kt)("object",{data:"https://www.youtube.com/embed/v43gTz_4Jck?autoplay=0",width:"750px",height:"400px"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drag and drop the ",(0,o.kt)("a",{parentName:"li",href:"/reference/widgets/camera"},"Camera widget")," onto the canvas."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"+")," icon next to the ",(0,o.kt)("strong",{parentName:"li"},"queries/js")," and choose your S3 datasource."),(0,o.kt)("li",{parentName:"ul"},"Rename the query."),(0,o.kt)("li",{parentName:"ul"},"From the Commands drop-down, Select the method ",(0,o.kt)("strong",{parentName:"li"},"Create a new file."))),(0,o.kt)("p",null,"You can pass the below parameters to ",(0,o.kt)("strong",{parentName:"p"},"Create a new file.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bucket Name:")," The object key (or key name) uniquely identifies the object in an Amazon S3 bucket."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Path:")," Path of the location you want to store the file. ex. images/any.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Intermediate folders not existing will be automatically created.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Data Type:")," You can choose between Base64 and text as your file data type. You should select base64 when uploading data from the camera widget."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expiry Duration of Signed URL (Minutes):")," The timestamp at which the signed URL would expire.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The maximum expiration time for a signed URL is one week from the time of creation.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content"),": You can manually add data into the Content field by writing an object with a text and data property or you can fetch data from the camera widget like below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "data": "{{Camera1.imageDataURL}}"\n}\n')),(0,o.kt)("p",null,"Once you have added all the required parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the Camera widget property pane."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"OnImageSave"),' event, choose your query from the "',(0,o.kt)("strong",{parentName:"li"},"execute a query"),'" option.')),(0,o.kt)("p",null,"When you capture and save the image, your ",(0,o.kt)("strong",{parentName:"p"},"upload","_","image")," query is executed. You can visit the ",(0,o.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/home"},"S3 console")," to see the uploaded media."),(0,o.kt)("h2",{id:"upload-image-using-image-widget"},"Upload Image Using Image Widget"),(0,o.kt)("p",null,"The Image widget displays the images in your app. Images must have a valid base64 or a URL. You can follow similar steps to the image widget."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drag and drop the ",(0,o.kt)("a",{parentName:"li",href:"/reference/widgets/image"},"Image widget")," onto the canvas."),(0,o.kt)("li",{parentName:"ul"},"Now set the image URL in the Image property pane."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"+")," icon next to the ",(0,o.kt)("strong",{parentName:"li"},"queries/js")," and choose your ",(0,o.kt)("strong",{parentName:"li"},"S3 datasource.")),(0,o.kt)("li",{parentName:"ul"},"Rename the query."),(0,o.kt)("li",{parentName:"ul"},"From the Commands drop-down, Select the method ",(0,o.kt)("strong",{parentName:"li"},"Create a new file."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You should select ",(0,o.kt)("strong",{parentName:"p"},"base64")," as ",(0,o.kt)("em",{parentName:"p"},"File Data Type")," when uploading data from the image widget.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63297).Z,width:"1390",height:"861"})),(0,o.kt)("p",null,"In the content body, add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "data": "{{Image1.image}}"\n}\n')),(0,o.kt)("p",null,"Once you have added all the required parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now, set the Image Widget's ",(0,o.kt)("strong",{parentName:"li"},"onClick")," event to ",(0,o.kt)("strong",{parentName:"li"},"execute a query"),", and choose your query.")),(0,o.kt)("p",null,"Your image will be stored in the S3 database once you run this query. Let's look at how to fetch an image from the S3 database."),(0,o.kt)("h2",{id:"download-the-image"},"Download The Image"),(0,o.kt)("h4",{id:"fetch-single-file"},"Fetch Single File"),(0,o.kt)("figure",null,(0,o.kt)("object",{data:"https://www.youtube.com/embed/dVZEd8p0Y2c?autoplay=0",width:"750px",height:"400px"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the + icon next to the ",(0,o.kt)("strong",{parentName:"li"},"queries/js")," and choose your ",(0,o.kt)("strong",{parentName:"li"},"S3 datasource.")),(0,o.kt)("li",{parentName:"ul"},"Rename the query."),(0,o.kt)("li",{parentName:"ul"},"From the Commands drop-down, Select the method ",(0,o.kt)("strong",{parentName:"li"},"Read file."))),(0,o.kt)("p",null,"You can pass the below parameters to ",(0,o.kt)("strong",{parentName:"p"},"Read a file.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bucket Name:")," Name of the bucket where the image is stored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Path"),": Path of the image you want to fetch. ex. images/name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Data Type"),": You should select base64 to display the image.")),(0,o.kt)("p",null,"Once you have added all the required parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drag and drop the",(0,o.kt)("a",{parentName:"li",href:"/reference/widgets/image"}," Image widget")," onto the canvas."),(0,o.kt)("li",{parentName:"ul"},"In the Image property pane, add:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{{<your_query_name>.data.fileData}}\n")),(0,o.kt)("h4",{id:"fetch-all-files"},"Fetch All Files"),(0,o.kt)("figure",null,(0,o.kt)("object",{data:"https://www.youtube.com/embed/UzV5LZ0kvDQ?autoplay=0",width:"750px",height:"400px"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the + icon next to the ",(0,o.kt)("strong",{parentName:"li"},"queries/js")," and choose your ",(0,o.kt)("strong",{parentName:"li"},"S3 datasource.")),(0,o.kt)("li",{parentName:"ul"},"Rename the query."),(0,o.kt)("li",{parentName:"ul"},"From the Commands drop-down, Select the method ",(0,o.kt)("strong",{parentName:"li"},"List files")," in the bucket."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("strong",{parentName:"li"},"bucket name.")),(0,o.kt)("li",{parentName:"ul"},"Now, run the query.")),(0,o.kt)("p",null,"Now, open the query window and select the table option on the right-side property pane. It would automatically add a table widget to your canvas."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Bind the query\u2019s response to the Table using JavaScript in the Table Data Property ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"{{list_files.data}}")),".")),(0,o.kt)("p",null,"Now your table should list all the files present in your S3 bucket."),(0,o.kt)("p",null,"You can use an image widget to display images listed in the table widget. You can follow this ",(0,o.kt)("a",{parentName:"p",href:"/learning-and-resources/how-to-guides/how-to-upload-to-s3"},"guide "),"to learn more."),(0,o.kt)("h4",{id:"download-files"},"Download Files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the image property pane."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"JS")," button next to the ",(0,o.kt)("strong",{parentName:"li"},"onClick")," event and write the following JavaScript query:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{{download(atob(Fetch_image.data.fileData),'Testname','image/png')}}\n")),(0,o.kt)("p",null,"Now, your image will be downloaded when you click on the image widget."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can check this ",(0,o.kt)("a",{parentName:"p",href:"/learning-and-resources/how-to-guides/how-to-upload-to-s3"},"Guide "),"to learn more about Upload/Download Files from S3.")),(0,o.kt)("p",null,"With Appsmith S3 integration, it is possible to create apps that seamlessly connect with the S3 database and provide additional flexibility for updating and analyzing data."),(0,o.kt)("h2",{id:"using-queries-in-applications"},"Using Queries in applications"),(0,o.kt)("p",null,"Once you have successfully run a Query, you can use it in your application to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/displaying-data-read/"},"Display Data ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/capturing-data-write/capture-form-data"},"Capture Data ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/core-concepts/data-access-and-binding/querying-a-database/"},"Execute Queries"))))}p.isMDXComponent=!0},63297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uploads31-31131f46123ed5075d601cf6c0363066.PNG"}}]);