import{r as s,R as H,j as c,F as se,a as t,L as K}from"./app.5fa5d809.js";import{C as V,S as X,I as j,y as G,j as me,n as Z,q as ie,o as b,E as fe,L as ve,v as he,u as W,p as J,$ as q,d as ce,h as _,a as Y,l as ue,O as D,T as L,w as ge,N as xe,b as O,r as de,i as be,e as z,W as ye}from"./transition.47fa68f6.js";import{s as we}from"./use-resolve-button-type.023b8498.js";import{B as Ne,X as Pe}from"./XMarkIcon.89e8a65b.js";var Se=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Se||{}),$e=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))($e||{});let Ee={[0]:e=>({...e,popoverState:W(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,n){return e.button===n.button?e:{...e,button:n.button}},[3](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[4](e,n){return e.panel===n.panel?e:{...e,panel:n.panel}},[5](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},ee=s.exports.createContext(null);ee.displayName="PopoverContext";function U(e){let n=s.exports.useContext(ee);if(n===null){let a=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,U),a}return n}let te=s.exports.createContext(null);te.displayName="PopoverAPIContext";function re(e){let n=s.exports.useContext(te);if(n===null){let a=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,re),a}return n}let ne=s.exports.createContext(null);ne.displayName="PopoverGroupContext";function pe(){return s.exports.useContext(ne)}let ae=s.exports.createContext(null);ae.displayName="PopoverPanelContext";function Ie(){return s.exports.useContext(ae)}function Ce(e,n){return W(n.type,Ee,e,n)}let ke="div",Re=V(function(e,n){var a;let m=`headlessui-popover-button-${j()}`,o=`headlessui-popover-panel-${j()}`,f=s.exports.useRef(null),P=G(n,me(r=>{f.current=r})),S=s.exports.useReducer(Ce,{popoverState:1,button:null,buttonId:m,panel:null,panelId:o,beforePanelSentinel:s.exports.createRef(),afterPanelSentinel:s.exports.createRef()}),[{popoverState:h,button:u,panel:l,beforePanelSentinel:F,afterPanelSentinel:I},x]=S,d=Z((a=f.current)!=null?a:u);s.exports.useEffect(()=>x({type:3,buttonId:m}),[m,x]),s.exports.useEffect(()=>x({type:5,panelId:o}),[o,x]);let v=s.exports.useMemo(()=>{if(!u||!l)return!1;for(let T of document.querySelectorAll("body > *"))if(Number(T==null?void 0:T.contains(u))^Number(T==null?void 0:T.contains(l)))return!0;let r=ie(),i=r.indexOf(u),g=(i+r.length-1)%r.length,C=(i+1)%r.length,B=r[g],A=r[C];return!l.contains(B)&&!l.contains(A)},[u,l]),y=s.exports.useMemo(()=>({buttonId:m,panelId:o,close:()=>x({type:1})}),[m,o,x]),w=pe(),$=w==null?void 0:w.registerPopover,M=b(()=>{var r;return(r=w==null?void 0:w.isFocusWithinPopoverGroup())!=null?r:(d==null?void 0:d.activeElement)&&((u==null?void 0:u.contains(d.activeElement))||(l==null?void 0:l.contains(d.activeElement)))});s.exports.useEffect(()=>$==null?void 0:$(y),[$,y]),fe(d==null?void 0:d.defaultView,"focus",r=>{var i,g,C,B;h===0&&(M()||!u||!l||(g=(i=F.current)==null?void 0:i.contains)!=null&&g.call(i,r.target)||(B=(C=I.current)==null?void 0:C.contains)!=null&&B.call(C,r.target)||x({type:1}))},!0),ve([u,l],(r,i)=>{x({type:1}),ge(i,xe.Loose)||(r.preventDefault(),u==null||u.focus())},h===0);let k=b(r=>{x({type:1});let i=(()=>r?r instanceof HTMLElement?r:"current"in r&&r.current instanceof HTMLElement?r.current:u:u)();i==null||i.focus()}),p=s.exports.useMemo(()=>({close:k,isPortalled:v}),[k,v]),E=s.exports.useMemo(()=>({open:h===0,close:k}),[h,k]),N=e,R={ref:P};return H.createElement(ee.Provider,{value:S},H.createElement(te.Provider,{value:p},H.createElement(he,{value:W(h,{[0]:J.Open,[1]:J.Closed})},q({ourProps:R,theirProps:N,slot:E,defaultTag:ke,name:"Popover"}))))}),Be="button",Me=V(function(e,n){let[a,m]=U("Popover.Button"),{isPortalled:o}=re("Popover.Button"),f=s.exports.useRef(null),P=`headlessui-focus-sentinel-${j()}`,S=pe(),h=S==null?void 0:S.closeOthers,u=Ie(),l=u===null?!1:u===a.panelId,F=G(f,n,l?null:r=>m({type:2,button:r})),I=G(f,n),x=Z(f),d=b(r=>{var i,g,C;if(l){if(a.popoverState===1)return;switch(r.key){case O.Space:case O.Enter:r.preventDefault(),(g=(i=r.target).click)==null||g.call(i),m({type:1}),(C=a.button)==null||C.focus();break}}else switch(r.key){case O.Space:case O.Enter:r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(h==null||h(a.buttonId)),m({type:0});break;case O.Escape:if(a.popoverState!==0)return h==null?void 0:h(a.buttonId);if(!f.current||(x==null?void 0:x.activeElement)&&!f.current.contains(x.activeElement))return;r.preventDefault(),r.stopPropagation(),m({type:1});break}}),v=b(r=>{l||r.key===O.Space&&r.preventDefault()}),y=b(r=>{var i,g;de(r.currentTarget)||e.disabled||(l?(m({type:1}),(i=a.button)==null||i.focus()):(r.preventDefault(),r.stopPropagation(),a.popoverState===1&&(h==null||h(a.buttonId)),m({type:0}),(g=a.button)==null||g.focus()))}),w=b(r=>{r.preventDefault(),r.stopPropagation()}),$=a.popoverState===0,M=s.exports.useMemo(()=>({open:$}),[$]),k=we(e,f),p=e,E=l?{ref:I,type:k,onKeyDown:d,onClick:y}:{ref:F,id:a.buttonId,type:k,"aria-expanded":e.disabled?void 0:a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:d,onKeyUp:v,onClick:y,onMouseDown:w},N=ce(),R=b(()=>{let r=a.panel;if(!r)return;function i(){W(N.current,{[z.Forwards]:()=>D(r,L.First),[z.Backwards]:()=>D(r,L.Last)})}i()});return c(se,{children:[q({ourProps:E,theirProps:p,slot:M,defaultTag:Be,name:"Popover.Button"}),$&&!l&&o&&t(_,{id:P,features:Y.Focusable,as:"button",type:"button",onFocus:R})]})}),Fe="div",Te=X.RenderStrategy|X.Static,Oe=V(function(e,n){let[{popoverState:a},m]=U("Popover.Overlay"),o=G(n),f=`headlessui-popover-overlay-${j()}`,P=ue(),S=(()=>P!==null?P===J.Open:a===0)(),h=b(l=>{if(de(l.currentTarget))return l.preventDefault();m({type:1})}),u=s.exports.useMemo(()=>({open:a===0}),[a]);return q({ourProps:{ref:o,id:f,"aria-hidden":!0,onClick:h},theirProps:e,slot:u,defaultTag:Fe,features:Te,visible:S,name:"Popover.Overlay"})}),Ae="div",De=X.RenderStrategy|X.Static,Le=V(function(e,n){let{focus:a=!1,...m}=e,[o,f]=U("Popover.Panel"),{close:P,isPortalled:S}=re("Popover.Panel"),h=`headlessui-focus-sentinel-before-${j()}`,u=`headlessui-focus-sentinel-after-${j()}`,l=s.exports.useRef(null),F=G(l,n,p=>{f({type:4,panel:p})}),I=Z(l),x=ue(),d=(()=>x!==null?x===J.Open:o.popoverState===0)(),v=b(p=>{var E;switch(p.key){case O.Escape:if(o.popoverState!==0||!l.current||(I==null?void 0:I.activeElement)&&!l.current.contains(I.activeElement))return;p.preventDefault(),p.stopPropagation(),f({type:1}),(E=o.button)==null||E.focus();break}});s.exports.useEffect(()=>{var p;e.static||o.popoverState===1&&((p=e.unmount)!=null?p:!0)&&f({type:4,panel:null})},[o.popoverState,e.unmount,e.static,f]),s.exports.useEffect(()=>{if(!a||o.popoverState!==0||!l.current)return;let p=I==null?void 0:I.activeElement;l.current.contains(p)||D(l.current,L.First)},[a,l,o.popoverState]);let y=s.exports.useMemo(()=>({open:o.popoverState===0,close:P}),[o,P]),w={ref:F,id:o.panelId,onKeyDown:v,onBlur:a&&o.popoverState===0?p=>{var E,N,R,r,i;let g=p.relatedTarget;!g||!l.current||(E=l.current)!=null&&E.contains(g)||(f({type:1}),(((R=(N=o.beforePanelSentinel.current)==null?void 0:N.contains)==null?void 0:R.call(N,g))||((i=(r=o.afterPanelSentinel.current)==null?void 0:r.contains)==null?void 0:i.call(r,g)))&&g.focus({preventScroll:!0}))}:void 0,tabIndex:-1},$=ce(),M=b(()=>{let p=l.current;if(!p)return;function E(){W($.current,{[z.Forwards]:()=>{D(p,L.First)},[z.Backwards]:()=>{var N;(N=o.button)==null||N.focus({preventScroll:!0})}})}E()}),k=b(()=>{let p=l.current;if(!p)return;function E(){W($.current,{[z.Forwards]:()=>{var N,R,r;if(!o.button)return;let i=ie(),g=i.indexOf(o.button),C=i.slice(0,g+1),B=[...i.slice(g+1),...C];for(let A of B.slice())if(((R=(N=A==null?void 0:A.id)==null?void 0:N.startsWith)==null?void 0:R.call(N,"headlessui-focus-sentinel-"))||((r=o.panel)==null?void 0:r.contains(A))){let T=B.indexOf(A);T!==-1&&B.splice(T,1)}D(B,L.First,!1)},[z.Backwards]:()=>D(p,L.Last)})}E()});return H.createElement(ae.Provider,{value:o.panelId},d&&S&&t(_,{id:h,ref:o.beforePanelSentinel,features:Y.Focusable,as:"button",type:"button",onFocus:M}),q({ourProps:w,theirProps:m,slot:y,defaultTag:Ae,features:De,visible:d,name:"Popover.Panel"}),d&&S&&t(_,{id:u,ref:o.afterPanelSentinel,features:Y.Focusable,as:"button",type:"button",onFocus:k}))}),ze="div",je=V(function(e,n){let a=s.exports.useRef(null),m=G(a,n),[o,f]=s.exports.useState([]),P=b(d=>{f(v=>{let y=v.indexOf(d);if(y!==-1){let w=v.slice();return w.splice(y,1),w}return v})}),S=b(d=>(f(v=>[...v,d]),()=>P(d))),h=b(()=>{var d;let v=be(a);if(!v)return!1;let y=v.activeElement;return(d=a.current)!=null&&d.contains(y)?!0:o.some(w=>{var $,M;return(($=v.getElementById(w.buttonId))==null?void 0:$.contains(y))||((M=v.getElementById(w.panelId))==null?void 0:M.contains(y))})}),u=b(d=>{for(let v of o)v.buttonId!==d&&v.close()}),l=s.exports.useMemo(()=>({registerPopover:S,unregisterPopover:P,isFocusWithinPopoverGroup:h,closeOthers:u}),[S,P,h,u]),F=s.exports.useMemo(()=>({}),[]),I=e,x={ref:m};return H.createElement(ne.Provider,{value:l},q({ourProps:x,theirProps:I,slot:F,defaultTag:ze,name:"Popover.Group"}))}),Q=Object.assign(Re,{Button:Me,Overlay:Oe,Panel:Le,Group:je});function Ge({title:e,titleId:n,...a},m){return c("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:m,"aria-labelledby":n},a),children:[e?t("title",{id:n,children:e}):null,t("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"})]})}const We=s.exports.forwardRef(Ge),He=We,le={main:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"},{name:"Accessibility",href:"#"},{name:"Partners",href:"#"}],social:[{name:"Facebook",href:"#",icon:e=>t("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:t("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})},{name:"Instagram",href:"#",icon:e=>t("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:t("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})},{name:"Twitter",href:"#",icon:e=>t("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:t("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"GitHub",href:"#",icon:e=>t("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:t("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"Dribbble",href:"#",icon:e=>t("svg",{fill:"currentColor",viewBox:"0 0 24 24",...e,children:t("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})})}]},oe=[{name:"Product",href:"#"},{name:"Features",href:"#"},{name:"Marketplace",href:"#"},{name:"Company",href:"#"}];function Xe(){return c("div",{className:"min-h-screen bg-gray-900",children:[c("div",{className:"relative overflow-hidden",children:[t(Q,{as:"header",className:"relative",children:({open:e})=>c(se,{children:[t("div",{className:"bg-gray-900 pt-6",children:c("nav",{className:"relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6","aria-label":"Global",children:[c("div",{className:"flex items-center flex-1",children:[c("div",{className:"flex items-center justify-between w-full md:w-auto",children:[c("a",{href:"#",children:[t("span",{className:"sr-only",children:"Workflow"}),t("img",{className:"h-8 w-auto sm:h-10",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:""})]}),t("div",{className:"-mr-2 flex items-center md:hidden",children:c(Q.Button,{className:"bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white",children:[t("span",{className:"sr-only",children:"Open main menu"}),t(Ne,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),t("div",{className:"hidden space-x-8 md:flex md:ml-10",children:oe.map(n=>t("a",{href:n.href,className:"text-base font-medium text-white hover:text-gray-300",children:n.name},n.name))})]}),c("div",{className:"hidden md:flex md:items-center md:space-x-6",children:[t(K,{href:route("login"),className:"text-base font-medium text-white hover:text-gray-300",children:"Log in"}),t(K,{href:route("register"),className:"inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700",children:"Register"})]})]})}),t(ye,{show:e,as:s.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(Q.Panel,{focus:!0,static:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden",children:c("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",children:[c("div",{className:"px-5 pt-4 flex items-center justify-between",children:[t("div",{children:t("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:""})}),t("div",{className:"-mr-2",children:c(Q.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600",children:[t("span",{className:"sr-only",children:"Close menu"}),t(Pe,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),c("div",{className:"pt-5 pb-6",children:[t("div",{className:"px-2 space-y-1",children:oe.map(n=>t("a",{href:n.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50",children:n.name},n.name))}),t("div",{className:"mt-6 px-5",children:t(K,{href:route("register"),className:"block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700",children:"Register"})}),t("div",{className:"mt-6 px-5",children:c("p",{className:"text-center text-base font-medium text-gray-500",children:["Existing customer?"," ",t(K,{href:route("login"),className:"text-gray-900 hover:underline",children:"Login"})]})})]})]})})})]})}),t("main",{children:t("div",{className:"pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden",children:t("div",{className:"mx-auto max-w-7xl lg:px-8",children:c("div",{className:"lg:grid lg:grid-cols-2 lg:gap-8",children:[t("div",{className:"mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center",children:c("div",{className:"lg:py-24",children:[c("a",{href:"#",className:"inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",children:[t("span",{className:"px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full",children:"We're hiring"}),t("span",{className:"ml-4 text-sm",children:"Visit our careers page"}),t(He,{className:"ml-2 w-5 h-5 text-gray-500","aria-hidden":"true"})]}),c("h1",{className:"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl",children:[t("span",{className:"block",children:"A better way to"}),t("span",{className:"block text-indigo-400",children:"Manage Rent"})]}),t("p",{className:"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat."}),t("div",{className:"mt-10 sm:mt-12",children:c("form",{action:"#",className:"sm:max-w-xl sm:mx-auto lg:mx-0",children:[c("div",{className:"sm:flex",children:[c("div",{className:"min-w-0 flex-1",children:[t("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),t("input",{id:"email",type:"email",placeholder:"Enter your email",className:"block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"})]}),t("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:t("button",{type:"submit",className:"block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900",children:"Start free trial"})})]}),c("p",{className:"mt-3 text-sm text-gray-300 sm:mt-4",children:["Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our"," ",t("a",{href:"#",className:"font-medium text-white",children:"terms or service"}),"."]})]})})]})}),t("div",{className:"mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative",children:t("div",{className:"mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0",children:t("img",{className:"w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none",src:"https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg",alt:""})})})]})})})})]}),t("footer",{className:"bg-gray-900",children:c("div",{className:"max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8",children:[t("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer",children:le.main.map(e=>t("div",{className:"px-5 py-2",children:t("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900",children:e.name})},e.name))}),t("div",{className:"mt-8 flex justify-center space-x-6",children:le.social.map(e=>c("a",{href:e.href,className:"text-gray-400 hover:text-gray-500",children:[t("span",{className:"sr-only",children:e.name}),t(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name))}),t("p",{className:"mt-8 text-center text-base text-gray-400",children:"\xA9 2020 Workflow, Inc. All rights reserved."})]})})]})}export{Xe as default};
