import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Header from '@/Components/Header';

export default function Dashboard(props) {

    const { data, setData, post, processing, errors, reset,clearErrors  } = useForm({
        name: '',
        address: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        // clearErrors('name','address')
        post(route('property.store'));
    };
    console.log(errors.address)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header back={route("dashboard")} title={"Create New Property"}  />}

        >
            <Head title="Create New Property" />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                        <form onSubmit={submit}>

                        <div className='mb-4'>
                            <InputLabel forInput="name" value="Name" />

                            <TextInput
                                type="text"
                                name="name"
                                value={data.name}
                                className={"mt-1 block w-full "+ (errors.name ? "border-red-500" : " ")}
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='mb-4'>
                            <InputLabel forInput="address" value="Address" />

                            <TextInput
                                type="text"
                                name="address"
                                value={data.address}
                                className={"mt-1 block w-full "+ (errors.address ? "border-red-500" : " ")}
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.address} className="mt-2" />
                        </div>
                        <div>
                            <PrimaryButton processing={processing} >Create</PrimaryButton>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
