<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Library\UpdateImageClass;
use App\Models\Admin;
use App\Models\Toilet;
use App\Models\Toilet_image;

class ToiletController extends Controller
{
    public function getToiletNum()
    {
        try{
            $admin = new Admin();
            $toilet = new Toilet();
            $admin_id = session('admin_id');
            $user_name = $admin->get_admin($admin_id);
            $all_toilet_num = count($toilet->allToilet($admin_id));
            $my_post_toilet_num = count($toilet->myToilet($admin_id));
            return response()->json([
                "toilet_info" => [
                    "user_name" => $user_name->name, 
                    "all_toilet_num" => $all_toilet_num, 
                    "my_post_toilet_num" => $my_post_toilet_num
                ]
            ]);
        }catch(\Exception $e){
            return $e;
        }
    }

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

    public function getToiletList()
    {
        try{
            $toilet = new Toilet();
            $toilet_image = new Toilet_image();
            $admin_id = session('admin_id');
            $my_post_toilet = $toilet->myPostToilet($admin_id);
            return response()->json(["toiletInfo" => $my_post_toilet,"session" => session()->all()]);
        }catch(\Exception $e){
            return $e;
        }
    }

    public function deleteToilet(Request $request)
    {
        try{
            $toilet = new Toilet();
            $admin_id = session('admin_id');
            $my_post_toilet = $toilet->deleteToilet($request);
            return response()->json(["toiletInfo" => $my_post_toilet]);
        }catch(\Exception $e){
            return $e;
        }
    }

    public function updateToilet(Request $request)
    {
        try{
            $toilet = new Toilet();
            $toilet_image = new Toilet_image();
            $toilet_image->deleteImages($request->toilet_id);

            if(empty($request->imageBase64)){
                session()->flash('alert', ["success" => "登録が完了しました"]);
                return response()->json([
                    "success" => "登録が完了しました",
                    "session" => session()->all()
                ]);
                exit;
            }

            $image_array = UpdateImageClass::UpdateImage($request);
            $toilet->updateToilet($request);
            $debug = $toilet_image->insert($request, $image_array);
            session()->flash('alert', ["success" => "編集が完了しました"]);
            return response()->json([
                "success" => "編集が完了しました",
                "session" => session()->all()
            ]);
        }catch(\Exception $e){
            return $e;
        }
    }
}
