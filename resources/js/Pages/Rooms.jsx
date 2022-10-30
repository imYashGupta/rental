import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import Room from "@/Components/Room";
import Modal from "@/Components/Modal";
/* This example requires Tailwind CSS v2.0+ */
import {
    CalendarIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

const positions = [
    {
        id: 1,
        title: "Room 1",
        type: "Full-time",
        location: "Remote",
        department: "Jagroop Sharma",
        closeDate: "2020-01-07",
        closeDateFull: "January 7, 2020",
    },
    {
        id: 2,
        title: "Front End Developer",
        type: "Full-time",
        location: "Remote",
        department: "Engineering",
        closeDate: "2020-01-07",
        closeDateFull: "January 7, 2020",
    },
    {
        id: 3,
        title: "User Interface Designer",
        type: "Full-time",
        location: "Remote",
        department: "Design",
        closeDate: "2020-01-14",
        closeDateFull: "January 14, 2020",
    },
];

import Header from "@/Components/Header";
import RoomCard from "@/Components/RoomCard";
export default function Dashboard(props) {
    const [room, SetShowRoom] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <Header
                    back={route("property.index")}
                    title="Rooms"
                    actionButton={{
                        url: route("property.rooms.create", props.property.id),
                        text: "New Room",
                    }}
                />
            }
        >
            <Head title="Dashboard" />
            {/* <div className="md:py-6">
                {props.rooms.map((room) => <Room room={room} SetShowTenant={SetShowTenant} showTenant={showTenant}/> )}
            </div> */}

            <div className="max-w-7xl m-auto bg-white shadow sm:rounded-md mt-1">
                <ul className="divide-y  divide-gray-200">
                {props.rooms.map((room) => <RoomCard room={room} SetShowRoom={SetShowRoom} />)}
                </ul>
            </div>

            <Modal SetShowRoom={SetShowRoom} room={room} />
        </AuthenticatedLayout>
    );
}
