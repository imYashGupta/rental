import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { isNull } from "lodash";
import { Link } from "@inertiajs/inertia-react";

export default function Modal({ room, SetShowRoom }) {
    const [open, setOpen] = useState(room);

    useEffect(() => {
        setOpen(room ? true : false);
    }, [room]);

    const cancelButtonRef = useRef(null);

    const closeModal = () => {
        console.log("Model Close");
        setOpen(false);
        SetShowRoom(false);
    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={closeModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0 ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-7xl">
                                {room.tenant && (
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <UserCircleIcon
                                                    className="h-6 w-6 text-blue-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    {room.tenant &&
                                                        room.tenant.name}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    {/*  <p className="text-sm text-gray-500">
                          Details:</p> */}
                                                    {room?.phone && (
                                                        <p>
                                                            Phone:{" "}
                                                            <a href="">
                                                                {room?.phone}
                                                            </a>
                                                        </p>
                                                    )}
                                                    <p>
                                                        Email:{" "}
                                                        <a href={"mailto:"+room.tenant.email}>
                                                            {room.tenant.email}
                                                        </a>
                                                    </p>
                                                    <p>
                                                        From:{" "}
                                                        {room.tenant &&
                                                            room.tenant
                                                                .created_at}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 text-center border-t">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {room.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {room.description}
                                    </p>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex   sm:px-6">
                                    {isNull(room.tenant_id) && (
                                        <Link
                                            as="button"
                                            href={route("rooms.transaction.create",room.id)}
                                            className="mt-1 lg:mr-2 inline-flex w-full justify-center rounded-md items-center px-4 py-2 border border-transparent text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Assign Tenant
                                        </Link>
                                    )}
                                    <Link
                                        as="button"
                                        href={room && route("property.rooms.edit", [room.property_id,room.id,])}
                                        className="mt-1  lg:mr-2 inline-flex w-full justify-center rounded-md items-center px-4 py-2 border border-transparent text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Edit Room Details
                                    </Link>
                                    {room.tenant && (
                                        <Link
                                            as="button"
                                            href={route("rooms.transaction.create",room.id)}
                                            className="mt-1 lg:mr-2 inline-flex w-full justify-center rounded-md items-center px-4 py-2 border border-transparent text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Submit Rent
                                        </Link>
                                    )}
                                    <Link
                                        type="button"
                                        href={room && route("rooms.transaction.index",room.id)}
                                        className="mt-1 lg:mr-2 inline-flex w-full justify-center rounded-md items-center px-4 py-2 border border-transparent text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        History
                                    </Link>
                                    {room.tenant && (
                                        <Link
                                            as="button"
                                            href={route("rooms.transaction.create",room.id) + "?vacant=true"}
                                            className="mt-1  inline-flex w-full justify-center rounded-md items-center px-4 py-2 border border-transparent text-base font-medium text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Vacant
                                        </Link>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
