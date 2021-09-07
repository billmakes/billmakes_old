import{r as e,c as t,a as o,o as s,b as a,F as n,d as l,e as r,t as i,w as c,f as d,g as u,h as m,i as p,j as f,u as g,p as b,k as v,l as h,m as y,n as x,q as w,s as C}from"./vendor.63df2b8c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),a(i)},onload(){o(self[t].moduleMap[l]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const k=["gray","red","yellow","green","blue","indigo","purple","pink"],_=e({selectedColor:k[Math.floor(Math.random()*Math.floor(k.length))]});const P=o({getSelectedColor:t((()=>_.selectedColor)),changeColor:function(){let e=k.indexOf(_.selectedColor);_.selectedColor=k[e+1]}}),L={props:{tags:Array},setup:e=>({BtnColorProvider:P,tags:e.tags})},B={class:"flex"};let j;L.render=function(e,t,o,c,d,u){return s(),a("div",B,[(s(!0),a(n,null,l(c.tags,((e,t)=>(s(),a("div",{key:t,class:"mr-2 d-flex align-center",style:{cursor:"pointer"}},[r("span",{class:["font-bold items-center text-xs shadow rounded p-1",` bg-${c.BtnColorProvider.getSelectedColor}-300 hover:bg-${c.BtnColorProvider.getSelectedColor}-200 text-${c.BtnColorProvider.getSelectedColor}-700`],style:{padding:"0.3em"}},i(e),3)])))),128))])};const E={},S=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":j,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function I(e){switch(e){case"../../blog/another-post.md":return S((()=>__import__("./another-post.c16ca125.js")),void 0);case"../../blog/cool-post.md":return S((()=>__import__("./cool-post.69009a0f.js")),void 0);case"../../blog/new-post.md":return S((()=>__import__("./new-post.c81cf079.js")),void 0);case"../../blog/unique-post.md":return S((()=>__import__("./unique-post.c54eb27b.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}const $={"../../blog/another-post.md":()=>S((()=>__import__("./another-post.c16ca125.js")),void 0),"../../blog/cool-post.md":()=>S((()=>__import__("./cool-post.69009a0f.js")),void 0),"../../blog/new-post.md":()=>S((()=>__import__("./new-post.c81cf079.js")),void 0),"../../blog/unique-post.md":()=>S((()=>__import__("./unique-post.c54eb27b.js")),void 0)};for(const rt in $){I("../../blog/"+rt.replace(/^.*[\\\/]/,"").split(".").slice(0,-1).join(".")+".md").then((async e=>{D.posts.push({meta:e.attributes,post:e.html})}))}const D=e({posts:[],filteredPosts:[]}),R=o({getPosts:t((()=>D.posts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),getFilteredPosts:t((()=>D.filteredPosts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),filterPosts:function(e){e.length?D.filteredPosts=D.posts.filter((t=>{const o=new RegExp(e,"gi");return t.meta.title.match(o)||t.meta.description.match(o)})):D.filteredPosts=[]}}),T={props:{recent:Boolean,term:String},setup:e=>(c((()=>e.term),(e=>{R.filterPosts(e)})),{posts:t((()=>e.recent?R.getPosts.slice(0,3):R.getFilteredPosts.length&&e.term.length?R.getFilteredPosts:R.getPosts)),TagList:L,BlogProvider:R,BtnColorProvider:P,recent:e.recent})},q={key:0},O={class:"italic text-gray-500 text-sm"},A={key:0,class:"mt-2 underline"},M=p("Click here to see more posts");T.render=function(e,t,o,c,p,f){const g=d("router-link");return s(),a(n,null,[r("div",null,[c.posts.length?(s(),a("ul",q,[(s(!0),a(n,null,l(c.posts,(e=>(s(),a("li",{key:e.meta.id,class:"flex sm:flex-row flex-col sm:border-none border rounded sm:p-0 p-3 justify-between mb-2"},[r("div",null,[r(g,{to:{name:"blog-post",params:{id:e.meta.id}}},{default:u((()=>[r("span",{class:["underline",o.term&&o.term.length?`bg-${c.BtnColorProvider.getSelectedColor}-200`:""]},i(e.meta.title),3),r("span",O,i(` - ${e.meta.date}`),1)])),_:2},1032,["to"])]),r("div",null,[r(c.TagList,{tags:e.meta.tags},null,8,["tags"])])])))),128))])):m("",!0)]),c.recent?(s(),a("div",A,[r("span",null,[r(g,{to:{name:"blog"}},{default:u((()=>[M])),_:1})])])):m("",!0)],64)};const F={props:{navItem:{type:Object,required:!0},color:{type:String,default:"yellow"}},setup:e=>({navItem:e.navItem,BtnColorProvider:P})};F.render=function(e,t,o,n,l,i){const c=d("router-link");return s(),a("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${n.BtnColorProvider.getSelectedColor}-500 hover:bg-${n.BtnColorProvider.getSelectedColor}-400`]},[r(c,{to:{name:n.navItem.name}},{default:u((()=>[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${n.BtnColorProvider.getSelectedColor}-300 hover:bg-${n.BtnColorProvider.getSelectedColor}-200`]},[r("span",{class:`text-${n.BtnColorProvider.getSelectedColor}-700`},[f(e.$slots,"default")],2)],2)])),_:3},8,["to"])],2)};const V=[{label:"About",name:"about"},{label:"Contact",name:"contact"},{label:"CV",name:"cv"}],H={setup:()=>({navRoutes:V,NavButton:F})},N={class:"\n        flex flex-col\n        sm:flex-row\n        justify-center\n        sm:justify-between\n        items-center\n        p-6\n      "},U={class:"mb-2 sm:mb-0"},W=p("billmakes");H.render=function(e,t,o,c,d,m){return s(),a("header",null,[r("nav",N,[r("div",U,[r(c.NavButton,{"nav-item":{label:"billmakes",name:"home"},color:"gray",class:"ml-2 sm:text-5xl text-4xl"},{default:u((()=>[W])),_:1})]),r("div",null,[(s(!0),a(n,null,l(c.navRoutes,(e=>(s(),a(c.NavButton,{key:e.name,"nav-item":e,color:"gray",class:"ml-2 sm:text-lg text-sm"},{default:u((()=>[p(i(e.label),1)])),_:2},1032,["nav-item"])))),128))])])])};const z={setup:()=>({route:g(),PostList:T,NavHeader:H})},J={class:"flex flex-col h-screen relative"},Q={class:"py-5"};z.render=function(e,t,o,n,l,i){const c=d("router-view");return s(),a("div",J,[r(n.NavHeader),r("div",Q,[r(c)]),m("",!0)])};var X=[{name:"RE/MAX Tech",title:"R&D Developer",location:"HQ Denver, Remote",start:"Mar. 2021",end:"Present",description:["Responsible for a variety of front end features for our admin panel, user CMS, and mailing campaigns services.","Brought value to the teams I work with by making feature and app wide improvements to app performance and tidying up technical debt.","Introduced standards and best practices to be used by my team and others across multiple applications."]},{name:"DXC Technology",title:"Professional Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Mar. 2021",description:["Served as a team leader for the front end team, implementing new processes and methods for quality review and peer programming cooperation.","Lead architectural initiatives for large client features and technical work such as migrating an entire enterprise application to newer frameworks.","Developed a native mobile application for our product.","Worked closely with product and QA teams to ensure delivery of quality products, with much satisfaction to our client."]},{name:"Haneke Design",title:"Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Jun. 2019",description:["Worked with Haneke Design as a contractor to help with a variety of client needs, notably DXC Technology, formerly Tribridge.","Worked with front and backend technologies.","Commended and praised by clients and Haneke Design leadership for my quality of work."]},{name:"atLarge, Inc.",title:"Engineer",location:"Sarasota, FL",start:"Mar. 2018",end:"Dec. 2018",description:["Front and backend web and application development.","Worked directly with clients on nailing down specific requirements and acceptance criteria for our services.","Organized and created a developer QA department in a small agency to accommodate large enterprise client demands for quality and attention to detail.","Creating detailed, comprehensive and well-structured test plans and test cases. Estimating, prioritizing, planning and coordinating quality testing activities."]},{name:"billmakes",title:"Owner",location:"Remote",start:"Jun. 2015",end:"Present",description:["Providing technical services to a variety of clients, local and remote.","Primarily working with fullstack web development technologies.","Delivering client satisfactory work on time.","Creating detailed, comprehensive discovery of client needs.","Estimating, prioritizing, planning and coordinating work and strategy. "]}];const G={props:{color:{type:String,default:""}},setup:e=>({navItem:e.navItem,color:t((()=>e.color))})};G.render=function(e,t,o,n,l,i){return s(),a("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${n.color}-500 hover:bg-${n.color}-400`]},[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${n.color}-300 hover:bg-${n.color}-200`]},[r("span",{class:`text-${n.color}-700`},[f(e.$slots,"default")],2)],2)],2)};const K={},Y={class:"container items-center p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md border-none sm:border"};K.render=function(e,t){return s(),a("div",Y,[f(e.$slots,"default")])};const Z={setup:()=>({Button:G,BtnColorProvider:P,CardLayout:K,cv:X})},ee=r("div",{class:"flex text-3xl font-bold"},[p(" Hi! I'm Bill Hilbert. "),r("div",{class:"transition duration-200 ease-in-out transform hover:rotate-45"}," 👋 ")],-1),te={class:"text-xl font-bold mb-2"},oe=r("p",{class:"mb-2"}," This is my developer page. Every developer needs a web page, right? Well this is it. ",-1),se=r("p",{class:"mb-2"}," Passionate about quality code, efficiency, fan of minimal design. My goal is to create great user experiences using the latest tools in web technology, and to contribute something great to the open web. ",-1),ae=r("p",{class:"mb-2"},[p(" If you have any questions, I would be happy to help. Feel free to shoot me an email "),r("a",{class:"underline",href:"mailto:billmakes@protonmail.com"},"here"),p(". ")],-1),ne=p("Change Color"),le={class:"ml-3"},re=r("span",{class:"font-bold"},"Color: ",-1);Z.render=function(e,t,o,l,c,d){return s(),a(n,null,[r(l.CardLayout,{class:"mx-auto"},{default:u((()=>[ee,r("p",te," I'm a "+i(l.cv[0].title)+" at "+i(l.cv[0].name)+". ",1),oe,se,ae])),_:1}),r(l.CardLayout,{class:"mx-auto mt-4"},{default:u((()=>[r(l.Button,{onClick:l.BtnColorProvider.changeColor,color:l.BtnColorProvider.getSelectedColor},{default:u((()=>[ne])),_:1},8,["onClick","color"]),r("span",le,[re,p(i(l.BtnColorProvider.getSelectedColor?l.BtnColorProvider.getSelectedColor:"none"),1)])])),_:1})],64)};const ie={setup:()=>({CardLayout:K,BtnColorProvider:P,cv:X})},ce={class:"flex flex-col sm:flex-row align-center justify-center items-center"},de=r("img",{src:"/assets/me_portrait.70eaf7ae.jpg",class:"rounded-full"},null,-1),ue={class:"container mx-auto p-5"},me=r("span",{class:"text-3xl font-bold text-center"},"About me 🌴",-1),pe={class:"text-xl font-bold mb-2"},fe={class:"mb-2"},ge=p(" Currently residing in sunny St. Petersburg, FL. For those who are interested, you may view my "),be=p("résumé"),ve=p(". "),he={class:"mb-2"},ye=p(" Also don't hesitate to "),xe=p("reach out"),we=p(", I would love to help with any questions or look at any requests you may have. ");ie.render=function(e,t,o,n,l,c){const m=d("router-link");return s(),a(n.CardLayout,{class:"mx-auto"},{default:u((()=>[r("div",ce,[r("div",{class:["rounded-full flex items-center justify-center pr-1 pb-1 w-56 sm:w-64",`bg-${n.BtnColorProvider.getSelectedColor}-500`]},[de],2),r("div",ue,[me,r("p",pe," I'm a "+i(n.cv[0].title)+" at "+i(n.cv[0].name)+". ",1),r("p",fe,[ge,r(m,{to:{name:"cv"},class:"underline"},{default:u((()=>[be])),_:1}),ve]),r("p",he,[ye,r(m,{to:{name:"contact"},class:"underline"},{default:u((()=>[xe])),_:1}),we])])])])),_:1})};const Ce={setup(){const e=g(),o=h();return{Button:G,CardLayout:K,TagList:L,color:P.getSelectedColor,post:t((()=>R.getPosts.find((t=>t.meta.id===e.params.id)))),router:o}}},ke=y("data-v-2f7fa416");b("data-v-2f7fa416");const _e={key:0,class:"flex flex-col"},Pe={class:"flex flex-col text-center"},Le={class:"font-bold text-4xl"},Be={class:"font-bold text-lg"},je={id:"BlogPost"},Ee={key:0},Se={class:"fixed bottom-0 right-0 mb-4 mr-4 opacity-80 sm:opacity-100 text-sm"},Ie=p("Back to blog");v();const $e=ke(((e,t,o,n,l,c)=>n.post?(s(),a("div",_e,[r(n.CardLayout,{class:"mx-auto mb-2"},{default:ke((()=>[r("div",Pe,[r("span",Le,i(n.post.meta.title),1),r("span",null,i(n.post.meta.description),1),r("span",Be,i(n.post.meta.date),1),r(n.TagList,{tags:n.post.meta.tags},null,8,["tags"])])])),_:1}),r(n.CardLayout,{class:"mx-auto"},{default:ke((()=>[r("div",je,[n.post?(s(),a("div",Ee,[r("div",{innerHTML:n.post.post},null,8,["innerHTML"])])):m("",!0)])])),_:1}),r("div",Se,[r(n.Button,{color:n.color,onClick:t[1]||(t[1]=e=>n.router.push({name:"blog"}))},{default:ke((()=>[Ie])),_:1},8,["color"])])])):m("",!0)));Ce.render=$e,Ce.__scopeId="data-v-2f7fa416";const De={setup:()=>({socialLinks:[{label:"email",url:"mailto:billmakes@protonmail.com",icon:"gmail.svg"},{label:"github",url:"https://github.com/billmakes",icon:"github.svg"},{label:"linkedin",url:"https://www.linkedin.com/in/bill-hilbert-414bb5123/",icon:"linkedin.svg"}]})},Re={class:"flex"};De.render=function(e,t,o,i,c,d){return s(),a("div",Re,[(s(!0),a(n,null,l(i.socialLinks,(e=>(s(),a("div",{key:e.label,class:"w-8 h-8 mr-2 mb-2 cursor-pointer hover:shadow-lg bg-gray"},[r("a",{href:e.url},[r("img",{src:`../../../assets/${e.icon}`},null,8,["src"])],8,["href"])])))),128))])};const Te={setup:()=>({CardLayout:K,SocialButtons:De})},qe=r("div",{class:"mb-8"},[r("span",{class:"text-3xl font-bold"},"Let's talk ☎️"),r("p",{class:"text-xl font-bold mb-2"}," Reach out to me on any of the platforms below - "),r("p",null,"I will get back to you as soon as I can!")],-1);Te.render=function(e,t,o,n,l,i){return s(),a(n.CardLayout,{class:"mx-auto"},{default:u((()=>[qe,r(n.SocialButtons,{class:"flex justify-center"})])),_:1})};const Oe={props:{source:Object},setup:e=>({CardLayout:K,source:e.source})},Ae={class:"mt-2 flex sm:flex-row flex-col justify-center content-center mx-auto"},Me={class:"flex flex-col mx-auto my-auto pr-3 text-center"},Fe={class:"italic text-gray-600 font-bold"},Ve={class:"italic text-gray-500"},He={class:"italic text-gray-500"},Ne={class:"italic text-gray-500"},Ue={class:"list-disc"};Oe.render=function(e,t,o,c,d,m){return s(),a("div",Ae,[r("div",Me,[r("span",Fe,i(c.source.name),1),r("span",Ve,i(c.source.location),1),r("span",He,i(c.source.title),1),r("span",Ne,i(c.source.start)+" - "+i(c.source.end),1)]),r(c.CardLayout,{class:"mx-1"},{default:u((()=>[r("ul",Ue,[(s(!0),a(n,null,l(c.source.description,((e,t)=>(s(),a("li",{key:t,class:"ml-4 mb-2 text-sm"},i(e),1)))),128))])])),_:1})])};const We={setup:()=>({CardLayout:K,SocialButtons:De,CVItem:Oe,cv:X,skills:["JavaScript","Vue.js","React.js","Angular","TypeScript","Node.js","Express","Nuxt.js","Next.js","Webpack","Parcel","Git","Linux","bash"]})},ze={class:"mx-auto text-gray-600 mb-2"},Je={class:"flex flex-col text-center"},Qe=r("span",{class:"text-3xl font-bold"},"Bill Hilbert",-1),Xe={class:"text-1xl font-bold text-gray-500"},Ge={class:"flex justify-center flex-start flex-col sm:flex-row mx-5"},Ke={class:"ml-2 mt-2"},Ye={class:"sm:border-none border"},Ze=r("div",null,[r("span",{class:"text-lg font-bold"},"Skills")],-1),et={class:"list-disc list-inside grid sm:grid-cols-3 grid-cols-2"},tt=r("div",null,[r("span",null,"This list is a short summary of my favorite technology used. There are countless skills and technology used when developing! Reach out if you wish to know more.")],-1),ot={class:"sm:border-none border mt-2"},st={class:"flex justify-between flex-col sm:flex-row"},at=r("div",{class:"ml-2 flex flex-col"},[r("div",null,[r("span",{class:"text-lg font-bold"},"Contact Info")]),r("span",null,[p("Email: "),r("a",{href:"mailto:billmakes@protonmail.com",class:"underline"},"billmakes@protonmail.com")]),r("span",null,"Location: St. Petersburg, FL")],-1);We.render=function(e,t,o,c,d,m){return s(),a(n,null,[r("div",ze,[r("div",Je,[Qe,r("span",Xe,i(c.cv[0].title),1)])]),r("div",Ge,[r("div",null,[(s(!0),a(n,null,l(c.cv,((e,t)=>(s(),a(c.CVItem,{key:t,source:e},null,8,["source"])))),128))]),r("div",Ke,[r("div",Ye,[r(c.CardLayout,null,{default:u((()=>[Ze,r("ul",et,[(s(!0),a(n,null,l(c.skills,((e,t)=>(s(),a("li",{key:t},i(e),1)))),128))])])),_:1}),r(c.CardLayout,{class:"mt-2"},{default:u((()=>[tt])),_:1})]),r("div",ot,[r(c.CardLayout,{class:"mt-2"},{default:u((()=>[r("div",st,[at,r(c.SocialButtons,{class:"mt-4 self-center"})])])),_:1})])])])],64)};const nt=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:ie},{path:"/blog/:id",name:"blog-post",component:Ce},{path:"/contact",name:"contact",component:Te},{path:"/cv",name:"cv",component:We}],lt=x({history:w(),routes:nt});C(z).use(lt).mount("#app");
