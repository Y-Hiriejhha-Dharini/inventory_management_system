<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;

class PurchaseOrderController extends Controller
{
    public function last_po_code()
    {
        $po_code = PurchaseOrder::set_po_code();
        return $po_code;
    }
}
