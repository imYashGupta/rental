import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import SubmitRent from "@/Components/SubmitRent";

export default function Dashboard(props) {
    const { room } = props;

    const { data, setData, post, processing, errors,transform , reset, clearErrors } =
        useForm({
            name: "",
            email: "",
            phone: "",
            remark: "",

        });

   /*  transform((data) => ({
        ...data,
        has_electricity_metered: data.remember ? 'on' : '',
    })) */


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
        post(route("rooms.transaction.store",room.id));
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Submit/Collect Rent for {room.name}
                </h2>
            }
        >
            <Head title="Create New Property" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                {
                    room.tenant ?
                    (
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                        <SubmitRent room={room}/>
                    </div>
                    ) : (
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                        <form onSubmit={submit}>
                            <h3 className="mb-4">Create And Assign Tenant</h3>
                            <div className="mb-4">
                                <InputLabel forInput="name" value="Name" />
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className={
                                        "mt-1 block w-full " +
                                        (errors.name ? "border-red-500" : " ")
                                    }
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel forInput="phone" value="Phone Number" />
                                <TextInput
                                    type="number"
                                    name="phone"
                                    value={data.phone}
                                    className={
                                        "mt-1 block w-full " +
                                        (errors.phone ? "border-red-500" : " ")
                                    }
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel forInput="email" value="Email" />
                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    handleChange={onHandleChange}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel
                                    forInput="remark"
                                    value="Remark (optional)"
                                />

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

                                <InputError
                                    message={errors.remark}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <PrimaryButton processing={processing}>
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                    )
                }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
