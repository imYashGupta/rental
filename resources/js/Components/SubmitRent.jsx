import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/inertia-react";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";

export default function SubmitRent({ room }) {
    console.log(room);
    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform,
        reset,
        clearErrors,
    } = useForm({
        electricity_consumed: 0,
        recurring_charges: room.recurring_charges,
        rent: room.rental,
        total: room.recurring_charges + room.rental,
        remark:"",
        type: "REGULAR",
    });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();
        // clearErrors('name','address')
        post(route("rooms.transaction.store", room.id));
    };
    return (
        <form onSubmit={submit}>
            <div>
                <div className="flex justify-between">
                    {/* <h1 className="font-bold mb-4 text-lg">Submit Rent</h1> */}
                    {/* <p>
                        Last month meter units were:{" "}
                        {room.initial_electricity_units}
                    </p> */}
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                    <InputLabel
                        forInput="electricity_consumed"
                        value="Electricity Units Consumed:"
                        className="text-base "
                    />
                    <TextInput
                        type="number"
                        name="electricity_consumed"
                        min={0}
                        value={data.electricity_consumed}
                        className={
                            "mt-1 block w-full sm:w-3/4 text-base" +
                            (errors.electricity_consumed
                                ? "border-red-500"
                                : " ")
                        }
                        handleChange={(e) => {
                            let electricity_consumed;
                            if (e.target.value == "") {
                                electricity_consumed = 0;
                            } else {
                                electricity_consumed = parseInt(e.target.value);
                            }
                            let total =
                                room.recurring_charges +
                                room.rental +
                                electricity_consumed *
                                    parseInt(room.electricity_unit_rate);
                            setData({
                                ...data,
                                total: total,
                                electricity_consumed: electricity_consumed,
                            });
                            // console.log("OUTPUT",parseInt(room.electricity_unit_rate))
                        }}
                    />
                    <InputError
                        message={errors.electricity_consumed}
                        className="mt-2"
                    />
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                    <InputLabel
                        forInput="recurring_charges"
                        value="Recurring Charges:"
                        className="text-base"
                    />
                    <TextInput
                        type="number"
                        name="recurring_charges"
                        value={data.recurring_charges}
                        className={
                            "mt-1 block w-full  " +
                            (errors.recurring_charges ? "border-red-500" : " ")
                        }
                        handleChange={onHandleChange}
                    />
                    <InputError
                        message={errors.recurring_charges}
                        className="mt-2"
                    />
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                    <InputLabel
                        forInput="recurring_charges"
                        value="Basic Rent:"
                        className="text-base"
                    />
                    <TextInput
                        type="number"
                        name="rent"
                        value={data.rent}
                        className={
                            "mt-1 block w-full  " +
                            (errors.rent ? "border-red-500" : " ")
                        }
                        handleChange={onHandleChange}
                    />
                    <InputError message={errors.rent} className="mt-2" />
                </div>
                <div>
                    <h1 className="text-right flex justify-between">
                        <span>Total Rent:</span> <span className="font-extrabold">₹{data.total}</span>
                    </h1>
                </div>
                <div className="mt-4">
                    <InputLabel forInput="remark" value="Remark (optional)" />

                    <TextInput
                        type="text"
                        name="remark"
                        value={data.remark}
                        className={
                            "mt-1 block w-full " +
                            (errors.remark ? "border-red-500" : " ")
                        }
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.remark} className="mt-2" />
                </div>
                <div>
                    <PrimaryButton
                        className="mt-6 float-right"
                        processing={processing}
                    >
                        Submit
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
}
