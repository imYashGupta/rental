<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tenant extends Model
{
    use HasFactory;

    protected function createdBy(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => User::find($value),
            set: fn ($value) => auth()->user()->id,
        );
    }
}
