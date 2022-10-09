<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->integer("room_id");
            $table->integer("tenant_id");
            $table->integer("user_id");
            $table->string("type");
            $table->integer("electricity_units")->nullable();
            $table->integer("electricity_charges")->nullable();
            $table->integer("electricity_units_consumed")->nullable();

            $table->integer("recurring_charges")->nullable();
            $table->integer("rent");
            $table->string("remark")->nullable();
            $table->integer("total_amount");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
