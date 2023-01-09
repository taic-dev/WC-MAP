<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Toilet;
use App\Models\Toilet_image;
use Carbon\Carbon;

class Toilet extends Model
{
    public function insert($request)
    {
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

    public function allToilet(){
        return Toilet::with('toiletImage')
        ->orderBy('id', 'desc')
        ->get();
    }

    public function myToilet($admin_id){
        return Toilet::all()
        ->where('admin_id','=',$admin_id)
        ->whereNull('deleted_at');
    }
    
    public function myPostToilet($admin_id){
        return Toilet::with('toiletImage')
        ->orderBy('id', 'desc')
        ->where('admin_id',$admin_id)
        ->whereNull('deleted_at')
        ->get();
    }

    public function updateToilet($request)
    {
        Toilet::where('toilet_id', $request->input('toilet_id'))->update([
            'toilet_name' => $request->input('name'),
            'latitude' => $request->input('lat'),
            'longitude' => $request->input('lng'),
            'price' => $request->input('price'),
            'cleanliness' => $request->input('cleanliness'),
            'private_room_num' => $request->input('private_room_num'),
            'private_room_type' => $request->input('private_room_type'),
            'is_washlet' => $request->input('washlet'),
            'is_multi_purpose_room' => $request->input('multi_purpose_room'),
            'description' => $request->input('description')
        ]);
    }
    
    public function deleteToilet($request){
        $toilet_id = $request->input('toilet_id');
        $admin_id = session('admin_id');
        Toilet::where('toilet_id', $toilet_id)->update(['deleted_at' => Carbon::now()]);
        return $this->myPostToilet($admin_id);
    }

    public function toiletImage(){
        return $this->hasMany(Toilet_image::class,'toilet_id','toilet_id')->whereNull('deleted_at');
    }

}
