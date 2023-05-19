<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function last_product_code()
    {
        $product_code = Product::setproduct_code();
        return $product_code;
        
    }

    public function store_product()
    {
        // return request()->all();
        $product = request()->validate([
            'product_code' => 'required',
            'product_name' => 'required',
            'weight' => 'required',
            'price' => 'required',
            'qty' => 'required',
        ]);

        if($product)
        {
            // return [$product];
            $products = new Product();
            $products->product_code = $product['product_code'];
            $products->product_name = $product['product_name'];
            $products->weight = $product['weight'];
            $products->price = $product['price'];
            $products->qty = $product['qty'];
            $products->save();

            return ['Product successfully stored'];
        }else{
            return ['Product not stored'];
        }
    }

    public function edit_product(Product $Product)
    {
        return $Product;
        // return [$product];
    }

    public function update_product(Product $Product)
    {
        if($Product)
        {
            $Product->update([
                'product_code' => request()->product_code,
                'product_name' => request()->product_name,
                'weight' => request()->weight,
                'price' => request()->price,
                'qty' => request()->qty
            ]);

            return ['Product successfully stored'];
        }else{
            return ['Product not stored'];
        }
    }

    public function delete_product(Product $Product)
    {
        if($Product)
        {
            $Product->delete();;
            return ['Product Successfully Deleted'];
        }else{
            return ["Couldn't delete the product"];
        }

    }

    public function import_file()
    {
        
    }

    public function export_file()
    {
        
    }
}
