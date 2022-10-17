import React from "react";
import {  Link } from "@inertiajs/inertia-react";
import {
    ChevronLeftIcon
} from "@heroicons/react/24/outline";
export default function Header({back,title,actionButton}) {
    return (
        <>
            <div className="flex justify-between items-center">
                {back &&  <Link
                    href={back}
                    className="flex p-3 text-gray-600 uppercase text-xs font-black items-center justify-center rounded-full bg-gray-100 ">
                    <ChevronLeftIcon className="h-4 w-4 text-black" />
                </Link>}
                <h2 className="font-semibold text-xl text-gray-800 leading-tight flex flex-1 ml-4">
                    {title}
                </h2>
                {actionButton && <Link
                    href={actionButton.url}
                    className="flex p-3 text-blue-600 uppercase text-xs font-black items-center justify-center rounded-full bg-blue-100 "
                >
                    {actionButton.text}
                </Link>}
            </div>
        </>
    );
}
