import{r as e,c as t,a as o,o as s,b as l,F as a,d as n,e as r,t as i,w as c,f as d,g as u,h as m,i as p,j as g,u as f,k as b,l as v,v as h,p as y,m as x,n as w,q as C,s as _,x as k,y as P}from"./vendor.e734a362.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return o(self[t].moduleMap[n]);const r=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){a(new Error(`Failed to import: ${e}`)),l(i)},onload(){o(self[t].moduleMap[n]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const L=["gray","red","yellow","green","blue","indigo","purple","pink"],B=e({selectedColor:L[Math.floor(Math.random()*Math.floor(L.length))]});const S=o({getSelectedColor:t((()=>B.selectedColor)),changeColor:function(){let e=L.indexOf(B.selectedColor);B.selectedColor=L[e+1]}}),j={props:{tags:Array},setup:e=>({BtnColorProvider:S,tags:e.tags})},E={class:"flex"};let I;j.render=function(e,t,o,c,d,u){return s(),l("div",E,[(s(!0),l(a,null,n(c.tags,((e,t)=>(s(),l("div",{key:t,class:"mr-2 d-flex align-center",style:{cursor:"pointer"}},[r("span",{class:["font-bold items-center text-xs shadow rounded p-1",` bg-${c.BtnColorProvider.getSelectedColor}-300 hover:bg-${c.BtnColorProvider.getSelectedColor}-200 text-${c.BtnColorProvider.getSelectedColor}-700`],style:{padding:"0.3em"}},i(e),3)])))),128))])};const $={},D=function(e,t){if(!t)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in $)return;$[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":I,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function T(e){switch(e){case"../../blog/another-post.md":return D((()=>__import__("./another-post.c16ca125.js")),void 0);case"../../blog/cool-post.md":return D((()=>__import__("./cool-post.69009a0f.js")),void 0);case"../../blog/new-post.md":return D((()=>__import__("./new-post.c81cf079.js")),void 0);case"../../blog/unique-post.md":return D((()=>__import__("./unique-post.c54eb27b.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}const R={"../../blog/another-post.md":()=>D((()=>__import__("./another-post.c16ca125.js")),void 0),"../../blog/cool-post.md":()=>D((()=>__import__("./cool-post.69009a0f.js")),void 0),"../../blog/new-post.md":()=>D((()=>__import__("./new-post.c81cf079.js")),void 0),"../../blog/unique-post.md":()=>D((()=>__import__("./unique-post.c54eb27b.js")),void 0)};for(const vt in R){T("../../blog/"+vt.replace(/^.*[\\\/]/,"").split(".").slice(0,-1).join(".")+".md").then((async e=>{q.posts.push({meta:e.attributes,post:e.html})}))}const q=e({posts:[],filteredPosts:[]}),O=o({getPosts:t((()=>q.posts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),getFilteredPosts:t((()=>q.filteredPosts.sort(((e,t)=>Date.parse(e.meta.date)<Date.parse(t.meta.date)?1:-1)))),filterPosts:function(e){e.length?q.filteredPosts=q.posts.filter((t=>{const o=new RegExp(e,"gi");return t.meta.title.match(o)||t.meta.description.match(o)})):q.filteredPosts=[]}}),A={props:{recent:Boolean,term:String},setup:e=>(c((()=>e.term),(e=>{O.filterPosts(e)})),{posts:t((()=>e.recent?O.getPosts.slice(0,3):O.getFilteredPosts.length&&e.term.length?O.getFilteredPosts:O.getPosts)),TagList:j,BlogProvider:O,BtnColorProvider:S,recent:e.recent})},F={key:0},V={class:"italic text-gray-500 text-sm"},M={key:0,class:"mt-2 underline"},H=p("Click here to see more posts");A.render=function(e,t,o,c,p,g){const f=d("router-link");return s(),l(a,null,[r("div",null,[c.posts.length?(s(),l("ul",F,[(s(!0),l(a,null,n(c.posts,(e=>(s(),l("li",{key:e.meta.id,class:"flex sm:flex-row flex-col sm:border-none border rounded sm:p-0 p-3 justify-between mb-2"},[r("div",null,[r(f,{to:{name:"blog-post",params:{id:e.meta.id}}},{default:u((()=>[r("span",{class:["underline",o.term&&o.term.length?`bg-${c.BtnColorProvider.getSelectedColor}-200`:""]},i(e.meta.title),3),r("span",V,i(` - ${e.meta.date}`),1)])),_:2},1032,["to"])]),r("div",null,[r(c.TagList,{tags:e.meta.tags},null,8,["tags"])])])))),128))])):m("",!0)]),c.recent?(s(),l("div",M,[r("span",null,[r(f,{to:{name:"blog"}},{default:u((()=>[H])),_:1})])])):m("",!0)],64)};const U={props:{navItem:{type:Object,required:!0},color:{type:String,default:"yellow"}},setup:e=>({navItem:e.navItem,BtnColorProvider:S})};U.render=function(e,t,o,a,n,i){const c=d("router-link");return s(),l("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${a.BtnColorProvider.getSelectedColor}-500 hover:bg-${a.BtnColorProvider.getSelectedColor}-400`]},[r(c,{to:{name:a.navItem.name}},{default:u((()=>[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${a.BtnColorProvider.getSelectedColor}-300 hover:bg-${a.BtnColorProvider.getSelectedColor}-200`]},[r("span",{class:`text-${a.BtnColorProvider.getSelectedColor}-700`},[g(e.$slots,"default")],2)],2)])),_:3},8,["to"])],2)};const N=[{label:"Home",name:"home"},{label:"About",name:"about"},{label:"Contact",name:"contact"},{label:"Blog",name:"blog"},{label:"CV",name:"cv"}],W={setup:()=>({navRoutes:N,NavButton:U})},z={class:"flex flex-col sm:flex-row justify-center sm:justify-between items-center p-6"},J={class:"mb-2 sm:mb-0"},X=p("billmakes");W.render=function(e,t,o,c,d,m){return s(),l("header",null,[r("nav",z,[r("div",J,[r(c.NavButton,{"nav-item":{label:"billmakes",name:"home"},color:"gray",class:"ml-2 sm:text-5xl text-4xl"},{default:u((()=>[X])),_:1})]),r("div",null,[(s(!0),l(a,null,n(c.navRoutes,(e=>(s(),l(c.NavButton,{"nav-item":e,key:e.name,color:"gray",class:"ml-2 sm:text-lg text-sm"},{default:u((()=>[p(i(e.label),1)])),_:2},1032,["nav-item"])))),128))])])])};const Q={setup:()=>({route:f(),PostList:A,NavHeader:W})},G={class:"flex flex-col h-screen relative"},K={class:"py-5"},Y={key:0,class:"container items-center mx-auto max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"},Z=r("div",null,[r("span",{class:"italic text-gray-500"},"Under Construction - Coming Soon 🚧")],-1),ee=r("span",{class:"font-bold"},"Latest blog posts 📚",-1),te=r("div",{class:"fixed bottom-0 right-0"},[r("span",{class:"italic text-gray-200"},"Under Construction")],-1);Q.render=function(e,t,o,a,n,i){const c=d("router-view");return s(),l("div",G,[r(a.NavHeader),r("div",K,[r(c)]),"blog"!=a.route.name&&"cv"!=a.route.name&&"blog-post"!=a.route.name?(s(),l("div",Y,[Z,ee,r(a.PostList,{recent:""})])):m("",!0),te])};var oe=[{name:"DXC Technology",title:"Professional Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Present",description:["Served as a team leader for the front end team, implementing new processes and methods for quality review and peer programming cooperation.","Lead architectural initiatives for large client features and technical work such as migrating an entire enterprise application to newer frameworks.","Developed a native mobile application for our product.","Worked closely with product and QA teams to ensure delivery of quality products, with much satisfaction to our client."]},{name:"Haneke Design",title:"Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Jun. 2019",description:["Worked with Haneke Design as a contractor to help with a variety of client needs, notably DXC Technology, formerly Tribridge.","Worked with front and backend technologies.","Commended and praised by clients and Haneke Design leadership for my quality of work."]},{name:"atLarge, Inc.",title:"Engineer",location:"Sarasota, FL",start:"Mar. 2018",end:"Dec. 2018",description:["Front and backend web and application development.","Worked directly with clients on nailing down specific requirements and acceptance criteria for our services.","Organized and created a developer QA department in a small agency to accommodate large enterprise client demands for quality and attention to detail.","Creating detailed, comprehensive and well-structured test plans and test cases. Estimating, prioritizing, planning and coordinating quality testing activities."]},{name:"billmakes",title:"Owner",location:"Remote",start:"Jun. 2015",end:"Present",description:["Providing technical services to a variety of clients, local and remote.","Primarily working with fullstack web development technologies.","Delivering client satisfactory work on time.","Creating detailed, comprehensive discovery of client needs.","Estimating, prioritizing, planning and coordinating work and strategy. "]}];const se={props:{color:{type:String,default:""}},setup:e=>({navItem:e.navItem,color:t((()=>e.color))})};se.render=function(e,t,o,a,n,i){return s(),l("button",{class:["rounded shadow transition ease-in-out transform hover:scale-95",`bg-${a.color}-500 hover:bg-${a.color}-400`]},[r("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${a.color}-300 hover:bg-${a.color}-200`]},[r("span",{class:`text-${a.color}-700`},[g(e.$slots,"default")],2)],2)],2)};const le={},ae={class:"container items-center max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md border-none sm:border"};le.render=function(e,t){return s(),l("div",ae,[g(e.$slots,"default")])};const ne={setup:()=>({Button:se,BtnColorProvider:S,CardLayout:le,cv:oe})},re=r("div",{class:"flex text-3xl font-bold"},[p(" Hi! I'm Bill Hilbert. "),r("div",{class:"transition duration-200 ease-in-out transform hover:rotate-45"}," 👋 ")],-1),ie={class:"text-xl font-bold mb-2"},ce=r("p",{class:"mb-2"}," Passionate about quality code, efficiency, fan of minimal design. My goal is to create outstanding user experiences using the latest tools in web technology, and to contribute something great to the open web. ",-1),de=r("p",{class:"mb-2"},[p(" If you have any questions, I would be happy to help. Feel free to shoot me an email "),r("a",{class:"underline",href:"mailto:hilbertwilliam@gmail.com"},"here"),p(". ")],-1),ue=p("Change Color"),me={class:"ml-3"},pe=r("span",{class:"font-bold"},"Color: ",-1);ne.render=function(e,t,o,n,c,d){return s(),l(a,null,[r(n.CardLayout,{class:"mx-auto"},{default:u((()=>[re,r("p",ie," I'm a "+i(n.cv[0].title)+" at "+i(n.cv[0].name)+". ",1),ce,de])),_:1}),r(n.CardLayout,{class:"mx-auto mt-4"},{default:u((()=>[r(n.Button,{onClick:n.BtnColorProvider.changeColor,color:n.BtnColorProvider.getSelectedColor},{default:u((()=>[ue])),_:1},8,["onClick","color"]),r("span",me,[pe,p(i(n.BtnColorProvider.getSelectedColor?n.BtnColorProvider.getSelectedColor:"none"),1)])])),_:1})],64)};const ge={setup:()=>({CardLayout:le,BtnColorProvider:S})},fe={class:"flex flex-col sm:flex-row align-center justify-center items-center"},be=r("img",{src:"/assets/me_portrait.70eaf7ae.jpg",class:"rounded-full"},null,-1),ve={class:"container mx-auto p-5"},he=r("span",{class:"text-3xl font-bold text-center"},"About me 🌴",-1),ye=r("p",{class:"text-xl font-bold mb-2"}," I'm a Software Engineer at DXC Technology. ",-1),xe={class:"mb-2"},we=p(" Currently residing in sunny St. Petersburg, FL. For those who are interested, you may view my "),Ce=p("résumé"),_e=p(". "),ke={class:"mb-2"},Pe=p(" Also don't hesitate to "),Le=p("reach out"),Be=p(", I would love to help with any questions or look at any requests you may have. ");ge.render=function(e,t,o,a,n,i){const c=d("router-link");return s(),l(a.CardLayout,{class:"mx-auto"},{default:u((()=>[r("div",fe,[r("div",{class:["rounded-full flex items-center justify-center pr-1 pb-1 w-56 sm:w-64",`bg-${a.BtnColorProvider.getSelectedColor}-500`]},[be],2),r("div",ve,[he,ye,r("p",xe,[we,r(c,{to:{name:"cv"},class:"underline"},{default:u((()=>[Ce])),_:1}),_e]),r("p",ke,[Pe,r(c,{to:{name:"contact"},class:"underline"},{default:u((()=>[Le])),_:1}),Be])])])])),_:1})};const Se={setup(){let e=b("");return{CardLayout:le,PostList:A,term:e}}},je={class:"relative container items-center max-w-xl bg-gray-100 rounded mx-auto mb-2"},Ee=r("span",{class:"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"}," 🔎 ",-1),Ie=r("span",{class:"text-3xl font-bold"},"Coming soon 🚧",-1);Se.render=function(e,t,o,n,i,c){return s(),l(a,null,[r("div",je,[v(r("input",{type:"text",placeholder:"Search","onUpdate:modelValue":t[1]||(t[1]=e=>n.term=e),class:"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"},null,512),[[h,n.term]]),Ee]),r(n.CardLayout,{class:"mx-auto"},{default:u((()=>[Ie,r(n.PostList,{term:n.term},null,8,["term"])])),_:1})],64)};const $e={setup(){const e=f(),o=w();return{Button:se,CardLayout:le,TagList:j,color:S.getSelectedColor,post:t((()=>O.getPosts.find((t=>t.meta.id===e.params.id)))),router:o}}},De=C("data-v-2f7fa416");y("data-v-2f7fa416");const Te={key:0,class:"flex flex-col"},Re={class:"flex flex-col text-center"},qe={class:"font-bold text-4xl"},Oe={class:"font-bold text-lg"},Ae={id:"BlogPost"},Fe={key:0},Ve={class:"fixed bottom-0 right-0 mb-4 mr-4 opacity-80 sm:opacity-100 text-sm"},Me=p("Back to blog");x();const He=De(((e,t,o,a,n,c)=>a.post?(s(),l("div",Te,[r(a.CardLayout,{class:"mx-auto mb-2"},{default:De((()=>[r("div",Re,[r("span",qe,i(a.post.meta.title),1),r("span",null,i(a.post.meta.description),1),r("span",Oe,i(a.post.meta.date),1),r(a.TagList,{tags:a.post.meta.tags},null,8,["tags"])])])),_:1}),r(a.CardLayout,{class:"mx-auto"},{default:De((()=>[r("div",Ae,[a.post?(s(),l("div",Fe,[r("div",{innerHTML:a.post.post},null,8,["innerHTML"])])):m("",!0)])])),_:1}),r("div",Ve,[r(a.Button,{color:a.color,onClick:t[1]||(t[1]=e=>a.router.push({name:"blog"}))},{default:De((()=>[Me])),_:1},8,["color"])])])):m("",!0)));$e.render=He,$e.__scopeId="data-v-2f7fa416";const Ue={setup:()=>({socialLinks:[{label:"email",url:"mailto:hilbertwilliam@gmail.com",icon:"gmail.svg"},{label:"github",url:"https://github.com/billmakes",icon:"github.svg"},{label:"linkedin",url:"https://www.linkedin.com/in/bill-hilbert-414bb5123/",icon:"linkedin.svg"}]})},Ne={class:"flex"};Ue.render=function(e,t,o,i,c,d){return s(),l("div",Ne,[(s(!0),l(a,null,n(i.socialLinks,(e=>(s(),l("div",{key:e.label,class:"w-8 h-8 mr-2 mb-2 cursor-pointer hover:shadow-lg bg-gray"},[r("a",{href:e.url},[r("img",{src:`../../../assets/${e.icon}`},null,8,["src"])],8,["href"])])))),128))])};const We={setup:()=>({CardLayout:le,SocialButtons:Ue})},ze=r("div",{class:"mb-8"},[r("span",{class:"text-3xl font-bold"},"Let's talk ☎️"),r("p",{class:"text-xl font-bold mb-2"}," Reach out to me on any of the platforms below - "),r("p",null,"I will get back to you as soon as I can!")],-1);We.render=function(e,t,o,a,n,i){return s(),l(a.CardLayout,{class:"mx-auto"},{default:u((()=>[ze,r(a.SocialButtons,{class:"flex justify-center"})])),_:1})};const Je={props:{source:Object},setup:e=>({CardLayout:le,source:e.source})},Xe={class:"mt-2 flex sm:flex-row flex-col justify-center content-center mx-auto"},Qe={class:"flex flex-col mx-auto my-auto pr-3 text-center"},Ge={class:"italic text-gray-600 font-bold"},Ke={class:"italic text-gray-500"},Ye={class:"italic text-gray-500"},Ze={class:"italic text-gray-500"},et={class:"list-disc"};Je.render=function(e,t,o,c,d,m){return s(),l("div",Xe,[r("div",Qe,[r("span",Ge,i(c.source.name),1),r("span",Ke,i(c.source.location),1),r("span",Ye,i(c.source.title),1),r("span",Ze,i(c.source.start)+" - "+i(c.source.end),1)]),r(c.CardLayout,{class:"mx-1"},{default:u((()=>[r("ul",et,[(s(!0),l(a,null,n(c.source.description,((e,t)=>(s(),l("li",{key:t,class:"ml-4 mb-2 text-sm"},i(e),1)))),128))])])),_:1})])};const tt={setup:()=>({CardLayout:le,SocialButtons:Ue,CVItem:Je,cv:oe,skills:["JavaScript","Vue.js","React.js","Angular","TypeScript","Node.js,","Express","Nuxt.js","Next.js","Webpack","Parcel","Git","Linux","bash"]})},ot={class:"mx-auto text-gray-600 mb-2"},st={class:"flex flex-col text-center"},lt=r("span",{class:"text-3xl font-bold"},"Bill Hilbert",-1),at={class:"text-1xl font-bold text-gray-500"},nt={class:"flex justify-center flex-start flex-col sm:flex-row mx-5"},rt={class:"ml-2 mt-2"},it={class:"sm:border-none border"},ct=r("div",null,[r("span",{class:"text-lg font-bold"},"Skills")],-1),dt={class:"list-disc list-inside grid sm:grid-cols-3 grid-cols-2"},ut=r("div",null,[r("span",null,"This list is a short summary of my favorite technology used. There are countless skills and technology used when developing! Reach out if you wish to know more.")],-1),mt={class:"sm:border-none border mt-2"},pt={class:"flex justify-between flex-col sm:flex-row"},gt=r("div",{class:"ml-2 flex flex-col"},[r("div",null,[r("span",{class:"text-lg font-bold"},"Contact Info")]),r("span",null,[p("Email: "),r("a",{href:"mailto:hilbertwilliam@gmail.com",class:"underline"},"hilbertwilliam@gmail.com")]),r("span",null,"Location: St. Petersburg, FL")],-1);tt.render=function(e,t,o,c,d,m){return s(),l(a,null,[r("div",ot,[r("div",st,[lt,r("span",at,i(c.cv[0].title),1)])]),r("div",nt,[r("div",null,[(s(!0),l(a,null,n(c.cv,((e,t)=>(s(),l(c.CVItem,{key:t,source:e},null,8,["source"])))),128))]),r("div",rt,[r("div",it,[r(c.CardLayout,null,{default:u((()=>[ct,r("ul",dt,[(s(!0),l(a,null,n(c.skills,((e,t)=>(s(),l("li",{key:t},i(e),1)))),128))])])),_:1}),r(c.CardLayout,{class:"mt-2"},{default:u((()=>[ut])),_:1})]),r("div",mt,[r(c.CardLayout,{class:"mt-2"},{default:u((()=>[r("div",pt,[gt,r(c.SocialButtons,{class:"mt-4 self-center"})])])),_:1})])])])],64)};const ft=[{path:"/",name:"home",component:ne},{path:"/about",name:"about",component:ge},{path:"/blog",name:"blog",component:Se},{path:"/blog/:id",name:"blog-post",component:$e},{path:"/contact",name:"contact",component:We},{path:"/cv",name:"cv",component:tt}],bt=_({history:k(),routes:ft});P(Q).use(bt).mount("#app");
