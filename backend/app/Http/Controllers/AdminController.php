<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function signUp(Request $request)
    {
        try{
            $post = new Admin();
            $post->name = $request->input('name');
            $post->mail = $request->input('email');
            $post->password = Hash::make($request->input('password'));
            $post->created_at = now();
            $post->updated_at = now();
            $post->save();
            return response()->json(Admin::all());
        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }

    public function logIn(Request $request)
    {
        
        try{
            $mail = $request['email'];
            $password = $request['password'];
            $admin_array = Admin::where('mail','=',$mail)->first();
            return response()->json($admin_array);

        }catch(\Exception $e){
            return ["error" => "情報が正しくありません"];
        }
    }
}
