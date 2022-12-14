<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard',[DashboardController::class,"dashboard"])->name('dashboard');
    Route::resource("property",PropertyController::class);
    Route::resource("property.rooms",RoomController::class);
    Route::resource("rooms.transaction",TransactionController::class);
    Route::get("rooms/{room}/vacant",[TransactionController::class,"vacant"])->name("vacant");
    Route::post("rooms/{room}/reset-electricity",[RoomController::class,"resetElectricity"])->name("resetElectricity");
});
Route::get("myntra",[DashboardController::class,"myntra"])->name("myntra");

require __DIR__.'/auth.php';
