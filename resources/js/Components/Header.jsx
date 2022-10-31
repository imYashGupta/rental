import React from "react";
import {  Link } from "@inertiajs/inertia-react";

import * as HIcons from '@heroicons/react/24/outline'

export default function Header({back,title,actionButton}) {
    const {...icons} = HIcons
    const Icon = icons[actionButton?.icon]
    return (
        <>
            <div className="flex justify-between items-center">
                {back &&  <Link
                    href={back}
                    className="flex p-3 text-gray-600 uppercase text-xs font-black items-center justify-center rounded-full bg-gray-100 ">
                    <HIcons.ChevronLeftIcon className="h-4 w-4 text-black" />
                </Link>}
                <h2 className="font-semibold text-xl text-gray-800 leading-tight flex flex-1 ml-4">
                    {title}
                </h2>
                {actionButton &&  <Link
        type="button"
        href={actionButton.url}
        className="inline-flex uppercase items-center px-3 py-2 border border-transparent shadow-sm text-sm tracking-wide leading-4 font-black rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {actionButton?.icon && <Icon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />}
        {actionButton.text}
      </Link>}
            </div>
        </>
    );
}
{/* <Link
                    href={actionButton.url}
                    className="flex p-3 text-blue-600 uppercase text-xs font-black items-center justify-center rounded-full bg-blue-100 "
                >
                    {actionButton.text}
                </Link>
 */}
