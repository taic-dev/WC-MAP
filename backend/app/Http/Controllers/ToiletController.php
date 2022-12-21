<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Library\UpdateImageClass;
use App\Models\Toilet;
use App\Models\Toilet_image;

class ToiletController extends Controller
{

    public function addToilet(Request $request)
    {
        try{
            $toilet = new Toilet();
            $toilet_image = new Toilet_image();

            $insert = $toilet->insert($request);

            if(empty($request->imageBase64)){
                session()->flash('alert', ["success" => "登録が完了しました"]);
                return response()->json(["success" => "登録が完了しました"]);
                exit;
            }

            $image_array = UpdateImageClass::UpdateImage($request);

            // DBにパスを保存
            $insert_image = $toilet_image->insert($request,$image_array);

            if($insert_image != 1){
                return response()->json(["error" => "画像が登録できませんでした"]);
                exit;
            }
            
            // session_flashにメッセージを追加
            session()->flash('alert', ["success" => "登録が完了しました"]);
            return response()->json(["success" => "登録が完了しました"]);

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

    public function getToiletList()
    {
        try{
            return ["session" => session()->all()];
        }catch(\Exception $e){
            return $e;
        }
    }
}
