import{u as _,j as r,a as e,H as g}from"./app.bddfa5fc.js";import{A as y}from"./AuthenticatedLayout.cb7a18bd.js";import{T as c,I as n}from"./TextInput.22729ddf.js";import{I as m}from"./InputLabel.2ab8ca71.js";import{P as b}from"./PrimaryButton.4a97dbd7.js";import{C as f}from"./Checkbox.c576ce0f.js";import"./ApplicationLogo.0518b9f7.js";function E(d){const{property:N,room:a}=d,{data:i,setData:o,patch:u,processing:h,errors:t,reset:v,clearErrors:x}=_({name:a.name,description:a.description,rental:a.rental,has_electricity_metered:a.has_electricity_metered,electricity_unit_rate:a.electricity_unit_rate,initial_electricity_units:a.initial_electricity_units,recurring_charges:a.recurring_charges}),l=s=>{o(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)},p=s=>{s.preventDefault(),u(route("property.rooms.update",[a.property_id,a.id]))};return r(y,{auth:d.auth,errors:d.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Room"}),children:[e(g,{title:"Create New Property"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4",children:r("form",{onSubmit:p,children:[r("div",{className:"mb-4",children:[e(m,{forInput:"name",value:"Name"}),e(c,{type:"text",name:"name",value:i.name,className:"mt-1 block w-full "+(t.name?"border-red-500":" "),placeholder:"eg: Room 1",isFocused:!0,handleChange:l}),e(n,{message:t.name,className:"mt-2"})]}),r("div",{className:"mb-4",children:[e(m,{forInput:"description",value:"description (optional)"}),e(c,{type:"text",name:"description",value:i.description,className:"mt-1 block w-full "+(t.description?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:t.description,className:"mt-2"})]}),r("div",{className:"mb-4 w-50",children:[e(m,{forInput:"rental",value:"Rental"}),e(c,{type:"number",name:"rental",value:i.rental,className:"mt-1 block w-full "+(t.rental?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:t.rental,className:"mt-2"})]}),r("div",{className:"mb-4 w-50",children:[e(m,{forInput:"rental",value:"Recurring Charges"}),e(c,{type:"number",name:"recurring_charges",value:i.recurring_charges,className:"mt-1 block w-full flex flex-1"+(t.recurring_charges?"border-red-500":" "),handleChange:l,placeholder:"eg: Water,Municipal charges"}),e(n,{message:t.recurring_charges,className:"mt-2"})]}),e("div",{className:"block mb-4 mt-4",children:r("label",{className:"flex items-center",children:[e(f,{name:"has_electricity_metered",value:i.has_electricity_metered,handleChange:l,checked:i.has_electricity_metered}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Does the room has electricity metered?"})]})}),i.has_electricity_metered&&r("div",{className:"flex flex-row justify-evenly",children:[r("div",{className:"mb-4 w-full mr-2",children:[e(m,{forInput:"electricity_unit_rate",value:"Per Unit Charges"}),e(c,{type:"number",name:"electricity_unit_rate",value:i.electricity_unit_rate,className:"mt-1 block w-full "+(t.electricity_unit_rate?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:t.electricity_unit_rate,className:"mt-2"})]}),r("div",{className:"mb-4 w-full ml-2",children:[e(m,{forInput:"initial_electricity_units",value:"Electricity Meter Units"}),e(c,{type:"number",name:"initial_electricity_units",value:i.initial_electricity_units,className:"mt-1 block w-full "+(t.initial_electricity_units?"border-red-500":" "),isFocused:!0,handleChange:l}),e(n,{message:t.initial_electricity_units,className:"mt-2"})]})]}),e("div",{children:e(b,{processing:h,children:"Update"})})]})})})})]})}export{E as default};
