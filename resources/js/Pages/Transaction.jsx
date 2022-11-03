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
import Header from "@/Components/Header";
// YQ,DEZ8!%Q!2
export default function Dashboard(props) {
    const { room,vacant } = props;


    const TransactionForm = () => {
        if(vacant==true){
            return <AssignTenant room={room} type="VACANT" />;
        }
        else{
            if(room.tenant) {
                return <AssignTenant room={room} type="REGULAR"/>
            }
            else {
                return <AssignTenant room={room} type="ADVANCE"/>
            }
        }
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header back={route("property.rooms.index",room.property_id)} title={!vacant ? room.tenant ? "Submit Rent" : "Assign Tenant" : "Vacant"}  />}
        >
            <Head title={!vacant ? room.tenant ? "Submit Rent" : "Assign Tenant" : "Vacant"} />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                    <TransactionForm/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
