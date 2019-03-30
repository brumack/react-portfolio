(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(87)},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(20),l=a(21),s=a(25),m=a(22),u=a(26),d=a(94),p=a(96),h=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href"),a=document.querySelector(t);window.scrollTo({top:a.offsetTop-a.scrollTop+a.clientTop,behavior:"smooth"})},f=function(){return r.a.createElement(d.a,{expand:"lg",className:"fixed-top"},r.a.createElement(d.a.Brand,{href:"#home",onClick:h},r.a.createElement("strong",null,"BR")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"#projects",onClick:h},"Projects"),r.a.createElement(p.a.Link,{href:"#bio",onClick:h},"Bio"),r.a.createElement(p.a.Link,{target:"_blank",href:"./Rumack-Resume-2019.pdf"},"Resume"),r.a.createElement(p.a.Link,{target:"_blank",href:"https://github.com/brumack"},"Github"),r.a.createElement(p.a.Link,{target:"_blank",href:"https://www.linkedin.com/in/bradleyrumack/"},"LinkedIn"),r.a.createElement(p.a.Link,{href:"#contact",onClick:h},"Contact"))))},g=a(88),b=a(89),y=a(90),E=function(){return r.a.createElement(g.a,{id:"home"},r.a.createElement(b.a,{className:"justify-content-center align-items-center headline"},r.a.createElement(y.a,{lg:"12"},r.a.createElement("h1",null,"Bradley Rumack"),r.a.createElement("p",null,"Full-Stack Developer, Los Angeles CA"))))},k=a(91),w=["fab fa-html5","fab fa-css3-alt","fab fa-js","fab fa-react","fab fa-node","fab fa-npm","fab fa-python","fas fa-database","fab fa-git","fab fa-wordpress"],v=function(){return r.a.createElement(k.a,{className:"stack"},r.a.createElement(b.a,null,w.map(function(e){return r.a.createElement(y.a,{key:e},r.a.createElement("i",{className:e}))})))},j=a(27),S=a(97),C=[{name:"Wavez",type:"full",image:"./images/Wavez.png",slideshow:["Wavez1.png","Wavez2.png","Wavez3.png","Wavez4.png","Wavez5.png"],description:"Wavez is a RESTful CRUD application revolving around crowd-sourced beach info, particularly surfing conditions. Users can create accounts in order to add new beaches or leave comments on beaches currently on record. I would like to eventually create user profiles and push it towards a social media platform demo. A demo account can be accessed through admin1:admin1.",live:"https://wavezapp.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/wavez",tech:["Node.js","Express.js","MongoDB","Bootstrap","HTML","CSS","Weather.gov API"],main:!0},{name:"Real Estate Agent Site",type:"front",image:"./images/Realty.png",description:"This is an example multi-page website built for a real estate agent. I have incoprorated a few 3rd party tools, such as a search portal and a social media feed.",slideshow:["RE1.png","RE2.png","RE3.png","RE4.png","RE5.png","RE6.png"],live:"https://rumackrealestate.herokuapp.com/",hostIcon:"fab fa-github",repo:null,tech:["Javascript","jQuery","Materialize CSS","HTML","CSS"],main:!0},{name:"Payment Gateway Demo",type:"full",image:"./images/USA2.png",description:"Sample checkout process using USAePay's sandbox API. For test cards ' +\n    'in various decline and fraud states visit https://help.usaepay.info/developer/reference/testcards/",slideshow:["USA1.png","USA2.png","USA3.png","USA4.png"],live:"https://frozen-brushlands-21326.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/USAePayDemo",tech:["React","React.js","Express.js","USAePay API","Semantic UI","HTML","CSS"],main:!0},{name:"Portfolio",type:"front",image:"./images/Portfolio.png",description:"You're looking at it!",slideshow:["Portfolio1.png"],live:"https://www.bradrumack.com",hostIcon:"fab fa-github",repo:"https://github.com/brumack/portfolio",tech:["Javacript","Bootstrap","HTML","CSS"],main:!1},{name:"Tetra",type:"full",image:"./images/Tetra.png",description:"Tetra is a cryptocurrency portfolio manager. Users create their own accounts, and then add their own assets, or assets they would like to track to their dashboard. Balances for each asset can be added, and then used to calculate a total portfolio balance. A demo account can be accessed under 'demo@demo.com:demodemo.",slideshow:["Tetra1.png","Tetra2.png","Tetra3.png","Tetra4.png"],live:"https://tetra-crypto.herokuapp.com/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/tetra",tech:["React.js","Node.js","Express.js","MongoDB","Cryptocompare API","HTML","CSS","Javascript"],main:!0},{name:"NetBot",type:"back",image:"./images/bitcoin.png",description:"Netbot is an automated cryptocurrency trading script. Through continuous continusous statisctial analysis of price action, Netbot watches every single trade for specific conditions. Should those conditions occur, a buy order is placed at a specific rate and left for a period of time. If the order fills, a sell order is then placed at a specific rate, while the script watches for a potential stop-loss condition.",slideshow:["Netbot1.png","Netbot2.png"],live:null,hostIcon:"fab fa-github",repo:"https://github.com/brumack/netBot",tech:["Node.js","Express.js","Binance API","Slack API","Marionette"],main:!0},{name:"Simon",type:"front",image:"./images/Simon.png",description:"A recreation of the game Simon from the 90's. Correct memory of a series of 14 buttons results in a win. Strict mode will reset the game upon any incorrect entry.",slideshow:["Simon1.png"],live:"https://brumack.github.io/Simon/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/Simon",tech:["Javascript","jQuery","HTML","CSS"],main:!1},{name:"Pomodoro Clock",type:"front",image:"./images/Pomodoro.png",description:"A simple task timer. One value sets the task time, and the other the break time. Task time and break time will alternate until both are exhausted.",slideshow:["Pomodoro1.png"],live:"https://brumack.github.io/Pomodoro-Clock/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/Pomodoro-Clock",tech:["Javascript","jQuery","HTML","CSS"],main:!1},{name:"WikiSearch",type:"front",image:"./images/Wiki.png",description:"A simple wikipedia search app. Results are generated from an entered keyword(s) and populated on the screen. Clicking a result will direct the user to the appropriate Wikipedia article.",slideshow:["Wikisearch1.png"],live:"https://brumack.github.io/WikiSearch/",hostIcon:"fab fa-github",repo:"https://github.com/brumack/WikiSearch",tech:["Javascript","Wikipedia API","jQuery","HTML","CSS"],main:!1}],I=a(93),A=a(95),x=function(e){return Object.keys(e).length>0?r.a.createElement(I.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,{id:"contained-modal-title-vcenter",style:{fontFamily:"Righteous"}},e.project.name)),r.a.createElement(I.a.Body,null,r.a.createElement(A.a,null,e.project.slideshow.map(function(e){return r.a.createElement(A.a.Item,{key:e},r.a.createElement("img",{alt:e,className:"d-block w-100",src:"./images/"+e}))})),r.a.createElement("p",{style:{padding:"10px"}},e.project.description)),r.a.createElement(I.a.Footer,null,r.a.createElement("div",{style:{width:"66%"}},e.project.tech.map(function(t){return r.a.createElement("span",{key:e.project.name+e.project.tech},t," | ")})),r.a.createElement("div",{style:{width:"33%",textAlign:"right"}},r.a.createElement("a",{href:e.project.repo,target:"_blank"},r.a.createElement("i",{className:e.project.hostIcon})),function(e){if(e.live)return r.a.createElement("a",{href:e.live,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-desktop"}))}(e.project)))):null};var T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={projects:[]},a.getProjects=function(){return C.filter(function(e){return"front"===e.type})},a.moveLeft=function(){var e=a.state.projects;e.push(e.shift()),a.setState({projects:e})},a.moveRight=function(){var e=a.state.projects;e.unshift(e.pop()),a.setState({projects:e})},a.renderProjects=function(){return a.state.projects.map(function(e,t){return r.a.createElement(y.a,null,r.a.createElement(S.a,{text:"white",style:{width:"22rem",marginBottom:"1.5rem",textAlign:"center"}},r.a.createElement(S.a.Img,{src:e.image,onClick:function(){return a.setState(Object(j.a)({},e.name,!0))},className:1===t?"middle":""})))}).slice(0,3)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({projects:this.getProjects()})}},{key:"render",value:function(){return r.a.createElement(b.a,{style:{flexWrap:"nowrap"}},r.a.createElement(y.a,{lg:1},r.a.createElement("i",{class:"fa fa-caret-left",onClick:this.moveLeft,style:{width:"100%",textAlign:"center"}})),this.renderProjects(),r.a.createElement(y.a,{lg:1},r.a.createElement("i",{class:"fa fa-caret-right",onClick:this.moveRight,style:{width:"100%",textAlign:"center"}})))}}]),t}(r.a.Component),O=(a(86),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.modalClose=function(e){return a.setState(Object(j.a)({},e.name,!1))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.forEach(function(t){e.setState(Object(j.a)({},t.name,!1))})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(k.a,{fluid:!0,id:"projects",className:"justify-content-center"},r.a.createElement(T,null),r.a.createElement(b.a,{className:"justify-content-center"},C.map(function(t){return r.a.createElement(y.a,{className:"justify-content-center",key:t.name},r.a.createElement(S.a,{text:"white",style:{width:"22rem",marginBottom:"1.5rem",textAlign:"center"}},r.a.createElement(S.a.Img,{src:t.image,onClick:function(){return e.setState(Object(j.a)({},t.name,!0))}}),r.a.createElement(x,{show:e.state[t.name],onHide:function(){return e.modalClose(t)},project:t})))}))))}}]),t}(r.a.Component)),B=a(98),W=a(92),P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{src:e.image}),r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.date,r.a.createElement("br",null),e.detail),r.a.createElement("p",null,e.description))},L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{src:e.image}),r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.date,r.a.createElement("br",null),e.detail),r.a.createElement("p",null,e.description))},N=[{name:"MBT One LLC, DBA Valid Strategy",image:"./images/icons/dollar.png",date:"June 2018 - October 2018",detail:"Software Developer",description:"Valid Strategy was a local fintech startup. With MBT One, I was the sole developer on a project with the goal of automatically trading financial assets via online exchanges. Strategic news sources were scraped and text analyzed against derived key words and phrases to make trading decisions. When optimal conditions were met, trades were automatically executed on relevant exchanges and notifications sent via SMS."},{name:"Weebly",image:"./images/icons/Weebly.png",date:"October 2015 - September 2017",detail:"Customer Success Advocate",description:"Weebly is a build-your-own-website SaaS company. While with Weebly, I began as a Customer Success Advocate on the Chat Team. Over time, I grew myroll as a mentor to new employees, and was eventually placed on a newly formed team as a founding member, tasked with analyzing support ticket traffic and deriving new systems and strategies to optimize ticket response quality and time."}],M=[{name:"Free Code Camp",image:"./images/icons/fcc.png",date:"2017",detail:"Front-end Developer Certification",description:"The FCC curriculum consisted of extensive education in HTML, CSS, Bootstrap 3, Javascript, jQuery, and scripting algorithm' +\n    ' challenges. The program also involved completing several projects, some of which you'll find available in this portfolio. analyzed against derived key words and phrases to make trading decisions. When optimal conditions were met, trades were automatically executed on relevant exchanges and notifications sent via SMS."},{name:"Udemy",image:"./images/icons/udemy.png",date:"2017 -",detail:"Multiple Courses",description:"Weebly is a build-your-own-website SaaS company. While with Weebly, I began as a Customer Success Advocate on the Chat Team. Over time, I grew my roll as a mentor to new employees, and was eventually placed on a newly formed team as a founding member, tasked with analyzing support ticket traffic and deriving new systems and strategies to optimize ticket response quality and time."},{name:"CSU Long Beach",image:"./images/icons/csulb.jpeg",date:"August 2010 - March 2013",detail:"Finance Major, Deans List",description:"My initial move to California was to attend classes at CSULB, where I studied finance. My experience was excellent. An unfortunate health condition sprung itself, so I was forced to withdraw in the Spring of 2013, and when finances ran dry, I had to  return to Arizona. I had the goal of returning to California ever since, and I finally made it."}],R=function(e){return r.a.createElement(k.a,{id:"bio",fluid:"true",className:"bio"},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(y.a,{md:10,xs:12},r.a.createElement(x,null),r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement("h1",null,"Bio"),r.a.createElement("hr",null),r.a.createElement(S.a.Text,null,"I'm a ",r.a.createElement("em",null,"self-taught")," full-stack web developer, specializing in Javascript and Javascript frameworks. Originally from Phoenix, AZ, I've called California home for a total of 4 years; Long Beach for 2 and a half years beginning in 2010, and now Pasadena as of October of 2017. While I enjoy all aspects of development, I most enjoy working with logic and data, and creating and consuming APIs."))))),r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(y.a,{md:5,xs:12},r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(B.a,null,r.a.createElement(B.a.Item,null,r.a.createElement("h4",null,"Experience"),r.a.createElement("hr",null),N.map(function(e){return r.a.createElement(P,{image:e.image,key:e.name,name:e.name,date:e.date,detail:e.detail,description:e.description})})))))),r.a.createElement(y.a,{md:5,xs:12},r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(B.a,null,r.a.createElement(B.a.Item,null,r.a.createElement("h4",null,"Education"),r.a.createElement("hr",null),M.map(function(e){return r.a.createElement(L,{image:e.image,key:e.name,name:e.name,date:e.date,detail:e.detail,description:e.description})}))))))),r.a.createElement(b.a,{className:"justify-content-center",id:"contact"},r.a.createElement(y.a,{md:8,xs:12},r.a.createElement(S.a,{className:"contact"},r.a.createElement(S.a.Body,null,r.a.createElement("h4",null,"Contact"),r.a.createElement("hr",null),r.a.createElement(S.a.Text,null,r.a.createElement("a",{href:"http://bradrumack.com/mailto:brad.rumack@gmail.com?Subject=Portfolio%20Contact"},"brad.rumack@gmail.com"),r.a.createElement("br",null),r.a.createElement("span",null,"480.599.5214"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/bradleyrumack/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))))))},z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{fluid:"true"},r.a.createElement(f,null),r.a.createElement(k.a,{fluid:"true",className:"main"},r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(R,null)))}}]),t}(r.a.Component);i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.72a765fb.chunk.js.map