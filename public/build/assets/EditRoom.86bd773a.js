import{u as _,j as a,a as e,H as y}from"./app.5fa5d809.js";import{A as g,H as b}from"./Header.9ef53ecb.js";import{T as c,I as n}from"./TextInput.8fff9628.js";import{I as m}from"./InputLabel.9cb2bf52.js";import{P as f}from"./PrimaryButton.10b0aabd.js";import{C as N}from"./Checkbox.c1a45862.js";import"./XMarkIcon.89e8a65b.js";function E(o){const{property:v,room:t}=o,{data:i,setData:d,patch:u,processing:h,errors:r,reset:x,clearErrors:w}=_({name:t.name,description:t.description,rental:t.rental,has_electricity_metered:t.has_electricity_metered,electricity_unit_rate:t.electricity_unit_rate,initial_electricity_units:t.initial_electricity_units,recurring_charges:t.recurring_charges}),l=s=>{d(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)},p=s=>{s.preventDefault(),u(route("property.rooms.update",[t.property_id,t.id]))};return a(g,{auth:o.auth,errors:o.errors,header:e(b,{back:route("property.rooms.index",t.property_id),title:"Edit Room Details"}),children:[e(y,{title:"Create New Property"}),e("div",{className:"py-1",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4",children:a("form",{onSubmit:p,children:[a("div",{className:"mb-4",children:[e(m,{forInput:"name",value:"Name"}),e(c,{type:"text",name:"name",value:i.name,className:"mt-1 block w-full "+(r.name?"border-red-500":" "),placeholder:"eg: Room 1",isFocused:!0,handleChange:l}),e(n,{message:r.name,className:"mt-2"})]}),a("div",{className:"mb-4",children:[e(m,{forInput:"description",value:"description (optional)"}),e(c,{type:"text",name:"description",value:i.description,className:"mt-1 block w-full "+(r.description?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:r.description,className:"mt-2"})]}),a("div",{className:"mb-4 w-50",children:[e(m,{forInput:"rental",value:"Rental"}),e(c,{type:"number",name:"rental",value:i.rental,className:"mt-1 block w-full "+(r.rental?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:r.rental,className:"mt-2"})]}),a("div",{className:"mb-4 w-50",children:[e(m,{forInput:"rental",value:"Recurring Charges"}),e(c,{type:"number",name:"recurring_charges",value:i.recurring_charges,className:"mt-1 block w-full flex flex-1"+(r.recurring_charges?"border-red-500":" "),handleChange:l,placeholder:"eg: Water,Municipal charges"}),e(n,{message:r.recurring_charges,className:"mt-2"})]}),e("div",{className:"block mb-4 mt-4",children:a("label",{className:"flex items-center",children:[e(N,{name:"has_electricity_metered",value:i.has_electricity_metered,handleChange:l,checked:i.has_electricity_metered}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Does the room has electricity metered?"})]})}),i.has_electricity_metered&&a("div",{className:"flex flex-row justify-evenly",children:[a("div",{className:"mb-4 w-full mr-2",children:[e(m,{forInput:"electricity_unit_rate",value:"Per Unit Charges"}),e(c,{type:"number",name:"electricity_unit_rate",value:i.electricity_unit_rate,className:"mt-1 block w-full "+(r.electricity_unit_rate?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:r.electricity_unit_rate,className:"mt-2"})]}),a("div",{className:"mb-4 w-full ml-2",children:[e(m,{forInput:"initial_electricity_units",value:"Electricity Meter Units"}),e(c,{type:"number",name:"initial_electricity_units",value:i.initial_electricity_units,className:"mt-1 block w-full "+(r.initial_electricity_units?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:r.initial_electricity_units,className:"mt-2"})]})]}),e("div",{children:e(f,{processing:h,children:"Update"})})]})})})})]})}export{E as default};