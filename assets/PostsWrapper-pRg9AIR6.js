import{b as l,j as e,f as c,R as i,r as n,s as m,c as d,L as x,d as p,e as g,g as h,H as j}from"./index-1FnqgYnk.js";import{S as u,C as f,w,E as y,a as b}from"./ErrorMessageWrapper-XAuB3_2n.js";import{S as $}from"./like-filled-V4CII7Sh.js";const v=({className:t,post:s})=>{const a=l(r=>r.category.leafCategories);return e.jsxs("article",{className:`h-fit w-full cursor-pointer py-5 md:py-6 px-2 ${t}`,children:[e.jsx("div",{className:`flex justify-between text-slate-400 dark:text-slate-500 text-[0.69rem]\r
                group-hover:scale-[104%] transition-all duration-1000`,children:s.UploadedAt.toLocaleDateString()}),e.jsx("div",{className:`font-semibold text-lg sm:text-xl break-all transition-all duration-1000 \r
                text-gray-600/80 dark:text-default-13 group-hover:scale-[104%] md:group-hover:scale-[106%] \r
                group-hover:text-gray-600 dark:group-hover:text-default-5`,children:s.Title}),e.jsxs("div",{className:`flex flex-row justify-start items-end mt-2 text-stone-500 dark:text-default-14\r
                group-hover:scale-[104%] transition-all duration-1000`,children:[e.jsx("div",{className:"text-orange-400/80 dark:text-orange-400 font-medium text-pretty text-[0.8rem]",children:a&&c(a.find(r=>r.Id===s.CategoryId))}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx(u,{className:"fill-orange-400 dark:fill-orange-500"}),e.jsx("span",{className:"text-sm w-[1.0625rem]",children:s.CommentCnt})]}),e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx($,{className:"fill-orange-500 dark:fill-red-500"}),e.jsx("span",{className:"text-sm w-[1.0625rem]",children:s.LikeCnt})]})]})]})]})},k=i.memo(({postsAwaiter:t,className:s})=>{const a=t.Await(),r=n.useMemo(()=>m(d([...a])),[a]);return e.jsx("nav",{className:`flex flex-col items-center mt-[1.875rem] md:mt-[3.125rem] w-full
                    transition-opacity duration-1000 animate-fade-in-bouncing ${s}`,children:r.map(o=>e.jsx(x,{to:`/post/${o.Id}/${p(o.Title)}`,className:"w-full border-b-[0.0625rem] dark:border-default-12-dark border-default-10 group",preventScrollReset:!1,children:e.jsx(v,{post:o})},o.Id))})}),P=()=>{const{category:t,page:s}=g(),a=n.useMemo(()=>t===void 0?`https://jeheecheon.azurewebsites.net/api/blog/recent-posts/pages/${s}`:`https://jeheecheon.azurewebsites.net/api/blog/categories/${t}/pages/${s}`,[t,s]),[r,o]=n.useState(f());return n.useEffect(()=>{o(w(fetch(a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("jwt")}`}})))},[a]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto max-w-[800px]",children:[e.jsxs("h1",{className:"w-full text-left text-balance animate-fade-in transition-opacity duration-1000",children:[e.jsx("p",{className:"text-gray-500/85 dark:text-default-8 text-sm md:text-base font-[600]",children:t?"CATEGORY":"POSTS"}),e.jsx("p",{className:"text-orange-400/70 dark:text-orange-400/90 text-xl sm:text-2xl md:text-3xl uppercase font-[600]",children:t||"recently published"})]}),e.jsx(y,{fallback:e.jsx(b,{children:"404 Not Found Page"}),children:e.jsx(n.Suspense,{fallback:e.jsx(h,{children:"Posts Loading..!"}),children:e.jsx(k,{postsAwaiter:r})})}),e.jsx("div",{className:"h-[3.125rem]"})]}),e.jsxs(j,{children:[e.jsxs("title",{children:[t||"Recent posts"," |"," ","jeheecheon"]}),e.jsx("link",{rel:"canonical",href:`https://blog.jeheecheon.com/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"keywords",content:`jeheecheon, tech, blog, posts, ${t}`}),e.jsx("meta",{name:"author",content:"jeheecheon"}),e.jsx("meta",{property:"og:title",content:`${t?t+" posts":"Recent posts"} | ${name}`}),e.jsx("meta",{property:"og:description",content:`${t?t+" posts":"Recent posts"} | ${name}`}),e.jsx("meta",{property:"og:image",content:"https://jeheecheon.s3.ap-northeast-2.amazonaws.com/blog/defaults/images/cover.jpg"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"jeheecheon"}),e.jsx("meta",{property:"og:locale",content:"ko_KR"}),e.jsx("meta",{property:"og:url",content:`https://blog.jeheecheon.com/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"twitter:title",content:t||`Recent posts | ${name}`}),e.jsx("meta",{name:"twitter:card",content:"summary"}),e.jsx("meta",{name:"twitter:description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"twitter:image",content:"https://jeheecheon.s3.ap-northeast-2.amazonaws.com/blog/defaults/images/cover.jpg"})]})]})};export{P as default};
