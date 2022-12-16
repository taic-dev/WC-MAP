<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Admin extends Model
{
    public function mail_check($request){
        return DB::table('admins')->where('mail',$request->email)->exists();
    }

    public function insert($request){
        $this->name = $request->input('name');
        $this->mail = $request->input('email');
        $this->password = Hash::make($request->input('password'));
        $this->created_at = now();
        $this->updated_at = now();
        return $this->save();
    }

    public function get_admin($request){
        $mail = $request->email;
        return Admin::where('mail','=',$mail)->first();
    }

}
