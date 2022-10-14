<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Room $room)
    {
        $transactions= Transaction::where("room_id",$room->id)->latest()->get();
        return Inertia::render('Transactions',["room" => $room,"transactions" => $transactions]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request,Room $room)
    {
        return Inertia::render('Transaction',["room" => $room,"vacant" => $request->vacant ? true : false]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Room $room)
    {
        $transaction = new Transaction();
        $transaction->type = $request->type;
        $transaction->room_id = $room->id;
        $transaction->user_id = auth()->user()->id;
        $transaction->electricity_units = $request->electricity_consumed + $room->initial_electricity_units;
        $transaction->electricity_units_rate = $room->electricity_unit_rate;
        $transaction->electricity_units_consumed = $request->electricity_consumed;
        $transaction->electricity_charges = $request->electricity_consumed * $room->electricity_unit_rate;
        $transaction->recurring_charges = $request->recurring_charges;
        $transaction->rent = $request->rent;
        $transaction->remark = $request->remark;
        $transaction->total_amount =  $request->recurring_charges + $request->rent + ($request->electricity_consumed * $room->electricity_unit_rate);
        $transaction->rent_of = $request->date;
        $room->initial_electricity_units = $request->electricity_consumed + $room->initial_electricity_units;
        $room->rental_date = $request->date;

        if($request->type=="VACANT"){
            $transaction->tenant_id = $room->user_id;
            $room->user_id = NULL;
        }
        if($request->type=="ADVANCE"){
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();
            $room->user_id = $user->id;
            $room->advance_rental = $transaction->total_amount;
            $room->update();
            $transaction->tenant_id = $room->user_id;
        }
        if($request->type=="REGULAR"){
            $transaction->tenant_id = $room->user_id;
        }
        $room->update();
        $transaction->save();
        return redirect()->route("property.rooms.index",$room->property_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        //
    }

    public function vacant(Room $room)
    {
        $room->user_id = NULL;
        $room->update();
    }
}
