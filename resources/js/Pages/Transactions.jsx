import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import History from "@/Components/History";
import Header from "@/Components/Header";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header back={route("property.rooms.index",props.room.property_id)} title="Transaction History"  />}
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2 ">
                {
                    props.transactions.map(transaction => <History transaction={transaction} room={props.room}/>)
                }

            </div>
        </AuthenticatedLayout>
    );
}
