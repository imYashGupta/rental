import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AssignTenant({room}) {
    const { data, setData, post, processing, errors,transform , reset, clearErrors } =
        useForm({
            name: "",
            email: "",
            phone: "",
            remark: "",
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
        post(route("rooms.transaction.store",room.id));
    };

    return (
        <>
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
                        <InputError message={errors.name} className="mt-2" />
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
                        <InputError message={errors.phone} className="mt-2" />
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

                        <InputError message={errors.remark} className="mt-2" />
                    </div>

                    <div>
                        <PrimaryButton processing={processing}>
                            Create
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
