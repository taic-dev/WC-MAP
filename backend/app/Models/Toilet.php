<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Toilet extends Model
{
    public function insert($request){
        $this->admin_id = session("admin_id");
        $this->toilet_id = $request->input('toilet_id');
        $this->toilet_name = $request->input('name');
        $this->latitude = $request->input('lat');
        $this->longitude = $request->input('lng');
        $this->price = $request->input('price');
        $this->cleanliness = $request->input('clean');
        $this->private_room_num = $request->input('privateRoomNum');
        $this->private_room_type = $request->input('privateRoomType');
        $this->is_washlet = $request->input('washlet');
        $this->is_multi_purpose_room = $request->input('multiPurposeRoom');
        $this->description = $request->input('description');
        $this->created_at = now();
        $this->updated_at = now();
        return $this->save();
    }
}
