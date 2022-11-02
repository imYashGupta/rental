import{r as s,j as o,a as r,L as d,H as l}from"./app.e05925ea.js";import{A as n,H as m}from"./Header.52815ba2.js";import{R as c,M as h}from"./Modal.718d00a7.js";import"./XMarkIcon.72e5f815.js";import"./transition.7e499975.js";function u({title:e,titleId:a,...t},i){return o("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),children:[e?r("title",{id:a,children:e}):null,r("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})]})}const f=s.exports.forwardRef(u),x=f;function p({color:e,message:a,action:t}){return r("div",{className:`rounded-md bg-${e}-50 p-4`,children:o("div",{className:"flex",children:[r("div",{className:"flex-shrink-0",children:r(x,{className:`h-5 w-5 text-${e}-400`,"aria-hidden":"true"})}),o("div",{className:"ml-3 flex-1 md:flex md:justify-between",children:[r("p",{className:`text-sm text-${e}-700`,children:a}),r("p",{className:"mt-3 text-sm md:mt-0 md:ml-6",children:o(d,{as:"a",href:t.url,className:`whitespace-nowrap font-medium text-blue-700 hover:text-${e}-600`,children:[t.text," ",r("span",{"aria-hidden":"true",children:"\u2192"})]})})]})]})})}function g(e){const[a,t]=s.exports.useState(!1);return o(n,{auth:e.auth,errors:e.errors,header:r(m,{back:route("property.index"),title:"Rooms",actionButton:{url:route("property.rooms.create",e.property.id),text:"New Room",icon:"HomeIcon"}}),children:[r(l,{title:"Dashboard"}),o("div",{className:"max-w-7xl m-auto bg-white shadow sm:rounded-md mt-1",children:[r("ul",{className:"divide-y  divide-gray-200",children:e.rooms.map(i=>r(c,{room:i,SetShowRoom:t}))}),e.rooms.length==0&&r(p,{message:"There is no room in this property.",color:"gray",action:{text:"Create Room",url:route("property.rooms.create",e.property.id)}})]}),r(h,{SetShowRoom:t,room:a})]})}export{g as default};
