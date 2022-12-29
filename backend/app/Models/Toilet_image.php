<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Toilet;

class Toilet_image extends Model
{
    public function insert($request,$image_array)
    {
        $toilet_image_array = [];
        $storage_path = "http://localhost:8000/storage/";
        for($i=0;$i<count($image_array);$i++){
            $toilet_image_array[$i]["toilet_id"] = $request->input('toilet_id');
            $toilet_image_array[$i]["image_url"] = $storage_path.$image_array[$i];
            $toilet_image_array[$i]["created_at"] = now();
            $toilet_image_array[$i]["updated_at"] = now();
        }

        return DB::table('toilet_images')->insert($toilet_image_array);
    }

    public function toilet(){
        return $this->belongsTo(Toilet::class,'toilet_id','toilet_id');
    }
}
