(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var o=a(2),n=(a(0),a(178));const i={id:"deployment",title:"Deployment Process",sidebar_label:"Deployment"},r={id:"deployment",isDocsHomePage:!1,title:"Deployment Process",description:"Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to production.",source:"@site/docs/deployment.md",permalink:"/docs/deployment",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/deployment.md",sidebar_label:"Deployment",sidebar:"someSidebar",previous:{title:"Accessing/Using your Test App",permalink:"/docs/testingapp"},next:{title:"Payment options to choose",permalink:"/docs/paymentgateways"}},l=[{value:"1. Superadmin",id:"1-superadmin",children:[]},{value:"2. Google PlayStore",id:"2-google-playstore",children:[]},{value:"3. Apple AppStore",id:"3-apple-appstore",children:[{value:"AppStore Provisioning certificates",id:"appstore-provisioning-certificates",children:[]}]},{value:"4. 3rd Party Tools Signup",id:"4-3rd-party-tools-signup",children:[]},{value:"5. Media Assets",id:"5-media-assets",children:[]},{value:"6. Text Strings",id:"6-text-strings",children:[]},{value:"7. Company Details for app",id:"7-company-details-for-app",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to production. "),Object(n.b)("h2",{id:"1-superadmin"},"1. Superadmin"),Object(n.b)("p",null,"Every platform owner whichever the products you subscribe from us will have super admin access. SuperAdmin Panel helps you to configure different settings of your apps and API in a user friendly way without coding involved. ","[Read more here]"," (superadmin.md). "),Object(n.b)("p",null,"SuperAdmin panel are not hosted anywhere but in our own servers. Hence you will be accessing the production superAdmin panel from this link (Https://admin.tradly.app). Apart from the sandbox access we have shared with you for testing, you will get a unique tenantID for your platform on your successful subscribed users. "),Object(n.b)("h2",{id:"2-google-playstore"},"2. Google PlayStore"),Object(n.b)("p",null,"Launching your apps in Google PlayStore through our managed apps will have this list of steps. "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You buying a Google Play Developer Licence in this link : ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://play.google.com/apps/publish"}),"https://play.google.com/apps/publish")," (Play publish account and not developer account)"),Object(n.b)("li",{parentName:"ol"},"Create your first app in Google play publish"),Object(n.b)("li",{parentName:"ol"},"You providing access to Google Play access to Tradly Launchpad team (The team will send you the email address) as we need to do below activities (Admin level access should be needed for the first release, later you can change to Developer only access) "),Object(n.b)("li",{parentName:"ol"},"Filling the informations like favicon, name, Privacy URL, etc under Superadmin is mandatory step before we go for production APK creation process. "),Object(n.b)("li",{parentName:"ol"},"You can fill the \u201cStore Listing\u201d fields also under Store Presence"),Object(n.b)("li",{parentName:"ol"},"APK Upload process: We Download & upload the SigningKey for your app, a mandatory process for Google. ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423"}),"Read more here on why it\u2019s needed"),".  "),Object(n.b)("li",{parentName:"ol"},"Our team can upload the app under your account "),Object(n.b)("li",{parentName:"ol"},"Wait for review, and fix any issues if highlighted by Google"),Object(n.b)("li",{parentName:"ol"},"Let you know once it is approved. ")),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Timelines")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"Time taken to get a google Play licence: Instant"),Object(n.b)("li",{parentName:"ul"},"Google Play licence: $25 per year and paid by you"),Object(n.b)("li",{parentName:"ul"},"No of days Google takes to approve your app: 5-10 Working days"),Object(n.b)("li",{parentName:"ul"},"No of days Google takes to approve your app updates from initial release: 3-5 Working days. ")))),Object(n.b)("h2",{id:"3-apple-appstore"},"3. Apple AppStore"),Object(n.b)("p",null,"Launching your apps in Apple AppStore involves more process than Google Playstore. Our launch time depends on this process"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Buy Apple Appstore developer licence "),Object(n.b)("li",{parentName:"ol"},"Admin level access to Tradly Team for the first release, later you can change to developer only access (The team will send you the email address). Read different access level control here: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.apple.com/support/roles/"}),"https://developer.apple.com/support/roles/")," "),Object(n.b)("li",{parentName:"ol"},"If you are not enrolled as organisation, then we need your time to setup a call to get the provisioning certificates for our developers to send the build to be updated in Appstore for you to review. (So if you have registered as a company, suggest signing up as a organisation)")),Object(n.b)("p",null,'"If you\u2019re enrolled as an organization, you have the option of adding additional members to your team. The role you assign them controls access to the development(including certificate creation) and distribution tools included with your membership."'),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Timelines")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("ul",{parentName:"div"},Object(n.b)("li",{parentName:"ul"},"Time taken to get  Apple licence: Depends and involves DUNS verification. (5-10Days)"),Object(n.b)("li",{parentName:"ul"},"Apple licence: $99 per year and paid by you "),Object(n.b)("li",{parentName:"ul"},"No of days Apple takes to approve your app: 5-10 Working days"),Object(n.b)("li",{parentName:"ul"},"No of days Apple takes to approve your app updates from initial release: 3-5 Working days. ")))),Object(n.b)("h3",{id:"appstore-provisioning-certificates"},"AppStore Provisioning certificates"),Object(n.b)("p",null,"if you provide admin access, you do not need to do the below provisioning creations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Creating Identifiers"),Object(n.b)("li",{parentName:"ol"},"Creating CSR"),Object(n.b)("li",{parentName:"ol"},"Creating Certificate"),Object(n.b)("li",{parentName:"ol"},"Creating Profile"),Object(n.b)("li",{parentName:"ol"},"Push notification certificate")),Object(n.b)("p",null,"Ask private video resources from the slack channel on how to create the above certificates. "),Object(n.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, setup a call with us"))),Object(n.b)("h2",{id:"4-3rd-party-tools-signup"},"4. 3rd Party Tools Signup"),Object(n.b)("p",null,"We provide free add on otherwise called 3rd party tools and utilities implemented for you. So you don't need to worry about implemementing marketing, tracking tools, etc. "),Object(n.b)("p",null,"Read the integrations section for step by step information on how to signup and setup the accounts. "),Object(n.b)("p",null,"Below is the list "),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/branch"}),"Branch.io")),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/Firebase"}),"Firebase")),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","AppStore access (Admin) "),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Appstore team ID ( )"),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Android  access ( ) "),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Android keystore config(first name, last name, organisation)"),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Stripe access "),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Stripe Standard or Express ")),Object(n.b)("h2",{id:"5-media-assets"},"5. Media Assets"),Object(n.b)("p",null,"Free resources: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ILLUSTRATIONS : ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://undraw.co/search"}),"https://undraw.co/search")," : You can use undraw an opensource website to download personalised and rich SVG/PNG illustrations. Its used from facebook to startups, make use of it (remember you can change the color there)"),Object(n.b)("li",{parentName:"ul"},"GENERAL: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.canva.com"}),"https://www.canva.com"),": The famous canva also provide lot of free resources. "),Object(n.b)("li",{parentName:"ul"},"ICONS: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.figma.com/file/ALx9XJzeRb0n6kjUjGo1Iq/TradlyPlatform-Icons?node-id=0%3A1"}),"https://www.figma.com/file/ALx9XJzeRb0n6kjUjGo1Iq/TradlyPlatform-Icons?node-id=0%3A1")," : You can find icons from this figma file. We are trying to improve the resources here from contributors. "),Object(n.b)("li",{parentName:"ul"},"WEBAPP: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.figma.com/file/N6JWLSTi65569BOmasbOeG/TradlyPlatform---webapp---Public?node-id=1%3A2"}),"https://www.figma.com/file/N6JWLSTi65569BOmasbOeG/TradlyPlatform---webapp---Public?node-id=1%3A2")," (The webapp we will be releasing soon)"),Object(n.b)("li",{parentName:"ul"},"DESIGN KIT: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform---DesignKit?node-id=8%3A0"}),"https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform---DesignKit?node-id=8%3A0")," if you want to play around on how your designs going to look in the app, you can share this with your design team to create mockups. (Just duplicate and use it)")),Object(n.b)("h2",{id:"6-text-strings"},"6. Text Strings"),Object(n.b)("p",null,"(applicable for multi language apps)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TradlyTeam will share with you a google sheet. "),Object(n.b)("li",{parentName:"ul"},"There will be a default protected key column which you might not need to edit"),Object(n.b)("li",{parentName:"ul"},"Fill the other columns whichever the language is applicable for you (For example: English, Spanish, Chinese-simplified, Chinese-traditional)")),Object(n.b)("h2",{id:"7-company-details-for-app"},"7. Company Details for app"),Object(n.b)("ul",{className:"contains-task-list"},Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Terms Condition  (Example: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.example.com/terms-conditions"}),"https://www.example.com/terms-conditions"),")"),Object(n.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(n.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Privacy URL (Example: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.example.com/privacy-policy"}),"https://www.example.com/privacy-policy"),")\nAs we are not providing web app as of now, you might need to host this in your static websites like squarespace, wordpress, etc. ")))}s.isMDXComponent=!0},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=o,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||i;return a?n.a.createElement(u,l(l({ref:t},s),{},{components:a})):n.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);