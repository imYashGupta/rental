import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import {
    ArrowSmallUpIcon,
    ArrowSmallDownIcon,
    CalendarIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Switch } from "@headlessui/react";
import RoomCard from "@/Components/RoomCard";
import Modal from "@/Components/Modal";
import { isNaN } from "lodash";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const getChangeDiff = (_a,_b) => {
    let a = parseInt(_a);
    let b = parseInt(_b);
    // return (( b / a * 100 ) - 100).toFixed();
    return   ( a<b ? "-" + (((b - a) * 100) / a).toFixed() : (((a - b) * 100) / b).toFixed() );

}



const Dashboard = (props) => {
    const [enabledAnnually, setEnabledAnnually] = React.useState(false);
    const [room, SetShowRoom] = React.useState(false);

    const stats = [
        {
            name: "Total Rent",
            stat: enabledAnnually
                ? props.stats.currentYear
                : props.stats.currentMonth,
            previousStat: enabledAnnually
                ? props.stats.lastYear
                : props.stats.lastMonth,
            change: enabledAnnually
                ? getChangeDiff(props.stats.currentYear, props.stats.lastYear)
                : getChangeDiff(
                      props.stats.currentMonth,
                      props.stats.lastMonth
                  ),
            changeType: function () {
                return this.change > 0 ? "increase" : "decrease";
            },
            text:"Last Month ₹",
        },
        {
            name: "Electricity",
            stat: enabledAnnually ? props.stats.currentYearElectricity : props.stats.currentMonthElectricity,
            previousStat: enabledAnnually
                ? props.stats.lastYearElectricity
                : props.stats.lastMonthElectricity,
            change: enabledAnnually
                ? getChangeDiff(
                      props.stats.currentYearElectricity,
                      props.stats.lastYearElectricity
                  )
                : getChangeDiff(
                      props.stats.currentMonthElectricity,
                      props.stats.lastMonthElectricity
                  ),
            changeType: function () {
                return this.change > 0 ? "increase" : "decrease";
            },
            text:"Last Month ₹",

        },
        {
            name: "Total Income",
            stat: props.stats.total,
            previousStat: props.stats.start_date,
            change: enabledAnnually
                ? getChangeDiff(props.stats.currentYear, props.stats.lastYear)
                : getChangeDiff(
                      props.stats.currentMonth,
                      props.stats.lastMonth
                  ),
            changeType: function () {
                return this.change > 0 ? "increase" : "decrease";
            },
            text:"From ",

        },
        {
            name: "Potential Rent Remaining",
            stat: props.stats.dueRent,


            text:""
        },
    ];
    console.log(stats);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header title="Dashboard" actionButton={{text:"Properties",url:route("property.index"),icon:"BuildingOffice2Icon"}}   />}
        >
            <Head title="Dashboard" />
            <div className="py-1 md:py-6">
                <section className="list-container">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-6 ">
                        <div className="shadow-xl rounded-md">


                        <div className="flex flex-1 bg-white items-center justify-between  px-4 py-5   sm:px-6 lg:px-8 border-b ">

                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {enabledAnnually ? "Annually" : "Monthly"} Stats
                                </h3>


                            <Switch.Group
                                as="div"
                                className={"flex "}
                            >
                                 <Switch.Label as="span" className="mr-3">
                                    <span className="text-sm font-medium text-gray-900">
                                        Switch to Annually
                                    </span>
                                </Switch.Label>
                                <Switch
                                    checked={enabledAnnually}
                                    onChange={setEnabledAnnually}
                                    className={classNames(
                                        enabledAnnually
                                            ? "bg-indigo-600"
                                            : "bg-gray-200",
                                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    )}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            enabledAnnually
                                                ? "translate-x-5"
                                                : "translate-x-0",
                                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                                        )}
                                    />
                                </Switch>

                            </Switch.Group>
                        </div>
                        <dl className=" grid grid-cols-1   bg-white overflow-hidden  divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                            {stats.map((item,index) => (
                                <div
                                    key={item.name}
                                    className="px-4 py-5 sm:p-6"
                                >
                                    <dt className="text-base font-normal text-gray-900">
                                        {item.name}
                                    </dt>
                                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                            ₹{ new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.stat) }
                                            <span className="ml-2 text-sm font-medium text-gray-500">
                                                {item.text}{item.previousStat}
                                            </span>
                                        </div>

                                        {!["Nan","-Infinity","Infinity"].includes(item.change) && index < 3 && <div
                                            className={classNames(
                                                item.changeType() === "increase"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800",
                                                "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                                            )}
                                        >
                                            {item.changeType() ===
                                            "increase" ? (
                                                <ArrowSmallUpIcon
                                                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <ArrowSmallDownIcon
                                                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <span className="sr-only">
                                                {item.changeType() ===
                                                "increase"
                                                    ? "Increased"
                                                    : "Decreased"}{" "}
                                                by
                                            </span>
                                            {item.change}%
                                        </div>}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-6 ">
                        <div  className="shadow-xl rounded-md">
                            <div className="bg-white px-4 py-5 border-b border-gray-200   ">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Upcoming Rent
                                </h3>
                            </div>

                            <div className="bg-white  overflow-hidden  ">
                                <ul className="divide-y  divide-gray-200">
                                    {
                                        props.stats.upcomingRents.map(room => <RoomCard room={room} SetShowRoom={SetShowRoom} />)
                                    }
                                </ul>
                                {
                                    props.stats.upcomingRents.length == 0 && (<p className="mt-1 p-3 text-sm text-gray-500">
                                    No Upcoming rents.
                                  </p>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal SetShowRoom={SetShowRoom} room={room} />

        </AuthenticatedLayout>
    );
};

export default Dashboard;
