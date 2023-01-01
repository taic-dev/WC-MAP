<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ToiletController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['api','cors']], function(){
    Route::post('signup',[AdminController::class, 'signUp']);
    Route::post('login',[AdminController::class, 'logIn']);
    Route::post('post',[ToiletController::class, 'addToilet']);
    Route::get('admin',[ToiletController::class, 'getToiletNum']);
    Route::get('archive',[ToiletController::class, 'getToiletList']);
    Route::get('delete/{id}',[ToiletController::class, 'deleteToilet']);
    Route::post('update',[ToiletController::class, 'updateToilet']);
});