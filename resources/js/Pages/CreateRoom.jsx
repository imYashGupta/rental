import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import Header from "@/Components/Header";

export default function Dashboard(props) {
    const { property } = props;

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            description: "",
            rental:"",
            has_electricity_metered:false,
            electricity_unit_rate:"",
            initial_electricity_units:"",
            recurring_charges:""
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
        post(route("property.rooms.store",property.id));
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}

            header={<Header back={route("property.rooms.index",property.id)} title={"Create New Room in "+property.name}  />}

        >
            <Head title="Create New Room" />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                        <form onSubmit={submit}>
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
                                    placeholder="eg: Room 1"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel
                                    forInput="description"
                                    value="Description (optional)"
                                />

                                <TextInput
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className={
                                        "mt-1 block w-full " +
                                        (errors.description ? "border-red-500" : " ")
                                    }
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />

                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 w-50">
                                <InputLabel forInput="rental" value="Rental" />

                                <TextInput
                                    type="number"
                                    name="rental"
                                    value={data.rental}
                                    className={
                                        "mt-1 block w-full " +
                                        (errors.rental ? "border-red-500" : " ")
                                    }
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.rental}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mb-4 w-50">
                                <InputLabel forInput="rental" value="Recurring Charges"  />

                                <TextInput
                                    type="number"
                                    name="recurring_charges"
                                    value={data.recurring_charges}
                                    className={
                                        "mt-1 block w-full " +
                                        (errors.recurring_charges ? "border-red-500" : " ")
                                    }
                                    handleChange={onHandleChange}
                                    placeholder="eg: Water,Municipal charges"
                                />
                                <InputError
                                    message={errors.recurring_charges}
                                    className="mt-2"
                                />
                            </div>
                            <div className="block mb-4 mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="has_electricity_metered"
                                        value={data.test}
                                        handleChange={onHandleChange}
                                    />

                                    <span className="ml-2 text-sm text-gray-600">
                                        Does the room has electricity metered?
                                    </span>
                                </label>
                            </div>
                            {data.has_electricity_metered && (<div className="flex flex-row justify-evenly">
                                <div className="mb-4 w-full mr-2">
                                    <InputLabel forInput="electricity_unit_rate" value="Per Unit Charges" />

                                    <TextInput
                                        type="number"
                                        name="electricity_unit_rate"
                                        value={data.electricity_unit_rate}
                                        className={
                                            "mt-1 block w-full " +
                                            (errors.electricity_unit_rate ? "border-red-500" : " ")
                                        }
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.electricity_unit_rate}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-4 w-full ml-2">
                                    <InputLabel forInput="initial_electricity_units" value="Initial Electricity Units" />
                                    <TextInput
                                        type="number"
                                        name="initial_electricity_units"
                                        value={data.initial_electricity_units}
                                        className={
                                            "mt-1 block w-full " +
                                            (errors.initial_electricity_units ? "border-red-500" : " ")
                                        }
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.initial_electricity_units}
                                        className="mt-2"
                                    />
                                </div>
                            </div>)}
                            <div>
                                <PrimaryButton processing={processing}>
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
