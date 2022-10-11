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

        if($request->type=="REGULAR" || $request->type=="VACANT"){
            $transaction = new Transaction();
            $transaction->type = $request->type;
            $transaction->room_id = $room->id;
            $transaction->tenant_id = $room->user_id;
            $transaction->user_id = auth()->user()->id;
            $transaction->electricity_units = $request->electricity_consumed + $room->initial_electricity_units;
            $transaction->electricity_units_consumed = $request->electricity_consumed;
            $transaction->electricity_charges = $request->electricity_consumed * $room->electricity_unit_rate;
            $transaction->recurring_charges = $request->recurring_charges;
            $transaction->rent = $request->rent;
            $transaction->remark = $request->remark;
            $transaction->total_amount =  $request->recurring_charges + $request->rent + ($request->electricity_consumed * $room->electricity_unit_rate);
            $transaction->rent_of = Carbon::parse($room->next_month["_date"])->toDateString();
            $transaction->save();
            $room->initial_electricity_units = $request->electricity_consumed + $room->initial_electricity_units;
            $room->rental_date = Carbon::parse($room->next_month["_date"])->toDateString();
            if($request->type=="VACANT"){
                $room->user_id = NULL;
            }
            $room->update();
            return redirect()->route("property.rooms.index",$room->property_id);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        $transaction = new Transaction();
        $transaction->room_id = $room->id;
        $transaction->tenant_id = $user->id;
        $transaction->user_id = auth()->user()->id;
        $transaction->type = "ADVANCED/ASSIGNED";
        $transaction->electricity_units = 0;
        $transaction->electricity_units_consumed = 0;
        $transaction->electricity_charges = 0;
        $transaction->recurring_charges = 0;
        $transaction->rent = $room->rental;
        $transaction->rent_of = Carbon::today()->toDateString();
        $transaction->remark = $request->remark;
        $transaction->total_amount = $transaction->electricity_charges + $transaction->recurring_charges + $transaction->rent;
        $transaction->save();

        $room->user_id = $user->id;
        $room->advance_rental = $transaction->total_amount;
        $room->rental_date = now()->toDateString();
        $room->update();
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
