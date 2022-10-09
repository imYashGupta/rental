import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import SubmitRent from "@/Components/SubmitRent";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Properties
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mt-4">
                    <div className="list-container">
                    {props.properties.map((property) => {
                    return (
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                        <div className="list-items flex flex-col sm:flex-row items-center justify-between border-b  bg-white overflow-hidden shadow-sm sm:rounded-lg my-1 p-6  ">
                            <div className="flex flex-row items-center space-x-4">
                                <img
                                    src="https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"
                                    alt="default img"
                                    className="h-12 w-12 rounded-full"
                                />
                                <div>
                                    <h1 className="tracking-tight ">
                                    {property.name}
                                    </h1>
                                    <p className="text-gray-500 font-light ">
                                    {property.address}
                                    </p>
                                </div>
                            </div>
                            <div>
                               {/*  <button className="bg-green-100 rounded-md px-4 py-1 text-green-800 text-sm font-semibold mt-4 sm:mt-0">
                                    View
                                </button> */}
                                <Link href={route("property.rooms.create",property.id)} className="inline-flex items-center px-4 py-2 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 mr-2">Add Room</Link>
                                <Link href={route("property.rooms.index",property.id)} className="inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">View</Link>
                            </div>
                        </div>
                        </div>
                       );
                    })}
                    </div>
                </div>


            </div>
        </AuthenticatedLayout>
    );
}
