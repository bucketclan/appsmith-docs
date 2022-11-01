"use strict";(self.webpackChunkappsmith_docs=self.webpackChunkappsmith_docs||[]).push([[3933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={description:"Deploy Appsmith to a remote host using Ansible"},o="Ansible",l={unversionedId:"getting-started/setup/installation-guides/ansible",id:"getting-started/setup/installation-guides/ansible",title:"Ansible",description:"Deploy Appsmith to a remote host using Ansible",source:"@site/docs/getting-started/setup/installation-guides/ansible.md",sourceDirName:"getting-started/setup/installation-guides",slug:"/getting-started/setup/installation-guides/ansible",permalink:"/appsmith-docs/getting-started/setup/installation-guides/ansible",draft:!1,editUrl:"https://github.com/bucketclan/appsmith-docs/blob/v1.5/website/docs/getting-started/setup/installation-guides/ansible.md",tags:[],version:"current",frontMatter:{description:"Deploy Appsmith to a remote host using Ansible"},sidebar:"tutorialSidebar",previous:{title:"CloudJiffy",permalink:"/appsmith-docs/getting-started/setup/installation-guides/cloudjiffy"},next:{title:"Instance Configuration",permalink:"/appsmith-docs/getting-started/setup/instance-configuration/"}},s={},p=[{value:"Deployment Steps:",id:"deployment-steps",level:2},{value:"Step 1: Install Ansible",id:"step-1-install-ansible",level:2},{value:"Step 2: Ansible inventory setup",id:"step-2-ansible-inventory-setup",level:2},{value:"Step 3: Ansible configuration vars setup for Appsmith",id:"step-3-ansible-configuration-vars-setup-for-appsmith",level:2},{value:"Step 4: Run the Ansible playbook",id:"step-4-run-the-ansible-playbook",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ansible"},"Ansible"),(0,a.kt)("h2",{id:"deployment-steps"},"Deployment Steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/ansible#step-1-install-ansible"},"Install Ansible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/ansible#step-2-ansible-inventory-setup"},"Ansible inventory setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/ansible#step-3-ansible-configuration-vars-setup-for-appsmith"},"Ansible configuration vars setup for Appsmith")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/appsmith-docs/getting-started/setup/installation-guides/ansible#step-4-run-the-ansible-playbook"},"Run the Ansible playbook"))),(0,a.kt)("h2",{id:"step-1-install-ansible"},"Step 1: Install Ansible"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can skip this step if you already have ansible intalled.")),(0,a.kt)("p",null,"There are two options for installing Ansible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Option 1: Using OS specific Package Managers."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To install on Ubuntu, you can run the following commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ sudo apt update\n$ sudo apt install software-properties-common\n$ sudo add-apt-repository --yes --update ppa:ansible/ansible\n$ sudo apt install ansible\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-specific-operating-systems"},"Ansible's official installation guide")," for other operating systems.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Option 2: Using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ sudo pip install ansible\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you do not have pip installed on your system, please refer to ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-and-upgrading-ansible-with-pip"},"Ansible's official guide on installing with pip."))))),(0,a.kt)("h2",{id:"step-2-ansible-inventory-setup"},"Step 2: Ansible inventory setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the Appsmith repository to your machine & move to the ansible playbook folder."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/appsmithorg/appsmith.git\n$ cd ./appsmith/deploy/ansible/appsmith_playbook\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory")," file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"    $ touch inventory\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory")," file, open it with your editor and add the hostname or FQDN of the server(s) you want to deploy Appsmith, along with the ansible port and ansible","_","user."),(0,a.kt)("p",{parentName:"li"},"The inventory file should follow the given format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"appsmith ansible_host={{ SERVER_HOST }} ansible_port={{ SERVER_PORT }} ansible_user={{ SERVER_USER }}\n")),(0,a.kt)("p",{parentName:"li"},"If you are using SSH keypairs for authenticating your SSH connections to your server. You can specify your ssh private key file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory")," file using ",(0,a.kt)("inlineCode",{parentName:"p"},"ansible_ssh_private_key_file")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"appsmith ansible_host={{ SERVER_HOST }} ansible_port={{ SERVER_PORT }} ansible_user={{ SERVER_USER }} ansible_ssh_private_key_file={{ SSH_PRIVATE_KEY_FILE }}\n")))),(0,a.kt)("h2",{id:"step-3-ansible-configuration-vars-setup-for-appsmith"},"Step 3: Ansible configuration vars setup for Appsmith"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"appsmith-vars.yml")," file with your editor.",(0,a.kt)("br",null),"\nThere are some variables that will need input from you to get the application start correctly",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install_dir"),": The absolute path of your app's installation folder on the server (required). Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"~/appsmith"))))),(0,a.kt)("h2",{id:"step-4-run-the-ansible-playbook"},"Step 4: Run the Ansible playbook"),(0,a.kt)("p",null,"You can run the ansible playbook with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ ansible-playbook -i inventory appsmith-playbook.yml --extra-vars "@appsmith-vars.yml"\n')),(0,a.kt)("p",null,"The command above will use the host information from the ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory")," file & feed your configuration vars from ",(0,a.kt)("inlineCode",{parentName:"p"},"appsmith-vars.yml")," before running the playbook"),(0,a.kt)("p",null,"When it's all done, provided all went well and no parameters were changed, you should be able to visit your app on browser using your ",(0,a.kt)("inlineCode",{parentName:"p"},"custom_domain")," or by your ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_HOST")," (if you didn't provide value for ",(0,a.kt)("inlineCode",{parentName:"p"},"custom_domain")," variable )"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": You can put your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory")," file in other folder and then specify its path with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," flag, for more detail, please check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html"},"Ansible Inventory documentation"))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you encounter any errors during this process, check out our guide on ",(0,a.kt)("a",{parentName:"p",href:"/appsmith-docs/help-and-support/troubleshooting-guide/deployment-errors"},"debugging deployment errors"),", if you are still facing an issue please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},"support@appsmith.com")," or join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord Server")," to directly speak to the Appsmith team!"))}m.isMDXComponent=!0}}]);