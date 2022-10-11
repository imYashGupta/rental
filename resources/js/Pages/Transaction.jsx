import React,{useEffect} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";
import SubmitRent from "@/Components/SubmitRent";
import AssignTenant from "@/Components/AssignTenant";
import Vacant from "@/Components/Vacant";

export default function Dashboard(props) {
    const { room,vacant } = props;


    const TransactionForm = () => {
        if(vacant==true){
            return <SubmitRent room={room} type="VACANT" />;
        }
        else{
            if(room.tenant) {
                return <SubmitRent room={room} type="REGULAR"/>
            }
            else {
                return <AssignTenant room={room}/>
            }
        }
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                   {!vacant ? room.tenant ? "Submit Rent" : "Assign Tenant" : "Vacant"}
                </h2>
            }
        >
            <Head title={!vacant ? room.tenant ? "Submit Rent" : "Assign Tenant" : "Vacant"} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                    <TransactionForm/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
