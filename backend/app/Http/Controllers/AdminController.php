<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function signUp(Request $request)
    {
        try{
            $admin = new Admin();

            $mail_check = $admin->mail_check($request);
            if($mail_check){
                return ["error" => "メールアドレスが既に使用されています"];
            }

            $insert = $admin->insert($request);
            if(!$insert){
                return ["error" => "情報が正しくありません"];
            }

            return response()->json(["success" => "登録が完了しました"]);

        }catch(\Exception $e){
            return ["error" => "サインアップできませんでした"];
        }
    }

    public function logIn(Request $request)
    { 
        try{
            $admin = new Admin();
            $admin_array = $admin->get_admin($request);

            if (empty($admin_array)) {
                return ["error" => "情報が正しくありません"];
            }

            $password = $request->password;
            if (!password_verify($password,$admin_array->password)) {
                return ["error" => "情報が正しくありません"];
            }

            return response()->json($admin_array);

        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }
}
