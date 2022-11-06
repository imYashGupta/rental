import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import History from "@/Components/History";
import Header from "@/Components/Header";
import Alert from "@/Components/Alert";

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
                  props.transactions.length > 0 ?
                     props.transactions.map((transaction,key) => <History transaction={transaction} room={props.room} showDelete={key==0} />)
                     :
                     <div className="mt-2"><Alert message={"No transaction has been made for this room."} color="gray" action={{text:"Assign Tenant",url:route("rooms.transaction.create",props.room.id)}} /></div>
                }

            </div>
        </AuthenticatedLayout>
    );
}
