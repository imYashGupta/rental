import React from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/inertia-react";

export default function Room({room}) {
    return (
        <>
            <div className="list-items flex flex-row md:items-center justify-between border-b  bg-white shadow-lg sm:rounded-lg my-1 md:p-6 p-4">
                {/* <div className="flex -space-x-1 overflow-hidden items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center">
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
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    </div>
                </div> */}
                <div className="flex flex-1 flex-col justify-center">
                    <div className="text-md font-bold">{room.name} {room.remark && <span className="text-xs font-semibold text-gray-500">- {room.remark} </span>} </div>
                    {room.next_month && <p className="text-xs text-gray-500 font-semibold">Next: {room.next_month.date} ({room.next_month.days > 0 ? room.next_month.days +" Days left." : "Rent delayed by " + Math.abs(room.next_month.days).toString() +" Days"})</p>}
                </div>
                <div className="flex items-center ">

                    {room.user_id && <span className="px-2 py-2 ml-1 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  shadow-lg ">
                        {room.tenant.name}
                    </span>}
                </div>
                <div className="flex items-center">
                    {!room.user_id && <Link type="button" href={route("rooms.transaction.create",room.id)} className="inline-flex items-center ml-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                        {/* asd */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
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
                                            strokeWidth={
                                                1.5
                                            }
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
                                    href={route("property.create")}
                                    method="get"
                                    as="a"
                                >
                                    Edit Room Details
                                </Dropdown.Link>
                                {
                                room.user_id ? <Dropdown.Link href={route("logout")} method="post" as="button">View Tenant Profile</Dropdown.Link> : <Dropdown.Link href={route("logout")} method="post" as="button">Add Tenant</Dropdown.Link>}
                                {room.user_id && <Dropdown.Link href={route("rooms.transaction.create",room.id)} method="get" as="a">Submit {room.next_month.month} Rent</Dropdown.Link>}
                                <Dropdown.Link href={route("rooms.transaction.index",room.id)} method="get" as="a">View History</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                </div>
            </div>
        </>
    );
}
