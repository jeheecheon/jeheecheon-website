import{b as m,j as e,P as x,R as d,r as n,K as p,J as g,L as u,Q as f,T as h,f as j,H as w}from"./index-WVXWilWm.js";import{S as y,C as $,w as v,E as b,a as k}from"./promiseWrapper-qnG_swLU.js";import{S as N}from"./like-filled-gCqxKSyy.js";import{n as l,u as i,d as c}from"./siteInfo-GfiQN_KH.js";const S=({className:t,post:s})=>{const a=m(r=>r.category.leafCategories);return e.jsxs("article",{className:`h-fit w-full cursor-pointer py-6 px-2 ${t}`,children:[e.jsx("div",{className:`flex justify-between text-slate-400 dark:text-slate-500 text-[0.69rem]\r
            group-hover:scale-[104%] transition-all duration-1000`,children:s.UploadedAt.toLocaleDateString()}),e.jsx("div",{className:`font-semibold text-lg sm:text-xl break-all transition-all duration-1000 \r
                text-gray-500/95 dark:text-default-13 group-hover:scale-[104%] md:group-hover:scale-[106%] \r
                group-hover:text-gray-600/85 dark:group-hover:text-default-5`,children:s.Title}),e.jsxs("div",{className:`flex flex-row justify-start items-end mt-2 text-stone-500 dark:text-default-14\r
            group-hover:scale-[104%] transition-all duration-1000`,children:[e.jsx("div",{className:"text-orange-400/70 dark:text-orange-400 font-medium text-pretty text-[0.8rem]",children:a&&x(a.find(r=>r.Id===s.CategoryId))}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx(y,{className:"fill-orange-400 dark:fill-orange-500"}),e.jsx("span",{className:"text-sm w-[17px]",children:s.CommentCnt})]}),e.jsxs("div",{className:"flex flex-row items-center gap-1 font-[500]",children:[e.jsx(N,{className:"fill-orange-500 dark:fill-red-500"}),e.jsx("span",{className:"text-sm w-[17px]",children:s.LikeCnt})]})]})]})]})},C=d.memo(({postsAwaiter:t,className:s})=>{const a=t.Await(),r=n.useMemo(()=>p(g([...a])),[a]);return e.jsx("nav",{className:`flex flex-col items-center mt-[30px] md:mt-[50px] w-full
                    transition-opacity duration-1000 animate-fade-in ${s}`,children:r.map(o=>e.jsx(u,{to:`/blog/post/${o.Id}/${f(o.Title)}`,className:`w-full border-b-[1px] dark:border-default-12-dark border-default-10 \r
                    group`,preventScrollReset:!1,children:e.jsx(S,{post:o})},o.Id))})}),I=()=>{const{category:t,page:s}=h(),a=n.useMemo(()=>t===void 0?`https://jeheecheon.azurewebsites.net/api/blog/recent-posts/pages/${s}`:`https://jeheecheon.azurewebsites.net/api/blog/categories/${t}/pages/${s}`,[t,s]),[r,o]=n.useState($());return n.useEffect(()=>{o(v(fetch(a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("jwt")}`}})))},[a]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto max-w-[800px] min-h-[35vh]",children:[e.jsxs("h1",{className:"w-full text-left text-balance pt-[0px] animate-fade-in transition-opacity duration-1000",children:[e.jsx("p",{className:"text-gray-500/85 dark:text-default-8 text-sm md:text-base font-[600]",children:t?"CATEGORY":"POSTS"}),e.jsx("p",{className:"text-orange-400/70 dark:text-orange-400/90 text-xl sm:text-2xl md:text-3xl uppercase font-[600]",children:t||"recently published"})]}),e.jsx(b,{fallback:e.jsx(k,{children:"404 Not Found Page"}),children:e.jsx(n.Suspense,{fallback:e.jsx(j,{children:"Posts Loading..!"}),children:e.jsx(C,{postsAwaiter:r})})}),e.jsx("div",{className:"h-[50px]"})]}),e.jsxs(w,{children:[e.jsxs("title",{children:[t||"Recent posts"," | ",l]}),e.jsx("link",{rel:"canonical",href:`${i}/blog/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"keywords",content:`jeheecheon, tech, blog, posts, ${t}`}),e.jsx("meta",{name:"author",content:"jeheecheon"}),e.jsx("meta",{property:"og:title",content:`${t?t+" posts":"Recent posts"} | ${l}`}),e.jsx("meta",{property:"og:description",content:`${t?t+" posts":"Recent posts"} | ${l}`}),e.jsx("meta",{property:"og:image",content:c}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:"jeheecheon"}),e.jsx("meta",{property:"og:locale",content:"ko_KR"}),e.jsx("meta",{property:"og:url",content:`${i}/blog/${t?"categories/"+t:"recent-posts"}/pages/${s}`}),e.jsx("meta",{name:"twitter:title",content:t||`Recent posts | ${l}`}),e.jsx("meta",{name:"twitter:card",content:"summary"}),e.jsx("meta",{name:"twitter:description",content:`${t?t+" posts":"Recent posts"}`}),e.jsx("meta",{name:"twitter:image",content:c})]})]})};export{I as default};
