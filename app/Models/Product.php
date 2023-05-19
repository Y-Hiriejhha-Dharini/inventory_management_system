<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    protected function setproduct_code() 
    {
        $product_count = DB::table('products')->count();

        if($product_count > 0) 
        {
            $pro_code = ['PRO/'.str_pad($product_count+1,5,0,STR_PAD_LEFT)];
        }else{
            $pro_code = 'PRO/00001';
        }
        return $pro_code;
    }

    // public function getPriceAttribute($value)
    // {
    //     return "Rs. ".$value;
    // }

    // public function setPriceAttribute($value)
    // {
    //     $this->attributes['price'] = substr($value, 4);
    // }
}
