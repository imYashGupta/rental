<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Room;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Property $property)
    {


        $rooms=Room::where("property_id",$property->id)->get();


       return Inertia::render('Rooms',["rooms" => $rooms,"property" => $property]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Property $property)
    {
        return Inertia::render('CreateRoom',["property" => $property]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Property $property)
    {
        $request->validate([
            "name" => ["string","required"],
            "description" => ["string","max:255"],
            "rental" => ["integer", "required"],
            "has_electricity_metered" => ["boolean"],
            "electricity_unit_rate" => ["required_if:has_electricity_metered,true", "numeric","nullable"],
            "initial_electricity_units" => ["required_if:has_electricity_metered,true", "integer", "nullable"],
        ]);

        $room = new Room();
        $room->name = $request->name;
        $room->user_id = auth()->user()->id;
        $room->description = $request->description;
        $room->property_id = $property->id;
        $room->rental = $request->rental;
        $room->has_electricity_metered = $request->has_electricity_metered;
        $room->electricity_unit_rate = $request->electricity_unit_rate;
        $room->initial_electricity_units = $request->initial_electricity_units;
        $room->recurring_charges = $request->recurring_charges;
        $room->save();
        return redirect()->route("property.rooms.index",$property->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property,Room $room)
    {
        return Inertia::render('EditRoom',["property" => $property,"room" => $room]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Property $property, Room $room)
    {
        $room->name = $request->name;
        $room->description = $request->description;
        $room->rental = $request->rental;
        $room->has_electricity_metered = $request->has_electricity_metered;
        $room->electricity_unit_rate = $request->electricity_unit_rate;
        $room->initial_electricity_units = $request->initial_electricity_units;
        $room->recurring_charges = $request->recurring_charges;
        $room->update();
        return redirect()->route("property.rooms.index",$room->property_id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        //
    }

    public function resetElectricity(Request $request,Room $room)
    {
        $userRoom=Room::where("user_id",auth()->user()->id)->where("id",$room->id)->first();
        if($userRoom){
            $userRoom->initial_electricity_units = $request->units;
            $userRoom->update();
            return response()->json(["message"=>"Meter Reset Successfully","room" => $userRoom],200);
        }
        return response()->json(["message"=>"Meter Reset Failed","room" => $room],400);
    }


}
