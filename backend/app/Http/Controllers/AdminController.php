<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function sessionCheck(Request $request)
    {
        return $request->session()->has('admin_id');
    }

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
            $password = $request->password;

            if (empty($admin_array)) {
                return ["error" => "情報が正しくありません"];
            }

            if (!password_verify($password,$admin_array->password)) {
                return ["error" => "情報が正しくありません"];
            }

            session(['admin_id' => $admin_array->admin_id]);

            return response()->json($admin_array);

        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }

    public function logOut(Request $request)
    {
        $request->session()->flush();
        if(!$request->session()->has('admin_id')){
            return response()->json(["success" => "Logoutが完了しました"]);
        }
    }
}
