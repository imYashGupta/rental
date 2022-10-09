import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { property } from "lodash";
import PrimaryButton from "@/Components/PrimaryButton";
import Dropdown from "@/Components/Dropdown";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Rooms
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mt-4">
                    <div className="list-container">
                        {props.rooms.map((room) => {
                            return (
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                                    <div className="list-items flex flex-col sm:flex-row md:items-center justify-between border-b  bg-white shadow-sm sm:rounded-lg my-1 md:p-6 p-4 ">
                                        <div className="flex flex-row items-center space-x-4">
                                            <img
                                                src="https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"
                                                alt="default img"
                                                className="h-12 w-12 rounded-full"
                                            />
                                            <div>
                                                <h1 className="tracking-tight ">
                                                    {room.name}
                                                </h1>
                                                <p className="text-gray-500 font-light ">{room.remark}</p>

                                                    {room.rental_date && (
                                                        <p className="text-sm text-gray-400 float-right">
                                                            Next Date: {room.next_month.date}
                                                            (
                                                            {room.next_month
                                                                .days > 0
                                                                ? room
                                                                      .next_month
                                                                      .days +
                                                                  " Days left."
                                                                : "Rent delayed by " +
                                                                  Math.abs(
                                                                      room
                                                                          .next_month
                                                                          .days
                                                                  ).toString() +
                                                                  " Days"}
                                                            )
                                                        </p>
                                                    )}
                                            </div>
                                            <div className="flex">
                                                {room.rental_date ? (
                                                    <Link
                                                        href={route(
                                                            "rooms.transaction.create",
                                                            room.id
                                                        )}
                                                        className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6 mr-2"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                            />
                                                        </svg>
                                                        Shubham Nigam
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href={route(
                                                            "rooms.transaction.create",
                                                            room.id
                                                        )}
                                                        className="inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                                                    >
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
                                                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                                            />
                                                        </svg>
                                                    </Link>
                                                )}

                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <span className="inline-flex rounded-md">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
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
                                                        <Dropdown.Link
                                                            href={route("logout")}
                                                            method="post"
                                                            as="button"
                                                        >
                                                            View Tenant Profile
                                                        </Dropdown.Link>
                                                        <Dropdown.Link
                                                            href={route("rooms.transaction.create",room.id)}
                                                            method="get"
                                                            as="a"
                                                        >
                                                            Pay November Rent
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
