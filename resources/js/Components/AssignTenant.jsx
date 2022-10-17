import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputGroup from "./InputGroup";

export default function AssignTenant({room,type}) {
    const { data, setData, post, processing, errors,transform , reset, clearErrors } =
        useForm({
            name: "",
            email: "",
            phone: "",
            date:type!="ADVANCE" ? room.next_month._date.toString().substr(0,10) : "",
            remark: "",
            electricity_units: room.initial_electricity_units,
            electricity_consumed: 0,
            recurring_charges: room.recurring_charges,
            rent: type=="VACANT" ? 0 : room.rental,
            total: room.recurring_charges + (type=="VACANT" ? 0 : room.rental),
            type: type,
        });

    /* const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    }; */

    const onHandleChange = (event) => {
        console.log(event.target.name)
        let input = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
        if(event.target.name=='electricity_units'){
            let electricity_units_consumed = event.target.value - room.initial_electricity_units;
            let total =  data.recurring_charges + data.rent + ((isNaN(electricity_units_consumed) ? 0 : electricity_units_consumed) * parseInt(room.electricity_unit_rate));
            setData({...data,total:total,electricity_consumed:electricity_units_consumed,electricity_units:event.target.value});
        }
        else if(event.target.name=='recurring_charges'){
            let total =  (isNaN(input) ? 0 : input) + data.rent + (data.electricity_consumed * parseInt(room.electricity_unit_rate));
            setData({...data,total:total,recurring_charges:input});
        }
        else if(event.target.name=='rent'){
            let total =  data.recurring_charges + (isNaN(input) ? 0 : input) + (data.electricity_consumed * parseInt(room.electricity_unit_rate));
            setData({...data,total:total,rent:input});
        }
        else{
            setData(
                event.target.name,
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // return;
        post(route("rooms.transaction.store",room.id));
    };

    return (
        <>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                <form onSubmit={submit}>
                    <h3 className="mb-4">Create And Assign Tenant</h3>
                    {type=="ADVANCE" &&
                    <>
                        <div className="mb-4 flex ">
                            <div className="mr-1 md:w-full">
                                <InputGroup type={"text"} label="Name" name="name" value={data.name} onHandleChange={onHandleChange} errors={errors} />
                            </div>
                            <div className="ml-1 md:w-full">
                                <InputGroup type={"text"} label="Phone Number" name="phone" value={data.phone} onHandleChange={onHandleChange} errors={errors} />
                            </div>
                        </div>
                        <div className="mb-4 flex ">
                            <div className="mr-1 md:w-full flex flex-1 flex-col">
                                <InputGroup type={"email"} label="Email" name="email" value={data.email} onHandleChange={onHandleChange} errors={errors} />
                            </div>
                            <div className="ml-1 md:w-full flex flex-1 flex-col">
                                <InputGroup type={"date"} label="Rental Date" name="date" value={data.date} onHandleChange={onHandleChange} errors={errors} />
                            </div>
                        </div>
                    </>}
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup type="number" label="Starting Electricity Units In Meter:" InputClass={"mt-1 block w-32 md:w-3/4 text-base"} name="electricity_units" value={data.electricity_units} onHandleChange={onHandleChange} errors={errors} />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup type="number" label="Electricity Consumed:" disabled={true} InputClass={"mt-1 block w-32 md:w-3/4 text-base"} name="electricity_consumed" value={data.electricity_consumed} onHandleChange={onHandleChange} errors={errors} />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup type="number" label="Recurring Charges:" InputClass={"mt-1 block w-32 md:w-3/4 text-base"} name="recurring_charges" value={data.recurring_charges} onHandleChange={onHandleChange} errors={errors} />
                    </div>
                <div className="flex flex-row items-center justify-between mb-4">
                    <InputGroup type="number" label="Basic Rent:" InputClass={"mt-1 block w-32 md:w-3/4 text-base"} name="rent" value={data.rent} onHandleChange={onHandleChange} errors={errors} />
                </div>
                <div>
                    <h1 className="text-right flex justify-between uppercase">
                        <span>Total Rent:</span> <span className="font-extrabold">₹{data.total}</span>
                    </h1>
                </div>
                <div className="mt-4">
                    <InputGroup type="text" label="Remark (optional):"  name="remark" value={data.remark} onHandleChange={onHandleChange} errors={errors} />

                </div>
                    <div className="mt-4">
                        <PrimaryButton processing={processing}>
                            SUBMIT
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
