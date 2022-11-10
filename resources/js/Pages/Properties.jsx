import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import SubmitRent from "@/Components/SubmitRent";
import {
    BuildingOfficeIcon,
    PlusIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import Header from "@/Components/Header";
import Alert from "@/Components/Alert";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header title="Properties" back={route("dashboard")} actionButton={{text:"Create New",url:route("property.create"),icon:"BuildingOfficeIcon"}} />}
        >
            <Head title="Dashboard" />

            <div className="md:py-6">
                <div className="list-container">
                    {props.properties.length > 0 ? props.properties.map((property) => {
                        return (
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                                <div className="list-items flex flex-row md:items-center border-b  bg-white shadow-lg sm:rounded-lg my-1 md:p-6 p-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <BuildingOfficeIcon
                                            className="h-6 w-6 text-gray-600"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col pl-4">
                                        <h1 className="text-lg tracking-wide">
                                        {property.name}
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                        {property.address}
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        {/* <Link
                                            href={route("property.rooms.create",property.id)}
                                            className="mr-2 flex p-3 text-blue-600 uppercase text-xs font-black items-center justify-center rounded-full bg-blue-100  "
                                        >
                                            Add Room
                                        </Link> */}
                                        <Link
                                            href={route("property.rooms.index",property.id)}
                                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                                        >
                                            <EyeIcon className="h-6 w-6 text-blue-600" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : (<div className="mt-2"><Alert message={"There is no property to view."} color="gray" action={{text:"Create Property",url:route("property.create")}} /></div>)

                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
