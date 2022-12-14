<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("admin_id");
            $table->string("name");
            $table->string("mail");
            $table->string("password");
            $table->timestamp("deleted_at")->nullable();
            $table->timestamps();
            $table->unique(['id','admin_id','mail']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
