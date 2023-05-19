<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('inventory')->group(function(){
    Route::get('/view',[InventoryController::class,'view']);
});

Route::prefix('products')->group(function(){
    Route::get('/last_product_code',[ProductController::class,'last_product_code']);
    Route::post('/store_product',[ProductController::class,'store_product']);
    Route::get('/edit_product/{Product:id}',[ProductController::class,'edit_product']);
    Route::post('/store_product/{Product}',[ProductController::class,'update_product']);
    Route::get('/delete_product/{Product:id}',[ProductController::class,'delete_product']);
    Route::post('/import_file',[ProductController::class,'import_file']);
    Route::post('/export_file',[ProductController::class,'export_file']);
});

Route::prefix('users')->group(function(){
    Route::post('/register',[UserController::class,'register']);
    Route::post('/login',[UserController::class,'login']);
});

Route::prefix('purchase_order')->group(function(){
    Route::get('/last_po_code',[PurchaseOrderController::class,'last_po_code']);
});

Route::prefix('customer')->group(function(){
    Route::get('/cus_name',[CustomerController::class,'getCustomer']);
});
