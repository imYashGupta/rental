<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    use HasFactory;
    protected $appends = ["next_month","tenant"];

    public function getNextMonthAttribute()
    {
        if(!is_null($this->rental_date)){
            if(!is_null($this->tenant_id)){
                // return $this->id;
                $transaction = Transaction::where("room_id",$this->id)
                                ->where("tenant_id",$this->tenant_id)
                                ->latest()
                                ->first();
                if($transaction){
                    //  $month=$transaction->created_at->format("m");
                    $futureDate = Carbon::parse($transaction->rent_of)->copy()->addMonthNoOverflow();
                     //$paidOn = Carbon::create(null, $month, $this->rental_date);
                    //$futureDate = $paidOn->copy()->addMonthNoOverflow();

                    $days = Carbon::today()->diffInDays($futureDate,false);
                    return [
                        "days" => $days,
                        // "days_remain_text" => $days > 0 ? "$days days left" : "Delayed by ".abs($days)." day",
                        "date" => $futureDate->format("d M, Y"),
                        "month" => $futureDate->format("F"),
                        "_date"=> $futureDate
                    ];
                }
            }

        }
        else{
            return "";
        }
    }

    public function getTenantAttribute()
    {
        if(!is_null($this->tenant_id)){
            return User::find($this->tenant_id);
        }
        return false;
    }


}
