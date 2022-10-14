import React from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/inertia-react";
import { HomeIcon, PlusIcon, EyeIcon } from "@heroicons/react/24/outline";
export default function Room({ room, SetShowTenant }) {
    return (
        <>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                <div className="list-items flex flex-row md:items-center border-b  bg-white shadow-lg sm:rounded-lg my-1 md:p-6 p-4">
                    {/* <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                        <HomeIcon
                            className="h-6 w-6 text-gray-600"
                            aria-hidden="true"
                        />
                    </div> */}
                    <div className="flex flex-1 flex-col ">
                        <h1 className="text-lg tracking-wide">
                            {room.name}{" "}
                            {room.description && (
                                <span className="text-xs font-semibold text-gray-500">
                                    - {room.description}{" "}
                                </span>
                            )}{" "}
                        </h1>
                        {room.next_month && (
                            <p className="text-sm text-gray-500 font-semibold">
                                Next: {room.next_month.date} (
                                {room.next_month.days > 0
                                    ? room.next_month.days +" Days left."
                                    : "Rent delayed by " +
                                      Math.abs(
                                          room.next_month.days
                                      ).toString() +
                                      " Days"}
                                )
                            </p>
                        )}
                    </div>
                    <div className="flex flex-row items-center">
                        {room.user_id && <Link className="max-h-10 flex p-3 text-green-600 uppercase text-xs font-black items-center justify-center rounded-full bg-green-100  max:h-1">
                            {room.tenant.name}
                        </Link>}
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center ml-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {/* asd */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route("property.rooms.edit", [
                                        room.property_id,
                                        room.id,
                                    ])}
                                    method="get"
                                    as="a"
                                >
                                    Edit Room Details
                                </Dropdown.Link>
                                {room.user_id ? (
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        View Tenant Profile
                                    </Dropdown.Link>
                                ) : (
                                    <Dropdown.Link
                                        href={route(
                                            "rooms.transaction.create",
                                            room.id
                                        )}
                                        method="get"
                                        as="a"
                                    >
                                        Add Tenant
                                    </Dropdown.Link>
                                )}
                                {room.user_id && (
                                    <Dropdown.Link
                                        href={route(
                                            "rooms.transaction.create",
                                            room.id
                                        )}
                                        method="get"
                                        as="a"
                                    >
                                        Submit {room.next_month.month} Rent
                                    </Dropdown.Link>
                                )}
                                {room.user_id && (
                                    <Dropdown.Link
                                        href={
                                            route(
                                                "rooms.transaction.create",
                                                room.id
                                            ) + "?vacant=true"
                                        }
                                        method="get"
                                        as="a"
                                    >
                                        Vacant
                                    </Dropdown.Link>
                                )}
                                <Dropdown.Link
                                    href={route(
                                        "rooms.transaction.index",
                                        room.id
                                    )}
                                    method="get"
                                    as="a"
                                >
                                    View History
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        {/*   <Link
                            href={""}
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                        >
                            <EyeIcon className="h-6 w-6 text-blue-600" />
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}
