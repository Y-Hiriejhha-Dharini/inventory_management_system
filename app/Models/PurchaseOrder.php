<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected function set_po_code() 
    {
        $po_count = $this->count();
        if($po_count > 0) 
        {
            $po_code = ['PRO/'.str_pad($po_count+1,5,0,STR_PAD_LEFT)];
        }else{
            $po_code = 'PRO/00001';
        }
        return $po_code;
    }
}
