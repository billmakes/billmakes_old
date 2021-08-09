import{r as e,c as t,a as o,o as s,b as a,F as n,d as l,e as r,t as i,w as c,f as d,g as u,h as m,i as p,j as f,u as g,k as b,l as v,v as h,p as y,m as x,n as w,q as C,s as k,x as _,y as P}from"./vendor.e734a362.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[l]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const L=["gray","red","yellow","green","blue","indigo","purple","pink"],B=e({selectedColor:L[Math.floor(Math.random()*Math.floor(L.length))]});const S=o({getSelectedColor:t((()=>B.selectedColor)),changeColor:function(){let e=L.indexOf(B.selectedColor);B.selectedColor=L[e+1]}}),j={props:{tags:Array},setup:e=>({BtnColorProvider:S,tags:e.tags})},E={class:"flex"};let I;j.render=function(e,t,o,c,d,u){return s(),a("div",E,[(s(!0),a(n,null,l(c.tags,((e,t)=>(s(),a("div",{key:t,class:"mr-2 d-flex align-center",style:{cursor:"pointer"}},[r("span",{class:["font-bold items-center text-xs shadow rounded p-1",` bg-${c.BtnColorProvider.getSelectedColor}-300 hover:bg-${c.BtnColorProvider.getSelectedColor}-200 text-${c.BtnColorProvider.getSelectedColor}-700`],style:{padding:"0.3em"}},i(e),3)])))),128))])};const $={},D=function(e,t){if(!t)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in $)return;$[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":I,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function R(e){switch(e){case"../../blog/another-post.md":return D((()=>__import__("./another-post.c16ca125.js")),void 0);case"../../blog/cool-post.md":return D((()=>__import__("./cool-post.69009a0f.js")),void 0);case"../../blog/new-post.md":return D((()=>__import__("./new-post.c81cf079.js")),void 0);case"../../blog/unique-post.md":return D((()=>__import__("./unique-post.c54eb27b.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}const T={"../../blog/another-post.md":()=>D((()=>__import__("./another-post.c16ca125.js")),void 0),"../../blog/cool-post.md":()=>D((()=>__import__("./cool-post.69009a0f.js")),void 0),"../../blog/new-post.md":()=>D((()=>__import__("./new-post.c81cf079.js")),void 0),"../../blog/unique-post.md":()=>D((()=>__import__("./unique-post.c54eb27b.js")),void 0)};for(const ht in T){R("../../blog/"+ht.replace(/^.*[\\\/]/,"").split(".").slice(0,-1).join(".")+".md").then((async e=>{q.posts.push({meta:e.attributes,post:e.html})}))}const q=e({posts:[],filteredPosts:[]}),O=o({getPosts:t((()=>q.posts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),getFilteredPosts:t((()=>q.filteredPosts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),filterPosts:function(e){e.length?q.filteredPosts=q.posts.filter((t=>{const o=new RegExp(e,"gi");return t.meta.title.match(o)||t.meta.description.match(o)})):q.filteredPosts=[]}}),A={props:{recent:Boolean,term:String},setup:e=>(c((()=>e.term),(e=>{O.filterPosts(e)})),{posts:t((()=>e.recent?O.getPosts.slice(0,3):O.getFilteredPosts.length&&e.term.length?O.getFilteredPosts:O.getPosts)),TagList:j,BlogProvider:O,BtnColorProvider:S,recent:e.recent})},M={key:0},F={class:"italic text-gray-500 text-sm"},V={key:0,class:"mt-2 underline"},H=p("Click here to see more posts");A.render=function(e,t,o,c,p,f){const g=d("router-link");return s(),a(n,null,[r("div",null,[c.posts.length?(s(),a("ul",M,[(s(!0),a(n,null,l(c.posts,(e=>(s(),a("li",{key:e.meta.id,class:"flex sm:flex-row flex-col sm:border-none border rounded sm:p-0 p-3 justify-between mb-2"},[r("div",null,[r(g,{to:{name:"blog-post",params:{id:e.meta.id}}},{default:u((()=>[r("span",{class:["underline",o.term&&o.term.length?`bg-${c.BtnColorProvider.getSelectedColor}-200`:""]},i(e.meta.title),3),r("span",F,i(` - ${e.meta.date}`),1)])),_:2},1032,["to"])]),r("div",null,[r(c.TagList,{tags:e.meta.tags},null,8,["tags"])])])))),128))])):m("",!0)]),c.recent?(s(),a("div",V,[r("span",null,[r(g,{to:{name:"blog"}},{default:u((()=>[H])),_:1})])])):m("",!0)],64)};const U={props:{navItem:{type:Object,required:!0},color:{type:String,default:"yellow"}},setup:e=>({navItem:e.navItem,BtnColorProvider:S})};U.render=function(e,t,o,n,l,i){const c=d("router-link");return s(),a("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${n.BtnColorProvider.getSelectedColor}-500 hover:bg-${n.BtnColorProvider.getSelectedColor}-400`]},[r(c,{to:{name:n.navItem.name}},{default:u((()=>[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${n.BtnColorProvider.getSelectedColor}-300 hover:bg-${n.BtnColorProvider.getSelectedColor}-200`]},[r("span",{class:`text-${n.BtnColorProvider.getSelectedColor}-700`},[f(e.$slots,"default")],2)],2)])),_:3},8,["to"])],2)};const N=[{label:"About",name:"about"},{label:"Contact",name:"contact"},{label:"Blog",name:"blog"},{label:"CV",name:"cv"}],W={setup:()=>({navRoutes:N,NavButton:U})},z={class:"flex flex-col sm:flex-row justify-center sm:justify-between items-center p-6"},J={class:"mb-2 sm:mb-0"},Q=p("billmakes");W.render=function(e,t,o,c,d,m){return s(),a("header",null,[r("nav",z,[r("div",J,[r(c.NavButton,{"nav-item":{label:"billmakes",name:"home"},color:"gray",class:"ml-2 sm:text-5xl text-4xl"},{default:u((()=>[Q])),_:1})]),r("div",null,[(s(!0),a(n,null,l(c.navRoutes,(e=>(s(),a(c.NavButton,{"nav-item":e,key:e.name,color:"gray",class:"ml-2 sm:text-lg text-sm"},{default:u((()=>[p(i(e.label),1)])),_:2},1032,["nav-item"])))),128))])])])};const X={setup:()=>({route:g(),PostList:A,NavHeader:W})},G={class:"flex flex-col h-screen relative"},K={class:"py-5"},Y={key:0,class:"container items-center mx-auto p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"},Z=r("div",null,[r("span",{class:"italic text-gray-500"},"Under Construction - Coming Soon 🚧")],-1),ee=r("span",{class:"font-bold"},"Latest blog posts 📚",-1),te=r("div",{class:"fixed bottom-0 right-0"},[r("span",{class:"italic text-gray-200"},"Under Construction")],-1);X.render=function(e,t,o,n,l,i){const c=d("router-view");return s(),a("div",G,[r(n.NavHeader),r("div",K,[r(c)]),"blog"!=n.route.name&&"cv"!=n.route.name&&"blog-post"!=n.route.name?(s(),a("div",Y,[Z,ee,r(n.PostList,{recent:""})])):m("",!0),te])};var oe=[{name:"RE/MAX Tech",title:"R&D Developer",location:"HQ Denver, Remote",start:"Mar. 2021",end:"Present",description:["Responsible for a variety of front end features for our admin panel, user CMS, and mailing campaigns services.","Brought value to the teams I work with by making feature and app wide improvements to app performance and tidying up technical debt.","Introduced standards and best practices to be used by my team and others across multiple applications."]},{name:"DXC Technology",title:"Professional Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Mar. 2021",description:["Served as a team leader for the front end team, implementing new processes and methods for quality review and peer programming cooperation.","Lead architectural initiatives for large client features and technical work such as migrating an entire enterprise application to newer frameworks.","Developed a native mobile application for our product.","Worked closely with product and QA teams to ensure delivery of quality products, with much satisfaction to our client."]},{name:"Haneke Design",title:"Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Jun. 2019",description:["Worked with Haneke Design as a contractor to help with a variety of client needs, notably DXC Technology, formerly Tribridge.","Worked with front and backend technologies.","Commended and praised by clients and Haneke Design leadership for my quality of work."]},{name:"atLarge, Inc.",title:"Engineer",location:"Sarasota, FL",start:"Mar. 2018",end:"Dec. 2018",description:["Front and backend web and application development.","Worked directly with clients on nailing down specific requirements and acceptance criteria for our services.","Organized and created a developer QA department in a small agency to accommodate large enterprise client demands for quality and attention to detail.","Creating detailed, comprehensive and well-structured test plans and test cases. Estimating, prioritizing, planning and coordinating quality testing activities."]},{name:"billmakes",title:"Owner",location:"Remote",start:"Jun. 2015",end:"Present",description:["Providing technical services to a variety of clients, local and remote.","Primarily working with fullstack web development technologies.","Delivering client satisfactory work on time.","Creating detailed, comprehensive discovery of client needs.","Estimating, prioritizing, planning and coordinating work and strategy. "]}];const se={props:{color:{type:String,default:""}},setup:e=>({navItem:e.navItem,color:t((()=>e.color))})};se.render=function(e,t,o,n,l,i){return s(),a("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${n.color}-500 hover:bg-${n.color}-400`]},[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${n.color}-300 hover:bg-${n.color}-200`]},[r("span",{class:`text-${n.color}-700`},[f(e.$slots,"default")],2)],2)],2)};const ae={},ne={class:"container items-center p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md border-none sm:border"};ae.render=function(e,t){return s(),a("div",ne,[f(e.$slots,"default")])};const le={setup:()=>({Button:se,BtnColorProvider:S,CardLayout:ae,cv:oe})},re=r("div",{class:"flex text-3xl font-bold"},[p(" Hi! I'm Bill Hilbert. "),r("div",{class:"transition duration-200 ease-in-out transform hover:rotate-45"}," 👋 ")],-1),ie={class:"text-xl font-bold mb-2"},ce=r("p",{class:"mb-2"}," This is my developer page. Every developer needs a web page, right? Well this is it. ",-1),de=r("p",{class:"mb-2"}," Passionate about quality code, efficiency, fan of minimal design. My goal is to create great user experiences using the latest tools in web technology, and to contribute something great to the open web. ",-1),ue=r("p",{class:"mb-2"},[p(" If you have any questions, I would be happy to help. Feel free to shoot me an email "),r("a",{class:"underline",href:"mailto:billmakes@protonmail.com"},"here"),p(". ")],-1),me=p("Change Color"),pe={class:"ml-3"},fe=r("span",{class:"font-bold"},"Color: ",-1);le.render=function(e,t,o,l,c,d){return s(),a(n,null,[r(l.CardLayout,{class:"mx-auto"},{default:u((()=>[re,r("p",ie," I'm a "+i(l.cv[0].title)+" at "+i(l.cv[0].name)+". ",1),ce,de,ue])),_:1}),r(l.CardLayout,{class:"mx-auto mt-4"},{default:u((()=>[r(l.Button,{onClick:l.BtnColorProvider.changeColor,color:l.BtnColorProvider.getSelectedColor},{default:u((()=>[me])),_:1},8,["onClick","color"]),r("span",pe,[fe,p(i(l.BtnColorProvider.getSelectedColor?l.BtnColorProvider.getSelectedColor:"none"),1)])])),_:1})],64)};const ge={setup:()=>({CardLayout:ae,BtnColorProvider:S,cv:oe})},be={class:"flex flex-col sm:flex-row align-center justify-center items-center"},ve=r("img",{src:"/assets/me_portrait.70eaf7ae.jpg",class:"rounded-full"},null,-1),he={class:"container mx-auto p-5"},ye=r("span",{class:"text-3xl font-bold text-center"},"About me 🌴",-1),xe={class:"text-xl font-bold mb-2"},we={class:"mb-2"},Ce=p(" Currently residing in sunny St. Petersburg, FL. For those who are interested, you may view my "),ke=p("résumé"),_e=p(". "),Pe={class:"mb-2"},Le=p(" Also don't hesitate to "),Be=p("reach out"),Se=p(", I would love to help with any questions or look at any requests you may have. ");ge.render=function(e,t,o,n,l,c){const m=d("router-link");return s(),a(n.CardLayout,{class:"mx-auto"},{default:u((()=>[r("div",be,[r("div",{class:["rounded-full flex items-center justify-center pr-1 pb-1 w-56 sm:w-64",`bg-${n.BtnColorProvider.getSelectedColor}-500`]},[ve],2),r("div",he,[ye,r("p",xe," I'm a "+i(n.cv[0].title)+" at "+i(n.cv[0].name)+". ",1),r("p",we,[Ce,r(m,{to:{name:"cv"},class:"underline"},{default:u((()=>[ke])),_:1}),_e]),r("p",Pe,[Le,r(m,{to:{name:"contact"},class:"underline"},{default:u((()=>[Be])),_:1}),Se])])])])),_:1})};const je={setup(){let e=b("");return{CardLayout:ae,PostList:A,term:e}}},Ee={class:"relative container items-center max-w-xl bg-gray-100 rounded mx-auto mb-2"},Ie=r("span",{class:"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"}," 🔎 ",-1),$e=r("span",{class:"text-3xl font-bold"},"Coming soon 🚧",-1);je.render=function(e,t,o,l,i,c){return s(),a(n,null,[r("div",Ee,[v(r("input",{type:"text",placeholder:"Search","onUpdate:modelValue":t[1]||(t[1]=e=>l.term=e),class:"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"},null,512),[[h,l.term]]),Ie]),r(l.CardLayout,{class:"mx-auto"},{default:u((()=>[$e,r(l.PostList,{term:l.term},null,8,["term"])])),_:1})],64)};const De={setup(){const e=g(),o=w();return{Button:se,CardLayout:ae,TagList:j,color:S.getSelectedColor,post:t((()=>O.getPosts.find((t=>t.meta.id===e.params.id)))),router:o}}},Re=C("data-v-2f7fa416");y("data-v-2f7fa416");const Te={key:0,class:"flex flex-col"},qe={class:"flex flex-col text-center"},Oe={class:"font-bold text-4xl"},Ae={class:"font-bold text-lg"},Me={id:"BlogPost"},Fe={key:0},Ve={class:"fixed bottom-0 right-0 mb-4 mr-4 opacity-80 sm:opacity-100 text-sm"},He=p("Back to blog");x();const Ue=Re(((e,t,o,n,l,c)=>n.post?(s(),a("div",Te,[r(n.CardLayout,{class:"mx-auto mb-2"},{default:Re((()=>[r("div",qe,[r("span",Oe,i(n.post.meta.title),1),r("span",null,i(n.post.meta.description),1),r("span",Ae,i(n.post.meta.date),1),r(n.TagList,{tags:n.post.meta.tags},null,8,["tags"])])])),_:1}),r(n.CardLayout,{class:"mx-auto"},{default:Re((()=>[r("div",Me,[n.post?(s(),a("div",Fe,[r("div",{innerHTML:n.post.post},null,8,["innerHTML"])])):m("",!0)])])),_:1}),r("div",Ve,[r(n.Button,{color:n.color,onClick:t[1]||(t[1]=e=>n.router.push({name:"blog"}))},{default:Re((()=>[He])),_:1},8,["color"])])])):m("",!0)));De.render=Ue,De.__scopeId="data-v-2f7fa416";const Ne={setup:()=>({socialLinks:[{label:"email",url:"mailto:billmakes@protonmail.com",icon:"gmail.svg"},{label:"github",url:"https://github.com/billmakes",icon:"github.svg"},{label:"linkedin",url:"https://www.linkedin.com/in/bill-hilbert-414bb5123/",icon:"linkedin.svg"}]})},We={class:"flex"};Ne.render=function(e,t,o,i,c,d){return s(),a("div",We,[(s(!0),a(n,null,l(i.socialLinks,(e=>(s(),a("div",{key:e.label,class:"w-8 h-8 mr-2 mb-2 cursor-pointer hover:shadow-lg bg-gray"},[r("a",{href:e.url},[r("img",{src:`../../../assets/${e.icon}`},null,8,["src"])],8,["href"])])))),128))])};const ze={setup:()=>({CardLayout:ae,SocialButtons:Ne})},Je=r("div",{class:"mb-8"},[r("span",{class:"text-3xl font-bold"},"Let's talk ☎️"),r("p",{class:"text-xl font-bold mb-2"}," Reach out to me on any of the platforms below - "),r("p",null,"I will get back to you as soon as I can!")],-1);ze.render=function(e,t,o,n,l,i){return s(),a(n.CardLayout,{class:"mx-auto"},{default:u((()=>[Je,r(n.SocialButtons,{class:"flex justify-center"})])),_:1})};const Qe={props:{source:Object},setup:e=>({CardLayout:ae,source:e.source})},Xe={class:"mt-2 flex sm:flex-row flex-col justify-center content-center mx-auto"},Ge={class:"flex flex-col mx-auto my-auto pr-3 text-center"},Ke={class:"italic text-gray-600 font-bold"},Ye={class:"italic text-gray-500"},Ze={class:"italic text-gray-500"},et={class:"italic text-gray-500"},tt={class:"list-disc"};Qe.render=function(e,t,o,c,d,m){return s(),a("div",Xe,[r("div",Ge,[r("span",Ke,i(c.source.name),1),r("span",Ye,i(c.source.location),1),r("span",Ze,i(c.source.title),1),r("span",et,i(c.source.start)+" - "+i(c.source.end),1)]),r(c.CardLayout,{class:"mx-1"},{default:u((()=>[r("ul",tt,[(s(!0),a(n,null,l(c.source.description,((e,t)=>(s(),a("li",{key:t,class:"ml-4 mb-2 text-sm"},i(e),1)))),128))])])),_:1})])};const ot={setup:()=>({CardLayout:ae,SocialButtons:Ne,CVItem:Qe,cv:oe,skills:["JavaScript","Vue.js","React.js","Angular","TypeScript","Node.js","Express","Nuxt.js","Next.js","Webpack","Parcel","Git","Linux","bash"]})},st={class:"mx-auto text-gray-600 mb-2"},at={class:"flex flex-col text-center"},nt=r("span",{class:"text-3xl font-bold"},"Bill Hilbert",-1),lt={class:"text-1xl font-bold text-gray-500"},rt={class:"flex justify-center flex-start flex-col sm:flex-row mx-5"},it={class:"ml-2 mt-2"},ct={class:"sm:border-none border"},dt=r("div",null,[r("span",{class:"text-lg font-bold"},"Skills")],-1),ut={class:"list-disc list-inside grid sm:grid-cols-3 grid-cols-2"},mt=r("div",null,[r("span",null,"This list is a short summary of my favorite technology used. There are countless skills and technology used when developing! Reach out if you wish to know more.")],-1),pt={class:"sm:border-none border mt-2"},ft={class:"flex justify-between flex-col sm:flex-row"},gt=r("div",{class:"ml-2 flex flex-col"},[r("div",null,[r("span",{class:"text-lg font-bold"},"Contact Info")]),r("span",null,[p("Email: "),r("a",{href:"mailto:billmakes@protonmail.com",class:"underline"},"billmakes@protonmail.com")]),r("span",null,"Location: St. Petersburg, FL")],-1);ot.render=function(e,t,o,c,d,m){return s(),a(n,null,[r("div",st,[r("div",at,[nt,r("span",lt,i(c.cv[0].title),1)])]),r("div",rt,[r("div",null,[(s(!0),a(n,null,l(c.cv,((e,t)=>(s(),a(c.CVItem,{key:t,source:e},null,8,["source"])))),128))]),r("div",it,[r("div",ct,[r(c.CardLayout,null,{default:u((()=>[dt,r("ul",ut,[(s(!0),a(n,null,l(c.skills,((e,t)=>(s(),a("li",{key:t},i(e),1)))),128))])])),_:1}),r(c.CardLayout,{class:"mt-2"},{default:u((()=>[mt])),_:1})]),r("div",pt,[r(c.CardLayout,{class:"mt-2"},{default:u((()=>[r("div",ft,[gt,r(c.SocialButtons,{class:"mt-4 self-center"})])])),_:1})])])])],64)};const bt=[{path:"/",name:"home",component:le},{path:"/about",name:"about",component:ge},{path:"/blog",name:"blog",component:je},{path:"/blog/:id",name:"blog-post",component:De},{path:"/contact",name:"contact",component:ze},{path:"/cv",name:"cv",component:ot}],vt=k({history:_(),routes:bt});P(X).use(vt).mount("#app");
