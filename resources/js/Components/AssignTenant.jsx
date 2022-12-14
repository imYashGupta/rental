import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputGroup from "./InputGroup";
import axios from "axios";
import ResetElectricityModal from "./ResetElectricityModal";
import { result } from "lodash";
import Notification from "./Notification";
export default function AssignTenant({ room: _room, type }) {
    // console.log(room)

    // console.log(room)
    const [room, setRoom] = React.useState(_room);
    const [electricityModal, setElectricityModal] = React.useState(false);
    const [showNotification, setShowNotification] = React.useState(false);
    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform,
        reset,
        clearErrors,
    } = useForm({
        name: "",
        email: "",
        phone: "",
        date:
            type != "ADVANCE"
                ? room.next_month._date.toString().substr(0, 10)
                : "",
        remark: "",
        electricity_units: room.initial_electricity_units,
        electricity_consumed: 0,
        recurring_charges: room.recurring_charges,
        rent: type == "VACANT" ? 0 : room.rental,
        total: room.recurring_charges + (type == "VACANT" ? 0 : room.rental),
        type: type,
        balance: room.balance,
        amount_collected:
            room.balance +
            room.recurring_charges +
            (type == "VACANT" ? 0 : room.rental),
        //-465 + 35 + 4500
    });

    /* const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    }; */

    const onHandleChange = (event) => {
        // console.log(event.target.name)
        let input = isNaN(parseInt(event.target.value))
            ? 0
            : parseInt(event.target.value);
        if (event.target.name == "electricity_units") {
            let electricity_units_consumed =
                event.target.value - room.initial_electricity_units;
            let total =
                data.recurring_charges +
                data.rent +
                (isNaN(electricity_units_consumed)
                    ? 0
                    : electricity_units_consumed) *
                    parseInt(room.electricity_unit_rate);
            // console.log(total,room.balance)
            setData({
                ...data,
                total: total,
                electricity_consumed: electricity_units_consumed,
                electricity_units: event.target.value,
                amount_collected: total + room.balance,
            });
        } else if (event.target.name == "recurring_charges") {
            let total =
                (isNaN(input) ? 0 : input) +
                data.rent +
                data.electricity_consumed *
                    parseInt(room.electricity_unit_rate);
            setData({
                ...data,
                total: total,
                recurring_charges: input,
                amount_collected: total + room.balance,
                balance: data.amount_collected - data.total,
            });
        } else if (event.target.name == "rent") {
            let total =
                data.recurring_charges +
                (isNaN(input) ? 0 : input) +
                data.electricity_consumed *
                    parseInt(room.electricity_unit_rate);
            setData({
                ...data,
                total: total,
                rent: input,
                amount_collected: total + room.balance,
                balance: total - total + room.balance,
            });
        } else if (event.target.name == "amount_collected") {
            setData({
                ...data,
                amount_collected: input,
                balance: data.total + room.balance - input,
            });
        } else {
            setData(
                event.target.name,
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // return;
        post(route("rooms.transaction.store", room.id));
    };

    /*     React.useEffect(() => {

    },[room]); */

    const onElectricityReset = () => {
        setElectricityModal(true);
        return;
        axios
            .post(route("resetElectricity", room.id))
            .then((response) => {
                console.log(response.data.room);
                setData({ ...data, electricity_units: 0 });
                setRoom(response.data.room);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Notification
                heading={"Success!"}
                message={"Electricity Meter Reset Successfully!"}
                showNotification={showNotification}
                setShowNotification={setShowNotification}
            />
            <ResetElectricityModal
                setShowNotification={setShowNotification}
                room={room}
                setRoomData={setData}
                setRoom={setRoom}
                roomData={data}
                setElectricityModal={setElectricityModal}
                electricityModal={electricityModal}
            />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-4 py-4">
                <form onSubmit={submit}>
                    <div className="flex flex-row justify-between items-start">
                        <h3 className="mb-4">
                            {type == "ADVANCE" ? (
                                "Assign Tenant with Advanced Rent"
                            ) : (
                                <>
                                    Submit{" "}
                                    <strong>{room.next_month.month}</strong>{" "}
                                    Rent
                                </>
                            )}
                        </h3>
                        {/* <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Regular
                        </span> */}
                    </div>
                    {type == "ADVANCE" && (
                        <>
                            <div className="mb-4 flex ">
                                <div className="mr-1 md:w-full">
                                    <InputGroup
                                        type={"text"}
                                        required
                                        label="Name"
                                        name="name"
                                        InputClass={"w-full"}
                                        value={data.name}
                                        onHandleChange={onHandleChange}
                                        errors={errors}
                                    />
                                </div>
                                <div className="ml-1 md:w-full">
                                    <InputGroup
                                        type={"text"}
                                        required
                                        label="Phone Number"
                                        InputClass={"w-full"}
                                        name="phone"
                                        value={data.phone}
                                        onHandleChange={onHandleChange}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex ">
                                <div className="mr-1 md:w-full">
                                    <InputGroup
                                        type={"email"}
                                        required
                                        label="Email"
                                        InputClass={"w-full"}
                                        name="email"
                                        value={data.email}
                                        onHandleChange={onHandleChange}
                                        errors={errors}
                                    />
                                </div>
                                <div className="ml-1 md:w-full ">
                                    <InputGroup
                                        type={"date"}
                                        required
                                        label="Rental Date"
                                        InputClass={"w-full"}
                                        name="date"
                                        value={data.date}
                                        onHandleChange={onHandleChange}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup
                            type="number"
                            min={room.initial_electricity_units}
                            required
                            label={
                                type == "ADVANCE" ? (
                                    <>
                                        Starting Electricity Units In Meter :{" "}
                                        <br />
                                        <span
                                            onClick={() => onElectricityReset()}
                                            className="text-blue-500 cursor-pointer"
                                        >
                                            Reset
                                        </span>
                                    </>
                                ) : (
                                    "Electricity Units In Meter"
                                )
                            }
                            InputClass={"mt-1 block w-32 md:w-3/4 text-base"}
                            name="electricity_units"
                            value={data.electricity_units}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup
                            type="number"
                            required
                            label="Electricity Consumed:"
                            disabled={true}
                            InputClass={
                                "mt-1 block w-32 md:w-3/4 text-base bg-gray-200"
                            }
                            name="electricity_consumed"
                            value={data.electricity_consumed}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup
                            type="number"
                            required
                            label="Recurring Charges:"
                            InputClass={"mt-1 block w-32 md:w-3/4 text-base"}
                            name="recurring_charges"
                            value={data.recurring_charges}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between mb-4">
                        <InputGroup
                            type="number"
                            required
                            label="Basic Rent:"
                            InputClass={"mt-1 block w-32 md:w-3/4 text-base"}
                            name="rent"
                            value={data.rent}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <h1 className="text-right flex justify-between uppercase">
                            <span>Total Rent:</span>{" "}
                            <span className="font-extrabold">
                                ???{data.total}
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4">
                        <InputGroup
                            type="number"
                            disabled={true}
                            label="Balance Amount"
                            InputClass={`mt-1 block w-32 md:w-3/4 text-base ${
                                data.balance > 0 && "bg-red-100"
                            } ${data.balance < 0 && "bg-green-100"} ${
                                data.balance == 0 && "bg-gray-200"
                            }`}
                            name="balance"
                            value={data.balance}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 mb-4">
                        <InputGroup
                            type="number"
                            required
                            label="Amount to be Collected:"
                            InputClass={"mt-1 block w-32 md:w-3/4 text-base"}
                            name="amount_collected"
                            value={data.amount_collected}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="mt-4">
                        <InputGroup
                            type="text"
                            label="Remark (optional):"
                            InputClass={"w-full"}
                            name="remark"
                            value={data.remark}
                            onHandleChange={onHandleChange}
                            errors={errors}
                        />
                    </div>
                    <div className="mt-4">
                        <PrimaryButton processing={processing}>
                            SUBMIT
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
