import{u as h,j as s,a as e,H as g}from"./app.5fa5d809.js";import{A as b,H as f}from"./Header.9ef53ecb.js";import{T as m,I as l}from"./TextInput.8fff9628.js";import{I as n}from"./InputLabel.9cb2bf52.js";import{P as x}from"./PrimaryButton.10b0aabd.js";import"./XMarkIcon.89e8a65b.js";function P(t){const{data:d,setData:c,post:u,processing:i,errors:r,reset:N,clearErrors:y}=h({name:"",address:""}),o=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},p=a=>{a.preventDefault(),u(route("property.store"))};return console.log(r.address),s(b,{auth:t.auth,errors:t.errors,header:e(f,{back:route("dashboard"),title:"Create New Property"}),children:[e(g,{title:"Create New Property"}),e("div",{className:"py-1",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4",children:s("form",{onSubmit:p,children:[s("div",{className:"mb-4",children:[e(n,{forInput:"name",value:"Name"}),e(m,{type:"text",name:"name",value:d.name,className:"mt-1 block w-full "+(r.name?"border-red-500":" "),autoComplete:"username",isFocused:!0,handleChange:o}),e(l,{message:r.name,className:"mt-2"})]}),s("div",{className:"mb-4",children:[e(n,{forInput:"address",value:"Address"}),e(m,{type:"text",name:"address",value:d.address,className:"mt-1 block w-full "+(r.address?"border-red-500":" "),isFocused:!0,handleChange:o}),e(l,{message:r.address,className:"mt-2"})]}),e("div",{children:e(x,{processing:i,children:"Create"})})]})})})})]})}export{P as default};
