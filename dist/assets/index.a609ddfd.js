import{r as e,c as t,a as o,b as a,o as l,d as n,e as s,F as r,f as i,w as c,g as d,t as u,h as m,i as p,u as f,j as g,m as b,p as v,k as h,l as y,n as x,q as w,s as C,v as k}from"./vendor.831f4b01.js";let L;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const r=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),l(i)},onload(){o(self[t].moduleMap[s]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const P={},_=function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in P)return;P[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":L,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};function B(e){return Promise.reject(new Error("Unknown variable dynamic import: "+e))}const S={"../../public/assets/blog/another-post.md":()=>_((()=>__import__("./another-post.0143d06a.js")),void 0),"../../public/assets/blog/new-post.md":()=>_((()=>__import__("./new-post.02bc00ae.js")),void 0)};for(const Qe in S){B("../../public/assets/blog/"+Qe.replace(/^.*[\\\/]/,"").split(".").slice(0,-1).join(".")+".md?raw").then((async e=>{let t=e.default.match(/(?<=\%)(.*?)(?=\%)/)[1],o=await JSON.parse(t);if(!o)return console.error('Error: please include a metadata line at the top of your markdown file. (ex: % {"title": "test", "date": "today"} % )');j.posts.push({meta:o,post:e.default.replace(`%${t}%`,"")})}))}const j=e({posts:[]}),$=o({getPosts:t((()=>j.posts))}),I={props:{recent:Boolean},setup:e=>({posts:$.getPosts,recent:e.recent,recentSize:3})},E={class:"italic text-gray-500 text-sm"},R={key:0,class:"mt-2 underline"},q=d("Click here to see more posts");I.render=function(e,t,o,p,f,g){const b=a("router-link");return l(),n(r,null,[s("div",null,[s("ul",null,[(l(!0),n(r,null,i(p.recent?p.posts.slice(0,p.recentSize):p.posts,(e=>(l(),n("li",{key:e.meta.id},[s(b,{to:{name:"blog-post",params:{id:e.meta.id}}},{default:c((()=>[d(u(e.meta.title)+" ",1),s("span",E,u(`- ${e.meta.date}`),1)])),_:2},1032,["to"])])))),128))])]),p.recent?(l(),n("div",R,[s("span",null,[s(b,{to:{name:"blog"}},{default:c((()=>[q])),_:1})])])):m("",!0)],64)};const D=["gray","red","yellow","green","blue","indigo","purple","pink"],T=e({selectedColor:D[Math.floor(Math.random()*Math.floor(D.length))]});const M=o({getSelectedColor:t((()=>T.selectedColor)),changeColor:function(){let e=D.indexOf(T.selectedColor);T.selectedColor=D[e+1]}});const O={props:{navItem:{type:Object,required:!0},color:{type:String,default:"yellow"}},setup:e=>({navItem:e.navItem,BtnColorProvider:M})};O.render=function(e,t,o,r,i,d){const u=a("router-link");return l(),n("button",{class:["rounded transition ease-in-out transform hover:scale-95",`bg-${r.BtnColorProvider.getSelectedColor}-500 hover:bg-${r.BtnColorProvider.getSelectedColor}-400`]},[s(u,{to:{name:r.navItem.name}},{default:c((()=>[s("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${r.BtnColorProvider.getSelectedColor}-300 hover:bg-${r.BtnColorProvider.getSelectedColor}-200`]},[s("span",{class:`text-${r.BtnColorProvider.getSelectedColor}-700`},[p(e.$slots,"default")],2)],2)])),_:3},8,["to"])],2)};const F=[{label:"Home",name:"home"},{label:"About",name:"about"},{label:"Contact",name:"contact"},{label:"Blog",name:"blog"},{label:"CV",name:"cv"}],H={setup:()=>({navRoutes:F,NavButton:O})},A={class:"flex flex-col sm:flex-row justify-center sm:justify-between items-center p-6"},N={class:"mb-2 sm:mb-0"},U=d("billmakes");H.render=function(e,t,o,a,m,p){return l(),n("header",null,[s("nav",A,[s("div",N,[s(a.NavButton,{"nav-item":{label:"billmakes",name:"home"},color:"gray",class:"ml-2 sm:text-5xl text-4xl"},{default:c((()=>[U])),_:1})]),s("div",null,[(l(!0),n(r,null,i(a.navRoutes,(e=>(l(),n(a.NavButton,{"nav-item":e,key:e.name,color:"gray",class:"ml-2 sm:text-lg text-sm"},{default:c((()=>[d(u(e.label),1)])),_:2},1032,["nav-item"])))),128))])])])};const V={setup:()=>({route:f(),PostList:I,NavHeader:H})},W={class:"flex flex-col h-screen relative"},z={class:"py-5"},J={key:0,class:"container items-center mx-auto max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"},X=s("span",{class:"font-bold"},"Latest blog posts 📚",-1),Q=s("div",{class:"fixed bottom-0 right-0"},[s("span",{class:"italic text-gray-200"},"Under Construction")],-1);V.render=function(e,t,o,r,i,c){const d=a("router-view");return l(),n("div",W,[s(r.NavHeader),s("div",z,[s(d)]),"blog"!=r.route.name&&"cv"!=r.route.name&&"blog-post"!=r.route.name?(l(),n("div",J,[X,s(r.PostList,{recent:""})])):m("",!0),Q])};var G=[{name:"DXC Technology",title:"Professional Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Present",description:["Served as a team leader for the front end team, implementing new processes and methods for quality review and peer programming cooperation.","Lead architectural initiatives for large client features and technical work such as migrating an entire enterprise application to newer frameworks.","Developed a native mobile application for our product.","Worked closely with product and QA teams to ensure delivery of quality products, with much satisfaction to our client."]},{name:"Haneke Design",title:"Software Engineer",location:"Tampa, FL",start:"Dec. 2018",end:"Jun. 2019",description:["Worked with Haneke Design as a contractor to help with a variety of client needs, notably DXC Technology, formerly Tribridge.","Worked with front and backend technologies.","Commended and praised by clients and Haneke Design leadership for my quality of work."]},{name:"atLarge, Inc.",title:"Engineer",location:"Sarasota, FL",start:"Mar. 2018",end:"Dec. 2018",description:["Front and backend web and application development.","Worked directly with clients on nailing down specific requirements and acceptance criteria for our services.","Organized and created a developer QA department in a small agency to accommodate large enterprise client demands for quality and attention to detail.","Creating detailed, comprehensive and well-structured test plans and test cases. Estimating, prioritizing, planning and coordinating quality testing activities."]},{name:"billmakes",title:"Owner",location:"Remote",start:"Jun. 2015",end:"Present",description:["Providing technical services to a variety of clients, local and remote.","Primarily working with fullstack web development technologies.","Delivering client satisfactory work on time.","Creating detailed, comprehensive discovery of client needs.","Estimating, prioritizing, planning and coordinating work and strategy. "]}];const K={props:{color:{type:String,default:""}},setup:e=>({navItem:e.navItem,color:t((()=>e.color))})};K.render=function(e,t,o,a,r,i){return l(),n("button",{class:["rounded transition ease-in-out transform hover:scale-95",`bg-${a.color}-500 hover:bg-${a.color}-400`]},[s("div",{class:["font-bold mb-1 p-2 pb-2 rounded",`bg-${a.color}-300 hover:bg-${a.color}-200`]},[s("span",{class:`text-${a.color}-700`},[p(e.$slots,"default")],2)],2)],2)};const Y={},Z={class:"container items-center max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md border"};Y.render=function(e,t){return l(),n("div",Z,[p(e.$slots,"default")])};const ee={setup:()=>({Button:K,BtnColorProvider:M,CardLayout:Y,cv:G})},te=s("div",{class:"flex text-3xl font-bold"},[d(" Hi! I'm Bill Hilbert. "),s("div",{class:"transition duration-200 ease-in-out transform hover:rotate-45"}," 👋 ")],-1),oe={class:"text-xl font-bold mb-2"},ae=s("p",{class:"mb-2"}," Passionate about quality code, efficiency, fan of minimal design. My goal is to create outstanding user experiences using the latest tools in web technology, and to contribute something great to the open web. ",-1),le=s("p",{class:"mb-2"},[d(" If you have any questions, I would be happy to help. Feel free to shoot me an email "),s("a",{class:"underline",href:"mailto:hilbertwilliam@gmail.com"},"here"),d(". ")],-1),ne=d("Change Color"),se={class:"ml-3"},re=s("span",{class:"font-bold"},"Color: ",-1);ee.render=function(e,t,o,a,i,m){return l(),n(r,null,[s(a.CardLayout,{class:"mx-auto"},{default:c((()=>[te,s("p",oe," I'm a "+u(a.cv[0].title)+" at "+u(a.cv[0].name)+". ",1),ae,le])),_:1}),s(a.CardLayout,{class:"mx-auto mt-4"},{default:c((()=>[s(a.Button,{onClick:a.BtnColorProvider.changeColor,color:a.BtnColorProvider.getSelectedColor},{default:c((()=>[ne])),_:1},8,["onClick","color"]),s("span",se,[re,d(u(a.BtnColorProvider.getSelectedColor?a.BtnColorProvider.getSelectedColor:"none"),1)])])),_:1})],64)};const ie={setup:()=>({CardLayout:Y,BtnColorProvider:M})},ce={class:"flex flex-col sm:flex-row align-center justify-center items-center"},de=s("img",{src:"/assets/me_portrait.70eaf7ae.jpg",class:"rounded-full"},null,-1),ue=g('<div class="container mx-auto p-5"><span class="text-3xl font-bold text-center">About me 🌴</span><p class="text-xl font-bold mb-2"> I&#39;m a Software Engineer at DXC Technology. </p><p class="mb-2"> Currently residing in sunny St. Petersburg, FL. For those who are interested, you may view my résumé. </p><p class="mb-2"> Also don&#39;t hesitate to reach out, I would love to help with any questions or look at any requests you may have. </p></div>',1);ie.render=function(e,t,o,a,r,i){return l(),n(a.CardLayout,{class:"mx-auto"},{default:c((()=>[s("div",ce,[s("div",{class:["rounded-full flex items-center justify-center pr-1 pb-1 w-56 sm:w-64",`bg-${a.BtnColorProvider.getSelectedColor}-500`]},[de],2),ue])])),_:1})};const me={setup:()=>({CardLayout:Y,PostList:I,posts:$.getPosts})},pe=s("span",{class:"text-3xl font-bold"},"Coming soon 🚧",-1);me.render=function(e,t,o,a,r,i){return l(),n(a.CardLayout,{class:"mx-auto"},{default:c((()=>[pe,s(a.PostList)])),_:1})};const fe={setup(){const e=f(),o=y();return{Button:K,CardLayout:Y,marked:b,btnColor:M.getSelectedColor,post:t((()=>$.getPosts.find((t=>t.meta.id===e.params.id)))),router:o}}},ge=x("data-v-a5d5d0b8");v("data-v-a5d5d0b8");const be={class:"flex flex-col"},ve={class:"text-center mb-2"},he=d("Back to blog"),ye={id:"BlogPost"},xe={key:0},we={class:"font-bold text-4xl"},Ce={class:"font-bold text-lg"};h();const ke=ge(((e,t,o,a,r,i)=>(l(),n("div",be,[s("div",ve,[s(a.Button,{color:a.btnColor,onClick:t[1]||(t[1]=e=>a.router.push({name:"blog"}))},{default:ge((()=>[he])),_:1},8,["color"])]),s(a.CardLayout,{class:"mx-auto"},{default:ge((()=>[s("div",ye,[a.post?(l(),n("div",xe,[s("div",null,[s("span",we,u(a.post.meta.title),1),s("span",Ce,u(a.post.meta.date),1)]),s("div",{innerHTML:a.marked(a.post.post)},null,8,["innerHTML"])])):m("",!0)])])),_:1})]))));fe.render=ke,fe.__scopeId="data-v-a5d5d0b8";const Le={setup:()=>({socialLinks:[{label:"email",url:"mailto:hilbertwilliam@gmail.com",icon:"gmail.svg"},{label:"github",url:"https://github.com/billmakes",icon:"github.svg"},{label:"linkedin",url:"https://www.linkedin.com/in/bill-hilbert-414bb5123/",icon:"linkedin.svg"}]})},Pe={class:"flex"};Le.render=function(e,t,o,a,c,d){return l(),n("div",Pe,[(l(!0),n(r,null,i(a.socialLinks,(e=>(l(),n("div",{key:e.label,class:"w-8 h-8 mr-2 mb-2 cursor-pointer hover:shadow-lg bg-gray"},[s("a",{href:e.url},[s("img",{src:`../../../assets/${e.icon}`},null,8,["src"])],8,["href"])])))),128))])};const _e={setup:()=>({CardLayout:Y,SocialButtons:Le})},Be=s("div",{class:"mb-8"},[s("span",{class:"text-3xl font-bold"},"Let's talk ☎️"),s("p",{class:"text-xl font-bold mb-2"}," Reach out to me on any of the platforms below - "),s("p",null,"I will get back to you as soon as I can!")],-1);_e.render=function(e,t,o,a,r,i){return l(),n(a.CardLayout,{class:"mx-auto"},{default:c((()=>[Be,s(a.SocialButtons,{class:"flex justify-center"})])),_:1})};const Se={props:{source:Object},setup:e=>({CardLayout:Y,source:e.source})},je={class:"mt-2 flex sm:flex-row flex-col justify-center content-center mx-auto"},$e={class:"flex flex-col mx-auto my-auto pr-3 text-center"},Ie={class:"italic text-gray-600 font-bold"},Ee={class:"italic text-gray-500"},Re={class:"italic text-gray-500"},qe={class:"italic text-gray-500"},De={class:"list-disc"};Se.render=function(e,t,o,a,d,m){return l(),n("div",je,[s("div",$e,[s("span",Ie,u(a.source.name),1),s("span",Ee,u(a.source.location),1),s("span",Re,u(a.source.title),1),s("span",qe,u(a.source.start)+" - "+u(a.source.end),1)]),s(a.CardLayout,{class:"mx-1"},{default:c((()=>[s("ul",De,[(l(!0),n(r,null,i(a.source.description,((e,t)=>(l(),n("li",{key:t,class:"ml-4 mb-2 text-sm"},u(e),1)))),128))])])),_:1})])};const Te={setup:()=>({CardLayout:Y,CVItem:Se,cv:G,skills:["JavaScript","Vue.js","React.js","Angular","TypeScript","Nuxt.js","Next.js","Webpack","Parcel","Git","Linux","bash"]})},Me={class:"mx-auto text-gray-600 mb-2"},Oe={class:"flex flex-col text-center"},Fe=s("span",{class:"text-3xl font-bold"},"Bill Hilbert",-1),He={class:"text-1xl font-bold text-gray-500"},Ae={class:"flex justify-center flex-start flex-col sm:flex-row mx-5"},Ne={class:"ml-2 mt-2"},Ue=s("div",null,[s("span",{class:"text-lg font-bold"},"Skills")],-1),Ve={class:"list-disc list-inside grid sm:grid-cols-3 grid-cols-2"},We=s("div",null,[s("span",null,"This list is a short summary of my favorite technology used. There are countless skills and technology used when developing! Reach out if you wish to know more.")],-1),ze=s("div",{class:"ml-2 mt-2 flex flex-col"},[s("div",null,[s("span",{class:"text-lg font-bold"},"Contact Info")]),s("span",null,[d("Email: "),s("a",{href:"mailto:hilbertwilliam@gmail.com",class:"underline"},"hilbertwilliam@gmail.com")]),s("span",null,"Location: St. Petersburg, FL")],-1);Te.render=function(e,t,o,a,d,m){return l(),n(r,null,[s("div",Me,[s("div",Oe,[Fe,s("span",He,u(a.cv[0].title),1)])]),s("div",Ae,[s("div",null,[(l(!0),n(r,null,i(a.cv,((e,t)=>(l(),n(a.CVItem,{key:t,source:e},null,8,["source"])))),128))]),s("div",Ne,[s(a.CardLayout,null,{default:c((()=>[Ue,s("ul",Ve,[(l(!0),n(r,null,i(a.skills,((e,t)=>(l(),n("li",{key:t},u(e),1)))),128))])])),_:1}),s(a.CardLayout,{class:"mt-2"},{default:c((()=>[We])),_:1}),s(a.CardLayout,{class:"mt-2"},{default:c((()=>[ze])),_:1})])])],64)};const Je=[{path:"/",name:"home",component:ee},{path:"/about",name:"about",component:ie},{path:"/blog",name:"blog",component:me},{path:"/blog/:id",name:"blog-post",component:fe},{path:"/contact",name:"contact",component:_e},{path:"/cv",name:"cv",component:Te}],Xe=w({history:C(),routes:Je});k(V).use(Xe).mount("#app");