import React,{useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import Room from "@/Components/Room";
import Modal from "@/Components/Modal";
import {
    ChevronLeftIcon
} from "@heroicons/react/24/outline";
import Header from "@/Components/Header";
export default function Dashboard(props) {
    const [showTenant, SetShowTenant] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header back={route("property.index")} title="Rooms" actionButton={{url:route("property.rooms.create",props.property.id),text:"New Room"}} />}
        >
            <Head title="Dashboard" />
            <div className="md:py-6">
                {props.rooms.map((room) => <Room room={room} SetShowTenant={SetShowTenant} showTenant={showTenant}/> )}
            </div>
            <Modal SetShowTenant={SetShowTenant} showTenant={showTenant} />
        </AuthenticatedLayout>
    );
}
