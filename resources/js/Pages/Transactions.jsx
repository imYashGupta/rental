import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import History from "@/Components/History";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                     Transaction History
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2 mt-6">
                {
                    props.transactions.map(transaction => <History transaction={transaction} room={props.room}/>)
                }

            </div>
        </AuthenticatedLayout>
    );
}
