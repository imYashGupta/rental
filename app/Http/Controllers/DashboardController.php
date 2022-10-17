<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $currentMonth= Transaction::whereMonth('rent_of', '=', Carbon::now()->month)->sum("total_amount");
        $currentMonthElectricity= Transaction::whereMonth('rent_of', '=', Carbon::now()->month)->sum("electricity_charges");
        $lastMonthElectricity= Transaction::whereMonth('rent_of', '=', Carbon::now()->subMonth()->month)->sum("electricity_charges");
        $lastMonth= Transaction::whereMonth('rent_of', '=', Carbon::now()->subMonth()->month)->sum("total_amount");
        $currentYear= Transaction::whereYear('rent_of', '=', Carbon::now()->year)->sum("total_amount");
        $currentYearElectricity= Transaction::whereYear('rent_of', '=', Carbon::now()->year)->sum("electricity_charges");
        $lastYear= Transaction::whereYear('rent_of', '=', Carbon::now()->subYear()->year)->sum("total_amount");
        $lastYearElectricity= Transaction::whereYear('rent_of', '=', Carbon::now()->subYear()->year)->sum("electricity_charges");
        $all= Transaction::get()->groupBy(function($val) {
            return Carbon::parse($val->rent_of)->format('m-Y');
        });
        [
            "currentMonth" => $currentMonth,
            "currentMonthElectricity" => $currentMonthElectricity,
            "lastMonth" => $lastMonth,
            "lastMonthElectricity" => $lastMonthElectricity,
            "currentYear" => $currentYear,
            "currentYearElectricity" => $currentYearElectricity,
            "lastYear" => $lastYear,
            "lastYearElectricity" => $lastYearElectricity,
            "all" => $all,
        ];

        return Inertia::render("Dashboard");
    }

    public function myntra()
    {
        $response = Http::timeout(60)->get('http://www.myntra.com/gateway/v2/product/11391306');
        return $response->body();

    }
}
