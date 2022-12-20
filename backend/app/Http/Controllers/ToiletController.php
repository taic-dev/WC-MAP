<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Http\Request;
use App\Models\Toilet;
use App\Models\Toilet_image;

class ToiletController extends Controller
{

    public function addToilet(Request $request)
    {
        try{
            $toilet = new Toilet();
            $insert = $toilet->insert($request);

            
        }catch(\Exception $e){
            return ["test" => $e];
        }
    }

    public function getToiletNum()
    {
        try{
            $admin_id = session('admin_id');
            return ["session" => $admin_id];
        }catch(\Exception $e){
            return $e;
        }
    }
}
