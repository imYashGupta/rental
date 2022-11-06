<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $appends = ["rent_month",""];

    public function getRentMonthAttribute()
    {
        return Carbon::parse($this->rent_of)->format("d F,y");
    }

    public function tenant()
    {
        return $this->hasOne(User::class,"id","tenant_id");
    }

}
