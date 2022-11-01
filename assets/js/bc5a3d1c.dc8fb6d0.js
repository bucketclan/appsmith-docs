"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:2},o="Appsmithctl",p={unversionedId:"getting-started/setup/instance-management/appsmithctl",id:"getting-started/setup/instance-management/appsmithctl",title:"Appsmithctl",description:"Appsmith comes with an appsmithctl command line utility. You can use it for managing and maintaining your Appsmith instance.",source:"@site/docs/getting-started/setup/instance-management/appsmithctl.md",sourceDirName:"getting-started/setup/instance-management",slug:"/getting-started/setup/instance-management/appsmithctl",permalink:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/instance-management/appsmithctl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Supervisor",permalink:"/appsmith-docs/getting-started/setup/instance-management/supervisor"},next:{title:"Maintenance Window",permalink:"/appsmith-docs/getting-started/setup/instance-management/maintenance-window"}},s={},l=[{value:"Subcommands",id:"subcommands",level:3},{value:"Export Database",id:"export-database",level:2},{value:"<code>ex</code>, <code>export_db</code>",id:"ex-export_db",level:3},{value:"Import Database",id:"import-database",level:2},{value:"<code>im</code>, <code>import_db</code>",id:"im-import_db",level:3},{value:"Backup Appsmith Instance",id:"backup-appsmith-instance",level:2},{value:"backup",id:"backup",level:3},{value:"Optional arguments for backup",id:"optional-arguments-for-backup",level:4},{value:"Sync Backup (only for Business Edition)",id:"sync-backup-only-for-business-edition",level:4},{value:"Restore Appsmith instance",id:"restore-appsmith-instance",level:2},{value:"<code>restore</code>",id:"restore",level:3}],m={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"appsmithctl"},"Appsmithctl"),(0,i.kt)("p",null,"Appsmith comes with an ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"appsmithctl"))," command line utility. You can use it for managing and maintaining your Appsmith instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"appsmithctl <subcommand> <options>\n")),(0,i.kt)("h3",{id:"subcommands"},"Subcommands"),(0,i.kt)("p",null,"Subcommands allow you to trigger different operations like exporting or importing databases."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--help")),(0,i.kt)("td",{parentName:"tr",align:null},"Show help.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#ex-export_db"},(0,i.kt)("inlineCode",{parentName:"a"},"ex"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"export_db"))),(0,i.kt)("td",{parentName:"tr",align:null},"Export internal database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#im-import_db"},(0,i.kt)("inlineCode",{parentName:"a"},"im"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"import_db"))),(0,i.kt)("td",{parentName:"tr",align:null},"Import internal database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mi"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"migrate")),(0,i.kt)("td",{parentName:"tr",align:null},"Migrate to a new server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"crs"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"check_replica_set")),(0,i.kt)("td",{parentName:"tr",align:null},"Check Replica Set MongoDB.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#backup"},(0,i.kt)("inlineCode",{parentName:"a"},"backup"))),(0,i.kt)("td",{parentName:"tr",align:null},"Create a backup of the Appsmith instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#restore"},(0,i.kt)("inlineCode",{parentName:"a"},"restore"))),(0,i.kt)("td",{parentName:"tr",align:null},"Restore the Appsmith instance from a backup.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"With ",(0,i.kt)("strong",{parentName:"p"},"Business Edition,")," you can also sync the backups to an AWS S3 bucket.")),(0,i.kt)("h2",{id:"export-database"},"Export Database"),(0,i.kt)("p",null,"Use the following command to backup Appsmith's database."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can restore the backups onto another instance using the ",(0,i.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#im-import_db"},"import")," command to restore data.")),(0,i.kt)("h3",{id:"ex-export_db"},(0,i.kt)("inlineCode",{parentName:"h3"},"ex"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"export_db")),(0,i.kt)("p",null,"Before running this, ensure you are in the directory where ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"))," is located."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith appsmithctl export_db\n")),(0,i.kt)("p",null,"The output file will be stored in the container directory ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"/appsmith-stacks/data/backup/appsmith-data.archive")),". Thanks to the volume configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, it should be available on your host machine at ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"./stacks/data/backup/appsmith-data.archive")),"."),(0,i.kt)("p",null,"If your volume configuration is different or unavailable, you can use the following command to copy the archive file to your host disk:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp appsmith:/appsmith-stacks/data/backup/appsmith-data.archive .\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may want to ",(0,i.kt)("strong",{parentName:"p"},"save")," the ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker.env"))," file in addition to this ",(0,i.kt)("strong",{parentName:"p"},"archive")," file if you intend to be able to reproduce this environment elsewhere in case of a disaster,")),(0,i.kt)("p",null,"The ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker.env"))," file can be copied from the container with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp appsmith:/appsmith-stacks/configuration/docker.env .\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please save the encryption environment variables ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_PASSWORD"))," and ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_SALT")),"values, from ",(0,i.kt)("mark",null,"docker.env")," because the backup archive does not include them for security reasons.")),(0,i.kt)("h2",{id:"import-database"},"Import Database"),(0,i.kt)("p",null,"The following command can restore the backup archive created by the ",(0,i.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#ex-export_db"},"export")," command."),(0,i.kt)("h3",{id:"im-import_db"},(0,i.kt)("inlineCode",{parentName:"h3"},"im"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"import_db")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, copy the archive file into the container using the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ./appsmith-data.archive appsmith:/appsmith-stacks/data/restore/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Second, run the following command to import data from this file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith appsmithctl import_db\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may also want to copy the ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker.env"))," from the original instance into this one when you restore.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"li"},"docker.env"))," file using the below command:")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are in the installation folder and ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker.env"))," exists in the same folder. If not, please append the path where the file resides to the below command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp ./docker.env appsmith:/appsmith-stacks/configuration/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restart the Appsmith server using the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith supervisorctl restart backend\n")),(0,i.kt)("h2",{id:"backup-appsmith-instance"},"Backup Appsmith Instance"),(0,i.kt)("p",null,"Use the following command to create a backup archive of the Appsmith instance. The backup includes the database, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.env")," data, and Git data."),(0,i.kt)("h3",{id:"backup"},"backup"),(0,i.kt)("p",null,"Use the command to backup the archive."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The backed-up archive can then be used to restore an Appsmith instance to the previous state using the restore command.")),(0,i.kt)("p",null,"Before running this, ensure you are in the docker host root directory where ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"))," is located."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith appsmithctl backup\n")),(0,i.kt)("p",null,"The archive file will be stored in the container directory ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"/appsmith-stacks/data/backup/")),". Thanks to the volume configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, it should be available on your host machine at ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"./stacks/data/backup/"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Please save the ",(0,i.kt)("strong",{parentName:"p"},"encryption env values"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_PASSWORD")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_SALT,")," from docker.env because the backup archive ",(0,i.kt)("strong",{parentName:"p"},"does not include")," them for security reasons")),(0,i.kt)("h4",{id:"optional-arguments-for-backup"},"Optional arguments for backup"),(0,i.kt)("h4",{id:"sync-backup-only-for-business-edition"},"Sync Backup (only for Business Edition)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"appsmithctl backup --upload-to-s3\n")),(0,i.kt)("p",null,"You can choose to sync backups to an AWS S3 bucket (",(0,i.kt)("strong",{parentName:"p"},"only for Business Edition"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the below entries to the ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"li"},"docker.env"))," file to enable the sync:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"APPSMITH_BACKUP_S3_ACCESS_KEY=<aws access key> \nAPPSMITH_BACKUP_S3_SECRET_KEY=<aws secret key>\nAPPSMITH_BACKUP_S3_BUCKET_NAME=<bucket name> \nAPPSMITH_BACKUP_S3_REGION=<aws bucket region>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"--upload-to-s3")," option for the ",(0,i.kt)("strong",{parentName:"li"},"backup")," command. The backup command reads bucket details set in the environment variables above and uploads the backup to it.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once configured correctly, the ",(0,i.kt)("a",{parentName:"p",href:"/appsmith-docs/getting-started/setup/instance-management/appsmithctl#restore"},(0,i.kt)("strong",{parentName:"a"},"restore"))," command automatically lists the backups in the bucket and the local backups in the CLI menu.")),(0,i.kt)("h2",{id:"restore-appsmith-instance"},"Restore Appsmith instance"),(0,i.kt)("p",null,"The following command can be used to restore an Appsmith instance from a backup archive."),(0,i.kt)("h3",{id:"restore"},(0,i.kt)("inlineCode",{parentName:"h3"},"restore")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec appsmith appsmithctl restore\n")),(0,i.kt)("p",null,"The command first lists all the backup archives in the directory ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"/appsmith-stacks/data/backup/"))," in ascending/chronological order (the most recent backup archive at the bottom)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You may see a ",(0,i.kt)("strong",{parentName:"p"},"warning")," if you restore an instance with an ",(0,i.kt)("strong",{parentName:"p"},"older Appsmith version"),". You can follow the ",(0,i.kt)("strong",{parentName:"p"},"instructions to update")," the ",(0,i.kt)("mark",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"))," file with the correct Appsmith image corresponding to the ",(0,i.kt)("strong",{parentName:"p"},"instance to be restored"),".")),(0,i.kt)("p",null,"Enter the index of the corresponding backup archive you want to use to restore."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Command Line Interface :appsmithctl restore",src:a(95822).Z,width:"768",height:"146"})),(0,i.kt)("p",null,"In the restored instance, you may use the existing encryption environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_PASSWORD")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_ENCRYPTION_SALT")," of the current Appsmith instance. You can also choose to add the corresponding variables to the backed-up instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Restore option to use existing encryption values",src:a(78800).Z,width:"804",height:"71"})))}c.isMDXComponent=!0},95822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Restore_appsmith_1-f721994cc63c9da5b4bb813c0898c4cb.png"},78800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Restore_appsmith_2-0337ef4a3b2c198bbb912a5d6047df17.png"}}]);