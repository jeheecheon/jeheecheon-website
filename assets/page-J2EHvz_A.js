import{r as d,j as e,R as j,b as C,s as T,c as k,m as p,t as N,h as v,d as R,e as Q,f as V,g as O}from"./index-TNn69hIZ.js";import{p as F,D as G,S as Z,A as D,a as U}from"./ArticleContent-JXVc7RhW.js";import{S as W,E as $,a as H,C as P,w as b}from"./promiseWrapper-mL7aef-6.js";import{B as A}from"./Button-p_XvX7A8.js";import{A as E}from"./Avatar-E9XtN0nH.js";import{u as M}from"./useIsAuthenticated-stcTE9fR.js";import{S as K}from"./like-filled-0AQwRk_h.js";import{H as Y,n as g,u as y,d as w}from"./Helmet-a-ITVzhj.js";import"./index-7kQC0Ccr.js";const J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAAA3NCSVQICAjb4U/gAAAFG0lEQVR4nO2aT08bRxTA35vddby0tTFVXKVSOQQR0m/QT5Iri9Q2FKlFpKiqkMgFiUrBAVEk/rUS5pqvE0VgI3KgSgNExfZWeB3v7rwejFK1GB6sx2OQ5nfwxdo3b387OztvZnB86yswXIzodQI3HSOIwQhiMIIYjCAGI4jBCGIwghiMIAYjiMEIYjCCGIwgBiOIwQhiMIIYjCAGI4jBCGIwghiMIAYjiMHudQKw5G1UIKydNAI/kjEBgLDQzdjZgXQOnKni496mh73aFyOiubHVg30fCYWFKBAQEFt/ARCQJBkTIQ0OZWa3JrD1n3Z6I6jgrZf2K4hC2MyNE4GMiEiODOWmi+O6EvyXHoxBM6PLu+Wq5ViWw3cLRLActBxrt1ydGV3WkuB/0C1o+tHiu9eB44prvTGI4Lji3etg+tFi11Jrj1ZBM6PLtbdNO5WwUTslam+bmvuRPkEFb/14L0hsp4WdEsd7QcFbV5UViyZBRFTar9hpBc3ZaVHarxBR56GugiZBc2OriNcbdy4CERDF3NiqglhXQJOgg31f2MomMsLGg31fVTSmLQ1tLHkbSConeoiAhEvehrKIF6NDUAVCYSmeBwsLKxCqjdm+IQ1t1E4aKBQLQoG1k4bamG3RISjwI1BeSCEEfqQ6aBt0CJIRKa80EaFV+ncbLV+xLtXhWmZCOgQJC5VP64hA4bzhEnQIcjO2+qdN4GZ0rPbpEJQdSJNUbIgkZQfSamO2RYegHDjKB1QZUw4ctTHbokPQVPExocrqkggISc9ytaZabHAoIyNlhmREg0MZVdEuR5Og2a0JIqmkExEBkZzdmlAQ6wpoEoSII0O5qCE7DxU15MhQTtsmh74VxenieH7YjZodOYqaMj/s6tze0LomPb89mb2XSuwoasrsvdT89qTarC5H965G4cWTu/fdMLjeeEQEYSDv3ncLL550LbX29GBfbH578uGD/jiM45D/9hNBHFIcxg8f9GvuOy3M1jNDzwR9wBxeuN2Y80EMRhCDEcRgBDEYQQxGEIMRxNCbU67PvMU0ZE8hrEMY1KPG32HYIBmdLVwjgLCFk8b0J47bZ/eB8xE4Daj9VNRdiIG2iSIR/Tr2mw9RxQ/84yYAIgIiIsLZrnTr50OpAWfbXiSJCIhaVRtl8qlcxs2A/cPWN3qKj+4K+sVbAPj4uFb3j5tCIAoUArGD15okSEkkSUrK5FP5bB/C6c/FaXUp/5+uCIojWfh6849jv1GVwm7VosobAZIgY5IRpfvFF/nM9O/fWrb6ZhQLeu6t/AXyaK9uWaJLXs7TMhXH8rPhvk9B/Fj8XmFwZYKWvJU/G9HJQcN2hJ5N4fPIiKJQDgymP0/bU4o0qXnET72VV+VT/zBMuVav7ACAsDHlWv5h+Kp8+tRbURKz0x607K3tHPgyAsvpmZe2xCEJG74czEwWv+skTkc9aMFbe1muAeFNswMAloNA+LJcW/DWOomTXNAzb223VHVcoWckTgAKcFyxW6o+68BRwptb8TZL5Wqqz0rcsDZSfVapXF3xNpNdnlDQzpuqc+cW2Gnh3LF23lSTXZtEUMHbCAN5Y9+s86CAMJCFROeqk9zlYb1uObdHDwAAWI44rNcTXJjkPv2j9906l9k9EPyj9wmuSyJIxuqP9XabxMeGE70pt83OGYnSvmVDiX6MIAYjiMEIYjCCGIwgBiOIwQhiMIIYjCAGI4jBCGIwghiMIAYjiMEIYjCCGIwghn8AO43uyjW7PsoAAAAASUVORK5CYII=",X=({className:a,content:s,handleType:r,onSelect:i,onClick:o,disabled:l,placeholder:n="Write a comment..."})=>{const c=d.useRef(null),t=d.useRef(null);return d.useEffect(()=>{c.current.value=t.current.value,c.current.style.height="auto",t.current.style.height=c.current.scrollHeight+"px"},[s]),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("textarea",{ref:c,className:"invisible w-full overflow-y-hidden",rows:1}),e.jsx("textarea",{ref:t,value:s,onChange:r,maxLength:700,rows:1,onClick:o,className:`${a} w-full relative bottom-4 overflow-y-hidden`,onSelect:i,disabled:l,placeholder:n})]})};function q(){return e.jsxs("svg",{width:"45px",height:"45px",viewBox:"0 0 128 128","data-name":"Layer 1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:".cls-1{fill:#a7aece;}.cls-2{fill:#ffffff;opacity:0.3;}.cls-3{fill:#7f3838;}.cls-4{fill:#bc5b57;}.cls-5{fill:#ffd8c9;}.cls-10,.cls-6,.cls-9{fill:none;stroke-linecap:round;}.cls-10,.cls-6{stroke:#393c54;stroke-linejoin:round;}.cls-6{stroke-width:3px;}.cls-7{fill:#393c54;}.cls-8{fill:#515570;}.cls-9{stroke:#ffffff;stroke-miterlimit:10;stroke-width:2px;opacity:0.1;}.cls-10{stroke-width:6px;}"}})}),e.jsx("title",{}),e.jsx("circle",{className:"cls-1",cx:"64",cy:"64",r:"60"}),e.jsx("circle",{className:"cls-2",cx:"64",cy:"64",r:"48"}),e.jsx("path",{className:"cls-3",d:"M40,22A10,10,0,0,0,30,32v81.43a59.62,59.62,0,0,0,20,8.91V32A10,10,0,0,0,40,22Z"}),e.jsx("path",{className:"cls-4",d:"M107.85,85.85c0-14.49-9.1-25-21.9-28.94l2-3.31a.59.59,0,0,0-.58-.9l-6,.82a.59.59,0,0,1-.54-1l2.66-3.2a.59.59,0,0,0-.54-1,100,100,0,0,0-21.07,5.4A35,35,0,0,0,40.15,85.85v3.22c0,15.48-1.65,21.18-6.36,26.76h0a59.94,59.94,0,0,0,72-8.77l0-.16A94.24,94.24,0,0,0,107.85,85.85Z"}),e.jsx("path",{className:"cls-5",d:"M88.74,93.46a6.31,6.31,0,0,1-5-7.63,6.55,6.55,0,0,1,7.58-4.72l5.91,1A.8.8,0,0,0,98,81c-3.89-7-13.76-12.64-24-12.64S53.88,74,50,81a.8.8,0,0,0,.83,1.18l5.91-1a6.55,6.55,0,0,1,7.58,4.72,6.31,6.31,0,0,1-5.05,7.63L51.09,94.9a.8.8,0,0,0-.53,1.23c3.23,5,10.2,8.42,23.44,8.42s20.21-3.38,23.44-8.42a.8.8,0,0,0-.53-1.23Z"}),e.jsx("path",{className:"cls-6",d:"M81.89,92.19a9,9,0,0,1-2.77,2.21,11.61,11.61,0,0,1-10.24,0"}),e.jsx("path",{className:"cls-7",d:"M79.12,86.62c0,2.83-2.29,4.25-5.12,4.25s-5.12-1.42-5.12-4.25C68.88,85,79.12,84.75,79.12,86.62Z"}),e.jsx("path",{className:"cls-7",d:"M57.33,87.48l3.05-.73a.71.71,0,0,1,.89.68,4,4,0,0,1-4.28,4,3.9,3.9,0,0,1-3-1.84,3.94,3.94,0,0,1,5.53-5.37.73.73,0,0,1,.08,1.11Z"}),e.jsx("path",{className:"cls-7",d:"M90.4,87.48l3-.73a.72.72,0,0,1,.89.68,4,4,0,0,1-4.29,4,3.88,3.88,0,0,1-3-1.84,3.94,3.94,0,0,1,5.52-5.37.72.72,0,0,1,.09,1.11Z"}),e.jsx("path",{className:"cls-7",d:"M92,29H15.28A59.76,59.76,0,0,0,7.09,45H92a8,8,0,0,0,0-16Z"}),e.jsx("circle",{className:"cls-8",cx:"92",cy:"37",r:"8"}),e.jsx("circle",{className:"cls-9",cx:"92",cy:"37",r:"4.31"}),e.jsx("line",{className:"cls-10",x1:"13",x2:"20.5",y1:"42",y2:"49.5"}),e.jsx("line",{className:"cls-10",x1:"66",x2:"74.38",y1:"32.1",y2:"23.72"})]})}const S=j.memo(({postId:a,replyingTo:s,handleCancelClicked:r,refreshComments:i,className:o})=>{const l=C(T),n=M(),c=k(),[t,f]=d.useState(""),u=m=>{n===!1?c(p()):f(m.currentTarget.value)},h=()=>{if(n===!1){c(p());return}fetch(`/api/blog/post/${a}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:t,parent_comment_id:s})}).then(m=>{m.ok?(i(),f("")):N(m)}).catch(m=>{v(m),alert("Failed to upload the comment..")}).finally(()=>r&&r())};return e.jsxs("div",{className:`rounded-lg flex flex-col w-full
                px-4 py-3 bg-default-4 dark:bg-body  ${o}`,children:[e.jsxs("div",{className:"flex w-full gap-3",children:[e.jsx(E,{avatar:n&&l.avatar?l.avatar:void 0,size:45,children:e.jsx(q,{})}),e.jsx(X,{content:t,handleType:u,className:`focus:outline-none resize-none\r
                        border-b-[1px] border-slate-500 rounded-none\r
                        bg-transparent`})]}),e.jsxs("div",{className:"flex items-center justify-end w-full gap-3 text-sm flex-wrap",children:[e.jsx(A,{onClick:h,className:"text-orange-400 dark:text-orange-400 font-bold dark:font-normal text-sm",children:"Upload"}),s&&e.jsx(A,{onClick:()=>{f(""),r!==void 0&&r()},children:"Cancel"})]})]})}),z=a=>(a.forEach(s=>s.UploadedAt=new Date(Date.parse(s.UploadedAt.toString()))),a),_=a=>{a.sort((o,l)=>o.UploadedAt.getTime()-l.UploadedAt.getTime());const s=new Map;for(const o of a){const l=o.ParentCommentId||"";s.has(l)||s.set(l,[]),s.get(l).push(o)}const r=[],i=(o,l)=>{const n=s.get(o)||[];for(const c of n)c.depth=l,r.push(c),i(c.Id,l+1)};return i("",0),r},ee=a=>{const r=new Date().getTime()-a.getTime(),i=60*1e3,o=i*60,l=o*24,n=l*30,c=l*365;if(r<i){let t=Math.floor(r/1e3);return t=t<0?0:t,`${t} ${t===1?"second":"seconds"} ago`}else if(r<o){let t=Math.floor(r/i);return t=t<0?0:t,`${t} ${t===1?"minute":"minutes"} ago`}else if(r<l){let t=Math.floor(r/o);return t=t<0?0:t,`${t} ${t===1?"hour":"hours"} ago`}else if(r<n){let t=Math.floor(r/l);return t=t<0?0:t,`${t} ${t===1?"day":"days"} ago`}else if(r<c){let t=Math.floor(r/n);return t=t<0?0:t,`${t} ${t===1?"month":"months"} ago`}else{let t=Math.floor(r/c);return t=t<0?0:t,`${t} ${t===1?"year":"years"} ago`}};function I({children:a,onClick:s,className:r}){return e.jsx("button",{type:"button",className:`flex flex-row rounded justify-between items-center w-fit cursor-pointer
            border-2 py-[3px] px-2 text-xs gap-2 text-default-17-dark dark:text-default-15
            bg-default-1 dark:bg-default-3-dark border-default-6 dark:border-default-8-dark ${r}`,onClick:s,children:a})}const te=j.memo(({postId:a,comment:s,refreshComments:r})=>{const i=k(),o=M(),l=d.useRef(F(G.sanitize(s.Content))),[n,c]=d.useState(s.HasLiked),[t,f]=d.useState(!1),u=d.useRef(!1),[h,m]=d.useState(s.LikeCnt),B=()=>{if(u.current!==!0){if(o===!1){i(p());return}u.current=!0,fetch(`/api/blog/comment/${s.Id}/has-liked`,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(!n)}).then(x=>{if(x.ok)return x.json();N(x)}).then(x=>{n==null&&R("has_liked is null or undefined"),c(x),m(h+(x?1:-1))}).catch(v).finally(()=>{u.current=!1})}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row auto-cols-min rounded-lg",children:[s.ParentCommentId&&e.jsx("div",{className:"flex flex-row",children:Array.from({length:s.depth}).map((x,L)=>e.jsx("div",{className:"w-0 border-r-[1.8px] mr-[0.8rem] md:mr-4 lg:mr-6 border-default-8 dark:border-default-10-dark"},L))}),e.jsxs("div",{className:"py-4 w-full space-y-3",children:[e.jsxs("div",{className:"w-full flex flex-row flex-nowrap",children:[e.jsx(E,{avatar:s.Avatar?s.Avatar:J,size:38}),e.jsxs("div",{className:"flex flex-col ml-2 justify-center text-sm md:text-base",children:[e.jsxs("div",{className:"flex flex-row flex-wrap items-center",children:[e.jsx("span",{className:`w-fit border rounded-2xl mr-1 px-[7px] text-[0.7rem] break-all
                                    text-center
                                    ${s.Email!=="jeheecheon@gmail.com"&&"hidden"} border-orange-400 text-orange-400`,children:"Site Owner"}),e.jsx("span",{className:"text-default-18-dark text-xs break-all",children:ee(s.UploadedAt)})]}),e.jsx("p",{className:"dark:text-default-14 text-[0.8rem] break-all",children:s.Email})]})]}),e.jsx("div",{className:`min-h-[50px] py-2 px-3 rounded-lg text-sm md:text-base break-all\r
                        bg-default-4 dark:bg-body dark:text-default-14 w-full`,children:l.current}),e.jsxs("div",{className:"flex flex-row flex-wrap gap-3",children:[e.jsxs(I,{onClick:B,children:[n?e.jsx(K,{className:"fill-red-500"}):e.jsx(Z,{className:"fill-gray-500 dark:fill-gray-500"}),e.jsx("span",{children:h})]}),e.jsxs(I,{onClick:()=>{if(o===!1){i(p());return}f(!t)},children:[e.jsx(W,{className:`transition-colors duration-500 ${t?"fill-orange-500":"fill-gray-500 dark:fill-gray-500"}`}),e.jsx("span",{children:"Reply"})]})]})]})]}),e.jsx(S,{postId:a,replyingTo:s.Id,handleCancelClicked:()=>f(!1),refreshComments:r,className:`my-2 ${t?"opacity-100 block":"opacity-0 absolute left-0 w-fit invisible"} transition-opacity duration-1000`})]})}),se=j.memo(({className:a,postId:s,commentsAwaiter:r,refreshComments:i})=>{const o=d.useMemo(()=>{const l=r.Await();return _(z(l.map(n=>n)))},[r]);return e.jsxs("div",{className:`max-w-[1024px] w-full flex flex-col mb-4
                ${a}`,children:[e.jsx("div",{className:"mb-2 border-b-2 pb-1 border-b-default-13 dark:border-b-default-18-dark",children:e.jsxs("p",{className:"pl-2 text-base md:text-xl text-orange-400 font-ligh",children:[o.length," Comments"]})}),e.jsx(S,{postId:s,refreshComments:i,className:"mt-2 mb-[60px]"}),o.map(l=>e.jsx(te,{comment:l,postId:s,refreshComments:i},l.Id))]})}),ae=j.memo(({post:a,commentsAwaiter:s,refreshComments:r})=>e.jsxs(D,{children:[e.jsx(U,{post:a}),e.jsx("div",{className:"max-w-[1024px] w-full px-3",children:e.jsx($,{fallback:e.jsx(H,{children:"Failed to load comments for this post..."}),children:e.jsx(d.Suspense,{fallback:e.jsx(Q,{textSize:"text-sm",children:"Loading Comments... 🐶"}),children:e.jsx(se,{className:"",postId:a.Id,commentsAwaiter:s,refreshComments:r})})})})]})),fe=()=>{const a=V(),s=d.useMemo(()=>`/api/blog/post/${a.Id}/comments`,[a.Id]),[r,i]=d.useState(P());d.useEffect(()=>{i(b(fetch(s)))},[s]);const o=C(n=>n.category.leafCategories),l=d.useMemo(()=>O(o.find(n=>n.Id===a.CategoryId)),[o,a.CategoryId]);return e.jsxs(e.Fragment,{children:[e.jsx(ae,{post:a,commentsAwaiter:r,refreshComments:()=>i(b(fetch(s)))}),e.jsxs(Y,{children:[e.jsxs("title",{children:[a.Title," | ",g]}),e.jsx("link",{rel:"canonical",href:`${y}/blog/post/${a.Id}`}),e.jsx("meta",{name:"description",content:a.Title}),e.jsx("meta",{name:"keywords",content:`jeheecheon, tech, blog, ${l}`}),e.jsx("meta",{name:"author",content:"jeheecheon"}),"/",e.jsx("meta",{property:"og:title",content:`${a.Title} | ${g}`}),e.jsx("meta",{property:"og:description",content:a.Title}),e.jsx("meta",{property:"og:image",content:a.Cover?a.Cover:w}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"jeheecheon"}),e.jsx("meta",{property:"og:locale",content:"ko_KR"}),e.jsx("meta",{property:"og:url",content:`${y}/blog/post/${a.Id}`}),e.jsx("meta",{name:"twitter:title",content:`${a.Title} | ${g}`}),e.jsx("meta",{name:"twitter:card",content:"summary"}),e.jsx("meta",{name:"twitter:description",content:a.Title}),e.jsx("meta",{name:"twitter:image",content:w})]})]})};export{fe as default};
