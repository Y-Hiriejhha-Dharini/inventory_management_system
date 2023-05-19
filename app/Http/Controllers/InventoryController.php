<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function view()
    { 
        return Product::all()->where('status',0);
    }
}
