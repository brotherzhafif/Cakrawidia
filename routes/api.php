<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AuthController;  

Route::middleware('web')->group(function () {
    // Rute autentikasi (Login, Logout)
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth');
    
    // Rute yang memerlukan autentikasi pengguna
    Route::middleware('auth')->group(function () {
        Route::apiResource('users', UserController::class);
        Route::apiResource('topics', TopicController::class);
        Route::apiResource('questions', QuestionController::class);
        Route::apiResource('answers', AnswerController::class);

        Route::get('likes', [LikeController::class, 'index']);
        Route::get('likes/{entityType}/{entityId}', [LikeController::class, 'getLikesByEntity']);
        Route::post('likes', [LikeController::class, 'store']);
        Route::delete('likes/{id}', [LikeController::class, 'destroy']);
    });
});

// Endpoint untuk mendapatkan informasi pengguna yang sedang login
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth');
