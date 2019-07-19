(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,a,t){e.exports=t(87)},86:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=t(26),i=t(27),s=t(34),m=t(28),u=t(33),p=t(94),d=t(96),g=function(e){e.preventDefault();var a=e.currentTarget.getAttribute("href"),t=document.querySelector(a);window.scrollTo({top:t.offsetTop-t.scrollTop+t.clientTop,behavior:"smooth"})},h=function(){return r.a.createElement(p.a,{expand:"lg",className:"fixed-top"},r.a.createElement(p.a.Brand,{href:"#home",onClick:g},r.a.createElement("strong",null,"BR")),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"#projects",onClick:g},"Projects"),r.a.createElement(d.a.Link,{href:"#bio",onClick:g},"Bio"),r.a.createElement(d.a.Link,{target:"_blank",href:"./Rumack-Resume-2019.pdf"},"Resume"),r.a.createElement(d.a.Link,{target:"_blank",href:"https://github.com/brumack"},"Github"),r.a.createElement(d.a.Link,{target:"_blank",href:"https://www.linkedin.com/in/bradleyrumack/"},"LinkedIn"),r.a.createElement(d.a.Link,{target:"_blank",href:"https://www.instagram.com/firecitydev/"},"Insta"),r.a.createElement(d.a.Link,{href:"#contact",onClick:g},"Contact"))))},f=t(88),b=t(89),E=t(90),y=function(){return r.a.createElement(f.a,{id:"home"},r.a.createElement(b.a,{className:"justify-content-center align-items-center headline"},r.a.createElement(E.a,{lg:"12"},r.a.createElement("h1",null,"Bradley Rumack"),r.a.createElement("p",null,"Freelance Full-Stack Developer"))))},k=t(91),v=["fab fa-html5","fab fa-css3-alt","fab fa-js","fab fa-react","fab fa-node","fab fa-npm","fab fa-python","fas fa-database","fab fa-git","fab fa-wordpress"],w=function(){return r.a.createElement(k.a,{className:"stack"},r.a.createElement(b.a,null,v.map(function(e){return r.a.createElement(E.a,{key:e},r.a.createElement("i",{className:e}))})))},j=t(36),S=t(97),I=[{name:"Binance API Library",type:"back",image:"./images/binance1.png",description:"Node.js library offering fully-functional direct integration with Binance's exchange API. Binance is \n    the leading cryptocurrency exchange. I'll be submitting the repo to NPM as a package once documentation and additional\n    error handling are added.",slideshow:["LIB1.png"],live:null,hostIcon:"fab fa-github",repo:"https://github.com/brumack/binance-api-library",tech:["Node.js"],main:!0},{name:"EMP",type:"full",image:"./images/EMP1.jpg",slideshow:["EMP1.png","EMP2.png","EMP3.png","EMP4.png","EMP5.png"],description:"EMP (Employee Management Platform) is a RESTful CRUD application designed to be custom tailored to small businesses in need of\n    workforce and/or payroll management streamlining. Features will include employee management, job/task creation, \n    employee scheduling, messaging and payroll management. It's currently in development.",hostIcon:"fab fa-github",repo:"https://github.com/brumack/EMP",tech:["Reactjs","Node.js","Express.js","Javascript","MongoDB","Semantic UI","HTML","CSS"],main:!0},{name:"Wavez",type:"full",image:"./images/Wavez.jpg",slideshow:["Wavez1.png","Wavez2.png","Wavez3.png","Wavez4.png","Wavez5.png"],description:"Wavez is a RESTful CRUD application revolving around crowd-sourced beach info, particularly surfing conditions. Users can create \n      accounts in order to add new beaches or leave comments on beaches currently on record. I would like to eventually create user profiles and push it \n      towards a social media platform demo. A demo account can be accessed through admin1:admin1.",live:"https://wavezapp.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/wavez",tech:["Node.js","Express.js","MongoDB","Bootstrap","HTML","CSS","Weather.gov API"],main:!0},{name:"Real Estate Agent Site",type:"front",image:"./images/RE1.jpg",description:"This is an example multi-page website built for a real estate agent. I have incoprorated a few 3rd party tools, \n    such as a search portal and a social media feed, as well as created some custom financial calculators.",slideshow:["RE1.png","RE2.png","RE3.png","RE4.png","RE5.png"],live:"https://realestatedemo-bradrumack-com.herokuapp.com/",hostIcon:"fab fa-github",repo:null,tech:["Javascript","jQuery","Materialize CSS","HTML","CSS"],main:!0},{name:"Payment Gateway Demo",type:"full",image:"./images/USA2.jpg",description:"Sample checkout process using USAePay's sandbox API. For test cards\n     in various decline and fraud states see repo readme.md on Github",slideshow:["USA1.png","USA2.png","USA3.png","USA4.png"],live:"https://frozen-brushlands-21326.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/USAePayDemo",tech:["React","React.js","Express.js","USAePay API","Semantic UI","HTML","CSS"],main:!0},{name:"Portfolio",type:"front",image:"./images/Portfolio.jpg",description:"You're looking at it!",slideshow:["Portfolio1.png"],live:"https://www.bradrumack.com",hostIcon:"fab fa-github",repo:"https://github.com/brumack/portfolio",tech:["Javacript","Bootstrap","HTML","CSS"],main:!1},{name:"Tetra",type:"full",image:"./images/Tetra4.png",description:"Tetra is a cryptocurrency portfolio manager. Users create their own accounts, and then add their own assets, or assets \n      they would like to track to their dashboard. Balances for each asset can be added, and then used to calculate a total portfolio balance. \n      A demo account can be accessed under demo@demo.com:demodemo.",slideshow:["Tetra1.png","Tetra2.png","Tetra3.png","Tetra4.png","Tetra5.png"],live:"https://tetra-crypto.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/tetra",tech:["React.js","Node.js","Express.js","MongoDB","Cryptocompare API","HTML","CSS","Javascript"],main:!0},{name:"NetBot",type:"back",image:"./images/bitcoin.jpg",description:"Netbot is an automated cryptocurrency trading script. Through continuous continusous statisctial analysis of price action, \n      Netbot watches every single trade for specific conditions. Should those conditions occur, a buy order is placed at a specific rate and left \n      for a period of time. If the order fills, a sell order is then placed at a specific rate, while the script watches for a potential stop-loss condition.",slideshow:["Netbot1.png","Netbot2.png"],live:null,hostIcon:"fab fa-github",repo:"https://github.com/brumack/netBot",tech:["Node.js","Express.js","Binance API","Slack API","Marionette"],main:!0}],C=t(93),N=t(95),B=function(e){return Object.keys(e).length>0?r.a.createElement(C.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(C.a.Header,{closeButton:!0},r.a.createElement(C.a.Title,{id:"contained-modal-title-vcenter",style:{fontFamily:"Righteous"}},e.project.name)),r.a.createElement(C.a.Body,null,r.a.createElement(N.a,null,e.project.slideshow.map(function(e){return r.a.createElement(N.a.Item,{key:e},r.a.createElement("img",{alt:e,className:"d-block w-100",src:"./images/"+e}))})),r.a.createElement("p",{style:{padding:"10px"}},e.project.description)),r.a.createElement(C.a.Footer,null,r.a.createElement("div",{style:{width:"66%"}},e.project.tech.map(function(a){return r.a.createElement("span",{key:e.project.name+e.project.tech},a," | ")})),r.a.createElement("div",{style:{width:"33%",textAlign:"right"}},r.a.createElement("a",{href:e.project.repo,target:"_blank"},r.a.createElement("i",{className:e.project.hostIcon})),function(e){if(e.live)return r.a.createElement("a",{href:e.live,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-desktop"}))}(e.project)))):null};t(86);var x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.modalClose=function(e){return t.setState(Object(j.a)({},e.name,!1))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.forEach(function(a){e.setState(Object(j.a)({},a.name,!1))})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(k.a,{fluid:!0,id:"projects",className:"justify-content-center"},r.a.createElement(b.a,{className:"justify-content-center"},I.map(function(a){return r.a.createElement(E.a,{className:"justify-content-center",key:a.name},r.a.createElement(S.a,{text:"white",style:{width:"22rem",marginBottom:"2rem",textAlign:"center"}},r.a.createElement(S.a.Img,{src:a.image,onClick:function(){return e.setState(Object(j.a)({},a.name,!0))}}),r.a.createElement(B,{show:e.state[a.name],onHide:function(){return e.modalClose(a)},project:a})))}))))}}]),a}(r.a.Component),A=t(98),M=t(92),P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{src:e.image}),r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.date,r.a.createElement("br",null),e.detail),r.a.createElement("p",null,e.description))},T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{src:e.image}),r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.date,r.a.createElement("br",null),e.detail.map(function(e){return"link"===e.type?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.content),r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null,e.content,r.a.createElement("br",null))})))};var D=[{name:"DoorDash",image:"./images/icons/doordash.png",date:"June 2019 - present",detail:"Drive Live Ops",description:"Monitoring DoorDash deliveries in real time to ensure the highest level of service. Built Chrome extension that greatly\n        augments internal tooling, providing more meaningful data to the Drive team, increasing job ease, accuracy and performance."},{name:"MBT One LLC, DBA Valid Strategy",image:"./images/icons/dollar.png",date:"June 2018 - October 2018",detail:"Contract Software Developer",description:"Sole developer of automated trading financial asset platform, using web scraping, textual analysis and multiple\n        exchange APIs. Built in NodeJS."},{name:"Weebly",image:"./images/icons/Weebly.png",date:"October 2015 - September 2017",detail:"Customer Success Advocate",description:"Customer Success Advocate responsible for supporting Weeblys DIY WYSIWYG website editor, as well as consulting on\n      web desgin best practices and how to best use the platform to meet business goals. Later placed on a pilot team\n      tasked with analyzing support ticket traffic and deriving new systems and strategies to optimize workflow."}],L=[{name:"Free Code Camp",image:"./images/icons/fcc.png",date:"2017-",detail:[{type:"text",content:"Certifications:"},{type:"link",url:"https://www.freecodecamp.org/certification/brumack/legacy-front-end",content:"Front-end Developer Certification"},{type:"link",url:"https://www.freecodecamp.org/certification/brumack/apis-and-microservices",content:" APIs and Microservices Certification"},{type:"link",url:"https://www.freecodecamp.org/certification/brumack/javascript-algorithms-and-data-structures",content:"JavaScript Algorithms and Data Structures Certification"}]},{name:"Udemy",image:"./images/icons/udemy.png",date:"2017 -",detail:[{type:"text",content:"Multiple Courses"}]},{name:"CSU Long Beach",image:"./images/icons/csulb.jpeg",date:"August 2010 - March 2013",detail:[{type:"text",content:"Finance Major"},{type:"text",content:"Deans List"}]}],R=function(e){return r.a.createElement(k.a,{id:"bio",fluid:"true",className:"bio"},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{md:10,xs:12},r.a.createElement(B,null),r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement("h1",null,"Bio"),r.a.createElement("hr",null),r.a.createElement(S.a.Text,null,"I'm a full-stack developer specializing in Javascript and Javascript frameworks. When I'm not writing code, I spend my time still probably writing code. I'm a technology enthusiest. I enjoy pretty much anything and everything tech. Two areas I'd love to explore in the near-future are machine learning/artificial intellegence and blockchain technology. Both of these are going to play a very large role in society as they continue to develop."))))),r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(E.a,{md:5,xs:12},r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Item,null,r.a.createElement("h4",null,"Experience"),r.a.createElement("hr",null),D.map(function(e){return r.a.createElement(P,{image:e.image,key:e.name,name:e.name,date:e.date,detail:e.detail,description:e.description})})))))),r.a.createElement(E.a,{md:5,xs:12},r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(A.a,null,r.a.createElement(A.a.Item,null,r.a.createElement("h4",null,"Education"),r.a.createElement("hr",null),L.map(function(e){return r.a.createElement(T,{image:e.image,key:e.name,name:e.name,date:e.date,detail:e.detail,description:e.description})}))))))),r.a.createElement(b.a,{className:"justify-content-center",id:"contact"},r.a.createElement(E.a,{md:8,xs:12},r.a.createElement(S.a,{className:"contact"},r.a.createElement(S.a.Body,null,r.a.createElement("h4",null,"Contact"),r.a.createElement("hr",null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"http://bradrumack.com/mailto:brad.rumack@gmail.com?Subject=Portfolio%20Contact"},"brad.rumack@gmail.com"),r.a.createElement("br",null),r.a.createElement("span",null,"480.599.5214"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.instagram.com/firecitydev/",id:"insta",className:"social",target:"_blank"},r.a.createElement("i",{className:"fab fa-lg fa-instagram"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/bradleyrumack/",id:"linked",className:"social",target:"_blank"},r.a.createElement("i",{className:"fab fa-lg fa-linkedin"}))))))))},O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={fadeIn:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({fadeIn:!0})},1e3)}},{key:"render",value:function(){return r.a.createElement(k.a,{fluid:"true",className:this.state.fadeIn?"fadeIn":"fadeOut"},r.a.createElement(h,null),r.a.createElement(k.a,{fluid:"true",className:"main"},r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(x,null),r.a.createElement(R,null)))}}]),a}(r.a.Component);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.c806cdfd.chunk.js.map