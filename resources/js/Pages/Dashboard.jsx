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

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const getChangeDiff = (current, previous) => {
    if (previous == 0) {
        previous = 1;
    }
    return Math.round((parseInt(current) / parseInt(previous)) * 100 - 100);
};

const positions = [
    {
        id: 1,
        title: "Room 1",
        type: "Delayed:3 Days",
        location: "Remote",
        department: "Jagroop Sharma",
        closeDate: "2020-01-07",
        closeDateFull: "January 7, 2020",
    },
    {
        id: 2,
        title: "Front End Developer",
        type: "Full-time",
        location: "Remote",
        department: "Engineering",
        closeDate: "2020-01-07",
        closeDateFull: "January 7, 2020",
    },
    {
        id: 3,
        title: "User Interface Designer",
        type: "Full-time",
        location: "Remote",
        department: "Design",
        closeDate: "2020-01-14",
        closeDateFull: "January 14, 2020",
    },
];
const Dashboard = (props) => {
    const [enabledAnnually, setEnabledAnnually] = React.useState(false);

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
        },
        {
            name: "Electricity",
            stat: props.stats.currentMonthElectricity,
            previousStat: enabledAnnually
                ? props.stats.lastYearElectricity
                : props.stats.currentMonthElectricity,
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
        },
    ];
    console.log();

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<Header title="Dashboard" actionButton={{text:"Properties",url:route("property.index")}} />}
        >
            <Head title="Dashboard" />
            <div className="py-6">
                <section className="list-container">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                        <div className="flex">
                        <div className="bg-white px-4 py-5 border-b border-gray-200  max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Monthly
                        </h3>
                    </div>

                            <Switch.Group
                                as="div"
                                className="flex items-center"
                            >
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
                                <Switch.Label as="span" className="ml-3">
                                    <span className="text-sm font-medium text-gray-900">
                                        Switch to Annually
                                    </span>
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                            {stats.map((item) => (
                                <div
                                    key={item.name}
                                    className="px-4 py-5 sm:p-6"
                                >
                                    <dt className="text-base font-normal text-gray-900">
                                        {item.name}
                                    </dt>
                                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                            ₹{item.stat}
                                            <span className="ml-2 text-sm font-medium text-gray-500">
                                                from ₹{item.previousStat}
                                            </span>
                                        </div>

                                        <div
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
                                        </div>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="bg-white px-4 py-5 border-b border-gray-200  max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Upcoming Rent
                        </h3>
                    </div>

                    <div className="bg-white shadow overflow-hidden sm:rounded-md  max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                        <ul className="divide-y  divide-gray-200">
                            {positions.map((position) => (
                                <li key={position.id}>
                                    <a
                                        href="#"
                                        className="block hover:bg-gray-50"
                                    >
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-indigo-600 truncate">
                                                    {position.title}{" "}
                                                    <span className="text-xs text-green-800">
                                                        - 1 BHK with Balcony
                                                    </span>
                                                </p>
                                                <div className="ml-2 flex-shrink-0 flex">
                                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {position.type}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        <UserCircleIcon
                                                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        {position.department}
                                                    </p>
                                                </div>
                                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                    <CalendarIcon
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <p>
                                                        Next Rent on{" "}
                                                        <time
                                                            dateTime={
                                                                position.closeDate
                                                            }
                                                        >
                                                            {
                                                                position.closeDateFull
                                                            }
                                                        </time>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
