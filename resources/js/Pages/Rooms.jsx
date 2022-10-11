import React,{useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import Room from "@/Components/Room";
import Modal from "@/Components/Modal";

export default function Dashboard(props) {
    const [showTenant, SetShowTenant] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Rooms
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2 mt-6">
                {props.rooms.map((room) => <Room room={room} SetShowTenant={SetShowTenant} showTenant={showTenant}/> )}
            </div>
            <Modal SetShowTenant={SetShowTenant} showTenant={showTenant} />
        </AuthenticatedLayout>
    );
}
