import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import Modal from "@/Components/Modal";
import Header from "@/Components/Header";
import RoomCard from "@/Components/RoomCard";
import Alert from "@/Components/Alert";

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
                        icon:"HomeIcon"
                    }}
                />
            }
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl m-auto bg-white shadow sm:rounded-md mt-1">
                <ul className="divide-y  divide-gray-200">
                    {props.rooms.map((room) => <RoomCard room={room} SetShowRoom={SetShowRoom} />)}
                </ul>
                {
                    props.rooms.length == 0 && <Alert message={"There is no room in this property."} color="gray" action={{text:"Create Room",url:route("property.rooms.create", props.property.id)}} />
                }
            </div>

            <Modal SetShowRoom={SetShowRoom} room={room} />
        </AuthenticatedLayout>
    );
}
