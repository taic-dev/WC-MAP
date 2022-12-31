<?php

namespace App\Library;

use Illuminate\Support\Str;

class UpdateImageClass
{
    public function updateImage($request)
    {
        try{
            $image_array = [];
            $image_base64_array = $request->imageBase64;

            for($i=0;$i<count($image_base64_array);$i++){

                if(array_key_exists('toilet_id',$image_base64_array[$i])){
                    $image_array[] = $image_base64_array[$i]['image_url'];
                    continue;
                }
                
                list($file_info,$file_data) = explode(";",$image_base64_array[$i]['src']);
                $extension = explode('/', $file_info)[1];
                list(, $file_data) = explode(',', $file_data);
                $file_data = base64_decode($file_data);
                $image_name = md5(uniqid(rand(), true)). ".$extension";
                \File::put(storage_path(). '/app/public/' . $image_name , $file_data);
                $image_array[] = $image_name;
            }

            return $image_array;
        }catch(\Exception $e){
            return ["debug" => $e];
        }
    }

}

?>