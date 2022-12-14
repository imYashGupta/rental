<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $currentMonth= Transaction::whereMonth('rent_of', '=', Carbon::now()->month)->sum("amount_collected");
        $currentMonthElectricity= Transaction::whereMonth('rent_of', '=', Carbon::now()->month)->sum("electricity_charges");
        // return  Carbon::now()->subMonthNoOverflow()->month;
        $lastMonthElectricity= Transaction::whereMonth('rent_of', '=', Carbon::now()->subMonthNoOverflow()->month)->sum("electricity_charges");
        $lastMonth= Transaction::whereMonth('rent_of', '=', Carbon::now()->subMonthNoOverflow()->month)->sum("amount_collected");
        $currentYear= Transaction::whereYear('rent_of', '=', Carbon::now()->year)->sum("amount_collected");
        $currentYearElectricity= Transaction::whereYear('rent_of', '=', Carbon::now()->year)->sum("electricity_charges");
        $lastYear= Transaction::whereYear('rent_of', '=', Carbon::now()->subYearNoOverflow()->year)->sum("amount_collected");
        $lastYearElectricity= Transaction::whereYear('rent_of', '=', Carbon::now()->subYearNoOverflow()->year)->sum("electricity_charges");
        $totalIncome= Transaction::where("user_id",auth()->id())->sum("amount_collected");
         $all= Transaction::get()->groupBy(function($val) {
            return Carbon::parse($val->rent_of)->format('m-Y');
        });

        // return Room::all();

        $upcomingRents=Room::whereNotNull("user_id")->limit(3)->get();
        $rooms= Room::where("user_id",auth()->user()->id)->get();
        $dueRent = $rooms->pluck("next_month")->whereNotNull()->pluck("remaining")->sum();
       $stats=[
            "currentMonth" => $currentMonth,
            "currentMonthElectricity" => $currentMonthElectricity,
            "lastMonth" => $lastMonth,
            "lastMonthElectricity" => $lastMonthElectricity,
            "currentYear" => $currentYear,
            "currentYearElectricity" => $currentYearElectricity,
            "lastYear" => $lastYear,
            "lastYearElectricity" => $lastYearElectricity,
            "all" => $all,
            "total" => $totalIncome,
            "start_date" => $all?->first()?->first()?->rent_month,
            "upcomingRents" => $upcomingRents,
            "dueRent" => $dueRent
        ];

        return Inertia::render("Dashboard",["stats" => $stats]);
    }

    public function myntra()
    {
        $response = Http::timeout(60)->get('http://www.myntra.com/gateway/v2/product/11391306');
        return $response->body();

    }
}
