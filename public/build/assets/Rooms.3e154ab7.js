import{r as s,j as t,a as r,H as i}from"./app.40c721d9.js";import{A as d,H as n}from"./Header.6c513327.js";import{R as c,M as l}from"./Modal.46f08ffb.js";import{A as u}from"./Alert.34eb94c9.js";import"./XMarkIcon.fca00a69.js";import"./dialog.6390d555.js";import"./transition.330bc84b.js";function w(o){const[a,e]=s.exports.useState(!1);return t(d,{auth:o.auth,errors:o.errors,header:r(n,{back:route("property.index"),title:"Rooms",actionButton:{url:route("property.rooms.create",o.property.id),text:"New Room",icon:"HomeIcon"}}),children:[r(i,{title:"Dashboard"}),t("div",{className:"max-w-7xl m-auto bg-white shadow sm:rounded-md mt-1",children:[r("ul",{className:"divide-y  divide-gray-200",children:o.rooms.map(m=>r(c,{room:m,SetShowRoom:e}))}),o.rooms.length==0&&r(u,{message:"There is no room in this property.",color:"gray",action:{text:"Create Room",url:route("property.rooms.create",o.property.id)}})]}),r(l,{SetShowRoom:e,room:a})]})}export{w as default};