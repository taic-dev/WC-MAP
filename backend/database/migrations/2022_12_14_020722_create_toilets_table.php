<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToiletsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('toilets', function (Blueprint $table) {
            $table->increments("id");
            $table->biginteger("admin_id")->unique();
            $table->biginteger("toilet_id")->unique();
            $table->string("toilet_name");
            $table->double("latitude",9,7);
            $table->double("longitude",10,7);
            $table->string("price");
            $table->string("cleanliness");
            $table->integer("private_room_num");
            $table->string("private_room_type");
            $table->boolean("is_washlet");
            $table->boolean("is_multi_purpose_room");
            $table->string("description",);
            $table->timestamp("deleted_at")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('toilets');
    }
}
