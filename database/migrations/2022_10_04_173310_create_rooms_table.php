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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->integer("property_id");
            $table->string("name");
            $table->integer("user_id")->nullable();
            $table->string("description")->nullable();
            $table->integer("rental");
            $table->integer("advance_rental")->nullable();
            $table->integer("recurring_charges")->default(0);
            $table->date("rental_date")->nullable();
            $table->tinyInteger("has_electricity_metered")->nullable();
            $table->double("electricity_unit_rate",9,2)->nullable();
            $table->integer("initial_electricity_units")->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
};
