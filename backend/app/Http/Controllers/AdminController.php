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
            $mail_check = DB::table('admins')->where('mail',$request->email)->exists();

            if($mail_check){
                return ["error" => "メールアドレスが既に使用されています"];
            }

            $admin->name = $request->input('name');
            $admin->mail = $request->input('email');
            $admin->password = Hash::make($request->input('password'));
            $admin->created_at = now();
            $admin->updated_at = now();
            $admin->save();
            return response()->json(["success" => "登録が完了しました"]);

        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }

    public function logIn(Request $request)
    { 
        try{
            $mail = $request->email;
            $password = $request->password;
            $admin_array = Admin::where('mail','=',$mail)->first();

            if (empty($admin_array)) {
                return ["error" => "情報が正しくありません"];
            }

            if (!password_verify($password,$admin_array->password)) {
                return ["error" => "情報が正しくありません"];
            }

            return response()->json($admin_array);

        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }
}
