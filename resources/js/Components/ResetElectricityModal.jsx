import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/inertia-react";
import InputGroup from "./InputGroup";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";

export default function Modal({
    electricityModal,
    setElectricityModal,
    setRoomData,
    setRoom,
    roomData,
    room,
    setShowNotification
}) {
    console.log(roomData)
    const [open, setOpen] = useState(electricityModal);

    useEffect(() => {
        setOpen(electricityModal ? true : false);
    }, [electricityModal]);

    const cancelButtonRef = useRef(null);

    const closeModal = () => {
        console.log("Model Close");
        setOpen(false);
        setElectricityModal(false);
    };

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
        units: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleReset = (e) => {
        e.preventDefault();

        console.log("pk");
        axios
            .post(route("resetElectricity", room.id), { units: data.units })
            .then((response) => {
                setRoomData({ ...roomData, electricity_units: data.units });
                setRoom(response.data.room);
                setElectricityModal(false);
                setShowNotification(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={closeModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0 ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-7xl">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                    <div className="sm:flex sm:items-start">
                                        <div className="py-4">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Reset Electricity Meter Units
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleReset}>
                                    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 text-center border-t flex justify-center items-center">
                                        <InputGroup
                                            type={"text"}
                                            required
                                            label="Units"
                                            InputClass={"w-full ml-2"}
                                            name="units"
                                            value={data.units}
                                            onHandleChange={onHandleChange}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex text-right  sm:px-6">
                                        <PrimaryButton
                                            type="submit"
                                        >
                                            Reset
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
