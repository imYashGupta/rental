import{u as l,r as u,j as e,a as s,H as c}from"./app.1967e381.js";import{G as p,P as f}from"./PrimaryButton.e27288b9.js";import{T as w,I as h}from"./TextInput.f3cd9703.js";import{I as g}from"./InputLabel.c1813eaa.js";import"./ApplicationLogo.b89d4119.js";function y(){const{data:r,setData:t,post:o,processing:n,errors:m,reset:i}=l({password:""});u.exports.useEffect(()=>()=>{i("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return e(p,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(g,{forInput:"password",value:"Password"}),s(w,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(h,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",processing:n,children:"Confirm"})})]})]})}export{y as default};
