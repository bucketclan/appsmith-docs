"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[8613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=i,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const l={},r="Migrate from multi-container setup (k8s)",o={unversionedId:"getting-started/setup/installation-guides/kubernetes/migrate-k8s",id:"getting-started/setup/installation-guides/kubernetes/migrate-k8s",title:"Migrate from multi-container setup (k8s)",description:"Appsmith is now supported on Helm and this guide will help you migrate the deployment on Kubernetes, running on the old stack (multiple pods/containers), to the Helm chart (with single container).",source:"@site/docs/getting-started/setup/installation-guides/kubernetes/migrate-k8s.md",sourceDirName:"getting-started/setup/installation-guides/kubernetes",slug:"/getting-started/setup/installation-guides/kubernetes/migrate-k8s",permalink:"/appsmith-docs/getting-started/setup/installation-guides/kubernetes/migrate-k8s",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/installation-guides/kubernetes/migrate-k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/appsmith-docs/getting-started/setup/installation-guides/kubernetes/"},next:{title:"AWS AMI",permalink:"/appsmith-docs/getting-started/setup/installation-guides/aws-ami"}},p={},m=[{value:"Before migrating",id:"before-migrating",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:3},{value:"2. Not include in this document",id:"2-not-include-in-this-document",level:3},{value:"Migration steps",id:"migration-steps",level:2},{value:"1. Export database &amp; configuration from old K8S",id:"1-export-database--configuration-from-old-k8s",level:3},{value:"2. Export configuration from old K8S",id:"2-export-configuration-from-old-k8s",level:3},{value:"3. Change configurations for Helm context",id:"3-change-configurations-for-helm-context",level:3},{value:"4. Install Helm chart",id:"4-install-helm-chart",level:3},{value:"5. Import database",id:"5-import-database",level:3}],s={toc:m};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrate-from-multi-container-setup-k8s"},"Migrate from multi-container setup (k8s)"),(0,i.kt)("p",null,"Appsmith is now supported on Helm and this guide will help you migrate the deployment on Kubernetes, running on the old stack (multiple pods/containers), to the Helm chart (with single container)."),(0,i.kt)("p",null,"This guide will work properly on the default Kubernetes installation with following resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c kubectl get all\nNAME                                           READY   STATUS      RESTARTS   AGE\npod/appsmith-editor-995c974df-njtdh            1/1     Running     0          3d12h\npod/appsmith-internal-server-dfd68b55b-8p5w8   1/1     Running     1          3d12h\npod/imago-27473940-kwslt                       0/1     Completed   0          12m\npod/mongo-statefulset-0                        1/1     Running     0          3d12h\npod/redis-statefulset-0                        1/1     Running     0          3d12h\n\nNAME                               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE\nservice/appsmith-backend-service   NodePort    10.100.247.245   <none>        8080:32694/TCP    3d12h\nservice/appsmith-editor            ClusterIP   10.100.236.17    <none>        80/TCP            3d12h\nservice/kubernetes                 ClusterIP   10.100.0.1       <none>        443/TCP           3d12h\nservice/mongo-service              NodePort    10.100.2.162     <none>        27017:31766/TCP   3d12h\nservice/redis-service              NodePort    10.100.7.184     <none>        6379:30834/TCP    3d12h\n\nNAME                                       READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/appsmith-editor            1/1     1            1           3d12h\ndeployment.apps/appsmith-internal-server   1/1     1            1           3d12h\n\nNAME                                                  DESIRED   CURRENT   READY   AGE\nreplicaset.apps/appsmith-editor-995c974df             1         1         1       3d12h\nreplicaset.apps/appsmith-internal-server-dfd68b55b    1         1         1       3d12h\n\nNAME                                 READY   AGE\nstatefulset.apps/mongo-statefulset   1/1     3d12h\nstatefulset.apps/redis-statefulset   1/1     3d12h\n\nNAME                  SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ncronjob.batch/imago   0 * * * *   False     0        12m             3d12h\n\nNAME                       COMPLETIONS   DURATION   AGE\njob.batch/imago-27473940   1/1           16s        12m\n")),(0,i.kt)("h2",{id:"before-migrating"},"Before migrating"),(0,i.kt)("h3",{id:"1-prerequisites"},"1. Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," must be installed and configured to connect your cluster:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Install kubectl: ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/vi/docs/tasks/tools/install-kubectl/"},"kubernetes.io/vi/docs/tasks/tools/install-kubectl/")),(0,i.kt)("li",{parentName:"ul"},"Minikube: ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/handbook/kubectl/"},"Setup Kubectl")),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Kubernetes: ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"},"Configuring cluster access for kubectl")),(0,i.kt)("li",{parentName:"ul"},"Aws EKS: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html"},"Create a kubeconfig for Amazon EKS")))),(0,i.kt)("li",{parentName:"ul"},"During this guide, we will use ",(0,i.kt)("inlineCode",{parentName:"li"},"yq")," package to format data from the ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigMap")," resources into a ",(0,i.kt)("inlineCode",{parentName:"li"},".yaml")," file as reference in migrating configuration:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"yq")," package: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikefarah/yq#install"},"https://github.com/mikefarah/yq#install"))))),(0,i.kt)("h3",{id:"2-not-include-in-this-document"},"2. Not include in this document"),(0,i.kt)("p",null,"Based on the context of Kubernetes, there are two sections will not be covered in this guideline:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrate existing SSL certificate:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In both context of old Kubernetes stack & new Helm chart, Kubernetes cluster will use ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager")," (",(0,i.kt)("a",{parentName:"li",href:"https://cert-manager.io/"},"https://cert-manager.io/"),") to provision the SSL certificate. By definition, ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"Automate certificate manager")," which provisions and manages the certificates itself => Backward incompatible if migrating certificate from one ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager")," to another one.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Suggestion: We suggest that after migrating to the Helm chart, you can follow this document (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/Setup-https.md"},"https://github.com/appsmithorg/appsmith/blob/release/deploy/helm/Setup-https.md"),") to setup new ",(0,i.kt)("inlineCode",{parentName:"li"},"cert-manager")," and provision new certificate."))))),(0,i.kt)("li",{parentName:"ul"},"Remove old Kubernetes stack:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"During this guide, we will not mention about removing the old Kubernetes stacks due to it is not a required step in the migration and you can keep it as a back-up plan in case of having issue when migrating to new Helm chart.")))),(0,i.kt)("h2",{id:"migration-steps"},"Migration steps"),(0,i.kt)("h3",{id:"1-export-database--configuration-from-old-k8s"},"1. Export database & configuration from old K8S"),(0,i.kt)("p",null,"Goal: Export data from the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoDB")," pod and download the archive file to local."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Steps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"backup")," directory in ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")," pod."),(0,i.kt)("li",{parentName:"ul"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"mongodump")," command to export data from running MongoDB pod."),(0,i.kt)("li",{parentName:"ul"},"Copy archive file from MongoDB pod to local."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Commands"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"backup")," directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl exec mongo-statefulset-0 -- mkdir -pv /data/db/backup\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Export ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")," data:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl exec mongo-statefulset-0 o-statefulset-0 -- sh -c 'mongodump --uri=\"mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@localhost/$MONGO_INITDB_DATABASE\" --authenticationDatabase admin --archive=/data/db/backup/appsmith-data.archive --gzip'\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Copy archive file to local:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl cp mongo-statefulset-0:data/db/backup/appsmith-data.archive appsmith-data.archive\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Output of this step should be a local ",(0,i.kt)("inlineCode",{parentName:"p"},"archive")," file which store all data of the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoDB")," service in Kubernetes. We can verify by listing out local directory to check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"archive")," file has been stored in local."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"ls | grep appsmith-data.archive\n\nappsmith-data.archive\n")))))),(0,i.kt)("h3",{id:"2-export-configuration-from-old-k8s"},"2. Export configuration from old K8S"),(0,i.kt)("p",null,"Goal: Export all existing configurations from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in the running Kubernetes system and migrate them into the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," template of the Helm chart."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Steps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Retrieve all configurations data from ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigMap")," and write into a file with ",(0,i.kt)("inlineCode",{parentName:"li"},"yaml")," format (",(0,i.kt)("inlineCode",{parentName:"li"},"configuration.yaml"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," template of the Helm chart."),(0,i.kt)("li",{parentName:"ul"},"Manually copy data from ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration.yaml")," to the section ",(0,i.kt)("inlineCode",{parentName:"li"},"applicationConfig")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml"),"."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Commands"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run following command to get and write data into ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'kubectl get cm application-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml \\\n&& kubectl get cm mongo-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml \\\n&& kubectl get cm encryption-config -o "jsonpath={.data}" | yq e -P -I 2 >> configuration.yaml\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," template of Helm chart:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"curl -o values.yaml https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/helm/values.yaml\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Manually copy values to ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," (put value in the quote ",(0,i.kt)("inlineCode",{parentName:"li"},'""')," is highly recommend):")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(61702).Z,width:"1680",height:"665"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After manually migrating configuration, the ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationConfig")," section in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," should be same as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'applicationConfig:\n  APPSMITH_OAUTH2_GOOGLE_CLIENT_ID: ""\n  APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET: ""\n  APPSMITH_OAUTH2_GITHUB_CLIENT_ID: ""\n  APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET: ""\n  APPSMITH_FORM_LOGIN_DISABLED: "false"\n  APPSMITH_SIGNUP_DISABLED: "true"\n  APPSMITH_CLIENT_LOG_LEVEL: ""\n  APPSMITH_GOOGLE_MAPS_API_KEY: "false"\n  APPSMITH_MAIL_ENABLED: ""\n  APPSMITH_MAIL_HOST: ""\n  APPSMITH_MAIL_PORT: ""\n  APPSMITH_MAIL_USERNAME: ""\n  APPSMITH_MAIL_PASSWORD: ""\n  APPSMITH_MAIL_FROM: ""\n  APPSMITH_REPLY_TO: ""\n  APPSMITH_MAIL_SMTP_AUTH: ""\n  APPSMITH_MAIL_SMTP_TLS_ENABLED: ""\n  APPSMITH_DISABLE_TELEMETRY: "false"\n  APPSMITH_RECAPTCHA_SITE_KEY: ""\n  APPSMITH_RECAPTCHA_SECRET_KEY: ""\n  APPSMITH_RECAPTCHA_ENABLED: "false"\n  APPSMITH_MONGODB_URI: "mongodb://root:root@mongo-service/appsmith"\n  APPSMITH_REDIS_URL: "redis://redis-service:6379"\n  APPSMITH_ENCRYPTION_PASSWORD: "rmEOM1TxTRxit"\n  APPSMITH_ENCRYPTION_SALT: "Jhj1IyFcpKYUK"\n  APPSMITH_CUSTOM_DOMAIN: ""\n')))))),(0,i.kt)("h3",{id:"3-change-configurations-for-helm-context"},"3. Change configurations for Helm context"),(0,i.kt)("p",null,"Goal: Change configurations in ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," after migrating from step 2, this will ensure that Helm chart can run properly with internal ",(0,i.kt)("inlineCode",{parentName:"p"},"Redis")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoDB")," service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Steps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB URI")," with internal host.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add additional configuration for initial credential of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"Redis URL")," with local URL"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Action"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB URI")," with internal host: In the old Kubernetes stack, ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")," has been deployed as a separated resource in the cluster. In the new Helm chart, we use the internal ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")," service and configure it as ",(0,i.kt)("inlineCode",{parentName:"li"},"ReplicaSet"),". Therefore, we will need to perform following action for Helm context:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change the host in the ",(0,i.kt)("inlineCode",{parentName:"li"},"APPSMITH_MONGODB_URI")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"mongo-service")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.kt)("li",{parentName:"ul"},"Remove query parameter in the URI if they exist."))),(0,i.kt)("li",{parentName:"ul"},"Add additional configuration for initial credential of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB"),": You will need to add 2 new variables that are ",(0,i.kt)("inlineCode",{parentName:"li"},"APPSMITH_MONGODB_USER")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"APPSMITH_MONGODB_PASSWORD")," with values of user & password of the ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB")," ."),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"Redis URL")," with local URL: Same as ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDB"),", in the new Helm chart, we also use the internal ",(0,i.kt)("inlineCode",{parentName:"li"},"Redis")," service. Therefore, changing the host from ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-service")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),") is necessary action here."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Take the example as in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Verify")," step in section 2, after changing configuration, we will have the section ",(0,i.kt)("inlineCode",{parentName:"p"},"applicationConfig")," with values as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'applicationConfig:\n  APPSMITH_OAUTH2_GOOGLE_CLIENT_ID: ""\n  APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET: ""\n  APPSMITH_OAUTH2_GITHUB_CLIENT_ID: ""\n  APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET: ""\n  APPSMITH_FORM_LOGIN_DISABLED: "false"\n  APPSMITH_SIGNUP_DISABLED: "true"\n  APPSMITH_CLIENT_LOG_LEVEL: ""\n  APPSMITH_GOOGLE_MAPS_API_KEY: "false"\n  APPSMITH_MAIL_ENABLED: ""\n  APPSMITH_MAIL_HOST: ""\n  APPSMITH_MAIL_PORT: ""\n  APPSMITH_MAIL_USERNAME: ""\n  APPSMITH_MAIL_PASSWORD: ""\n  APPSMITH_MAIL_FROM: ""\n  APPSMITH_REPLY_TO: ""\n  APPSMITH_MAIL_SMTP_AUTH: ""\n  APPSMITH_MAIL_SMTP_TLS_ENABLED: ""\n  APPSMITH_DISABLE_TELEMETRY: "false"\n  APPSMITH_RECAPTCHA_SITE_KEY: ""\n  APPSMITH_RECAPTCHA_SECRET_KEY: ""\n  APPSMITH_RECAPTCHA_ENABLED: "false"\n  APPSMITH_MONGODB_URI: "mongodb://root:root@localhost/appsmith"\n  APPSMITH_REDIS_URL: "redis://127.0.0.1:6379"\n  APPSMITH_ENCRYPTION_PASSWORD: "rmEOM1TxTRxit"\n  APPSMITH_ENCRYPTION_SALT: "Jhj1IyFcpKYUK"\n  APPSMITH_CUSTOM_DOMAIN: ""\n  APPSMITH_MONGODB_USER: "root"\n  APPSMITH_MONGODB_PASSWORD: "root"\n')))))),(0,i.kt)("h3",{id:"4-install-helm-chart"},"4. Install Helm chart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Goal: Guide to install new Helm chart with old configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Steps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add Helm repository.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update repository."),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"Imago")," resources."),(0,i.kt)("li",{parentName:"ul"},"Install Appsmith Helm chart."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add Helm repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"helm repo add appsmith https://helm.appsmith.com\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update repository:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"helm repo update\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"Imago")," resources: ",(0,i.kt)("inlineCode",{parentName:"li"},"Imago")," is a auto-update tool for Kubernetes, this tool is set up in both context of old Kubernetes stack & Helm chart. Therefore, it may occur a conflict in deploying Helm chart with existing ",(0,i.kt)("inlineCode",{parentName:"li"},"Imago")," service account & cronjob. Removing it from old Kubernetes context is necessary:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl delete sa,cronjob imago\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Install Appsmith Helm chart")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"helm install appsmith appsmith/appsmith --values values.yaml\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After installation, you can check running pods with below command and should see new pod which created by the Helm chart:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl get pods\nNAME                                        READY   STATUS    RESTARTS   AGE\nappsmith-0                                  1/1     Running   0          2m48s\nappsmith-editor-566f7b547f-lb9n8            1/1     Running   0          55m\nappsmith-internal-server-5c78944b64-fs7jm   1/1     Running   0          44m\nmongo-statefulset-0                         1/1     Running   0          55m\nredis-statefulset-0                         1/1     Running   0          55m\n")))))),(0,i.kt)("h3",{id:"5-import-database"},"5. Import database"),(0,i.kt)("p",null,"Goal: Importing data from archive file into new Helm chart"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Steps"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"restore")," directory in new pod."),(0,i.kt)("li",{parentName:"ul"},"Copy archive file from local to new pod.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"import_db")," command."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"restore")," directory in new pod"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl exec appsmith-0 -- mkdir -p /appsmith-stacks/data/restore\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy archive file from local to new pod:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl cp appsmith-data.archive appsmith-0:/appsmith-stacks/data/restore\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"import_db")," command:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl exec -it appsmith-0 -- appsmithctl import_db\n")),(0,i.kt)("p",{parentName:"li"},"Note that this will ask you ",(0,i.kt)("inlineCode",{parentName:"p"},"Importing this DB will erase this data. Are you sure you want to proceed"),", where you can respond with ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),". It is safe in this situation since the new database in the new setup only contains initial data and should be safe to be overwritten.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Expected output in this step is Helm chart still works properly after importing and the data from old Kubernetes stack also comes up in the Helm chart")))))}u.isMDXComponent=!0},61702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/helm-values-mapping-54c0e2cbacbc0bfa1a1d89c6de4ef577.png"}}]);