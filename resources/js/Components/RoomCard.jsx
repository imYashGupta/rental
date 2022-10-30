import React from "react";
import {
    CalendarIcon,
    UserCircleIcon,
    EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import DropdownIcon from "./DropdownIcon";
const RoomCard = ({room,SetShowRoom}) => {
    // console.log(room)
    return (
        <li key={room.id}>
            <a href="#" className="block hover:bg-gray-50" onClick={() => SetShowRoom(room)}>
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate flex-1">
                            {room.name}
                            {room.description && <span className="text-xs text-green-800">
                            - {room.description}{" "}
                            </span>}
                        </p>
                        {room.next_month &&
                        <div className="ml-2 flex-shrink-0 flex items-center">
                            <p className={"px-2 items-center inline-flex text-xs leading-5 rounded-full font-bold "+(room.next_month.days > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
                            {room.next_month.days > 0
                                    ? room.next_month.days +" Days left."
                                    : "Delayed: " +
                                      Math.abs(
                                          room.next_month.days
                                      ).toString() +
                                      " Days"}
                            </p>
                        </div>
                         }
                    </div>
                    {room.tenant && <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                                <UserCircleIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                {room.tenant.name}
                            </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <CalendarIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            <p className="text-sm">
                                Next Rent:{" "}
                                {room.next_month && (<time dateTime={room.next_month.date}>
                                    {room.next_month.date}
                                </time>)}
                            </p>
                        </div>
                    </div>}
                </div>
            </a>
        </li>
    );
};

export default RoomCard;
