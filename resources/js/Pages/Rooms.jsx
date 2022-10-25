import React,{useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";
import Room from "@/Components/Room";
import Modal from "@/Components/Modal";
/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon,UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'

const positions = [
  {
    id: 1,
    title: 'Room 1',
    type: 'Full-time',
    location: 'Remote',
    department: 'Jagroop Sharma',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]

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
            {/* <div className="md:py-6">
                {props.rooms.map((room) => <Room room={room} SetShowTenant={SetShowTenant} showTenant={showTenant}/> )}
            </div> */}

<div className="bg-white shadow overflow-hidden sm:rounded-md mt-1">
      <ul className="divide-y  divide-gray-200">
        {positions.map((position) => (
          <li key={position.id} >
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{position.title} <span className="text-xs text-green-800">- 1 BHK with Balcony</span></p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UserCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                   {/*  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <UserCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.location}
                    </p> */}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      Next Rent on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>


            <Modal SetShowTenant={SetShowTenant} showTenant={showTenant} />
        </AuthenticatedLayout>
    );
}
