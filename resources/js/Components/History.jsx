import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Inertia } from '@inertiajs/inertia'

export default function History({ transaction, showDelete }) {
    const [show, setShow] = useState(false);
 console.log(showDelete)
    return (
        <>
            <div
                className="list-items border-b  bg-white shadow-sm sm:rounded-lg my-1 md:p-6 p-4 cursor-pointer"
                onClick={() => setShow((v) => !v)}
            >
                <div className="flex flex-row items-center justify-between ">
                    <div>
                        <h2 className="font-semibold ">
                            {transaction.rent_month}{" "}
                            <span className="text-sm font-normal">
                                (Paid on{" "}
                                {new Date(
                                    transaction.created_at
                                ).toLocaleDateString()}
                                )
                            </span>{" "}
                            - ₹{transaction.amount_collected}
                        </h2>
                        <span>{transaction.tenant.name}</span>
                    </div>
                    <div>
                        { showDelete &&
                            <button
                                onClick={(e) => {
                                   e.preventDefault()
                                   setShow((v) => !v)
                                   Inertia.delete(route("rooms.transaction.destroy",{room:transaction.room_id,transaction:transaction.id}))

                                }}
                                type="button"
                                className="inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                <TrashIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                        }
                        <button
                            type="button"
                            className="inline-flex items-center ml-2  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                        >
                            {show ? (
                                <ChevronUpIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            ) : (
                                <ChevronDownIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`transition ease-in-out duration-150 ${
                        !show && "hidden "
                    } `}
                >
                    <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                        <div className="text-sm">
                            Electricity Consumed:{" "}
                            <span className="text-black">
                                {transaction.electricity_units_consumed} units x
                                ₹{transaction.electricity_unit_rate}
                            </span>{" "}
                        </div>
                        <div className="text-sm">
                            ₹{transaction.electricity_charges}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                        <div className="text-sm">Recurring Charges: </div>
                        <div className="text-sm">
                            ₹{transaction.recurring_charges}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                        <div className="text-sm">Rent: </div>
                        <div className="text-sm">₹{transaction.rent}</div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between pt-2 border-t border-gray-400">
                        <div className="text-sm font-semibold uppercase">
                            Total:{" "}
                        </div>
                        <div className="text-sm">
                            ₹{transaction.total_amount}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                        <div className="text-sm">Balance: </div>
                        <div
                            className={`text-sm ${
                                transaction.balance > 0
                                    ? "text-red-600"
                                    : "text-green-600"
                            }`}
                        >
                            ₹{transaction.balance}
                        </div>
                    </div>
                    <div className="mt-2 flex flex-row justify-between pt-2 border-t border-gray-400">
                        <div className="text-sm font-semibold uppercase">
                            Amount Collected:{" "}
                        </div>
                        <div className="text-sm">
                            ₹{transaction.amount_collected}
                        </div>
                    </div>

                    {transaction.remark && (
                        <p className="mt-4 text-gray-500">
                            <span className="uppercase">Remark:</span>
                            {transaction.remark}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
