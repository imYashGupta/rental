import{r as i,j as t,a as r,F as o,d as c,H as m}from"./app.40c721d9.js";import{T as u,A as h,H as x}from"./Header.6c513327.js";import{A as f}from"./Alert.34eb94c9.js";import"./XMarkIcon.fca00a69.js";function p({title:e,titleId:a,...s},l){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":a},s),children:[e?r("title",{id:a,children:e}):null,r("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"})]})}const v=i.exports.forwardRef(p),b=v;function w({title:e,titleId:a,...s},l){return t("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":a},s),children:[e?r("title",{id:a,children:e}):null,r("path",{fillRule:"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",clipRule:"evenodd"})]})}const g=i.exports.forwardRef(w),y=g;function N({transaction:e,showDelete:a}){const[s,l]=i.exports.useState(!1);return console.log(a),r(o,{children:t("div",{className:"list-items border-b  bg-white shadow-sm sm:rounded-lg my-1 md:p-6 p-4 cursor-pointer",onClick:()=>l(n=>!n),children:[t("div",{className:"flex flex-row items-center justify-between ",children:[t("div",{children:[t("h2",{className:"font-semibold ",children:[e.rent_month," ",t("span",{className:"text-sm font-normal",children:["(Paid on"," ",new Date(e.created_at).toLocaleDateString(),")"]})," ","- \u20B9",e.amount_collected]}),r("span",{children:e.tenant.name})]}),t("div",{children:[a&&r("button",{onClick:n=>{n.preventDefault(),l(d=>!d),c.Inertia.delete(route("rooms.transaction.destroy",{room:e.room_id,transaction:e.id}))},type:"button",className:"inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:r(u,{className:"w-5 h-5","aria-hidden":"true"})}),r("button",{type:"button",className:"inline-flex items-center ml-2  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:s?r(y,{className:"w-5 h-5","aria-hidden":"true"}):r(b,{className:"w-5 h-5","aria-hidden":"true"})})]})]}),t("div",{className:`transition ease-in-out duration-150 ${!s&&"hidden "} `,children:[t("div",{className:"mt-4 flex flex-row justify-between uppercase text-gray-500",children:[t("div",{className:"text-sm",children:["Electricity Consumed:"," ",t("span",{className:"text-black",children:[e.electricity_units_consumed," units x \u20B9",e.electricity_unit_rate]})," "]}),t("div",{className:"text-sm",children:["\u20B9",e.electricity_charges]})]}),t("div",{className:"mt-4 flex flex-row justify-between uppercase text-gray-500",children:[r("div",{className:"text-sm",children:"Recurring Charges: "}),t("div",{className:"text-sm",children:["\u20B9",e.recurring_charges]})]}),t("div",{className:"mt-4 flex flex-row justify-between uppercase text-gray-500",children:[r("div",{className:"text-sm",children:"Rent: "}),t("div",{className:"text-sm",children:["\u20B9",e.rent]})]}),t("div",{className:"mt-2 flex flex-row justify-between pt-2 border-t border-gray-400",children:[t("div",{className:"text-sm font-semibold uppercase",children:["Total:"," "]}),t("div",{className:"text-sm",children:["\u20B9",e.total_amount]})]}),t("div",{className:"mt-4 flex flex-row justify-between uppercase text-gray-500",children:[r("div",{className:"text-sm",children:"Balance: "}),t("div",{className:`text-sm ${e.balance>0?"text-red-600":"text-green-600"}`,children:["\u20B9",e.balance]})]}),t("div",{className:"mt-2 flex flex-row justify-between pt-2 border-t border-gray-400",children:[t("div",{className:"text-sm font-semibold uppercase",children:["Amount Collected:"," "]}),t("div",{className:"text-sm",children:["\u20B9",e.amount_collected]})]}),e.remark&&t("p",{className:"mt-4 text-gray-500",children:[r("span",{className:"uppercase",children:"Remark:"}),e.remark]})]})]})})}function R(e){return t(h,{auth:e.auth,errors:e.errors,header:r(x,{back:route("property.rooms.index",e.room.property_id),title:"Transaction History"}),children:[r(m,{title:"Dashboard"}),r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2 ",children:e.transactions.length>0?e.transactions.map((a,s)=>r(N,{transaction:a,room:e.room,showDelete:s==0})):r("div",{className:"mt-2",children:r(f,{message:"No transaction has been made for this room.",color:"gray",action:{text:"Assign Tenant",url:route("rooms.transaction.create",e.room.id)}})})})]})}export{R as default};