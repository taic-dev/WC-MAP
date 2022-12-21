<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Toilet_image extends Model
{
    public function insert($request,$image_array)
    {
        $toilet_image_array = [];
        for($i=0;$i<count($image_array);$i++){
            $toilet_image_array[$i]["toilet_id"] = $request->input('toilet_id');
            $toilet_image_array[$i]["image_url"] = $image_array[$i];
            $toilet_image_array[$i]["created_at"] = now();
            $toilet_image_array[$i]["updated_at"] = now();
        }

        return DB::table('toilet_images')-> insert($toilet_image_array);
    }
}
