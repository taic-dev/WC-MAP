<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Toilet;
use Carbon\Carbon;

class Toilet_image extends Model
{
    public function insert($request,$image_array)
    {
        $toilet_image_array = [];
        $storage_path = "http://localhost:8000/storage/";

        for($i=0;$i<count($image_array);$i++){
            $toilet_image_array[$i]["toilet_id"] = $request->input('toilet_id');
            if(strpos($image_array[$i],$storage_path) === false){
                $toilet_image_array[$i]["image_url"] = $storage_path.$image_array[$i];
            }else{
                $toilet_image_array[$i]["image_url"] = $image_array[$i];
            }
            $toilet_image_array[$i]["created_at"] = now();
            $toilet_image_array[$i]["updated_at"] = now();
        }
        
        return DB::table('toilet_images')->insert($toilet_image_array);
    }

    public function deleteImages($toilet_id)
    {
        return Toilet_image::where('toilet_id', $toilet_id)->update(['deleted_at' => Carbon::now()]);
    }

    public function toilet()
    {
        return $this->belongsTo(Toilet::class,'toilet_id','toilet_id');
    }
}
