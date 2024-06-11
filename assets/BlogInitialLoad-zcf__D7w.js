import{c as b,b as u,q as j,A as M,z as E,r as a,Q as C,t as L,d as y,T as N,h as I,j as e,U as P,V as z,W as g,C as R,X as T,n as D,p as O,Y as w,O as S}from"./index-TNn69hIZ.js";import{c as v,u as A,R as B}from"./modal-bywbD2xU.js";import"./index-7kQC0Ccr.js";const W=({className:i})=>{const n=b(),d=u(j),c=u(M),l=u(E),o=a.useRef(null),r=a.useCallback(s=>{s&&s.id!=="music-toggle-switch"&&s.id!=="music-toggle-switch-button"&&s.id!=="music-play-button"&&s.id!=="music-pause-button"&&o.current.play()},[]),m=a.useCallback(s=>{const t=s.target;r(t)},[]),h=a.useCallback(s=>{const t=s.target;r(t)},[]),x=a.useCallback(s=>{const t=s.target;r(t)},[]),p=a.useCallback(s=>{const t=s.target;n(C(t.currentTime))},[]);return a.useEffect(()=>{var s;return c.length===0&&fetch("/api/blog/music").then(t=>{if(t.ok)return t.json();L(t)}).then(t=>{t||y("Music list is null or undefined"),t.length>0&&(t.sort(()=>Math.random()-.5),n(N(t)),o.current.setAttribute("src",t[l]),o.current.load())}).catch(I),(s=o.current)==null||s.addEventListener("timeupdate",p),()=>{var t;(t=o.current)==null||t.removeEventListener("timeupdate",p)}},[]),a.useEffect(()=>(d?(window.addEventListener("click",m),window.addEventListener("keydown",x),window.addEventListener("touchstart",h)):(window.removeEventListener("click",m),window.removeEventListener("keydown",x),window.removeEventListener("touchstart",h)),()=>{window.removeEventListener("click",m),window.removeEventListener("keydown",x),window.removeEventListener("touchstart",h)}),[d]),e.jsx("audio",{id:"music-player",ref:o,controls:!0,onLoadedData:s=>{n(P(s.currentTarget.duration));const t=c[l].indexOf("music/")+6,f=c[l].indexOf(".mp3");if(t!==-1&&f!==-1){const k=c[l].substring(t,f);n(z(k))}},onPause:()=>n(g(!1)),onPlay:()=>n(g(!0)),onEnded:()=>{const s=(l+1)%c.length;n(R(s)),o.current.setAttribute("src",c[s]),o.current.load(),o.current.play()},className:`${i}`,children:e.jsx("source",{type:"audio/mp3"})})},F=({onClick:i,className:n})=>e.jsxs("button",{className:`gsi-material-button ${n}`,onClick:()=>i(),children:[e.jsx("div",{className:"gsi-material-button-state"}),e.jsxs("div",{className:"gsi-material-button-content-wrapper",children:[e.jsx("div",{className:"gsi-material-button-icon",children:e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"block",children:[e.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),e.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),e.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),e.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),e.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]})}),e.jsx("span",{className:"gsi-material-button-contents",children:"Continue with Google"})]})]}),G=()=>{const i=u(r=>r.signInModal.visible),[n,d]=a.useState(v()),c=b(),l=A(),o=u(r=>r.theme.isDarkMode);return a.useEffect(()=>{const r=()=>d(v());return l===!0&&window.addEventListener("resize",()=>r()),()=>window.removeEventListener("resize",r)},[n]),e.jsx(B,{visible:i,onClose:()=>{c(T())},width:n,height:195,className:"",customStyles:{backgroundColor:o?"rgb(24, 24, 27)":"rgb(250, 250, 250)",borderColor:o?"rgb(29, 29, 32)":"rgb(230, 230, 240)",borderWidth:"2px",borderRadius:"22px",padding:"30px 20px 20px 20px"},children:e.jsxs("div",{className:"flex flex-col h-full items-center",children:[e.jsxs("div",{className:"font-semibold text-default-14-dark dark:text-default-12 flex flex-col items-start",children:[e.jsx("p",{className:"text-2xl",children:"Login! 🐶"}),e.jsx("p",{children:"leave your comment!"})]}),e.jsx("p",{className:"mt-auto text-gray-500 text-xs",children:"I do not collect user info for personal use..."}),e.jsx(F,{className:"mt-2",onClick:()=>{window.location.replace("/api/oauth/sign-in?provider=google")}})]})})};function q(){const i=u(D),n=O();return a.useEffect(()=>{i===!0?(document.documentElement.classList.add("dark"),localStorage.theme="dark"):(document.documentElement.classList.remove("dark"),localStorage.theme="light")},[i]),a.useEffect(()=>(w(i,n.pathname),()=>{w(i,n.pathname)}),[n.pathname,i]),e.jsxs(e.Fragment,{children:[e.jsx(W,{className:"absolute invisible"}),e.jsx(G,{}),e.jsx(S,{})]})}export{q as default};
