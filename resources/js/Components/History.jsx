import React, { useState } from 'react';

export default function History({transaction,room}) {
    const [show, setShow] = useState(false);

  return (
    <>
        <div className="list-items border-b  bg-white shadow-sm sm:rounded-lg my-1 md:p-6 p-4">
            <div className="flex flex-row items-center justify-between ">
                <h2 className="font-semibold ">{transaction.rent_month} <span className="text-sm font-normal">(Paid on {new Date(transaction.created_at).toLocaleDateString()})</span> - ₹{transaction.total_amount}</h2>
                <button onClick={() => setShow(v => !v)}  type="button" className="inline-flex items-center ml-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    {
                        show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg> :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    }
                </button>
            </div>
            <div className={`transition ease-in-out duration-150 ${!show && "hidden " } ` }>
                <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                    <div className="text-sm">Electricity Consumed: <span className="text-black">{transaction.electricity_units_consumed} units x ₹{transaction.electricity_unit_rate}</span> </div>
                    <div className="text-sm">₹{transaction.electricity_charges}</div>
                </div>
                <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                    <div className="text-sm">Recurring Charges: </div>
                    <div className="text-sm">₹{transaction.recurring_charges}</div>
                </div>
                <div className="mt-4 flex flex-row justify-between uppercase text-gray-500">
                    <div className="text-sm">Rent: </div>
                    <div className="text-sm">₹{transaction.rent}</div>
                </div>
                <div className="mt-2 flex flex-row justify-between pt-2 border-t border-gray-400">
                    <div className="text-sm font-semibold uppercase">Total: </div>
                    <div className="text-sm">₹{transaction.total_amount}</div>
                </div>
                {transaction.remark && <p className="mt-4 text-gray-500"><span className="uppercase">Remark:</span>{transaction.remark}</p>}
            </div>
        </div>
    </>
  );
}
